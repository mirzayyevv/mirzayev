/* ============================
   DATA
   ============================ */
const PASSWORD = "Tontiş";

const DAYS = [
    {
        name: "Bazar ertəsi", date: "1-ci Gün",
        code: "Gözəlim",
        reward: { title: "🎉 Təbriklər, Princessa!", text: "Görüşdüyümüz zaman 5 öpücük və 5 dənə sarılma! 💋🤗", emoji: "💕" },
        letter: {
            greeting: "Canım Mənim 💕",
            body: "Həftənin ilk günüdür və sən artıq başlamısan! Bu əzmkarlığın məni heyran edir. Bilirəm bazar ertəsi çətin gəlir, amma sən bu günün öhdəsindən mütləq gələcəksən. Hər sualı həll edəndə bil ki, mən sənin haqqında düşünürəm və sənə güc göndərirəm!",
            quote: "\"Həftənin ən çətin günü bazar ertəsidir. Amma sən onu fəth etdin — qalan günlər daha asan olacaq!\" 🌅",
            closing: "Bu həftə sənin həftən olacaq! Sevirəm 💖"
        },
        subjects: [
            { name: "Məntiq", type: "mentiq", icon: "🧠", desc: "Qəbul imtahanı hazırlığı", tasks: [
                { text: "Məntiq qəbul suallarından 20 sual həll et", emoji: "📝" },
                { text: "Səhv cavabları analiz edib qeydlər yaz", emoji: "🔍" },
                { text: "Ən çətin 5 sualı yenidən həll et", emoji: "💪" }
            ]},
            { name: "İngilis Dili", type: "english", icon: "🇬🇧", desc: "Listening & Vocabulary", tasks: [
                { text: "15 dəqiqə Listening practice (audio dinlə)", emoji: "🎧" },
                { text: "20 yeni söz öyrən və cümlə qur", emoji: "📖" },
                { text: "Grammar test — 15 sual həll et", emoji: "✍️" }
            ]}
        ]
    },
    {
        name: "Çərşənbə axşamı", date: "2-ci Gün",
        code: "Tontişim",
        reward: { title: "☕ Kafem Hazırdır!", text: "Çay-Kofe date! İstədiyin məkanda, hesab məndən! ☕🧁", emoji: "🥰" },
        letter: {
            greeting: "Gözəl Prensessam 👑",
            body: "İkinci gün və sən hələ də buradasən! Dünən nə qədər gözəl çalışdın, bu gün də eyni gücləsən. İnformatika və İngilis dili — ikisi də sənin üçün problem deyil. Sadəcə bir addım at, qalanı öz-özünə gələcək! Sən mənim ən ağıllı prensessamsan!",
            quote: "\"Dünənki sən bu gün daha güclüsən. Sabahkı sən isə daha da güclü olacaq!\" 🏆",
            closing: "Səninlə qürur duyuram! 💞"
        },
        subjects: [
            { name: "İnformatika", type: "informatika", icon: "💻", desc: "Kompüter elmləri", tasks: [
                { text: "İnformatika nəzəriyyə mövzusunu oxu (30 dəq)", emoji: "📚" },
                { text: "Test sualları həll et — 20 sual", emoji: "📝" },
                { text: "Əvvəlki mövzuları təkrar et", emoji: "🔁" }
            ]},
            { name: "İngilis Dili", type: "english", icon: "🇬🇧", desc: "Reading & Writing", tasks: [
                { text: "Reading comprehension — 1 mətn oxu cavab ver", emoji: "📰" },
                { text: "Essay yaz — minimum 150 söz", emoji: "✏️" },
                { text: "Dünənki 20 sözü təkrar et", emoji: "🔄" }
            ]}
        ]
    },
    {
        name: "Çərşənbə", date: "3-cü Gün",
        code: "Justfriends",
        reward: { title: "🎬 Film Vaxtıdır!", text: "Sinemaya gedirik! İstədiyin filmi seç, popkorn məndən! 🍿🎬", emoji: "🎉" },
        letter: {
            greeting: "Ürəyimin Sahibi 💗",
            body: "Həftənin ortasına çatdın! Bu artıq böyük bir uğurdur. Bilirsənmi, çoxları həftənin ortasında motivasiyasını itirir — amma sən yox! Sən fərqlisən, xüsusisən. Bu gün məntiq və ingilis dili sənə ram olacaq, əminəm! Hər həll etdiyin sual məni bir az daha xoşbəxt edir.",
            quote: "\"Həftənin ortası — zirvənin yarısı. Sən artıq yarı yoldasan, davam et!\" 💪",
            closing: "Dünyalar qədər sevirəm 🌍💕"
        },
        subjects: [
            { name: "Məntiq", type: "mentiq", icon: "🧠", desc: "Analitik düşüncə", tasks: [
                { text: "Rəqəmsal ardıcıllıq sualları (15 sual)", emoji: "🔢" },
                { text: "Fiqurlarla bağlı 10 sual həll et", emoji: "🔷" },
                { text: "Zamanlı test — 20 sual / 30 dəqiqə", emoji: "⏱️" }
            ]},
            { name: "İngilis Dili", type: "english", icon: "🇬🇧", desc: "Speaking & Listening", tasks: [
                { text: "Listening test — 2 audio dinlə, cavab ver", emoji: "🎧" },
                { text: "Speaking — 5 dəqiqə özünü tanıt (güzgü qarşısında)", emoji: "🗣️" },
                { text: "İdioms — 10 dənə öyrən", emoji: "💡" }
            ]}
        ]
    },
    {
        name: "Cümə axşamı", date: "4-cü Gün",
        code: "Mybabe",
        reward: { title: "📖 Masal Gecəsi!", text: "Masal anlatma günü yapıyoruz! Sənin üçün ən gözəl masalı anladacam 🌙✨", emoji: "🧸" },
        letter: {
            greeting: "Mənim Tontişim 🧸",
            body: "4-cü gün! Sən inanılmazsan — bunu bilirsənmi? Hər gün oturub dərs oxuyursan, özünü inkişaf etdirirsən. Mən sənin bu əzmkarlığına aşiqəm. Bu gün informatika və məntiq var — ikisini də parçalayacaqsan, buna əminəm! Sən hər zaman düşündüyündən daha güclüsən.",
            quote: "\"Heç vaxt unutma: bu gün etdiyin fədakarlıqlar sabahkı xoşbəxtliyindir!\" ✨",
            closing: "Sonsuz sevgilərlə 💖"
        },
        subjects: [
            { name: "İnformatika", type: "informatika", icon: "💻", desc: "Alqoritmlər", tasks: [
                { text: "İnformatika — Yeni mövzu öyrən (45 dəq)", emoji: "📚" },
                { text: "Praktiki tapşırıqlar həll et — 10 sual", emoji: "💻" },
                { text: "Qısa xülasə yaz", emoji: "📝" }
            ]},
            { name: "Məntiq", type: "mentiq", icon: "🧠", desc: "Söz məntiqləri", tasks: [
                { text: "Söz anologiyaları — 15 sual həll et", emoji: "🔤" },
                { text: "Məntiqi mühakimə sualları — 10 sual", emoji: "🤔" },
                { text: "Səhv sualları yenidən analiz et", emoji: "📊" }
            ]}
        ]
    },
    {
        name: "Cümə", date: "5-ci Gün",
        code: "Çikolatam",
        reward: { title: "🌳 Gəzinti Vaxtı!", text: "Gəzməyə gedirik! Təbiət, dondurma, söhbət — tam relaks gün! 🌸🍦", emoji: "🦋" },
        letter: {
            greeting: "Dünyamın Ən Gözəli 🌸",
            body: "Cümə günü — həftənin son dərs günlərindən biri! Sən bu həftə inanılmaz iş gördün. Hər oxuduğun səhifə, hər həll etdiyin sual sənin gələcəyini formalaşdırır. Bir az daha dözüm, bir az daha çalışma — və mükafatın sənin olacaq! Fxr edirəm səninlə.",
            quote: "\"İnanmaq, bacarmanın yarısıdır. Qalanını isə əzmkarlıq tamamlayır!\" 🎯",
            closing: "Hər anında seninləyəm 💕"
        },
        subjects: [
            { name: "İngilis Dili", type: "english", icon: "🇬🇧", desc: "Full Practice", tasks: [
                { text: "Mini mock test — Reading + Listening (45 dəq)", emoji: "📋" },
                { text: "Essay yaz — 200 söz minimum", emoji: "✍️" },
                { text: "Bu həftə öyrəndiyin bütün sözləri təkrar et", emoji: "🔁" }
            ]},
            { name: "Məntiq", type: "mentiq", icon: "🧠", desc: "Həftəlik təkrar", tasks: [
                { text: "Qarışıq məntiq testi — 25 sual", emoji: "🎯" },
                { text: "Ən çətin mövzudan 10 əlavə sual", emoji: "🏋️" },
                { text: "Nəticələri qiymətləndir, səhvləri qeyd et", emoji: "📈" }
            ]}
        ]
    },
    {
        name: "Şənbə", date: "6-cı Gün",
        code: "Fındıkburunlum",
        reward: { title: "👑 SƏN SEÇ!", text: "İstədiyin bir şey almaq, getmək, nə istəsən — günü sən idarə edirsən! 💖👑", emoji: "🎁" },
        letter: {
            greeting: "Qəlbimin Sultanı 👑",
            body: "SON GÜN! Sən bu həftəni tamamladın — bu möhtəşəm bir nailiyyətdir! Bütün həftə boyu çalışdın, tər tökdün, bəzən yoruldun — amma heç vaxt dayanmadın. Mən sənin ən böyük fanınam! Bu gün final testlərini parçala və layiq olduğun mükafatı qazan!",
            quote: "\"Finallar ən güclülər üçündür. Sən buradasanmı? BURADASAAN! Çünki sən ən güclüsüsən!\" 🏆",
            closing: "Sonsuza qədər sənin 💖💖"
        },
        subjects: [
            { name: "İnformatika", type: "informatika", icon: "💻", desc: "Həftəlik təkrar", tasks: [
                { text: "Bu həftə öyrəndiyin bütün mövzuları təkrar et", emoji: "📚" },
                { text: "Qarışıq informatika testi — 20 sual", emoji: "📝" },
                { text: "Zəif mövzularını müəyyən et və qeyd yaz", emoji: "📌" }
            ]},
            { name: "Məntiq", type: "mentiq", icon: "🧠", desc: "Final test", tasks: [
                { text: "Həftəlik böyük test — 30 sual / 45 dəqiqə", emoji: "🏆" },
                { text: "Nəticəni analiz et, zəif tərəfləri yaz", emoji: "📊" },
                { text: "Gələn həftə üçün plan qur", emoji: "📅" }
            ]},
            { name: "İngilis Dili", type: "english", icon: "🇬🇧", desc: "Final review", tasks: [
                { text: "Həftəlik bütün vocabulary-ni test et", emoji: "🧪" },
                { text: "1 tam Reading + Writing practice", emoji: "📄" }
            ]}
        ]
    }
];

const BONUS_LETTERS = [
    { greeting: "Sevimli Fındıqburunlum 🥰", body: "Bu gün sənə bir sirr açmaq istəyirəm: Mən sənin gələcəyinə inanıram. Magistraturanı bitirəcəksən, gözəl bir karyera quracaqsan, və biz birlikdə bütün xəyallarımızı gerçəkləşdirəcəyik!", quote: "\"Xəyalların böyüklüyü qədər böyük olacaqsan!\" 🌟", closing: "Əbədi sevginlə 💞" },
    { greeting: "Həyatımın Mənası 💖", body: "1 il sonra harada olmaq istəyirsən? O yerdə olacaqsan, söz verirəm! Çünki sən hər gün bir az daha çalışırsan. Mən bu yolda hər saniyə sənin yanındayam.", quote: "\"Dəniz dalğa-dalğa sahilə çatır. Sənin əzmkarlığın da belədir!\" 🌊", closing: "Bütün sevgimlə 💕" },
    { greeting: "Parlayan Ulduzum ⭐", body: "Sənə hər gün yeni bir məktub yazardım. Çünki hər gün sənin yeni bir gözəlliyini kəşf edirəm. Bu gün o gözəllik — sənin dərslərə olan bağlılığındır!", quote: "\"Min mil yolu bir addımla başlayır. Sən yüzlərlə addım atmısan!\" 👣", closing: "Ulduzum ol həmişə 💫" },
    { greeting: "Çikolatam Mənim 🍫", body: "Dərs oxumaq bəzən acı dərman kimidir. Amma sən o dərmanı içdikdən sonra ən şirin nəticəni alacaqsan. Və mən yanında olacam!", quote: "\"Bu günkü göz yaşların sabahkı gülüşünün toxumlarıdır!\" 😊", closing: "Çox-çox sevirəm 💖" },
    { greeting: "Ruhum, Canım 💝", body: "Mən sənin haqqında düşünəndə ürəyimdə istilik yaranır. O istilik — sənə olan sevgimdir, güvənimdir, inamımdır. Sənin zəkana sonsuza qədər inanıram!", quote: "\"Sən yaradılışından xüsusansan!\" 🦋", closing: "Əbədi sənin 💕💕💕" },
    { greeting: "Dünyanın Ən Şirini 🍯", body: "Hər yorulduğun an düşün ki, mən sənin üçün buradayam. Hər çətinləşən an düşün ki, bu keçəcək. Sən dünyanın ən bacarıqlı insanısan!", quote: "\"Fırtınadan sonra göy qurşağı gəlir!\" 🌈", closing: "Sonsuz sevgi ilə 💗" }
];

const MOTIV_CARDS = [
    { emoji: "🌟", title: "Güc Səndədir!", short: "Sənin içindəki güc hər maneəni aşa bilər...", full: "Sənin içindəki güc, qarşındakı hər maneədən böyükdür!", sub: "Hər böyük uğur kiçik addımlarla başlayır. Davam et, Princessa! 💖", color: "pink" },
    { emoji: "🦋", title: "Dəyişim Gözəldir", short: "Tırtıl da uça bilməyəcəyini düşünürdü...", full: "Tırtıl kəpənək oldu! Sən də bu dərslərlə qanadlanırsan!", sub: "Hər öyrəndiyin yeni şey sənə yeni qanad verir 🌸", color: "blue" },
    { emoji: "🔥", title: "Əzmkarlıq!", short: "Ən güclü polad ən isti odda bərkiyir...", full: "Bu çətin günlər səni ən güclü versiyasına çevirir!", sub: "Yorulanda dayan, amma əsla geri dönmə! 💪", color: "gold" },
    { emoji: "🌈", title: "Sabah Gözəldir", short: "Hər qaranlıq gecənin ardından parlaq səhər...", full: "Bu çətinliklər keçəcək və sən ən gözəl günlərini yaşayacaqsan!", sub: "Gözəl günlər çox yaxındır! ✨", color: "pink" },
    { emoji: "💎", title: "Almaz Ol!", short: "Almaz da kömürdən yaranır...", full: "Almaz təzyiqə tab gətirdi və dəyərli oldu. Sən də o almazsan!", sub: "Parıldayacaqsan! 💖", color: "blue" },
    { emoji: "🚀", title: "Uçuşa Hazırsan!", short: "Raket havaya qalxmadan əvvəl çox yanacaq sərf edir...", full: "Sən indi o mərhələdəsən — az sonra göylərə uçacaqsan!", sub: "Uçuş başlayır! 🌟", color: "gold" }
];

const BANNER_QUOTES = [
    "Sən hər şeyin öhdəsindən gələcəksən, inanıram sənə! 💖",
    "Hər addım sənı hədəfinə yaxınlaşdırır, Princessa! 👑",
    "Magistratura sənin üçün yaradılıb! ✨",
    "Mən hər zaman sənin arxandayam! 💕",
    "Kiçik addımlar böyük nəticələr yaradır! 🌟",
    "Yorulsan dayan, amma əsla geri dönmə! 🔥"
];

/* ============================
   STATE
   ============================ */
let curDay = 0, tasks = {}, curRewardDay = null;

document.addEventListener('DOMContentLoaded', () => {
    load();
    initLogin();
    createHearts();
    createLED();
    createSparkles();
    document.getElementById('motivationText').textContent = BANNER_QUOTES[Math.floor(Math.random() * BANNER_QUOTES.length)];
});

function save() { localStorage.setItem('_tasks', JSON.stringify(tasks)); localStorage.setItem('_day', curDay); }
function load() {
    const t = localStorage.getItem('_tasks'); if (t) tasks = JSON.parse(t);
    const d = localStorage.getItem('_day'); if (d !== null) curDay = parseInt(d);
}
function tk(d,s,t) { return `${d}_${s}_${t}`; }
function isDone(d,s,t) { return tasks[tk(d,s,t)] === true; }
function toggle(d,s,t) { tasks[tk(d,s,t)] = !tasks[tk(d,s,t)]; save(); renderContent(curDay); updateProg(); updateTabs(); }
function dayDone(d) { const day = DAYS[d]; for (let s=0;s<day.subjects.length;s++) for (let t=0;t<day.subjects[s].tasks.length;t++) if (!isDone(d,s,t)) return false; return true; }
function dayProg(d) { const day=DAYS[d]; let tot=0,don=0; for(let s=0;s<day.subjects.length;s++) for(let t=0;t<day.subjects[s].tasks.length;t++){tot++;if(isDone(d,s,t))don++;} return{tot,don}; }
function weekProg() { let t=0,d=0; for(let i=0;i<DAYS.length;i++){const p=dayProg(i);t+=p.tot;d+=p.don;} return t?Math.round(d/t*100):0; }
function streak() { let s=0; for(let i=0;i<DAYS.length;i++){if(dayDone(i))s++;else break;} return s; }

/* ============================
   LOGIN
   ============================ */
function initLogin() {
    document.getElementById('loginBtn').addEventListener('click', tryLogin);
    const inp = document.getElementById('passwordInput');
    inp.addEventListener('keypress', e => { if (e.key==='Enter') tryLogin(); });
    inp.addEventListener('input', () => document.getElementById('loginError').classList.remove('show'));
}
function tryLogin() {
    const inp = document.getElementById('passwordInput'), err = document.getElementById('loginError');
    if (inp.value.trim() === PASSWORD) { loginOk(); } else { err.classList.add('show'); inp.value=''; inp.focus(); }
}
function loginOk() {
    const ls = document.getElementById('loginScreen'), ma = document.getElementById('mainApp');
    ls.style.transition = 'opacity .8s, transform .8s'; ls.style.opacity='0'; ls.style.transform='scale(1.1)';
    setTimeout(() => { ls.style.display='none'; ma.style.display='block'; ma.style.opacity='0'; ma.style.transition='opacity .5s'; setTimeout(()=>ma.style.opacity='1',50); initApp(); confetti(); }, 800);
}

/* ============================
   APP INIT
   ============================ */
function initApp() {
    renderTabs(); renderContent(curDay); updateProg(); renderLetterSection(); renderMotivCards();
    document.getElementById('bannerClose').addEventListener('click', () => { const b=document.getElementById('motivationBanner'); b.style.transition='.4s'; b.style.maxHeight='0'; b.style.padding='0'; b.style.overflow='hidden'; b.style.opacity='0'; setTimeout(()=>b.style.display='none',400); });
    document.getElementById('codeCancelBtn').addEventListener('click', closeCode);
    document.getElementById('codeSubmitBtn').addEventListener('click', checkCode);
    const ci = document.getElementById('rewardCodeInput');
    ci.addEventListener('keypress', e => { if(e.key==='Enter') checkCode(); });
    ci.addEventListener('input', () => document.getElementById('codeError').classList.remove('show'));
    document.getElementById('rewardCloseBtn').addEventListener('click', closeReward);
    // Letter modal
    document.getElementById('letterModalX').addEventListener('click', closeLetterModal);
    document.getElementById('letterEnvelopeWrap').addEventListener('click', revealPaper);
    document.getElementById('paperBtnNew').addEventListener('click', showBonus);
    document.getElementById('paperBtnClose').addEventListener('click', closeLetterModal);
}

/* ============================
   LETTER SECTION (per day)
   ============================ */
function renderLetterSection() {
    const sec = document.getElementById('loveLetterSection');
    const day = DAYS[curDay];
    sec.innerHTML = `
        <div class="letter-section-box">
            <span class="letter-section-icon">💌</span>
            <div class="letter-section-info">
                <h3>${day.name} — Hüseyndən məktubun var!</h3>
                <p><span class="inf">∞</span> sonsuz məktubunuz var ✨</p>
            </div>
            <button class="letter-section-btn" id="openLetterBtn"><i class="fas fa-envelope-open-text"></i> Məktubu Aç</button>
            <div class="letter-section-mini-hearts" id="miniHeartsBox"></div>
        </div>`;
    document.getElementById('openLetterBtn').addEventListener('click', () => openLetterModal(true));
    fillMini('miniHeartsBox');
}

function fillMini(id) {
    const c = document.getElementById(id); if(!c) return;
    const h = ['💕','💖','💗','✨','❤️'];
    for(let i=0;i<10;i++){ const s=document.createElement('span'); s.className='mini-float-heart'; s.textContent=h[Math.floor(Math.random()*h.length)]; s.style.left=Math.random()*100+'%'; s.style.top=Math.random()*100+'%'; s.style.animationDelay=Math.random()*4+'s'; s.style.animationDuration=(Math.random()*3+3)+'s'; s.style.fontSize=(Math.random()*6+10)+'px'; c.appendChild(s); }
}

/* ============================
   LETTER MODAL
   ============================ */
let showingDaily = true;

function openLetterModal(daily) {
    showingDaily = daily;
    const ov = document.getElementById('letterModalOverlay');
    const ew = document.getElementById('letterEnvelopeWrap');
    const pw = document.getElementById('letterPaperWrap');
    ew.style.display='block'; ew.style.opacity='1'; ew.style.transform='scale(1)';
    pw.style.display='none';
    ov.style.display='flex';
    fillModalBg();
}

function closeLetterModal() {
    document.getElementById('letterModalOverlay').style.display='none';
    document.getElementById('letterModalBgHearts').innerHTML='';
}

function revealPaper() {
    const ew = document.getElementById('letterEnvelopeWrap');
    const pw = document.getElementById('letterPaperWrap');
    ew.style.transition='opacity .5s, transform .5s'; ew.style.opacity='0'; ew.style.transform='scale(.8) translateY(-30px)';
    setTimeout(() => {
        ew.style.display='none'; pw.style.display='flex';
        const paper = pw.querySelector('.letter-paper');
        paper.style.animation='none'; paper.offsetHeight; paper.style.animation='paperIn .8s cubic-bezier(.34,1.56,.64,1)';
        if(showingDaily) renderDailyLetter(); else renderBonusLetter();
        confetti();
    }, 500);
}

function showBonus() {
    showingDaily = false;
    const paper = document.querySelector('.letter-paper');
    paper.style.animation='none'; paper.offsetHeight; paper.style.animation='paperIn .8s cubic-bezier(.34,1.56,.64,1)';
    renderBonusLetter();
}

function renderDailyLetter() {
    const L = DAYS[curDay].letter;
    fillPaper(L);
}

function renderBonusLetter() {
    const L = BONUS_LETTERS[Math.floor(Math.random()*BONUS_LETTERS.length)];
    fillPaper(L);
}

function fillPaper(L) {
    document.getElementById('paperBody').innerHTML = `
        <p class="p-greeting">${L.greeting}</p>
        <p class="p-text">${L.body}</p>
        <div class="p-divider">💕 💖 💕 💖 💕</div>
        <div class="p-quote">${L.quote}</div>
        <div class="p-divider">❤️ 💗 ❤️ 💗 ❤️</div>
        <p class="p-text p-closing">${L.closing}</p>`;
}

function fillModalBg() {
    const c = document.getElementById('letterModalBgHearts'); c.innerHTML='';
    const h=['❤️','💖','💕','💗','💝','🌹','✨'];
    for(let i=0;i<25;i++){const s=document.createElement('span');s.className='bg-float-heart';s.textContent=h[Math.floor(Math.random()*h.length)];s.style.left=Math.random()*100+'%';s.style.fontSize=(Math.random()*18+12)+'px';s.style.animationDuration=(Math.random()*12+8)+'s';s.style.animationDelay=Math.random()*5+'s';c.appendChild(s);}
}

/* ============================
   MOTIVATION CARDS
   ============================ */
function renderMotivCards() {
    const g = document.getElementById('motivationCardsGrid'); g.innerHTML='';
    const sh = [...MOTIV_CARDS].sort(()=>Math.random()-.5).slice(0,3);
    sh.forEach(c => {
        const el = document.createElement('div'); el.className=`motivation-card ${c.color}`;
        el.innerHTML=`<span class="mc-emoji">${c.emoji}</span><h4 class="mc-title">${c.title}</h4><p class="mc-text">${c.short}</p><p class="mc-arrow">Oxumaq üçün toxun →</p>`;
        el.addEventListener('click', () => openMotivModal(c));
        g.appendChild(el);
    });
}

function openMotivModal(c) {
    const ov = document.getElementById('motivationModalOverlay');
    document.getElementById('motivationModalContent').innerHTML=`
        <span class="mm-emoji">${c.emoji}</span><h3 class="mm-title">${c.title}</h3>
        <p class="mm-quote">"${c.full}"</p><p class="mm-sub">${c.sub}</p>
        <div class="mm-hearts"><span>💖</span><span>💕</span><span>❤️</span><span>💗</span><span>💖</span></div>`;
    ov.style.display='flex';
    document.getElementById('motivationModalClose').onclick=()=>ov.style.display='none';
    ov.onclick=e=>{if(e.target===ov)ov.style.display='none';};
}

/* ============================
   TABS
   ============================ */
function renderTabs() {
    const c = document.getElementById('daysContainer'); c.innerHTML='';
    DAYS.forEach((d,i) => {
        const t = document.createElement('div');
        t.className=`day-tab ${i===curDay?'active':''} ${dayDone(i)?'completed':''}`;
        t.innerHTML=`<div class="day-name">${d.name}</div><div class="day-date">${d.date}</div><div class="day-status">${dayDone(i)?'⭐':'📝'}</div>`;
        t.addEventListener('click', () => { curDay=i; save(); renderTabs(); renderContent(i); renderLetterSection(); });
        c.appendChild(t);
    });
}
function updateTabs() {
    document.querySelectorAll('.day-tab').forEach((t,i) => {
        t.className=`day-tab ${i===curDay?'active':''} ${dayDone(i)?'completed':''}`;
        t.querySelector('.day-status').textContent=dayDone(i)?'⭐':'📝';
    });
}

/* ============================
   DAY CONTENT
   ============================ */
function renderContent(di) {
    const c = document.getElementById('dayContent'), day=DAYS[di], pr=dayProg(di), done=dayDone(di);
    let shtml='';
    day.subjects.forEach((sub,si) => {
        let thtml='';
        sub.tasks.forEach((task,ti) => {
            const d=isDone(di,si,ti);
            thtml+=`<div class="task-item ${d?'completed':''}" onclick="toggle(${di},${si},${ti})"><div class="task-checkbox"><i class="fas fa-check"></i></div><span class="task-text">${task.text}</span><span class="task-emoji">${task.emoji}</span></div>`;
        });
        shtml+=`<div class="subject-card"><div class="subject-card-header ${sub.type}"><div class="subject-icon">${sub.icon}</div><div class="subject-info"><h3>${sub.name}</h3><p>${sub.desc}</p></div></div><div class="subject-card-body">${thtml}</div></div>`;
    });
    c.innerHTML=`
        <div class="day-header"><h2>✨ ${day.name} ✨</h2><p>${day.date} — Magistratura hazırlığı</p></div>
        <div class="subjects-grid">${shtml}</div>
        <div class="complete-day-section">
            <h3>🎁 Günün Mükafatı</h3>
            <p>${done?'Bütün tapşırıqlar tamam! Mükafatını aç!':'Tapşırıqları tamamla və mükafatını qazan!'}</p>
            <button class="complete-day-btn ${done?'ready':'not-ready'}" id="compBtn" ${done?'':'disabled'}>${done?'<i class="fas fa-gift"></i> Mükafatımı Aç!':'<i class="fas fa-lock"></i> Tapşırıqları bitir'}</button>
            <div class="tasks-progress-info"><span>${pr.don}</span> / <span>${pr.tot}</span> tapşırıq</div>
        </div>`;
    const btn=document.getElementById('compBtn');
    if(btn&&done) btn.addEventListener('click',()=>{curRewardDay=di;openCode();});
}

function updateProg() {
    const p=weekProg();
    const bar=document.getElementById('weeklyProgress'),txt=document.getElementById('progressText'),str=document.getElementById('streakCount');
    if(bar)bar.style.width=p+'%'; if(txt)txt.textContent=p+'%'; if(str)str.textContent=streak();
}

/* ============================
   CODE & REWARD MODALS
   ============================ */
function openCode() { document.getElementById('codeModalOverlay').style.display='flex'; document.getElementById('rewardCodeInput').value=''; document.getElementById('codeError').classList.remove('show'); document.getElementById('rewardCodeInput').focus(); }
function closeCode() { document.getElementById('codeModalOverlay').style.display='none'; curRewardDay=null; }
function checkCode() {
    const v=document.getElementById('rewardCodeInput').value.trim(), d=DAYS[curRewardDay];
    if(v.toLowerCase()===d.code.toLowerCase()){closeCode();openReward(d.reward);}
    else{document.getElementById('codeError').classList.add('show');document.getElementById('rewardCodeInput').value='';document.getElementById('rewardCodeInput').focus();}
}
function openReward(r) {
    const ov=document.getElementById('rewardModalOverlay'),env=document.getElementById('rewardEnvelope');
    document.getElementById('rewardLetterContent').innerHTML=`<h4>${r.title}</h4><p>${r.text}</p><span class="reward-emoji">${r.emoji}</span>`;
    env.classList.remove('opened'); ov.style.display='flex'; startRain();
    setTimeout(()=>env.classList.add('opened'),800); setTimeout(()=>confetti(),1200);
}
function closeReward() { document.getElementById('rewardModalOverlay').style.display='none'; stopRain(); }

function startRain() {
    const c=document.getElementById('rewardHeartsRain'); c.innerHTML='';
    const h=['❤️','💖','💕','💗','💝','🌹','✨','⭐'];
    const iv=setInterval(()=>{
        if(document.getElementById('rewardModalOverlay').style.display==='none'){clearInterval(iv);return;}
        for(let i=0;i<3;i++){const s=document.createElement('span');s.className='rain-heart';s.textContent=h[Math.floor(Math.random()*h.length)];s.style.left=Math.random()*100+'%';s.style.fontSize=(Math.random()*18+14)+'px';s.style.animationDuration=(Math.random()*3+2)+'s';c.appendChild(s);setTimeout(()=>s.remove(),5000);}
    },300);
    c.dataset.iv=iv;
}
function stopRain() { const c=document.getElementById('rewardHeartsRain'); if(c.dataset.iv)clearInterval(parseInt(c.dataset.iv)); c.innerHTML=''; }

/* ============================
   EFFECTS
   ============================ */
function createHearts() {
    const c=document.getElementById('floatingHearts'), h=['💕','💖','💗','✨','⭐','🌸','💝'];
    for(let i=0;i<18;i++){const s=document.createElement('span');s.className='floating-heart';s.textContent=h[Math.floor(Math.random()*h.length)];s.style.left=Math.random()*100+'%';s.style.fontSize=(Math.random()*14+10)+'px';s.style.animationDuration=(Math.random()*15+10)+'s';s.style.animationDelay=Math.random()*10+'s';c.appendChild(s);}
}
function createLED() {
    const c=document.getElementById('ledString'),colors=['#FF69B4','#FFD700','#64B5F6','#FF1493','#FFA500','#E91E63','#42A5F5','#FF85A2'];
    const w=document.createElement('div');w.className='led-wire';c.appendChild(w);
    const n=Math.floor(window.innerWidth/40);
    for(let i=0;i<n;i++){const b=document.createElement('div');b.className='led-bulb';const cl=colors[i%colors.length];b.style.color=cl;b.style.backgroundColor=cl;b.style.animationDelay=Math.random()*2+'s';c.appendChild(b);}
}
function createSparkles() {
    const c=document.getElementById('loginSparkles');
    for(let i=0;i<50;i++){const s=document.createElement('div');s.className='sparkle';s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';s.style.animationDelay=Math.random()*3+'s';s.style.animationDuration=(Math.random()*3+2)+'s';const sz=(Math.random()*4+2)+'px';s.style.width=sz;s.style.height=sz;c.appendChild(s);}
}
function confetti() {
    const colors=['#FF69B4','#FFD700','#64B5F6','#FF1493','#FFA500','#E91E63','#42A5F5','#C2185B','#DAA520'];
    for(let i=0;i<70;i++){setTimeout(()=>{const c=document.createElement('div');c.className='confetti-piece';c.style.left=Math.random()*100+'%';c.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];c.style.borderRadius=Math.random()>.5?'50%':'2px';c.style.width=(Math.random()*8+5)+'px';c.style.height=(Math.random()*8+5)+'px';c.style.animationDuration=(Math.random()*3+2)+'s';document.body.appendChild(c);setTimeout(()=>c.remove(),5000);},i*30);}
}

window.addEventListener('resize',()=>{const c=document.getElementById('ledString');if(c&&document.getElementById('mainApp').style.display!=='none'){c.innerHTML='';createLED();}});