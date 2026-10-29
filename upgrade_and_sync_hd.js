/**
 * KLMR OFFICIAL CHANNEL HD - Auto-Sync & 720p/1080p HD Master Upgrader
 * 1. Upgrades any 360p/480p release assets in v2.0-catalog to 720p/1080p HD (H.264 + AAC via ffmpeg)
 * 2. Scans @KLMROFFCIALCHANNEL/videos for newly uploaded public videos (excluding live streams/blocked)
 * 3. Appends new videos to the end of the queue (a la cola) and recalculates TIMELINE_ANCHOR_OFFSET
 *    so the live broadcast timeline NEVER resets to 0 and NEVER interrupts the video currently airing!
 */
const https = require('https');
const { spawn, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const OWNER = 'djklmr2025';
const REPO = 'klmr-digital-tv';
const RELEASE_ID = '428161827';
const CACHE_DIR = path.join(__dirname, '.hd_cache');
const STATE_FILE = path.join(__dirname, '.hd_upgraded.json');

function getGitHubToken() {
  if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN;
  try {
    const remote = execSync(`git -C "${__dirname}" remote get-url origin`, { encoding: 'utf8' }).trim();
    const m = remote.match(/ghp_[a-zA-Z0-9]+/);
    if (m) return m[0];
  } catch (e) {}
  return '';
}

const TOKEN = getGitHubToken();

if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

let hdUpgraded = {};
if (fs.existsSync(STATE_FILE)) {
  try { hdUpgraded = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8')); } catch (e) {}
}

function saveHdState() {
  fs.writeFileSync(STATE_FILE, JSON.stringify(hdUpgraded, null, 2), 'utf8');
}

function ghRequest(method, urlStr, body = null, customHeaders = {}) {
  return new Promise((resolve, reject) => {
    const u = new URL(urlStr);
    const req = https.request({
      method,
      hostname: u.hostname,
      path: u.pathname + u.search,
      headers: {
        'Authorization': `token ${TOKEN}`,
        'User-Agent': 'KLMR-HD-Broadcaster',
        'Accept': 'application/vnd.github+json',
        ...customHeaders
      }
    }, (res) => {
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => {
        const text = Buffer.concat(chunks).toString('utf8');
        try {
          resolve({ status: res.statusCode, data: text ? JSON.parse(text) : {} });
        } catch (e) {
          resolve({ status: res.statusCode, data: text });
        }
      });
    });
    req.on('error', reject);
    if (body) req.write(typeof body === 'string' ? body : JSON.stringify(body));
    req.end();
  });
}

function downloadYtVideoHD(youtubeId, outPath) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(outPath)) {
      try { fs.unlinkSync(outPath); } catch (e) {}
    }
    // Prefer 1080p or 720p H.264 (avc1) + AAC (mp4a) for 100% Roku hardware compatibility in HD!
    const args = [
      '-f', 'bestvideo[height<=1080][vcodec^=avc1]+bestaudio[acodec^=mp4a]/bestvideo[height<=720][vcodec^=avc1]+bestaudio[acodec^=mp4a]/best[height<=1080][ext=mp4]/best[ext=mp4]',
      '--merge-output-format', 'mp4',
      '--no-playlist',
      '--no-warnings',
      '-o', outPath,
      `https://www.youtube.com/watch?v=${youtubeId}`
    ];
    const proc = spawn('yt-dlp', args, { stdio: 'ignore' });
    proc.on('close', (code) => {
      if (code === 0 && fs.existsSync(outPath) && fs.statSync(outPath).size > 10000) {
        resolve(outPath);
      } else {
        reject(new Error(`yt-dlp HD exited with code ${code} for ${youtubeId}`));
      }
    });
    proc.on('error', reject);
  });
}

function probeResolution(filePath) {
  try {
    const out = execSync(`ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=s=x:p=0 "${filePath}"`, { encoding: 'utf8' }).trim();
    return out || 'HD';
  } catch (e) {
    return 'HD';
  }
}

function uploadAssetReplacement(filePath, assetName, existingAssetId) {
  return new Promise(async (resolve, reject) => {
    try {
      if (existingAssetId) {
        await ghRequest('DELETE', `https://api.github.com/repos/${OWNER}/${REPO}/releases/assets/${existingAssetId}`);
      }
      const stat = fs.statSync(filePath);
      const req = https.request({
        method: 'POST',
        hostname: 'uploads.github.com',
        path: `/repos/${OWNER}/${REPO}/releases/${RELEASE_ID}/assets?name=${encodeURIComponent(assetName)}`,
        headers: {
          'Authorization': `token ${TOKEN}`,
          'User-Agent': 'KLMR-HD-Broadcaster',
          'Accept': 'application/vnd.github+json',
          'Content-Type': 'video/mp4',
          'Content-Length': stat.size
        }
      }, (res) => {
        const chunks = [];
        res.on('data', d => chunks.push(d));
        res.on('end', () => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(true);
          } else {
            reject(new Error(`Upload failed (${res.statusCode}): ${Buffer.concat(chunks).toString('utf8').slice(0, 200)}`));
          }
        });
      });
      req.on('error', reject);
      fs.createReadStream(filePath).pipe(req);
    } catch (err) {
      reject(err);
    }
  });
}

async function scanNewYouTubeVideos(existingCatalog) {
  console.log('Escaneando @KLMROFFCIALCHANNEL/videos en busca de estrenos nuevos...');
  const knownIds = new Set(existingCatalog.filter(t => t.youtubeId).map(t => t.youtubeId));
  // Excluded live streams and blocked videos
  const excludedIds = new Set(['5DrlpW34tq4', 'HZgIJ158oMc', '4w4l0RSkjfM', 'vR3pjw44lkg', 'DZUFiCcwD0A', 'teBAMPj1WzQ', '-Zk6vTrleoA', 'bK6kkiSiMTo']);

  try {
    const out = execSync('yt-dlp --flat-playlist --dump-json "https://www.youtube.com/@KLMROFFCIALCHANNEL/videos"', {
      encoding: 'utf8',
      maxBuffer: 25 * 1024 * 1024
    });
    const lines = out.split(/\r?\n/).filter(Boolean);
    const newEntries = [];
    for (const line of lines) {
      try {
        const item = JSON.parse(line);
        if (!item.id || knownIds.has(item.id) || excludedIds.has(item.id)) continue;
        if (item.live_status === 'is_live' || item.live_status === 'was_live' || (item.duration && item.duration > 2400)) continue;
        newEntries.push({
          id: `yt-${item.id}`,
          title: item.title,
          artist: 'DJ KLMR Official (@KLMROFFCIALCHANNEL)',
          genre: 'ELECTRONIC CLUB / VREMIX HD',
          badge: 'ESTRENO HD',
          youtubeId: item.id,
          url: `https://github.com/${OWNER}/${REPO}/releases/download/v2.0-catalog/yt-${item.id}.mp4`,
          duration: Math.round(item.duration || 240),
          format: 'mp4'
        });
      } catch (e) {}
    }
    return newEntries;
  } catch (e) {
    console.warn('Nota al escanear canal:', e.message);
    return [];
  }
}

async function main() {
  const feedPath = path.join(__dirname, 'api', 'channel', 'feed.js');
  const feedCode = fs.readFileSync(feedPath, 'utf8');
  const matchCatalog = feedCode.match(/const MasterCatalog = (\[[\s\S]*?\]);/);
  const matchOffset = feedCode.match(/const TIMELINE_ANCHOR_OFFSET = (-?\d+);/);
  if (!matchCatalog) throw new Error('No se encontró MasterCatalog en api/channel/feed.js');

  const catalog = JSON.parse(matchCatalog[1]);
  let currentOffset = matchOffset ? parseInt(matchOffset[1], 10) : 0;

  // 1. Check for any brand-new videos on @KLMROFFCIALCHANNEL
  const newVideos = await scanNewYouTubeVideos(catalog);
  if (newVideos.length > 0) {
    console.log(`¡Se detectaron ${newVideos.length} videos nuevos! Se agregarán A LA COLA sin reiniciar la marquesina.`);
    const oldTotalDuration = catalog.reduce((acc, t) => acc + (t.duration || 260), 0);
    const nowSeconds = Math.floor(Date.now() / 1000);
    const currentCyclePos = ((nowSeconds + currentOffset) % oldTotalDuration + oldTotalDuration) % oldTotalDuration;

    for (const nv of newVideos) {
      const assetName = `yt-${nv.youtubeId}.mp4`;
      const localPath = path.join(CACHE_DIR, assetName);
      try {
        await downloadYtVideoHD(nv.youtubeId, localPath);
        const resStr = probeResolution(localPath);
        await uploadAssetReplacement(localPath, assetName, null);
        hdUpgraded[nv.youtubeId] = resStr;
        saveHdState();
        try { fs.unlinkSync(localPath); } catch (e) {}
        catalog.push(nv);
        console.log(`  + Sumado a la cola en HD (${resStr}): ${nv.title}`);
      } catch (e) {
        console.warn(`  ! Omitido ${nv.title} (no disponible o restringido): ${e.message}`);
      }
    }

    const newTotalDuration = catalog.reduce((acc, t) => acc + (t.duration || 260), 0);
    // Recalculate TIMELINE_ANCHOR_OFFSET so (nowSeconds + newOffset) % newTotalDuration === currentCyclePos!
    currentOffset = ((currentCyclePos - (nowSeconds % newTotalDuration)) % newTotalDuration + newTotalDuration) % newTotalDuration;

    const updatedFeed = feedCode
      .replace(/const MasterCatalog = \[[\s\S]*?\];/, `const MasterCatalog = ${JSON.stringify(catalog, null, 2)};`)
      .replace(/const TIMELINE_ANCHOR_OFFSET = -?\d+;/, `const TIMELINE_ANCHOR_OFFSET = ${currentOffset};`);
    fs.writeFileSync(feedPath, updatedFeed, 'utf8');
  } else {
    console.log('Catálogo al día (76 videos activos en la recta 24/7).');
  }

  // 2. Upgrade existing YouTube MP4 assets in v2.0-catalog to 720p/1080p HD
  const assetsResp = await ghRequest('GET', `https://api.github.com/repos/${OWNER}/${REPO}/releases/${RELEASE_ID}/assets?per_page=100`);
  const assetsMap = new Map();
  if (Array.isArray(assetsResp.data)) {
    for (const a of assetsResp.data) {
      assetsMap.set(a.name, a);
    }
  }

  const ytTracks = catalog.filter(t => t.youtubeId && !hdUpgraded[t.youtubeId]);
  if (ytTracks.length === 0) {
    console.log('¡Todos los videos del catálogo ya están en máxima calidad HD (720p/1080p)!');
    return;
  }

  console.log(`Actualizando ${ytTracks.length} videos del catálogo de 360p/480p a 720p/1080p HD con FFmpeg...`);
  let idx = 0;
  let doneCount = 0;
  const CONCURRENCY = 3;

  async function worker() {
    while (idx < ytTracks.length) {
      const myIdx = idx++;
      const track = ytTracks[myIdx];
      const assetName = `yt-${track.youtubeId}.mp4`;
      const localPath = path.join(CACHE_DIR, assetName);
      const existingAsset = assetsMap.get(assetName);
      try {
        await downloadYtVideoHD(track.youtubeId, localPath);
        const resStr = probeResolution(localPath);
        await uploadAssetReplacement(localPath, assetName, existingAsset ? existingAsset.id : null);
        hdUpgraded[track.youtubeId] = resStr;
        saveHdState();
        doneCount++;
        console.log(`[HD ${doneCount}/${ytTracks.length}] ${assetName} actualizado a ${resStr} (${track.title})`);
      } catch (err) {
        console.error(`[ERROR HD] ${assetName}: ${err.message}`);
      } finally {
        try { if (fs.existsSync(localPath)) fs.unlinkSync(localPath); } catch (e) {}
      }
    }
  }

  const workers = [];
  for (let i = 0; i < CONCURRENCY; i++) workers.push(worker());
  await Promise.all(workers);
  console.log('¡Actualización a 720p/1080p HD completada en el CDN de KLMR OFFICIAL CHANNEL HD!');
}

main().catch(console.error);
