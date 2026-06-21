// CAROUSEL YÖNETİMİ
let currentSlideIndex = 1;
let carouselAutoplayInterval;
let touchStartX = 0;
let touchStartY = 0;

function initializeCarousel() {
    showSlide(currentSlideIndex);
    startCarouselAutoplay();
}

function changeSlide(n) {
    clearInterval(carouselAutoplayInterval);
    showSlide(currentSlideIndex += n);
    startCarouselAutoplay();
}

function currentSlide(n) {
    clearInterval(carouselAutoplayInterval);
    showSlide(currentSlideIndex = n);
    startCarouselAutoplay();
}

function loadSlideImage(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (!slides[index]) return;
    const img = slides[index].querySelector('img[data-src]');
    if (img) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    }
}

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');

    if (n > slides.length) {
        currentSlideIndex = 1;
    }
    if (n < 1) {
        currentSlideIndex = slides.length;
    }

    // Aktif slide'ı yükle
    loadSlideImage(currentSlideIndex - 1);
    // Bir sonrakini de önceden hazırla
    const nextIndex = currentSlideIndex >= slides.length ? 0 : currentSlideIndex;
    loadSlideImage(nextIndex);

    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    slides[currentSlideIndex - 1].classList.add('active');
    if (indicators[currentSlideIndex - 1]) {
        indicators[currentSlideIndex - 1].classList.add('active');
    }
}

function startCarouselAutoplay() {
    carouselAutoplayInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

// GALERİ FİLTRELEME (artık kullanılmıyor - kategori kartlarına geçildi)
function initializeGalleryFilters() {
    // Eski filtre sistemi kaldırıldı
}

// GALERİ DETAY SAYFASI - LİGHTBOX
function initializeLightbox() {
    const items = document.querySelectorAll('.detail-item');
    if (!items.length) return;

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    if (!lightbox) return;

    let currentIndex = 0;
    const images = Array.from(items).map(item => ({
        src: item.querySelector('img').src,
        alt: item.querySelector('img').alt
    }));

    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex].src;
        lightboxCaption.textContent = images[currentIndex].alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;
        lightboxCaption.textContent = images[currentIndex].alt;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex].src;
        lightboxCaption.textContent = images[currentIndex].alt;
    }

    items.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) closeLightbox();
    });

    // Lightbox dokunmatik swipe
    let lbTouchX = 0;
    lightbox.addEventListener('touchstart', (e) => {
        lbTouchX = e.changedTouches[0].screenX;
    }, { passive: true });
    lightbox.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].screenX - lbTouchX;
        if (Math.abs(dx) > 40) dx < 0 ? showNext() : showPrev();
    }, { passive: true });

    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'Escape') closeLightbox();
    });
}

// SMOOTH SCROLL
function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// CTA BUTONU
const ctaBtn = document.querySelector('.cta-btn');
if (ctaBtn) {
    ctaBtn.addEventListener('click', function() {
        const contactSection = document.querySelector('#contact');
        const offsetTop = contactSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
}

// SCROLL ANIMASYONLARI
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .gallery-card, .detail-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// SCROLL TO TOP BUTTON
const scrollToTopBtn = document.querySelector('.scroll-to-top');
if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// HAMBURGEr MENÜ
function initializeHamburger() {
    const btn = document.getElementById('hamburgerBtn');
    const menu = document.getElementById('navMenu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        menu.classList.toggle('open');
    });

    // Menü dışına tıklayınca kapat
    document.addEventListener('click', (e) => {
        if (!btn.contains(e.target) && !menu.contains(e.target)) {
            btn.classList.remove('active');
            menu.classList.remove('open');
        }
    });

    // Link tıklanınca kapat
    menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            btn.classList.remove('active');
            menu.classList.remove('open');
        });
    });
}

// Carousel button event listeners
function attachCarouselEventListeners() {
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    const carousel = document.querySelector('.carousel-container');

    if (prevBtn) prevBtn.addEventListener('click', () => changeSlide(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => changeSlide(1));

    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            currentSlide(parseInt(this.dataset.slide));
        });
    });

    // Dokunmatik kaydırma (swipe)
    if (carousel) {
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        carousel.addEventListener('touchend', (e) => {
            const dx = e.changedTouches[0].screenX - touchStartX;
            const dy = e.changedTouches[0].screenY - touchStartY;
            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
                changeSlide(dx < 0 ? 1 : -1);
            }
        }, { passive: true });
    }
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        initializeHamburger();
        initializeGalleryFilters();
        initializeLightbox();
        initializeSmoothScroll();
        initializeCarousel();
        attachCarouselEventListeners();
        initializeContactForm();
    });
} else {
    initializeHamburger();
    initializeGalleryFilters();
    initializeLightbox();
    initializeSmoothScroll();
    initializeCarousel();
    attachCarouselEventListeners();
    initializeContactForm();
}

// AJAX İLETİŞİM FORMU
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const btn = form.querySelector('.submit-btn');
        const msgDiv = document.getElementById('formMessage');

        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';
        msgDiv.className = 'form-message';
        msgDiv.textContent = '';

        try {
            const response = await fetch('https://formspree.io/f/mrewzply', {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                msgDiv.className = 'form-message success';
                msgDiv.textContent = '✓ Mesajınız iletildi! En kısa sürede size dönüş yapacağız.';
                form.reset();
            } else {
                throw new Error('Sunucu hatası');
            }
        } catch {
            msgDiv.className = 'form-message error';
            msgDiv.textContent = '✗ Bir hata oluştu. Lütfen WhatsApp\'tan veya telefonla ulaşın.';
        } finally {
            btn.disabled = false;
            btn.innerHTML = '<i class="fas fa-paper-plane"></i> Gönder';
        }
    });
}
