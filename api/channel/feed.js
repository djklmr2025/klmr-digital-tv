/**
 * KLMR OFFICIAL CHANNEL HD - Dynamic Playout Feed API
 * Serves synchronized, direct linear stream playlist for Roku TV & Web OTT
 */

const MasterCatalog = [
  {
    id: "klmr-intro",
    title: "KLMR Official HD Channel Intro & Station ID",
    artist: "DJ KLMR Official",
    url: "https://klmr-digital-tv.vercel.app/assets/intro.mp4",
    duration: 30,
    format: "mp4"
  },
  {
    id: "drive-annihilation",
    title: "Annihilation - Visuals 60fps",
    artist: "DJ KLMR Visuals",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4",
    duration: 180,
    format: "mp4"
  },
  {
    id: "drive-zamna-tulum",
    title: "ZAMNA TULUM - Deep Tech Soundscapes",
    artist: "DJ KLMR Live Pool",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    duration: 480,
    format: "mp4"
  },
  {
    id: "drive-miki-stay-with-me",
    title: "Miki Matsubara - Stay With Me (Oliver Hoss Remix)",
    artist: "Retro Night AMV Edit",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    duration: 250,
    format: "mp4"
  },
  {
    id: "drive-electro-swing",
    title: "I Wanna Be Like You (Sim Gretina Remix)",
    artist: "Electro Swing Club Edit",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    duration: 220,
    format: "mp4"
  },
  {
    id: "drive-alle-farben",
    title: "Little Hollywood [Official Video HD]",
    artist: "Alle Farben & Janieck",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    duration: 240,
    format: "mp4"
  },
  {
    id: "drive-vj-loops",
    title: "Black & White VJ Loops - Club Visuals",
    artist: "DJ KLMR 4K Stage FX",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    duration: 360,
    format: "mp4"
  }
];

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  const totalDuration = MasterCatalog.reduce((acc, t) => acc + (t.duration || 180), 0);
  const nowSeconds = Math.floor(Date.now() / 1000);
  let cyclePosition = nowSeconds % totalDuration;
  let activeIndex = 0;
  let seekSeconds = 0;

  for (let i = 0; i < MasterCatalog.length; i++) {
    const dur = MasterCatalog[i].duration || 180;
    if (cyclePosition < dur) {
      activeIndex = i;
      seekSeconds = Math.floor(cyclePosition);
      break;
    }
    cyclePosition -= dur;
  }

  const currentTrack = MasterCatalog[activeIndex] || MasterCatalog[0];

  res.status(200).json({
    channel: "KLMR OFFICIAL CHANNEL HD",
    status: "online",
    totalTracks: MasterCatalog.length,
    currentIndex: activeIndex,
    seekSeconds: seekSeconds,
    currentTrack: currentTrack,
    nextTrack: MasterCatalog[(activeIndex + 1) % MasterCatalog.length],
    playlist: MasterCatalog
  });
};
