// Centralized Master Channel State
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

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  const totalDuration = ChannelBroadcastState.playlist.reduce((acc, t) => acc + (t.duration || 300), 0);
  const nowSeconds = Math.floor(Date.now() / 1000);
  let cyclePosition = nowSeconds % totalDuration;
  let activeIndex = 0;
  let seekSeconds = 0;

  for (let i = 0; i < ChannelBroadcastState.playlist.length; i++) {
    const dur = ChannelBroadcastState.playlist[i].duration || 300;
    if (cyclePosition < dur) {
      activeIndex = i;
      seekSeconds = Math.floor(cyclePosition);
      break;
    }
    cyclePosition -= dur;
  }

  const currentTrack = ChannelBroadcastState.playlist[activeIndex] || ChannelBroadcastState.playlist[0];
  res.status(200).json({
    ...ChannelBroadcastState,
    currentIndex: activeIndex,
    seekSeconds: seekSeconds,
    currentTrack
  });
};
