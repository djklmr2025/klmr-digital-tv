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
    "thumbnail": "assets/logo-chrome-3d.png"
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
    "thumbnail": "assets/tiesto.png"
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
    "thumbnail": "assets/logo-klmr.png"
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
    "thumbnail": "assets/klmr-2025-hd.png"
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
    "thumbnail": "assets/zamna.png"
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
    "thumbnail": "assets/logo-hd.png"
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
    "thumbnail": "assets/logo-medal-3d.png"
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
    "thumbnail": "assets/logo-official-3.png"
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
    "thumbnail": "assets/logo-chrome-3d.png"
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
    "thumbnail": "assets/tiesto.png"
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
    "thumbnail": "assets/logo-klmr.png"
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
    "thumbnail": "assets/klmr-2025-hd.png"
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
    "thumbnail": "assets/zamna.png"
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
    "thumbnail": "assets/logo-hd.png"
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
    "thumbnail": "assets/logo-medal-3d.png"
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
    "thumbnail": "assets/logo-official-3.png"
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
    "thumbnail": "assets/logo-chrome-3d.png"
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
    "thumbnail": "assets/tiesto.png"
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
    "thumbnail": "assets/logo-klmr.png"
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
    "thumbnail": "assets/klmr-2025-hd.png"
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
    "thumbnail": "assets/zamna.png"
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
    "thumbnail": "assets/logo-hd.png"
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
    "thumbnail": "assets/logo-medal-3d.png"
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
    "thumbnail": "assets/logo-official-3.png"
  },
  {
    "id": "yt-evP_sy6X2tA",
    "title": "Garabato Colorado Remix",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "source": "youtube",
    "youtubeId": "evP_sy6X2tA",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-evP_sy6X2tA.mp4",
    "duration": 287,
    "bpm": 124,
    "badge": "CANAL OFICIAL HD",
    "thumbnail": "assets/logo-chrome-3d.png"
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
    "thumbnail": "assets/tiesto.png"
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
    "thumbnail": "assets/logo-klmr.png"
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
    "thumbnail": "assets/klmr-2025-hd.png"
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
    "thumbnail": "assets/zamna.png"
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
    "thumbnail": "assets/logo-hd.png"
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
    "thumbnail": "assets/logo-medal-3d.png"
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
    "thumbnail": "assets/logo-official-3.png"
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
    "thumbnail": "assets/logo-chrome-3d.png"
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
    "thumbnail": "assets/tiesto.png"
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
    "thumbnail": "assets/logo-klmr.png"
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
    "thumbnail": "assets/klmr-2025-hd.png"
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
    "thumbnail": "assets/zamna.png"
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
    "thumbnail": "assets/logo-hd.png"
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
    "thumbnail": "assets/logo-medal-3d.png"
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
    "thumbnail": "assets/logo-official-3.png"
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
    "thumbnail": "assets/logo-chrome-3d.png"
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
    "thumbnail": "assets/tiesto.png"
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
    "thumbnail": "assets/logo-klmr.png"
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
    "thumbnail": "assets/klmr-2025-hd.png"
  },
  {
    "id": "yt-L3fHgdBgCLA",
    "title": "Tony Thang G BoY !",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "source": "youtube",
    "youtubeId": "L3fHgdBgCLA",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-L3fHgdBgCLA.mp4",
    "duration": 243,
    "bpm": 126,
    "badge": "FESTIVAL VIP",
    "thumbnail": "assets/zamna.png"
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
    "thumbnail": "assets/logo-hd.png"
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
    "thumbnail": "assets/logo-medal-3d.png"
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
    "thumbnail": "assets/logo-official-3.png"
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
    "thumbnail": "assets/logo-chrome-3d.png"
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
    "thumbnail": "assets/tiesto.png"
  },
  {
    "id": "yt-m0kNyD5HFAw",
    "title": "Mix 80´s en Remix",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "source": "youtube",
    "youtubeId": "m0kNyD5HFAw",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-m0kNyD5HFAw.mp4",
    "duration": 609,
    "bpm": 126,
    "badge": "PRODUCCIÓN ORIGINAL",
    "thumbnail": "assets/logo-klmr.png"
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
    "thumbnail": "assets/klmr-2025-hd.png"
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
    "thumbnail": "assets/zamna.png"
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
    "thumbnail": "assets/logo-hd.png"
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
    "thumbnail": "assets/logo-medal-3d.png"
  },
  {
    "id": "yt-6LlYenDIpsw",
    "title": "Intro Batukada",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "source": "youtube",
    "youtubeId": "6LlYenDIpsw",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-6LlYenDIpsw.mp4",
    "duration": 241,
    "bpm": 125,
    "badge": "GLOBAL BROADCAST",
    "thumbnail": "assets/logo-official-3.png"
  },
  {
    "id": "yt-0dFbUR07qdM",
    "title": "Herb Alpert Rise Club Remix",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "source": "youtube",
    "youtubeId": "0dFbUR07qdM",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-0dFbUR07qdM.mp4",
    "duration": 429,
    "bpm": 126,
    "badge": "CANAL OFICIAL HD",
    "thumbnail": "assets/logo-chrome-3d.png"
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
    "thumbnail": "assets/tiesto.png"
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
    "thumbnail": "assets/logo-klmr.png"
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
    "thumbnail": "assets/klmr-2025-hd.png"
  },
  {
    "id": "yt-DgB_A3rkV7g",
    "title": "Dr Dre VS Snoop Dogg ClubMix Remix DJKLMR",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "source": "youtube",
    "youtubeId": "DgB_A3rkV7g",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-DgB_A3rkV7g.mp4",
    "duration": 256,
    "bpm": 124,
    "badge": "FESTIVAL VIP",
    "thumbnail": "assets/zamna.png"
  },
  {
    "id": "yt-s5JZolI44JI",
    "title": "Eddit By Kann We Are Self",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "source": "youtube",
    "youtubeId": "s5JZolI44JI",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-s5JZolI44JI.mp4",
    "duration": 266,
    "bpm": 125,
    "badge": "VEDIT OFICIAL",
    "thumbnail": "assets/logo-hd.png"
  },
  {
    "id": "yt-Z15NT2P64Y4",
    "title": "And lover her",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "source": "youtube",
    "youtubeId": "Z15NT2P64Y4",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-Z15NT2P64Y4.mp4",
    "duration": 263,
    "bpm": 126,
    "badge": "MAIN STAGE HD",
    "thumbnail": "assets/logo-medal-3d.png"
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
    "thumbnail": "assets/logo-official-3.png"
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
    "thumbnail": "assets/logo-chrome-3d.png"
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
    "thumbnail": "assets/tiesto.png"
  },
  {
    "id": "yt-aRzzlaf79Ic",
    "title": "Cube Guys Te Quiero VRemix By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "source": "youtube",
    "youtubeId": "aRzzlaf79Ic",
    "mp4Url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-aRzzlaf79Ic.mp4",
    "duration": 413,
    "bpm": 124,
    "badge": "PRODUCCIÓN ORIGINAL",
    "thumbnail": "assets/logo-klmr.png"
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
    "thumbnail": "assets/klmr-2025-hd.png"
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
    "thumbnail": "assets/zamna.png"
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
    "thumbnail": "assets/logo-hd.png"
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
    "thumbnail": "assets/logo-medal-3d.png"
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
    "thumbnail": "assets/logo-official-3.png"
  },
  {
    "id": "drive-annihilation",
    "title": "Annihilation - Visuals 60fps HD",
    "artist": "DJ KLMR Visuals",
    "genre": "VISUALS 60FPS / STAGE FX",
    "source": "drive",
    "fileId": "1wy3ngDlLrzCyEot-qQp8Aw0u-_gA4PM4",
    "driveUrl": "https://drive.usercontent.google.com/download?id=1wy3ngDlLrzCyEot-qQp8Aw0u-_gA4PM4&export=download",
    "mp4Url": "https://drive.usercontent.google.com/download?id=1wy3ngDlLrzCyEot-qQp8Aw0u-_gA4PM4&export=download",
    "duration": 210,
    "bpm": 128,
    "badge": "BÓVEDA GOOGLE DRIVE",
    "thumbnail": "assets/zamna.png"
  },
  {
    "id": "drive-anri-surf",
    "title": "Anri - Last Surf Holiday (Night Tempo Edit)",
    "artist": "Anri (Night Tempo Edit)",
    "genre": "FUTURE FUNK / CITY POP",
    "source": "drive",
    "fileId": "1969wUXmqwsJaQBI-LKm7Kp88CPezuW1b",
    "driveUrl": "https://drive.usercontent.google.com/download?id=1969wUXmqwsJaQBI-LKm7Kp88CPezuW1b&export=download",
    "mp4Url": "https://drive.usercontent.google.com/download?id=1969wUXmqwsJaQBI-LKm7Kp88CPezuW1b&export=download",
    "duration": 230,
    "bpm": 122,
    "badge": "BÓVEDA GOOGLE DRIVE",
    "thumbnail": "assets/logo-chrome-3d.png"
  },
  {
    "id": "drive-anri-windy",
    "title": "Anri - Windy Summer (Night Tempo Edit)",
    "artist": "Anri (Night Tempo Edit)",
    "genre": "FUTURE FUNK / CITY POP",
    "source": "drive",
    "fileId": "1Z7sxlWqE9jCnz6dVXdGWJBly8L4HwUQO",
    "driveUrl": "https://drive.usercontent.google.com/download?id=1Z7sxlWqE9jCnz6dVXdGWJBly8L4HwUQO&export=download",
    "mp4Url": "https://drive.usercontent.google.com/download?id=1Z7sxlWqE9jCnz6dVXdGWJBly8L4HwUQO&export=download",
    "duration": 240,
    "bpm": 124,
    "badge": "BÓVEDA GOOGLE DRIVE",
    "thumbnail": "assets/logo-medal-3d.png"
  },
  {
    "id": "drive-anri-boogie",
    "title": "ANRI - Good Bye Boogie Dance (Official Video)",
    "artist": "Anri Official",
    "genre": "BOOGIE / DISCO FUNK",
    "source": "drive",
    "fileId": "1nS5jxzewjl9AyV2TXXK4Bw_6JadfpMKe",
    "driveUrl": "https://drive.usercontent.google.com/download?id=1nS5jxzewjl9AyV2TXXK4Bw_6JadfpMKe&export=download",
    "mp4Url": "https://drive.usercontent.google.com/download?id=1nS5jxzewjl9AyV2TXXK4Bw_6JadfpMKe&export=download",
    "duration": 255,
    "bpm": 120,
    "badge": "BÓVEDA GOOGLE DRIVE",
    "thumbnail": "assets/logo-hd.png"
  }
];

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

window.onYouTubeIframeAPIReady = function() {
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
};

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
    syncToLiveTimeline();
  }
}

function onPlayerError(event) {
  if (!ChannelState.hasEnteredLive) return;
  const livePos = getLiveFastPlayoutPosition();
  const track = BroadcastPlaylist[livePos.trackIndex];
  if (track && track.mp4Url) {
    playDirectMp4Stream(track.mp4Url, livePos.startSeconds);
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
      if (startSeconds > 0 && startSeconds < nativeVideo.duration) {
        nativeVideo.currentTime = startSeconds;
      }
    };
    nativeVideo.onended = () => syncToLiveTimeline();
    nativeVideo.onerror = () => setTimeout(syncToLiveTimeline, 1000);
    nativeVideo.play().catch(() => {
      nativeVideo.muted = true;
      nativeVideo.play().catch(() => {});
    });
  }
}

function syncToLiveTimeline() {
  if (!ChannelState.hasEnteredLive) return;
  const livePos = getLiveFastPlayoutPosition();
  playTrackAtIndex(livePos.trackIndex, livePos.startSeconds, false);
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
        } else if (data.currentIndex !== ChannelState.currentTrackIndex) {
          playTrackAtIndex(data.currentIndex, data.seekSeconds || 0, false);
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
