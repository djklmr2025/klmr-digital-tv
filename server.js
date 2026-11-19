const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8088;
const PUBLIC_DIR = __dirname;
const ACTIVE_CATALOG_PATH = path.join(__dirname, 'catalog', 'active.json');

function loadActiveCatalog() {
  const tracks = JSON.parse(fs.readFileSync(ACTIVE_CATALOG_PATH, 'utf8'));
  const youtubeCount = tracks.filter((t) => String(t.id || '').startsWith('yt-')).length;
  const driveCount = tracks.length - youtubeCount;
  console.log(`[SUCCESS] Loaded ${tracks.length} videos from catalog/active.json`);
  console.log(`[STARTUP] Serving {youtube: ${youtubeCount}, drive: ${driveCount}}`);
  return tracks;
}

// Centralized Master Channel State — Single Source of Truth from catalog/active.json
const ChannelBroadcastState = {
  isLive: false,
  liveSource: null,
  liveStreamUrl: '',
  currentIndex: 0,
  updatedAt: new Date().toISOString(),
  playlist: loadActiveCatalog()
};

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.mp3': 'audio/mpeg'
};

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  let sanitizedUrl = req.url.split('?')[0];

  // API: IPTV M3U Playlist Generator
  if (sanitizedUrl === '/playlist.m3u' || sanitizedUrl === '/tv.m3u' || sanitizedUrl === '/api/channel/playlist') {
    const host = req.headers['host'] || 'klmr-digital-tv.vercel.app';
    const proto = req.headers['x-forwarded-proto'] || 'http';
    const baseUrl = `${proto}://${host}`;
    const acceptHeader = req.headers['accept'] || '';

    // Si lo abre un navegador web ordinario, redirigir al reproductor /embed
    if (acceptHeader.includes('text/html') && !req.url.includes('download=1')) {
      res.writeHead(302, { Location: '/embed' });
      res.end();
      return;
    }

    res.writeHead(200, {
      'Content-Type': 'audio/x-mpegurl; charset=utf-8',
      'Content-Disposition': 'inline; filename="klmr-channel.m3u"',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300'
    });
    const m3u = `#EXTM3U
#EXTINF:-1 tvg-id="KLMR.HD" tvg-name="KLMR DIGITAL TV HD" tvg-logo="${baseUrl}/assets/logo-chrome-3d.png" group-title="Música 24/7",KLMR OFFICIAL CHANNEL HD • Electronic Music TV 24/7
${baseUrl}/embed
`;
    res.end(m3u);
    return;
  }

  // Route: Embed player mode
  if (sanitizedUrl === '/embed') {
    sanitizedUrl = '/index.html';
  }

  // API: Get Dynamic Cloud Playout Feed
  if (sanitizedUrl === '/api/channel/feed') {
    console.log(`[API] /api/channel/feed requested | videos: ${ChannelBroadcastState.playlist.length}`);
    const feedHandler = require('./api/channel/feed');
    feedHandler(req, res);
    return;
  }

  // API 1: Get Centralized Channel Status with Linear FAST calculation
  if (sanitizedUrl === '/api/channel/status') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    ChannelBroadcastState.playlist = JSON.parse(fs.readFileSync(ACTIVE_CATALOG_PATH, 'utf8'));
    const totalDuration = ChannelBroadcastState.playlist.reduce((acc, t) => acc + (t.duration || 260), 0);
    const nowSeconds = Math.floor(Date.now() / 1000);
    let cyclePosition = nowSeconds % totalDuration;
    let activeIndex = 0;
    let seekSeconds = 0;

    for (let i = 0; i < ChannelBroadcastState.playlist.length; i++) {
      const dur = ChannelBroadcastState.playlist[i].duration || 260;
      if (cyclePosition < dur) {
        activeIndex = i;
        seekSeconds = Math.floor(cyclePosition);
        break;
      }
      cyclePosition -= dur;
    }

    const currentTrack = ChannelBroadcastState.playlist[activeIndex] || ChannelBroadcastState.playlist[0];
    res.end(JSON.stringify({
      ...ChannelBroadcastState,
      currentIndex: activeIndex,
      seekSeconds: seekSeconds,
      currentTrack
    }));
    return;
  }

  // API 2: Master Control Room Backend Command (Operator Control)
  if (sanitizedUrl === '/api/channel/update' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body || '{}');
        if (payload.action === 'change_track' && typeof payload.index === 'number') {
          ChannelBroadcastState.currentIndex = payload.index;
          ChannelBroadcastState.isLive = false;
        } else if (payload.action === 'start_live_audio') {
          ChannelBroadcastState.isLive = true;
          ChannelBroadcastState.liveSource = 'j2cast';
          ChannelBroadcastState.liveStreamUrl = payload.streamUrl || 'https://stream.zeno.fm/f3wvbbqmdg8uv';
        } else if (payload.action === 'start_live_video') {
          ChannelBroadcastState.isLive = true;
          ChannelBroadcastState.liveSource = 'tiktok';
          ChannelBroadcastState.liveStreamUrl = payload.streamUrl || '';
        } else if (payload.action === 'restore_autodj') {
          ChannelBroadcastState.isLive = false;
          ChannelBroadcastState.liveSource = null;
        }
        ChannelBroadcastState.updatedAt = new Date().toISOString();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, state: ChannelBroadcastState }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Payload JSON invalido' }));
      }
    });
    return;
  }

  // Route: Admin MCR Panel
  if (sanitizedUrl === '/admin') {
    sanitizedUrl = '/admin.html';
  }

  // Route: Dutch & Nordic CTV Sponsor Portal
  if (sanitizedUrl === '/nl' || sanitizedUrl === '/nederland' || sanitizedUrl === '/nordics' || sanitizedUrl === '/sponsors') {
    sanitizedUrl = '/nl.html';
  }

  if (sanitizedUrl === '/') sanitizedUrl = '/index.html';

  const relPath = sanitizedUrl.replace(/^\/+/, '');
  let filePath = path.join(__dirname, relPath);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(process.cwd(), relPath);
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(`404 Recurso no encontrado: ${sanitizedUrl}`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': 'no-cache'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('===========================================================');
  console.log(`📡 KLMR OFFICIAL CHANNEL HD - MASTER SERVER ACTIVO`);
  console.log(`📺 Frontend Público: http://localhost:${PORT}`);
  console.log(`🎛️ Backend MCR: http://localhost:${PORT}/admin`);
  console.log('===========================================================');
});
