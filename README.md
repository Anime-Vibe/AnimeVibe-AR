# 🔥 Anime Powers AR — Kamehameha & Hollow Purple

[![Python](https://img.shields.io/badge/Python-3.10+-blue.svg)](https://www.python.org/)
[![OpenCV](https://img.shields.io/badge/OpenCV-4.x-green.svg)](https://opencv.org/)
[![MediaPipe](https://img.shields.io/badge/MediaPipe-0.10+-orange.svg)](https://mediapipe.dev/)

An interactive Augmented Reality (AR) project that brings iconic anime abilities into real life using **Computer Vision, Hand Tracking, and Gesture Recognition**.

This system detects hand gestures via webcam and renders dynamic visual effects such as:

* ⚡ **Kamehameha (Dragon Ball)**
* 🔴 **Hollow Purple (Jujutsu Kaisen)**

Built using **Python, OpenCV, and MediaPipe**, this project demonstrates real-time perception, gesture-based control, and physics-inspired visual rendering.

---

## 🚀 Features

### ⚡ Kamehameha
- Two-hand gesture detection
- Charging animation with energy buildup
- Direction-aware beam firing
- Dynamic beam rendering with glow effects, sparks, particles, screen flash & vignette

### 🔴 Hollow Purple
- Single-hand gesture detection (index finger → activation, index + middle → advanced control)
- Multi-stage animation: swirling white energy → red energy formation → stabilized sphere → projectile launch
- Projectile motion with trail & particle effects

---

## 🧠 Tech Stack
- **Python 3.10+**
- **OpenCV** – Video processing & rendering
- **MediaPipe** – Hand tracking & landmark detection
- **NumPy** – Mathematical operations
- **Computer Vision + Geometry + State Machines**

---

## 🎮 How It Works

### Gesture Detection
- Uses MediaPipe to track **21 hand landmarks**
- Detects number of hands, finger states, and spatial relationships

### State Machines
- **Kamehameha**: `idle → charging → shooting`
- **Hollow Purple**: `idle → swirling → forming → calm → shooting`

### Physics & Rendering
- Angle smoothing for stable beam direction
- Distance-based triggering
- Particle systems for sparks and aura
- Frame-based animation using time deltas

---

## 🛠️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/Kamehameha.git
cd Kamehameha
```

### 2. Create virtual environment
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```
Or manually:
```bash
pip install opencv-python mediapipe numpy
```

---

## ▶️ Run the Project
```bash
python hands.py
```
Press **`q`** to quit.

---

## 🎯 Controls / Gestures

| Gesture                       | Action                  |
| ----------------------------- | ----------------------- |
| Two hands close together      | Start Kamehameha charge |
| Move hands apart after charge | Fire Kamehameha         |
| One hand (index finger)       | Start Hollow Purple     |
| Hold gesture                  | Charge Hollow Purple    |
| Wait → auto release           | Fire projectile         |

---

## 📸 Demo

<video src="demo.webm" controls width="600"></video>

---

## 🧩 Project Structure
```
Kamehameha/
│── hands.py          # Main application
│── utils.py          # Helper functions
│── README.md
│── requirements.txt
│── venv/             # Virtual environment (ignored)
```

---

## ⚠️ Notes
- Works best with good lighting and clear hand visibility
- Requires webcam access
- Performance depends on CPU/GPU capabilities

---

## 🚀 Future Improvements
- 🎯 Gesture customization
- 🧠 ML-based gesture classification
- 🎨 Shader-based rendering (OpenGL)
- 🕶️ AR integration (Unity / WebXR)
- 🤖 Multi-user interaction

---

## 📌 Author
**Ashfak Kausik**  
Industrial & Production Engineer  
AI | Robotics | Smart Systems

---

## ⭐ Contribute
Feel free to fork, improve, and build new abilities (Rasengan? 👀)

---

## 🧨 Inspiration
Inspired by iconic anime abilities:
- Dragon Ball (Kamehameha)
- Jujutsu Kaisen (Hollow Purple)

---

## 🏁 Final Note
This project combines **Computer Vision + Human Interaction + Real-Time Simulation** to turn imagination into interactive systems.


# awesome-anime-sources [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

A curated list of all things anime - streaming/downloading/reading/tracking/forums.

### Motivation

* Rather than having all anime websites bookmarked, access them all from one place.
* Keeping tons of alternatives in case our favourite anime website is down.
* All things related to anime/manga in one place


#### NOTE:

* Free anime websites are always struggling with copyright claims, file an issue if a broken link is encountered.
* I am **NOT** promoting the use of free anime websites by any means.


# Contents
* [Anime](#Anime)
  * [Streaming](#Streaming)
  * [Downloading](#Downloading)
    * [DDL](#DDL)
    * [Torrents](#Torrents)
      * [Public Trackers](#Public-Trackers)
      * [Private Trackers](#Private-Trackers)
  * [Anime Listing/Database](#Anime-ListingDatabase)
  * [Schedules/Charts](#SchedulesCharts)
  * [Forums](#Forums)
  * [Apps](#Apps)
    * [PC](#PC)
    * [Mobile](#Mobile)
  * [News about Anime](#News-about-Anime) 
* [Manga](#Manga)
  * [Online Reading](#Online-Reading)
  * [Apps](#Apps)
    * [PC](#PC)
    * [Mobile](#Mobile)
  * [Manga Listing/Database](#Manga-ListingDatabase)
  * [Forums](#Forums)
  * [News about Manga](#News-about-Manga)
* [Light Novels](#Light-Novels)
  * [Apps](#Apps)
    * [Mobile](#Mobile)


## ANIME

### Streaming
* [9anime.to](https://www2.9anime.to/)
* [animation.filmarchives.jp](https://animation.filmarchives.jp/en/) - National Film Archive of Japan
* [anime8.ru](https://anime8.ru/)(Downloading and Streaming)
* [animebuff.ru](https://animebuff.ru/) - Russian dubbing
* [animedao.to](https://animedao.to/)
* [animeflv.net](https://animeflv.net/) - Spanish
* [animehub.ac](https://animehub.ac)
* [animelon.com](https://animelon.com)
* [anime-loads.org](https://www.anime-loads.org/) - Contains German Dubs/Subs
* [animepahe.com](https://animepahe.com/)
* [anime-planet.com](https://www.anime-planet.com/)
* [animeshow.tv](https://animeshow.tv)
* [animetake.tv](https://animetake.tv)
* [anitube.site](https://www.anitube.site/)
* [animevibe.ru](https://animevibe.ru/)
* [chihiro-subs.com](https://chihiro-subs.com/)
* [crunchyroll.com](https://www.crunchyroll.com/)
* [animedubbed.me](https://animedubbed.me/)
* [justdubs.org](https://justdubs.org)
* [kawaiifu.com](https://kawaiifu.com)
* [kaa.si](https://kaa.si)
* [kimcartoon.to](https://kimcartoon.to)
* [proxer.me](https://proxer.me) - Contains German Subs
* [simpleyaweeb.com](https://simplyaweeb.com/series/)
* [otaku-streamers.com](https://otaku-streamers.com/)
* [watchcartoononline.io](https://www.watchcartoononline.io/)
* [tranimeizle.net](https://tranimeizle.net) - Contains Turkish Subs
* [turkanime.net](https://turkanime.net/) - Contains Turkish Subs
* [aniwatch.to](https://aniwatch.to) Previously (zoro.to // sanji.to)
* [AniLibria.TV](https://anilibria.tv/) - Russian dubbing
    * [AniLibria.TV](http://anilibria.life/) - mirror AniLibria.TV 
    * [AniLibria.TV](https://wtf2.anilibria.cf/) - mirror AniLibria.TV
* [AnimeVost.org](https://animevost.org/) - Russian dubbing
* [yummyanime.club](https://yummyanime.club/) - Russian dubbing
* [AniDub.com](https://online.anidub.com/) - Russian dubbing
* [AniStar.org](https://anistar.org) - Russian dubbing
   * [AniStar.org](https://anistar.ew.r.appspot.com/)  - mirror AniStar.org
* [AnimeSub.lt](https://animesub.lt) - Contains Lithuanian Dubs/Subs


### Downloading

#### DDL
* [anime8.ru](https://anime8.ru/) (Downloading and Streaming)
* [anime2enjoy.com](https://anime2enjoy.com/)
* [anichiraku.ru](https://anichiraku.ru/)
* [anidl.org](https://anidl.org)
* [animekaizoku.com](https://animekaizoku.com/)
* [animechiby.com](https://www.animechiby.com/)
* [animekayo.com](https://animekayo.com)
* [animeout.xyz](https://www.animeout.xyz/)
* [erai-raws.info](https://erai-raws.info)
* [darklegends60mb.org](https://www.darklegends60mb.org/)
* [hi10anime.com](https://hi10anime.com/)
* [nibl.co.uk](https://nibl.co.uk/bots.php)(irc)

#### Torrents

##### Public Trackers
* [animetosho.org](https://animetosho.org) - Torrent, NZB, DDL
* [anidex.info](https://anidex.info/)
* [anirena.com](https://www.anirena.com/)
* [anisearch.ru](https://anisearch.ru/)
* [horriblesubs.info](https://horriblesubs.info/) - Best anime torrents.
* [minglong.org](https://tracker.minglong.org:8080/)
* [tokyotosho.info](https://www.tokyotosho.info/)
* [nyaa.si](https://nyaa.si/)
* [nyaapantsu](https://nyaa.pantsu.cat/)
* [animelayer](http://animelayer.ru/) - Site is in russian
* [sukebeinyaa](https://sukebei.nyaa.si/) For Hentai
* [shanaproject](https://shanaproject.com)

##### Private trackers
 * [animebytes.tv](https://animebytes.tv/)
 * [animetorrents.me](https://animetorrents.me/)
 * [bakabt.me](https://bakabt.me) (If you want to get a bakabt account, you should go to their irc which is #BakaBT on Rizon, and take a queue number for getting reviewed.)

### Anime Listing/Database
* [anidb.net](https://anidb.net)
* [animenewsnetwork.com](https://animenewsnetwork.com)
* [kitsu.io](https://kitsu.io)
* [myanimelist.net](https://myanimelist.net)
* [anilist.co](https://anilist.co)
* [anisearch.com](https://anisearch.com)
* [annict.com](https://annict.com)
* [simkl.com](https://simkl.com)
* [anime-planet.com](https://anime-planet.com)
* [shikimori.one](https://shikimori.one/) - Russian
* [kaize.io](https://kaize.io)

### Schedules/Charts
* [myanimelist.net/anime/season](https://myanimelist.net/anime/season)
* [anidb.net/anime/season](https://anidb.net/anime/season/?do.filter=1) Season chart
* [anidb.net/anime/schedule](https://anidb.net/anime/schedule/?do.filter=1) Schedule
* [senpai.moe](https://www.senpai.moe/)
* [anisearch.com](https://www.anisearch.com/anime/calendar)
* [livechart.me](https://livechart.me)
* [anichart.net](https://anichart.net/)

### Forums
* [4chan.org](https://boards.4channel.org/a/)
* [reddit.com/r/anime](https://reddit.com/r/anime)
* [animebase.me](https://animebase.me/)
* [animesuki.com](https://forums.animesuki.com/)
* [myanimelist.net](https://myanimelist.net/forum/)
* [anime-planet.com](https://anime-planet.com/forum)
* [anidb.net](https://anidb.net/forum)
* [animenewsnetwork.com](https://www.animenewsnetwork.com/bbs/phpBB2/)
* [crunchyroll.com](https://www.crunchyroll.com/forum)

### Apps

#### PC
* [Totoro](https://github.com/insomniachi/Totoro)
* [hakuneko](https://github.com/manga-download/hakuneko)
* [anime-downloader](https://github.com/vn-ki/anime-downloader)
* [monkey-dl](https://github.com/Oshan96/monkey-dl)
* [taiga](https://github.com/erengy/taiga)
* [kawanime](https://github.com/Kylart/KawAnime)
* [yuna](https://github.com/BeeeQueue/yuna)
* [mikazuki](https://github.com/NicoAiko/mikazuki)
* [hachidori](https://github.com/Atelier-Shiori/hachidori)
* [trackma](https://github.com/z411/trackma)

#### Mobile
* [Saikou](https://github.com/saikou-app/saikou)
* [Cloudstream](https://github.com/recloudstream/cloudstream)
* [Aniyomi](https://github.com/jmir1/aniyomi)
* [Animiru](https://github.com/Quickdesh/Animiru)
* [Kuro](https://github.com/deceptions/no)
* [Anyme](https://zunjae.github.io/anymeapp.com)
* [AnimeDLR](https://github.com/cylonu87/AnimeDLR)
* [9Animator](https://nineanimator.marcuszhou.com/)
* [Aruppi](https://aruppi.jeluchu.com/) - Spanish
* [FireAnime](https://github.com/XenTeckzX/FireAnime)
* [MALClient](https://play.google.com/store/apps/details?id=com.drutol.malclient)
* [AniTrend](https://play.google.com/store/apps/details?id=com.mxt.anitrend)
* [LiveChart](https://play.google.com/store/apps/details?id=me.livechart.android)
* [Crunchyroll](https://play.google.com/store/apps/details?id=com.crunchyroll.crunchyroid)
* [Animity](https://github.com/kl3jvi/animity)

### News about Anime
* [haruhichan.com](https://haruhichan.com/)
* [animenewsnetwork.com](https://animenewsnetwork.com)
* [otakuusamagazine.com](https://otakuusamagazine.com)
* [shikimori.one](https://shikimori.one/) - Russian

## MANGA

### Online Reading
* [1stkissmanga](https://1stkissmanga.com/)
* [Chibi manga reader](https://www.cmreader.info/)
* [Fallen Angels](https://manga.fascans.com/)
* [Mangadex](https://mangadex.org/)
* [bato.to](https://bato.to/)
* [bulumanga.com](https://bulumanga.com/)
* [fanfox.net](https://fanfox.net/)
* [mangakomi](https://mangakomi.com/)
* [mangaplus](https://mangaplus.shueisha.co.jp/updates) Free, Official Source for Shounen Jump Series
* [VizMedia](https://www.viz.com/shonenjump) Official Western/European Source for Shounen Jump Series (Latest 3 chapters of all series free)
* [mangafreak.eu](https://mangafreak.eu/)
* [mangahere.cc](https://mangahere.cc/)
* [mangakakalot.com](https://mangakakalot.com/)
* [manganelo.com](https://manganelo.com/)
* [mangapanda.com](https://www.mangapanda.com/)
* [mangapark.net](https://mangapark.net/)
* [mangareader.net](https://www.mangareader.net/)
* [mangareader.to](https://mangareader.to/)
* [mangasee123.com](https://mangasee123.com/)
* [ReadManga Today](https://www.readmng.com/)
* [Mangazuki](https://mangazuki.me/)
* [readcomiconline](https://readcomiconline.to/)
* [readm](https://readm.org/)
* [readmanhua](https://readmanhua.net/)
* [weebtoons](https://www.webtoons.com/en/)
* [readmanhua](https://readmanhua.net/)
* [WuxiaWorld](https://wuxiaworld.site/)
* [MangaLib.me](https://mangalib.me/) - Russian
* [desu.me](https://desu.me/) - Russian
* [ReadManga](https://readmanga.live/) - Russian
* [ReManga](https://remanga.org/) - Russian
* [MangaSco](https://mangasco.com/)


### Apps

#### PC
* [hakuneko](https://github.com/manga-download/hakuneko)
* [FMD](https://github.com/riderkick/FMD)
* [doujindownloader](https://doujindownloader.com/)
* [OpenComic](https://github.com/ollm/OpenComic)
* [kavita](https://github.com/Kareadita/Kavita)

#### Mobile
* [Tachiyomi](https://github.com/inorichi/tachiyomi)
* [tachiyomij2k](https://github.com/Jays2Kings/tachiyomiJ2K) Fork of Tachiyomi but it has way better ui than tachiyomi
* [MangaReader](https://apps.apple.com/us/app/manga-reader-manga-viewer/id647701066)
* [Paperback](https://apps.apple.com/app/paperback-manga-reader/id1519509781)
* [mangazone](https://mangazoneapp.com/)
* [Crunchyroll Manga](https://play.google.com/store/apps/details?id=com.crunchyroll.crmanga&hl=en)
* [MangaPlus](https://play.google.com/store/apps/details?id=jp.co.shueisha.mangaplus&hl=en)
* [Shonen Jump](https://play.google.com/store/apps/details?id=com.viz.wsj.android&hl=en_GB&gl=US)

### Manga Listing/Database
* [mangaupdates](mangaupdates.com)
* [animenewsnetwork.com](https://animenewsnetwork.com)
* [kitsu.io](https://kitsu.io)
* [myanimelist.net](https://myanimelist.net)
* [anilist.co](https://anilist.co)
* [anisearch.com](https://anisearch.com)
* [anime-planet.com](https://anime-planet.com)
* [shikimori.one](https://shikimori.one/) - Russian
* [kaize.io](https://kaize.io)

### Forums
* [4chan.org](https://boards.4channel.org/a/)
* [reddit.com](reddit.com/r/manga)
* [animebase.me](https://animebase.me/)
* [animesuki.com](https://forums.animesuki.com/)
* [myanimelist.net](https://myanimelist.net/forum/)
* [anime-planet.com](https://anime-planet.com/forum)
* [animenewsnetwork.com](https://www.animenewsnetwork.com/bbs/phpBB2/)
* [crunchyroll.com](https://www.crunchyroll.com/forum)
* [mangahelpers](https://mangahelpers.com/)
* [mangaupdates](https://www.mangaupdates.com/forums.php)

### News about Manga
* [haruhichan.com](https://haruhichan.com/)
* [animenewsnetwork.com](https://animenewsnetwork.com)
* [otakuusamagazine.com](https://otakuusamagazine.com)
* [shikimori.one](https://shikimori.one/) - Russian

## LIGHT NOVELS

### Apps

#### Mobile
* [LNReader](https://github.com/LNReader/lnreader)
* [QuickNovel](https://github.com/LagradOst/QuickNovel)
* [Shosetsu](https://shosetsu.app/)
