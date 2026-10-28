// Complete 24/7 Linear Playout Playlist (Official Tracks from @KLMROFFCIALCHANNEL)
const ChannelBroadcastState = {
  isLive: false,
  liveSource: null,
  liveStreamUrl: '',
  currentIndex: 0,
  updatedAt: new Date().toISOString(),
  playlist: [
    { id: "yt-EuKtIiPC3DA", title: "Rise - Eric Kupper VRemix By djklmr Ft Samantha James & Eric Kupper", artist: "djklmr Ft Samantha James & Eric Kupper", source: "youtube", youtubeId: "EuKtIiPC3DA", duration: 384 },
    { id: "yt-r7Tf_hgvH3c", title: "La Noche VREMIX By DJKLMR & DJ TIESTO", artist: "DJKLMR & DJ Tiesto", source: "youtube", youtubeId: "r7Tf_hgvH3c", duration: 310 },
    { id: "yt-kkTj9x4kCC8", title: "Toy Story 5 Trailer Song, Never Tears Us Apart INXS VRemix By djklmr", artist: "INXS (VRemix By djklmr)", source: "youtube", youtubeId: "kkTj9x4kCC8", duration: 255 },
    { id: "yt-7CmxP78alCk", title: "Vamos a vivir", artist: "DJ KLMR", source: "youtube", youtubeId: "7CmxP78alCk", duration: 240 },
    { id: "yt-EIHrIGpwTUE", title: "Sunshine Afro Costa", artist: "djklmr Afro Sessions", source: "youtube", youtubeId: "EIHrIGpwTUE", duration: 320 },
    { id: "yt-4w4l0RSkjfM", title: "CD TRCKAS VIDEOCLIP", artist: "DJKLMR Official", source: "youtube", youtubeId: "4w4l0RSkjfM", duration: 260 },
    { id: "yt-vR3pjw44lkg", title: "CD TRCKAS - Club Edit", artist: "DJKLMR Official", source: "youtube", youtubeId: "vR3pjw44lkg", duration: 250 },
    { id: "yt-XyXfo4HIeP8", title: "Sunshine Tribal", artist: "DJKLMR Official", source: "youtube", youtubeId: "XyXfo4HIeP8", duration: 275 },
    { id: "yt-VHytGF4Alvs", title: "I'm just a DJ - Female Voice English Version", artist: "DJKLMR Official", source: "youtube", youtubeId: "VHytGF4Alvs", duration: 290 },
    { id: "yt-yIhw58dVYsk", title: "Stay for a while - VMOST Theme By djklmr", artist: "djklmr VMOST", source: "youtube", youtubeId: "yIhw58dVYsk", duration: 280 },
    { id: "yt-JCbZJmIFzTc", title: "LOVE STORY - Vals Version 2024 by djklmr", artist: "DJKLMR Official", source: "youtube", youtubeId: "JCbZJmIFzTc", duration: 265 },
    { id: "yt-psmn4o-PfTE", title: "Todavía en el mismo lugar - By djklmr", artist: "DJKLMR Official", source: "youtube", youtubeId: "psmn4o-PfTE", duration: 270 },
    { id: "yt-HUKOy-Qy_no", title: "Le ciel est lourd au dessus de nous - VMOST Theme By djklmr", artist: "djklmr VMOST", source: "youtube", youtubeId: "HUKOy-Qy_no", duration: 310 },
    { id: "yt-sLfrbg5hfG4", title: "Cítricos y Sal - Videoclip Oficial", artist: "DJKLMR Official", source: "youtube", youtubeId: "sLfrbg5hfG4", duration: 245 },
    { id: "yt-LRa1s_4QaJU", title: "황금 다락방 By djklmr Original VRemix (VideoEdit Plastika 01)", artist: "DJKLMR Original VRemix", source: "youtube", youtubeId: "LRa1s_4QaJU", duration: 285 },
    { id: "yt-z8HYbmwUGYI", title: "Heaven's Doorstep 2 - By djklmr VEDIT", artist: "DJKLMR VEDIT", source: "youtube", youtubeId: "z8HYbmwUGYI", duration: 330 },
    { id: "yt-OH_If-vgdEs", title: "Heaven's Doorstep 1 - By djklmr VEDIT", artist: "DJKLMR VEDIT", source: "youtube", youtubeId: "OH_If-vgdEs", duration: 315 },
    { id: "yt-teBAMPj1WzQ", title: "I Like The Way - VRemix By Vdjklmr", artist: "Vdjklmr", source: "youtube", youtubeId: "teBAMPj1WzQ", duration: 260 },
    { id: "yt-AYMQZbzx_dU", title: "Blisser - Suzy Sheer (VEDIT By VDJKLMR)", artist: "Suzy Sheer (VEDIT By VDJKLMR)", source: "youtube", youtubeId: "AYMQZbzx_dU", duration: 250 },
    { id: "yt-QhFc871NS08", title: "Siinamota - Young Girl A (Video Kayzo Trap VEdit By vdjklmr)", artist: "Kayzo vs Siinamota (VEdit by vdjklmr)", source: "youtube", youtubeId: "QhFc871NS08", duration: 220 },
    { id: "yt-ipCA5-k32xY", title: "Airport DJ Pp Remix (Video Edit VDJKLMR)", artist: "DJ Pp (Video Edit VDJKLMR)", source: "youtube", youtubeId: "ipCA5-k32xY", duration: 295 },
    { id: "yt-TxjzaPIFzXU", title: "Ella ya me Olvidó - Leonardo Favio (By vdjklmr & Roberth Steve Quiroga) VREMIX", artist: "vdjklmr & Roberth Steve Quiroga", source: "youtube", youtubeId: "TxjzaPIFzXU", duration: 270 },
    { id: "yt--Zk6vTrleoA", title: "Gipsy Kings - Bamboleo VRemix By vdjklmr", artist: "Gipsy Kings (VRemix By vdjklmr)", source: "youtube", youtubeId: "-Zk6vTrleoA", duration: 260 },
    { id: "yt-DmOoyR8RS7g", title: "Juan Gabriel - Bailando VEdit By djklmr", artist: "Juan Gabriel (VEdit By djklmr)", source: "youtube", youtubeId: "DmOoyR8RS7g", duration: 280 },
    { id: "yt-RXzatHn8bNg", title: "This Place - Nic Fanciulli Remix (VREMIX By vdj-klmr)", artist: "Nic Fanciulli (VREMIX By vdj-klmr)", source: "youtube", youtubeId: "RXzatHn8bNg", duration: 340 },
    { id: "yt-pL0JulX7Rok", title: "VREMIX - Battery Low / Battery Operated By djklmr", artist: "djklmr Original", source: "youtube", youtubeId: "pL0JulX7Rok", duration: 240 },
    { id: "yt-9E8ayj0QvuA", title: "I'm Not In Love - VRemix By djklmr", artist: "10cc (VRemix By djklmr)", source: "youtube", youtubeId: "9E8ayj0QvuA", duration: 310 },
    { id: "drive-pool", title: "ZAMNA TULUM - Deep Tech Soundscapes (Master Pool Drive)", artist: "DJ KLMR Live Pool", source: "drive", fileId: "1yJNNnYunY956qiRH_qFP2nySL1sXXssH", driveUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4", duration: 480 }
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
    currentIndex: activeIndex,
    seekSeconds: seekSeconds,
    currentTrack
  });
};
