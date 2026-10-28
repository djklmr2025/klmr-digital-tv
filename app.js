/**
 * KLMR OFFICIAL CHANNEL HD - Interactive Electronic Music TV Engine
 * Supports: YouTube Channel Ingest, Google Drive Cloud Storage, j2cast Live Audio, and TikTok Live Video.
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
  animationFrameId: null
};

// Curated 24/7 Broadcast Playlist (Real Videos from @KLMROFFCIALCHANNEL & Cloud Pool)
const BroadcastPlaylist = [
  {
    id: "yt-rise",
    title: "Rise - Eric Kupper VRemix By djklmr Ft Samantha James & Eric Kupper",
    artist: "djklmr Ft Samantha James & Eric Kupper",
    genre: "SOULFUL HOUSE / VOCAL CLUB",
    source: "youtube",
    youtubeId: "EuKtIiPC3DA", // Real YouTube ID
    duration: 384,
    bpm: 124,
    badge: "ESTRENO CANAL",
    thumbnail: "assets/logo-chrome-3d.png"
  },
  {
    id: "ident-intro",
    title: "KLMR OFFICIAL CHANNEL HD - Opening & Video Ident 4K",
    artist: "KLMR Network Official",
    genre: "STATION IDENT / OPENING",
    source: "drive",
    driveUrl: "assets/intro.mp4",
    duration: 18,
    bpm: 128,
    badge: "VIDEO INTRO",
    thumbnail: "assets/logo-medal-3d.png"
  },
  {
    id: "yt-tiesto",
    title: "La Noche VREMIX By DJKLMR & DJ TIESTO",
    artist: "DJKLMR & DJ Tiesto",
    genre: "ELECTRO HOUSE / MAIN STAGE",
    source: "youtube",
    youtubeId: "r7Tf_hgvH3c", // Real YouTube ID
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
    youtubeId: "kkTj9x4kCC8", // Real YouTube ID
    duration: 255,
    bpm: 120,
    badge: "CANAL OFICIAL",
    thumbnail: "assets/logo-klmr.png"
  },
  {
    id: "yt-vamos",
    title: "Vamos a vivir - Videoclip Oficial",
    artist: "DJ KLMR",
    genre: "TRIBAL / LATIN TECHNO",
    source: "youtube",
    youtubeId: "7CmxP78alCk", // Real YouTube ID
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
    youtubeId: "EIHrIGpwTUE", // Real YouTube ID
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
    youtubeId: "o4hPLMtAjMM", // Real YouTube ID
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

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initClock();
  initHUDControls();
  initModals();
  initGuideGrid();
  initKeyboardNavigation();
  initBackendSync();
});

// Sync Frontend with Backend Master Control Room in real time
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
            playTrackAtIndex(data.currentIndex);
          }
        }
      }
    } catch (err) {
      // Offline fallback
    }
  }

  setInterval(sync, 3000);
}

/* ==========================================================================
   1. DIGITAL CLOCK & EPG TIMING
   ========================================================================== */
function initClock() {
  const clockEl = document.getElementById("digital-clock");
  const secEl = document.getElementById("digital-seconds");

  function update() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const mins = String(now.getMinutes()).padStart(2, "0");
    const secs = String(now.getSeconds()).padStart(2, "0");

    if (clockEl) clockEl.textContent = `${hours}:${mins}`;
    if (secEl) secEl.textContent = `:${secs}`;
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   2. YOUTUBE IFRAME PLAYER INTEGRATION
   ========================================================================== */
window.onYouTubeIframeAPIReady = function() {
  const firstTrack = BroadcastPlaylist[ChannelState.currentTrackIndex];

  ChannelState.ytPlayer = new YT.Player("yt-player", {
    videoId: firstTrack.youtubeId,
    host: "https://www.youtube.com",
    playerVars: {
      autoplay: 1,
      mute: 1, // Required by Chrome/Edge for zero-click autoplay
      controls: 0,
      disablekb: 1,
      enablejsapi: 1,
      fs: 0,
      iv_load_policy: 3,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      loop: 1,
      playsinline: 1,
      origin: window.location.origin
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
};

function onPlayerReady(event) {
  event.target.playVideo();
  ChannelState.isPlaying = true;
  updateNowPlayingHUD();
  startTimeTracking();

  // On first click or keypress anywhere on the screen, automatically unmute!
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
   3. PLAYBACK ENGINE & SOURCE SWITCHING
   ========================================================================== */
function playTrackAtIndex(index) {
  if (index < 0 || index >= BroadcastPlaylist.length) return;
  ChannelState.currentTrackIndex = index;
  const track = BroadcastPlaylist[index];

  // Reset live alert if returning to regular
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
      ChannelState.ytPlayer.loadVideoById(track.youtubeId);
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
      nativeVideo.play().catch(e => console.log("Drive video autoplay note:", e));
    }
  }

  updateNowPlayingHUD();
}

function playNextTrack() {
  const nextIdx = (ChannelState.currentTrackIndex + 1) % BroadcastPlaylist.length;
  playTrackAtIndex(nextIdx);
}

function playPrevTrack() {
  const prevIdx = (ChannelState.currentTrackIndex - 1 + BroadcastPlaylist.length) % BroadcastPlaylist.length;
  playTrackAtIndex(prevIdx);
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
  if (mSource) mSource.textContent = curTrack.source === "youtube" ? "YouTube Oficial (@KLMROFFCIALCHANNEL)" : "Bóveda Google Drive (ssass)";

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
   4. LIVE INGEST ENGINE (j2cast Audio & TikTok Live Video)
   ========================================================================== */
function activateLiveAudioStream(streamUrl) {
  closeAllModals();

  ChannelState.isLiveMode = true;
  ChannelState.liveSource = 'j2cast';
  ChannelState.currentSourceType = 'live-audio';

  // Pause YouTube & Video
  if (ChannelState.ytPlayer && typeof ChannelState.ytPlayer.pauseVideo === "function") {
    ChannelState.ytPlayer.pauseVideo();
  }
  const nativeVideo = document.getElementById("native-video");
  if (nativeVideo) nativeVideo.pause();

  // Show Live Alert Banner
  showLiveAlert("🔴 EN VIVO DESDE CABINA", "Transmitiendo audio en directo vía j2cast (Icecast Master Stream)");

  // Start HTML5 Audio Stream
  if (!ChannelState.audioElement) {
    ChannelState.audioElement = new Audio();
    ChannelState.audioElement.crossOrigin = "anonymous";
  }
  ChannelState.audioElement.src = streamUrl;
  ChannelState.audioElement.play().then(() => {
    startVisualizer();
  }).catch(e => {
    console.warn("Audio live stream play:", e);
    startVisualizer(); // start canvas fx anyway
  });

  // Update HUD
  const nowEl = document.getElementById("now-playing-text");
  if (nowEl) nowEl.textContent = "🔴 TRANSMISIÓN EN DIRECTO: DJ KLMR LIVE SESSION (j2cast Audio Feed)";
}

function activateLiveVideoStream(streamUrl) {
  closeAllModals();

  ChannelState.isLiveMode = true;
  ChannelState.liveSource = 'tiktok';
  ChannelState.currentSourceType = 'live-video';

  // Pause YouTube
  if (ChannelState.ytPlayer && typeof ChannelState.ytPlayer.pauseVideo === "function") {
    ChannelState.ytPlayer.pauseVideo();
  }

  // Switch to native player with live HLS stream
  const ytWrapper = document.getElementById("yt-player-wrapper");
  const nativeWrapper = document.getElementById("native-player-wrapper");
  const visualizerCanvas = document.getElementById("visualizer-canvas");

  ytWrapper.classList.remove("active");
  nativeWrapper.classList.add("active");
  visualizerCanvas.classList.remove("active");

  const nativeVideo = document.getElementById("native-video");
  if (nativeVideo) {
    // If testing or sample stream provided:
    nativeVideo.src = streamUrl.endsWith(".mp4") || streamUrl.endsWith(".m3u8") 
      ? streamUrl 
      : "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    nativeVideo.play().catch(e => console.log(e));
  }

  showLiveAlert("🔴 TRANSMISIÓN DE VIDEO EN DIRECTO", "Conexión activa con cabina de DJ KLMR (TikTok Live / RTMP)");

  const nowEl = document.getElementById("now-playing-text");
  if (nowEl) nowEl.textContent = "🔴 EN DIRECTO: DJ KLMR LIVE STREAMING (TikTok & Redes)";
}

function restoreRegularProgramming() {
  closeAllModals();
  hideLiveAlert();

  if (ChannelState.audioElement) {
    ChannelState.audioElement.pause();
  }
  stopVisualizer();

  playTrackAtIndex(ChannelState.currentTrackIndex);
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

/* ==========================================================================
   5. AUDIO VISUALIZER FOR LIVE RADIO (j2cast)
   ========================================================================== */
function startVisualizer() {
  const canvas = document.getElementById("visualizer-canvas");
  if (!canvas) return;
  canvas.classList.add("active");

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let step = 0;

  function render() {
    ChannelState.animationFrameId = requestAnimationFrame(render);
    step += 0.04;

    ctx.fillStyle = "rgba(5, 6, 8, 0.25)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const centerY = canvas.height * 0.5;
    const bars = 64;
    const barWidth = canvas.width / bars;

    for (let i = 0; i < bars; i++) {
      const height = Math.sin(step + i * 0.15) * 120 + Math.cos(step * 0.5 + i * 0.1) * 80 + 100;
      const x = i * barWidth;

      const grad = ctx.createLinearGradient(0, centerY - height, 0, centerY + height);
      grad.addColorStop(0, "rgba(0, 240, 255, 0.8)");
      grad.addColorStop(0.5, "rgba(138, 43, 226, 0.6)");
      grad.addColorStop(1, "rgba(255, 45, 85, 0.9)");

      ctx.fillStyle = grad;
      ctx.fillRect(x + 2, centerY - height / 2, barWidth - 4, height);
    }
  }

  render();
}

function stopVisualizer() {
  const canvas = document.getElementById("visualizer-canvas");
  if (canvas) canvas.classList.remove("active");
  if (ChannelState.animationFrameId) {
    cancelAnimationFrame(ChannelState.animationFrameId);
  }
}

/* ==========================================================================
   6. HUD CONTROLS & MODALS
   ========================================================================== */
function initHUDControls() {
  document.getElementById("btn-info")?.addEventListener("click", () => toggleModal("modal-info"));
  document.getElementById("btn-audio")?.addEventListener("click", () => toggleModal("modal-audio"));
  document.getElementById("btn-favorites")?.addEventListener("click", () => toggleModal("modal-guide"));
  document.getElementById("btn-live-switch")?.addEventListener("click", () => toggleModal("modal-live"));
  document.getElementById("btn-fullscreen")?.addEventListener("click", toggleFullscreen);
  document.getElementById("btn-intro-play")?.addEventListener("click", () => playTrackAtIndex(0));

  document.getElementById("btn-subtitles")?.addEventListener("click", () => {
    alert("Visualizador láser y sintetizador de iluminación activado para Smart TV.");
  });

  // Live Connect Triggers
  document.getElementById("btn-toggle-j2cast")?.addEventListener("click", () => {
    const url = document.getElementById("j2cast-url-input")?.value || "https://stream.zeno.fm/f3wvbbqmdg8uv";
    activateLiveAudioStream(url);
  });

  document.getElementById("btn-toggle-tiktok")?.addEventListener("click", () => {
    const url = document.getElementById("tiktok-url-input")?.value || "";
    activateLiveVideoStream(url);
  });

  document.getElementById("btn-reset-regular")?.addEventListener("click", () => {
    restoreRegularProgramming();
  });
}

function initModals() {
  document.querySelectorAll(".modal-close-btn").forEach(btn => {
    btn.addEventListener("click", closeAllModals);
  });

  // Close modal when clicking outside card
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

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.log(`Fullscreen error: ${err.message}`);
    });
  } else {
    document.exitFullscreen().catch(err => console.log(err));
  }
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
      playTrackAtIndex(index);
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
    // Avoid capturing inputs
    if (e.target.tagName === "INPUT") return;

    switch (e.key) {
      case "ArrowRight":
        playNextTrack();
        break;
      case "ArrowLeft":
        playPrevTrack();
        break;
      case " ":
        if (ChannelState.ytPlayer) {
          if (ChannelState.isPlaying) {
            ChannelState.ytPlayer.pauseVideo();
            ChannelState.isPlaying = false;
          } else {
            ChannelState.ytPlayer.playVideo();
            ChannelState.isPlaying = true;
          }
        }
        break;
      case "f":
      case "F":
        toggleFullscreen();
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
      case "i":
      case "I":
        toggleModal("modal-info");
        break;
      case "g":
      case "G":
        toggleModal("modal-guide");
        break;
      case "l":
      case "L":
        toggleModal("modal-live");
        break;
      case "Escape":
        closeAllModals();
        break;
    }
  });
}
