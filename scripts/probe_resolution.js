#!/usr/bin/env node
/**
 * Reads the real video resolution of every on-air track (ffprobe over HTTP, no download) and
 * lists the ones below MIN_HEIGHT. Usage: node scripts/probe_resolution.js [minHeight=720] [--json out.json]
 */
const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');

const FFPROBE = process.env.FFPROBE || 'C:/Users/Arkaios/AppData/Local/Microsoft/WinGet/Packages/Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe/ffmpeg-9.0.2-full_build/bin/ffprobe.exe';
const MIN_HEIGHT = Number(process.argv[2]) || 720;
const jsonOut = process.argv.includes('--json') ? process.argv[process.argv.indexOf('--json') + 1] : null;
const active = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'catalog', 'active.json'), 'utf8'));

function probe(url) {
  return new Promise((resolve) => {
    execFile(FFPROBE, ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height',
      '-of', 'csv=p=0', url], { timeout: 60000 }, (err, out) => {
      const [w, h] = String(out || '').trim().split(',').map(Number);
      resolve(err || !h ? null : { width: w, height: h });
    });
  });
}

(async () => {
  const results = [];
  let next = 0;
  async function worker() {
    while (next < active.length) {
      const t = active[next++];
      results.push({ id: t.id, title: t.title, ...(await probe(t.url || t.mp4Url)) });
    }
  }
  await Promise.all(Array.from({ length: 10 }, worker));
  const low = results.filter((r) => !r.height || Math.min(r.width, r.height) < MIN_HEIGHT);
  for (const r of low) console.log(`${r.height ? `${r.width}x${r.height}` : 'SIN LECTURA'}\t${r.id}\t${r.title}`);
  console.log(`${results.length} medidos, ${low.length} por debajo de ${MIN_HEIGHT}p.`);
  if (jsonOut) fs.writeFileSync(jsonOut, JSON.stringify(results, null, 1));
})();
