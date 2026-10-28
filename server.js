const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8088;
const PUBLIC_DIR = __dirname;

// Centralized Master Channel State (Shared across all viewers in real time)
const ChannelBroadcastState = {
  isLive: false,
  liveSource: null, // 'j2cast' | 'tiktok'
  liveStreamUrl: '',
  currentIndex: 0,
  updatedAt: new Date().toISOString(),
  playlist: [
    {
      id: "yt-rise",
      title: "Rise - Eric Kupper VRemix By djklmr Ft Samantha James & Eric Kupper",
      artist: "djklmr Ft Samantha James & Eric Kupper",
      genre: "SOULFUL HOUSE / VOCAL CLUB",
      source: "youtube",
      youtubeId: "EuKtIiPC3DA",
      duration: 384
    },
    {
      id: "yt-tiesto",
      title: "La Noche VREMIX By DJKLMR & DJ TIESTO",
      artist: "DJKLMR & DJ Tiesto",
      genre: "ELECTRO HOUSE / MAIN STAGE",
      source: "youtube",
      youtubeId: "r7Tf_hgvH3c",
      duration: 310
    },
    {
      id: "yt-toy-story",
      title: "Toy Story 5 Trailer Song, Never Tears Us Apart INXS VRemix By djklmr",
      artist: "INXS (VRemix By djklmr)",
      genre: "SYNTHPOP / DANCE VREMIX",
      source: "youtube",
      youtubeId: "kkTj9x4kCC8",
      duration: 255
    },
    {
      id: "yt-vamos",
      title: "Vamos a vivir - Videoclip Oficial",
      artist: "DJ KLMR",
      genre: "TRIBAL / LATIN TECHNO",
      source: "youtube",
      youtubeId: "7CmxP78alCk",
      duration: 240
    },
    {
      id: "yt-sunshine",
      title: "Sunshine Afro Costa",
      artist: "djklmr Afro Sessions",
      genre: "AFRO HOUSE / MELODIC",
      source: "youtube",
      youtubeId: "EIHrIGpwTUE",
      duration: 320
    },
    {
      id: "yt-queen-fisher",
      title: "Queen Vs Fisher - Bohemian Rhapsody Vs Losing It (Mashup VRemix)",
      artist: "Fisher vs Queen (Mashup by djklmr)",
      genre: "TECH HOUSE / PEAK TIME",
      source: "youtube",
      youtubeId: "o4hPLMtAjMM",
      duration: 290
    },
    {
      id: "drive-pool",
      title: "ZAMNA TULUM - Deep Tech Soundscapes (Master Pool Drive)",
      artist: "DJ KLMR Live Pool",
      genre: "DEEP HOUSE / AFRO TECH",
      source: "drive",
      fileId: "1yJNNnYunY956qiRH_qFP2nySL1sXXssH",
      driveUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4",
      duration: 480
    }
  ]
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

  // API 1: Get Centralized Channel Status
  if (sanitizedUrl === '/api/channel/status') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    const currentTrack = ChannelBroadcastState.playlist[ChannelBroadcastState.currentIndex] || ChannelBroadcastState.playlist[0];
    res.end(JSON.stringify({
      ...ChannelBroadcastState,
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

  if (sanitizedUrl === '/') sanitizedUrl = '/index.html';

  const filePath = path.join(PUBLIC_DIR, sanitizedUrl);

  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end('Acceso denegado');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Recurso no encontrado');
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
  console.log(`📺 Frontend Público (Espectadores): http://localhost:${PORT}`);
  console.log(`🎛️ Backend MCR (Operador / Control): http://localhost:${PORT}/admin`);
  console.log('===========================================================');
});
