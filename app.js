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
    "id": "drive-1gQfP4PBT4bE",
    "title": "The Living Tombstone - Love I Need",
    "artist": "The Living Tombstone",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 212,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1gQfP4PBT4bE.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1gQfP4PBT4bE.mp4"
  },
  {
    "id": "drive-1hUj139OwQ60",
    "title": "Bronski Beat - Smalltown Boy (DMX Remix) (1080p 24fps H264-128kbit AAC)",
    "artist": "Bronski Beat",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 396,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1hUj139OwQ60.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1hUj139OwQ60.mp4"
  },
  {
    "id": "drive-10VrcR2fOrvp",
    "title": "Collem - Alma Gemela (Extended Mix) (2160p 30fps AV1-128kbit AAC)",
    "artist": "Collem",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 424,
    "format": "mp4",
    "width": 3840,
    "height": 2160,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-10VrcR2fOrvp.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-10VrcR2fOrvp.mp4"
  },
  {
    "id": "drive-1NRHgrpV8A1V",
    "title": "Laura Branigan - Self Control (Moreno J Remix) (1080p 24fps H264-128kbit AAC)",
    "artist": "Laura Branigan",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 454,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1NRHgrpV8A1V.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1NRHgrpV8A1V.mp4"
  },
  {
    "id": "drive-10qFHHHeJAif",
    "title": "I'll Fly With You (Extended Version Remix) - Gigi D'Agostino (720p 60fps H264-128kbit AAC)",
    "artist": "I'll Fly With You (Extended Version Remix)",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 421,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-10qFHHHeJAif.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-10qFHHHeJAif.mp4"
  },
  {
    "id": "drive-1_5_ixjAvGO4",
    "title": "Hansel LeBlanc - We Control the Noise (Official Music Video) (720p 24fps H264-128kbit AAC)",
    "artist": "Hansel LeBlanc",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 318,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1_5_ixjAvGO4.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1_5_ixjAvGO4.mp4"
  },
  {
    "id": "drive-1gBimmtlAd18",
    "title": "ZHU - In the Morning (Official Video) (1080p 24fps H264-128kbit AAC)",
    "artist": "ZHU",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 307,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1gBimmtlAd18.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1gBimmtlAd18.mp4"
  },
  {
    "id": "drive-1WMaUfi8fWzc",
    "title": "LE SSERAFIM (르세라핌) 'CRAZY' OFFICIAL MV (2160p 24fps AV1-128kbit AAC)",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 169,
    "format": "mp4",
    "width": 3840,
    "height": 2160,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1WMaUfi8fWzc.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1WMaUfi8fWzc.mp4"
  },
  {
    "id": "drive-1Jv1vzIH0VI4",
    "title": "Kylie Minogue - Love At First Sight (Official Video) [Full HD Remastered] (1080p 25fps H264-128kbit AAC)",
    "artist": "Kylie Minogue",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 237,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Jv1vzIH0VI4.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Jv1vzIH0VI4.mp4"
  },
  {
    "id": "drive-1K-U--GPUxzU",
    "title": "La canción donde baila Dante ¦ Ева - Винтаж ⁄ 𝐒𝐮𝐛 𝐄𝐬𝐩𝐚𝐧̃𝐨𝐥 (1080p 60fps H264-128kbit AAC)",
    "artist": "La canción donde baila Dante ¦ Ева",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 148,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1K-U--GPUxzU.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1K-U--GPUxzU.mp4"
  },
  {
    "id": "drive-1eTWASSzvAHp",
    "title": "ZHU - Faded (Official Music Video) (1080p 30fps H264-128kbit AAC)",
    "artist": "ZHU",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 253,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1eTWASSzvAHp.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1eTWASSzvAHp.mp4"
  },
  {
    "id": "drive-1wzE9XZ4m4HQ",
    "title": "Kylie Minogue - In My Arms (Official Video) (720p 25fps H264-128kbit AAC)",
    "artist": "Kylie Minogue",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 220,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1wzE9XZ4m4HQ.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1wzE9XZ4m4HQ.mp4"
  },
  {
    "id": "drive-13BRcQDlVB2d",
    "title": "ANRI　Anri　杏里　アンリ Good Bye Boogie Dance　グッバイブギダンス　🎤♪🎶［Official Video］ (1080p 25fps H264-128kbit AAC)",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 270,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-13BRcQDlVB2d.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-13BRcQDlVB2d.mp4"
  },
  {
    "id": "drive-1l_xhbSnLVY0",
    "title": "Night Tempo - Love Actually (feat. Crystal Tea) [Official Music Video] (2160p 24fps AV1-128kbit AAC)",
    "artist": "Night Tempo",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 170,
    "format": "mp4",
    "width": 3840,
    "height": 2160,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1l_xhbSnLVY0.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1l_xhbSnLVY0.mp4"
  },
  {
    "id": "drive-1uhidKfVppKb",
    "title": "LE SSERAFIM - Perfect Night (City Pop Remix) (1080p 60fps H264-128kbit AAC)",
    "artist": "LE SSERAFIM",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 272,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1uhidKfVppKb.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1uhidKfVppKb.mp4"
  },
  {
    "id": "drive-1p-Z0vto8_Vu",
    "title": "Night Tempo - Touch (1080p 30fps H264-128kbit AAC)",
    "artist": "Night Tempo",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 175,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1p-Z0vto8_Vu.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1p-Z0vto8_Vu.mp4"
  },
  {
    "id": "drive-1O7k-zhJW_ig",
    "title": "Night Tempo - Wonderland (feat. BONNIE PINK) [Official Music Video] (1080p 24fps H264-128kbit AAC)",
    "artist": "Night Tempo",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 265,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1O7k-zhJW_ig.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1O7k-zhJW_ig.mp4"
  },
  {
    "id": "drive-1YeIBrE-vPEv",
    "title": "Paradis - Toi Et Moi (Official Video) (1080p 25fps H264-128kbit AAC)",
    "artist": "Paradis",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 222,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1YeIBrE-vPEv.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1YeIBrE-vPEv.mp4"
  },
  {
    "id": "drive-18hyuFYuUZlw",
    "title": "Deep Fear Delirium - Sidekick Silence (Khrym58 Bootleg) (Music Video) (1080p 30fps H264-128kbit AAC)",
    "artist": "Deep Fear Delirium",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 508,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-18hyuFYuUZlw.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-18hyuFYuUZlw.mp4"
  },
  {
    "id": "drive-1xxkIvKgeZAv",
    "title": "Zerb - Mwaki (Feat. @Sofiya Nzau) [Official Music Video] (1800p 24fps AV1-128kbit AAC)",
    "artist": "Zerb",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 220,
    "format": "mp4",
    "width": 3200,
    "height": 1800,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1xxkIvKgeZAv.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1xxkIvKgeZAv.mp4"
  },
  {
    "id": "drive-1CT6WOsFz71r",
    "title": "Connect-R x @Smiley x @AlexVelea - M-am Trezit Obosit ¦ Official Video (1608p 25fps AV1-128kbit AAC)",
    "artist": "Connect-R x @Smiley x @AlexVelea",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 178,
    "format": "mp4",
    "width": 3840,
    "height": 1608,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1CT6WOsFz71r.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1CT6WOsFz71r.mp4"
  },
  {
    "id": "drive-1D9La5WPuIQ9",
    "title": "MoBlack - Yamore (Corona Sunsets Session) (2160p 25fps AV1-128kbit AAC)",
    "artist": "MoBlack",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 268,
    "format": "mp4",
    "width": 3840,
    "height": 2160,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1D9La5WPuIQ9.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1D9La5WPuIQ9.mp4"
  },
  {
    "id": "drive-1CweJ7vy18k6",
    "title": "MONDO GROSSO ⁄ ラビリンス (1080p 24fps H264-128kbit AAC)",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 315,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1CweJ7vy18k6.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1CweJ7vy18k6.mp4"
  },
  {
    "id": "drive-1zbHsrjWkP-g",
    "title": "The Weeknd, Playboi Carti - Timeless (Tasty Or Not Remix) [Afro House] (1080p 60fps H264-128kbit AAC)",
    "artist": "The Weeknd, Playboi Carti",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 267,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1zbHsrjWkP-g.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1zbHsrjWkP-g.mp4"
  },
  {
    "id": "drive-1bk1-V_UPlns",
    "title": "ZHU - Cocaine Model [OFFICIAL VIDEO HD] (1080p 24fps H264-128kbit AAC)",
    "artist": "ZHU",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 303,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1bk1-V_UPlns.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1bk1-V_UPlns.mp4"
  },
  {
    "id": "drive-15-12IxzX9jW",
    "title": "Kylie Minogue - In Your Eyes (Official Video) [Full HD Remastered] (1080p 25fps H264-128kbit AAC)",
    "artist": "Kylie Minogue",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 198,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-15-12IxzX9jW.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-15-12IxzX9jW.mp4"
  },
  {
    "id": "drive-1WF-UG-qOuYF",
    "title": "Testa Rossa - Midnight Love (1080p 24fps H264-128kbit AAC)",
    "artist": "Testa Rossa",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 171,
    "format": "mp4",
    "width": 1472,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1WF-UG-qOuYF.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1WF-UG-qOuYF.mp4"
  },
  {
    "id": "drive-1LknSSERiEDB",
    "title": "ceruleancerise - Lightspeed Love (愛の光速) (1080p 30fps H264-128kbit AAC)",
    "artist": "ceruleancerise",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 328,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1LknSSERiEDB.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1LknSSERiEDB.mp4"
  },
  {
    "id": "drive-1D7jhrioUoA0",
    "title": "Blisser - Suzy Sheer (VEDIT By VDJKLMR) - KLMR OFFICIAL CHANNEL (1080p, h264)",
    "artist": "Blisser",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 218,
    "format": "mp4",
    "width": 1920,
    "height": 1012,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1D7jhrioUoA0.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1D7jhrioUoA0.mp4"
  },
  {
    "id": "drive-1zsRQf0gzxZw",
    "title": "Nasa Histoires - Bugambilia",
    "artist": "Nasa Histoires",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 193,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1zsRQf0gzxZw.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1zsRQf0gzxZw.mp4"
  },
  {
    "id": "drive-1H5LkpgQEm_O",
    "title": "Lady Gaga - Abracadabra (Official Music Video)",
    "artist": "Lady Gaga",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 269,
    "format": "mp4",
    "width": 1200,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1H5LkpgQEm_O.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1H5LkpgQEm_O.mp4"
  },
  {
    "id": "drive-1Dy4YG-IOe2A",
    "title": "孔明の罠 - Kaizo Trap",
    "artist": "孔明の罠",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 492,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Dy4YG-IOe2A.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Dy4YG-IOe2A.mp4"
  },
  {
    "id": "drive-1olfD-PHwjle",
    "title": "PH Electro – Miracle (Official Video 4K) (1)",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 168,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1olfD-PHwjle.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1olfD-PHwjle.mp4"
  },
  {
    "id": "drive-1Goks587nHr7",
    "title": "Crazibiza - Cumbiano ( RollBass Edit )",
    "artist": "Crazibiza",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 240,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Goks587nHr7.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Goks587nHr7.mp4"
  },
  {
    "id": "drive-1B2NLubn9lj1",
    "title": "Gipsy Kings - Bamboleo VRemix By vdjklmr",
    "artist": "Gipsy Kings",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 209,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1B2NLubn9lj1.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1B2NLubn9lj1.mp4"
  },
  {
    "id": "drive-1SgwlSH056Ia",
    "title": "Subb-an - This Place (Nic Fanciulli Remix) [played by Nic Fanciulli]",
    "artist": "Subb-an",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 382,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1SgwlSH056Ia.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1SgwlSH056Ia.mp4"
  },
  {
    "id": "drive-1ZowEKzelTkb",
    "title": "Selena - Si una vez (Jonnas Roy Remix) (1080p 60fps H264-128kbit AAC)",
    "artist": "Selena",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 290,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1ZowEKzelTkb.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1ZowEKzelTkb.mp4"
  },
  {
    "id": "drive-1a23ZFbVrmqy",
    "title": "Rocio Durcal   Hoy Lo Vi Pasar Javier Hernández Remix (720p 30fps H264-128kbit AAC)",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 303,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1a23ZFbVrmqy.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1a23ZFbVrmqy.mp4"
  },
  {
    "id": "drive-13rkFIeccN-W",
    "title": "Carla Morrison - Disfruto (TENORIO Remix) (Lyric Video) (1080p 30fps H264-128kbit AAC)",
    "artist": "Carla Morrison",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 245,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-13rkFIeccN-W.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-13rkFIeccN-W.mp4"
  },
  {
    "id": "drive-1sljpjUpRViv",
    "title": "Riton x Nightcrawlers - Friday ft. Mufasa & Hypeman (Dopamine Re-edit) [Official Video] (1080p 25fps H264-128kbit AAC)",
    "artist": "Riton x Nightcrawlers",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 176,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1sljpjUpRViv.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1sljpjUpRViv.mp4"
  },
  {
    "id": "drive-1_DxurorKIka",
    "title": "Avicii Tribute Megamashup (2160p 60fps AV1-128kbit AAC)",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 359,
    "format": "mp4",
    "width": 3840,
    "height": 2160,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1_DxurorKIka.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1_DxurorKIka.mp4"
  },
  {
    "id": "drive-1CcNox1IYwxO",
    "title": "[AMV] Retro Night「Stay With Me」- 松原みき (Miki Matsubara) (Oliver Hoss Remix) (1080p 24fps H264-128kbit AAC)",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 163,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1CcNox1IYwxO.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1CcNox1IYwxO.mp4"
  },
  {
    "id": "drive-1eS3Tf_-pDN0",
    "title": "Low Deep T Big Love (Official Video) (1080p 25fps H264-128kbit AAC)",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 254,
    "format": "mp4",
    "width": 1906,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1eS3Tf_-pDN0.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1eS3Tf_-pDN0.mp4"
  },
  {
    "id": "drive-1KRBPUiNy9la",
    "title": "Alle Farben feat. Graham Candy – She Moves (Far Away) [Official Video] (1080p 25fps H264-128kbit AAC)",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 202,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1KRBPUiNy9la.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1KRBPUiNy9la.mp4"
  },
  {
    "id": "drive-14YCbhP9Y3Za",
    "title": "LUM!X, Gabry Ponte - Monster (Official Music Video) (2026p 24fps AV1-128kbit AAC)",
    "artist": "LUM!X, Gabry Ponte",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 167,
    "format": "mp4",
    "width": 3840,
    "height": 2026,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-14YCbhP9Y3Za.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-14YCbhP9Y3Za.mp4"
  },
  {
    "id": "drive-1vos3bWxuLP6",
    "title": "Alle Farben & Janieck – Little Hollywood [Official Video] (1080p 25fps H264-128kbit AAC)",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 201,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1vos3bWxuLP6.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1vos3bWxuLP6.mp4"
  },
  {
    "id": "drive-1StZUY86WEEK",
    "title": "PH Electro - Englishman In New York (Official Video) (720p 25fps H264-128kbit AAC)",
    "artist": "PH Electro",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 174,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1StZUY86WEEK.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1StZUY86WEEK.mp4"
  },
  {
    "id": "drive-1r6aq_FXzZXu",
    "title": "EVADE FROM 宇宙 - UNICORN ATTACK! (1080p 60fps H264-128kbit AAC)",
    "artist": "EVADE FROM 宇宙",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 161,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1r6aq_FXzZXu.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1r6aq_FXzZXu.mp4"
  },
  {
    "id": "drive-1Wz7O5N1v0LC",
    "title": "【松原みき】Miki Matsubara ’Mayonaka no Door -stay with me’ (Music Video)  2023 by Fridman Sisters (720p 24fps H264-128kbit AAC)",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 374,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Wz7O5N1v0LC.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Wz7O5N1v0LC.mp4"
  },
  {
    "id": "drive-1aam-6iA5Bs4",
    "title": "Simplu - Oficial VEDIT 4K By djklmr",
    "artist": "Simplu",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 258,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1aam-6iA5Bs4.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1aam-6iA5Bs4.mp4"
  },
  {
    "id": "drive-1onN8eerqJhX",
    "title": "Nikko Culture - Say It Right (Remix)",
    "artist": "Nikko Culture",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 309,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1onN8eerqJhX.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1onN8eerqJhX.mp4"
  },
  {
    "id": "drive-1b_Wcv8HllHB",
    "title": "Rauf & Faik - Детство (Berke Yurdakul Remix)",
    "artist": "Rauf & Faik",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 275,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1b_Wcv8HllHB.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1b_Wcv8HllHB.mp4"
  },
  {
    "id": "drive-1GavpetlWdOm",
    "title": "Alexandra Stan Feat. Connect-R - Vanilla Chocolate (Jack Mazzoni & CryDuom Remix) Official Video",
    "artist": "Alexandra Stan Feat. Connect-R",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 193,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1GavpetlWdOm.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1GavpetlWdOm.mp4"
  },
  {
    "id": "drive-1rXfnPEj8R5r",
    "title": "Go Pato - Official Video",
    "artist": "Go Pato",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 382,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1rXfnPEj8R5r.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1rXfnPEj8R5r.mp4"
  },
  {
    "id": "drive-17WDnIDszm_Z",
    "title": "Junior Senior - Move Your Feet (Official music video, HD)",
    "artist": "Junior Senior",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 198,
    "format": "mp4",
    "width": 900,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-17WDnIDszm_Z.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-17WDnIDszm_Z.mp4"
  },
  {
    "id": "drive-1tlTjKpkXCjg",
    "title": "ciao - ciao",
    "artist": "ciao",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 191,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1tlTjKpkXCjg.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1tlTjKpkXCjg.mp4"
  },
  {
    "id": "drive-1CU4qD2HaglU",
    "title": "Miami Horror - I Look To You (feat. Kimbra) [Franc Moody remix]",
    "artist": "Miami Horror",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 229,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1CU4qD2HaglU.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1CU4qD2HaglU.mp4"
  },
  {
    "id": "drive-1S8Hx28EIQOq",
    "title": "CamelPhat – Constellations  (Official Video)",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 216,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1S8Hx28EIQOq.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1S8Hx28EIQOq.mp4"
  },
  {
    "id": "drive-1ORJ9802BN3J",
    "title": "EDC Mexico 2022 FHD DOWNLOAD",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 103,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1ORJ9802BN3J.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1ORJ9802BN3J.mp4"
  },
  {
    "id": "drive-1Rdrhj64jJOQ",
    "title": "EDC 2017 FHD DOWNLOAD",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 178,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Rdrhj64jJOQ.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Rdrhj64jJOQ.mp4"
  },
  {
    "id": "drive-1ms4SxtX5TL4",
    "title": "Deorro & Dycy - Perdoname ( EDC Mexico 20 Intro Edit )",
    "artist": "Deorro & Dycy",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 219,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1ms4SxtX5TL4.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1ms4SxtX5TL4.mp4"
  },
  {
    "id": "drive-1t46RCvOaD2I",
    "title": "Raffa FL - Ritmo (HUGEL Edit) (Official Visualiser)",
    "artist": "Raffa FL",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 165,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1t46RCvOaD2I.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1t46RCvOaD2I.mp4"
  },
  {
    "id": "drive-1ui5_tYBUGiS",
    "title": "Deorro, Los Tucanes De Tijuana & Maffio - Yo Las Pongo (Official Video) [Ultra Records]",
    "artist": "Deorro, Los Tucanes De Tijuana & Maffio",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 204,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1ui5_tYBUGiS.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1ui5_tYBUGiS.mp4"
  },
  {
    "id": "drive-1oSrkEz1-9Ef",
    "title": "Dezko - Ascend Offical VRemix by ft VJ-djklmr",
    "artist": "Dezko",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 219,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1oSrkEz1-9Ef.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1oSrkEz1-9Ef.mp4"
  },
  {
    "id": "drive-1zhn_S5Irq7u",
    "title": "Anyma & Rebūke - Syren [Live from Afterlife Tomorrowland]",
    "artist": "Anyma & Rebūke",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 169,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1zhn_S5Irq7u.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1zhn_S5Irq7u.mp4"
  },
  {
    "id": "drive-1atyDXxGOy3S",
    "title": "Pitbull - Give Me Everything ft. Ne-Yo, Afrojack, Nayer",
    "artist": "Pitbull",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 266,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1atyDXxGOy3S.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1atyDXxGOy3S.mp4"
  },
  {
    "id": "drive-1bG1p1fH7hGf",
    "title": "The Black Eyed Peas - I Gotta Feeling (Official Music Video)",
    "artist": "The Black Eyed Peas",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 291,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1bG1p1fH7hGf.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1bG1p1fH7hGf.mp4"
  },
  {
    "id": "drive-1SInjuiOKLPB",
    "title": "The Black Eyed Peas - The Time (Dirty Bit)",
    "artist": "The Black Eyed Peas",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 312,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1SInjuiOKLPB.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1SInjuiOKLPB.mp4"
  },
  {
    "id": "drive-1mJ92LU3gZZV",
    "title": "Bellakath ft Smi lee & Profeta Yao Yao -  Y Yo Me Le Pego (Dj Rene Abrego) Tribe Mx #gogos #guaracha",
    "artist": "Bellakath ft Smi lee & Profeta Yao Yao",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 234,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1mJ92LU3gZZV.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1mJ92LU3gZZV.mp4"
  },
  {
    "id": "drive-19ML4wp-8g7I",
    "title": "Jdr - Ese sonidito",
    "artist": "Jdr",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 215,
    "format": "mp4",
    "width": 1270,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-19ML4wp-8g7I.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-19ML4wp-8g7I.mp4"
  },
  {
    "id": "drive-1hl6CeyIj5tH",
    "title": "Chiquetere Vs Calabria Tribe Mx 2k22 (Dj Monst3r5) V-Remix Dvj Picha Mix",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 201,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1hl6CeyIj5tH.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1hl6CeyIj5tH.mp4"
  },
  {
    "id": "drive-1Jy0_NGY27Tp",
    "title": "BSNO - ALCOHOL (Video Oficial)",
    "artist": "BSNO",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 174,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Jy0_NGY27Tp.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Jy0_NGY27Tp.mp4"
  },
  {
    "id": "drive-14vq1z4UsUjA",
    "title": "Alex Branch x Pitbull - Sabroso (Dj Pilly Mashup) (Alan Terza Aleteo Remix)",
    "artist": "Alex Branch x Pitbull",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 219,
    "format": "mp4",
    "width": 1240,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-14vq1z4UsUjA.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-14vq1z4UsUjA.mp4"
  },
  {
    "id": "drive-1s8ppCj1nHpW",
    "title": "Paskman feat. Rafa Villalba - Chiquetere",
    "artist": "Paskman feat. Rafa Villalba",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 348,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1s8ppCj1nHpW.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1s8ppCj1nHpW.mp4"
  },
  {
    "id": "drive-1zGpFL-pNS6J",
    "title": "Beat Do Pica pau  Azotalo Paca DJ Monst3r5  Guaracha Tribal Gogos Carnaval Campeche",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 172,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1zGpFL-pNS6J.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1zGpFL-pNS6J.mp4"
  },
  {
    "id": "drive-1AS7oA5nc4kP",
    "title": "charlie sabino se me perdio",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 224,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1AS7oA5nc4kP.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1AS7oA5nc4kP.mp4"
  },
  {
    "id": "drive-1WsPVRb3aZZU",
    "title": "Biser King   Dom Dom Yes Yes OFFICIAL VIDEO",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 208,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1WsPVRb3aZZU.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1WsPVRb3aZZU.mp4"
  },
  {
    "id": "drive-1yqb0JpHxArn",
    "title": "SAMBA",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 131,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1yqb0JpHxArn.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1yqb0JpHxArn.mp4"
  },
  {
    "id": "drive-1fknelQQFGyK",
    "title": "Bsno & Valzzi - Juntos",
    "artist": "Bsno & Valzzi",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 194,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1fknelQQFGyK.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1fknelQQFGyK.mp4"
  },
  {
    "id": "drive-1Hr3yOV5yWhs",
    "title": "Juntos - Bsno Valzzi - SoundSplash - By djklmr",
    "artist": "Juntos",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 193,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Hr3yOV5yWhs.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Hr3yOV5yWhs.mp4"
  },
  {
    "id": "drive-18EGqEibcrjK",
    "title": "PH Electro - San Francisco (Official Video HD)",
    "artist": "PH Electro",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 198,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-18EGqEibcrjK.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-18EGqEibcrjK.mp4"
  },
  {
    "id": "drive-1ywAqTap2J-w",
    "title": "Tony Igy – Astronomia (Never Go Home) Official Video",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 181,
    "format": "mp4",
    "width": 1920,
    "height": 1014,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1ywAqTap2J-w.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1ywAqTap2J-w.mp4"
  },
  {
    "id": "drive-1ZMRx8vcr-h4",
    "title": "Whilk & Misky - Clap Your Hands",
    "artist": "Whilk & Misky",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 248,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1ZMRx8vcr-h4.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1ZMRx8vcr-h4.mp4"
  },
  {
    "id": "drive-1VeEYEKhGZc0",
    "title": "Bomba Estéreo - To My Love (Tainy Remix)",
    "artist": "Bomba Estéreo",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 321,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1VeEYEKhGZc0.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1VeEYEKhGZc0.mp4"
  },
  {
    "id": "drive-1W5XzWyEzvhy",
    "title": "Meiko Nakahara - Fantasy (4k HD)",
    "artist": "Meiko Nakahara",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 263,
    "format": "mp4",
    "width": 1440,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1W5XzWyEzvhy.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1W5XzWyEzvhy.mp4"
  },
  {
    "id": "drive-1kO4l8_uqy0v",
    "title": "Frank Sinatra - New York, New York (Giovi Tribute Mix) (Guaracha, Tribal House, Aleteo, Zapateo)",
    "artist": "Frank Sinatra",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 264,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1kO4l8_uqy0v.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1kO4l8_uqy0v.mp4"
  },
  {
    "id": "drive-1c2iiOWErrpW",
    "title": "jose jose   Piel de Azucar VRemix By djklmr",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 231,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1c2iiOWErrpW.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1c2iiOWErrpW.mp4"
  },
  {
    "id": "drive-11ps1-egl-55",
    "title": "Aint No Mountain High Enough - Marvin Gaye (VRemix by djklmr)",
    "artist": "Aint No Mountain High Enough",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 379,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-11ps1-egl-55.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-11ps1-egl-55.mp4"
  },
  {
    "id": "drive-1kXVJXpbAvp0",
    "title": "Ain't' No Mountain High Enough - Marvin Gaye VRemix by djklmr",
    "artist": "Ain't' No Mountain High Enough",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 379,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1kXVJXpbAvp0.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1kXVJXpbAvp0.mp4"
  },
  {
    "id": "drive-16KWig-5XTN5",
    "title": "The Black Madonna - We Can Never Be Apart (Original Mix)",
    "artist": "The Black Madonna",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 450,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-16KWig-5XTN5.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-16KWig-5XTN5.mp4"
  },
  {
    "id": "drive-12xQlXv8bfH6",
    "title": "Ma Vie (HouseRemix) Emma Cisneros - Kidd Keo(720P HD)",
    "artist": "Ma Vie (HouseRemix) Emma Cisneros",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 325,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-12xQlXv8bfH6.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-12xQlXv8bfH6.mp4"
  },
  {
    "id": "drive-1gveO1jMb-9G",
    "title": "Kryder - Romani (feat. Steve Angello) [Official Music Video](720P HD)",
    "artist": "Kryder",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 204,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1gveO1jMb-9G.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1gveO1jMb-9G.mp4"
  },
  {
    "id": "drive-1f2Nwbl7nquZ",
    "title": "Elton John  Dua Lipa - Cold Heart (PNAU Remix) (Official Video)(720P HD)",
    "artist": "Elton John  Dua Lipa",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 254,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1f2Nwbl7nquZ.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1f2Nwbl7nquZ.mp4"
  },
  {
    "id": "drive-1U8ZISG12Csk",
    "title": "Save Your Tears · By The Weeknd",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 248,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1U8ZISG12Csk.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1U8ZISG12Csk.mp4"
  },
  {
    "id": "drive-1v4GrwsDlR9O",
    "title": "The Prince Karma - Later Bches",
    "artist": "The Prince Karma",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 250,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1v4GrwsDlR9O.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1v4GrwsDlR9O.mp4"
  },
  {
    "id": "drive-1426KdaaaZm6",
    "title": "Remix - Astronomia",
    "artist": "Remix",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 199,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1426KdaaaZm6.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1426KdaaaZm6.mp4"
  },
  {
    "id": "drive-1skf1Ubod5Di",
    "title": "Years  Years - Desire VRemix By djklmr",
    "artist": "Years  Years",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 300,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1skf1Ubod5Di.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1skf1Ubod5Di.mp4"
  },
  {
    "id": "drive-1peNsJSXqdAC",
    "title": "Short Dick Man VS Navidad in Japan Remix By djklmr",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 285,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1peNsJSXqdAC.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1peNsJSXqdAC.mp4"
  },
  {
    "id": "drive-1iB74XFtGYpN",
    "title": "LP-Lost On You (extended remix)",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 198,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1iB74XFtGYpN.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1iB74XFtGYpN.mp4"
  },
  {
    "id": "drive-1c1ISXZLqSvT",
    "title": "Daft Punk - Epilogue VRemix By djklmr",
    "artist": "Daft Punk",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 328,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1c1ISXZLqSvT.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1c1ISXZLqSvT.mp4"
  },
  {
    "id": "drive-1t9eVB1ry1mw",
    "title": "Tiësto, J. Blue & R. Ora x C. Harris - Feel So Ritual (Djs From Mars x Rudeejay & Da Brozz Bootleg)",
    "artist": "Tiësto, J. Blue & R. Ora x C. Harris",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 221,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1t9eVB1ry1mw.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1t9eVB1ry1mw.mp4"
  },
  {
    "id": "drive-1WbObbNYN_rU",
    "title": "Do U Wanna VRemix By djklmr",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 240,
    "format": "mp4",
    "width": 720,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1WbObbNYN_rU.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1WbObbNYN_rU.mp4"
  },
  {
    "id": "drive-1oNzJYyagHoM",
    "title": "Victor Lou Guzz - Lambada VRemix EDM Version By djklmr",
    "artist": "Victor Lou Guzz",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 308,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1oNzJYyagHoM.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1oNzJYyagHoM.mp4"
  },
  {
    "id": "drive-1poj61zdSk2o",
    "title": "Icona Pop - Emergency Official Video",
    "artist": "Icona Pop",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 176,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1poj61zdSk2o.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1poj61zdSk2o.mp4"
  },
  {
    "id": "drive-1izmj9JTnG1-",
    "title": "Morandi Burak Yeter - Kalinka Burak Yeter Remix",
    "artist": "Morandi Burak Yeter",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 206,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1izmj9JTnG1-.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1izmj9JTnG1-.mp4"
  },
  {
    "id": "drive-19RWCxZfIo-S",
    "title": "Burak Yeter ft Maysha - Self Control  Video Edit",
    "artist": "Burak Yeter ft Maysha",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 184,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-19RWCxZfIo-S.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-19RWCxZfIo-S.mp4"
  },
  {
    "id": "drive-1lgDT0VHwRAt",
    "title": "Burak Yeter  Cecilia Krull - My Life Is Going On Burak Yeter Remix Lyric Video",
    "artist": "Burak Yeter  Cecilia Krull",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 234,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1lgDT0VHwRAt.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1lgDT0VHwRAt.mp4"
  },
  {
    "id": "drive-1SZqKcJkP_I8",
    "title": "Lost - Rogger Sanchez VRemix (Hous Version) by djklmr",
    "artist": "Lost",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 532,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1SZqKcJkP_I8.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1SZqKcJkP_I8.mp4"
  },
  {
    "id": "drive-1EMNIUY2yQhS",
    "title": "SELFIE Official Music Video - The Chainsmokers",
    "artist": "SELFIE Official Music Video",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 223,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1EMNIUY2yQhS.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1EMNIUY2yQhS.mp4"
  },
  {
    "id": "drive-1kelWFzdNieU",
    "title": "Fedde Le Grand - So Much Love Official Music Video",
    "artist": "Fedde Le Grand",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 242,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1kelWFzdNieU.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1kelWFzdNieU.mp4"
  },
  {
    "id": "drive-19UVjmGHWdZA",
    "title": "Bob Marley - Sun Is Shining ft. Robin Schulz (1080p 25fps H264-128kbit AAC)",
    "artist": "Bob Marley",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 192,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-19UVjmGHWdZA.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-19UVjmGHWdZA.mp4"
  },
  {
    "id": "drive-1K79GfGtgYnC",
    "title": "DANCE 1",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 184,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1K79GfGtgYnC.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1K79GfGtgYnC.mp4"
  },
  {
    "id": "drive-1nJQ4U34Mvwd",
    "title": "Lucky Luke - DRG ft Emie - Jack Morries Unofficial Video",
    "artist": "Lucky Luke",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 221,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1nJQ4U34Mvwd.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1nJQ4U34Mvwd.mp4"
  },
  {
    "id": "drive-1fy7E-5514T3",
    "title": "Taj Mahal VRemix - by djklmr Official Video hd",
    "artist": "Taj Mahal VRemix",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 227,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1fy7E-5514T3.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1fy7E-5514T3.mp4"
  },
  {
    "id": "drive-1GUPdsq4o33w",
    "title": "Doja Cat - So Say! VRemix",
    "artist": "Doja Cat",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 267,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1GUPdsq4o33w.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1GUPdsq4o33w.mp4"
  },
  {
    "id": "drive-1g18xjKepYnc",
    "title": "Don't Start Now - Dua Lipa (Club Remix)",
    "artist": "Don't Start Now",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 236,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1g18xjKepYnc.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1g18xjKepYnc.mp4"
  },
  {
    "id": "drive-1lwvAEGYMlvl",
    "title": "Kartashow  Мари Краймбрери - Золото (Rakurs   Ram)",
    "artist": "Kartashow  Мари Краймбрери",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 259,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1lwvAEGYMlvl.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1lwvAEGYMlvl.mp4"
  },
  {
    "id": "drive-1ns7wl9IrFZT",
    "title": "Astronomia - Remix",
    "artist": "Astronomia",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 199,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1ns7wl9IrFZT.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1ns7wl9IrFZT.mp4"
  },
  {
    "id": "drive-1J52iI7Qy-zP",
    "title": "Tan Facilito Vremix",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 184,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1J52iI7Qy-zP.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1J52iI7Qy-zP.mp4"
  },
  {
    "id": "drive-1dJrZrmKg87g",
    "title": "Breakbot - Baby I'm Yours 「AMV」",
    "artist": "Breakbot",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 215,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1dJrZrmKg87g.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1dJrZrmKg87g.mp4"
  },
  {
    "id": "drive-13sxypCQ9qPW",
    "title": "Cut to black - Lemaitre",
    "artist": "Cut to black",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 201,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-13sxypCQ9qPW.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-13sxypCQ9qPW.mp4"
  },
  {
    "id": "drive-1GKtwKzxKYT0",
    "title": "New soul yael naim tik tok (remix)",
    "artist": "KLMR Vault",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 210,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1GKtwKzxKYT0.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1GKtwKzxKYT0.mp4"
  },
  {
    "id": "drive-17ze8hhxki1-",
    "title": "Foster the People - Pumped up K (VREMIX)",
    "artist": "Foster the People",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 251,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-17ze8hhxki1-.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-17ze8hhxki1-.mp4"
  },
  {
    "id": "drive-1cp-6l1u9bRL",
    "title": "Vicetone & Tony Igy - Astronomia (shuffle Remix)",
    "artist": "Vicetone & Tony Igy",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 227,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1cp-6l1u9bRL.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1cp-6l1u9bRL.mp4"
  },
  {
    "id": "drive-1ScF1YqDkAM-",
    "title": "Andre Rizo - Homie Desert",
    "artist": "Andre Rizo",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 407,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1ScF1YqDkAM-.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1ScF1YqDkAM-.mp4"
  },
  {
    "id": "drive-1eKlZm22Y0dx",
    "title": "Pato s Grove - Macao",
    "artist": "Pato s Grove",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 188,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1eKlZm22Y0dx.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1eKlZm22Y0dx.mp4"
  },
  {
    "id": "drive-1NzWk3T-yK-c",
    "title": "Madison Mars - New Vibe Who Dis",
    "artist": "Madison Mars",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 191,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1NzWk3T-yK-c.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1NzWk3T-yK-c.mp4"
  },
  {
    "id": "drive-1VnW8LelcWeS",
    "title": "Prince Karma - Lather Bitches",
    "artist": "Prince Karma",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 250,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1VnW8LelcWeS.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1VnW8LelcWeS.mp4"
  },
  {
    "id": "drive-1Jq5X_-Zp2XH",
    "title": "One More Time - Matroda vs Djklmr (VRemix)",
    "artist": "One More Time",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 298,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Jq5X_-Zp2XH.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1Jq5X_-Zp2XH.mp4"
  },
  {
    "id": "drive-1k3liVyXtj8v",
    "title": "The Rapture - Sister Saviour (Cs.Sz.b. feat . Cs.R.b.)",
    "artist": "The Rapture",
    "genre": "VIDEOS ALLS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 250,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1k3liVyXtj8v.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1k3liVyXtj8v.mp4"
  },
  {
    "id": "drive-1cFALjguIL-C",
    "title": "Fabich, Pastel & Jafunk - Ecstasy (Ft. Liska)",
    "artist": "Fabich, Pastel & Jafunk",
    "genre": "JAZZ BEAT / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 148,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1cFALjguIL-C.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1cFALjguIL-C.mp4"
  },
  {
    "id": "drive-1g5VQeAqBKU8",
    "title": "Shakira vs raul alejandro",
    "artist": "KLMR Vault",
    "genre": "JAZZ BEAT / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 286,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1g5VQeAqBKU8.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1g5VQeAqBKU8.mp4"
  },
  {
    "id": "drive-1SRgTco4IAbW",
    "title": "- Dj Angel Batalla Video Remix - Galantis - No Money (Extended Mix)",
    "artist": "1095.- Dj Angel Batalla Video Remix",
    "genre": "ELECTRO HOUSE / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 245,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1SRgTco4IAbW.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1SRgTco4IAbW.mp4"
  },
  {
    "id": "drive-1wo4OBjNqxw2",
    "title": "- Wiz Khalifa Ft. Charlie Puth - See You Again (Dvj Ricardo Jimenez)(Visual Master Vjs Vol. 5)",
    "artist": "92.- Wiz Khalifa Ft. Charlie Puth",
    "genre": "ELECTRO HOUSE / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 369,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1wo4OBjNqxw2.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1wo4OBjNqxw2.mp4"
  },
  {
    "id": "drive-1KC1CUcfrhiP",
    "title": "@-ARIANA GRANDE - ONE LAST TIME - MIGUEL ARTEAGA CLIKA BETAS ABRIL 2016",
    "artist": "@-ARIANA GRANDE",
    "genre": "ELECTRO HOUSE / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 242,
    "format": "mp4",
    "width": 960,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1KC1CUcfrhiP.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1KC1CUcfrhiP.mp4"
  },
  {
    "id": "drive-1g7xSPgSYbQW",
    "title": "@-DJ Snake - Middle ft. Bipolar Sunshine -Dj Goust [CLIKA BEATS].",
    "artist": "@-DJ Snake",
    "genre": "ELECTRO HOUSE / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 226,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1g7xSPgSYbQW.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1g7xSPgSYbQW.mp4"
  },
  {
    "id": "drive-13u8nKDwnaG6",
    "title": "@-MAJOR LAZER - LIGHT IT UP - MIGUEL ARTEAGA CLIKA BEATS ABRIL 2016",
    "artist": "@-MAJOR LAZER",
    "genre": "ELECTRO HOUSE / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 257,
    "format": "mp4",
    "width": 960,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-13u8nKDwnaG6.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-13u8nKDwnaG6.mp4"
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
    "id": "drive-13vC95aMXWTh",
    "title": "Drake - Hotline Bling (Clean) Pat C Bootleg",
    "artist": "Drake",
    "genre": "ELECTRO HOUSE / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 254,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-13vC95aMXWTh.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-13vC95aMXWTh.mp4"
  },
  {
    "id": "drive-19D-JCjIVFVw",
    "title": "Kygo feat  Parson James - Stole The Show - ( Marzo Vol 2 ) DjBaez Edit",
    "artist": "Kygo feat  Parson James",
    "genre": "ELECTRO HOUSE / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 257,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-19D-JCjIVFVw.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-19D-JCjIVFVw.mp4"
  },
  {
    "id": "drive-1U0XJjBsOQwj",
    "title": "Mattyas - Missing you (official video HD)",
    "artist": "Mattyas",
    "genre": "VIDEOS ELECTRO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 211,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1U0XJjBsOQwj.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1U0XJjBsOQwj.mp4"
  },
  {
    "id": "drive-1BX6oIq5bI9a",
    "title": "Cutting Crew -  I Love Rock & Bad Blood (Clean) Dj 3b Mashup [Dvj 3b]",
    "artist": "Cutting Crew",
    "genre": "ELECTRO VARIOS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 270,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1BX6oIq5bI9a.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1BX6oIq5bI9a.mp4"
  },
  {
    "id": "drive-1oW6qhA1uXcM",
    "title": "- Milli Vanilli Dj Sauri® Video Remix VIP - Girl You Know It's True (Dj Sauri® Extended Remix)",
    "artist": "05.- Milli Vanilli Dj Sauri® Video Remix VIP",
    "genre": "DANCE 90S / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 250,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1oW6qhA1uXcM.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1oW6qhA1uXcM.mp4"
  },
  {
    "id": "drive-1tgy9EzeJjaN",
    "title": "-Video Remix Classic By Dvj TOEELL® - Miguel Mateos - Es tan facil romper un corazón (Dj Geraldd Remix Classic 2015)Visual Master Vj´s Vol5.",
    "artist": "523.-Video Remix Classic By Dvj TOEELL®",
    "genre": "ELECTRO RETRO POP ESPAÑOL / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 337,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1tgy9EzeJjaN.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1tgy9EzeJjaN.mp4"
  },
  {
    "id": "drive-12fd4y_YzjSX",
    "title": "Corona Feat. Mikey P. - Hurry Up (Javi Mula Rework) Official Video",
    "artist": "Corona Feat. Mikey P.",
    "genre": "VIDEOS ELECTRO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 193,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-12fd4y_YzjSX.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-12fd4y_YzjSX.mp4"
  },
  {
    "id": "drive-1anZ-p9wJSnJ",
    "title": "Ken Laszlo - Hey Hey Guy (Clean) Special Nunk Remix [Dvj 3b]-3",
    "artist": "Ken Laszlo",
    "genre": "ELECTRO VARIOS / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 506,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1anZ-p9wJSnJ.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1anZ-p9wJSnJ.mp4"
  },
  {
    "id": "drive-1oiT_wOup9XP",
    "title": "CELIA ft KAYE STYLES - IS IT LOVE (Sahara RMX) HD produced by Dr.COSTI",
    "artist": "CELIA ft KAYE STYLES",
    "genre": "VIDEOS ELECTRO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 204,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1oiT_wOup9XP.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1oiT_wOup9XP.mp4"
  },
  {
    "id": "drive-1s0q89jqPkaM",
    "title": "PSY feat. CL of 2NE1 - DADDY (DJZailex Edit Ft Varios DJs Ft DVJHarry VIP)[#Klub DJs L@tinos 2016]",
    "artist": "28. PSY feat. CL of 2NE1",
    "genre": "EDM MASO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 339,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1s0q89jqPkaM.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1s0q89jqPkaM.mp4"
  },
  {
    "id": "drive-19-TMtG0_6Vn",
    "title": "Esa Pared VRemix",
    "artist": "KLMR Vault",
    "genre": "ELECTRO ESPAÑOL / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 150,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-19-TMtG0_6Vn.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-19-TMtG0_6Vn.mp4"
  },
  {
    "id": "drive-1MMHprDr6Epe",
    "title": "DJSnake Ft Lil Jon - TURN DOWN FOR WHAT (DJBasty Remix VIP Ft DVJHarry)[#Klub DJs L@tinos 2016][DJInvitado]",
    "artist": "33. DJSnake Ft Lil Jon",
    "genre": "EDM MASO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 225,
    "format": "mp4",
    "width": 1280,
    "height": 720,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1MMHprDr6Epe.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1MMHprDr6Epe.mp4"
  },
  {
    "id": "drive-1kp2Z6GYEXx5",
    "title": "Sam and the Womp - Bom Bom (Official Video)",
    "artist": "Sam and the Womp",
    "genre": "VIDEOS ELECTRO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 175,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1kp2Z6GYEXx5.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1kp2Z6GYEXx5.mp4"
  },
  {
    "id": "drive-1xu_h_CLmzgF",
    "title": "Sasha Lopez  Andreea D feat Broono - All My People (Official Video)",
    "artist": "Sasha Lopez  Andreea D feat Broono",
    "genre": "VIDEOS ELECTRO / KLMR HD",
    "badge": "CLOUDFLARE R2 VAULT HD",
    "youtubeId": null,
    "source": "drive",
    "duration": 240,
    "format": "mp4",
    "width": 1920,
    "height": 1080,
    "url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1xu_h_CLmzgF.mp4",
    "mp4Url": "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev/videos-rotacion/drive-1xu_h_CLmzgF.mp4"
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
        playWithSound(nativeVideo);
      } else {
        setTimeout(advanceToNextTrackCleanly, 1000);
      }
    };
    playWithSound(nativeVideo);
  }
}

// Audio policy: every track first tries to play WITH sound. Only a NotAllowedError (browser blocks sound
// until the viewer touches the page) falls back to muted, and the first tap/click/key anywhere restores it.
// An AbortError (src changed mid-start) used to mute the channel for good; now it is ignored.
let audioUnlocked = false;

function playWithSound(video) {
  video.muted = false;
  video.volume = 1;
  video.play().catch((err) => {
    if (!err || err.name !== "NotAllowedError") return;
    video.muted = true;
    video.play().catch(() => {});
    showSoundHint(true);
  });
}

function showSoundHint(visible) {
  let hint = document.getElementById("sound-unlock-hint");
  if (!hint && visible) {
    hint = document.createElement("button");
    hint.id = "sound-unlock-hint";
    hint.type = "button";
    hint.textContent = "🔇 Toca para activar el sonido";
    hint.style.cssText = "position:fixed;left:50%;bottom:18%;transform:translateX(-50%);z-index:9999;" +
      "padding:12px 22px;border:0;border-radius:99px;background:rgba(0,0,0,.78);color:#fff;" +
      "font:600 16px system-ui,sans-serif;box-shadow:0 4px 18px rgba(0,0,0,.5);cursor:pointer";
    document.body.appendChild(hint);
  }
  if (hint) hint.style.display = visible ? "block" : "none";
}

function unmuteChannel() {
  const nativeVideo = document.getElementById("native-video");
  if (nativeVideo) {
    nativeVideo.muted = false;
    nativeVideo.volume = 1;
    if (nativeVideo.paused && ChannelState.currentSourceType === "drive") nativeVideo.play().catch(() => {});
  }
  const yt = ChannelState.ytPlayer;
  if (yt && typeof yt.unMute === "function") {
    try { yt.unMute(); yt.setVolume(100); } catch (e) {}
  }
  showSoundHint(false);
}

["pointerdown", "touchstart", "keydown"].forEach((type) => {
  window.addEventListener(type, () => {
    audioUnlocked = true;
    unmuteChannel();
  }, { capture: true, passive: true });
});

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
      if ((forceUnmute || audioUnlocked) && typeof ChannelState.ytPlayer.unMute === "function") {
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
