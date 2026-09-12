/**
 * Tushar Solanki Portfolio — script.js
 * Vanilla JavaScript: Theme toggle, animations, typewriter, scroll effects
 */

/* =============================================
   1. PAGE LOADER
   ============================================= */
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
      // Trigger hero animations
      document.querySelectorAll('#hero .fade-in').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 120);
      });
    }, 400);
  }
});

/* =============================================
   2. DARK / LIGHT THEME TOGGLE
   ============================================= */
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Restore saved preference
const savedTheme = localStorage.getItem('ts-portfolio-theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('ts-portfolio-theme', next);
  updateThemeIcon(next);
});

function updateThemeIcon(theme) {
  themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
  themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
}

/* =============================================
   3. NAVBAR: scroll shrink + active link
   ============================================= */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  // Scroll progress bar
  const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  document.getElementById('scroll-progress').style.width = scrolled + '%';

  // Shrink navbar
  navbar.classList.toggle('scrolled', window.scrollY > 50);

  // Back-to-top visibility
  const btt = document.getElementById('back-to-top');
  btt.classList.toggle('visible', window.scrollY > 400);

  // Active nav link
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 90;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

/* =============================================
   4. MOBILE HAMBURGER MENU
   ============================================= */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  mobileNav.classList.toggle('open', isOpen);
});

// Close mobile nav on link click
mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
  });
});

/* =============================================
   5. BACK TO TOP
   ============================================= */
document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =============================================
   6. INTERSECTION OBSERVER — Fade-in on scroll
   ============================================= */
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

// Observe all elements EXCEPT hero (hero is triggered after loader)
document.querySelectorAll('.fade-in').forEach(el => {
  if (!el.closest('#hero')) fadeObserver.observe(el);
});

/* =============================================
   7. TYPEWRITER EFFECT
   ============================================= */
const typedEl = document.getElementById('hero-typed');
const phrases = [
  'Node.js + Express.js Backend Engineer',
  'React.js + TypeScript Frontend Dev',
  'MySQL Optimization Specialist',
  'Full Stack MERN Developer',
  'AI-Assisted Development Enthusiast',
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout;

function typeWriter() {
  const phrase = phrases[phraseIndex];
  if (!isDeleting) {
    typedEl.textContent = phrase.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === phrase.length) {
      isDeleting = true;
      typingTimeout = setTimeout(typeWriter, 2200);
      return;
    }
  } else {
    typedEl.textContent = phrase.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  const speed = isDeleting ? 45 : 80;
  typingTimeout = setTimeout(typeWriter, speed);
}
// Start typewriter after page load
setTimeout(typeWriter, 1000);

/* =============================================
   8. SMOOTH SCROLL for anchor links
   ============================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.offsetTop - 68;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* =============================================
   9. ANIMATED COUNTER for stats
   ============================================= */
function animateCounter(el, target, suffix = '') {
  let current = 0;
  const increment = target / 40;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target + suffix;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current) + suffix;
    }
  }, 35);
}

// Trigger counters when hero stats come into view
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(document.getElementById('stat-years'), 4, '+');
      animateCounter(document.getElementById('stat-skills'), 15, '+');
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

/* =============================================
   10. SKILL TAG — subtle hover sparkle
   ============================================= */
document.querySelectorAll('.skill-tag').forEach(tag => {
  tag.addEventListener('mouseenter', () => {
    tag.style.transform = 'translateY(-2px) scale(1.05)';
  });
  tag.addEventListener('mouseleave', () => {
    tag.style.transform = '';
  });
});

/* =============================================
   11. DYNAMIC COPYRIGHT YEAR
   ============================================= */
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
