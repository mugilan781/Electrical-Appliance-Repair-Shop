/* ============================================================
   ELECTRICAL APPLIANCE REPAIR SHOP — HERO SLIDER
   Auto-play | Touch/Swipe | Keyboard Nav | Progress Bar
   ============================================================ */

'use strict';

class HeroSlider {
  constructor(selector) {
    this.slider = document.querySelector(selector);
    if (!this.slider) return;

    this.slides = Array.from(this.slider.querySelectorAll('.hero-slide'));
    this.dots = Array.from(this.slider.querySelectorAll('.slider-dot'));
    this.prevBtn = this.slider.querySelector('.slider-arrow.prev');
    this.nextBtn = this.slider.querySelector('.slider-arrow.next');
    this.progressBar = this.slider.querySelector('.slider-progress');

    this.current = 0;
    this.total = this.slides.length;
    this.autoPlayDelay = 5500;
    this.autoPlayTimer = null;
    this.progressTimer = null;
    this.progressStart = null;
    this.isPaused = false;

    // Touch state
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchEndX = 0;

    if (this.total < 2) {
      // Single slide - still show it
      if (this.slides[0]) this.slides[0].classList.add('active');
      return;
    }

    this.init();
  }

  init() {
    // Show first slide
    this.goTo(0);

    // Controls
    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());

    // Dots
    this.dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => this.goTo(idx));
    });

    // Touch/Swipe
    this.slider.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
      this.touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    this.slider.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    }, { passive: true });

    // Keyboard
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });

    // Pause on hover
    this.slider.addEventListener('mouseenter', () => { this.isPaused = true; this.pauseAutoPlay(); });
    this.slider.addEventListener('mouseleave', () => { this.isPaused = false; this.startAutoPlay(); });

    // Visibility API
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.pauseAutoPlay();
      } else if (!this.isPaused) {
        this.startAutoPlay();
      }
    });

    this.startAutoPlay();
  }

  goTo(index) {
    const prev = this.current;
    this.slides[prev]?.classList.remove('active');
    this.slides[prev]?.classList.add('prev');

    this.current = (index + this.total) % this.total;

    setTimeout(() => {
      this.slides[prev]?.classList.remove('prev');
    }, 1200);

    this.slides[this.current]?.classList.add('active');

    // Update dots
    this.dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === this.current);
    });

    // Reset progress
    this.resetProgress();
  }

  next() {
    this.goTo(this.current + 1);
    this.restartAutoPlay();
  }

  prev() {
    this.goTo(this.current - 1);
    this.restartAutoPlay();
  }

  handleSwipe() {
    const diff = this.touchStartX - this.touchEndX;
    const minSwipe = 50;
    if (Math.abs(diff) > minSwipe) {
      const dir = document.documentElement.getAttribute('dir') === 'rtl' ? -1 : 1;
      if (diff * dir > 0) {
        this.next();
      } else {
        this.prev();
      }
    }
  }

  startAutoPlay() {
    this.pauseAutoPlay();
    this.autoPlayTimer = setInterval(() => this.next(), this.autoPlayDelay);
    this.startProgress();
  }

  pauseAutoPlay() {
    clearInterval(this.autoPlayTimer);
    clearAnimationFrame(this.progressFrame);
  }

  restartAutoPlay() {
    if (!this.isPaused) this.startAutoPlay();
  }

  startProgress() {
    if (!this.progressBar) return;
    this.progressBar.style.transition = 'none';
    this.progressBar.style.width = '0%';

    // Force reflow
    void this.progressBar.offsetWidth;

    this.progressBar.style.transition = `width ${this.autoPlayDelay}ms linear`;
    this.progressBar.style.width = '100%';
  }

  resetProgress() {
    if (!this.progressBar) return;
    this.progressBar.style.transition = 'none';
    this.progressBar.style.width = '0%';
  }
}

// Polyfill for cancelAnimationFrame used in pauseAutoPlay
function clearAnimationFrame(id) {
  if (id) cancelAnimationFrame(id);
}

// ── INITIALIZE ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  new HeroSlider('.hero-slider');
});
