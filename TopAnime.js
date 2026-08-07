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
        id: 'aot',
        title: 'Attack on Titan',
        searchName: 'attack on titan aot shingeki',
        img: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
        video: 'https://www.youtube.com/embed/MGRm2VdiG48',
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
        id: 'jjk',
        title: 'Jujutsu Kaisen',
        searchName: 'jujutsu kaisen jjk gojo',
        img: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
        video: 'https://www.youtube.com/embed/f7R6A5n_nK8',
        releaseYear: '2020 - Ongoing',
        episodes: '47+ Episodes',
        seasons: '2 Seasons',
        classification: '+20',
        rating: '9.0',
        studio: 'MAPPA',
        genres: ['Action', 'Demons', 'Supernatural'],
        fullStory: [{ type: 'text', content: 'قصة يوجي إيتادوري الذي يبتلع إصبع الملك سوكونا الملعون، وينضم إلى مدرسة جوجوتسو لمحاربة اللعنات.' }]
    },
    { id: 'hxh',
     title: 'Hunter x Hunter',
      searchName: 'hunter x hunter gon',
       img: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg',
       video: 'https://www.youtube.com/embed/7IyS0uEpBKM',
        releaseYear: '2011 - 2014',
         episodes: '148 Episodes',
          seasons: '6 Seasons',
           rating: '9.0',
            studio: 'Madhouse',
             genres: ['Action', 'Adventure', 'Fantasy'],
              fullStory: [{ type: 'text', content: 'جون فريكس يشرع في رحلة صعبة ليصبح صياداً محترفاً ويجد والده المفقود.' }] 
            },

            
    { id: 'fma',
     title: 'Fullmetal Alchemist: Brotherhood',
      searchName: 'fullmetal alchemist brotherhood',
       img: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg',
       video: 'https://www.youtube.com/embed/--3TkX8D4hM',
        releaseYear: '2009 - 2010',
         episodes: '64 Episodes',
          seasons: '1 Season',
           rating: '9.1',
            studio: 'Bones',
             genres: ['Action', 'Adventure', 'Fantasy'],
              fullStory: [{ type: 'text', content: 'الأخوان إلريك يبحثان عن حجر الفيلسوف لاستعادة جسديهما بعد محاولة خيمياء فاشلة.' }]
             },


    {
        id: 'gintama-the-final',
        title: "Gintama: The Final",
        searchName: "gintama the final",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn0OHIzYJNLb74IALhqoL68XVEC8XhLAf8djxxQ9FDyQ&s=10',
        video: 'https://www.youtube.com/embed/A3AJ4d9dfBU',
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
        id: 'a-silent-voice',
        title: "A Silent Voice",
        searchName: "a silent voice koe no katachi",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbB2bmfSLrLMHX3iF4l4413MDvUY6Wd3dxPc4Y2Yc1uA&s=10',
        video: 'https://www.youtube.com/embed/nfK6UgLra7g',
        releaseYear: '2016',
        episodes: 'Movie',
        seasons: '1 Movie',
        classification: '+13',
        rating: '9.02',
        studio: "Kyoto Animation",
        genres: ['Drama', 'Romance', 'Psychological', 'School'],
        fullStory: [{ type: 'text', content: "صبي يتم نبذه بسبب تنمره على زميلة صماء في طفولته. في المدرسة الثانوية، يحاول التكفير عن خطئه وإعادة التواصل معها في رحلة مؤثرة عن الندم والغفران." }]
    },


    { id: 'vinland',
     title: 'Vinland Saga',
      searchName: 'vinland saga',
       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdobuAWCgKQ39LMnsTN11cqtwjmfMdtpiuUE06CPXVJQ&s=10',
       video: 'https://www.youtube.com/embed/f8T3i2E6KJo',
        releaseYear: '2019 - 2023',
         episodes: '48 Episodes',
          seasons: '2 Seasons',
           rating: '8.8',
            studio: 'WIT / MAPPA',
             genres: ['Action', 'Historical', 'Drama'],
              fullStory: [{ type: 'text', content: 'ثورفين، الفايكينج الشاب، يسعى للانتقام لمقتل والده قبل أن يكتشف المعنى الحقيقي للسلام.' }] 
            },



    {
        id: 'haikyuu_final',
        title: 'Haikyuu!! The Dumpster Battle',
        searchName: 'haikyuu final movie',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdNsvEyuFXew4_AzxLAGIlgoOMmEhoKsn9r1q4s6u0kg&s=10',
        video: 'https://www.youtube.com/embed/M6_9Q2g6mM4',
        releaseYear: '2024',
        episodes: 'Movie',
        seasons: 'Movie',
        rating: '8.9',
        studio: 'Production I.G',
        genres: ['Sports', 'Drama'],
        fullStory: [{ type: 'text', content: 'المباراة النهائية بين كاراسونو ونيكوما في البطولة الوطنية للربيع.' }]
    },
    { id: 'silentvoice',
        title: 'A Silent Voice',
        searchName: 'a silent voice koe no katachi',
        img: 'https://cdn.myanimelist.net/images/anime/1122/96435.jpg',
        video: 'https://www.youtube.com/embed/nfK6UgLra7g',
        releaseYear: '2016',
        episodes: 'Movie',
        seasons: 'Movie',
        rating: '8.9',
        studio: 'Kyoto Animation',
        genres: ['Drama', 'School'],
        fullStory: [{ type: 'text', content: 'صبي يتنمر على زميلته الصماء في المدرسة الابتدائية، ثم يحاول لاحقاً التكفير عن أفعاله والتواصل معها.' }] 
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