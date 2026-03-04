// Day Tab Switching
document.querySelectorAll('.day-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const day = tab.dataset.day;
        const section = tab.dataset.section;

        // 切換同一區塊的 tab
        document.querySelectorAll(`.day-tab[data-section="${section}"]`).forEach(t => {
            t.classList.remove('active');
        });
        tab.classList.add('active');

        // 切換同一區塊的 content
        document.querySelectorAll(`.day-content[data-section="${section}"]`).forEach(c => {
            c.classList.remove('active');
        });
        document.querySelectorAll(`.day-content[data-day="${day}"][data-section="${section}"]`).forEach(c => {
            c.classList.add('active');
        });
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // 關閉手機選單
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// 金句輪播功能
const quoteCards = document.querySelectorAll('.quote-card');
const quoteDots = document.querySelector('.quote-dots');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentQuote = 0;
let quoteInterval;

// 建立導航圓點
quoteCards.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('quote-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToQuote(index));
    quoteDots.appendChild(dot);
});

function goToQuote(index) {
    // 移除目前的 active
    quoteCards[currentQuote].classList.remove('active');
    document.querySelectorAll('.quote-dot')[currentQuote].classList.remove('active');

    currentQuote = index;

    // 設定新的 active
    quoteCards[currentQuote].classList.add('active');
    document.querySelectorAll('.quote-dot')[currentQuote].classList.add('active');

    // 重新啟動自動輪播
    resetInterval();
}

function nextQuote() {
    const next = (currentQuote + 1) % quoteCards.length;
    goToQuote(next);
}

function prevQuote() {
    const prev = (currentQuote - 1 + quoteCards.length) % quoteCards.length;
    goToQuote(prev);
}

// 按鈕事件
if (nextBtn) nextBtn.addEventListener('click', nextQuote);
if (prevBtn) prevBtn.addEventListener('click', prevQuote);

// 自動輪播（每 5 秒）
function resetInterval() {
    clearInterval(quoteInterval);
    quoteInterval = setInterval(nextQuote, 5000);
}
resetInterval();

// 觸控滑動支援
let touchStartX = 0;
let touchEndX = 0;
const carousel = document.querySelector('.quotes-carousel');

if (carousel) {
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            nextQuote();
        } else {
            prevQuote();
        }
    }
}

// Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 觀察所有卡片元素
document.querySelectorAll(
    '.curriculum-card-simple, .concept-card, .tool-card, .contact-card, .showcase-tool-item'
).forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
    observer.observe(el);
});
