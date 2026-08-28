/**
 * Research & Computational Projects Data and Dynamic Filter System
 * Anuja Raorane - Institute of Astrophysics, University of Vienna
 */

const researchProjects = [
  {
    id: 'habitability-climate-model',
    title: 'Exoplanetary Climate & Habitability Modeling',
    category: 'climate',
    categoryLabel: 'Habitability & Climate',
    description: 'Investigating atmospheric circulation and surface temperature regimes on terrestrial exoplanets orbiting M-dwarf and solar-type stars using 3D Global Climate Models (GCMs).',
    tags: ['Python', 'Fortran', '3D GCM', 'Radiative Transfer', 'Habitable Zone'],
    demoUrl: 'https://github.com/anuja-dr',
    githubUrl: 'https://github.com/anuja-dr',
    iconType: 'planet'
  },
  {
    id: 'transmission-spectroscopy',
    title: 'Atmospheric Transmission Spectroscopy Retrieval',
    category: 'atmosphere',
    categoryLabel: 'Atmospheres & Spectra',
    description: 'Forward modeling and Bayesian atmospheric retrieval pipelines for detecting water vapor, carbon dioxide, methane, and potential biosignatures in exoplanet spectra (JWST / Ariel).',
    tags: ['Python', 'PyTorch', 'Bayesian MCMC', 'JWST Data', 'Spectroscopy'],
    demoUrl: 'https://github.com/anuja-dr',
    githubUrl: 'https://github.com/anuja-dr',
    iconType: 'spectrum'
  },
  {
    id: 'stellar-radiation-escape',
    title: 'Stellar Wind & UV Atmospheric Escape Simulation',
    category: 'stellar',
    categoryLabel: 'Stellar Interactions',
    description: 'Simulating hydrodynamic atmospheric escape driven by stellar XUV irradiation and coronal mass ejections (CMEs) to constrain the atmospheric lifetime of close-in habitable zone planets.',
    tags: ['Hydrodynamics', 'Stellar Flares', 'XUV Radiation', 'Atmospheric Loss'],
    demoUrl: 'https://github.com/anuja-dr',
    githubUrl: 'https://github.com/anuja-dr',
    iconType: 'star'
  },
  {
    id: 'habitable-zone-calculator',
    title: 'Multi-Parameter Habitable Zone Dynamics Suite',
    category: 'climate',
    categoryLabel: 'Habitability & Climate',
    description: 'Interactive computational toolkit for calculating conservative and optimistic habitable zone boundaries considering stellar spectral type, planetary mass, albedo, and cloud feedback.',
    tags: ['Python', 'NumPy', 'Matplotlib', 'Interactive Viz', 'Open Source'],
    demoUrl: 'https://github.com/anuja-dr',
    githubUrl: 'https://github.com/anuja-dr',
    iconType: 'orbit'
  },
  {
    id: 'astro-data-pipeline',
    title: 'Spectrophotometric Data Reduction Pipeline',
    category: 'tools',
    categoryLabel: 'Pipelines & Tools',
    description: 'Automated data reduction and detrending suite for processing ground-based and space-based exoplanet transit light curves with Gaussian processes and systematic error modeling.',
    tags: ['Python', 'Astropy', 'Gaussian Processes', 'Light Curves', 'Data Pipeline'],
    demoUrl: 'https://github.com/anuja-dr',
    githubUrl: 'https://github.com/anuja-dr',
    iconType: 'chart'
  },
  {
    id: 'biosignature-detectability',
    title: 'Atmospheric Photochemistry & Biosignature Simulator',
    category: 'atmosphere',
    categoryLabel: 'Atmospheres & Spectra',
    description: '1D photochemical kinetics modeling of non-equilibrium chemical species (O3, CH4, N2O) in oxygenated and anoxic terrestrial exoplanet atmospheres.',
    tags: ['Photochemistry', 'Chemical Kinetics', 'Biosignatures', 'Exo-Earths'],
    demoUrl: 'https://github.com/anuja-dr',
    githubUrl: 'https://github.com/anuja-dr',
    iconType: 'dna'
  }
];

function getProjectIcon(type) {
  const icons = {
    planet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7"/><path d="M2.5 14.5c4-2 15-7 19 0"/><path d="M4 17c3.5-1.5 12-5.5 16 0"/></svg>`,
    spectrum: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h2.5l2.5-6 3.5 12 3.5-9 2.5 5 2.5-2H22"/></svg>`,
    star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    orbit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"/></svg>`,
    chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
    dna: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 15c6.667-6 13.333 0 20-6"/><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"/><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"/><path d="m17 6-2.5-2.5"/><path d="m14 8-1-1"/><path d="m7 18 2.5 2.5"/><path d="m3.5 14.5.5.5"/><path d="m20 9 .5.5"/><path d="m6.5 12.5 1 1"/><path d="m16.5 10.5 1 1"/><path d="m10 16 1 1"/></svg>`
  };
  return icons[type] || icons.planet;
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = researchProjects.map(project => `
    <article class="project-card" data-category="${project.category}">
      <div class="project-banner">
        <span class="project-category-tag">${project.categoryLabel}</span>
        ${getProjectIcon(project.iconType)}
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View code on GitHub">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
            GitHub
          </a>
          <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View project details">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            Details
          </a>
        </div>
      </div>
    </article>
  `).join('');

  setupProjectFilters();
}

function setupProjectFilters() {
  const filterButtons = document.querySelectorAll('.research-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
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

// Initialise when DOM is ready
document.addEventListener('DOMContentLoaded', renderProjects);
