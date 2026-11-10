// Complete 24/7 Continuous Linear Broadcast Timeline
const ChannelBroadcastState = {
  isLive: false,
  liveSource: null,
  liveStreamUrl: '',
  currentIndex: 0,
  // Same single catalog as /api/channel/feed (Roku) and the web player.
  playlist: require('../../catalog/active.json')
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
  res.status(200).json({
    ...ChannelBroadcastState,
    serverEpochSeconds: nowSeconds,
    totalDurationSeconds: totalDuration,
    totalTracks: ChannelBroadcastState.playlist.length,
    currentIndex: activeIndex,
    seekSeconds: seekSeconds,
    currentTrack,
    nextTrack: ChannelBroadcastState.playlist[(activeIndex + 1) % ChannelBroadcastState.playlist.length]
  });
};
