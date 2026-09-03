/**
 * Portfolio Main App Controller
 */

// 1. Theme Management
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
    });
  }
}

// 2. Mobile Navigation Toggle
function initNavigation() {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const navbar = document.getElementById('navbar');
  const allNavLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
        navLinks.classList.remove('active');
      }
    });

    allNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Navbar scrolled class & scroll progress
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
      progressBar.style.width = scrolled + '%';
    }

    // Back to top button visibility
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
      if (winScroll > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// 3. Scroll Spy for Active Navigation Link
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-30% 0px -70% 0px'
  });

  sections.forEach(sec => observer.observe(sec));
}

// 4. Typewriter Animation for Hero Section
function initTypewriter() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const roles = [
    'Planetary Science',
    'Atmospheric Evolution & Escape',
    'Venus, Mars & Early Earth',
    'Giant Planet Formation',
    'Astrophysics @ Uni Vienna'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 95;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at full word
      typingSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// 5. Publications Filter & BibTeX Copy Interactivity
function initPublications() {
  const filterBtns = document.querySelectorAll('.pub-filter-btn');
  const pubCards = document.querySelectorAll('.publication-card');

  if (filterBtns.length && pubCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-pub-filter');

        pubCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter || card.dataset.categories?.includes(filter)) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  // BibTeX toggle & copy handlers
  const bibtexBtns = document.querySelectorAll('.btn-bibtex');
  bibtexBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.publication-card');
      if (!card) return;

      const bibtexBlock = card.querySelector('.pub-bibtex-block');
      if (bibtexBlock) {
        const isHidden = bibtexBlock.classList.toggle('active');
        btn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
      }
    });
  });

  const copyBibtexBtns = document.querySelectorAll('.btn-copy-bibtex');
  copyBibtexBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const codeElement = btn.parentElement.querySelector('code');
      if (!codeElement) return;

      const bibtexText = codeElement.textContent.trim();
      try {
        await navigator.clipboard.writeText(bibtexText);
        const originalText = btn.innerHTML;
        btn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg> Copied!
        `;
        btn.classList.add('copied');
        
        if (typeof showToast === 'function') {
          showToast('BibTeX citation copied to clipboard!', 'success');
        }

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove('copied');
        }, 2200);
      } catch (err) {
        console.error('Failed to copy BibTeX: ', err);
      }
    });
  });
}

// 6. Conferences & Workshops Filter
function initConferences() {
  const filterBtns = document.querySelectorAll('.conf-filter-btn');
  const confCards = document.querySelectorAll('.conference-card');

  if (filterBtns.length && confCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-conf-filter');

        confCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }
}

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initScrollSpy();
  initTypewriter();
  initPublications();
  initConferences();
});
