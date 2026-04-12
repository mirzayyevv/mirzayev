/* ==================== LOADING SCREEN ==================== */
window.addEventListener('load', function () {
    setTimeout(function () {
        var screen = document.getElementById('loadingScreen');
        if (screen) screen.classList.add('hidden');
        startCounters();
        animateSideStats();
        initMap();
    }, 2500);
});

/* ==================== CUSTOM CURSOR ==================== */
var cursorEl = document.getElementById('cursor');
var followerEl = document.getElementById('cursorFollower');

document.addEventListener('mousemove', function (e) {
    if (cursorEl) {
        cursorEl.style.left = (e.clientX - 10) + 'px';
        cursorEl.style.top  = (e.clientY - 10) + 'px';
    }
    if (followerEl) {
        setTimeout(function () {
            followerEl.style.left = (e.clientX - 4) + 'px';
            followerEl.style.top  = (e.clientY - 4) + 'px';
        }, 50);
    }
});

/* ==================== NAVBAR SCROLL ==================== */
var navbar     = document.getElementById('navbar');
var scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', function () {
    if (navbar) {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    if (scrollTopBtn) {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    }
    revealElements();
});

/* ==================== MOBILE MENU ==================== */
function toggleMobileMenu() {
    var menu      = document.getElementById('navMenu');
    var hamburger = document.getElementById('hamburger');
    if (menu)      menu.classList.toggle('show');
    if (hamburger) hamburger.classList.toggle('active');
}

/* ==================== SIDE PANEL ==================== */
function toggleSidePanel() {
    var panel   = document.getElementById('sidePanel');
    var overlay = document.getElementById('sidePanelOverlay');
    if (panel)   panel.classList.toggle('open');
    if (overlay) overlay.classList.toggle('show');
}

function animateSideStats() {
    var targets  = [150, 8, 12, 45];
    var elemIds  = ['sideStat1', 'sideStat2', 'sideStat3', 'sideStat4'];

    elemIds.forEach(function (id, i) {
        var el = document.getElementById(id);
        if (!el) return;
        var current   = 0;
        var increment = targets[i] / 50;
        var timer = setInterval(function () {
            current += increment;
            if (current >= targets[i]) {
                current = targets[i];
                clearInterval(timer);
            }
            el.textContent = Math.floor(current);
        }, 40);
    });
}

/* ==================== COUNTERS ==================== */
function startCounters() {
    var counters = document.querySelectorAll('.count');
    counters.forEach(function (counter) {
        var target    = parseInt(counter.getAttribute('data-target'));
        var increment = target / (2000 / 16);
        var current   = 0;
        var timer = setInterval(function () {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, 16);
    });
}

/* ==================== REVEAL ON SCROLL ==================== */
function revealElements() {
    var reveals = document.querySelectorAll('.reveal');
    reveals.forEach(function (el) {
        var top         = el.getBoundingClientRect().top;
        var windowH     = window.innerHeight;
        if (top < windowH - 130) {
            el.classList.add('revealed');
        }
    });
}
revealElements();

/* ==================== CAMPAIGN ==================== */
function joinCampaign() {
    showToast('Təbriklər! 🎉', 'Kampaniyaya uğurla qoşuldunuz!', 'success');
    createConfetti();
}

function declineCampaign() {
    showToast('Təəssüf 😔', 'Ümid edirik gələcəkdə qoşulacaqsınız.', 'error');
}

/* ==================== GALLERY LIGHTBOX ==================== */
function openLightbox(element) {
    var img        = element.querySelector('img');
    var lightbox   = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightboxImg');
    if (!img || !lightbox || !lightboxImg) return;
    lightboxImg.src = img.src;
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.classList.remove('show');
    document.body.style.overflow = '';
}

/* ==================== COMPLAINT FORM ==================== */
function submitComplaint(e) {
    e.preventDefault();
    showToast('Göndərildi! ✅', 'Şikayətiniz uğurla qeydə alındı.', 'success');
    e.target.reset();

    var list = document.getElementById('complaintList');
    if (!list) return;

    var newItem = document.createElement('div');
    newItem.className = 'complaint-item';
    newItem.setAttribute('data-status', 'reviewing');
    newItem.innerHTML =
        '<div class="complaint-item-header">' +
            '<div class="complaint-item-user">' +
                '<div class="complaint-avatar">SZ</div>' +
                '<div>' +
                    '<div class="complaint-user-name">Yeni Şikayət</div>' +
                    '<div class="complaint-user-date">İndicə</div>' +
                '</div>' +
            '</div>' +
            '<span class="complaint-status status-reviewing">🔍 Baxılır</span>' +
        '</div>' +
        '<p class="complaint-item-text">Şikayətiniz qeydə alındı, komandamız tezliklə baxacaq.</p>';
    list.insertBefore(newItem, list.firstChild);
}

/* ==================== COMPLAINT FILTER ==================== */
function filterComplaints(status, btn) {
    document.querySelectorAll('.filter-btn').forEach(function (b) {
        b.classList.remove('active');
    });
    btn.classList.add('active');

    document.querySelectorAll('.complaint-item').forEach(function (item) {
        if (status === 'all' || item.getAttribute('data-status') === status) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

/* ==================== VOLUNTEER PAGE ==================== */
function openVolunteerPage() {
    var page = document.getElementById('volunteerPage');
    if (page) page.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeVolunteerPage() {
    var page = document.getElementById('volunteerPage');
    if (page) page.classList.remove('show');
    document.body.style.overflow = '';
}

function submitVolunteer(e) {
    e.preventDefault();
    createConfetti();
    setTimeout(function () {
        var modal = document.getElementById('successModal');
        var msg   = document.getElementById('successMessage');
        if (msg) {
            msg.textContent =
                'Könüllü qeydiyyatınız uğurla tamamlandı! ' +
                'Komandamıza xoş gəldiniz! Sizinlə tezliklə əlaqə saxlanılacaq.';
        }
        if (modal) modal.classList.add('show');
    }, 500);
    e.target.reset();
}

function closeSuccessModal() {
    var modal = document.getElementById('successModal');
    if (modal) modal.classList.remove('show');
}

/* ==================== CONFETTI ==================== */
function createConfetti() {
    var container = document.getElementById('confettiContainer');
    if (!container) return;
    var colors = ['#52b788', '#40916c', '#d4a843', '#74c69d',
                  '#e63946', '#6495ED', '#FFD700', '#FF69B4', '#fff'];

    for (var i = 0; i < 110; i++) {
        var piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left              = Math.random() * 100 + '%';
        piece.style.background        = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
        piece.style.animationDelay    = Math.random() * 0.6 + 's';
        piece.style.width             = (Math.random() * 10 + 5) + 'px';
        piece.style.height            = (Math.random() * 15 + 8) + 'px';
        container.appendChild(piece);
    }

    setTimeout(function () {
        container.innerHTML = '';
    }, 4500);
}

/* ==================== TOAST ==================== */
function showToast(title, text, type) {
    var toast    = document.getElementById('toast');
    var toastIcon = document.getElementById('toastIcon');
    var toastTitle = document.getElementById('toastTitle');
    var toastText  = document.getElementById('toastText');

    if (!toast) return;
    if (toastTitle) toastTitle.textContent = title;
    if (toastText)  toastText.textContent  = text;

    if (toastIcon) {
        toastIcon.className = 'toast-icon ' + type;
        toastIcon.innerHTML = type === 'success'
            ? '<i class="fas fa-check"></i>'
            : '<i class="fas fa-times"></i>';
    }

    toast.classList.add('show');
    setTimeout(function () {
        toast.classList.remove('show');
    }, 4000);
}

/* ==================== SMOOTH SCROLL ==================== */
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (href && href !== '#') {
            e.preventDefault();
            var target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            var menu = document.getElementById('navMenu');
            if (menu && menu.classList.contains('show')) {
                toggleMobileMenu();
            }
        }
    });
});

/* ==================== KEYBOARD SHORTCUTS ==================== */
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeLightbox();
        closeVolunteerPage();
        closeSuccessModal();
        var panel = document.getElementById('sidePanel');
        if (panel && panel.classList.contains('open')) {
            toggleSidePanel();
        }
    }
});

/* ==================== LEAFLET MAP ==================== */
function initMap() {

    // Lökbatan mərkəzi koordinatları
    var LOKBATAN_LAT = 40.3180;
    var LOKBATAN_LNG = 49.7230;

    var map = L.map('lokbatanMap', {
        center: [LOKBATAN_LAT, LOKBATAN_LNG],
        zoom: 14,
        zoomControl: true,
        scrollWheelZoom: true
    });

    // Dark tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap © CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // ---- Xüsusi marker ikonları ----
    function makeIcon(color, emoji) {
        return L.divIcon({
            className: '',
            html: '<div style="' +
                'background:' + color + ';' +
                'width:36px;height:36px;' +
                'border-radius:50% 50% 50% 0;' +
                'transform:rotate(-45deg);' +
                'border:3px solid rgba(255,255,255,0.25);' +
                'box-shadow:0 4px 16px rgba(0,0,0,0.45);' +
                'display:flex;align-items:center;justify-content:center;">' +
                '<span style="transform:rotate(45deg);font-size:15px;">' + emoji + '</span>' +
                '</div>',
            iconSize: [36, 36],
            iconAnchor: [18, 36],
            popupAnchor: [0, -38]
        });
    }

    var iconCleaned  = makeIcon('#52b788', '✅');
    var iconProblem  = makeIcon('#e63946', '⚠️');
    var iconAction   = makeIcon('#6495ED', '🤝');
    var iconBin      = makeIcon('#d4a843', '♻️');

    // ---- Marker məlumatları ----
    var markers = [
        // Təmizlənmiş zonalar
        {
            lat: 40.3200, lng: 49.7180,
            icon: iconCleaned,
            title: 'Mərkəzi Park — Təmizləndi',
            desc: 'İməcilik nəticəsində 1.2 ton tullantı toplandı.',
            status: '<span class="popup-status" style="background:rgba(82,183,136,0.15);color:#52b788;">✅ Tamamlandı</span>',
            date: '10 Yanvar 2025'
        },
        {
            lat: 40.3150, lng: 49.7260,
            icon: iconCleaned,
            title: 'Bazar ətrafı — Təmizləndi',
            desc: '50 könüllü iştirak etdi, ərazi tamamilə təmizləndi.',
            status: '<span class="popup-status" style="background:rgba(82,183,136,0.15);color:#52b788;">✅ Tamamlandı</span>',
            date: '15 Yanvar 2025'
        },

        // Problem nöqtələri
        {
            lat: 40.3220, lng: 49.7300,
            icon: iconProblem,
            title: 'Qanunsuz tullantı nöqtəsi',
            desc: 'Sakinlər şikayət bildirdi. Ərazi hələ işlənməyib.',
            status: '<span class="popup-status" style="background:rgba(230,57,70,0.15);color:#e63946;">⚠️ Problem</span>',
            date: 'Aktiv'
        },
        {
            lat: 40.3130, lng: 49.7190,
            icon: iconProblem,
            title: 'Kanalizasiya problemi',
            desc: 'Çirkli su küçəyə axır. Baxış planlanıb.',
            status: '<span class="popup-status" style="background:rgba(230,57,70,0.15);color:#e63946;">⚠️ Problem</span>',
            date: 'Aktiv'
        },
        {
            lat: 40.3240, lng: 49.7160,
            icon: iconProblem,
            title: 'Konteyner yoxdur',
            desc: 'Bu ərazidə heç bir zibil konteyner qoyulmayıb.',
            status: '<span class="popup-status" style="background:rgba(244,162,97,0.15);color:#f4a261;">⏳ Gözlənilir</span>',
            date: 'Aktiv'
        },

        // Aksiya nöqtələri
        {
            lat: 40.3170, lng: 49.7240,
            icon: iconAction,
            title: 'Planlanan İməcilik — Zona A',
            desc: 'Bu həftə Şənbə günü saat 09:00-da aksiya başlayır.',
            status: '<span class="popup-status" style="background:rgba(100,149,237,0.15);color:#6495ED;">📅 Planlı</span>',
            date: '25 Yanvar 2025'
        },
        {
            lat: 40.3195, lng: 49.7210,
            icon: iconAction,
            title: 'Maarifləndirmə Aksiyası',
            desc: 'Sakinlər üçün tullantı ayrışdırma təlimi keçiriləcək.',
            status: '<span class="popup-status" style="background:rgba(100,149,237,0.15);color:#6495ED;">📅 Planlı</span>',
            date: '28 Yanvar 2025'
        },

        // Konteyner nöqtələri
        {
            lat: 40.3160, lng: 49.7220,
            icon: iconBin,
            title: 'Konteyner Nöqtəsi — Sektor 1',
            desc: 'Plastik, kağız, şüşə üçün ayrı konteynerlar mövcuddur.',
            status: '<span class="popup-status" style="background:rgba(212,168,67,0.15);color:#d4a843;">♻️ Aktiv</span>',
            date: 'Daimi'
        },
        {
            lat: 40.3185, lng: 49.7255,
            icon: iconBin,
            title: 'Konteyner Nöqtəsi — Sektor 2',
            desc: 'Ümumi tullantı konteyneri. Həftədə 2 dəfə boşaldılır.',
            status: '<span class="popup-status" style="background:rgba(212,168,67,0.15);color:#d4a843;">♻️ Aktiv</span>',
            date: 'Daimi'
        },
        {
            lat: 40.3210, lng: 49.7195,
            icon: iconBin,
            title: 'Konteyner Nöqtəsi — Sektor 3',
            desc: 'Yeni quraşdırılan konteyner — 20 Yanvar 2025.',
            status: '<span class="popup-status" style="background:rgba(212,168,67,0.15);color:#d4a843;">♻️ Aktiv</span>',
            date: 'Yeni'
        }
    ];

    // Markerları xəritəyə əlavə et
    markers.forEach(function (m) {
        var popupContent =
            '<h4>' + m.title + '</h4>' +
            '<p>' + m.desc + '</p>' +
            '<p style="margin-top:6px;font-size:0.72rem;color:#6c757d;">' +
            '<i class="fas fa-calendar" style="margin-right:4px;"></i>' + m.date + '</p>' +
            m.status;

        L.marker([m.lat, m.lng], { icon: m.icon })
            .addTo(map)
            .bindPopup(popupContent, {
                maxWidth: 260,
                className: 'custom-popup'
            });
    });

    // Lökbatan ərazisi — dairə ilə göstər
    L.circle([LOKBATAN_LAT, LOKBATAN_LNG], {
        radius: 800,
        color: '#52b788',
        fillColor: '#52b788',
        fillOpacity: 0.04,
        weight: 1.5,
        dashArray: '6 4'
    }).addTo(map).bindPopup(
        '<h4>Lökbatan Ərazisi</h4>' +
        '<p>Layihənin əhatə etdiyi əsas zona</p>'
    );
}