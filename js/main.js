/* ============================================================
   ELECTRICAL APPLIANCE REPAIR SHOP — MAIN JS
   Navbar | Dark Mode | RTL | Scroll Reveal | Counters |
   FAQ | Tabs | Floating CTA | Cookie Banner | Preloader
   ============================================================ */

'use strict';

// ── DOM READY ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initNavbar();
  initTheme();
  initRTL();
  initScrollReveal();
  initFAQ();
  initTabs();
  initCounters();
  initProgressBars();
  initScrollIndicator();
  initFloatingCTA();
  initCookieBanner();
  initMobileNav();
  initPageTransition();
  initSmoothScroll();
});

// ── 1. PRELOADER ──────────────────────────────────────────
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  // Skip the preloader on internal page transitions (only show on first load / refresh)
  if (sessionStorage.getItem('fmSkipPreloader') === '1') {
    sessionStorage.removeItem('fmSkipPreloader');
    preloader.classList.add('hidden');
    return;
  }

  const fill = preloader.querySelector('.preloader-fill');
  // Homepage only: waits for the first hero image to load before finishing
  const heroReady = window.__fmHeroReady;
  let progress = 0;
  let hidden = false;
  let heroDone = false;

  function hidePreloader() {
    if (hidden) return;
    hidden = true;
    clearInterval(interval);
    preloader.classList.add('hidden');
    document.body.style.overflow = '';
  }

  document.body.style.overflow = 'hidden';

  const interval = setInterval(() => {
    // Hold the bar near full until the homepage hero image is ready
    if (heroReady && !heroDone) {
      progress = Math.min(progress + Math.random() * 12, 90);
    } else {
      progress += Math.random() * 20;
      if (progress >= 100) {
        progress = 100;
        setTimeout(hidePreloader, 300);
      }
    }
    if (fill) fill.style.width = progress + '%';
  }, 120);

  // Finish as soon as the homepage hero image is loaded
  if (heroReady) {
    heroReady.then(() => {
      heroDone = true;
      if (fill) fill.style.width = '100%';
      setTimeout(hidePreloader, 250);
    });
  }

  // Safety: never leave the preloader visible too long
  setTimeout(hidePreloader, 3000);

  // Back/forward cache: the page can be restored with the preloader still visible
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      if (fill) fill.style.width = '100%';
      hidePreloader();
    }
  });
}

// ── 2. NAVBAR ─────────────────────────────────────────────
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  let ticking = false;

  function updateNavbar() {
    const scrollY = window.scrollY;

    // Scrolled class
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }, { passive: true });

  // Set active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ── 3. MOBILE NAV ─────────────────────────────────────────
function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const navbar = document.querySelector('.navbar');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('open');
    hamburger.classList.toggle('active', !isOpen);
    mobileNav.classList.toggle('open', !isOpen);
    navbar?.classList.toggle('menu-open', !isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  });

  const closeMenu = () => {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('open');
    navbar?.classList.remove('menu-open');
    document.body.style.overflow = '';
  };

  // Close on link click (including Book Repair CTA button)
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  // Close when the viewport grows back to desktop so the drawer never
  // stays open (and never keeps body scroll locked) after resizing
  const desktopMq = window.matchMedia('(min-width: 1025px)');
  const handleDesktop = (e) => { if (e.matches) closeMenu(); };
  if (typeof desktopMq.addEventListener === 'function') {
    desktopMq.addEventListener('change', handleDesktop);
  } else {
    desktopMq.addListener(handleDesktop);
  }
}

// ── 4. THEME (DARK / LIGHT) ───────────────────────────────
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);

  document.querySelectorAll('.theme-toggle, #themeToggle, .theme-toggle-track').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('theme', next);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  // Update toggle states
  document.querySelectorAll('.theme-toggle-track').forEach(track => {
    track.classList.toggle('dark', theme === 'dark');
  });
  document.querySelectorAll('[data-sun]').forEach(el => {
    el.style.display = theme === 'dark' ? 'none' : 'flex';
  });
  document.querySelectorAll('[data-moon]').forEach(el => {
    el.style.display = theme === 'dark' ? 'flex' : 'none';
  });
}

// ── 5. RTL / LTR ──────────────────────────────────────────
function initRTL() {
  const savedDir = localStorage.getItem('dir') || 'ltr';
  applyDir(savedDir);

  document.querySelectorAll('.rtl-toggle, #rtlToggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('dir') || 'ltr';
      const next = current === 'rtl' ? 'ltr' : 'rtl';
      applyDir(next);
      localStorage.setItem('dir', next);
    });
  });
}

function applyDir(dir) {
  document.documentElement.setAttribute('dir', dir);
  document.querySelectorAll('.rtl-toggle, #rtlToggle').forEach(btn => {
    btn.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
    btn.setAttribute('title', dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL');
  });
}

// ── 6. SCROLL REVEAL ──────────────────────────────────────
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .stagger-children, .anim-grid-item');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed', 'visible');
        // For text highlights
        entry.target.querySelectorAll('.text-highlight').forEach(el => el.classList.add('revealed'));
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// ── 7. FAQ ACCORDION ──────────────────────────────────────
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (!item) return;
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      // Close all in same container
      const container = item.closest('.faq-list, .faq-container, .faq-section');
      if (container) {
        container.querySelectorAll('.faq-item.open').forEach(openItem => {
          if (openItem !== item) {
            openItem.classList.remove('open');
            const a = openItem.querySelector('.faq-answer');
            if (a) a.style.maxHeight = '0';
          }
        });
      }

      // Toggle current
      if (isOpen) {
        item.classList.remove('open');
        if (answer) answer.style.maxHeight = '0';
      } else {
        item.classList.add('open');
        if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

// ── 8. TABS ───────────────────────────────────────────────
function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabContainer => {
    const buttons = tabContainer.querySelectorAll('.tab-btn');
    const panelContainer = tabContainer.closest('.tabs-wrapper') || tabContainer.parentElement;
    const panels = panelContainer ? panelContainer.querySelectorAll('.tab-panel') : [];

    buttons.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        panels.forEach((panel, pIdx) => {
          panel.style.display = pIdx === idx ? 'block' : 'none';
          if (pIdx === idx) {
            panel.style.animation = 'fadeInUp 0.4s ease both';
          }
        });
      });
    });

    // Init first tab
    if (buttons.length > 0) buttons[0].classList.add('active');
    panels.forEach((panel, idx) => {
      panel.style.display = idx === 0 ? 'block' : 'none';
    });
  });
}

// ── 9. COUNTERS ───────────────────────────────────────────
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const decimals = el.getAttribute('data-decimals') ? parseInt(el.getAttribute('data-decimals')) : 0;
        const duration = 2000;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
          const value = eased * target;
          el.textContent = prefix + value.toFixed(decimals) + suffix;
          if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

// ── 10. PROGRESS BARS ─────────────────────────────────────
function initProgressBars() {
  const bars = document.querySelectorAll('.progress-fill[data-width]');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const width = fill.getAttribute('data-width');
        setTimeout(() => { fill.style.width = width; }, 200);
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.5 });

  bars.forEach(bar => observer.observe(bar));
}

// ── 11. SCROLL INDICATOR ──────────────────────────────────
function initScrollIndicator() {
  const indicator = document.querySelector('.scroll-indicator');
  if (!indicator) return;

  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    indicator.style.width = progress + '%';
  }, { passive: true });
}

// ── 12. FLOATING CTA ──────────────────────────────────────
function initFloatingCTA() {
  const scrollTopBtn = document.querySelector('.floating-btn.scroll-top');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Phone pulse
  const phoneBtn = document.querySelector('.floating-btn.phone');
  if (phoneBtn) phoneBtn.classList.add('anim-pulseOrange');
}

// ── 13. COOKIE BANNER ────────────────────────────────────
function initCookieBanner() {
  const banner = document.getElementById('cookieBanner');
  if (!banner) return;

  const accepted = localStorage.getItem('cookiesAccepted');
  if (!accepted) {
    setTimeout(() => banner.classList.add('show'), 1500);
  }

  const acceptBtn = banner.querySelector('.cookie-accept');
  const declineBtn = banner.querySelector('.cookie-decline');

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      banner.classList.remove('show');
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      banner.classList.remove('show');
    });
  }
}

// ── 14. PAGE TRANSITION ───────────────────────────────────
function initPageTransition() {
  const links = document.querySelectorAll('a[href]:not([href^="#"]):not([href^="mailto"]):not([href^="tel"]):not([target])');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('javascript') || href.startsWith('http')) return;

      // Handle same-page anchor links like services.html#booking when already on services.html
      if (href.includes('#')) {
        const [targetPage, targetHash] = href.split('#');
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        if (targetPage === currentPage || (targetPage === '' && targetHash)) {
          const el = document.getElementById(targetHash);
          if (el) {
            e.preventDefault();
            const offset = 80;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
            return;
          }
        }
      }

      e.preventDefault();

      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position:fixed;inset:0;z-index:9999;
        background:linear-gradient(135deg, #1C2B39, #111D27);
        display:flex;align-items:center;justify-content:center;
        opacity:0;transition:opacity 0.3s ease;
      `;
      overlay.innerHTML = `
        <div style="text-align:center">
          <div style="width:56px;height:56px;background:linear-gradient(135deg,#E8A020,#D9580A);border-radius:12px;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;animation:pulse 1s ease-in-out infinite">
            <svg width="30" height="30" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
          <div style="width:150px;height:2px;background:rgba(255,255,255,0.1);border-radius:2px;overflow:hidden;margin:0 auto">
            <div style="height:100%;background:linear-gradient(90deg,#E8A020,#D9580A);border-radius:2px;animation:pageLoad 0.4s ease forwards" id="ptBar"></div>
          </div>
          <div style="margin-top:1rem;color:white;font-family:'Sora',sans-serif;font-size:1.05rem;font-weight:600;letter-spacing:0.02em">FixMaster</div>
        </div>
      `;
      document.body.appendChild(overlay);

      const style = document.createElement('style');
      style.textContent = '@keyframes pageLoad{from{width:0}to{width:100%}}';
      document.head.appendChild(style);

      requestAnimationFrame(() => { overlay.style.opacity = '1'; });

      setTimeout(() => {
        sessionStorage.setItem('fmSkipPreloader', '1');
        window.location.href = href;
      }, 400);

      // Safety: if navigation is blocked and never happens, remove the overlay
      setTimeout(() => {
        if (document.body.contains(overlay)) overlay.remove();
      }, 1500);
    });
  });
}

// ── 15. SMOOTH SCROLL ─────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

// ── 16. GLOBAL HELPERS ────────────────────────────────────
window.AppHelpers = {
  formatPhone: (tel) => `tel:${tel.replace(/\D/g, '')}`,

  showToast: (message, type = 'success') => {
    const toast = document.createElement('div');
    toast.style.cssText = `
      position:fixed;bottom:2rem;left:50%;transform:translateX(-50%) translateY(30px);
      z-index:9999;background:${type === 'success' ? '#10B981' : '#EF4444'};
      color:white;padding:1rem 2rem;border-radius:50px;
      font-weight:600;box-shadow:0 10px 30px rgba(0,0,0,0.2);
      transition:all 0.4s cubic-bezier(0.34,1.56,0.64,1);
      font-family:'DM Sans',sans-serif;font-size:0.95rem;
      display:flex;align-items:center;gap:0.5rem;
    `;
    toast.innerHTML = `
      <svg width="18" height="18" fill="none" stroke="white" stroke-width="2.5" viewBox="0 0 24 24">
        ${type === 'success'
          ? '<polyline points="20 6 9 17 4 12"/>'
          : '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'}
      </svg>
      ${message}
    `;
    document.body.appendChild(toast);
    requestAnimationFrame(() => { toast.style.transform = 'translateX(-50%) translateY(0)'; });
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(30px)';
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  },

  debounce: (fn, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }
};


