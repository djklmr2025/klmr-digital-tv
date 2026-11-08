/**
 * KLMR OFFICIAL CHANNEL HD - Continuous 24/7 Linear Playout Feed API (1:1 Mirror for Roku TV & Web OTT)
 * Includes 72 Official YouTube HD Remixes + 204 Pure Electronic Google Drive Vault Tracks (276 Total)
 * Plus Dutch/European CTV Sponsored Spots & VAST/VMAP Monetization Engine (Azerion / Improve Digital Ready)
 */
// Single source of truth shared with the web player (app.js fetches /catalog/active.json).
// Retired tracks live in catalog/retired.json; manage both with scripts/catalog.js.
const MasterCatalog = require('../../catalog/active.json').map((t) => ({
  id: t.id,
  title: t.title,
  artist: t.artist,
  genre: t.genre,
  badge: t.badge,
  youtubeId: t.youtubeId || null,
  url: t.url,
  duration: t.duration,
  format: t.format || 'mp4'
}));

/**
 * Dutch / European CTV Sponsored Spots Queue (Azerion / Improve Digital / Direct Brand Sponsors)
 * When active spots are added here (or via KLMR_SPONSOR_SPOT_URL env var), the playout engine
 * automatically interleaves a sponsored spot every SPONSOR_INTERVAL_TRACKS music videos
 * across Roku TV and Web OTT without requiring a Roku .pkg rebuild.
 */
const SponsoredSpots = process.env.KLMR_SPONSOR_SPOT_URL ? [
  {
    id: "sponsor-spot-primary",
    title: process.env.KLMR_SPONSOR_TITLE || "KLMR Official Partner Spot",
    artist: process.env.KLMR_SPONSOR_BRAND || "Presented by KLMR Europe & Azerion CTV",
    genre: "SPONSORED SPOT / CTV AD",
    badge: "PATROCINADOR OFICIAL",
    youtubeId: null,
    url: process.env.KLMR_SPONSOR_SPOT_URL,
    duration: parseInt(process.env.KLMR_SPONSOR_DURATION || "15", 10),
    format: "mp4",
    isSponsoredSpot: true
  }
] : [];

const SPONSOR_INTERVAL_TRACKS = parseInt(process.env.KLMR_SPONSOR_INTERVAL || "6", 10);


// ═══════════════════════════════════════════════════════════════════════════
// KLMR SMART ROTATION ENGINE v1.0 — Deterministic Seeded Shuffle per Cycle
// ═══════════════════════════════════════════════════════════════════════════
// Algoritmo: Cycle 0 = Parrilla original. Cycle N>0 = Permutación Mulberry32 PRNG
// con semilla basada en el número de ciclo. Todos los dispositivos (Roku + Web)
// calculan idénticamente el mismo orden porque la semilla deriva del tiempo Unix global.
// Regla de separación de artistas: nunca 2 del mismo artista consecutivos.
// ═══════════════════════════════════════════════════════════════════════════

function mulberry32(seed) {
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function shuffleWithSeed(arr, seed) {
  const list = arr.slice();
  const rng = mulberry32(seed * 10007 + 42);
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = list[i]; list[i] = list[j]; list[j] = tmp;
  }
  // Regla de separación de artistas
  for (let i = 0; i < list.length - 1; i++) {
    const a1 = (list[i].artist || list[i].title || '').slice(0, 25).toLowerCase();
    const a2 = (list[i + 1].artist || list[i + 1].title || '').slice(0, 25).toLowerCase();
    if (a1 && a2 && a1 === a2) {
      let swapIdx = -1;
      for (let k = i + 2; k < Math.min(list.length, i + 12); k++) {
        const ak = (list[k].artist || list[k].title || '').slice(0, 25).toLowerCase();
        if (ak !== a1) { swapIdx = k; break; }
      }
      if (swapIdx !== -1) {
        const tmp = list[i + 1]; list[i + 1] = list[swapIdx]; list[swapIdx] = tmp;
      }
    }
  }
  return list;
}

function getSmartPlayoutQueue(baseCatalog, nowSeconds, totalDuration) {
  const cycleNumber = Math.floor(nowSeconds / totalDuration);
  if (cycleNumber === 0) return baseCatalog.slice();
  return shuffleWithSeed(baseCatalog, cycleNumber);
}
// ════════════════════════════════════ FIN SMART ROTATION ENGINE ════════════

function buildEffectiveBroadcastQueue() {
  if (!SponsoredSpots || SponsoredSpots.length === 0) {
    return MasterCatalog;
  }
  const queue = [];
  let spotIdx = 0;
  for (let i = 0; i < MasterCatalog.length; i++) {
    queue.push(MasterCatalog[i]);
    if ((i + 1) % SPONSOR_INTERVAL_TRACKS === 0) {
      const spot = SponsoredSpots[spotIdx % SponsoredSpots.length];
      queue.push({
        ...spot,
        id: `${spot.id}-slot-${i + 1}`
      });
      spotIdx++;
    }
  }
  return queue;
}

// Rotation anchor: the unix second when the current extras window went on air. The offset makes
// that instant the start of the list, so each rotation begins at track 1 (Roku honors timelineAnchorOffset).
const SCHEDULE = require('../../catalog/schedule.json');
function anchorOffset(totalDuration) {
  const anchor = Number(SCHEDULE.anchor) || 0;
  return ((totalDuration - (anchor % totalDuration)) % totalDuration + totalDuration) % totalDuration;
}

const SHOUTCAST_STATS_URL = 'http://uk5freenew.listen2myradio.com:15853/stats?sid=1&json=1';

async function checkShoutcastLive() {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);
    const r = await fetch(SHOUTCAST_STATS_URL, { signal: controller.signal });
    clearTimeout(timeout);
    const stats = await r.json();
    return stats.streamstatus === 1;
  } catch {
    return false;
  }
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  const isLive = await checkShoutcastLive();

  const baseCatalog = buildEffectiveBroadcastQueue();
  const totalDuration = baseCatalog.reduce((acc, t) => acc + (t.duration || 260), 0);
  const TIMELINE_ANCHOR_OFFSET = anchorOffset(totalDuration);
  const nowSeconds = Math.floor(Date.now() / 1000);
  const effectivePlaylist = getSmartPlayoutQueue(baseCatalog, nowSeconds + TIMELINE_ANCHOR_OFFSET, totalDuration);
  let cyclePosition = ((nowSeconds + TIMELINE_ANCHOR_OFFSET) % totalDuration + totalDuration) % totalDuration;
  let activeIndex = 0;
  let seekSeconds = 0;

  for (let i = 0; i < effectivePlaylist.length; i++) {
    const dur = effectivePlaylist[i].duration || 260;
    if (cyclePosition < dur) {
      activeIndex = i;
      seekSeconds = Math.floor(cyclePosition);
      break;
    }
    cyclePosition -= dur;
  }

  const currentTrack = effectivePlaylist[activeIndex] || effectivePlaylist[0];

  const activeCycleNumber = Math.floor((nowSeconds + TIMELINE_ANCHOR_OFFSET) / totalDuration);
  res.status(200).json({
    channel: "KLMR OFFICIAL CHANNEL HD",
    cycleNumber: activeCycleNumber,
    domainMirror: "https://klmr-digital-tv.vercel.app/",
    subDomainMirror: "https://djklmr2025.github.io/klmr-tv/",
    status: "online",
    isLive: isLive,
    serverEpochSeconds: nowSeconds,
    timelineAnchorOffset: TIMELINE_ANCHOR_OFFSET,
    totalDurationSeconds: totalDuration,
    totalTracks: effectivePlaylist.length,
    currentIndex: activeIndex,
    seekSeconds: seekSeconds,
    currentTrack: currentTrack,
    nextTrack: effectivePlaylist[(activeIndex + 1) % effectivePlaylist.length],
    adMonetization: {
      ssaiReady: true,
      vastVersion: "4.2",
      preferredNetworks: ["Azerion", "Improve Digital", "Targetspot Benelux", "Roku Direct CTV"],
      sponsoredSpotsActive: SponsoredSpots.length > 0,
      sponsorIntervalTracks: SPONSOR_INTERVAL_TRACKS,
      vastTagUrl: process.env.KLMR_VAST_TAG_URL || null
    },
    playlist: effectivePlaylist
  });
};
