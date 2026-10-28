/**
 * KLMR OFFICIAL CHANNEL HD - Interactive Electronic Music TV Engine
 * Linear FAST Playout Stream • Synchronized Global Cloud Broadcast
 */

// Global Channel State
const ChannelState = {
  currentTrackIndex: 0,
  isPlaying: false,
  isLiveMode: false,
  liveSource: null, // 'j2cast' | 'tiktok' | null
  currentSourceType: 'youtube', // 'youtube' | 'drive' | 'live-audio' | 'live-video'
  audioQuality: 'yt-standard',
  visualsActive: true,
  ytPlayer: null,
  audioContext: null,
  audioElement: null,
  analyser: null,
  animationFrameId: null,
  hasEnteredLive: false
};

// Curated 24/7 Linear Playout Playlist (Official Tracks from @KLMROFFCIALCHANNEL & Cloud Pool)
const BroadcastPlaylist = [
  {
    id: "yt-rise",
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
    id: "yt-tiesto",
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
    id: "yt-toy-story",
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
    id: "yt-vamos",
    title: "Vamos a vivir - Videoclip Oficial",
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
    id: "yt-sunshine",
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
    id: "yt-queen-fisher",
    title: "Queen Vs Fisher - Bohemian Rhapsody Vs Losing It (Mashup VRemix)",
    artist: "Fisher vs Queen (Mashup by djklmr)",
    genre: "TECH HOUSE / PEAK TIME",
    source: "youtube",
    youtubeId: "o4hPLMtAjMM",
    duration: 290,
    bpm: 125,
    badge: "CLUB BANGERS",
    thumbnail: "assets/logo-hd.png"
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
  const totalDuration = BroadcastPlaylist.reduce((acc, t) => acc + (t.duration || 300), 0);
  const nowSeconds = Math.floor(Date.now() / 1000);
  let cyclePosition = nowSeconds % totalDuration;

  for (let i = 0; i < BroadcastPlaylist.length; i++) {
    const track = BroadcastPlaylist[i];
    const trackDuration = track.duration || 300;
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
  initHUDControls();
  initFullscreenAndAutoHide();
  initModals();
  initGuideGrid();
  initKeyboardNavigation();
  initBackendSync();
});

/* ==========================================================================
   1. INTRO CURTAIN OVERLAY (Welcome Screen)
   ========================================================================== */
function initIntroCurtain() {
  const overlay = document.getElementById("channel-intro-overlay");
  const introVideo = document.getElementById("intro-curtain-video");
  const skipBtn = document.getElementById("btn-skip-intro");

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
      }, 900);
    }

    // Unmute YouTube player upon entering live
    if (ChannelState.ytPlayer && typeof ChannelState.ytPlayer.unMute === "function") {
      ChannelState.ytPlayer.unMute();
      ChannelState.ytPlayer.setVolume(100);
      ChannelState.ytPlayer.playVideo();
    }
  }

  if (skipBtn) {
    skipBtn.addEventListener("click", dismissIntro);
  }

  if (introVideo) {
    introVideo.addEventListener("ended", dismissIntro);
    // Try to play intro with audio on user tap
    introVideo.play().catch(() => {
      introVideo.muted = true;
      introVideo.play().catch(() => {});
    });
  }

  // Also dismiss if clicking anywhere on the curtain after 4 seconds
  setTimeout(() => {
    overlay?.addEventListener("click", (e) => {
      if (e.target !== skipBtn) dismissIntro();
    }, { once: true });
  }, 4000);
}

/* ==========================================================================
   2. DIGITAL CLOCK & EPG TIMING
   ========================================================================== */
function initClock() {
  const clockEl = document.getElementById("digital-clock");

  function update() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const mins = String(now.getMinutes()).padStart(2, "0");

    if (clockEl) clockEl.textContent = `${hours}:${mins}`;
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   3. YOUTUBE IFRAME PLAYER INTEGRATION (Optimized Smooth Streaming)
   ========================================================================== */
window.onYouTubeIframeAPIReady = function() {
  const livePos = getLiveFastPlayoutPosition();
  ChannelState.currentTrackIndex = livePos.trackIndex;
  const currentTrack = BroadcastPlaylist[livePos.trackIndex];

  ChannelState.ytPlayer = new YT.Player("yt-player", {
    videoId: currentTrack.youtubeId,
    host: "https://www.youtube.com",
    playerVars: {
      autoplay: 1,
      mute: 1, // Needed for instant auto-play on browser policy
      controls: 0,
      disablekb: 1,
      enablejsapi: 1,
      fs: 0,
      iv_load_policy: 3,
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
  const livePos = getLiveFastPlayoutPosition();
  if (typeof event.target.seekTo === "function" && livePos.startSeconds > 0) {
    event.target.seekTo(livePos.startSeconds, true);
  }

  // Suggest smooth 720p 60fps streaming to avoid 4K buffering ("cargue y cargue")
  if (typeof event.target.setPlaybackQuality === "function") {
    event.target.setPlaybackQuality("hd720");
  }

  event.target.playVideo();
  ChannelState.isPlaying = true;
  updateNowPlayingHUD();
  startTimeTracking();

  // On first user interaction, unmute and ensure smooth playback
  const unmuteHandler = () => {
    if (ChannelState.ytPlayer && typeof ChannelState.ytPlayer.unMute === "function") {
      ChannelState.ytPlayer.unMute();
      ChannelState.ytPlayer.setVolume(100);
    }
    window.removeEventListener("click", unmuteHandler);
    window.removeEventListener("keydown", unmuteHandler);
  };
  window.addEventListener("click", unmuteHandler);
  window.addEventListener("keydown", unmuteHandler);
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    ChannelState.isPlaying = true;
    updateNowPlayingHUD();
    if (typeof event.target.setPlaybackQuality === "function") {
      event.target.setPlaybackQuality("hd720");
    }
  } else if (event.data === YT.PlayerState.BUFFERING) {
    // Keep playback lightweight and fast
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

  // Update Active Guide Card
  document.querySelectorAll(".guide-card").forEach((card, idx) => {
    if (idx === ChannelState.currentTrackIndex) {
      card.classList.add("now-playing-card");
    } else {
      card.classList.remove("now-playing-card");
    }
  });
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
  const header = document.querySelector(".tv-header");

  function showHUD() {
    if (hud) hud.classList.remove("hud-hidden");
    if (header) header.classList.remove("header-hidden");
  }

  function hideHUD() {
    if (hud) hud.classList.add("hud-hidden");
    if (header) header.classList.add("header-hidden");
  }

  function resetTimer() {
    showHUD();
    if (hudInactivityTimer) clearTimeout(hudInactivityTimer);
    if (isFullscreenActive()) {
      hudInactivityTimer = setTimeout(() => {
        hideHUD();
      }, 3500); // Auto-hide after 3.5s of inactivity
    }
  }

  // Listen to fullscreen changes across browsers
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

  // Wake up HUD on user interaction
  window.addEventListener("mousemove", () => {
    if (isFullscreenActive()) resetTimer();
  });
  window.addEventListener("touchstart", () => {
    if (isFullscreenActive()) resetTimer();
  });

  // Global toggle function
  window.toggleMarqueeHUD = function() {
    if (!hud) return;
    if (hud.classList.contains("hud-hidden")) {
      resetTimer();
    } else {
      if (isFullscreenActive()) {
        hideHUD();
      } else {
        toggleModal("modal-info");
      }
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
  // Info Button: Reveals HUD if hidden, or toggles info modal
  document.getElementById("btn-info")?.addEventListener("click", () => {
    const hud = document.getElementById("epg-hud");
    if (hud && hud.classList.contains("hud-hidden")) {
      hud.classList.remove("hud-hidden");
    } else {
      toggleModal("modal-info");
    }
  });

  document.getElementById("btn-audio")?.addEventListener("click", () => toggleModal("modal-audio"));
  document.getElementById("btn-favorites")?.addEventListener("click", () => toggleModal("modal-guide"));
  document.getElementById("btn-fullscreen")?.addEventListener("click", toggleFullscreen);

  document.getElementById("btn-subtitles")?.addEventListener("click", () => {
    alert("Sintetizador láser y ecualizador visual activo en señal continua.");
  });

  // Clicking on video stage toggles fullscreen rather than unwanted pause
  const videoStage = document.getElementById("video-stage");
  if (videoStage) {
    videoStage.addEventListener("dblclick", toggleFullscreen);
    videoStage.addEventListener("click", (e) => {
      // If clicking stage while in fullscreen, toggle HUD visibility
      if (isFullscreenActive()) {
        window.toggleMarqueeHUD();
      }
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
   7. CHANNEL GUIDE (PLAYLIST) GRID
   ========================================================================== */
function initGuideGrid() {
  const grid = document.getElementById("guide-items-list");
  if (!grid) return;

  grid.innerHTML = "";

  BroadcastPlaylist.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = `guide-card ${index === ChannelState.currentTrackIndex ? 'now-playing-card' : ''}`;
    card.setAttribute("data-index", index);

    card.innerHTML = `
      <img src="${item.thumbnail}" class="guide-thumb" alt="${item.title}" onerror="this.src='assets/logo-klmr.png'">
      <div class="guide-info">
        <span class="guide-badge">${item.badge}</span>
        <div class="guide-title">${item.title}</div>
        <div class="guide-sub">${item.artist} • ${item.genre}</div>
      </div>
    `;

    card.addEventListener("click", () => {
      playTrackAtIndex(index, 0);
      closeAllModals();
    });

    grid.appendChild(card);
  });
}

/* ==========================================================================
   8. SMART TV REMOTE & KEYBOARD CONTROLS
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
        // TV Remote 'Info' button: toggles marquee visibility or track info
        window.toggleMarqueeHUD();
        break;
      case "g":
      case "G":
        toggleModal("modal-guide");
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
   9. BACKEND SYNC WITH MASTER CONTROL ROOM (/admin)
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
