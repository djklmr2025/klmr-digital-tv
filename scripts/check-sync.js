#!/usr/bin/env node
/**
 * Guards the "one channel" promise: Web (app.js) and Roku (/api/channel/feed) must use the same
 * catalog and the same rotation engine, so they air the same video at the same second.
 */
const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT = path.resolve(__dirname, '..');
const app = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8');
const feedSrc = fs.readFileSync(path.join(ROOT, 'api', 'channel', 'feed.js'), 'utf8');
const active = JSON.parse(fs.readFileSync(path.join(ROOT, 'catalog', 'active.json'), 'utf8'));

function engine(src) {
  const start = src.indexOf('function mulberry32');
  const end = src.indexOf('// ═', src.indexOf('function getSmartPlayoutQueue'));
  assert(start >= 0 && end > start, 'rotation engine not found');
  return src.slice(start, end);
}

function fallback(src) {
  const key = 'const BroadcastPlaylist = [';
  const st = src.indexOf(key) + key.length - 1;
  let depth = 0;
  for (let i = st; i < src.length; i++) {
    if (src[i] === '[') depth++;
    else if (src[i] === ']' && --depth === 0) return JSON.parse(src.slice(st, i + 1));
  }
  throw new Error('BroadcastPlaylist not found');
}

const squash = (s) => s.replace(/\/\/.*$/gm, '').replace(/\s+/g, ' ').trim();
assert.strictEqual(squash(engine(app)), squash(engine(feedSrc)), 'rotation engine differs between app.js and feed.js');
assert(feedSrc.includes("require('../../catalog/active.json')"), 'feed.js must read catalog/active.json');
assert(app.includes('fetch("/catalog/active.json"'), 'app.js must load catalog/active.json');
assert.deepStrictEqual(fallback(app).map((t) => t.id), active.map((t) => t.id),
  'app.js fallback is stale: run node scripts/catalog.js check');

// Same airing track for a spread of instants (feed's own math).
const run = Function(`${engine(feedSrc)}; return getSmartPlayoutQueue;`)();
const total = active.reduce((s, t) => s + (t.duration || 260), 0);
for (let k = 0; k < 50; k++) {
  const now = 1794000000 + k * 7919;
  const q = run(active, now, total);
  assert.strictEqual(q.length, active.length);
}
console.log(`sync OK: ${active.length} tracks, same engine and catalog on Web and Roku.`);
