const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarMenu = document.getElementById('sidebarMenu');

function toggleSidebar() {
    sidebarMenu.classList.toggle('show');
}

sidebarToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleSidebar();
});

sidebarMenu.addEventListener('click', function(e) {
    e.stopPropagation();
});

document.addEventListener('click', function(e) {
    if (!sidebarMenu.contains(e.target) && e.target !== sidebarToggle) {
        sidebarMenu.classList.remove('show');
    }
});

let animeData = [ 
   {
        id: 'jujutsu0',
        title: "Jujutsu Kaisen 0",
        searchName: "jujutsu kaisen 0",
        img: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx131573-rpl82vDEDRm6.jpg',
         video: [
        { label: 'Trailer', url: 'Video/Jujutsu Kaisen 0.1.mp4' },
        { label: 'حرق', url: 'Video/Jujutsu Kaisen 0.2.mp4' },
    ],
        releaseYear: '2021',
        episodes: 'Movie',
        seasons: '1 Movie',
        classification: '+16',
        rating: '8.4',
        studio: "MAPPA",
        genres: ['Action', 'Supernatural'],
        fullStory: [{ type: 'text', content: "يوتا يدخل مدرسة جوجوتسو ليتعلم السيطرة على لعنة صديق طفولته." }]
    },


    {
    id: 'kimetsu-mugen-ressha',
    title: "Demon Slayer: Mugen Train",
    searchName: "demon slayer mugen train kimetsu",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQQYkl1iJ6_KQ0TiluqeRXJQYMYkn4n_5LLE1oi0wDA&s=10',
      video: [
        { label: 'Trailer', url: 'Video/Mugen Train.1.mp4' },
        
    ],
    releaseYear: '2020',
    episodes: 'Movie',
    seasons: '1 Movie',
    classification: '+16',
    rating: '8.7',
    studio: "Ufotable",
    genres: ['Action', 'Supernatural', 'Drama', 'Adventure'],
    fullStory: [{ 
        type: 'text',content: "تانجيرو وفريقه ينطلقون في مهمة جديدة على قطار موغن، حيث يواجهون شيطاناً قوياً يهدد حياة الركاب." }]
    },



    {
    id: 'demon-slayer-infinity-castle',
    title: "Demon Slayer: Infinity Castle",
    searchName: "demon slayer infinity castle kimetsu",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_EFHvFzN5TbUNghJL41fvEpSgjA09RnPnke7vPYg2zg&s=10',
      video: [
        { label: 'Trailer', url: 'Video/Infinity Castle.1.mp4' },
       
    ],
    releaseYear: '2025',
    episodes: 'Movie',
    seasons: '1 Movie',
    classification: '+16',
    rating: '8.7',
    studio: "Ufotable",
    genres: ['Action', 'Supernatural', 'Drama', 'Adventure', 'Fantasy'],
    fullStory: [{ 
        type: 'text',content: "الجزء الأول من ثلاثية الأفلام الختامية لسلسلة قاتل الشياطين. يجد الفيلق أنفسهم محاصرين داخل قلعة اللانهاية، حيث يواجه تانجيرو والهاشيرا أقوى الشياطين في معركة حاسمة ضد موزان كيبوتسوجي واثني عشر كيزوكي."  }]
    },


    {
    id: 'suzume',
    title: "Suzume",
    searchName: "suzume",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQgOTDyjmlFr-H8a1ilrhhK5rZhkN4YhoXw_Z0Z3i--Q&s=10',
      video: [
        { label: 'Trailer', url: 'Video/Suzume.1.mp4' },
       
    ],
    releaseYear: '2022',
    episodes: 'Movie',
    seasons: '1 Movie',
    classification: '+13',
    rating: '8.72',
    studio: "CoMix Wave Films",
    genres: ['Adventure', 'Romance', 'Fantasy', 'Drama'],
    fullStory: [{ 
        type: 'text',
        content: "في رحلة عبر اليابان، تلتقي سوزومي بصبي غامض يحاول إغلاق أبواب الزمان والمكان لمنع الكوارث الطبيعية. تنضم إليه في مهمة خطيرة لاكتشاف معنى الحياة والذاكرة." 
    }]
    },


    {
    id: 'maquia',
    title: "Maquia: When the Promised Flower Blooms",
    searchName: "maquia when the promised flower blooms",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY92BT5SFzVyti2PFEFD9szB9qAjWi3Nmo7qrV3Pn5Xg&s=10',
      video: [
        { label: 'Trailer', url: 'Video/Maquia When the.1.mp4' },
        
    ],
    releaseYear: '2018',
    episodes: 'Movie',
    seasons: '1 Movie',
    classification: '+13',
    rating: '8.5',
    studio: "P.A. Works",
    genres: ['Drama', 'Fantasy', 'Adventure', 'Romance'],
    fullStory: [{ 
        type: 'text',
        content: "ماكيا، فتاة من قبيلة تعيش لقرون، تعيش حياة هادئة حتى يغزو جيش مملكتهم. في الفوضى، تجد طفلاً وتقرر تربيته كابن لها، في قصة مؤثرة عن الأمومة والزمن والفراق." 
    }]
    },


       {
    id: 'gintama-the-final',
    title: "Gintama: The Final",
    searchName: "gintama the final",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn0OHIzYJNLb74IALhqoL68XVEC8XhLAf8djxxQ9FDyQ&s=10',
      video: [
        { label: 'Trailer', url: 'Video/Gintama The Final.1.mp4' },
       
    ],
    releaseYear: '2021',
    episodes: 'Movie',
    seasons: '1 Movie',
    classification: '+16',
    rating: '9.05',
    studio: "Bandai Namco Pictures",
    genres: ['Comedy', 'Action', 'Sci-Fi', 'Drama'],
    fullStory: [{ type: 'text', content: "الفيلم الأخير لسلسلة جينتاما، حيث يواجه جينتوكي وأصدقاؤه التهديد الأخير لوجودهم، في خاتمة ملحمية تمزج بين الكوميديا الرائعة والإثارة." }]
    },

   
     {
    id: 'violet-evergarden-movie',
    title: "Violet Evergarden: The Movie",
    searchName: "violet evergarden movie",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS38cT1N1MLRRgRO6VnkNk23Rbup6DxEvHQn1kqzMDMYQ&s=10',
      video: [
        { label: 'Trailer', url: 'Video/Violet Evergarden.1.mp4' },
   
    ],
    releaseYear: '2020',
    episodes: 'Movie',
    seasons: '1 Movie',
    classification: '+13',
    rating: '8.58',
    studio: "Kyoto Animation",
    genres: ['Drama', 'Romance', 'Fantasy', 'Psychological'],
    fullStory: [{ type: 'text', content: "استمرار لقصة فايوليت، دمية الذاكرة الآلية التي تكتب الرسائل للآخرين. في هذا الفيلم، تواجه ماضيها وتشرع في رحلة للعثور على معنى الحب والأمل." }]
    },


    {
    id: 'dragon-ball-super-broly',
    title: "Dragon Ball Super: Broly",
    searchName: "dragon ball super broly",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnB0mgAfOhz4r0bp3Qhgx5wvR2n5QWSEgvLmU8jL7AGw&s=10',
      video: [
        { label: 'Trailer', url: 'Video/Dragon Ball Super.1.mp4' },
     
    ],
    releaseYear: '2018',
    episodes: 'Movie',
    seasons: '1 Movie',
    classification: '+13',
    rating: '8.42',
    studio: "Toei Animation",
    genres: ['Action', 'Sci-Fi', 'Adventure', 'Drama'],
    fullStory: [{ type: 'text', content: "غوكو وفيجيتا يواجهان أقوى خصم في تاريخ السايان، برولي، في معركة ملحمية تعيد تعريف القوة في عالم دراغون بول." }]
},



{
    id: 'made-in-abyss-dawn-deep-soul',
    title: "Made in Abyss: Dawn of the Deep Soul",
    searchName: "made in abyss dawn of the deep soul",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtWeWvy-LjIvra77GXML2x0Djoevy9SDmBlKvfH84B6g&s=10',
      video: [
        { label: 'Trailer', url: 'Video/Made in Abyss.1.mp4' },
        { label: 'حرق', url: 'Video/' },
    ],
    releaseYear: '2020',
    episodes: 'Movie',
    seasons: '1 Movie',
    classification: '+18',
    rating: '8.63',
    studio: "Kinema Citrus",
    genres: ['Adventure', 'Drama', 'Fantasy', 'Psychological Horror'],
    fullStory: [{ type: 'text', content: "رحلة ريكو وريج تستمر في الهاوية، حيث يواجهون أهوالاً واكتشافات مرعبة جديدة حول طبيعة الهاوية وعلاقتها بالبشرية." }]
},




{
    id: 'the-boy-and-the-beast',
    title: "The Boy and the Beast",
    searchName: "the boy and the beast bakemono no ko",
    img: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/3b624448199a3efbcb0d35e1a265fb94.jpe',
      video: [
        { label: 'Trailer', url: 'Video/The Boy and the Beast.1.mp4' },
        
    ],
    releaseYear: '2015',
    episodes: 'Movie',
    seasons: '1 Movie',
    classification: '+13',
    rating: '8.00',
    studio: "Studio Chizu",
    genres: ['Adventure', 'Fantasy', 'Drama', 'Action'],
    fullStory: [{ type: 'text', content: "صبي ضائع في العالم البشري يتيه في عالم الوحوش، حيث يصبح متدرباً لمحارب وحش غاضب. تتطور علاقتهما من خلال التدريب والصداقة في مغامرة عن العائلة والانتماء." }]
},




{
    id: 'the-anthem-of-the-heart',
    title: "The Anthem of the Heart",
    searchName: "the anthem of the heart kokoro ga sakebitagatterunda",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw2ZpnRljAol5VC44qTZMg9mRBFKzPC6AdZwyQZdS6DA&s=10',
      video: [
        { label: 'Trailer', url: 'Video/The Anthem of the Heart.1.mp4' },
   
    ],
    releaseYear: '2015',
    episodes: 'Movie',
    seasons: '1 Movie',
    classification: '+13',
    rating: '7.85',
    studio: "A-1 Pictures",
    genres: ['Drama', 'Romance', 'School', 'Music'],
    fullStory: [{ type: 'text', content: "فتاة تعاني من صدمة نفسية بعد كلمات قاسية من والدها وتفقد القدرة على الكلام. عندما يُطلب منها المشاركة في مسرحية موسيقية، تجد طريقة للتعبير عن مشاعرها المكبوتة من خلال الغناء." }]
},



{
    id: 'the-boy-and-the-heron',
    title: "The Boy and the Heron",
    searchName: "the boy and the heron kimi-tachi wa dou ikiru ka",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-YnMZN2U3jZwIA9rL2Xa1h9cBBZoEctaFZlAD-Zm48A&s',
      video: [
        { label: 'Trailer', url: 'Video/The Boy.1.mp4' },
       
    ],
    releaseYear: '2023',
    episodes: 'Movie',
    seasons: '1 Movie',
    classification: '+13',
    rating: '8.4',
    studio: "Studio Ghibli",
    genres: ['Adventure', 'Drama', 'Fantasy', 'Mystery'],
    fullStory: [{ type: 'text', content: "بعد وفاة والدته، ينتقل الشاب ماهيتو إلى منزل عائلته الريفي. تقوده أحداث غامضة إلى برج قديم، حيث يعيش مالك الحزين الحزين. عندما تختفي زوجة أبيه، يتبعه إلى عالم غامض يطمس الحدود بين الأحياء والأموات، في رحلة لكشف الأسرار وفهم نفسه." }]
},



{
    id: 'baki-vs-kengan',
    title: "Baki Hanma vs Kengan Ashura",
    searchName: "baki hanma vs kengan ashura",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBtAVDh5s05w3SSv4Bm4ssGQkfIZG1PTzpUsCoMot22w&s=10',
      video: [
        { label: 'Trailer', url: 'Video/Baki Hanma vs.1.mp4' },
        
    ],
    releaseYear: '2024',
    episodes: 'Movie',
    seasons: '1 Movie',
    classification: '+18',
    rating: '5.7',
    studio: "TMS Entertainment",
    genres: ['Action', 'Martial Arts', 'Sports', 'Drama'],
    fullStory: [{ type: 'text', content: "معركة غير مسبوقة تجمع أقوى المقاتلين من عالمين مختلفين، حيث يتواجه باكي هانما وتوكيتا أوما في مباراة مثيرة لتحديد من هو الأقوى حقاً." }]
},



{
    id: 'kimi-no-iro',
    title: "Kimi no Iro",
    searchName: "kimi no iro",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTja8utH7LiLNqPbCqs9ZPtjlkkSIY8PeIVurJFPc2y4w&s=10',
      video: [
        { label: 'Trailer', url: 'Video/Kimi no Iro.1.mp4' },
        
    ],
    releaseYear: '2024',
    episodes: 'Movie',
    seasons: '1 Movie',
    classification: '+13',
    rating: '7.9',
    studio: "Science SARU",
    genres: ['Drama', 'Psychological', 'Music', 'Romance'],
    fullStory: [{ type: 'text', content: "فتاة في المدرسة الثانوية تمتلك قدرة غريبة على رؤية مشاعر الناس كألوان. هذه القدرة تجعلها تضع مشاعر الآخرين قبل مشاعرها، حتى تلتقي بأشخاص يساعدونها في العثور على الأمل وفهم نفسها." }]
}, 




{
    id: 'your-name',
    title: "Your Name",
    searchName: "your name kimi no na wa",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOqgdVJcVbaz3MwvdGWbyjKZq1NmqbBmMzD8_aeDwdg&s=10',
      video: [
        { label: 'Trailer', url: 'Video/Your Name.1.mp4' },
        
    ],
    releaseYear: '2016',
    episodes: 'Movie',
    seasons: '1 Movie',
    classification: '+13',
    rating: '8.84',
    studio: "CoMix Wave Films",
    genres: ['Romance', 'Sci-Fi', 'Drama', 'Adventure'],
    fullStory: [{ type: 'text', content: "مراهقان يعيشان في مدينتين مختلفتين يكتشفان أنهما يتبادلان الأجساد بشكل غامض، وتتطور علاقتهما عبر الزمن لمواجهة قدر يهدد أحدهما." }]
},

{
    id: 'spirited-away',
    title: "Spirited Away",
    searchName: "spirited away sen to chihiro no kamikakushi",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSINJHZKscWPPgIL0sTcPF6pnqcLODb2g1jLHgS_qmfOw&s=10',
      video: [
        { label: 'Trailer', url: 'Video/Spirited Away.1.mp4' },
        
    ],
    episodes: 'Movie',
    seasons: '1 Movie',
    classification: '+13',
    rating: '8.78',
    studio: "Studio Ghibli",
    genres: ['Adventure', 'Fantasy', 'Drama', 'Family'],
    fullStory: [{ type: 'text', content: "أثناء انتقال عائلتها إلى منزل جديد، تدخل شيهيرو البالغة من العمر 10 سنوات عالماً يسكنه الآلهة والسحرة والأرواح. يتحول والداها إلى خنازير، وعليها العمل في حمام للأرواح لإيجاد طريقة لإنقاذهم والعودة إلى عالمها." }]
},



{
    id: 'one-piece-film-red',
    title: "One Piece Film: Red",
    searchName: "one piece film red",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqnknBuF4jj9r1ijMbkpTC0-MQaAp7fMLVl6XNh68upw&s=10',
      video: [
        { label: 'Trailer', url: 'Video/One Piece Red.1.mp4' },
        
    ],
    releaseYear: '2022',
    episodes: 'Movie',
    seasons: '1 Movie',
    classification: '+13',
    rating: '8.03',
    studio: "Toei Animation",
    genres: ['Action', 'Adventure', 'Music', 'Comedy'],
    fullStory: [{ type: 'text', content: "المغنية الأسطورية أوتا تصعد على المسرح لأول مرة أمام الجمهور. يكتشف لوفي وطاقمه أن أوتا هي ابنة شانكس، وتتكشف الأحداث في مغامرة موسيقية مثيرة." }]
},



];

const animeGrid = document.getElementById('animeGrid');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('no-results');
const animeModal = document.getElementById('animeModal');
const totalAnimeEl = document.getElementById('totalAnime');
const totalSeasonsEl = document.getElementById('totalSeasons');

function seasonsToNumber(seasons) {
    const n = parseInt(String(seasons).replace(/[^\d]/g, ''));
    return isNaN(n) ? 0 : n;
}

function updateStats() {
    totalAnimeEl.textContent = animeData.length;
    totalSeasonsEl.textContent = animeData.reduce((sum, anime) => sum + seasonsToNumber(anime.seasons), 0);
}

function renderAnimeCards(data) {
    animeGrid.querySelectorAll('.anime-card').forEach(card => card.remove());
    let favorites = JSON.parse(localStorage.getItem('animeFavorites')) || [];

    data.forEach(anime => {
        const card = document.createElement('div');
        card.className = 'anime-card';
        const genresString = anime.genres ? anime.genres.join(' ') : '';
        card.setAttribute('data-search', anime.searchName + ' ' + genresString + ' ' + anime.seasons);

        const isFav = favorites.includes(anime.id);
        const heartIcon = isFav ? '❤️' : '🤍';
        const activeClass = isFav ? 'active' : '';
card.innerHTML = `
    <div style="position: relative; width: 100%;">
        <img src="${anime.img}" alt="${anime.title}" loading="lazy" style="width:100%; height:280px; object-fit:cover; display:block;">
        <button class="favorite-btn ${activeClass}" onclick="toggleFavorite('${anime.id}', this)">${heartIcon}</button>
    </div>
    <div class="anime-card-body">
        <h3 class="anime-card-title">${anime.title}</h3>
        <button class="btn-view" onclick="openAnime('${anime.id}')">📖 Story Details</button>
    </div>
`;
        animeGrid.insertBefore(card, noResults);
    });
}

function openAnime(id) {
    const anime = animeData.find(a => a.id === id);
    if (!anime) return;

    let watchLaterList = JSON.parse(localStorage.getItem('animeWatchLater')) || [];
    const isInWatchLater = watchLaterList.includes(anime.id);
    const watchLaterIcon = isInWatchLater ? '⭐' : '📺';
    const watchLaterClass = isInWatchLater ? 'active' : '';

    let videoHTML = '';
    let videoTabsHTML = '';

    if (Array.isArray(anime.video) && anime.video.length > 0) {
        videoTabsHTML = `
            <div class="modal-video-tabs-wrapper">
                <div class="video-tab-container">
                    ${anime.video.map((vid, index) => `
                        <button class="video-tab-btn ${index === 0 ? 'active' : ''}" 
                                onclick="switchVideo(this, '${vid.url.replace(/'/g, "\\'")}')">
                            ${vid.label || `Video ${index + 1}`}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
        videoHTML = `
            <div class="video-container-right" id="activeVideoContainer">
                <video 
                    src="${anime.video[0].url}" 
                    controls 
                    autoplay 
                    playsinline
                    onplay="pauseBackgroundMusic()"
                    style="width: 100%; height: 100%; object-fit: contain; background-color: #000; border-radius: 12px;">
                    عذراً، متصفحك لا يدعم تشغيل الفيديو.
                </video>
            </div>
        `;
    } else if (anime.video && anime.video.trim() !== '') {
        videoHTML = `
            <div class="video-container-right">
                <video 
                    src="${anime.video}" 
                    controls 
                    autoplay 
                    playsinline
                    onplay="pauseBackgroundMusic()"
                    style="width: 100%; height: 100%; object-fit: contain; background-color: #000; border-radius: 12px;">
                    عذراً، متصفحك لا يدعم تشغيل الفيديو.
                </video>
            </div>
        `;
    } else {
        videoHTML = `<div class="video-container-right" style="display:flex; align-items:center; justify-content:center; border:1px dashed var(--border-color); color:var(--text-muted); font-size:0.9rem;">No Trailer Available</div>`;
    }

    let modalBodyHTML = `
        <div class="modal-top-row">
            <button class="close-btn" onclick="closeAnime()">⬅ Back to Home</button>
            ${videoTabsHTML}
            <button class="watch-later-btn ${watchLaterClass}" onclick="toggleWatchLater('${anime.id}', this)">${watchLaterIcon} Watch Later</button>
        </div>
    `;

    modalBodyHTML += `
        <div class="modal-content-split">
            <div class="modal-left">
                <div class="modal-img-wrapper">
                    <img src="${anime.img}" alt="${anime.title}" class="modal-img-left">
                </div>
                <h2 class="modal-title-left">${anime.title}</h2>
            </div>
            <div class="modal-right">
                ${videoHTML}
            </div>
        </div>

        <div class="anime-meta-grid" style="margin-top: 15px;">
            <div class="meta-item">Release Year: <strong>${anime.releaseYear}</strong></div>
            <div class="meta-item">Episodes: <strong>${anime.episodes}</strong></div>
            <div class="meta-item">Seasons: <strong>${anime.seasons}</strong></div>
            <div class="meta-item classification-highlight">
                Classification: <strong><span class="${getClassificationClass(anime.classification)}">${anime.classification ?? 'General'}</span></strong>
            </div>
            <div class="meta-item">Rating: <strong>${anime.rating} / 10</strong></div>
            <div class="meta-item">Studio: <strong>${anime.studio}</strong></div>
        </div>
        <div class="genres-list">${anime.genres.map(genre => `<span class="genre-tag">${genre}</span>`).join('')}</div>
        
        <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 20px 0;">
    `;
    
    anime.fullStory.forEach(item => {
        if (item.type === 'text') modalBodyHTML += `<p class="story-paragraph">${item.content}</p>`;
    });

    const links = animeLinks[anime.id];
    
    let availableSeasons = [];
    if (links && links.seasons && links.seasons.length > 0) {
        availableSeasons = links.seasons;
    } else if (links && links.episodes) {
        availableSeasons = Object.keys(links.episodes);
    }

    let seasonsBtnsHTML = '';
    if (availableSeasons.length > 0) {
        seasonsBtnsHTML = availableSeasons.map(sNum => 
            `<button class="btn season-select-btn" onclick="selectSeason('${anime.id}', '${sNum}')">📦 Season ${sNum}</button>`
        ).join('');
    } else {
        seasonsBtnsHTML = `<div style="color:#94a3b8; text-align:center;">No seasons available</div>`;
    }

    modalBodyHTML += `
        <div class="video-functions">
            <button class="btn watch-btn" onclick="window.open('${links?.watch || '#'}', '_blank')">▶ Watch Now</button>
            <button class="btn seasons-btn" onclick="toggleDropdown('seasons-${anime.id}')">📦 Seasons</button>
            
            <div class="seasons-dropdown" id="seasons-${anime.id}">
                <div class="dropdown-title">📦 Choose Season</div>
                ${seasonsBtnsHTML}
            </div>

            <div class="episodes-panel" id="episodes-panel-${anime.id}">
                <div class="episodes-panel-header" id="episodes-panel-header-${anime.id}">Select a Season</div>
                <div class="episodes-panel-list" id="episodes-panel-list-${anime.id}">
                    <div style="color:#94a3b8; text-align:center; padding: 20px;">Please select a season from the dropdown.</div>
                </div>
            </div>

            <button class="btn download-btn" onclick="window.open('${links?.download || '#'}', '_blank')">⬇ Download Now</button>
        </div>
        <div class="overlay-close" id="overlay-${anime.id}" onclick="closeDropdowns('${anime.id}')"></div>
    `;
    
    document.getElementById('modalBody').innerHTML = modalBodyHTML;
    animeModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function getClassificationClass(classification) {
    const value = String(classification || '').trim();
    if (value.includes('7')) return 'classification-7';
    if (value.includes('12')) return 'classification-12';
    if (value.includes('20')) return 'classification-20';
    if (value.includes('16')) return 'classification-16';
    if (value.includes('18')) return 'classification-18';
    return 'classification-default';
}

function closeAnime() {
    animeModal.style.display = 'none';
    document.body.style.overflow = 'auto';

    const modalBody = document.getElementById('modalBody');
    if (modalBody) {
        modalBody.innerHTML = ''; 
    }
}

searchInput.addEventListener('input', function(e) {
    const term = e.target.value.trim().toLowerCase();
    let visibleCount = 0;

    document.querySelectorAll('.anime-card').forEach(card => {
        const searchData = card.getAttribute('data-search').toLowerCase();
        if (searchData.includes(term)) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });

    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
});

animeModal.addEventListener('click', function(e) {
    if (e.target === animeModal) closeAnime();
});
renderAnimeCards(animeData);
updateStats();


function filterCategory(type) {
    document.getElementById('filterDropdown').classList.remove('active');

    const cards = document.querySelectorAll('.anime-card');
    let visibleCount = 0;
    const noResults = document.getElementById('no-results');

    let favorites = JSON.parse(localStorage.getItem('animeFavorites')) || [];
    let watchLaterList = JSON.parse(localStorage.getItem('animeWatchLater')) || [];

    if (type === 'Show All') {
        cards.forEach(card => {
            card.classList.remove('hidden');
            visibleCount++;
        });
        noResults.style.display = 'none';
        return;
    }

    if (type === 'Favorites') {
        cards.forEach(card => {
            const heartBtn = card.querySelector('.favorite-btn');
            if (heartBtn && heartBtn.classList.contains('active')) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });
        if (visibleCount === 0) {
            noResults.style.display = 'block';
            noResults.textContent = '💔 You haven\'t added any anime to favorites yet!';
        } else {
            noResults.style.display = 'none';
        }
        return;
    }

    if (type === 'Watch Later') {
        cards.forEach(card => {
            const viewBtn = card.querySelector('.btn-view');
            if (viewBtn) {
                const onclickAttr = viewBtn.getAttribute('onclick');
                const idMatch = onclickAttr.match(/'([^']+)'/);
                if (idMatch && idMatch[1]) {
                    const animeId = idMatch[1];
                    if (watchLaterList.includes(animeId)) {
                        card.classList.remove('hidden');
                        visibleCount++;
                    } else {
                        card.classList.add('hidden');
                    }
                }
            }
        });
        if (visibleCount === 0) {
            noResults.style.display = 'block';
            noResults.textContent = '📺 You haven\'t added any anime to "Watch Later" yet!';
        } else {
            noResults.style.display = 'none';
        }
        return;
    }

    cards.forEach(card => {
        const searchData = card.getAttribute('data-search') || '';
        if (searchData.includes(type)) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });

    if (visibleCount === 0) {
        noResults.style.display = 'block';
        noResults.textContent = `Sorry, no anime of type "${type}" currently available! 😅`;
    } else {
        noResults.style.display = 'none';
    }
}

document.addEventListener('click', function(e) {
    const container = document.querySelector('.search-container');
    const dropdown = document.getElementById('filterDropdown');
    const btn = document.getElementById('filterToggleBtn');
    
    if (!container) return;
    
    if (dropdown.classList.contains('active') && !container.contains(e.target)) {
        dropdown.classList.remove('active');
        btn.style.transform = 'rotate(0deg)';
        btn.style.boxShadow = '0 4px 10px rgba(255, 71, 87, 0.3)';
    }
});

function toggleFilterDropdown() {
    const dropdown = document.getElementById('filterDropdown');
    dropdown.classList.toggle('active');
    
    const btn = document.getElementById('filterToggleBtn');
    if (dropdown.classList.contains('active')) {
        btn.style.transform = 'rotate(90deg)';
        btn.style.boxShadow = '0 0 25px rgba(255, 71, 87, 0.6)';
    } else {
        btn.style.transform = 'rotate(0deg)';
        btn.style.boxShadow = '0 4px 10px rgba(255, 71, 87, 0.3)';
    }
}

function toggleDropdown(showId) {
    const dropdown = document.getElementById(showId);
    if (!dropdown) return;
    
    const animeId = showId.split('-')[1];
    document.querySelectorAll(`.seasons-dropdown[id*="${animeId}"]`).forEach(el => {
        if(el.id !== showId) el.classList.remove('active');
    });

    dropdown.classList.toggle('active');
    
    const overlay = document.getElementById(`overlay-${animeId}`);
    if (overlay) overlay.classList.toggle('active');
}
function selectSeason(animeId, seasonNum) {
    const seasonDropdown = document.getElementById(`seasons-${animeId}`);
    if(seasonDropdown) seasonDropdown.classList.remove('active');

    const anime = animeData.find(a => a.id === animeId);
    if (!anime) return;
    const links = animeLinks[animeId];
    
    let seasonEpisodes = [];
    if (links && links.episodes && links.episodes[seasonNum]) {
        seasonEpisodes = links.episodes[seasonNum];
    }

    const panel = document.getElementById(`episodes-panel-${animeId}`);
    const header = document.getElementById(`episodes-panel-header-${animeId}`);
    const list = document.getElementById(`episodes-panel-list-${animeId}`);

    if (panel && header && list) {
        header.textContent = `📺 Season ${seasonNum}`;

        list.innerHTML = '';
        if (seasonEpisodes && seasonEpisodes.length > 0) {
            seasonEpisodes.forEach((url, index) => {
                if(url && url.trim() !== '') {
                    const a = document.createElement('a');
                    a.href = url;
                    a.target = '_blank';
                    a.textContent = `🎬 Episode ${index + 1}`;
                    list.appendChild(a);
                }
            });
        } else {
            list.innerHTML = `<div style="color:#94a3b8; text-align:center; padding: 20px;">No episodes available for this season.</div>`;
        }

        panel.style.display = 'flex';
    }

    const overlay = document.getElementById(`overlay-${animeId}`);
    if (overlay) overlay.classList.remove('active');
}
function closeDropdowns(animeId) {
    document.getElementById('episodes-' + animeId)?.classList.remove('active');
    document.getElementById('seasons-' + animeId)?.classList.remove('active');
    document.getElementById('overlay-' + animeId)?.classList.remove('active');
}

function toggleFavorite(animeId, btnElement) {
    let favorites = JSON.parse(localStorage.getItem('animeFavorites')) || [];
    if (favorites.includes(animeId)) {
        favorites = favorites.filter(id => id !== animeId);
        btnElement.innerHTML = '🤍';
        btnElement.classList.remove('active');
    } else {
        favorites.push(animeId);
        btnElement.innerHTML = '❤️';
        btnElement.classList.add('active');
    }
    localStorage.setItem('animeFavorites', JSON.stringify(favorites));
}

function toggleWatchLater(animeId, btnElement) {
    let watchLaterList = JSON.parse(localStorage.getItem('animeWatchLater')) || [];
    if (watchLaterList.includes(animeId)) {
        watchLaterList = watchLaterList.filter(id => id !== animeId);
        btnElement.innerHTML = '📺 Watch Later';
        btnElement.classList.remove('active');
    } else {
        watchLaterList.push(animeId);
        btnElement.innerHTML = '⭐ Watch Later';
        btnElement.classList.add('active');
    }
    localStorage.setItem('animeWatchLater', JSON.stringify(watchLaterList));
}