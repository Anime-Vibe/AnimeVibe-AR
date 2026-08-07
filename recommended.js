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
        id: 'jjk',
        title: 'Jujutsu Kaisen',
        searchName: 'jujutsu kaisen jjk gojo',
        img: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
        video: [
        { label: 'Trailer', url: 'Video/jjk.1.mp4' },
        { label: 'Trailer', url: 'Video/Jjk.3.mp4' },
        { label: 'حرق', url: 'Video/JJk.2.mp4' },
    ],
        releaseYear: '2020 - Ongoing',
        episodes: '47+ Episodes',
        seasons: '2 Seasons',
        classification: '+20',
        rating: '8.6',
        studio: 'MAPPA',
        genres: ['Action', 'Demons', 'Supernatural'],
        fullStory: [{ type: 'text', content: 'قصة يوجي إيتادوري الذي يبتلع إصبع الملك سوكونا الملعون، وينضم إلى مدرسة جوجوتسو لمحاربة اللعنات.' }]
    },


    
    {
        id: 'aot',
        title: 'Attack on Titan',
        searchName: 'attack on titan aot shingeki',
        img: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
        video: [
        { label: 'Trailer', url: 'Video/Atack.1.mp4' },
        { label: 'حرق', url: 'Video/Atack.2.mp4' },
    ],
        releaseYear: '2013 - 2023',
        episodes: '89 Episodes',
        seasons: '4 Seasons',
        classification: '+18',
        rating: '9.0',
        studio: 'WIT / MAPPA',
        genres: ['Action', 'Mystery', 'Drama'],
        fullStory: [{ type: 'text', content: 'البشرية محصورة خلف جدران ضخمة لحمايتهم من العمالقة، إلى أن يتم كشف الحقيقة المروعة وراء هذه الجدران.' }]
    },


    
    {
        id: 'sl',
        title: 'Solo Leveling',
        searchName: 'solo leveling',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6uv4AS8WafnzkFcEAj743kvU8rGZYYwGQcRFCGDjAfQ&s=10',
         video: [
        { label: 'Trailer', url: 'Video/SSOLO.1.mp4' },
        { label: 'حرق', url: 'Video/SSOLO.2.mp4' },
    ],
        releaseYear: '2024 - Ongoing',
        episodes: '25+ Episodes',
        seasons: '2 Seasons',
        classification: '+12',
        rating: '8.5',
        studio: 'A-1 Pictures',
        genres: ['Action', 'Fantasy'],
        fullStory: [{ type: 'text', content: 'أضعف صياد في العالم يحصل على نظام فريد يسمح له بالارتقاء في المستوى ويصبح الأقوى.' }]
    },



    {
        id: 'dn',
        title: 'Death Note',
        searchName: 'death note',
        img: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
         video: [
        { label: 'Trailer', url: 'Video/Deathnote.1.mp4' },
        { label: 'حرق', url: 'Video/Deathnote.2.mp4' },
    ],
        releaseYear: '2006 - 2007',
        episodes: '37 Episodes',
        seasons: '1 Season',
        rating: '8.6',
        studio: 'Madhouse',
        genres: ['Mystery', 'Psychological', 'Thriller'],
        fullStory: [{ type: 'text', content: 'طالب عبقري يجد دفتر ملاحظات يقتل أي شخص يُكتب اسمه فيه، مما يؤدي إلى معركة ذكاء مع المحقق إل.' }]
    },



    {
        id: 'ds',
        title: 'Demon Slayer',
        searchName: 'demon slayer kimetsu',
        img: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
         video: [
        { label: 'Trailer', url: 'Video/Demon.1.mp4' },
        { label: 'حرق', url: 'Video/Demon.2.mp4' },
    ],
        releaseYear: '2019 - Ongoing',
        episodes: '63+ Episodes',
        seasons: '4 Seasons',
        rating: '8.5',
        studio: 'ufotable',
        genres: ['Action', 'Demons'],
        fullStory: [{ type: 'text', content: 'تانجيرو ينضم إلى فرقة صيادي الشياطين ليعيد أخته نيزوكو التي تحولت إلى شيطان إلى إنسان.' }]
    },



    {
        id: 'haikyuu',
        title: 'Haikyuu!!',
        searchName: 'haikyuu volleyball',
        img: 'https://cdn.myanimelist.net/images/anime/7/76014.jpg',
        video: [
        { label: 'Trailer', url: 'Video/Haikyuu.1.mp4' },
        { label: 'حرق', url: 'Video/Haikyuu.2..mp4' },
    ],
        releaseYear: '2014 - 2020',
        episodes: '85 Episodes',
        seasons: '4 Seasons',
        rating: '8.7',
        studio: 'Production I.G',
        genres: ['Sports', 'Comedy', 'School'],
        fullStory: [{ type: 'text', content: 'هيناتا وكاجيما يقودان فريق كرة الطائرة في مدرسة كاراسونو إلى قمة البطولات الوطنية.' }]
    },
  



    { id: 'csm',
     title: 'Chainsaw Man',
      searchName: 'chainsaw man',
       img: 'https://cdn.myanimelist.net/images/anime/1806/126216.jpg',
       video: [
        { label: 'Trailer', url: 'Video/Chainsaw.1.mp4' },
        { label: 'حرق', url: 'Video/Chainsaw.2.mp4' },
    ],
     releaseYear: '2022',
     episodes: '12 Episodes',
     seasons: '1 Season',
     rating: '8.5',
     studio: 'MAPPA',
     genres: ['Action', 'Demons', 'Gore'],
     fullStory: [{ type: 'text', content: 'دينجي يندمج مع شيطان المنشار الخاص به ليصبح صياد شياطين يعمل لصالح الحكومة.' }]
 },
  


  { id: 'mha',
     title: 'My Hero Academia',
      searchName: 'my hero academia boku no hero',
       img: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
       video: [
        { label: 'Trailer', url: 'Video/My Hero Academia.1.mp4' },
        { label: 'حرق', url: 'Video/My Hero Academia.2.mp4' },
    ],
     releaseYear: '2016 - 2025',
     episodes: '170+ Episodes',
     seasons: '7 Seasons',
     rating: '7.9',
     studio: 'Bones',
     genres: ['Action', 'School', 'Superpowers'],
     fullStory: [{ type: 'text', content: 'إيزوكو ميدوريا يولد بدون قوة خارقة في عالم مليء بالأبطال، لكنه يرث قوة أعظم بطل "أول مايت" ليصبح بطلاً.' }] 
     },


     
    { id: 'bluelock',
     title: 'Blue Lock',
      searchName: 'blue lock',
       img: 'https://cdn.myanimelist.net/images/anime/1258/126929.jpg',
       video: [
        { label: 'Trailer', url: 'Video/Blue Lock.1.mp4' },
        { label: 'حرق', url: 'Video/Blue Lock.2.mp4' },
    ],
    releaseYear: '2022 - Ongoing',
    episodes: '24+ Episodes',
    seasons: '2 Seasons',
    rating: '8.2',
    studio: '8bit',
    genres: ['Sports', 'Thriller'],
    fullStory: [{ type: 'text', content: 'مشروع تدريب سري يهدف إلى صنع مهاجم أناني للغاية ليكون أعظم هداف في تاريخ كرة القدم اليابانية.' }]
    },
  

    { id: 'vinland',
     title: 'Vinland Saga',
      searchName: 'vinland saga',
       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdobuAWCgKQ39LMnsTN11cqtwjmfMdtpiuUE06CPXVJQ&s=10',
        video: [
        { label: 'Trailer', url: 'Video/Vinland Saga.1.mp4' },
        { label: 'حرق', url: 'Video/Vinland Saga.2.mp4' },
    ],
     releaseYear: '2019 - 2023',
     episodes: '48 Episodes',
     seasons: '2 Seasons',
     rating: '8.8',
     studio: 'WIT / MAPPA',
     genres: ['Action', 'Historical', 'Drama'],
     fullStory: [{ type: 'text', content: 'ثورفين، الفايكينج الشاب، يسعى للانتقام لمقتل والده قبل أن يكتشف المعنى الحقيقي للسلام.' }] 
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

function filterCategory(type) {
    document.getElementById('filterDropdown').classList.remove('active');
    const cards = document.querySelectorAll('.anime-card');
    let visibleCount = 0;
    let favorites = JSON.parse(localStorage.getItem('animeFavorites')) || [];
    let watchLaterList = JSON.parse(localStorage.getItem('animeWatchLater')) || [];

    if (type === 'Show All') {
        cards.forEach(card => { card.classList.remove('hidden'); visibleCount++; });
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

renderAnimeCards(animeData);
updateStats();