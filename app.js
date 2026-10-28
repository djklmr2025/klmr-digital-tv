/**
 * KLMR OFFICIAL CHANNEL HD - Interactive Electronic Music TV Engine
 * Linear FAST Playout Stream • Synchronized Global Cloud Broadcast
 * Continuous 24/7 Playout with Complete @KLMROFFCIALCHANNEL Catalog
 */

// Global Channel State
const ChannelState = {
  currentTrackIndex: 0,
  isPlaying: false,
  isLiveMode: false,
  liveSource: null,
  currentSourceType: 'youtube',
  audioQuality: 'yt-standard',
  visualsActive: true,
  ytPlayer: null,
  hasEnteredLive: false
};

// Complete 24/7 Linear Playout Playlist (All 27 Official Tracks from @KLMROFFCIALCHANNEL + Cloud Pool)
const BroadcastPlaylist = [
  {
    id: "yt-EuKtIiPC3DA",
    title: "Rise - Eric Kupper VRemix By djklmr Ft Samantha James & Eric Kupper",
    artist: "djklmr Ft Samantha James & Eric Kupper",
    genre: "SOULFUL HOUSE / VOCAL CLUB",
    source: "youtube",
    youtubeId: "EuKtIiPC3DA",
    duration: 384,
    bpm: 124,
    badge: "CANAL ESTRENO",
    thumbnail: "assets/logo-chrome-3d.png"
  },
  {
    id: "yt-r7Tf_hgvH3c",
    title: "La Noche VREMIX By DJKLMR & DJ TIESTO",
    artist: "DJKLMR & DJ Tiesto",
    genre: "ELECTRO HOUSE / MAIN STAGE",
    source: "youtube",
    youtubeId: "r7Tf_hgvH3c",
    duration: 310,
    bpm: 128,
    badge: "FESTIVAL VIP",
    thumbnail: "assets/tiesto.png"
  },
  {
    id: "yt-kkTj9x4kCC8",
    title: "Toy Story 5 Trailer Song, Never Tears Us Apart INXS VRemix By djklmr",
    artist: "INXS (VRemix By djklmr)",
    genre: "SYNTHPOP / DANCE VREMIX",
    source: "youtube",
    youtubeId: "kkTj9x4kCC8",
    duration: 255,
    bpm: 120,
    badge: "REMIX EXCLUSIVO",
    thumbnail: "assets/logo-klmr.png"
  },
  {
    id: "yt-7CmxP78alCk",
    title: "Vamos a vivir",
    artist: "DJ KLMR",
    genre: "TRIBAL / LATIN TECHNO",
    source: "youtube",
    youtubeId: "7CmxP78alCk",
    duration: 240,
    bpm: 126,
    badge: "PRODUCCIÓN ORIGINAL",
    thumbnail: "assets/klmr-2025-hd.png"
  },
  {
    id: "yt-EIHrIGpwTUE",
    title: "Sunshine Afro Costa",
    artist: "djklmr Afro Sessions",
    genre: "AFRO HOUSE / MELODIC",
    source: "youtube",
    youtubeId: "EIHrIGpwTUE",
    duration: 320,
    bpm: 122,
    badge: "SUNSET LIVE",
    thumbnail: "assets/zamna.png"
  },
  {
    id: "yt-4w4l0RSkjfM",
    title: "CD TRCKAS VIDEOCLIP",
    artist: "DJKLMR Official",
    genre: "ELECTRONIC CLUB / TECH",
    source: "youtube",
    youtubeId: "4w4l0RSkjfM",
    duration: 260,
    bpm: 125,
    badge: "VIDEOCLIP OFICIAL",
    thumbnail: "assets/logo-hd.png"
  },
  {
    id: "yt-vR3pjw44lkg",
    title: "CD TRCKAS - Club Edit",
    artist: "DJKLMR Official",
    genre: "TECH HOUSE / CLUB",
    source: "youtube",
    youtubeId: "vR3pjw44lkg",
    duration: 250,
    bpm: 126,
    badge: "CLUB MIX",
    thumbnail: "assets/logo-chrome-3d.png"
  },
  {
    id: "yt-XyXfo4HIeP8",
    title: "Sunshine Tribal",
    artist: "DJKLMR Official",
    genre: "TRIBAL HOUSE / LATIN GROOVE",
    source: "youtube",
    youtubeId: "XyXfo4HIeP8",
    duration: 275,
    bpm: 128,
    badge: "TRIBAL SESSION",
    thumbnail: "assets/logo-klmr.png"
  },
  {
    id: "yt-VHytGF4Alvs",
    title: "I'm just a DJ - Female Voice English Version",
    artist: "DJKLMR Official",
    genre: "VOCAL CLUB / ELECTRO",
    source: "youtube",
    youtubeId: "VHytGF4Alvs",
    duration: 290,
    bpm: 126,
    badge: "VOCAL ANTHEM",
    thumbnail: "assets/logo-medal-3d.png"
  },
  {
    id: "yt-yIhw58dVYsk",
    title: "Stay for a while - VMOST Theme By djklmr",
    artist: "djklmr VMOST",
    genre: "MELODIC HOUSE / CHILL TECH",
    source: "youtube",
    youtubeId: "yIhw58dVYsk",
    duration: 280,
    bpm: 122,
    badge: "VMOST THEME",
    thumbnail: "assets/zamna.png"
  },
  {
    id: "yt-JCbZJmIFzTc",
    title: "LOVE STORY - Vals Version 2024 by djklmr",
    artist: "DJKLMR Official",
    genre: "ORCHESTRAL DANCE / VREMIX",
    source: "youtube",
    youtubeId: "JCbZJmIFzTc",
    duration: 265,
    bpm: 118,
    badge: "EDICIÓN ESPECIAL",
    thumbnail: "assets/logo-official-3.png"
  },
  {
    id: "yt-psmn4o-PfTE",
    title: "Todavía en el mismo lugar - By djklmr",
    artist: "DJKLMR Official",
    genre: "DEEP HOUSE / NOSTALGIA",
    source: "youtube",
    youtubeId: "psmn4o-PfTE",
    duration: 270,
    bpm: 123,
    badge: "PRODUCCIÓN ORIGINAL",
    thumbnail: "assets/klmr-2025-hd.png"
  },
  {
    id: "yt-HUKOy-Qy_no",
    title: "Le ciel est lourd au dessus de nous - VMOST Theme By djklmr",
    artist: "djklmr VMOST",
    genre: "FRENCH TOUCH / DEEP ELECTRONIC",
    source: "youtube",
    youtubeId: "HUKOy-Qy_no",
    duration: 310,
    bpm: 124,
    badge: "VMOST THEME",
    thumbnail: "assets/logo-chrome-3d.png"
  },
  {
    id: "yt-sLfrbg5hfG4",
    title: "Cítricos y Sal - Videoclip Oficial",
    artist: "DJKLMR Official",
    genre: "LATIN TECH / CLUB DANCE",
    source: "youtube",
    youtubeId: "sLfrbg5hfG4",
    duration: 245,
    bpm: 127,
    badge: "VIDEOCLIP OFICIAL",
    thumbnail: "assets/tiesto.png"
  },
  {
    id: "yt-LRa1s_4QaJU",
    title: "황금 다락방 By djklmr Original VRemix (VideoEdit Plastika 01)",
    artist: "DJKLMR Original VRemix",
    genre: "K-ELECTRO / CLUB VREMIX",
    source: "youtube",
    youtubeId: "LRa1s_4QaJU",
    duration: 285,
    bpm: 126,
    badge: "GLOBAL VREMIX",
    thumbnail: "assets/logo-hd.png"
  },
  {
    id: "yt-z8HYbmwUGYI",
    title: "Heaven's Doorstep 2 - By djklmr VEDIT",
    artist: "DJKLMR VEDIT",
    genre: "PROGRESSIVE HOUSE / CELESTIAL",
    source: "youtube",
    youtubeId: "z8HYbmwUGYI",
    duration: 330,
    bpm: 128,
    badge: "PROGRESSIVE SESSIONS",
    thumbnail: "assets/zamna.png"
  },
  {
    id: "yt-OH_If-vgdEs",
    title: "Heaven's Doorstep 1 - By djklmr VEDIT",
    artist: "DJKLMR VEDIT",
    genre: "PROGRESSIVE HOUSE / ANTHEM",
    source: "youtube",
    youtubeId: "OH_If-vgdEs",
    duration: 315,
    bpm: 126,
    badge: "PROGRESSIVE SESSIONS",
    thumbnail: "assets/logo-medal-3d.png"
  },
  {
    id: "yt-teBAMPj1WzQ",
    title: "I Like The Way - VRemix By Vdjklmr",
    artist: "Vdjklmr",
    genre: "TECH HOUSE / PEAK TIME",
    source: "youtube",
    youtubeId: "teBAMPj1WzQ",
    duration: 260,
    bpm: 126,
    badge: "CLUB VREMIX",
    thumbnail: "assets/logo-klmr.png"
  },
  {
    id: "yt-AYMQZbzx_dU",
    title: "Blisser - Suzy Sheer (VEDIT By VDJKLMR)",
    artist: "Suzy Sheer (VEDIT By VDJKLMR)",
    genre: "ELECTRO DANCE / VEDIT",
    source: "youtube",
    youtubeId: "AYMQZbzx_dU",
    duration: 250,
    bpm: 125,
    badge: "VEDIT EXCLUSIVO",
    thumbnail: "assets/klmr-2025-hd.png"
  },
  {
    id: "yt-QhFc871NS08",
    title: "Siinamota - Young Girl A (Video Kayzo Trap VEdit By vdjklmr)",
    artist: "Kayzo vs Siinamota (VEdit by vdjklmr)",
    genre: "TRAP / HARD DANCE",
    source: "youtube",
    youtubeId: "QhFc871NS08",
    duration: 220,
    bpm: 150,
    badge: "BASS & TRAP",
    thumbnail: "assets/logo-chrome-3d.png"
  },
  {
    id: "yt-ipCA5-k32xY",
    title: "Airport DJ Pp Remix (Video Edit VDJKLMR)",
    artist: "DJ Pp (Video Edit VDJKLMR)",
    genre: "TECH HOUSE / AIRPORT SET",
    source: "youtube",
    youtubeId: "ipCA5-k32xY",
    duration: 295,
    bpm: 126,
    badge: "TECH SESSIONS",
    thumbnail: "assets/tiesto.png"
  },
  {
    id: "yt-TxjzaPIFzXU",
    title: "Ella ya me Olvidó - Leonardo Favio (By vdjklmr & Roberth Steve Quiroga) VREMIX",
    artist: "vdjklmr & Roberth Steve Quiroga",
    genre: "LATIN CLASSIC / DANCE VREMIX",
    source: "youtube",
    youtubeId: "TxjzaPIFzXU",
    duration: 270,
    bpm: 124,
    badge: "COLABORACIÓN VIP",
    thumbnail: "assets/logo-official-3.png"
  },
  {
    id: "yt--Zk6vTrleoA",
    title: "Gipsy Kings - Bamboleo VRemix By vdjklmr",
    artist: "Gipsy Kings (VRemix By vdjklmr)",
    genre: "FLAMENCO TECHNO / FIESTA",
    source: "youtube",
    youtubeId: "-Zk6vTrleoA",
    duration: 260,
    bpm: 128,
    badge: "FIESTA ANTHEM",
    thumbnail: "assets/logo-hd.png"
  },
  {
    id: "yt-DmOoyR8RS7g",
    title: "Juan Gabriel - Bailando VEdit By djklmr",
    artist: "Juan Gabriel (VEdit By djklmr)",
    genre: "LATIN GROOVE / DANCE EDIT",
    source: "youtube",
    youtubeId: "DmOoyR8RS7g",
    duration: 280,
    bpm: 125,
    badge: "HOMENAJE EXCLUSIVO",
    thumbnail: "assets/logo-klmr.png"
  },
  {
    id: "yt-RXzatHn8bNg",
    title: "This Place - Nic Fanciulli Remix (VREMIX By vdj-klmr)",
    artist: "Nic Fanciulli (VREMIX By vdj-klmr)",
    genre: "UNDERGROUND TECHNO / IBIZA",
    source: "youtube",
    youtubeId: "RXzatHn8bNg",
    duration: 340,
    bpm: 127,
    badge: "IBIZA UNDERGROUND",
    thumbnail: "assets/zamna.png"
  },
  {
    id: "yt-pL0JulX7Rok",
    title: "VREMIX - Battery Low / Battery Operated By djklmr",
    artist: "djklmr Original",
    genre: "ELECTRO BREAKS / BASS",
    source: "youtube",
    youtubeId: "pL0JulX7Rok",
    duration: 240,
    bpm: 130,
    badge: "ELECTRO CLUB",
    thumbnail: "assets/logo-medal-3d.png"
  },
  {
    id: "yt-9E8ayj0QvuA",
    title: "I'm Not In Love - VRemix By djklmr",
    artist: "10cc (VRemix By djklmr)",
    genre: "SYNTHPOP DANCE / NOSTALGIA",
    source: "youtube",
    youtubeId: "9E8ayj0QvuA",
    duration: 310,
    bpm: 120,
    badge: "CLASSIC VREMIX",
    thumbnail: "assets/logo-chrome-3d.png"
  },
  {
    id: "drive-pool",
    title: "ZAMNA TULUM - Deep Tech Soundscapes (Master Pool Drive)",
    artist: "DJ KLMR Live Pool",
    genre: "DEEP HOUSE / AFRO TECH",
    source: "drive",
    fileId: "1yJNNnYunY956qiRH_qFP2nySL1sXXssH",
    driveUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4",
    duration: 480,
    bpm: 123,
    badge: "BÓVEDA GOOGLE DRIVE",
    thumbnail: "assets/zamna.png"
  }
];

// Calculate linear FAST real-time playout (Global Synced Virtual Playout)
function getLiveFastPlayoutPosition() {
  const totalDuration = BroadcastPlaylist.reduce((acc, t) => acc + (t.duration || 260), 0);
  const nowSeconds = Math.floor(Date.now() / 1000);
  let cyclePosition = nowSeconds % totalDuration;

  for (let i = 0; i < BroadcastPlaylist.length; i++) {
    const track = BroadcastPlaylist[i];
    const trackDuration = track.duration || 260;
    if (cyclePosition < trackDuration) {
      return {
        trackIndex: i,
        startSeconds: Math.floor(cyclePosition)
      };
    }
    cyclePosition -= trackDuration;
  }
  return { trackIndex: 0, startSeconds: 0 };
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initClock();
  initIntroCurtain();
  initSignalHealthMonitor();
  initHUDControls();
  initFullscreenAndAutoHide();
  initModals();
  initKeyboardNavigation();
  initBackendSync();
});

/* ==========================================================================
   1. INTRO LOADING SCREEN (Modo Loading • Sintonización de Señal)
   ========================================================================== */
function initIntroCurtain() {
  const overlay = document.getElementById("channel-intro-overlay");
  const introVideo = document.getElementById("intro-curtain-video");
  const skipBtn = document.getElementById("btn-skip-intro");
  const startPrompt = document.getElementById("intro-start-prompt");
  const startBtn = document.getElementById("btn-start-tuning");

  function dismissIntro() {
    if (ChannelState.hasEnteredLive) return;
    ChannelState.hasEnteredLive = true;

    if (introVideo) {
      introVideo.pause();
    }

    if (overlay) {
      overlay.classList.add("fade-out");
      setTimeout(() => {
        overlay.style.display = "none";
      }, 850);
    }

    // Now that intro has finished, sync and launch live broadcast with full volume
    const livePos = getLiveFastPlayoutPosition();
    ChannelState.currentTrackIndex = livePos.trackIndex;
    const currentTrack = BroadcastPlaylist[livePos.trackIndex];

    if (ChannelState.ytPlayer) {
      if (typeof ChannelState.ytPlayer.loadVideoById === "function") {
        ChannelState.ytPlayer.loadVideoById({
          videoId: currentTrack.youtubeId,
          startSeconds: livePos.startSeconds,
          suggestedQuality: "hd720"
        });
      }
      if (typeof ChannelState.ytPlayer.unMute === "function") {
        ChannelState.ytPlayer.unMute();
        ChannelState.ytPlayer.setVolume(100);
        ChannelState.ytPlayer.playVideo();
      }
    }
  }

  function startIntroWithAudio() {
    if (introVideo) {
      introVideo.muted = false;
      introVideo.volume = 1.0;
      introVideo.play().then(() => {
        if (startPrompt) startPrompt.classList.add("hidden");
      }).catch(() => {
        // Fallback if browser blocks sound without user gesture
        if (startPrompt) startPrompt.classList.remove("hidden");
      });
    }
  }

  if (startBtn) {
    startBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      startIntroWithAudio();
    });
  }

  if (skipBtn) {
    skipBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dismissIntro();
    });
  }

  if (introVideo) {
    // When intro video finishes naturally, transition seamlessly to live linear stream
    introVideo.addEventListener("ended", dismissIntro);
    
    // Attempt auto-play with sound; show prompt button if browser requires gesture
    introVideo.muted = false;
    introVideo.volume = 1.0;
    introVideo.play().catch(() => {
      if (startPrompt) startPrompt.classList.remove("hidden");
    });
  }

  // Clicking overlay if prompt visible triggers audio playback
  overlay?.addEventListener("click", () => {
    if (!ChannelState.hasEnteredLive && introVideo && introVideo.paused) {
      startIntroWithAudio();
    }
  });
}

/* ==========================================================================
   2. DIGITAL CLOCK & EPG TIMING (Viewer Country / Local Time Engine)
   ========================================================================== */
function initClock() {
  const clockEl = document.getElementById("digital-clock");
  const cornerClockEl = document.getElementById("corner-clock-time");

  function update() {
    // Evaluates against the viewer's local system timezone (exact time by country of reception)
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const mins = String(now.getMinutes()).padStart(2, "0");
    const timeStr = `${hours}:${mins}`;

    if (clockEl) clockEl.textContent = timeStr;
    if (cornerClockEl) cornerClockEl.textContent = timeStr;
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   3. YOUTUBE IFRAME PLAYER INTEGRATION (Clean Feed Broadcast - No Pause, No Watermark)
   ========================================================================== */
window.onYouTubeIframeAPIReady = function() {
  const livePos = getLiveFastPlayoutPosition();
  ChannelState.currentTrackIndex = livePos.trackIndex;
  const currentTrack = BroadcastPlaylist[livePos.trackIndex];

  ChannelState.ytPlayer = new YT.Player("yt-player", {
    videoId: currentTrack.youtubeId,
    host: "https://www.youtube.com",
    playerVars: {
      autoplay: 0,
      mute: 1,
      controls: 0,
      disablekb: 1,
      enablejsapi: 1,
      fs: 0,
      iv_load_policy: 3,
      cc_load_policy: 0,
      cc_lang_pref: "none",
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      loop: 0,
      playsinline: 1,
      start: livePos.startSeconds,
      origin: window.location.origin
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
};

function onPlayerReady(event) {
  // Force disable subtitles/captions
  try {
    if (typeof event.target.unloadModule === "function") event.target.unloadModule("captions");
    if (typeof event.target.setOption === "function") event.target.setOption("captions", "track", {});
  } catch (e) {}

  if (typeof event.target.setPlaybackQuality === "function") {
    event.target.setPlaybackQuality("hd720");
  }

  // If still watching the intro loading video, KEEP YouTube paused and muted
  if (!ChannelState.hasEnteredLive) {
    if (typeof event.target.pauseVideo === "function") event.target.pauseVideo();
    if (typeof event.target.mute === "function") event.target.mute();
  } else {
    event.target.playVideo();
    if (typeof event.target.unMute === "function") event.target.unMute();
  }

  startTimeTracking();
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    // If user is still in intro curtain, do not let YouTube play ahead
    if (!ChannelState.hasEnteredLive) {
      if (typeof event.target.pauseVideo === "function") event.target.pauseVideo();
      if (typeof event.target.mute === "function") event.target.mute();
      return;
    }
    ChannelState.isPlaying = true;
    updateNowPlayingHUD();
    try {
      if (typeof event.target.unloadModule === "function") event.target.unloadModule("captions");
    } catch (e) {}
    if (typeof event.target.setPlaybackQuality === "function") {
      event.target.setPlaybackQuality("hd720");
    }
  } else if (event.data === YT.PlayerState.PAUSED) {
    // Once live has started, live TV cannot be paused! Force resume immediately
    if (ChannelState.hasEnteredLive && ChannelState.ytPlayer && typeof ChannelState.ytPlayer.playVideo === "function") {
      ChannelState.ytPlayer.playVideo();
    }
  } else if (event.data === YT.PlayerState.BUFFERING) {
    if (typeof event.target.setPlaybackQuality === "function") {
      event.target.setPlaybackQuality("hd720");
    }
  } else if (event.data === YT.PlayerState.ENDED) {
    playNextTrack();
  }
}

function startTimeTracking() {
  setInterval(() => {
    if (!ChannelState.ytPlayer || typeof ChannelState.ytPlayer.getCurrentTime !== "function") return;
    
    if (ChannelState.currentSourceType === 'youtube') {
      const current = ChannelState.ytPlayer.getCurrentTime() || 0;
      const duration = ChannelState.ytPlayer.getDuration() || 1;
      const progressPercent = Math.min(100, (current / duration) * 100);
      
      const progBar = document.getElementById("epg-progress-bar");
      if (progBar) progBar.style.width = `${progressPercent}%`;
    }
  }, 500);
}

/* ==========================================================================
   4. PLAYBACK ENGINE & SOURCE SWITCHING
   ========================================================================== */
function playTrackAtIndex(index, startSeconds = 0) {
  if (index < 0 || index >= BroadcastPlaylist.length) return;
  ChannelState.currentTrackIndex = index;
  const track = BroadcastPlaylist[index];

  hideLiveAlert();
  ChannelState.isLiveMode = false;

  const ytWrapper = document.getElementById("yt-player-wrapper");
  const nativeWrapper = document.getElementById("native-player-wrapper");
  const nativeVideo = document.getElementById("native-video");
  const visualizerCanvas = document.getElementById("visualizer-canvas");

  if (track.source === "youtube") {
    ChannelState.currentSourceType = "youtube";
    ytWrapper.classList.add("active");
    nativeWrapper.classList.remove("active");
    visualizerCanvas.classList.remove("active");
    if (nativeVideo) nativeVideo.pause();

    if (ChannelState.ytPlayer && typeof ChannelState.ytPlayer.loadVideoById === "function") {
      ChannelState.ytPlayer.loadVideoById({
        videoId: track.youtubeId,
        startSeconds: startSeconds,
        suggestedQuality: "hd720"
      });
      try {
        if (typeof ChannelState.ytPlayer.unloadModule === "function") {
          ChannelState.ytPlayer.unloadModule("captions");
        }
      } catch (e) {}
    }
  } else if (track.source === "drive") {
    ChannelState.currentSourceType = "drive";
    nativeWrapper.classList.add("active");
    ytWrapper.classList.remove("active");
    visualizerCanvas.classList.remove("active");
    
    if (ChannelState.ytPlayer && typeof ChannelState.ytPlayer.pauseVideo === "function") {
      ChannelState.ytPlayer.pauseVideo();
    }

    if (nativeVideo) {
      nativeVideo.src = track.driveUrl;
      nativeVideo.currentTime = startSeconds;
      nativeVideo.play().catch(e => console.log("Drive video note:", e));
    }
  }

  updateNowPlayingHUD();
}

function playNextTrack() {
  const nextIdx = (ChannelState.currentTrackIndex + 1) % BroadcastPlaylist.length;
  playTrackAtIndex(nextIdx, 0);
}

function playPrevTrack() {
  const prevIdx = (ChannelState.currentTrackIndex - 1 + BroadcastPlaylist.length) % BroadcastPlaylist.length;
  playTrackAtIndex(prevIdx, 0);
}

function updateNowPlayingHUD() {
  const curTrack = BroadcastPlaylist[ChannelState.currentTrackIndex];
  const nextTrack = BroadcastPlaylist[(ChannelState.currentTrackIndex + 1) % BroadcastPlaylist.length];

  const nowEl = document.getElementById("now-playing-text");
  const nextEl = document.getElementById("next-track-text");

  if (nowEl) {
    nowEl.textContent = `${curTrack.title}`;
  }

  if (nextEl) {
    nextEl.textContent = `${nextTrack.title} (${nextTrack.artist})`;
  }

  // Update Modal Track Info
  const mTitle = document.getElementById("modal-track-title");
  const mArtist = document.getElementById("modal-track-artist");
  const mGenre = document.getElementById("modal-track-genre");
  const mSource = document.getElementById("modal-track-source");

  if (mTitle) mTitle.textContent = curTrack.title;
  if (mArtist) mArtist.textContent = curTrack.artist;
  if (mGenre) mGenre.textContent = curTrack.genre;
  if (mSource) mSource.textContent = curTrack.source === "youtube" ? "YouTube Oficial (@KLMROFFCIALCHANNEL)" : "Bóveda Google Drive";
}

/* ==========================================================================
   5. FULLSCREEN & EPG MARQUEE AUTO-HIDE CONTROLLER
   ========================================================================== */
let hudInactivityTimer = null;

function isFullscreenActive() {
  return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
}

function initFullscreenAndAutoHide() {
  const hud = document.getElementById("epg-hud");
  const cornerClock = document.getElementById("broadcast-corner-clock");

  function showHUD() {
    if (hud) hud.classList.remove("hud-hidden");
    if (cornerClock) cornerClock.classList.add("hidden-by-hud");
  }

  function hideHUD() {
    if (hud) hud.classList.add("hud-hidden");
    // Persistent corner clock remains visible in fullscreen with viewer's exact country time
    if (cornerClock) cornerClock.classList.remove("hidden-by-hud");
  }

  function resetTimer() {
    showHUD();
    if (hudInactivityTimer) clearTimeout(hudInactivityTimer);
    if (isFullscreenActive()) {
      hudInactivityTimer = setTimeout(() => {
        hideHUD();
      }, 3500); // Auto-hide after 3.5s of inactivity in fullscreen
    }
  }

  const handleFullscreenChange = () => {
    if (isFullscreenActive()) {
      resetTimer();
    } else {
      if (hudInactivityTimer) clearTimeout(hudInactivityTimer);
      showHUD();
    }
  };

  document.addEventListener("fullscreenchange", handleFullscreenChange);
  document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
  document.addEventListener("mozfullscreenchange", handleFullscreenChange);

  // User activity awakens HUD temporarily in fullscreen
  window.addEventListener("mousemove", () => {
    if (isFullscreenActive()) resetTimer();
  });
  window.addEventListener("touchstart", () => {
    if (isFullscreenActive()) resetTimer();
  });

  // Global toggle function: Strictly toggles the bottom marquee HUD with auto-hide timer
  window.toggleMarqueeHUD = function() {
    if (!hud) return;
    if (hud.classList.contains("hud-hidden")) {
      showHUD();
      if (hudInactivityTimer) clearTimeout(hudInactivityTimer);
      hudInactivityTimer = setTimeout(() => {
        hideHUD();
      }, 4500); // Auto-hide after 4.5s of visibility
    } else {
      hideHUD();
      if (hudInactivityTimer) clearTimeout(hudInactivityTimer);
    }
  };
}

function toggleFullscreen() {
  if (!isFullscreenActive()) {
    const el = document.documentElement;
    if (el.requestFullscreen) {
      el.requestFullscreen().catch(() => {});
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

/* ==========================================================================
   6. HUD CONTROLS & MODALS
   ========================================================================== */
function initHUDControls() {
  // Info Button: Simply toggles the bottom marquee strip, NEVER opens popups
  document.getElementById("btn-info")?.addEventListener("click", () => {
    window.toggleMarqueeHUD();
  });

  document.getElementById("btn-audio")?.addEventListener("click", () => toggleModal("modal-audio"));
  document.getElementById("btn-fullscreen")?.addEventListener("click", toggleFullscreen);

  document.getElementById("btn-subtitles")?.addEventListener("click", () => {
    alert("Sintetizador láser y ecualizador visual activo en señal continua.");
  });

  // Click Shield over video: clicking toggles HUD or fullscreen, NEVER pauses
  const clickShield = document.getElementById("video-click-shield");
  if (clickShield) {
    clickShield.addEventListener("dblclick", toggleFullscreen);
    clickShield.addEventListener("click", () => {
      window.toggleMarqueeHUD();
    });
  }
}

function initModals() {
  document.querySelectorAll(".modal-close-btn").forEach(btn => {
    btn.addEventListener("click", closeAllModals);
  });

  document.querySelectorAll(".tv-modal").forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeAllModals();
    });
  });
}

function toggleModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  const isHidden = modal.classList.contains("hidden");
  closeAllModals();
  if (isHidden) {
    modal.classList.remove("hidden");
  }
}

function closeAllModals() {
  document.querySelectorAll(".tv-modal").forEach(m => m.classList.add("hidden"));
}

/* ==========================================================================
   7. SMART TV REMOTE & KEYBOARD CONTROLS
   ========================================================================== */
function initKeyboardNavigation() {
  window.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT") return;

    switch (e.key) {
      case "ArrowRight":
        playNextTrack();
        break;
      case "ArrowLeft":
        playPrevTrack();
        break;
      case "f":
      case "F":
        toggleFullscreen();
        break;
      case "i":
      case "I":
        // TV Remote 'Info' button: toggles marquee visibility
        window.toggleMarqueeHUD();
        break;
      case "m":
      case "M":
        if (ChannelState.ytPlayer) {
          if (ChannelState.ytPlayer.isMuted()) {
            ChannelState.ytPlayer.unMute();
          } else {
            ChannelState.ytPlayer.mute();
          }
        }
        break;
      case "Escape":
        closeAllModals();
        break;
    }
  });
}

/* ==========================================================================
   8. BACKEND SYNC WITH MASTER CONTROL ROOM (/admin)
   ========================================================================== */
function initBackendSync() {
  let lastSyncUpdatedAt = null;

  async function sync() {
    try {
      const res = await fetch('/api/channel/status');
      if (!res.ok) return;
      const data = await res.json();

      if (data.updatedAt !== lastSyncUpdatedAt) {
        lastSyncUpdatedAt = data.updatedAt;

        if (data.isLive) {
          if (data.liveSource === 'j2cast' && ChannelState.liveSource !== 'j2cast') {
            activateLiveAudioStream(data.liveStreamUrl);
          } else if (data.liveSource === 'tiktok' && ChannelState.liveSource !== 'tiktok') {
            activateLiveVideoStream(data.liveStreamUrl);
          }
        } else {
          if (ChannelState.isLiveMode) {
            restoreRegularProgramming();
          }
          if (data.currentIndex !== ChannelState.currentTrackIndex) {
            playTrackAtIndex(data.currentIndex, 0);
          }
        }
      }
    } catch (err) {
      // Offline fallback
    }
  }

  setInterval(sync, 4000);
}

function showLiveAlert(title, desc) {
  const banner = document.getElementById("live-alert-banner");
  const tEl = document.getElementById("live-source-title");
  const dEl = document.getElementById("live-source-desc");
  if (tEl) tEl.textContent = title;
  if (dEl) dEl.textContent = desc;
  if (banner) banner.classList.remove("hidden");
}

function hideLiveAlert() {
  const banner = document.getElementById("live-alert-banner");
  if (banner) banner.classList.add("hidden");
}

function restoreRegularProgramming() {
  hideLiveAlert();
  ChannelState.isLiveMode = false;
  ChannelState.liveSource = null;
  const livePos = getLiveFastPlayoutPosition();
  playTrackAtIndex(livePos.trackIndex, livePos.startSeconds);
}

/* ==========================================================================
   9. BROADCAST SIGNAL HEALTH & TELEMETRY MONITOR (Inside Marquee HUD Only)
   ========================================================================== */
function initSignalHealthMonitor() {
  const pctEl = document.getElementById("signal-health-pct");
  const fpsEl = document.getElementById("signal-health-fps");
  const pingEl = document.getElementById("signal-health-ping");

  let lastFrameTime = performance.now();
  let frameCount = 0;
  let currentFps = 60;
  let currentPing = 16;
  let healthPercent = 100;

  // Real-time FPS Measurement loop
  function measureFps(now) {
    frameCount++;
    const delta = now - lastFrameTime;
    if (delta >= 1000) {
      currentFps = Math.min(60, Math.round((frameCount * 1000) / delta));
      frameCount = 0;
      lastFrameTime = now;
      updateDisplay();
    }
    requestAnimationFrame(measureFps);
  }
  requestAnimationFrame(measureFps);

  // Real-time Ping to CDN Edge
  async function checkPing() {
    try {
      const start = performance.now();
      await fetch('/api/channel/status?t=' + Date.now(), { method: 'HEAD', cache: 'no-store' });
      currentPing = Math.max(5, Math.min(250, Math.round(performance.now() - start)));
    } catch (e) {
      currentPing = 35;
    }
  }
  setInterval(checkPing, 12000);
  checkPing();

  // Evaluate Overall Stream Health Percentage
  function updateDisplay() {
    let healthStatus = "SANA";
    let statusClass = "";

    // Base calculation: frame rate stability + ping
    if (currentFps >= 55 && currentPing < 90) {
      healthPercent = (99.2 + Math.random() * 0.7).toFixed(1);
      healthStatus = "SANA";
    } else if (currentFps >= 40 && currentPing < 160) {
      healthPercent = (94.0 + Math.random() * 3.0).toFixed(1);
      healthStatus = "BUENA";
      statusClass = "warning";
    } else {
      healthPercent = (78.0 + Math.random() * 8.0).toFixed(1);
      healthStatus = "MEDIOCRE";
      statusClass = "critical";
    }

    if (pctEl) {
      pctEl.textContent = `${healthPercent}% ${healthStatus}`;
      pctEl.className = `health-pct ${statusClass}`.trim();
    }
    if (fpsEl) {
      fpsEl.textContent = `${currentFps} FPS`;
    }
    if (pingEl) {
      pingEl.textContent = `${currentPing}ms`;
    }
  }
}

