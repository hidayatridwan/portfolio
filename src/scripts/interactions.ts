/**
 * Progressive-enhancement interactions for the portfolio.
 * Everything here is optional polish — the page is fully readable without JS.
 */

export function initInteractions(): void {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  initNavScroll();
  initMobileMenu();
  initReveal(reduceMotion);
}

/** Add a solid background to the nav once the page is scrolled. */
function initNavScroll(): void {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const onScroll = () => nav.classList.toggle('solid', window.scrollY > 60);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/** Wire up the hamburger toggle and the full-screen mobile overlay. */
function initMobileMenu(): void {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  const setMenu = (open: boolean) => {
    toggle.classList.toggle('open', open);
    menu.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
}

/** Scroll-reveal elements + animated stat counters. */
function initReveal(reduceMotion: boolean): void {
  const revealEls = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
  const counters = Array.from(document.querySelectorAll<HTMLElement>('.count'));

  // Reduced motion: show everything immediately, skip animation.
  if (reduceMotion) {
    revealEls.forEach((el) => el.classList.add('in'));
    counters.forEach((el) => {
      if (el.dataset.to) el.textContent = el.dataset.to;
    });
    return;
  }

  const reveal = (el: HTMLElement, observer?: IntersectionObserver) => {
    if (el.classList.contains('in')) return;
    const delay = Number(el.dataset.d ?? 0);
    window.setTimeout(() => el.classList.add('in'), delay);
    observer?.unobserve(el);
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) reveal(entry.target as HTMLElement, io);
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
  );
  revealEls.forEach((el) => io.observe(el));

  // Safety net: if the observer is throttled/unsupported, reveal whatever is already on screen.
  const revealInView = () => {
    for (const el of revealEls) {
      if (el.classList.contains('in')) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) reveal(el, io);
    }
  };
  window.addEventListener('scroll', revealInView, { passive: true });

  initCounters(counters);

  // Hero entrance fires promptly on load, even when rAF is throttled.
  document.querySelectorAll<HTMLElement>('.hero .reveal').forEach((el) => {
    const delay = Number(el.dataset.d ?? 0);
    window.setTimeout(() => el.classList.add('in'), delay + 60);
  });

  // Safety sweeps in case the observer never delivers.
  [200, 800, 1600].forEach((delay) => window.setTimeout(revealInView, delay));
}

/** Count each `.count` element up to its `data-to` target when the stats scroll into view. */
function initCounters(counters: HTMLElement[]): void {
  const stats = document.querySelector('.stats');
  if (!stats || counters.length === 0) return;

  let counted = false;
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting || counted) continue;
        counted = true;
        counters.forEach(animateCount);
      }
    },
    { threshold: 0.4 },
  );
  observer.observe(stats);
}

function animateCount(el: HTMLElement): void {
  const target = Number(el.dataset.to ?? 0);
  const duration = 1400;
  let start: number | null = null;

  const step = (timestamp: number) => {
    if (start === null) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = String(Math.round(eased * target));
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
