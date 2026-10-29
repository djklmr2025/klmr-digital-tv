/**
 * KLMR OFFICIAL CHANNEL HD - Dynamic Playout Feed API (1:1 Mirror for Roku TV & Web OTT)
 * Serves all 77 official @KLMROFFCIALCHANNEL videos + Google Drive HD Vault with global FAST sync
 */

const MasterCatalog = [
  {
    "id": "yt-7CmxP78alCk",
    "title": "Vamos a vivir",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "badge": "CANAL OFICIAL HD",
    "youtubeId": "7CmxP78alCk",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-7CmxP78alCk.mp4",
    "duration": 205,
    "format": "mp4"
  },
  {
    "id": "yt-yIhw58dVYsk",
    "title": "Stay for a while - VMOST Theme By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "badge": "VREMIX EXCLUSIVO",
    "youtubeId": "yIhw58dVYsk",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-yIhw58dVYsk.mp4",
    "duration": 244,
    "format": "mp4"
  },
  {
    "id": "yt-psmn4o-PfTE",
    "title": "Todavia en el mismo lugar - By_ djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "badge": "PRODUCCIÓN ORIGINAL",
    "youtubeId": "psmn4o-PfTE",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-psmn4o-PfTE.mp4",
    "duration": 215,
    "format": "mp4"
  },
  {
    "id": "yt-HUKOy-Qy_no",
    "title": "Le ciel est lourd au dessus de nous - VMOST Theme By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "badge": "CLUB SESSION 24/7",
    "youtubeId": "HUKOy-Qy_no",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-HUKOy-Qy_no.mp4",
    "duration": 203,
    "format": "mp4"
  },
  {
    "id": "yt-sLfrbg5hfG4",
    "title": "Citricos y Sal Videoclip Oficial",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "badge": "FESTIVAL VIP",
    "youtubeId": "sLfrbg5hfG4",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-sLfrbg5hfG4.mp4",
    "duration": 164,
    "format": "mp4"
  },
  {
    "id": "yt-r7Tf_hgvH3c",
    "title": "La Noche VREMIX By DJKLMR & DJ TIESTO",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "badge": "VEDIT OFICIAL",
    "youtubeId": "r7Tf_hgvH3c",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-r7Tf_hgvH3c.mp4",
    "duration": 385,
    "format": "mp4"
  },
  {
    "id": "yt-kkTj9x4kCC8",
    "title": "Toy Story 5 Trailer Song, Never Tears Us Apart INXS VRemix By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "badge": "MAIN STAGE HD",
    "youtubeId": "kkTj9x4kCC8",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-kkTj9x4kCC8.mp4",
    "duration": 589,
    "format": "mp4"
  },
  {
    "id": "yt-QhFc871NS08",
    "title": "Siinamota - Young Girl A Video Kayzo Trap (VEdit By vdjklmr)",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "badge": "GLOBAL BROADCAST",
    "youtubeId": "QhFc871NS08",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-QhFc871NS08.mp4",
    "duration": 243,
    "format": "mp4"
  },
  {
    "id": "yt-ipCA5-k32xY",
    "title": "Airport DJ Pp Remix (By Video Edit VDJKLMR)",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "badge": "CANAL OFICIAL HD",
    "youtubeId": "ipCA5-k32xY",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-ipCA5-k32xY.mp4",
    "duration": 424,
    "format": "mp4"
  },
  {
    "id": "yt-DmOoyR8RS7g",
    "title": "Juan Gabriel Bailando VEdit By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "badge": "VREMIX EXCLUSIVO",
    "youtubeId": "DmOoyR8RS7g",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-DmOoyR8RS7g.mp4",
    "duration": 424,
    "format": "mp4"
  },
  {
    "id": "yt-RXzatHn8bNg",
    "title": "This Place - Nic Fanciulli Remix (VREMIX) By_vdj-klmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "badge": "PRODUCCIÓN ORIGINAL",
    "youtubeId": "RXzatHn8bNg",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-RXzatHn8bNg.mp4",
    "duration": 426,
    "format": "mp4"
  },
  {
    "id": "yt-pL0JulX7Rok",
    "title": "VREMIX Batery Low Battery Operated By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "badge": "CLUB SESSION 24/7",
    "youtubeId": "pL0JulX7Rok",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-pL0JulX7Rok.mp4",
    "duration": 236,
    "format": "mp4"
  },
  {
    "id": "yt-oLifN2BbNiA",
    "title": "Taj Mahal VRemix by djklmr Official Video hd",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "badge": "FESTIVAL VIP",
    "youtubeId": "oLifN2BbNiA",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-oLifN2BbNiA.mp4",
    "duration": 228,
    "format": "mp4"
  },
  {
    "id": "yt-6gFJQcTrcWs",
    "title": "Pyramid Coles Memories VRemix By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "badge": "VEDIT OFICIAL",
    "youtubeId": "6gFJQcTrcWs",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-6gFJQcTrcWs.mp4",
    "duration": 180,
    "format": "mp4"
  },
  {
    "id": "yt-iSwAcQ0jqNg",
    "title": "Me siento tan ritual VEdit by djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "badge": "MAIN STAGE HD",
    "youtubeId": "iSwAcQ0jqNg",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-iSwAcQ0jqNg.mp4",
    "duration": 224,
    "format": "mp4"
  },
  {
    "id": "yt-o4hPLMtAjMM",
    "title": "Queen Vs Fisher Bohemian Rhapsody Vs Losing It Official Video",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "badge": "GLOBAL BROADCAST",
    "youtubeId": "o4hPLMtAjMM",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-o4hPLMtAjMM.mp4",
    "duration": 227,
    "format": "mp4"
  },
  {
    "id": "yt-oZ9U_yW_kFg",
    "title": "Miami Horror Making Of Album 2 Official VRemix",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "badge": "CANAL OFICIAL HD",
    "youtubeId": "oZ9U_yW_kFg",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-oZ9U_yW_kFg.mp4",
    "duration": 304,
    "format": "mp4"
  },
  {
    "id": "yt-VwsXGweoHdw",
    "title": "Luis miguel Si no supiste amar VREMIX By djklmr & Roberth Steve Quiroga",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "badge": "VREMIX EXCLUSIVO",
    "youtubeId": "VwsXGweoHdw",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-VwsXGweoHdw.mp4",
    "duration": 360,
    "format": "mp4"
  },
  {
    "id": "yt-f-n-_HLo5ds",
    "title": "Doogy Degli Armonium. - Wanted (SE BUSCA) Vremix Mashup by_vdjklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "badge": "PRODUCCIÓN ORIGINAL",
    "youtubeId": "f-n-_HLo5ds",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-f-n-_HLo5ds.mp4",
    "duration": 194,
    "format": "mp4"
  },
  {
    "id": "yt-sbENKabkuec",
    "title": "Luis Miguel Inolvidable Official VRemix By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "badge": "CLUB SESSION 24/7",
    "youtubeId": "sbENKabkuec",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-sbENKabkuec.mp4",
    "duration": 329,
    "format": "mp4"
  },
  {
    "id": "yt-U54dJdK2uYA",
    "title": "Suave VEdit By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "badge": "FESTIVAL VIP",
    "youtubeId": "U54dJdK2uYA",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-U54dJdK2uYA.mp4",
    "duration": 300,
    "format": "mp4"
  },
  {
    "id": "yt-bol5MWyZkD0",
    "title": "Culpable o no VEdit by djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "badge": "VEDIT OFICIAL",
    "youtubeId": "bol5MWyZkD0",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-bol5MWyZkD0.mp4",
    "duration": 331,
    "format": "mp4"
  },
  {
    "id": "yt-hfcAPyqNWLE",
    "title": "We Will Rock You, Bossa Nova! Mashup by djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "badge": "MAIN STAGE HD",
    "youtubeId": "hfcAPyqNWLE",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-hfcAPyqNWLE.mp4",
    "duration": 254,
    "format": "mp4"
  },
  {
    "id": "yt-vWb7u3FqLt8",
    "title": "Amigos Invencibles - La que me Gusta VRemix by_djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "badge": "GLOBAL BROADCAST",
    "youtubeId": "vWb7u3FqLt8",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-vWb7u3FqLt8.mp4",
    "duration": 312,
    "format": "mp4"
  },
  {
    "id": "yt-evP_sy6X2tA",
    "title": "Garabato Colorado Remix",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "badge": "CANAL OFICIAL HD",
    "youtubeId": "evP_sy6X2tA",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-evP_sy6X2tA.mp4",
    "duration": 287,
    "format": "mp4"
  },
  {
    "id": "yt-fblzi3B-UuI",
    "title": "Hector Lavoe Remix by djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "badge": "VREMIX EXCLUSIVO",
    "youtubeId": "fblzi3B-UuI",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-fblzi3B-UuI.mp4",
    "duration": 505,
    "format": "mp4"
  },
  {
    "id": "yt-fWOf3x7zTUc",
    "title": "Hey Sunshine VEdit By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "badge": "PRODUCCIÓN ORIGINAL",
    "youtubeId": "fWOf3x7zTUc",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-fWOf3x7zTUc.mp4",
    "duration": 392,
    "format": "mp4"
  },
  {
    "id": "yt-2r-OeSqB8hk",
    "title": "Juntos Bsno Valzzi Official Video By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "badge": "CLUB SESSION 24/7",
    "youtubeId": "2r-OeSqB8hk",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-2r-OeSqB8hk.mp4",
    "duration": 194,
    "format": "mp4"
  },
  {
    "id": "yt-jI3Yzw2fQ2o",
    "title": "LP Lost On You extended remix",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "badge": "FESTIVAL VIP",
    "youtubeId": "jI3Yzw2fQ2o",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-jI3Yzw2fQ2o.mp4",
    "duration": 199,
    "format": "mp4"
  },
  {
    "id": "yt-RPoxn0WJ7w8",
    "title": "loves in the air",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "badge": "VEDIT OFICIAL",
    "youtubeId": "RPoxn0WJ7w8",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-RPoxn0WJ7w8.mp4",
    "duration": 273,
    "format": "mp4"
  },
  {
    "id": "yt-xURN-tEugKU",
    "title": "Kartashow Мари Краймбрери Золото Rakurs Ram",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "badge": "MAIN STAGE HD",
    "youtubeId": "xURN-tEugKU",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-xURN-tEugKU.mp4",
    "duration": 260,
    "format": "mp4"
  },
  {
    "id": "yt-pN3r-xBZcIE",
    "title": "Benne Supalonely VRemix By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "badge": "GLOBAL BROADCAST",
    "youtubeId": "pN3r-xBZcIE",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-pN3r-xBZcIE.mp4",
    "duration": 226,
    "format": "mp4"
  },
  {
    "id": "yt-mnfnbVesHrg",
    "title": "Bob sinclair Shaba VEdit By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "badge": "CANAL OFICIAL HD",
    "youtubeId": "mnfnbVesHrg",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-mnfnbVesHrg.mp4",
    "duration": 342,
    "format": "mp4"
  },
  {
    "id": "yt-EIHrIGpwTUE",
    "title": "Sunshine Afro Costa",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "badge": "VREMIX EXCLUSIVO",
    "youtubeId": "EIHrIGpwTUE",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-EIHrIGpwTUE.mp4",
    "duration": 191,
    "format": "mp4"
  },
  {
    "id": "yt-XyXfo4HIeP8",
    "title": "Sunshine Tribal",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "badge": "PRODUCCIÓN ORIGINAL",
    "youtubeId": "XyXfo4HIeP8",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-XyXfo4HIeP8.mp4",
    "duration": 220,
    "format": "mp4"
  },
  {
    "id": "yt-VHytGF4Alvs",
    "title": "I m just a DJ - Female Voice English Version",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "badge": "CLUB SESSION 24/7",
    "youtubeId": "VHytGF4Alvs",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-VHytGF4Alvs.mp4",
    "duration": 205,
    "format": "mp4"
  },
  {
    "id": "yt-JCbZJmIFzTc",
    "title": "LOVE STORY Vals Version 2024 by djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "badge": "FESTIVAL VIP",
    "youtubeId": "JCbZJmIFzTc",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-JCbZJmIFzTc.mp4",
    "duration": 321,
    "format": "mp4"
  },
  {
    "id": "yt-LRa1s_4QaJU",
    "title": "황금 다락방 By djklmr Original VRemix VideoEditt Plastika 01",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "badge": "VEDIT OFICIAL",
    "youtubeId": "LRa1s_4QaJU",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-LRa1s_4QaJU.mp4",
    "duration": 187,
    "format": "mp4"
  },
  {
    "id": "yt-z8HYbmwUGYI",
    "title": "Heaven's Doorstep 2 By djklmr VEDIT",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "badge": "MAIN STAGE HD",
    "youtubeId": "z8HYbmwUGYI",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-z8HYbmwUGYI.mp4",
    "duration": 205,
    "format": "mp4"
  },
  {
    "id": "yt-OH_If-vgdEs",
    "title": "Heaven's Doorstep 1 By djklmr VEDIT",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "badge": "GLOBAL BROADCAST",
    "youtubeId": "OH_If-vgdEs",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-OH_If-vgdEs.mp4",
    "duration": 223,
    "format": "mp4"
  },
  {
    "id": "yt-AYMQZbzx_dU",
    "title": "Blisser - Suzy Sheer (VEDIT By_VDJKLMR)",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "badge": "CANAL OFICIAL HD",
    "youtubeId": "AYMQZbzx_dU",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-AYMQZbzx_dU.mp4",
    "duration": 219,
    "format": "mp4"
  },
  {
    "id": "yt-TxjzaPIFzXU",
    "title": "Ella ya me Olvido - Leonardo Flavio (By_vdjklmr & Roberth Steve Quiroga) VREMIX",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "badge": "VREMIX EXCLUSIVO",
    "youtubeId": "TxjzaPIFzXU",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-TxjzaPIFzXU.mp4",
    "duration": 363,
    "format": "mp4"
  },
  {
    "id": "yt-9E8ayj0QvuA",
    "title": "Im Not In love VRemix By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "badge": "PRODUCCIÓN ORIGINAL",
    "youtubeId": "9E8ayj0QvuA",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-9E8ayj0QvuA.mp4",
    "duration": 340,
    "format": "mp4"
  },
  {
    "id": "yt-EuKtIiPC3DA",
    "title": "Rise Eric Kupper VRemix By djklmr Ft Samantha James & Eric Kupper mp3",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "badge": "CLUB SESSION 24/7",
    "youtubeId": "EuKtIiPC3DA",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-EuKtIiPC3DA.mp4",
    "duration": 453,
    "format": "mp4"
  },
  {
    "id": "yt-L3fHgdBgCLA",
    "title": "Tony Thang G BoY !",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "badge": "FESTIVAL VIP",
    "youtubeId": "L3fHgdBgCLA",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-L3fHgdBgCLA.mp4",
    "duration": 243,
    "format": "mp4"
  },
  {
    "id": "yt-pQvXKUPxt_8",
    "title": "PiuPiu Dance TikTok VEdit By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "badge": "VEDIT OFICIAL",
    "youtubeId": "pQvXKUPxt_8",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-pQvXKUPxt_8.mp4",
    "duration": 222,
    "format": "mp4"
  },
  {
    "id": "yt-6b_W2TCKqQE",
    "title": "New soul yael naim tik tok remix",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "badge": "MAIN STAGE HD",
    "youtubeId": "6b_W2TCKqQE",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-6b_W2TCKqQE.mp4",
    "duration": 211,
    "format": "mp4"
  },
  {
    "id": "yt-fESM5051BaA",
    "title": "Navidad in Japan",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "badge": "GLOBAL BROADCAST",
    "youtubeId": "fESM5051BaA",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-fESM5051BaA.mp4",
    "duration": 286,
    "format": "mp4"
  },
  {
    "id": "yt-AIPmMpgjVvQ",
    "title": "Room 5 Ft Oliver Cheatham - Make Luv - Official VREMIX Video",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "badge": "CANAL OFICIAL HD",
    "youtubeId": "AIPmMpgjVvQ",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-AIPmMpgjVvQ.mp4",
    "duration": 185,
    "format": "mp4"
  },
  {
    "id": "yt-EHnDJf40RUM",
    "title": "Down the Isle Sunfriends, Paul Richmond VRemix",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "badge": "VREMIX EXCLUSIVO",
    "youtubeId": "EHnDJf40RUM",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-EHnDJf40RUM.mp4",
    "duration": 276,
    "format": "mp4"
  },
  {
    "id": "yt-m0kNyD5HFAw",
    "title": "Mix 80´s en Remix",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "badge": "PRODUCCIÓN ORIGINAL",
    "youtubeId": "m0kNyD5HFAw",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-m0kNyD5HFAw.mp4",
    "duration": 609,
    "format": "mp4"
  },
  {
    "id": "yt-l7bb9Kc9qTI",
    "title": "Moony Dove Ill be loving you VRemix Version EDM 2020",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "badge": "CLUB SESSION 24/7",
    "youtubeId": "l7bb9Kc9qTI",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-l7bb9Kc9qTI.mp4",
    "duration": 307,
    "format": "mp4"
  },
  {
    "id": "yt-aMIp4HHIpuQ",
    "title": "Mazinger Z vs Hawaii 5 0 Mashup VRemix",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "badge": "FESTIVAL VIP",
    "youtubeId": "aMIp4HHIpuQ",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-aMIp4HHIpuQ.mp4",
    "duration": 150,
    "format": "mp4"
  },
  {
    "id": "yt-Qn9BZIRXrZo",
    "title": "Lost Rogger Sanchez VRemix Hous Version by djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "badge": "VEDIT OFICIAL",
    "youtubeId": "Qn9BZIRXrZo",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-Qn9BZIRXrZo.mp4",
    "duration": 533,
    "format": "mp4"
  },
  {
    "id": "yt-qOmL2r2ehEI",
    "title": "Intro Presentation 2008 djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "badge": "MAIN STAGE HD",
    "youtubeId": "qOmL2r2ehEI",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-qOmL2r2ehEI.mp4",
    "duration": 308,
    "format": "mp4"
  },
  {
    "id": "yt-6LlYenDIpsw",
    "title": "Intro Batukada",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "badge": "GLOBAL BROADCAST",
    "youtubeId": "6LlYenDIpsw",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-6LlYenDIpsw.mp4",
    "duration": 241,
    "format": "mp4"
  },
  {
    "id": "yt-0dFbUR07qdM",
    "title": "Herb Alpert Rise Club Remix",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "badge": "CANAL OFICIAL HD",
    "youtubeId": "0dFbUR07qdM",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-0dFbUR07qdM.mp4",
    "duration": 429,
    "format": "mp4"
  },
  {
    "id": "yt-6Ob8hJhbnLs",
    "title": "Hai Phút Hon Remix By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "badge": "VREMIX EXCLUSIVO",
    "youtubeId": "6Ob8hJhbnLs",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-6Ob8hJhbnLs.mp4",
    "duration": 234,
    "format": "mp4"
  },
  {
    "id": "yt-3zfm4yR808A",
    "title": "Fugees Killing Me Softly With His Song RDawe DankL Club Mix",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "badge": "PRODUCCIÓN ORIGINAL",
    "youtubeId": "3zfm4yR808A",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-3zfm4yR808A.mp4",
    "duration": 215,
    "format": "mp4"
  },
  {
    "id": "yt-GPbSG7M_dO8",
    "title": "GALACTICO",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "badge": "CLUB SESSION 24/7",
    "youtubeId": "GPbSG7M_dO8",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-GPbSG7M_dO8.mp4",
    "duration": 376,
    "format": "mp4"
  },
  {
    "id": "yt-DgB_A3rkV7g",
    "title": "Dr Dre VS Snoop Dogg ClubMix Remix DJKLMR",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "badge": "FESTIVAL VIP",
    "youtubeId": "DgB_A3rkV7g",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-DgB_A3rkV7g.mp4",
    "duration": 256,
    "format": "mp4"
  },
  {
    "id": "yt-s5JZolI44JI",
    "title": "Eddit By Kann We Are Self",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "badge": "VEDIT OFICIAL",
    "youtubeId": "s5JZolI44JI",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-s5JZolI44JI.mp4",
    "duration": 266,
    "format": "mp4"
  },
  {
    "id": "yt-Z15NT2P64Y4",
    "title": "And lover her",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "badge": "MAIN STAGE HD",
    "youtubeId": "Z15NT2P64Y4",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-Z15NT2P64Y4.mp4",
    "duration": 263,
    "format": "mp4"
  },
  {
    "id": "yt-nLVP4DzSUmk",
    "title": "Brian Mart Hadley Electro Cornetas Official Video VRemix By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "badge": "GLOBAL BROADCAST",
    "youtubeId": "nLVP4DzSUmk",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-nLVP4DzSUmk.mp4",
    "duration": 333,
    "format": "mp4"
  },
  {
    "id": "yt-ZRyl__brhaw",
    "title": "Crep VRemix R3HAB vs Gattuso",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "badge": "CANAL OFICIAL HD",
    "youtubeId": "ZRyl__brhaw",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-ZRyl__brhaw.mp4",
    "duration": 162,
    "format": "mp4"
  },
  {
    "id": "yt-TQ0sdbohvC4",
    "title": "Crystal Dolphin Engelwood VRemix",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "badge": "VREMIX EXCLUSIVO",
    "youtubeId": "TQ0sdbohvC4",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-TQ0sdbohvC4.mp4",
    "duration": 121,
    "format": "mp4"
  },
  {
    "id": "yt-aRzzlaf79Ic",
    "title": "Cube Guys Te Quiero VRemix By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "ELECTRONIC CLUB / VREMIX",
    "badge": "PRODUCCIÓN ORIGINAL",
    "youtubeId": "aRzzlaf79Ic",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-aRzzlaf79Ic.mp4",
    "duration": 413,
    "format": "mp4"
  },
  {
    "id": "yt-d7vJMbM_Trs",
    "title": "Do U Wanna VRemix By djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "TECH HOUSE / MAIN STAGE",
    "badge": "CLUB SESSION 24/7",
    "youtubeId": "d7vJMbM_Trs",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-d7vJMbM_Trs.mp4",
    "duration": 241,
    "format": "mp4"
  },
  {
    "id": "yt-EoQd73j5SAY",
    "title": "Don't Start Now Dua Lipa Club Remix",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "PROGRESSIVE / DANCE EDIT",
    "badge": "FESTIVAL VIP",
    "youtubeId": "EoQd73j5SAY",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-EoQd73j5SAY.mp4",
    "duration": 237,
    "format": "mp4"
  },
  {
    "id": "yt-bUFPCO-bzXE",
    "title": "Barbye Girl - Aqua VRemix ft by_djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "HOUSE / NU-DISCO / VEDIT",
    "badge": "VEDIT OFICIAL",
    "youtubeId": "bUFPCO-bzXE",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-bUFPCO-bzXE.mp4",
    "duration": 192,
    "format": "mp4"
  },
  {
    "id": "yt-IQmAZ5_W6c8",
    "title": "Dezko Ascend Official VRemix by ft VJ djklmr",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "LATIN TECH / CLUB GROOVE",
    "badge": "MAIN STAGE HD",
    "youtubeId": "IQmAZ5_W6c8",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-IQmAZ5_W6c8.mp4",
    "duration": 220,
    "format": "mp4"
  },
  {
    "id": "yt-_2bZo596TQA",
    "title": "Fifty Fifty - Cupid (VRemix) (by_djklmr) ft Video Versión!.",
    "artist": "DJ KLMR Official (@KLMROFFCIALCHANNEL)",
    "genre": "SYNTHPOP / ELECTRO DANCE",
    "badge": "GLOBAL BROADCAST",
    "youtubeId": "_2bZo596TQA",
    "url": "https://github.com/djklmr2025/klmr-digital-tv/releases/download/v2.0-catalog/yt-_2bZo596TQA.mp4",
    "duration": 228,
    "format": "mp4"
  },
  {
    "id": "drive-annihilation",
    "title": "Annihilation - Visuals 60fps HD",
    "artist": "DJ KLMR Visuals",
    "genre": "VISUALS 60FPS / STAGE FX",
    "badge": "BÓVEDA GOOGLE DRIVE",
    "youtubeId": null,
    "url": "https://drive.usercontent.google.com/download?id=1wy3ngDlLrzCyEot-qQp8Aw0u-_gA4PM4&export=download",
    "duration": 210,
    "format": "mp4"
  },
  {
    "id": "drive-anri-surf",
    "title": "Anri - Last Surf Holiday (Night Tempo Edit)",
    "artist": "Anri (Night Tempo Edit)",
    "genre": "FUTURE FUNK / CITY POP",
    "badge": "BÓVEDA GOOGLE DRIVE",
    "youtubeId": null,
    "url": "https://drive.usercontent.google.com/download?id=1969wUXmqwsJaQBI-LKm7Kp88CPezuW1b&export=download",
    "duration": 230,
    "format": "mp4"
  },
  {
    "id": "drive-anri-windy",
    "title": "Anri - Windy Summer (Night Tempo Edit)",
    "artist": "Anri (Night Tempo Edit)",
    "genre": "FUTURE FUNK / CITY POP",
    "badge": "BÓVEDA GOOGLE DRIVE",
    "youtubeId": null,
    "url": "https://drive.usercontent.google.com/download?id=1Z7sxlWqE9jCnz6dVXdGWJBly8L4HwUQO&export=download",
    "duration": 240,
    "format": "mp4"
  },
  {
    "id": "drive-anri-boogie",
    "title": "ANRI - Good Bye Boogie Dance (Official Video)",
    "artist": "Anri Official",
    "genre": "BOOGIE / DISCO FUNK",
    "badge": "BÓVEDA GOOGLE DRIVE",
    "youtubeId": null,
    "url": "https://drive.usercontent.google.com/download?id=1nS5jxzewjl9AyV2TXXK4Bw_6JadfpMKe&export=download",
    "duration": 255,
    "format": "mp4"
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

  const totalDuration = MasterCatalog.reduce((acc, t) => acc + (t.duration || 260), 0);
  const nowSeconds = Math.floor(Date.now() / 1000);
  let cyclePosition = nowSeconds % totalDuration;
  let activeIndex = 0;
  let seekSeconds = 0;

  for (let i = 0; i < MasterCatalog.length; i++) {
    const dur = MasterCatalog[i].duration || 260;
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
    domainMirror: "https://klmr-digital-tv.vercel.app/",
    subDomainMirror: "https://djklmr2025.github.io/klmr-tv/",
    status: "online",
    isLive: false,
    introUrl: "https://klmr-digital-tv.vercel.app/assets/intro.mp4",
    totalTracks: MasterCatalog.length,
    currentIndex: activeIndex,
    seekSeconds: seekSeconds,
    currentTrack: currentTrack,
    nextTrack: MasterCatalog[(activeIndex + 1) % MasterCatalog.length],
    playlist: MasterCatalog
  });
};
