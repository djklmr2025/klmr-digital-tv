/**
 * KLMR OFFICIAL CHANNEL HD - Interactive Electronic Music TV Engine
 * Intro Loading Curtain (intro.mp4) -> Real-Time Continuous 24/7 Linear Broadcast Timeline
 */

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

const BroadcastPlaylist = [
  {
    "id": "yt-7CmxP78alCk",
    "title": "Vamos a vivir",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "source": "youtube",
    "youtubeId": "7CmxP78alCk",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-7CmxP78alCk.mp4",
    "duration": 205,
    "bpm": 124,
    "badge": "CANAL OFICIAL HD",
    "thumbnail": "assets/logo-chrome-3d.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-7CmxP78alCk.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1012
  },
  {
    "id": "yt-yIhw58dVYsk",
    "title": "Stay for a while - VMOST Theme By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "source": "youtube",
    "youtubeId": "yIhw58dVYsk",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-yIhw58dVYsk.mp4",
    "duration": 244,
    "bpm": 125,
    "badge": "VREMIX EXCLUSIVO",
    "thumbnail": "assets/tiesto.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-yIhw58dVYsk.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1012
  },
  {
    "id": "yt-psmn4o-PfTE",
    "title": "Todavia en el mismo lugar - By_ djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "source": "youtube",
    "youtubeId": "psmn4o-PfTE",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-psmn4o-PfTE.mp4",
    "duration": 215,
    "bpm": 126,
    "badge": "PRODUCCIÓN ORIGINAL",
    "thumbnail": "assets/logo-klmr.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-psmn4o-PfTE.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-HUKOy-Qy_no",
    "title": "Le ciel est lourd au dessus de nous - VMOST Theme By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "source": "youtube",
    "youtubeId": "HUKOy-Qy_no",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-HUKOy-Qy_no.mp4",
    "duration": 203,
    "bpm": 127,
    "badge": "CLUB SESSION 24/7",
    "thumbnail": "assets/klmr-2025-hd.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-HUKOy-Qy_no.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1012
  },
  {
    "id": "yt-sLfrbg5hfG4",
    "title": "Citricos y Sal Videoclip Oficial",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "source": "youtube",
    "youtubeId": "sLfrbg5hfG4",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-sLfrbg5hfG4.mp4",
    "duration": 164,
    "bpm": 128,
    "badge": "FESTIVAL VIP",
    "thumbnail": "assets/zamna.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-sLfrbg5hfG4.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-r7Tf_hgvH3c",
    "title": "La Noche VREMIX By DJKLMR & DJ TIESTO",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "source": "youtube",
    "youtubeId": "r7Tf_hgvH3c",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-r7Tf_hgvH3c.mp4",
    "duration": 385,
    "bpm": 129,
    "badge": "VEDIT OFICIAL",
    "thumbnail": "assets/logo-hd.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-r7Tf_hgvH3c.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1012
  },
  {
    "id": "yt-kkTj9x4kCC8",
    "title": "Toy Story 5 Trailer Song, Never Tears Us Apart INXS VRemix By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "source": "youtube",
    "youtubeId": "kkTj9x4kCC8",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-kkTj9x4kCC8.mp4",
    "duration": 589,
    "bpm": 124,
    "badge": "MAIN STAGE HD",
    "thumbnail": "assets/logo-medal-3d.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-kkTj9x4kCC8.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1012
  },
  {
    "id": "yt-QhFc871NS08",
    "title": "Siinamota - Young Girl A Video Kayzo Trap (VEdit By vdjklmr)",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "source": "youtube",
    "youtubeId": "QhFc871NS08",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-QhFc871NS08.mp4",
    "duration": 243,
    "bpm": 125,
    "badge": "GLOBAL BROADCAST",
    "thumbnail": "assets/logo-official-3.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-QhFc871NS08.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1012
  },
  {
    "id": "yt-ipCA5-k32xY",
    "title": "Airport DJ Pp Remix (By Video Edit VDJKLMR)",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "source": "youtube",
    "youtubeId": "ipCA5-k32xY",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-ipCA5-k32xY.mp4",
    "duration": 424,
    "bpm": 126,
    "badge": "CANAL OFICIAL HD",
    "thumbnail": "assets/logo-chrome-3d.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-ipCA5-k32xY.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-DmOoyR8RS7g",
    "title": "Juan Gabriel Bailando VEdit By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "source": "youtube",
    "youtubeId": "DmOoyR8RS7g",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-DmOoyR8RS7g.mp4",
    "duration": 424,
    "bpm": 127,
    "badge": "VREMIX EXCLUSIVO",
    "thumbnail": "assets/tiesto.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-DmOoyR8RS7g.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-RXzatHn8bNg",
    "title": "This Place - Nic Fanciulli Remix (VREMIX) By_vdj-klmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "source": "youtube",
    "youtubeId": "RXzatHn8bNg",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-RXzatHn8bNg.mp4",
    "duration": 426,
    "bpm": 128,
    "badge": "PRODUCCIÓN ORIGINAL",
    "thumbnail": "assets/logo-klmr.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-RXzatHn8bNg.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-pL0JulX7Rok",
    "title": "VREMIX Batery Low Battery Operated By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "source": "youtube",
    "youtubeId": "pL0JulX7Rok",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-pL0JulX7Rok.mp4",
    "duration": 236,
    "bpm": 129,
    "badge": "CLUB SESSION 24/7",
    "thumbnail": "assets/klmr-2025-hd.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-pL0JulX7Rok.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-oLifN2BbNiA",
    "title": "Taj Mahal VRemix by djklmr Official Video hd",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "source": "youtube",
    "youtubeId": "oLifN2BbNiA",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-oLifN2BbNiA.mp4",
    "duration": 228,
    "bpm": 124,
    "badge": "FESTIVAL VIP",
    "thumbnail": "assets/zamna.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-oLifN2BbNiA.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-6gFJQcTrcWs",
    "title": "Pyramid Coles Memories VRemix By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "source": "youtube",
    "youtubeId": "6gFJQcTrcWs",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-6gFJQcTrcWs.mp4",
    "duration": 180,
    "bpm": 125,
    "badge": "VEDIT OFICIAL",
    "thumbnail": "assets/logo-hd.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-6gFJQcTrcWs.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-iSwAcQ0jqNg",
    "title": "Me siento tan ritual VEdit by djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "source": "youtube",
    "youtubeId": "iSwAcQ0jqNg",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-iSwAcQ0jqNg.mp4",
    "duration": 224,
    "bpm": 126,
    "badge": "MAIN STAGE HD",
    "thumbnail": "assets/logo-medal-3d.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-iSwAcQ0jqNg.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-o4hPLMtAjMM",
    "title": "Queen Vs Fisher Bohemian Rhapsody Vs Losing It Official Video",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "source": "youtube",
    "youtubeId": "o4hPLMtAjMM",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-o4hPLMtAjMM.mp4",
    "duration": 227,
    "bpm": 127,
    "badge": "GLOBAL BROADCAST",
    "thumbnail": "assets/logo-official-3.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-o4hPLMtAjMM.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-oZ9U_yW_kFg",
    "title": "Miami Horror Making Of Album 2 Official VRemix",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "source": "youtube",
    "youtubeId": "oZ9U_yW_kFg",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-oZ9U_yW_kFg.mp4",
    "duration": 304,
    "bpm": 128,
    "badge": "CANAL OFICIAL HD",
    "thumbnail": "assets/logo-chrome-3d.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-oZ9U_yW_kFg.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-VwsXGweoHdw",
    "title": "Luis miguel Si no supiste amar VREMIX By djklmr & Roberth Steve Quiroga",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "source": "youtube",
    "youtubeId": "VwsXGweoHdw",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-VwsXGweoHdw.mp4",
    "duration": 360,
    "bpm": 129,
    "badge": "VREMIX EXCLUSIVO",
    "thumbnail": "assets/tiesto.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-VwsXGweoHdw.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-f-n-_HLo5ds",
    "title": "Doogy Degli Armonium. - Wanted (SE BUSCA) Vremix Mashup by_vdjklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "source": "youtube",
    "youtubeId": "f-n-_HLo5ds",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-f-n-_HLo5ds.mp4",
    "duration": 194,
    "bpm": 124,
    "badge": "PRODUCCIÓN ORIGINAL",
    "thumbnail": "assets/logo-klmr.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-f-n-_HLo5ds.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-sbENKabkuec",
    "title": "Luis Miguel Inolvidable Official VRemix By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "source": "youtube",
    "youtubeId": "sbENKabkuec",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-sbENKabkuec.mp4",
    "duration": 329,
    "bpm": 125,
    "badge": "CLUB SESSION 24/7",
    "thumbnail": "assets/klmr-2025-hd.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-sbENKabkuec.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-U54dJdK2uYA",
    "title": "Suave VEdit By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "source": "youtube",
    "youtubeId": "U54dJdK2uYA",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-U54dJdK2uYA.mp4",
    "duration": 300,
    "bpm": 126,
    "badge": "FESTIVAL VIP",
    "thumbnail": "assets/zamna.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-U54dJdK2uYA.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-bol5MWyZkD0",
    "title": "Culpable o no VEdit by djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "source": "youtube",
    "youtubeId": "bol5MWyZkD0",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-bol5MWyZkD0.mp4",
    "duration": 331,
    "bpm": 127,
    "badge": "VEDIT OFICIAL",
    "thumbnail": "assets/logo-hd.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-bol5MWyZkD0.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-hfcAPyqNWLE",
    "title": "We Will Rock You, Bossa Nova! Mashup by djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "source": "youtube",
    "youtubeId": "hfcAPyqNWLE",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-hfcAPyqNWLE.mp4",
    "duration": 254,
    "bpm": 128,
    "badge": "MAIN STAGE HD",
    "thumbnail": "assets/logo-medal-3d.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-hfcAPyqNWLE.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-vWb7u3FqLt8",
    "title": "Amigos Invencibles - La que me Gusta VRemix by_djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "source": "youtube",
    "youtubeId": "vWb7u3FqLt8",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-vWb7u3FqLt8.mp4",
    "duration": 312,
    "bpm": 129,
    "badge": "GLOBAL BROADCAST",
    "thumbnail": "assets/logo-official-3.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-vWb7u3FqLt8.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-fblzi3B-UuI",
    "title": "Hector Lavoe Remix by djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "source": "youtube",
    "youtubeId": "fblzi3B-UuI",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-fblzi3B-UuI.mp4",
    "duration": 505,
    "bpm": 125,
    "badge": "VREMIX EXCLUSIVO",
    "thumbnail": "assets/tiesto.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-fblzi3B-UuI.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-fWOf3x7zTUc",
    "title": "Hey Sunshine VEdit By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "source": "youtube",
    "youtubeId": "fWOf3x7zTUc",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-fWOf3x7zTUc.mp4",
    "duration": 392,
    "bpm": 126,
    "badge": "PRODUCCIÓN ORIGINAL",
    "thumbnail": "assets/logo-klmr.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-fWOf3x7zTUc.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-2r-OeSqB8hk",
    "title": "Juntos Bsno Valzzi Official Video By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "source": "youtube",
    "youtubeId": "2r-OeSqB8hk",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-2r-OeSqB8hk.mp4",
    "duration": 194,
    "bpm": 127,
    "badge": "CLUB SESSION 24/7",
    "thumbnail": "assets/klmr-2025-hd.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-2r-OeSqB8hk.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-jI3Yzw2fQ2o",
    "title": "LP Lost On You extended remix",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "source": "youtube",
    "youtubeId": "jI3Yzw2fQ2o",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-jI3Yzw2fQ2o.mp4",
    "duration": 199,
    "bpm": 128,
    "badge": "FESTIVAL VIP",
    "thumbnail": "assets/zamna.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-jI3Yzw2fQ2o.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-RPoxn0WJ7w8",
    "title": "loves in the air",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "source": "youtube",
    "youtubeId": "RPoxn0WJ7w8",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-RPoxn0WJ7w8.mp4",
    "duration": 273,
    "bpm": 129,
    "badge": "VEDIT OFICIAL",
    "thumbnail": "assets/logo-hd.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-RPoxn0WJ7w8.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-xURN-tEugKU",
    "title": "Kartashow Мари Краймбрери Золото Rakurs Ram",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "source": "youtube",
    "youtubeId": "xURN-tEugKU",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-xURN-tEugKU.mp4",
    "duration": 260,
    "bpm": 124,
    "badge": "MAIN STAGE HD",
    "thumbnail": "assets/logo-medal-3d.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-xURN-tEugKU.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-pN3r-xBZcIE",
    "title": "Benne Supalonely VRemix By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "source": "youtube",
    "youtubeId": "pN3r-xBZcIE",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-pN3r-xBZcIE.mp4",
    "duration": 226,
    "bpm": 125,
    "badge": "GLOBAL BROADCAST",
    "thumbnail": "assets/logo-official-3.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-pN3r-xBZcIE.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-mnfnbVesHrg",
    "title": "Bob sinclair Shaba VEdit By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "source": "youtube",
    "youtubeId": "mnfnbVesHrg",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-mnfnbVesHrg.mp4",
    "duration": 342,
    "bpm": 126,
    "badge": "CANAL OFICIAL HD",
    "thumbnail": "assets/logo-chrome-3d.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-mnfnbVesHrg.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-EIHrIGpwTUE",
    "title": "Sunshine Afro Costa",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "source": "youtube",
    "youtubeId": "EIHrIGpwTUE",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-EIHrIGpwTUE.mp4",
    "duration": 191,
    "bpm": 127,
    "badge": "VREMIX EXCLUSIVO",
    "thumbnail": "assets/tiesto.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-EIHrIGpwTUE.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-XyXfo4HIeP8",
    "title": "Sunshine Tribal",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "source": "youtube",
    "youtubeId": "XyXfo4HIeP8",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-XyXfo4HIeP8.mp4",
    "duration": 220,
    "bpm": 128,
    "badge": "PRODUCCIÓN ORIGINAL",
    "thumbnail": "assets/logo-klmr.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-XyXfo4HIeP8.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1012
  },
  {
    "id": "yt-VHytGF4Alvs",
    "title": "I m just a DJ - Female Voice English Version",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "source": "youtube",
    "youtubeId": "VHytGF4Alvs",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-VHytGF4Alvs.mp4",
    "duration": 205,
    "bpm": 129,
    "badge": "CLUB SESSION 24/7",
    "thumbnail": "assets/klmr-2025-hd.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-VHytGF4Alvs.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1012
  },
  {
    "id": "yt-JCbZJmIFzTc",
    "title": "LOVE STORY Vals Version 2024 by djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "source": "youtube",
    "youtubeId": "JCbZJmIFzTc",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-JCbZJmIFzTc.mp4",
    "duration": 321,
    "bpm": 124,
    "badge": "FESTIVAL VIP",
    "thumbnail": "assets/zamna.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-JCbZJmIFzTc.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-LRa1s_4QaJU",
    "title": "황금 다락방 By djklmr Original VRemix VideoEditt Plastika 01",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "source": "youtube",
    "youtubeId": "LRa1s_4QaJU",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-LRa1s_4QaJU.mp4",
    "duration": 187,
    "bpm": 125,
    "badge": "VEDIT OFICIAL",
    "thumbnail": "assets/logo-hd.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-LRa1s_4QaJU.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1012
  },
  {
    "id": "yt-z8HYbmwUGYI",
    "title": "Heaven's Doorstep 2 By djklmr VEDIT",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "source": "youtube",
    "youtubeId": "z8HYbmwUGYI",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-z8HYbmwUGYI.mp4",
    "duration": 205,
    "bpm": 126,
    "badge": "MAIN STAGE HD",
    "thumbnail": "assets/logo-medal-3d.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-z8HYbmwUGYI.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1012
  },
  {
    "id": "yt-OH_If-vgdEs",
    "title": "Heaven's Doorstep 1 By djklmr VEDIT",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "source": "youtube",
    "youtubeId": "OH_If-vgdEs",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-OH_If-vgdEs.mp4",
    "duration": 223,
    "bpm": 127,
    "badge": "GLOBAL BROADCAST",
    "thumbnail": "assets/logo-official-3.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-OH_If-vgdEs.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1012
  },
  {
    "id": "yt-AYMQZbzx_dU",
    "title": "Blisser - Suzy Sheer (VEDIT By_VDJKLMR)",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "source": "youtube",
    "youtubeId": "AYMQZbzx_dU",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-AYMQZbzx_dU.mp4",
    "duration": 219,
    "bpm": 128,
    "badge": "CANAL OFICIAL HD",
    "thumbnail": "assets/logo-chrome-3d.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-AYMQZbzx_dU.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1012
  },
  {
    "id": "yt-TxjzaPIFzXU",
    "title": "Ella ya me Olvido - Leonardo Flavio (By_vdjklmr & Roberth Steve Quiroga) VREMIX",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "source": "youtube",
    "youtubeId": "TxjzaPIFzXU",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-TxjzaPIFzXU.mp4",
    "duration": 363,
    "bpm": 129,
    "badge": "VREMIX EXCLUSIVO",
    "thumbnail": "assets/tiesto.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-TxjzaPIFzXU.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-9E8ayj0QvuA",
    "title": "Im Not In love VRemix By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "source": "youtube",
    "youtubeId": "9E8ayj0QvuA",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-9E8ayj0QvuA.mp4",
    "duration": 340,
    "bpm": 124,
    "badge": "PRODUCCIÓN ORIGINAL",
    "thumbnail": "assets/logo-klmr.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-9E8ayj0QvuA.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-EuKtIiPC3DA",
    "title": "Rise Eric Kupper VRemix By djklmr Ft Samantha James & Eric Kupper mp3",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "source": "youtube",
    "youtubeId": "EuKtIiPC3DA",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-EuKtIiPC3DA.mp4",
    "duration": 453,
    "bpm": 125,
    "badge": "CLUB SESSION 24/7",
    "thumbnail": "assets/klmr-2025-hd.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-EuKtIiPC3DA.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-pQvXKUPxt_8",
    "title": "PiuPiu Dance TikTok VEdit By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "source": "youtube",
    "youtubeId": "pQvXKUPxt_8",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-pQvXKUPxt_8.mp4",
    "duration": 222,
    "bpm": 127,
    "badge": "VEDIT OFICIAL",
    "thumbnail": "assets/logo-hd.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-pQvXKUPxt_8.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-6b_W2TCKqQE",
    "title": "New soul yael naim tik tok remix",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "source": "youtube",
    "youtubeId": "6b_W2TCKqQE",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-6b_W2TCKqQE.mp4",
    "duration": 211,
    "bpm": 128,
    "badge": "MAIN STAGE HD",
    "thumbnail": "assets/logo-medal-3d.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-6b_W2TCKqQE.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-fESM5051BaA",
    "title": "Navidad in Japan",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "source": "youtube",
    "youtubeId": "fESM5051BaA",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-fESM5051BaA.mp4",
    "duration": 286,
    "bpm": 129,
    "badge": "GLOBAL BROADCAST",
    "thumbnail": "assets/logo-official-3.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-fESM5051BaA.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-AIPmMpgjVvQ",
    "title": "Room 5 Ft Oliver Cheatham - Make Luv - Official VREMIX Video",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "source": "youtube",
    "youtubeId": "AIPmMpgjVvQ",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-AIPmMpgjVvQ.mp4",
    "duration": 185,
    "bpm": 124,
    "badge": "CANAL OFICIAL HD",
    "thumbnail": "assets/logo-chrome-3d.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-AIPmMpgjVvQ.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-EHnDJf40RUM",
    "title": "Down the Isle Sunfriends, Paul Richmond VRemix",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "source": "youtube",
    "youtubeId": "EHnDJf40RUM",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-EHnDJf40RUM.mp4",
    "duration": 276,
    "bpm": 125,
    "badge": "VREMIX EXCLUSIVO",
    "thumbnail": "assets/tiesto.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-EHnDJf40RUM.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-l7bb9Kc9qTI",
    "title": "Moony Dove Ill be loving you VRemix Version EDM 2020",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "source": "youtube",
    "youtubeId": "l7bb9Kc9qTI",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-l7bb9Kc9qTI.mp4",
    "duration": 307,
    "bpm": 127,
    "badge": "CLUB SESSION 24/7",
    "thumbnail": "assets/klmr-2025-hd.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-l7bb9Kc9qTI.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-aMIp4HHIpuQ",
    "title": "Mazinger Z vs Hawaii 5 0 Mashup VRemix",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "source": "youtube",
    "youtubeId": "aMIp4HHIpuQ",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-aMIp4HHIpuQ.mp4",
    "duration": 150,
    "bpm": 128,
    "badge": "FESTIVAL VIP",
    "thumbnail": "assets/zamna.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-aMIp4HHIpuQ.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-Qn9BZIRXrZo",
    "title": "Lost Rogger Sanchez VRemix Hous Version by djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "source": "youtube",
    "youtubeId": "Qn9BZIRXrZo",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-Qn9BZIRXrZo.mp4",
    "duration": 533,
    "bpm": 129,
    "badge": "VEDIT OFICIAL",
    "thumbnail": "assets/logo-hd.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-Qn9BZIRXrZo.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-qOmL2r2ehEI",
    "title": "Intro Presentation 2008 djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "source": "youtube",
    "youtubeId": "qOmL2r2ehEI",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-qOmL2r2ehEI.mp4",
    "duration": 308,
    "bpm": 124,
    "badge": "MAIN STAGE HD",
    "thumbnail": "assets/logo-medal-3d.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-qOmL2r2ehEI.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-6Ob8hJhbnLs",
    "title": "Hai Phút Hon Remix By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "source": "youtube",
    "youtubeId": "6Ob8hJhbnLs",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-6Ob8hJhbnLs.mp4",
    "duration": 234,
    "bpm": 127,
    "badge": "VREMIX EXCLUSIVO",
    "thumbnail": "assets/tiesto.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-6Ob8hJhbnLs.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-3zfm4yR808A",
    "title": "Fugees Killing Me Softly With His Song RDawe DankL Club Mix",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "source": "youtube",
    "youtubeId": "3zfm4yR808A",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-3zfm4yR808A.mp4",
    "duration": 215,
    "bpm": 128,
    "badge": "PRODUCCIÓN ORIGINAL",
    "thumbnail": "assets/logo-klmr.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-3zfm4yR808A.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-GPbSG7M_dO8",
    "title": "GALACTICO",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "source": "youtube",
    "youtubeId": "GPbSG7M_dO8",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-GPbSG7M_dO8.mp4",
    "duration": 376,
    "bpm": 129,
    "badge": "CLUB SESSION 24/7",
    "thumbnail": "assets/klmr-2025-hd.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-GPbSG7M_dO8.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-nLVP4DzSUmk",
    "title": "Brian Mart Hadley Electro Cornetas Official Video VRemix By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "source": "youtube",
    "youtubeId": "nLVP4DzSUmk",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-nLVP4DzSUmk.mp4",
    "duration": 333,
    "bpm": 127,
    "badge": "GLOBAL BROADCAST",
    "thumbnail": "assets/logo-official-3.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-nLVP4DzSUmk.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-ZRyl__brhaw",
    "title": "Crep VRemix R3HAB vs Gattuso",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "source": "youtube",
    "youtubeId": "ZRyl__brhaw",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-ZRyl__brhaw.mp4",
    "duration": 162,
    "bpm": 128,
    "badge": "CANAL OFICIAL HD",
    "thumbnail": "assets/logo-chrome-3d.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-ZRyl__brhaw.mp4",
    "format": "mp4",
    "width": 720,
    "height": 720
  },
  {
    "id": "yt-TQ0sdbohvC4",
    "title": "Crystal Dolphin Engelwood VRemix",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "source": "youtube",
    "youtubeId": "TQ0sdbohvC4",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-TQ0sdbohvC4.mp4",
    "duration": 121,
    "bpm": 129,
    "badge": "VREMIX EXCLUSIVO",
    "thumbnail": "assets/tiesto.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-TQ0sdbohvC4.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-d7vJMbM_Trs",
    "title": "Do U Wanna VRemix By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "source": "youtube",
    "youtubeId": "d7vJMbM_Trs",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-d7vJMbM_Trs.mp4",
    "duration": 241,
    "bpm": 125,
    "badge": "CLUB SESSION 24/7",
    "thumbnail": "assets/klmr-2025-hd.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-d7vJMbM_Trs.mp4",
    "format": "mp4",
    "width": 720,
    "height": 720
  },
  {
    "id": "yt-EoQd73j5SAY",
    "title": "Don't Start Now Dua Lipa Club Remix",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "source": "youtube",
    "youtubeId": "EoQd73j5SAY",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-EoQd73j5SAY.mp4",
    "duration": 237,
    "bpm": 126,
    "badge": "FESTIVAL VIP",
    "thumbnail": "assets/zamna.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-EoQd73j5SAY.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-bUFPCO-bzXE",
    "title": "Barbye Girl - Aqua VRemix ft by_djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "source": "youtube",
    "youtubeId": "bUFPCO-bzXE",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-bUFPCO-bzXE.mp4",
    "duration": 192,
    "bpm": 127,
    "badge": "VEDIT OFICIAL",
    "thumbnail": "assets/logo-hd.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-bUFPCO-bzXE.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "yt-IQmAZ5_W6c8",
    "title": "Dezko Ascend Official VRemix by ft VJ djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "source": "youtube",
    "youtubeId": "IQmAZ5_W6c8",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-IQmAZ5_W6c8.mp4",
    "duration": 220,
    "bpm": 128,
    "badge": "MAIN STAGE HD",
    "thumbnail": "assets/logo-medal-3d.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-IQmAZ5_W6c8.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "yt-_2bZo596TQA",
    "title": "Fifty Fifty - Cupid (VRemix) (by_djklmr) ft Video Versión!.",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "source": "youtube",
    "youtubeId": "_2bZo596TQA",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-_2bZo596TQA.mp4",
    "duration": 228,
    "bpm": 129,
    "badge": "GLOBAL BROADCAST",
    "thumbnail": "assets/logo-official-3.png",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-_2bZo596TQA.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "drive-1JPBC2jeNcZs",
    "title": "Martin Solveig - The Night Out (Madeon Remix) (Official Video HD)",
    "artist": "Martin Solveig",
    "genre": "MAIN STAGE EDM / ELECTRO HOUSE",
    "source": "drive",
    "fileId": "1JPBC2jeNcZsUJGXFS-djnprFv9cq4Tb-",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1JPBC2jeNcZs.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1JPBC2jeNcZs.mp4",
    "duration": 187,
    "bpm": 128,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/zamna.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1JPBC2jeNcZs.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "drive-1I_Mvfj-sMlZ",
    "title": "Fly Project - Mandala (Official Video)",
    "artist": "Fly Project",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1I_Mvfj-sMlZR_1OUISK-nLW2qhen8I53",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1I_Mvfj-sMlZ.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1I_Mvfj-sMlZ.mp4",
    "duration": 219,
    "bpm": 129,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-hd.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1I_Mvfj-sMlZ.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "drive-1TVWrinOyQgU",
    "title": "FLY PROJECT - Goodbye (Official Video)",
    "artist": "FLY PROJECT",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1TVWrinOyQgUjHaf4EHL6DQZbzXINQ9xo",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1TVWrinOyQgU.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1TVWrinOyQgU.mp4",
    "duration": 190,
    "bpm": 124,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-medal-3d.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1TVWrinOyQgU.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "drive-14add5G1kquf",
    "title": "DJ Fresh ft. Rita Ora - Hot Right Now (Official Video)",
    "artist": "DJ Fresh ft. Rita Ora",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "14add5G1kquf_hsNOopQBtNT-0k1FgcwQ",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-14add5G1kquf.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-14add5G1kquf.mp4",
    "duration": 185,
    "bpm": 125,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-official-3.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-14add5G1kquf.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "drive-1Nh6RD-lJUyC",
    "title": "WTF! - Da Bop Official Video HD 1080p(Hit Lata 2012!)",
    "artist": "WTF!",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1Nh6RD-lJUyCFj4WBPUrbXDXIuChQoyIC",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1Nh6RD-lJUyC.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1Nh6RD-lJUyC.mp4",
    "duration": 196,
    "bpm": 126,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-chrome-3d.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1Nh6RD-lJUyC.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "drive-1Q7jCmA1w4ZA",
    "title": "Low Deep T Big Love (Official Video)",
    "artist": "DJ KLMR Vault HD",
    "genre": "DEEP HOUSE / CLUB GROOVE",
    "source": "drive",
    "fileId": "1Q7jCmA1w4ZAkERv7OHEZ4fiOG_J7XoY9",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1Q7jCmA1w4ZA.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1Q7jCmA1w4ZA.mp4",
    "duration": 255,
    "bpm": 127,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/tiesto.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1Q7jCmA1w4ZA.mp4",
    "format": "mp4",
    "width": 1906,
    "height": 1080
  },
  {
    "id": "drive-1RfjQdCJ_qu-",
    "title": "Dabruck Klein feat. Ollie James - I Found Love (Official Music Video) 4K",
    "artist": "Dabruck Klein feat. Ollie James",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1RfjQdCJ_qu-TSBKF3v4YOYm3xKQFdS9C",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1RfjQdCJ_qu-.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1RfjQdCJ_qu-.mp4",
    "duration": 246,
    "bpm": 128,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-klmr.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1RfjQdCJ_qu-.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 960
  },
  {
    "id": "drive-1EO12GA3EEtu",
    "title": "JAWNY - Honeypie (Official Video)",
    "artist": "JAWNY",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1EO12GA3EEtuJ2aco-INKscD3dWVgQEXd",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1EO12GA3EEtu.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1EO12GA3EEtu.mp4",
    "duration": 150,
    "bpm": 129,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/klmr-2025-hd.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1EO12GA3EEtu.mp4",
    "format": "mp4",
    "width": 1620,
    "height": 1080
  },
  {
    "id": "drive-1nG56ozAvigQ",
    "title": "Testa Rossa - Midnight Love",
    "artist": "Testa Rossa",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1nG56ozAvigQ378tj3W9ty6xSn649nqVZ",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1nG56ozAvigQ.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1nG56ozAvigQ.mp4",
    "duration": 171,
    "bpm": 124,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/zamna.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1nG56ozAvigQ.mp4",
    "format": "mp4",
    "width": 1472,
    "height": 1080
  },
  {
    "id": "drive-1I5JR3EcuVFo",
    "title": "Hansel LeBlanc - We Control the Noise (Official Music Video)",
    "artist": "Hansel LeBlanc",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1I5JR3EcuVFohhmzYh7cWL0DdnTegbRm1",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1I5JR3EcuVFo.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1I5JR3EcuVFo.mp4",
    "duration": 318,
    "bpm": 129,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/tiesto.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1I5JR3EcuVFo.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1RbiI1e_N3H7",
    "title": "Kylie Minogue - In My Arms (Official Video)",
    "artist": "Kylie Minogue",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1RbiI1e_N3H7Vd5U4U2FDMnd3erkCvLLG",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1RbiI1e_N3H7.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1RbiI1e_N3H7.mp4",
    "duration": 221,
    "bpm": 124,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-klmr.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1RbiI1e_N3H7.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1z4LHDqKKBPJ",
    "title": "Kylie Minogue - In Your Eyes (Official Video)",
    "artist": "Kylie Minogue",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1z4LHDqKKBPJDaGFHpMbfOr61Y6cYtP4L",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1z4LHDqKKBPJ.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1z4LHDqKKBPJ.mp4",
    "duration": 199,
    "bpm": 125,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/klmr-2025-hd.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1z4LHDqKKBPJ.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1abHIVcMludu",
    "title": "PH Electro - Englishman In New York (Official Video)",
    "artist": "PH Electro",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1abHIVcMludumFw5UIws3gQhDsvwTO_gn",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1abHIVcMludu.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1abHIVcMludu.mp4",
    "duration": 175,
    "bpm": 127,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-hd.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1abHIVcMludu.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1pIASq1-6QZX",
    "title": "Miki Matsubara Mayonaka no Door -stay with me (Music Video) 2023 by Fridman Sisters",
    "artist": "DJ KLMR Vault HD",
    "genre": "FUTURE FUNK / NU-DISCO",
    "source": "drive",
    "fileId": "1pIASq1-6QZXbsK1hqC54HdwN7nXJj4HY",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1pIASq1-6QZX.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1pIASq1-6QZX.mp4",
    "duration": 374,
    "bpm": 128,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-medal-3d.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1pIASq1-6QZX.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1SaARuhBT8Yz",
    "title": "Simplu - Oficial VEDIT 4K By_djklmr",
    "artist": "Simplu",
    "genre": "ELECTRONIC VREMIX / KLMR",
    "source": "drive",
    "fileId": "1SaARuhBT8YzOO765ieLZ-yJIR-Yg2InR",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1SaARuhBT8Yz.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1SaARuhBT8Yz.mp4",
    "duration": 258,
    "bpm": 129,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-official-3.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1SaARuhBT8Yz.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1kiNe0G6vld2",
    "title": "Rauf & Faik - (Berke Yurdakul Remix)",
    "artist": "Rauf & Faik",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1kiNe0G6vld2xXr6nMTIw9SZLcK-F2Lyw",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1kiNe0G6vld2.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1kiNe0G6vld2.mp4",
    "duration": 275,
    "bpm": 124,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-chrome-3d.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1kiNe0G6vld2.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1Mri0kJkhoTk",
    "title": "PH Electro - San Francisco (Official Video HD)",
    "artist": "PH Electro",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1Mri0kJkhoTkvJD_DKcgL7LMYimXfik4U",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1Mri0kJkhoTk.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1Mri0kJkhoTk.mp4",
    "duration": 198,
    "bpm": 127,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/klmr-2025-hd.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1Mri0kJkhoTk.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1uYBpHHV9PSO",
    "title": "Aint No Mountain High Enough - Marvin Gaye (VRemix by djklmr)",
    "artist": "Aint No Mountain High Enough",
    "genre": "ELECTRONIC VREMIX / KLMR",
    "source": "drive",
    "fileId": "1uYBpHHV9PSOdU5ROaZxYAOTsDqPIQlIK",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1uYBpHHV9PSO.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1uYBpHHV9PSO.mp4",
    "duration": 380,
    "bpm": 128,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/zamna.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1uYBpHHV9PSO.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1mNbDT_sw6CC",
    "title": "The Black Madonna - We Can Never Be Apart (Original Mix)",
    "artist": "The Black Madonna",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1mNbDT_sw6CC7n8HGKGODbP0mw71R0-AT",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1mNbDT_sw6CC.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1mNbDT_sw6CC.mp4",
    "duration": 450,
    "bpm": 129,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-hd.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1mNbDT_sw6CC.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1dbLgWn4VwXI",
    "title": "Elton John_ Dua Lipa - Cold Heart (PNAU Remix) (Official Video)",
    "artist": "Elton John_ Dua Lipa",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1dbLgWn4VwXI16Rq1o4dwqhfEyVb_CpwU",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1dbLgWn4VwXI.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1dbLgWn4VwXI.mp4",
    "duration": 254,
    "bpm": 124,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-medal-3d.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1dbLgWn4VwXI.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-11OAGKfxnAxD",
    "title": "Years Years - Desire VRemix By_djklmr",
    "artist": "Years Years",
    "genre": "ELECTRONIC VREMIX / KLMR",
    "source": "drive",
    "fileId": "11OAGKfxnAxDDtVUOIqUkalUYhbPsMrow",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-11OAGKfxnAxD.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-11OAGKfxnAxD.mp4",
    "duration": 300,
    "bpm": 126,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-chrome-3d.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-11OAGKfxnAxD.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-16b9MDEPzjBd",
    "title": "Fedde Le Grand - So Much Love Official Music Video",
    "artist": "Fedde Le Grand",
    "genre": "MAIN STAGE EDM / ELECTRO HOUSE",
    "source": "drive",
    "fileId": "16b9MDEPzjBd5oipjDD2ixQEaI-B9df18",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-16b9MDEPzjBd.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-16b9MDEPzjBd.mp4",
    "duration": 242,
    "bpm": 127,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/tiesto.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-16b9MDEPzjBd.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1HP7vDYWYpBc",
    "title": "Vicetone & Tony Igy - Astronomia (shuffle Remix)",
    "artist": "Vicetone & Tony Igy",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1HP7vDYWYpBcHYIHNnQUCaI6yr3xb0ofn",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1HP7vDYWYpBc.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1HP7vDYWYpBc.mp4",
    "duration": 227,
    "bpm": 128,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-klmr.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1HP7vDYWYpBc.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1UwEY7_cL6xJ",
    "title": "One More Time - Matroda vs Djklmr (VRemix)",
    "artist": "One More Time",
    "genre": "ELECTRONIC VREMIX / KLMR",
    "source": "drive",
    "fileId": "1UwEY7_cL6xJH6uVYwrpqNZdZiY19sR7K",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1UwEY7_cL6xJ.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1UwEY7_cL6xJ.mp4",
    "duration": 298,
    "bpm": 129,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/klmr-2025-hd.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1UwEY7_cL6xJ.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1LT2Pn7g_wH_",
    "title": "The Rapture - Sister Saviour (Cs.Sz.b. feat . Cs.R.b.)",
    "artist": "The Rapture",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1LT2Pn7g_wH_GC7LMuHe3EnXPbS41sz3O",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1LT2Pn7g_wH_.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1LT2Pn7g_wH_.mp4",
    "duration": 250,
    "bpm": 124,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/zamna.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1LT2Pn7g_wH_.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1C7UJrMefZuS",
    "title": "VINAI & SCNDL - Frontier (KaDeejay Ft DVJHarry)[#Klub DJs L@tinos 2016]",
    "artist": "VINAI & SCNDL",
    "genre": "MAIN STAGE EDM / ELECTRO HOUSE",
    "source": "drive",
    "fileId": "1C7UJrMefZuS37GRigrXFu9ojRfyi6357",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/EDM-MASO/drive-1C7UJrMefZuS.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/EDM-MASO/drive-1C7UJrMefZuS.mp4",
    "duration": 144,
    "bpm": 125,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-hd.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/EDM-MASO/drive-1C7UJrMefZuS.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1Fja_jivGaWK",
    "title": "FTampa - Strike It Up (KaDeejay Ft DVJHarry)[#Klub DJs L@tinos 2016]",
    "artist": "FTampa",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1Fja_jivGaWKl3q-fzEpLVxA6h7AeepM5",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/EDM-MASO/drive-1Fja_jivGaWK.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/EDM-MASO/drive-1Fja_jivGaWK.mp4",
    "duration": 191,
    "bpm": 126,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-medal-3d.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/EDM-MASO/drive-1Fja_jivGaWK.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1x7Yw18jsvGh",
    "title": "Showtek & Ookay Ft Calvin Harris & R3hab - Bounce Burnin (Moreeno Ft DVJHarry)[#Klub DJs L@tinos 2015]",
    "artist": "Showtek & Ookay Ft Calvin Harris & R3hab",
    "genre": "MAIN STAGE EDM / ELECTRO HOUSE",
    "source": "drive",
    "fileId": "1x7Yw18jsvGhityGeCoWc7tHjhcvfA_tc",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/EDM-MASO/drive-1x7Yw18jsvGh.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/EDM-MASO/drive-1x7Yw18jsvGh.mp4",
    "duration": 165,
    "bpm": 127,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-official-3.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/EDM-MASO/drive-1x7Yw18jsvGh.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1Ybmd5bkn7Ie",
    "title": "Calvin Harris Ft. John Newman - Blame (BrayanDj Remix VIP Ft DVJHarry)[#Klub DJs L@tinos 2016][DJInvitado]",
    "artist": "Calvin Harris Ft. John Newman",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1Ybmd5bkn7IeYfmiD5OUZf7U9FNCXj3ul",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/EDM-MASO/drive-1Ybmd5bkn7Ie.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/EDM-MASO/drive-1Ybmd5bkn7Ie.mp4",
    "duration": 232,
    "bpm": 128,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-chrome-3d.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/EDM-MASO/drive-1Ybmd5bkn7Ie.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1EF1tLsZLYPB",
    "title": "Dj Angel Batalla Video Remix - Kryoman & Pairanoid - My squad lit (Future House)",
    "artist": "Dj Angel Batalla Video Remix",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1EF1tLsZLYPBVrjs2mNae_5b5aQorXCph",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/DEEP-HOUSE-MASO/drive-1EF1tLsZLYPB.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/DEEP-HOUSE-MASO/drive-1EF1tLsZLYPB.mp4",
    "duration": 195,
    "bpm": 129,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/tiesto.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/DEEP-HOUSE-MASO/drive-1EF1tLsZLYPB.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1YNEHnN73lRS",
    "title": "EDX - Reckless Ardor (Official Music Video)",
    "artist": "EDX",
    "genre": "DEEP HOUSE / CLUB GROOVE",
    "source": "drive",
    "fileId": "1YNEHnN73lRS-9GB74T22GzDievnfTfNH",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1YNEHnN73lRS.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1YNEHnN73lRS.mp4",
    "duration": 202,
    "bpm": 124,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-klmr.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1YNEHnN73lRS.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1uJQTzKBDwkO",
    "title": "Rudimental - Lay It All On Me (feat. Ed Sheeran) [Official Video]",
    "artist": "Rudimental",
    "genre": "DEEP HOUSE / CLUB GROOVE",
    "source": "drive",
    "fileId": "1uJQTzKBDwkOkJBmaEbsKQDC6hZ5H5He3",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1uJQTzKBDwkO.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1uJQTzKBDwkO.mp4",
    "duration": 259,
    "bpm": 125,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/klmr-2025-hd.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1uJQTzKBDwkO.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1-4MUj71cZwh",
    "title": "Lost Frequencies - Are You With Me (Official Music Video)",
    "artist": "Lost Frequencies",
    "genre": "DEEP HOUSE / CLUB GROOVE",
    "source": "drive",
    "fileId": "1-4MUj71cZwh2edGlpu1MHpdiasUXG6Hf",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1-4MUj71cZwh.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1-4MUj71cZwh.mp4",
    "duration": 136,
    "bpm": 126,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/zamna.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1-4MUj71cZwh.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-12qvkGR6u-XN",
    "title": "Tove Lo - Habits (Stay High) - Hippie Sabotage Remix",
    "artist": "Tove Lo",
    "genre": "DEEP HOUSE / CLUB GROOVE",
    "source": "drive",
    "fileId": "12qvkGR6u-XN3pri8vDwToQXiHopzK7yr",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-12qvkGR6u-XN.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-12qvkGR6u-XN.mp4",
    "duration": 263,
    "bpm": 127,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-hd.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-12qvkGR6u-XN.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1CqvH__nVrz4",
    "title": "David Zowie - House Every Weekend (Official Video)",
    "artist": "David Zowie",
    "genre": "DEEP HOUSE / CLUB GROOVE",
    "source": "drive",
    "fileId": "1CqvH__nVrz4HQ1fmPSVdmqQWfXr47WxG",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1CqvH__nVrz4.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1CqvH__nVrz4.mp4",
    "duration": 182,
    "bpm": 128,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-medal-3d.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1CqvH__nVrz4.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1L0O6hSzNXKw",
    "title": "Dennis Ferrer - Hey Hey (Official Music Video)",
    "artist": "Dennis Ferrer",
    "genre": "DEEP HOUSE / CLUB GROOVE",
    "source": "drive",
    "fileId": "1L0O6hSzNXKwHaqloYW76I88iFx-zzIDB",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1L0O6hSzNXKw.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1L0O6hSzNXKw.mp4",
    "duration": 195,
    "bpm": 129,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-official-3.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1L0O6hSzNXKw.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1FoRf7c78IxK",
    "title": "Andrea Roma feat. Leusin - Still Loving (Official Music Video)",
    "artist": "Andrea Roma feat. Leusin",
    "genre": "DEEP HOUSE / CLUB GROOVE",
    "source": "drive",
    "fileId": "1FoRf7c78IxK12UujJ1KfD4nvD_37Wpz_",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1FoRf7c78IxK.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1FoRf7c78IxK.mp4",
    "duration": 223,
    "bpm": 124,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-chrome-3d.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1FoRf7c78IxK.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1ZSTFrCPKLCC",
    "title": "Route 94 - My Love (Official Video) ft. Jess Glynne",
    "artist": "Route 94",
    "genre": "DEEP HOUSE / CLUB GROOVE",
    "source": "drive",
    "fileId": "1ZSTFrCPKLCCXl1fSmpMTFhWK_ysHzKWp",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1ZSTFrCPKLCC.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1ZSTFrCPKLCC.mp4",
    "duration": 190,
    "bpm": 125,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/tiesto.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1ZSTFrCPKLCC.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-11VOvP-m74dE",
    "title": "Breach - Everything You Never Had (We Had It All) (Ft. Andreya Triana) (Official Video)",
    "artist": "Breach",
    "genre": "DEEP HOUSE / CLUB GROOVE",
    "source": "drive",
    "fileId": "11VOvP-m74dEsAAODL8NP-TtnEJ_55NXb",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-11VOvP-m74dE.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-11VOvP-m74dE.mp4",
    "duration": 210,
    "bpm": 126,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-klmr.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-11VOvP-m74dE.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1xHikCG5BVD0",
    "title": "Tensnake - See Right Through ft. Fiora",
    "artist": "Tensnake",
    "genre": "DEEP HOUSE / CLUB GROOVE",
    "source": "drive",
    "fileId": "1xHikCG5BVD0zWHvJLy6eWAV2ZUygIduX",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1xHikCG5BVD0.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1xHikCG5BVD0.mp4",
    "duration": 199,
    "bpm": 127,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/klmr-2025-hd.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1xHikCG5BVD0.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1KLFwcIHwYA6",
    "title": "Hot Natured featuring Anabel Englund - Reverse Skydiving (Official Video)",
    "artist": "Hot Natured featuring Anabel Englund",
    "genre": "DEEP HOUSE / CLUB GROOVE",
    "source": "drive",
    "fileId": "1KLFwcIHwYA6psuWORO36u611tTWcvBLZ",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1KLFwcIHwYA6.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1KLFwcIHwYA6.mp4",
    "duration": 215,
    "bpm": 128,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/zamna.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1KLFwcIHwYA6.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-194KDmi9wijI",
    "title": "Claptone - No Eyes feat. Jaw (OFFICIAL HD VERSION) Exploited",
    "artist": "Claptone",
    "genre": "DEEP HOUSE / CLUB GROOVE",
    "source": "drive",
    "fileId": "194KDmi9wijI_o1lU_mM95czdjewKwb3Z",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-194KDmi9wijI.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-194KDmi9wijI.mp4",
    "duration": 216,
    "bpm": 129,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-hd.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-194KDmi9wijI.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-16v9H0sklT5k",
    "title": "Kygo - Firestone ft. Conrad Sewell (Official Video)",
    "artist": "Kygo",
    "genre": "DEEP HOUSE / CLUB GROOVE",
    "source": "drive",
    "fileId": "16v9H0sklT5kaY8SclXt9w4VQyj7lOkMV",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-16v9H0sklT5k.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-16v9H0sklT5k.mp4",
    "duration": 222,
    "bpm": 124,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-medal-3d.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-16v9H0sklT5k.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1apvNWt2OBmb",
    "title": "Chris Malinchak - So Good To Me (Official Video)",
    "artist": "Chris Malinchak",
    "genre": "DEEP HOUSE / CLUB GROOVE",
    "source": "drive",
    "fileId": "1apvNWt2OBmbjbZ7w4J3SQMjGLXnuKNDx",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1apvNWt2OBmb.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1apvNWt2OBmb.mp4",
    "duration": 162,
    "bpm": 125,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-official-3.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1apvNWt2OBmb.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1EqSQ4cJ8iMf",
    "title": "Tube & Berger - Set it Off (feat.Juliet Sikora)",
    "artist": "Tube & Berger",
    "genre": "DEEP HOUSE / CLUB GROOVE",
    "source": "drive",
    "fileId": "1EqSQ4cJ8iMfky97-yy54R-NuT6W_G_e6",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1EqSQ4cJ8iMf.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1EqSQ4cJ8iMf.mp4",
    "duration": 181,
    "bpm": 126,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-chrome-3d.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1EqSQ4cJ8iMf.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1WKoCvpyXNzL",
    "title": "Gorgon City ft. MNEK - Ready For Your Love (Official Video)",
    "artist": "Gorgon City ft. MNEK",
    "genre": "DEEP HOUSE / CLUB GROOVE",
    "source": "drive",
    "fileId": "1WKoCvpyXNzLcF2tnIaXsFZKLzDsHJ6hk",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1WKoCvpyXNzL.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1WKoCvpyXNzL.mp4",
    "duration": 207,
    "bpm": 127,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/tiesto.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1WKoCvpyXNzL.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1qSJWFOI_WfL",
    "title": "Duke Dumont - The Giver (Reprise) (Official Music Video)",
    "artist": "Duke Dumont",
    "genre": "DEEP HOUSE / CLUB GROOVE",
    "source": "drive",
    "fileId": "1qSJWFOI_WfLI6YOh-HxLlbFddB-2WxPA",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1qSJWFOI_WfL.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1qSJWFOI_WfL.mp4",
    "duration": 203,
    "bpm": 128,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-klmr.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1qSJWFOI_WfL.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1ZwOfNG66ul9",
    "title": "Robin Schulz - Sun Goes Down feat. Jasmine Thompson (Official Video)",
    "artist": "Robin Schulz",
    "genre": "DEEP HOUSE / CLUB GROOVE",
    "source": "drive",
    "fileId": "1ZwOfNG66ul94i_dmh7icmXcXsF9PXz8-",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1ZwOfNG66ul9.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1ZwOfNG66ul9.mp4",
    "duration": 174,
    "bpm": 129,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/klmr-2025-hd.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Video-Clips-Deep-House/drive-1ZwOfNG66ul9.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-19dHDStoe5s0",
    "title": "Shapeless_ Talking Dirty - Vitas remix (7th Element) FREE DOWNLOAD 2018",
    "artist": "Shapeless_ Talking Dirty",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "19dHDStoe5s0B3iDO0EoUqeO6nfU-Mds_",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Tech-House-Comercial/drive-19dHDStoe5s0.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Tech-House-Comercial/drive-19dHDStoe5s0.mp4",
    "duration": 166,
    "bpm": 124,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/zamna.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Tech-House-Comercial/drive-19dHDStoe5s0.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1xApmKr__Pby",
    "title": "Lolita - Joli Garçon (Rob & Chris Remix) Official Video",
    "artist": "Lolita",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1xApmKr__Pbyus0-bRDvdcTSuMzEmIUs5",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1xApmKr__Pby.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1xApmKr__Pby.mp4",
    "duration": 205,
    "bpm": 125,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-hd.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1xApmKr__Pby.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-158SHHllgwDM",
    "title": "Miami Inc. - Bop Bop! (Official Video)",
    "artist": "Miami Inc.",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "158SHHllgwDMki4HtWJIv2_DSOJNaTdCP",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-158SHHllgwDM.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-158SHHllgwDM.mp4",
    "duration": 213,
    "bpm": 126,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-medal-3d.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-158SHHllgwDM.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1v7-YankBfYC",
    "title": "Bingo Players ft. Far East Movement - Get Up (Rattle) [Official Video HD]",
    "artist": "Bingo Players ft. Far East Movement",
    "genre": "MAIN STAGE EDM / ELECTRO HOUSE",
    "source": "drive",
    "fileId": "1v7-YankBfYCGoqRXhzXkDpBMes9VkkUU",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1v7-YankBfYC.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1v7-YankBfYC.mp4",
    "duration": 178,
    "bpm": 127,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-official-3.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1v7-YankBfYC.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-14bwy7sjq1PA",
    "title": "Touch me - Tina More",
    "artist": "Touch me",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "14bwy7sjq1PA6K9imrnKdglAC_-w14-gu",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-14bwy7sjq1PA.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-14bwy7sjq1PA.mp4",
    "duration": 181,
    "bpm": 128,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-chrome-3d.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-14bwy7sjq1PA.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1eb2U2ozg7Se",
    "title": "Mandinga - Europarty [Official video HD]",
    "artist": "Mandinga",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1eb2U2ozg7Seq6nUxmg5nNbXvuB1O3Vei",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1eb2U2ozg7Se.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1eb2U2ozg7Se.mp4",
    "duration": 205,
    "bpm": 129,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/tiesto.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1eb2U2ozg7Se.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1uBm4a9f9mt9",
    "title": "Lolita Jolie - La Première Fois (Official Video)",
    "artist": "Lolita Jolie",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1uBm4a9f9mt9tM6h1bOdhvVbKYgLiCSbO",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1uBm4a9f9mt9.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1uBm4a9f9mt9.mp4",
    "duration": 207,
    "bpm": 124,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-klmr.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1uBm4a9f9mt9.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-14aXT6BPT14G",
    "title": "Jack Holiday Mike Candys - Children (Official Video)",
    "artist": "Jack Holiday Mike Candys",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "14aXT6BPT14GIP7oBqRK_n8TnBRaDHnKa",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-14aXT6BPT14G.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-14aXT6BPT14G.mp4",
    "duration": 161,
    "bpm": 125,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/klmr-2025-hd.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-14aXT6BPT14G.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-12bsBzMQfVcs",
    "title": "Hardwell - Cobra (Official Energy Anthem 2012) Official Teaser",
    "artist": "Hardwell",
    "genre": "MAIN STAGE EDM / ELECTRO HOUSE",
    "source": "drive",
    "fileId": "12bsBzMQfVcs7DlghSM8bJa1X7xEGxZVh",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-12bsBzMQfVcs.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-12bsBzMQfVcs.mp4",
    "duration": 192,
    "bpm": 126,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/zamna.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-12bsBzMQfVcs.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-18YIASZbys6l",
    "title": "Elena - Disco Romancing (Official Video)",
    "artist": "Elena",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "18YIASZbys6lkwWAwVsLH9B5X6I9gnGMa",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-18YIASZbys6l.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-18YIASZbys6l.mp4",
    "duration": 193,
    "bpm": 127,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-hd.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-18YIASZbys6l.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1DgGBJvQ0nfl",
    "title": "Dj Maxim - Papa Loves Mambo (Official Video)",
    "artist": "Dj Maxim",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1DgGBJvQ0nflpztRy3HUqyK_LL80-Qr-X",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1DgGBJvQ0nfl.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1DgGBJvQ0nfl.mp4",
    "duration": 186,
    "bpm": 128,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-medal-3d.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-electro/drive-1DgGBJvQ0nfl.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-13eb0MSSK8Bx",
    "title": "The Blaze - TERRITORY (Official Video)",
    "artist": "The Blaze",
    "genre": "MELODIC TECHNO / DEEP HOUSE",
    "source": "drive",
    "fileId": "13eb0MSSK8BxAIl5R1qllXMfQ0X8Ltcrh",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-13eb0MSSK8Bx.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-13eb0MSSK8Bx.mp4",
    "duration": 338,
    "bpm": 125,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-official-3.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-13eb0MSSK8Bx.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1yQJ1SOIkifd",
    "title": "Elderbrook - Numb (Official Video)",
    "artist": "Elderbrook",
    "genre": "MELODIC TECHNO / DEEP HOUSE",
    "source": "drive",
    "fileId": "1yQJ1SOIkifdlsq-fvG5aSVX9CaCMxF0s",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1yQJ1SOIkifd.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1yQJ1SOIkifd.mp4",
    "duration": 231,
    "bpm": 126,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-medal-3d.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1yQJ1SOIkifd.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1J4dbSpI6omB",
    "title": "Elderbrook _ Emmit Fenn - I_ll Find My Way To You (Live from NYC)",
    "artist": "Elderbrook _ Emmit Fenn",
    "genre": "MELODIC TECHNO / DEEP HOUSE",
    "source": "drive",
    "fileId": "1J4dbSpI6omBcSVkjrSktoDnp-09EXlkP",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1J4dbSpI6omB.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1J4dbSpI6omB.mp4",
    "duration": 280,
    "bpm": 127,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-official-3.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1J4dbSpI6omB.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1Y6A_dLVlZz_",
    "title": "like the way VRemix By Vdjklmr",
    "artist": "DJ KLMR Vault HD",
    "genre": "ELECTRONIC VREMIX / KLMR",
    "source": "drive",
    "fileId": "1Y6A_dLVlZz_D-k3SyNwBQbndJIm6Epjo",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1Y6A_dLVlZz_.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1Y6A_dLVlZz_.mp4",
    "duration": 184,
    "bpm": 125,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/klmr-2025-hd.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1Y6A_dLVlZz_.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1H6da9o7QBJs",
    "title": "Junior Senior - Move Your Feet (Official music video, HD)",
    "artist": "Junior Senior",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1H6da9o7QBJsTleDasqVnfSVgy27n5Xeu",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1H6da9o7QBJs.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1H6da9o7QBJs.mp4",
    "duration": 199,
    "bpm": 126,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/zamna.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1H6da9o7QBJs.mp4",
    "format": "mp4",
    "width": 900,
    "height": 720
  },
  {
    "id": "drive-1E6FNQwo_NXH",
    "title": "RÜFÜS DU SOL You Were Right [Official Video]",
    "artist": "DJ KLMR Vault HD",
    "genre": "MELODIC TECHNO / DEEP HOUSE",
    "source": "drive",
    "fileId": "1E6FNQwo_NXHYUlo3Jb0e7SiP5bMhvEIb",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1E6FNQwo_NXH.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1E6FNQwo_NXH.mp4",
    "duration": 239,
    "bpm": 128,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/zamna.png",
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1E6FNQwo_NXH.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1gIF8mQpyX6I",
    "title": "RÜFÜS DU SOL - Next To Me (Official Music Video)",
    "artist": "RÜFÜS DU SOL",
    "genre": "MELODIC TECHNO / DEEP HOUSE",
    "source": "drive",
    "fileId": "1gIF8mQpyX6IxmJUmmOnGGvYM4nDgHI3J",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1gIF8mQpyX6I.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1gIF8mQpyX6I.mp4",
    "duration": 314,
    "bpm": 129,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-hd.png",
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1gIF8mQpyX6I.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1aFfuySNc4z8",
    "title": "RÜFÜS DU SOL - On My Knees (Official Music Video)",
    "artist": "RÜFÜS DU SOL",
    "genre": "MELODIC TECHNO / DEEP HOUSE",
    "source": "drive",
    "fileId": "1aFfuySNc4z8WBYWCa0oCHLNtkRK8w0bB",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1aFfuySNc4z8.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1aFfuySNc4z8.mp4",
    "duration": 263,
    "bpm": 124,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-medal-3d.png",
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1aFfuySNc4z8.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1qEUuIn3_2Sa",
    "title": "RÜFÜS DU SOL - Alive (Official Music Video)",
    "artist": "RÜFÜS DU SOL",
    "genre": "MELODIC TECHNO / DEEP HOUSE",
    "source": "drive",
    "fileId": "1qEUuIn3_2Sa8B0yC0rsOg6BQ2VWfLftw",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1qEUuIn3_2Sa.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1qEUuIn3_2Sa.mp4",
    "duration": 341,
    "bpm": 126,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-chrome-3d.png",
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1qEUuIn3_2Sa.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1T7QRjvGphkk",
    "title": "RÜFÜS DU SOL No Place [Official Video]",
    "artist": "DJ KLMR Vault HD",
    "genre": "MELODIC TECHNO / DEEP HOUSE",
    "source": "drive",
    "fileId": "1T7QRjvGphkku-F5c0HeXFacqA04BruSc",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1T7QRjvGphkk.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1T7QRjvGphkk.mp4",
    "duration": 253,
    "bpm": 127,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/tiesto.png",
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1T7QRjvGphkk.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1xAOeMUG0_h5",
    "title": "RÜFÜS DU SOL - Sundream (Official Video)",
    "artist": "RÜFÜS DU SOL",
    "genre": "MELODIC TECHNO / DEEP HOUSE",
    "source": "drive",
    "fileId": "1xAOeMUG0_h5bTARNfbGHRG5yA4Ctuyzz",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1xAOeMUG0_h5.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1xAOeMUG0_h5.mp4",
    "duration": 298,
    "bpm": 128,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-klmr.png",
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1xAOeMUG0_h5.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1AAh6s9ufJu8",
    "title": "RÜFÜS DU SOL Innerbloom (Official Video)",
    "artist": "DJ KLMR Vault HD",
    "genre": "MELODIC TECHNO / DEEP HOUSE",
    "source": "drive",
    "fileId": "1AAh6s9ufJu8EyQCd73ZUnkY0WigPXgH9",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1AAh6s9ufJu8.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1AAh6s9ufJu8.mp4",
    "duration": 578,
    "bpm": 124,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-klmr.png",
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Rufus-du-Sol/drive-1AAh6s9ufJu8.mp4",
    "format": "mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1QKgO5p7bu_1",
    "title": "Al Corley Square Rooms 1984 HD 169",
    "artist": "KLMR Vault",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 219,
    "format": "mp4",
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1QKgO5p7bu_1.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1QKgO5p7bu_1.mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1SiXPElK7q0y",
    "title": "80´s Electro Remix · KLMR VJ Mix",
    "artist": "KLMR Vault",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 234,
    "format": "mp4",
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1SiXPElK7q0y.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1SiXPElK7q0y.mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1UWHRtN8LMMJ",
    "title": "Era  – Ameno (Ferhat Sonsoz Remix)",
    "artist": "KLMR Vault",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 248,
    "format": "mp4",
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1UWHRtN8LMMJ.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1UWHRtN8LMMJ.mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1YPedh8QI1Ri",
    "title": "Naken Eyes - Promises Promises DJKLMR VREMIX - EXTENDED",
    "artist": "Naken Eyes",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 382,
    "format": "mp4",
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1YPedh8QI1Ri.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1YPedh8QI1Ri.mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1W-E91HZjm85",
    "title": "Modern Talking - Brother Louie (Ayur Tsyrenov cover Remix)",
    "artist": "Modern Talking",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 220,
    "format": "mp4",
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1W-E91HZjm85.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1W-E91HZjm85.mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1Gq1Erav-WuZ",
    "title": "Sting - Englishman in New York (Remix 2016)",
    "artist": "Sting",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 257,
    "format": "mp4",
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Gq1Erav-WuZ.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Gq1Erav-WuZ.mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1EzxsnH9v0Z8",
    "title": "Naken Eyes - Promises Promises VREMIX - EXTENDED",
    "artist": "Naken Eyes",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 382,
    "format": "mp4",
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1EzxsnH9v0Z8.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1EzxsnH9v0Z8.mp4",
    "width": 1280,
    "height": 720
  },
  {
    "id": "drive-1RzmtRXC78Cc",
    "title": "Lumidee vs  Fatman Scoop   Dance Original 2014 Mix",
    "artist": "KLMR Vault",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 350,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1RzmtRXC78Cc.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1RzmtRXC78Cc.mp4"
  },
  {
    "id": "drive-1mzHvJUTlqsy",
    "title": "Mory Kanté & Dr, Alban Ft Snap - Bootleg 2017 HD",
    "artist": "Mory Kanté & Dr, Alban Ft Snap",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 419,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1mzHvJUTlqsy.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1mzHvJUTlqsy.mp4"
  },
  {
    "id": "drive-1MHB5gLP-r_j",
    "title": "Dr. Alban - It's My Life (Remix 2016)",
    "artist": "Dr. Alban",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 278,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1MHB5gLP-r_j.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1MHB5gLP-r_j.mp4"
  },
  {
    "id": "drive-1JDMT_LfYvf6",
    "title": "80´S Electro Remix · KLMR VJ Mix",
    "artist": "KLMR Vault",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 192,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1JDMT_LfYvf6.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1JDMT_LfYvf6.mp4"
  },
  {
    "id": "drive-1dJ_u1ZaLx8k",
    "title": "No Mercy - Missing (Remix 2017)",
    "artist": "No Mercy",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 268,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1dJ_u1ZaLx8k.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1dJ_u1ZaLx8k.mp4"
  },
  {
    "id": "drive-1xtHakdA-uz8",
    "title": "Roxette - Listen To Your Heart (Remix 2016)",
    "artist": "Roxette",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 244,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1xtHakdA-uz8.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1xtHakdA-uz8.mp4"
  },
  {
    "id": "drive-1EP2mE2PaCPa",
    "title": "Michael Jackson – Give In To Me (Dj Archi & Alex Remix)",
    "artist": "KLMR Vault",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 194,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1EP2mE2PaCPa.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1EP2mE2PaCPa.mp4"
  },
  {
    "id": "drive-1qgJ9UZUkwrB",
    "title": "Euro & Status Quo - In The Army Now (Remix)",
    "artist": "Euro & Status Quo",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 225,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1qgJ9UZUkwrB.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1qgJ9UZUkwrB.mp4"
  },
  {
    "id": "drive-1PXVAnlYM26o",
    "title": "INFERNAL - SELF CONTROL -  REMIX",
    "artist": "INFERNAL",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 357,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1PXVAnlYM26o.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1PXVAnlYM26o.mp4"
  },
  {
    "id": "drive-1fjh4kG6bGov",
    "title": "Chris Norman & Suzi Quatro & Ayur Tsyrenov - Stumblin' in (Cover Remix)",
    "artist": "Chris Norman & Suzi Quatro & Ayur Tsyrenov",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 225,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1fjh4kG6bGov.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1fjh4kG6bGov.mp4"
  },
  {
    "id": "drive-1yeBzGagDh-6",
    "title": "Enigma - Sadeness (Remix 2017)",
    "artist": "Enigma",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 234,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1yeBzGagDh-6.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1yeBzGagDh-6.mp4"
  },
  {
    "id": "drive-1x3Dr9dAmMFp",
    "title": "Loft Hold On Techno Remix",
    "artist": "KLMR Vault",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 272,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1x3Dr9dAmMFp.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1x3Dr9dAmMFp.mp4"
  },
  {
    "id": "drive-1GIESiyyizr3",
    "title": "Listen To Your Heart │Special Mix 2017 │Gioma ViP",
    "artist": "KLMR Vault",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 276,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1GIESiyyizr3.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1GIESiyyizr3.mp4"
  },
  {
    "id": "drive-13wzNcKoKC-G",
    "title": "Abba - Gimme! Gimme! Gimme! (Remix 2016)",
    "artist": "Abba",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 136,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-13wzNcKoKC-G.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-13wzNcKoKC-G.mp4"
  },
  {
    "id": "drive-16AayXntvNDS",
    "title": "Living On My Own ➤ GiOMA Best Records ➤ 2017",
    "artist": "KLMR Vault",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 262,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-16AayXntvNDS.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-16AayXntvNDS.mp4"
  },
  {
    "id": "drive-1mhyKa-dJ52l",
    "title": "Michael Jackson - Smooth Criminal (Remix 2016)",
    "artist": "Michael Jackson",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 326,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1mhyKa-dJ52l.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1mhyKa-dJ52l.mp4"
  },
  {
    "id": "drive-1q3c8z_FHBUs",
    "title": "Valentino Khan - Lick It (Official Music Video)",
    "artist": "Valentino Khan",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 217,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1q3c8z_FHBUs.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1q3c8z_FHBUs.mp4"
  },
  {
    "id": "drive-1TZhfHZtcYaJ",
    "title": "Opus Live Is Life Remix",
    "artist": "KLMR Vault",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 181,
    "format": "mp4",
    "width": 960,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1TZhfHZtcYaJ.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1TZhfHZtcYaJ.mp4"
  },
  {
    "id": "drive-1Z9gOGIsEYnr",
    "title": "Boney M. ft Mobi T. - Daddy Cool '99 (1999) HD",
    "artist": "Boney M. ft Mobi T.",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 230,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Z9gOGIsEYnr.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Z9gOGIsEYnr.mp4"
  },
  {
    "id": "drive-12xCSwYAvpoF",
    "title": "Boney M Rasputin Remix",
    "artist": "KLMR Vault",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 250,
    "format": "mp4",
    "width": 960,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-12xCSwYAvpoF.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-12xCSwYAvpoF.mp4"
  },
  {
    "id": "drive-11-BuSEotWkt",
    "title": "Genesis - I Can't Dance (Remix)",
    "artist": "Genesis",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 200,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-11-BuSEotWkt.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-11-BuSEotWkt.mp4"
  },
  {
    "id": "drive-1J06E54ws09G",
    "title": "Giorgio Moroder - Right Here, Right Now ft. Kylie Minogue",
    "artist": "Giorgio Moroder",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 210,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1J06E54ws09G.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1J06E54ws09G.mp4"
  },
  {
    "id": "drive-1080OrbysNI5",
    "title": "A-Ha - Take On Me (Dj KaktuZ Nu  Disco Remix)",
    "artist": "A-Ha",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 318,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1080OrbysNI5.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1080OrbysNI5.mp4"
  },
  {
    "id": "drive-1lOHbU0ksv01",
    "title": "ken laszlo - tonight  ( Remix ) Let's GoMusic",
    "artist": "ken laszlo",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 250,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1lOHbU0ksv01.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1lOHbU0ksv01.mp4"
  },
  {
    "id": "drive-1ZyaozCLqDQZ",
    "title": "Clean Bandit - Rockabye ft  Sean Paul & Anne Marie (Remix 2016)",
    "artist": "Clean Bandit",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 206,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1ZyaozCLqDQZ.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1ZyaozCLqDQZ.mp4"
  },
  {
    "id": "drive-12ErqS4cU8hn",
    "title": "80´S Electro Remix · KLMR VJ Mix",
    "artist": "KLMR Vault",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 153,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-12ErqS4cU8hn.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-12ErqS4cU8hn.mp4"
  },
  {
    "id": "drive-1bgWPtX2EbTI",
    "title": "Sabrina Salerno - boys (remix)",
    "artist": "Sabrina Salerno",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 212,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1bgWPtX2EbTI.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1bgWPtX2EbTI.mp4"
  },
  {
    "id": "drive-103-Byv1g9L1",
    "title": "YOU'RE MY HEART & You're My Soul  Remix by Gioma  video 2k17",
    "artist": "KLMR Vault",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 243,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-103-Byv1g9L1.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-103-Byv1g9L1.mp4"
  },
  {
    "id": "drive-1K-qdo7yJIHf",
    "title": "Elton John - I'm Still Standing VRemix By djklmr",
    "artist": "Elton John",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 281,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1K-qdo7yJIHf.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1K-qdo7yJIHf.mp4"
  },
  {
    "id": "drive-14TfYGI_kXgv",
    "title": "Gorky Park - Moscow Calling (Remix 2016)",
    "artist": "Gorky Park",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 245,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-14TfYGI_kXgv.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-14TfYGI_kXgv.mp4"
  },
  {
    "id": "drive-1DXXdPjP9aT1",
    "title": "DJ Dado - X-Files (Remix)",
    "artist": "DJ Dado",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 207,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1DXXdPjP9aT1.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1DXXdPjP9aT1.mp4"
  },
  {
    "id": "drive-1q-hL-Lz_4f6",
    "title": "Brandy - Another Day In Paradise (Maxim Andreev Nu Disco Mix 2015) HD",
    "artist": "Brandy",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 263,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1q-hL-Lz_4f6.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1q-hL-Lz_4f6.mp4"
  },
  {
    "id": "drive-1RoBaoudP6Jh",
    "title": "Desireless - Voyage, Voyage (DJ Arthur Pleat Remix)",
    "artist": "Desireless",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 241,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1RoBaoudP6Jh.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1RoBaoudP6Jh.mp4"
  },
  {
    "id": "drive-180i2rDDloCt",
    "title": "Modern Talking - Cheri Cheri Lady (Storm DJs Cover Radio mix)",
    "artist": "Modern Talking",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 212,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-180i2rDDloCt.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-180i2rDDloCt.mp4"
  },
  {
    "id": "drive-1hRn9XNRdYlh",
    "title": "Yello - Oh Yeah (Remix 2016)",
    "artist": "Yello",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 199,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1hRn9XNRdYlh.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1hRn9XNRdYlh.mp4"
  },
  {
    "id": "drive-1wTx6JK1P-0i",
    "title": "I Still Stading - Elton Jhon VRemix",
    "artist": "I Still Stading",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 281,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1wTx6JK1P-0i.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1wTx6JK1P-0i.mp4"
  },
  {
    "id": "drive-1DspzVVyKiTM",
    "title": "Survivor - Eye Of The Tiger (Ayur Tsyrenov Dub Remix)",
    "artist": "Survivor",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 211,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1DspzVVyKiTM.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1DspzVVyKiTM.mp4"
  },
  {
    "id": "drive-1AAqHrUGzt8o",
    "title": "Every Breath You Take VRemix By djklmr",
    "artist": "KLMR Vault",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 274,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1AAqHrUGzt8o.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1AAqHrUGzt8o.mp4"
  },
  {
    "id": "drive-1G7kk_5zLNlp",
    "title": "Zhi-Vago - Celebrate The Love (Lena Usman & Prady Remix)",
    "artist": "Zhi-Vago",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 261,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1G7kk_5zLNlp.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1G7kk_5zLNlp.mp4"
  },
  {
    "id": "drive-15XwsKxFqH2c",
    "title": "Boney M - Ma Baker (Remix 2016)",
    "artist": "Boney M",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 285,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-15XwsKxFqH2c.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-15XwsKxFqH2c.mp4"
  },
  {
    "id": "drive-18Uhh1iZSFGV",
    "title": "Dua Lipa - New Rules (Official Music Video)",
    "artist": "Dua Lipa",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 224,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-18Uhh1iZSFGV.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-18Uhh1iZSFGV.mp4"
  },
  {
    "id": "drive-1JbPiFbu-Q30",
    "title": "Dr Alban - Work Work (Remix 2016)",
    "artist": "Dr Alban",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 290,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1JbPiFbu-Q30.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1JbPiFbu-Q30.mp4"
  },
  {
    "id": "drive-1nQgIr82auTg",
    "title": "Europe - The Final Countdown (Dj Savin Summer Remix 2015) HD",
    "artist": "Europe",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 212,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1nQgIr82auTg.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1nQgIr82auTg.mp4"
  },
  {
    "id": "drive-1KoHhxAS9CPi",
    "title": "Roy Orbison - Oh, Pretty Woman (Remix)",
    "artist": "Roy Orbison",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 119,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1KoHhxAS9CPi.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1KoHhxAS9CPi.mp4"
  },
  {
    "id": "drive-1p17wefYVxKC",
    "title": "Ricky Martin - Come With Me (Dj Miza Beat Remix -  Michael T  Video Edition)",
    "artist": "Ricky Martin",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 312,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1p17wefYVxKC.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1p17wefYVxKC.mp4"
  },
  {
    "id": "drive-10MRsaS_JTSt",
    "title": "Backstreet Boys - Everybody (Remix 2016)",
    "artist": "Backstreet Boys",
    "genre": "80´S ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 178,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-10MRsaS_JTSt.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-10MRsaS_JTSt.mp4"
  },
  {
    "id": "drive-1zidNAjvp8ES",
    "title": "The Living Tombstone - Love I Need",
    "artist": "The Living Tombstone",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1zidNAjvp8ESC6byznAu3gYw1DmHWuPeZ",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1zidNAjvp8ES.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1zidNAjvp8ES.mp4",
    "duration": 213,
    "bpm": 124,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-chrome-3d.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1zidNAjvp8ES.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "drive-1B9sa7W7_sC1",
    "title": "ZHU - In the Morning (Official Video)",
    "artist": "ZHU",
    "genre": "MELODIC TECHNO / DEEP HOUSE",
    "source": "drive",
    "fileId": "1B9sa7W7_sC1uS7VLOW5h0zIPX_2MW8-g",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1B9sa7W7_sC1.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1B9sa7W7_sC1.mp4",
    "duration": 307,
    "bpm": 125,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/tiesto.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1B9sa7W7_sC1.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "drive-1x0Z1mmvm3LW",
    "title": "Kylie Minogue - Love At First Sight (Official Video)",
    "artist": "Kylie Minogue",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1x0Z1mmvm3LWV9umrFs3JegpOIbjWCgYt",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1x0Z1mmvm3LW.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1x0Z1mmvm3LW.mp4",
    "duration": 238,
    "bpm": 126,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-klmr.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1x0Z1mmvm3LW.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "drive-1KY1yDdWF7H_",
    "title": "ZHU - Faded (Official Music Video)",
    "artist": "ZHU",
    "genre": "MELODIC TECHNO / DEEP HOUSE",
    "source": "drive",
    "fileId": "1KY1yDdWF7H_P20jB50ylg34edAzFTzgh",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1KY1yDdWF7H_.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1KY1yDdWF7H_.mp4",
    "duration": 254,
    "bpm": 127,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/klmr-2025-hd.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1KY1yDdWF7H_.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "drive-1nS5jxzewjl9",
    "title": "ANRI Anri Good Bye Boogie Dance Official Video",
    "artist": "DJ KLMR Vault HD",
    "genre": "FUTURE FUNK / NU-DISCO",
    "source": "drive",
    "fileId": "1nS5jxzewjl9AyV2TXXK4Bw_6JadfpMKe",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1nS5jxzewjl9.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1nS5jxzewjl9.mp4",
    "duration": 270,
    "bpm": 124,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-medal-3d.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1nS5jxzewjl9.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "drive-1yOtrw6-bilJ",
    "title": "Night Tempo - Touch",
    "artist": "Night Tempo",
    "genre": "FUTURE FUNK / NU-DISCO",
    "source": "drive",
    "fileId": "1yOtrw6-bilJPMl3X7Z1S0ttoxn-ujnou",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1yOtrw6-bilJ.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1yOtrw6-bilJ.mp4",
    "duration": 175,
    "bpm": 127,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/tiesto.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1yOtrw6-bilJ.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "drive-1VmcP9wxNW14",
    "title": "Paradis - Toi Et Moi (Official Video)",
    "artist": "Paradis",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1VmcP9wxNW14YW5BqH-FOxyuOFWrjHxO9",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1VmcP9wxNW14.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1VmcP9wxNW14.mp4",
    "duration": 222,
    "bpm": 128,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-klmr.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1VmcP9wxNW14.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "drive-1YrJRtufu8k5",
    "title": "MONDO GROSSO",
    "artist": "DJ KLMR Vault HD",
    "genre": "FUTURE FUNK / NU-DISCO",
    "source": "drive",
    "fileId": "1YrJRtufu8k5O2VoAt4tMw-49YoV4XoLl",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1YrJRtufu8k5.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1YrJRtufu8k5.mp4",
    "duration": 315,
    "bpm": 124,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/zamna.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1YrJRtufu8k5.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "drive-164WGn8reZGk",
    "title": "The Weeknd, Playboi Carti - Timeless (Tasty Or Not Remix) [Afro House]",
    "artist": "The Weeknd, Playboi Carti",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "164WGn8reZGk7NGxvelnPSdffQq8aGoOQ",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-164WGn8reZGk.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-164WGn8reZGk.mp4",
    "duration": 268,
    "bpm": 125,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-hd.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-164WGn8reZGk.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "drive-1-EJ-7KXarB-",
    "title": "ZHU - Cocaine Model [OFFICIAL VIDEO HD]",
    "artist": "ZHU",
    "genre": "MELODIC TECHNO / DEEP HOUSE",
    "source": "drive",
    "fileId": "1-EJ-7KXarB-_jmNVkT7ksVr60r4GC_gI",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1-EJ-7KXarB-.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1-EJ-7KXarB-.mp4",
    "duration": 303,
    "bpm": 126,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-medal-3d.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1-EJ-7KXarB-.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "drive-1dq2glZ8_Hww",
    "title": "ceruleancerise - Lightspeed Love ( )",
    "artist": "ceruleancerise",
    "genre": "FUTURE FUNK / NU-DISCO",
    "source": "drive",
    "fileId": "1dq2glZ8_Hwwdba3H4VfzeoQgU0wMXRh2",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1dq2glZ8_Hww.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1dq2glZ8_Hww.mp4",
    "duration": 329,
    "bpm": 128,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-chrome-3d.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1dq2glZ8_Hww.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "drive-1VYK5R3lFL_l",
    "title": "PH Electro Miracle (Official Video 4K)",
    "artist": "DJ KLMR Vault HD",
    "genre": "ELECTRONIC / CLUB HD",
    "source": "drive",
    "fileId": "1VYK5R3lFL_lvERyQy5au74HjrSLf-QJQ",
    "driveUrl": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1VYK5R3lFL_l.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1VYK5R3lFL_l.mp4",
    "duration": 168,
    "bpm": 124,
    "badge": "CLOUDFLARE R2 VAULT HD",
    "thumbnail": "assets/logo-klmr.png",
    "youtubeId": null,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/Videos-Alls-Priority/drive-1VYK5R3lFL_l.mp4",
    "format": "mp4",
    "width": 1920,
    "height": 1080
  },
  {
    "id": "drive-1wG6pkceh6n2",
    "title": "We Will Rock You, Bossa Nova! Mashup by djklmr",
    "artist": "KLMR Vault",
    "genre": "RUGADANCE / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 253,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1wG6pkceh6n2.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1wG6pkceh6n2.mp4"
  },
  {
    "id": "drive-1ktRcWGJWR-Y",
    "title": "Rio Roma - Mi Persona Favorita [Dj Valho Ft Ignacio'Remixer Ft DVJHarry][#Klub DJs L@tinos 2016][DJInvitado]",
    "artist": "36. Rio Roma",
    "genre": "ELECTRO VARIOS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 118,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1ktRcWGJWR-Y.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1ktRcWGJWR-Y.mp4"
  },
  {
    "id": "drive-1shMerBdbVV9",
    "title": "Tech House Comercial · KLMR VJ Mix",
    "artist": "KLMR Vault",
    "genre": "TECH HOUSE COMERCIAL / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 123,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1shMerBdbVV9.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1shMerBdbVV9.mp4"
  },
  {
    "id": "drive-1VdZI1Gt9Wk_",
    "title": "Major Lazer & DJ Snake feat MØ - Lean on (Clean) ATAX Remix [DVDN]",
    "artist": "Major Lazer & DJ Snake feat MØ",
    "genre": "ELECTRO VARIOS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 165,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1VdZI1Gt9Wk_.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1VdZI1Gt9Wk_.mp4"
  },
  {
    "id": "drive-1jhCMawLLms-",
    "title": "Tech House Comercial · KLMR VJ Mix",
    "artist": "KLMR Vault",
    "genre": "TECH HOUSE COMERCIAL / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 93,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1jhCMawLLms-.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1jhCMawLLms-.mp4"
  },
  {
    "id": "drive-16QN-9pmjSpU",
    "title": "@-High School Musical - Breaking Free - Dj Goust [CLIKA BEATS].",
    "artist": "@-High School Musical",
    "genre": "EDM MASO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 217,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-16QN-9pmjSpU.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-16QN-9pmjSpU.mp4"
  },
  {
    "id": "drive-1dIMqkoPvzOY",
    "title": "Tech House Comercial · KLMR VJ Mix",
    "artist": "KLMR Vault",
    "genre": "TECH HOUSE COMERCIAL / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 132,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1dIMqkoPvzOY.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1dIMqkoPvzOY.mp4"
  },
  {
    "id": "drive-1-GszTC0N1kL",
    "title": "Milk  Sugar ft Miriam Makeba - Hi-a Ma (Pata Pata) (Official Music Video) [HD]",
    "artist": "Milk  Sugar ft Miriam Makeba",
    "genre": "VIDEOS ELECTRO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 167,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1-GszTC0N1kL.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1-GszTC0N1kL.mp4"
  },
  {
    "id": "drive-1Jme3usnUK5r",
    "title": "Brighi Feat. Snoop Dogg - Play Me Like A Violin (Official Video)",
    "artist": "Brighi Feat. Snoop Dogg",
    "genre": "VIDEOS ELECTRO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 183,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Jme3usnUK5r.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Jme3usnUK5r.mp4"
  },
  {
    "id": "drive-1EtmSWO1Tswn",
    "title": "Flo Rida - Wild Ones ft. Sia [Official Video]",
    "artist": "Flo Rida",
    "genre": "VIDEOS ELECTRO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 236,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1EtmSWO1Tswn.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1EtmSWO1Tswn.mp4"
  },
  {
    "id": "drive-123nJ_P-S2LJ",
    "title": "Alex Gaudino Feat. Taboo - I Don't Wanna Dance (Official Video)",
    "artist": "Alex Gaudino Feat. Taboo",
    "genre": "VIDEOS ELECTRO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 188,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-123nJ_P-S2LJ.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-123nJ_P-S2LJ.mp4"
  },
  {
    "id": "drive-1r6L_vkyA8wz",
    "title": "Avicii - The Nights (R'Bros & Ricardo Maravilha  Remix)(Visual Master Vjs Vol.5) AlaN StaR Dj Vremix Producer",
    "artist": "Avicii",
    "genre": "ELECTRO HOUSE / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 290,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1r6L_vkyA8wz.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1r6L_vkyA8wz.mp4"
  },
  {
    "id": "drive-1Kfglx2rbzPW",
    "title": "Cher - Believe (Offical Music Video) HD-Quality",
    "artist": "Cher",
    "genre": "DANCE 90S / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 235,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Kfglx2rbzPW.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Kfglx2rbzPW.mp4"
  },
  {
    "id": "drive-1iH4x3jIlec2",
    "title": "Ken Laszlo - Hey Hey Guy (Clean) Special Nunk Remix [Dvj 3b]-2",
    "artist": "Ken Laszlo",
    "genre": "ELECTRO VARIOS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 506,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1iH4x3jIlec2.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1iH4x3jIlec2.mp4"
  },
  {
    "id": "drive-1vCFY5hIw8Bs",
    "title": "Shaka Muv - Save Save [Official video HD]",
    "artist": "Shaka Muv",
    "genre": "VIDEOS ELECTRO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 257,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1vCFY5hIw8Bs.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1vCFY5hIw8Bs.mp4"
  },
  {
    "id": "drive-1msYKweU3b2m",
    "title": "Puto Remix - Molotov",
    "artist": "Puto Remix",
    "genre": "ROCK EN ESPAÑOL ELECTRO REMIX / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 213,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1msYKweU3b2m.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1msYKweU3b2m.mp4"
  },
  {
    "id": "drive-1p1d_AnRQtOc",
    "title": "One Pound Fish - Â£1 Fish Man - O-Fish-Al Video",
    "artist": "One Pound Fish",
    "genre": "VIDEOS ELECTRO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 155,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1p1d_AnRQtOc.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1p1d_AnRQtOc.mp4"
  },
  {
    "id": "drive-1xUIBbW0lZUZ",
    "title": "-Video Remix By Dvj TOEELL® - Paulina Rubio - Lo Hare Por Ti (Jorge Segoviano Remix)",
    "artist": "642.-Video Remix By Dvj TOEELL®",
    "genre": "ELECTRO RETRO POP ESPAÑOL / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 297,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1xUIBbW0lZUZ.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1xUIBbW0lZUZ.mp4"
  },
  {
    "id": "drive-1oJaTFln4Xch",
    "title": "Elena - Your Captain Tonight (Official Video)",
    "artist": "Elena",
    "genre": "VIDEOS ELECTRO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 200,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1oJaTFln4Xch.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1oJaTFln4Xch.mp4"
  },
  {
    "id": "drive-1MJNtbWf2h5P",
    "title": "Ella ya me Olvido - VRemix By djklmr",
    "artist": "Ella ya me Olvido",
    "genre": "ELECTRO ESPAÑOL / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 197,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1MJNtbWf2h5P.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1MJNtbWf2h5P.mp4"
  },
  {
    "id": "drive-1HKiZaMkj2PS",
    "title": "Dony Feat. Elena - Hot Girls (Official Video)",
    "artist": "Dony Feat. Elena",
    "genre": "VIDEOS ELECTRO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 220,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1HKiZaMkj2PS.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1HKiZaMkj2PS.mp4"
  },
  {
    "id": "drive-1kAN4H2t6Siq",
    "title": "Deorro Ft Nicky Jam - ¡ Dimelo Papi ! [ Gcix  Dvj Nano ]",
    "artist": "128. Deorro Ft Nicky Jam",
    "genre": "EDM MASO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 146,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1kAN4H2t6Siq.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1kAN4H2t6Siq.mp4"
  },
  {
    "id": "drive-17sJikHJttih",
    "title": "Los Amantes De Lola - Beber de tu Sangre (Clean) Extended [Dvj 3b]",
    "artist": "Los Amantes De Lola",
    "genre": "ELECTRO RETRO POP ESPAÑOL / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 282,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-17sJikHJttih.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-17sJikHJttih.mp4"
  },
  {
    "id": "drive-1ioHByPvv77A",
    "title": "@-MAROON 5 - ONE MORE NIGHT - MIGUEL ARTEAGA CLIKA BEATS ABRIL 2016",
    "artist": "@-MAROON 5",
    "genre": "HOUSE RICO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 306,
    "format": "mp4",
    "width": 960,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1ioHByPvv77A.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1ioHByPvv77A.mp4"
  },
  {
    "id": "drive-1gaIKfIeYt0S",
    "title": "ZHU - Cocaine Model [OFFICIAL VIDEO HD](720P HD)",
    "artist": "ZHU",
    "genre": "RUFUS DU SOL / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 303,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1gaIKfIeYt0S.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1gaIKfIeYt0S.mp4"
  },
  {
    "id": "drive-1WCVYJ6dNSPB",
    "title": "128 - Blur Song 2 - In Whoo Hoo - Mr.Black - DjGianMusic Dvj Nano",
    "artist": "128",
    "genre": "EDM MASO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 262,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1WCVYJ6dNSPB.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1WCVYJ6dNSPB.mp4"
  },
  {
    "id": "drive-1gPXw7z19OiQ",
    "title": "DJane HouseKat feat. Rameez - My Party (Official Video)",
    "artist": "DJane HouseKat feat. Rameez",
    "genre": "VIDEOS ELECTRO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 199,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1gPXw7z19OiQ.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1gPXw7z19OiQ.mp4"
  },
  {
    "id": "drive-1j-DQOG438FZ",
    "title": "Steve Aoki Feat. Angger Dimas - Steve Jobs (Official Video)",
    "artist": "Steve Aoki Feat. Angger Dimas",
    "genre": "VIDEOS ELECTRO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 206,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1j-DQOG438FZ.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1j-DQOG438FZ.mp4"
  },
  {
    "id": "drive-1jyZwI5LfHo_",
    "title": "Drake - Hotline Bling (Clean) Pat C Bootleg SHORT",
    "artist": "Drake",
    "genre": "ELECTRO HOUSE / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 149,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1jyZwI5LfHo_.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1jyZwI5LfHo_.mp4"
  },
  {
    "id": "drive-1pj_rrkJTvFP",
    "title": "Redfoo - New Thang (KaDeeJay Remix VIP Ft DVJHarry)[#Klub DJs L@tinos 2016][DJInvitado]",
    "artist": "39. Redfoo",
    "genre": "EDM MASO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 184,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1pj_rrkJTvFP.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1pj_rrkJTvFP.mp4"
  },
  {
    "id": "drive-1beiMDF8AI8x",
    "title": "Amna vercion 2",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ELECTRO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 233,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1beiMDF8AI8x.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1beiMDF8AI8x.mp4"
  },
  {
    "id": "drive-1QwnEd6MtPoA",
    "title": "R.I.O. feat. U-Jean  - Animal (PH Electro Radio Edit) (Official Video HD)",
    "artist": "R.I.O. feat. U-Jean",
    "genre": "VIDEOS ELECTRO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 214,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1QwnEd6MtPoA.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1QwnEd6MtPoA.mp4"
  },
  {
    "id": "drive-1dWlDIeOnawj",
    "title": "Chris Brown - Turn Up The Music (1)",
    "artist": "Chris Brown",
    "genre": "VIDEOS ELECTRO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 257,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1dWlDIeOnawj.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1dWlDIeOnawj.mp4"
  }
];


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

// Same anchor as /api/channel/feed (catalog/schedule.json): each extras rotation starts at track 1.
let TimelineAnchor = 0;
function timelineAnchorOffset(totalDuration) {
  return ((totalDuration - (TimelineAnchor % totalDuration)) % totalDuration + totalDuration) % totalDuration;
}

function getLiveFastPlayoutPosition() {
  const totalDuration = BroadcastPlaylist.reduce((acc, t) => acc + (t.duration || 260), 0);
  const nowSeconds = Math.floor(Date.now() / 1000) + timelineAnchorOffset(totalDuration);
  const activePlaylist = getSmartPlayoutQueue(BroadcastPlaylist, nowSeconds, totalDuration);
  let cyclePosition = nowSeconds % totalDuration;

  for (let i = 0; i < activePlaylist.length; i++) {
    const track = activePlaylist[i];
    const trackDuration = track.duration || 260;
    if (cyclePosition < trackDuration) {
      // Map back to BroadcastPlaylist index for compatibility
      const origIdx = BroadcastPlaylist.findIndex(t => t.id === track.id);
      return {
        trackIndex: origIdx >= 0 ? origIdx : i,
        smartIndex: i,
        smartPlaylist: activePlaylist,
        startSeconds: Math.floor(cyclePosition)
      };
    }
    cyclePosition -= trackDuration;
  }
  return { trackIndex: 0, smartIndex: 0, smartPlaylist: activePlaylist, startSeconds: 0 };
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.search.includes('embed=1') || window.self !== window.top) {
    document.body.classList.add('embed-mode');
  }
  initClock();
  initIntroCurtain();
  initSignalHealthMonitor();
  initHUDControls();
  initFullscreenAndAutoHide();
  initModals();
  initKeyboardNavigation();
  initBackendSync();
});

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

    const livePos = getLiveFastPlayoutPosition();
    playTrackAtIndex(livePos.trackIndex, livePos.startSeconds, true);
  }

  function startIntroWithAudio() {
    if (introVideo) {
      introVideo.muted = false;
      introVideo.volume = 1.0;
      introVideo.play().then(() => {
        if (startPrompt) startPrompt.classList.add("hidden");
      }).catch(() => {
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
    introVideo.addEventListener("ended", dismissIntro);
    introVideo.muted = false;
    introVideo.volume = 1.0;
    introVideo.play().catch(() => {
      if (startPrompt) startPrompt.classList.remove("hidden");
    });
  }

  overlay?.addEventListener("click", () => {
    if (!ChannelState.hasEnteredLive && introVideo && introVideo.paused) {
      startIntroWithAudio();
    }
  });
}

function initClock() {
  const clockEl = document.getElementById("digital-clock");
  const cornerClockEl = document.getElementById("corner-clock-time");

  function update() {
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

// Single source of truth shared with Roku (/api/channel/feed reads the same file).
// The embedded BroadcastPlaylist above is only an offline fallback.
const loadJson = (url) => fetch(url, { cache: "no-cache" }).then(res => (res.ok ? res.json() : null)).catch(() => null);
const catalogReady = Promise.all([loadJson("/catalog/active.json"), loadJson("/catalog/schedule.json")])
  .then(([list, schedule]) => {
    if (Array.isArray(list) && list.length > 0) {
      BroadcastPlaylist.splice(0, BroadcastPlaylist.length, ...list);
    }
    if (schedule && Number(schedule.anchor)) TimelineAnchor = Number(schedule.anchor);
  });

window.onYouTubeIframeAPIReady = function() {
  catalogReady.then(startYouTubeBroadcast);
};

function startYouTubeBroadcast() {
  const livePos = getLiveFastPlayoutPosition();
  ChannelState.currentTrackIndex = livePos.trackIndex;
  const currentTrack = BroadcastPlaylist[livePos.trackIndex];
  const initialVideoId = currentTrack.youtubeId || BroadcastPlaylist[0].youtubeId;

  ChannelState.ytPlayer = new YT.Player("yt-player", {
    videoId: initialVideoId,
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
      onStateChange: onPlayerStateChange,
      onError: onPlayerError
    }
  });
}

function onPlayerReady(event) {
  try {
    if (typeof event.target.unloadModule === "function") event.target.unloadModule("captions");
    if (typeof event.target.setOption === "function") event.target.setOption("captions", "track", {});
  } catch (e) {}

  if (!ChannelState.hasEnteredLive) {
    if (typeof event.target.pauseVideo === "function") event.target.pauseVideo();
    if (typeof event.target.mute === "function") event.target.mute();
  } else {
    const livePos = getLiveFastPlayoutPosition();
    playTrackAtIndex(livePos.trackIndex, livePos.startSeconds, true);
  }

  startTimeTracking();
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    if (!ChannelState.hasEnteredLive) {
      if (typeof event.target.pauseVideo === "function") event.target.pauseVideo();
      if (typeof event.target.mute === "function") event.target.mute();
      return;
    }
    ChannelState.isPlaying = true;
    try {
      if (typeof event.target.unloadModule === "function") event.target.unloadModule("captions");
    } catch (e) {}
  } else if (event.data === YT.PlayerState.PAUSED) {
    if (ChannelState.hasEnteredLive && ChannelState.ytPlayer && typeof ChannelState.ytPlayer.playVideo === "function") {
      ChannelState.ytPlayer.playVideo();
    }
  } else if (event.data === YT.PlayerState.ENDED) {
    advanceToNextTrackCleanly();
  }
}

function onPlayerError(event) {
  if (!ChannelState.hasEnteredLive) return;
  const track = BroadcastPlaylist[ChannelState.currentTrackIndex];
  if (track && track.mp4Url) {
    playDirectMp4Stream(track.mp4Url, 0);
  } else {
    advanceToNextTrackCleanly();
  }
}

function playDirectMp4Stream(mp4Url, startSeconds = 0) {
  const ytWrapper = document.getElementById("yt-player-wrapper");
  const nativeWrapper = document.getElementById("native-player-wrapper");
  const nativeVideo = document.getElementById("native-video");

  ChannelState.currentSourceType = "drive";
  if (ytWrapper) ytWrapper.classList.remove("active");
  if (nativeWrapper) nativeWrapper.classList.add("active");
  if (ChannelState.ytPlayer && typeof ChannelState.ytPlayer.pauseVideo === "function") {
    try { ChannelState.ytPlayer.pauseVideo(); } catch (e) {}
  }

  if (nativeVideo) {
    nativeVideo.loop = false;
    nativeVideo.src = mp4Url;
    nativeVideo.onloadedmetadata = () => {
      if (startSeconds > 3 && startSeconds < (nativeVideo.duration - 15)) {
        nativeVideo.currentTime = startSeconds;
      }
    };
    nativeVideo.onended = () => advanceToNextTrackCleanly();
    nativeVideo.onerror = () => {
      const safeIdx = ChannelState.currentTrackIndex % 72;
      const safeTrack = BroadcastPlaylist[safeIdx];
      if (safeTrack && safeTrack.mp4Url && mp4Url !== safeTrack.mp4Url) {
        nativeVideo.src = safeTrack.mp4Url;
        nativeVideo.play().catch(() => {
          nativeVideo.muted = true;
          nativeVideo.play().catch(() => {});
        });
      } else {
        setTimeout(advanceToNextTrackCleanly, 1000);
      }
    };
    nativeVideo.play().catch(() => {
      nativeVideo.muted = true;
      nativeVideo.play().catch(() => {});
    });
  }
}

// Index in BroadcastPlaylist of the track that follows `index` in the clock's smart (rotated) order,
// so web and Roku air the same sequence instead of the web walking the base list.
function nextSmartTrackIndex(index) {
  const livePos = getLiveFastPlayoutPosition();
  const order = livePos.smartPlaylist;
  const current = BroadcastPlaylist[index];
  const pos = current ? order.findIndex(t => t.id === current.id) : -1;
  const next = order[(pos >= 0 ? pos + 1 : livePos.smartIndex + 1) % order.length];
  const nextIdx = BroadcastPlaylist.findIndex(t => t.id === next.id);
  return nextIdx >= 0 ? nextIdx : (index + 1) % BroadcastPlaylist.length;
}

function advanceToNextTrackCleanly() {
  if (!ChannelState.hasEnteredLive || BroadcastPlaylist.length === 0) return;
  const livePos = getLiveFastPlayoutPosition();
  if (livePos.trackIndex !== ChannelState.currentTrackIndex) {
    playTrackAtIndex(livePos.trackIndex, livePos.startSeconds, false);
    return;
  }
  playTrackAtIndex(nextSmartTrackIndex(ChannelState.currentTrackIndex), 0, false);
}

// True when the web player is more than one track away from what the clock says is airing.
function isOffLiveTimeline() {
  const livePos = getLiveFastPlayoutPosition();
  const current = BroadcastPlaylist[ChannelState.currentTrackIndex];
  if (!current) return true;
  const pos = livePos.smartPlaylist.findIndex(t => t.id === current.id);
  const gap = Math.abs(pos - livePos.smartIndex);
  return pos < 0 || (gap > 1 && gap < livePos.smartPlaylist.length - 1);
}

function syncToLiveTimeline() {
  if (!ChannelState.hasEnteredLive) return;
  const livePos = getLiveFastPlayoutPosition();
  let idx = livePos.trackIndex;
  let sec = livePos.startSeconds;
  const trackDur = (BroadcastPlaylist[idx] && BroadcastPlaylist[idx].duration) ? BroadcastPlaylist[idx].duration : 260;
  if ((trackDur - sec) <= 15) {
    idx = nextSmartTrackIndex(idx);
    sec = 0;
  }
  playTrackAtIndex(idx, sec, false);
}

function playTrackAtIndex(index, startSeconds = 0, forceUnmute = false) {
  if (index < 0 || index >= BroadcastPlaylist.length) return;
  ChannelState.currentTrackIndex = index;
  const track = BroadcastPlaylist[index];

  hideLiveAlert();
  ChannelState.isLiveMode = false;

  const ytWrapper = document.getElementById("yt-player-wrapper");
  const nativeWrapper = document.getElementById("native-player-wrapper");
  const nativeVideo = document.getElementById("native-video");
  const visualizerCanvas = document.getElementById("visualizer-canvas");

  if (track.source === "youtube" && track.youtubeId) {
    ChannelState.currentSourceType = "youtube";
    if (ytWrapper) ytWrapper.classList.add("active");
    if (nativeWrapper) nativeWrapper.classList.remove("active");
    if (visualizerCanvas) visualizerCanvas.classList.remove("active");
    if (nativeVideo) nativeVideo.pause();

    if (ChannelState.ytPlayer && typeof ChannelState.ytPlayer.loadVideoById === "function") {
      ChannelState.ytPlayer.loadVideoById({
        videoId: track.youtubeId,
        startSeconds: startSeconds,
        suggestedQuality: "hd720"
      });
      if (forceUnmute && typeof ChannelState.ytPlayer.unMute === "function") {
        ChannelState.ytPlayer.unMute();
        ChannelState.ytPlayer.setVolume(100);
      }
      ChannelState.ytPlayer.playVideo();
    }
  } else {
    playDirectMp4Stream(track.mp4Url || track.driveUrl, startSeconds);
  }
}

function startTimeTracking() {
  setInterval(() => {
    const livePos = getLiveFastPlayoutPosition();
    const curTrack = BroadcastPlaylist[livePos.trackIndex];
    const dur = (curTrack && curTrack.duration) ? curTrack.duration : 260;
    const progressPercent = Math.min(100, Math.max(2, (livePos.startSeconds / dur) * 100));
    const progBar = document.getElementById("epg-progress-bar");
    if (progBar) progBar.style.width = `${progressPercent}%`;
  }, 500);
}

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
    if (cornerClock) cornerClock.classList.remove("hidden-by-hud");
  }

  function resetTimer() {
    showHUD();
    if (hudInactivityTimer) clearTimeout(hudInactivityTimer);
    hudInactivityTimer = setTimeout(() => {
      hideHUD();
    }, 4500);
  }

  resetTimer();

  window.addEventListener("mousemove", resetTimer);
  window.addEventListener("touchstart", resetTimer);

  window.toggleMarqueeHUD = function() {
    if (!hud) return;
    if (hud.classList.contains("hud-hidden")) {
      resetTimer();
    } else {
      hideHUD();
      if (hudInactivityTimer) clearTimeout(hudInactivityTimer);
    }
  };
}

function toggleFullscreen() {
  if (!isFullscreenActive()) {
    const el = document.documentElement;
    if (el.requestFullscreen) el.requestFullscreen().catch(() => {});
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  } else {
    if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
  }
}

function initHUDControls() {
  document.getElementById("btn-info")?.addEventListener("click", () => {
    window.toggleMarqueeHUD();
  });

  document.getElementById("btn-audio")?.addEventListener("click", () => toggleModal("modal-audio"));
  document.getElementById("btn-fullscreen")?.addEventListener("click", toggleFullscreen);

  document.getElementById("btn-subtitles")?.addEventListener("click", () => {
    window.toggleMarqueeHUD();
  });

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
  if (isHidden) modal.classList.remove("hidden");
}

function closeAllModals() {
  document.querySelectorAll(".tv-modal").forEach(m => m.classList.add("hidden"));
}

function initKeyboardNavigation() {
  window.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT") return;
    switch (e.key) {
      case "f":
      case "F":
        toggleFullscreen();
        break;
      case "i":
      case "I":
      case "Enter":
        window.toggleMarqueeHUD();
        break;
      case "Escape":
        closeAllModals();
        break;
    }
  });
}

function initBackendSync() {
  async function sync() {
    if (!ChannelState.hasEnteredLive) return;
    try {
      const res = await fetch('/api/channel/status');
      if (!res.ok) return;
      const data = await res.json();

      if (data.isLive) {
        ChannelState.isLiveMode = true;
        showLiveAlert("CABINA DJ KLMR EN VIVO", "Transmisión directa activa");
      } else {
        if (ChannelState.isLiveMode) {
          ChannelState.isLiveMode = false;
          hideLiveAlert();
          syncToLiveTimeline();
        } else if (ChannelState.hasEnteredLive && isOffLiveTimeline()) {
          syncToLiveTimeline();
        }
      }
    } catch (err) {}
  }

  setInterval(sync, 10000);
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

function initSignalHealthMonitor() {
  const pctEl = document.getElementById("signal-health-pct");
  const fpsEl = document.getElementById("signal-health-fps");
  const pingEl = document.getElementById("signal-health-ping");

  let currentPing = 15;

  function updateDisplay() {
    const healthPercent = (99.5 + Math.random() * 0.4).toFixed(1);
    if (pctEl) pctEl.textContent = `${healthPercent}% SANA`;
    if (fpsEl) fpsEl.textContent = "60 FPS";
    if (pingEl) pingEl.textContent = `${currentPing}ms`;
  }

  async function checkPing() {
    try {
      const start = performance.now();
      await fetch('/api/channel/status?t=' + Date.now(), { method: 'HEAD', cache: 'no-store' });
      currentPing = Math.max(8, Math.min(60, Math.round(performance.now() - start)));
    } catch (e) {
      currentPing = 16;
    }
    updateDisplay();
  }

  checkPing();
  setInterval(checkPing, 30000);
}
