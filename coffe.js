/* ============================================================
   NƏNƏM-BABAM COFFEE SHOP - JAVASCRIPT
   ============================================================ */

// ==================== MENYU DATA ====================
const menuItems = [
    {
        id: 1,
        name: "Espresso",
        price: 4.50,
        emoji: "☕",
        desc: "Güclü və zəngin ənənəvi espresso. İtalyan üsulu ilə hazırlanır.",
        category: "hot",
        popular: true
    },
    {
        id: 2,
        name: "Latte",
        price: 6.50,
        emoji: "🥛",
        desc: "Yumşaq süd köpüyü ilə harmoniya. Kremli və zərif dad.",
        category: "hot",
        popular: true
    },
    {
        id: 3,
        name: "Cappuccino",
        price: 6.00,
        emoji: "☕",
        desc: "Klassik İtalyan cappuccino. Mükəmməl köpük ilə təqdim edilir.",
        category: "hot",
        popular: false
    },
    {
        id: 4,
        name: "Mocha",
        price: 7.50,
        emoji: "🍫",
        desc: "Şokolad və qəhvənin mükəmməl birləşməsi. Şirin sevənlər üçün.",
        category: "hot",
        popular: true
    },
    {
        id: 5,
        name: "Türk Qəhvəsi",
        price: 3.50,
        emoji: "🫖",
        desc: "Babamızın resepti ilə hazırlanan ənənəvi Türk qəhvəsi.",
        category: "special",
        popular: true
    },
    {
        id: 6,
        name: "Ice Americano",
        price: 5.50,
        emoji: "🧊",
        desc: "Sərin yay günləri üçün buzlu americano. Təravətləndirici.",
        category: "cold",
        popular: false
    },
    {
        id: 7,
        name: "Caramel Frappe",
        price: 8.00,
        emoji: "🍦",
        desc: "Karamel soslu buzlu frappe. Şirniyyat sevənlər üçün ideal.",
        category: "cold",
        popular: true
    },
    {
        id: 8,
        name: "Nənəmin Qəhvəsi",
        price: 5.00,
        emoji: "👵",
        desc: "Nənəmizin xüsusi resepti — süzülmüş qəhvə, ədviyyatlı, unikal.",
        category: "special",
        popular: true
    },
    {
        id: 9,
        name: "Cold Brew",
        price: 7.00,
        emoji: "🥤",
        desc: "12 saat soyuq dəmlənmiş premium qəhvə. Həqiqi dad.",
        category: "cold",
        popular: false
    },
    {
        id: 10,
        name: "Flat White",
        price: 6.50,
        emoji: "🤍",
        desc: "Avstraliya üsulu. İncə süd köpüyü ilə güclü espresso bazası.",
        category: "hot",
        popular: false
    },
    {
        id: 11,
        name: "Macchiato",
        price: 5.00,
        emoji: "🎨",
        desc: "Espresso üzərində bir damla süd köpüyü. Saf qəhvə zövqü.",
        category: "hot",
        popular: false
    },
    {
        id: 12,
        name: "Babamın Xüsusisi",
        price: 9.00,
        emoji: "🧓",
        desc: "Babamızın gizli resepti — ədviyyatlı, güclü, unudulmaz dad.",
        category: "special",
        popular: true
    }
];

// ==================== CART STATE ====================
let cart = [];

// ==================== DOM ELEMENTS ====================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItemsEl = document.getElementById('cartItems');
const cartCountEl = document.getElementById('cartCount');
const cartTotalEl = document.getElementById('cartTotal');
const cartEmptyEl = document.getElementById('cartEmpty');
const checkoutBtn = document.getElementById('checkoutBtn');
const menuGrid = document.getElementById('menuGrid');
const themeToggle = document.getElementById('themeToggle');
const successOverlay = document.getElementById('successOverlay');
const preloader = document.getElementById('preloader');
const cupContainer = document.getElementById('cupContainer');
const coffeeCup = document.getElementById('coffeeCup');


/* ============================================================
   PRELOADER
   ============================================================ */
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1500);
});


/* ============================================================
   PARTICLES BACKGROUND
   ============================================================ */
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedY = -Math.random() * 0.5 - 0.1;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.color = Math.random() > 0.5 ? '212, 168, 83' : '139, 94, 60';
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        if (this.y < -10) {
            this.y = canvas.height + 10;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.fill();
    }
}

// Particle-ləri yarat
for (let i = 0; i < 60; i++) {
    particles.push(new Particle());
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}

animateParticles();


/* ============================================================
   NAVBAR SCROLL EFFECT
   ============================================================ */
window.addEventListener('scroll', () => {
    // Navbar shrink
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Active nav link
    const sections = ['hero', 'menu', 'order', 'register', 'about'];
    let current = '';

    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 200) {
                current = id;
            }
        }
    });

    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + current) {
            a.classList.add('active');
        }
    });

    // Parallax layers
    const scrollY = window.scrollY;
    document.querySelectorAll('.parallax-layer').forEach(layer => {
        const speed = parseFloat(layer.dataset.speed) || 0.05;
        layer.style.transform = `translateY(${scrollY * speed}px)`;
    });

    // Hero parallax
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
});


/* ============================================================
   HAMBURGER MENU
   ============================================================ */
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('show');
    document.body.style.overflow = mobileNav.classList.contains('show') ? 'hidden' : '';
});

function closeMobileNav() {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('show');
    document.body.style.overflow = '';
}

// Global function for onclick
window.closeMobileNav = closeMobileNav;


/* ============================================================
   THEME TOGGLE (DARK / LIGHT MODE)
   ============================================================ */
let isDark = true;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    document.body.classList.toggle('light-mode');
    themeToggle.textContent = isDark ? '🌙' : '☀️';
});


/* ============================================================
   3D COFFEE CUP - MOUSE TRACKING
   ============================================================ */
coffeeCup.addEventListener('mousemove', (e) => {
    const rect = coffeeCup.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    cupContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

coffeeCup.addEventListener('mouseleave', () => {
    cupContainer.style.transform = 'rotateX(0) rotateY(0)';
});


/* ============================================================
   RENDER MENU CARDS
   ============================================================ */
function renderMenu(filter = 'all') {
    const filtered = filter === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === filter);

    menuGrid.innerHTML = '';

    filtered.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = `menu-card reveal reveal-delay-${(index % 6) + 1}`;
        card.dataset.id = item.id;

        card.innerHTML = `
            ${item.popular ? '<div class="card-popular">Populyar</div>' : ''}
            <span class="card-emoji">${item.emoji}</span>
            <div class="card-name">${item.name}</div>
            <div class="card-desc">${item.desc}</div>
            <div class="card-bottom">
                <div class="card-price">${item.price.toFixed(2)} <small>₼</small></div>
                <button class="add-to-cart" onclick="addToCart(${item.id}, this)" title="Səbətə əlavə et">+</button>
            </div>
        `;

        menuGrid.appendChild(card);
    });

    // Yeni kartlar üçün effektləri yenidən başlat
    initReveal();
    initTilt();
}

// Filter düymələri
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderMenu(btn.dataset.filter);
    });
});

// İlk render
renderMenu();


/* ============================================================
   3D TILT EFFECT - MENU CARDS
   ============================================================ */
function initTilt() {
    document.querySelectorAll('.menu-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}


/* ============================================================
   CART FUNCTIONS
   ============================================================ */
function addToCart(id, btn) {
    const item = menuItems.find(i => i.id === id);
    if (!item) return;

    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...item, qty: 1 });
    }

    // Düymə animasiyası
    btn.classList.add('added');
    btn.textContent = '✓';

    setTimeout(() => {
        btn.classList.remove('added');
        btn.textContent = '+';
    }, 800);

    updateCart();
}

// Global function for onclick
window.addToCart = addToCart;

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    updateCart();
}

function changeQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;

    item.qty += delta;

    if (item.qty <= 0) {
        removeFromCart(id);
        return;
    }

    updateCart();
}

// Global function for onclick
window.changeQty = changeQty;

function updateCart() {
    const totalItems = cart.reduce((sum, c) => sum + c.qty, 0);
    const totalPrice = cart.reduce((sum, c) => sum + c.price * c.qty, 0);

    // Sayğac badge
    cartCountEl.textContent = totalItems;
    cartCountEl.classList.toggle('show', totalItems > 0);

    // Ümumi qiymət
    cartTotalEl.textContent = totalPrice.toFixed(2) + ' ₼';

    // Səbət elementləri
    if (cart.length === 0) {
        cartEmptyEl.style.display = 'block';
        const existingItems = cartItemsEl.querySelectorAll('.cart-item');
        existingItems.forEach(el => el.remove());
    } else {
        cartEmptyEl.style.display = 'none';

        // Köhnə elementləri sil
        const existingItems = cartItemsEl.querySelectorAll('.cart-item');
        existingItems.forEach(el => el.remove());

        // Yeni elementlər yarat
        cart.forEach(item => {
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <span class="cart-item-emoji">${item.emoji}</span>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${(item.price * item.qty).toFixed(2)} ₼</div>
                </div>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
                    <span class="qty-num">${item.qty}</span>
                    <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                </div>
            `;
            cartItemsEl.appendChild(div);
        });
    }
}


/* ============================================================
   CART SIDEBAR - OPEN / CLOSE
   ============================================================ */
function openCart() {
    cartSidebar.classList.add('show');
    cartOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('show');
    cartOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);


/* ============================================================
   CHECKOUT
   ============================================================ */
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;

    checkoutBtn.classList.add('success');
    checkoutBtn.textContent = '✓ Sifariş Verildi!';

    setTimeout(() => {
        cart = [];
        updateCart();
        closeCart();
        showSuccess(
            'Sifariş Uğurlu!',
            'Sifarişiniz qəbul edildi. Ən qısa müddətdə hazırlanacaq. Təşəkkür edirik! ☕'
        );
        checkoutBtn.classList.remove('success');
        checkoutBtn.textContent = '🚀 Sifariş Ver';
    }, 1200);
});


/* ============================================================
   REGISTER FORM
   ============================================================ */
document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('regName');
    const email = document.getElementById('regEmail');
    const phone = document.getElementById('regPhone');
    const password = document.getElementById('regPassword');

    let valid = true;

    // Ad validasiyası
    if (name.value.trim().length < 3) {
        name.parentElement.classList.add('error');
        name.parentElement.classList.remove('success');
        valid = false;
    } else {
        name.parentElement.classList.remove('error');
        name.parentElement.classList.add('success');
    }

    // Email validasiyası
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        email.parentElement.classList.add('error');
        email.parentElement.classList.remove('success');
        valid = false;
    } else {
        email.parentElement.classList.remove('error');
        email.parentElement.classList.add('success');
    }

    // Telefon validasiyası
    if (phone.value.trim().length < 10) {
        phone.parentElement.classList.add('error');
        phone.parentElement.classList.remove('success');
        valid = false;
    } else {
        phone.parentElement.classList.remove('error');
        phone.parentElement.classList.add('success');
    }

    // Şifrə validasiyası
    if (password.value.length < 6) {
        password.parentElement.classList.add('error');
        password.parentElement.classList.remove('success');
        valid = false;
    } else {
        password.parentElement.classList.remove('error');
        password.parentElement.classList.add('success');
    }

    if (valid) {
        const btn = e.target.querySelector('.submit-btn');
        btn.classList.add('loading');
        btn.textContent = '⏳ Gözləyin...';

        setTimeout(() => {
            btn.classList.remove('loading');
            btn.classList.add('success-state');
            btn.textContent = '✓ Uğurlu!';

            setTimeout(() => {
                showSuccess(
                    'Qeydiyyat Uğurlu!',
                    `Xoş gəldiniz, ${name.value}! Artıq Nənəm-Babam ailəsinin üzvüsünüz. 🎉`
                );
                e.target.reset();
                document.querySelectorAll('#registerForm .form-group').forEach(g => {
                    g.classList.remove('success', 'error');
                });
                btn.classList.remove('success-state');
                btn.textContent = '✨ Qeydiyyatdan Keç';
            }, 500);
        }, 1500);
    }
});

// Real-time validasiya
document.querySelectorAll('#registerForm input').forEach(input => {
    input.addEventListener('input', () => {
        const group = input.parentElement;
        group.classList.remove('error', 'success');

        if (input.id === 'regName' && input.value.trim().length >= 3) {
            group.classList.add('success');
        }
        if (input.id === 'regEmail' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
            group.classList.add('success');
        }
        if (input.id === 'regPhone' && input.value.trim().length >= 10) {
            group.classList.add('success');
        }
        if (input.id === 'regPassword' && input.value.length >= 6) {
            group.classList.add('success');
        }
    });
});


/* ============================================================
   ORDER FORM
   ============================================================ */
document.getElementById('orderForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('orderName');
    const phone = document.getElementById('orderPhone');
    const address = document.getElementById('orderAddress');

    let valid = true;

    [name, phone, address].forEach(input => {
        if (input.value.trim().length < 2) {
            input.parentElement.classList.add('error');
            valid = false;
        } else {
            input.parentElement.classList.remove('error');
            input.parentElement.classList.add('success');
        }
    });

    if (valid) {
        const btn = e.target.querySelector('.submit-btn');
        btn.classList.add('loading');
        btn.textContent = '⏳ Göndərilir...';

        setTimeout(() => {
            btn.classList.remove('loading');
            showSuccess(
                'Sifariş Göndərildi!',
                `${name.value}, sifarişiniz qəbul edildi! Tezliklə sizinlə əlaqə saxlanılacaq. 📞`
            );
            e.target.reset();
            document.querySelectorAll('#orderForm .form-group').forEach(g => {
                g.classList.remove('success', 'error');
            });
            btn.textContent = '🚀 Sifarişi Təsdiqlə';
        }, 1500);
    }
});


/* ============================================================
   SUCCESS MODAL
   ============================================================ */
function showSuccess(title, msg) {
    document.getElementById('successTitle').textContent = title;
    document.getElementById('successMsg').textContent = msg;
    successOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeSuccess() {
    successOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

// Global function for onclick
window.closeSuccess = closeSuccess;

successOverlay.addEventListener('click', (e) => {
    if (e.target === successOverlay) {
        closeSuccess();
    }
});


/* ============================================================
   SCROLL REVEAL - INTERSECTION OBSERVER
   ============================================================ */
function initReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

initReveal();

// About section xüsusi reveal
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.about-text, .about-visual').forEach(el => {
    aboutObserver.observe(el);
});


/* ============================================================
   COUNTER ANIMATION (ABOUT STATS)
   ============================================================ */
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = counter.dataset.target;

                if (!target || counter.dataset.counted) return;
                counter.dataset.counted = 'true';

                const isFloat = target.includes('.');
                const targetNum = parseFloat(target);
                const duration = 2000;
                const steps = 60;
                const stepTime = duration / steps;
                let current = 0;
                const increment = targetNum / steps;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= targetNum) {
                        current = targetNum;
                        clearInterval(timer);
                    }

                    if (isFloat) {
                        counter.textContent = current.toFixed(1);
                    } else if (targetNum >= 1000) {
                        counter.textContent = Math.floor(current).toLocaleString() + '+';
                    } else {
                        counter.textContent = Math.floor(current) + '+';
                    }
                }, stepTime);
            });
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    counterObserver.observe(aboutStats);
}


/* ============================================================
   SMOOTH SCROLL FOR NAV LINKS
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({
                top: top,
                behavior: 'smooth'
            });
        }
    });
});


/* ============================================================
   KEYBOARD SHORTCUTS
   ============================================================ */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCart();
        closeSuccess();
        closeMobileNav();
    }
});


/* ============================================================
   MICRO INTERACTIONS - BUTTON EFFECTS
   ============================================================ */
document.querySelectorAll('.btn-primary, .btn-secondary, .submit-btn, .checkout-btn').forEach(btn => {
    btn.addEventListener('mousedown', function () {
        this.style.transform = 'scale(0.96)';
    });

    btn.addEventListener('mouseup', function () {
        this.style.transform = '';
    });

    btn.addEventListener('mouseleave', function () {
        this.style.transform = '';
    });
});


/* ============================================================
   CONSOLE BRANDING
   ============================================================ */
console.log(
    '%c☕ Nənəm-Babam Coffee Shop',
    'color: #d4a853; font-size: 24px; font-weight: bold; font-family: cursive;'
);
console.log(
    '%cPremium Coffee Experience - Hər fincan bir sənət əsəridir',
    'color: #8b5e3c; font-size: 14px;'
);
console.log(
    '%cDeveloped with ❤️',
    'color: #e74c3c; font-size: 12px;'
);