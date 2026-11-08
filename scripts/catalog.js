#!/usr/bin/env node
/**
 * KLMR catalog tool — one list for Web and Roku.
 *
 *   node scripts/catalog.js check                 validate catalog/active.json and refresh the app.js fallback
 *   node scripts/catalog.js retire <id> "motivo"   move a track from active.json to retired.json (media is NOT deleted)
 *   node scripts/catalog.js restore <id>           bring a retired track back to the end of active.json
 *   node scripts/catalog.js list-retired
 *
 * catalog/active.json is the playout: /api/channel/feed (Roku) requires it and app.js (web) fetches it.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const ACTIVE = path.join(ROOT, 'catalog', 'active.json');
const RETIRED = path.join(ROOT, 'catalog', 'retired.json');
const APP = path.join(ROOT, 'app.js');
const FALLBACK_START = 'const BroadcastPlaylist = [';

const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const writeJson = (file, data) => fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');

function validate(list) {
  const ids = new Set();
  for (const t of list) {
    if (!t.id || !t.title || !t.url || !(t.duration > 0)) throw new Error(`entrada inválida: ${JSON.stringify(t).slice(0, 120)}`);
    if (ids.has(t.id)) throw new Error(`id duplicado: ${t.id}`);
    ids.add(t.id);
  }
}

function writeAppFallback(list) {
  const src = fs.readFileSync(APP, 'utf8');
  const start = src.indexOf(FALLBACK_START);
  if (start < 0) throw new Error('no encuentro BroadcastPlaylist en app.js');
  let depth = 0;
  let end = -1;
  for (let i = start + FALLBACK_START.length - 1; i < src.length; i++) {
    if (src[i] === '[') depth++;
    else if (src[i] === ']' && --depth === 0) { end = i; break; }
  }
  const body = JSON.stringify(list, null, 2);
  const next = src.slice(0, start) + 'const BroadcastPlaylist = ' + body + src.slice(end + 1);
  if (next !== src) fs.writeFileSync(APP, next);
}

// Roku HD floor: encoded frame at least 720 px on its short side. Unknown size = not verified.
const isHd = (t) => Math.min(t.width || 0, t.height || 0) >= 720;

function checkResolution(active) {
  const low = active.filter((t) => !isHd(t));
  if (low.length) throw new Error(`por debajo de 720p o sin medir: ${low.map((t) => `${t.id} ${t.width}x${t.height}`).join(', ')}`);
}

function check() {
  const active = readJson(ACTIVE);
  const retired = readJson(RETIRED);
  validate(active);
  checkResolution(active);
  const overlap = active.filter((t) => retired.some((r) => r.track.id === t.id));
  if (overlap.length) throw new Error(`activos y retirados a la vez: ${overlap.map((t) => t.id).join(', ')}`);
  writeAppFallback(active);
  const hours = active.reduce((s, t) => s + t.duration, 0) / 3600;
  console.log(`OK: ${active.length} activos (${hours.toFixed(2)} h por ciclo), ${retired.length} en reserva.`);
}

function retire(id, reason) {
  if (!id || !reason) throw new Error('uso: retire <id> "motivo"');
  const active = readJson(ACTIVE);
  const idx = active.findIndex((t) => t.id === id);
  if (idx < 0) throw new Error(`${id} no está activo`);
  const retired = readJson(RETIRED);
  retired.push({ track: active[idx], reason, retiredAt: new Date().toISOString().slice(0, 10) });
  writeJson(ACTIVE, active.filter((_, i) => i !== idx));
  writeJson(RETIRED, retired);
  console.log(`Retirado (en reserva): ${active[idx].title}`);
  check();
}

function restore(id) {
  const retired = readJson(RETIRED);
  const entry = retired.find((r) => r.track.id === id);
  if (!entry) throw new Error(`${id} no está en reserva`);
  writeJson(ACTIVE, [...readJson(ACTIVE), entry.track]);
  writeJson(RETIRED, retired.filter((r) => r !== entry));
  console.log(`Reintegrado: ${entry.track.title}`);
  check();
}

function listRetired() {
  for (const r of readJson(RETIRED)) console.log(`${r.track.id}\t${r.retiredAt}\t${r.track.title}\t— ${r.reason}`);
}

const [cmd, ...args] = process.argv.slice(2);
const commands = { check, retire: () => retire(args[0], args[1]), restore: () => restore(args[0]), 'list-retired': listRetired };
try {
  if (!commands[cmd]) throw new Error('comandos: check | retire <id> "motivo" | restore <id> | list-retired');
  commands[cmd]();
} catch (err) {
  console.error('ERROR:', err.message);
  process.exit(1);
}
