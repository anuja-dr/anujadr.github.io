/**
 * Research & Computational Projects Data and Dynamic Filter System
 * Anuja Raorane - Institute of Astrophysics, University of Vienna
 */

const researchProjects = [
  {
    id: 'phd-atmospheric-escape',
    title: 'Non-Thermal Escape Processes on Early Earth, Mars, and Venus',
    category: 'escape',
    categoryLabel: 'Atmospheric Escape & Evolution',
    period: '04.2025 – Present',
    institution: 'University of Vienna, Austria',
    supervisor: 'Dr. Kristina Kislyakova',
    description: 'Investigating non-thermal atmospheric escape driven by solar wind and magnetospheric interactions at Earth, Venus, and Mars. These processes play a key role in shaping the long-term evolution and habitability of rocky planets. Combining numerical modeling tools and validating them against observations.',
    tags: ['PhD Thesis', 'Non-Thermal Escape', 'Solar Wind', 'Magnetosphere', 'Venus & Mars', 'Early Earth', 'Numerical Modeling'],
    demoUrl: '#publications',
    githubUrl: 'https://github.com/anuja-dr',
    iconType: 'planet'
  },
  {
    id: 'giant-planet-formation',
    title: 'Giant Planet Formation in the Outer Solar System',
    category: 'formation',
    categoryLabel: 'Planet Formation',
    period: '06.2023 – 08.2024',
    institution: 'CSFK, Budapest, Hungary',
    supervisor: 'Dr. Ramon Brasser',
    description: 'Running N-body simulations based on pebble and planetesimal accretion in the outer solar system gas disk to investigate growth pathways, migration, and timescale constraints for giant planets. Resulted in peer-reviewed publication in Icarus (2024).',
    tags: ['N-body Simulations', 'Pebble Accretion', 'Planetesimals', 'Outer Solar System', 'Gas Disk', 'Icarus 2024'],
    demoUrl: 'https://doi.org/10.1016/j.icarus.2024.116231',
    githubUrl: 'https://github.com/anuja-dr',
    iconType: 'orbit'
  },
  {
    id: 'spectro-polarimetric-earth',
    title: 'Spectro-Polarimetric Data Regeneration for Earth (Chandrayaan-3 SHAPE)',
    category: 'spectroscopy',
    categoryLabel: 'Spectroscopy & Remote Sensing',
    period: '11.2023 – 01.2024',
    institution: 'U.R. Rao Satellite Centre, ISRO, Bangalore, India',
    supervisor: 'Mr. Bhavesh Jaiswal',
    description: 'Using the Planetary Spectrum Generator (NASA PSG) and MODIS Cloud Data Products to reproduce Earth’s spectral and polarization features as observed from the SHAPE (Spectro-polarimetry of HAbitable Planet Earth) payload onboard the Chandrayaan-3 Orbiter.',
    tags: ['Planetary Spectrum Generator', 'NASA PSG', 'MODIS Cloud Data', 'Chandrayaan-3 SHAPE', 'Earth as Exoplanet', 'ISRO'],
    demoUrl: 'https://github.com/anuja-dr',
    githubUrl: 'https://github.com/anuja-dr',
    iconType: 'spectrum'
  },
  {
    id: 'saturn-growth-timescales',
    title: 'Formation of Saturn and Distribution of its Growth Times',
    category: 'formation',
    categoryLabel: 'Planet Formation',
    period: '06.2022 – 04.2023',
    institution: 'IISER Pune, India',
    supervisor: 'Dr. Ramon Brasser, Dr. Shreyas Managave',
    description: 'Running N-body simulations in the outer solar system gas disk and taking a data-based approach from pallasite geochronology to put time constraints on giant planet formation. Awarded the Best Master’s Thesis Award at IISER Pune in Earth & Climate Science.',
    tags: ['Master Thesis', 'Saturn Formation', 'Pallasite Geochronology', 'N-body Simulations', 'Best Thesis Award', 'IISER Pune'],
    demoUrl: '#awards',
    githubUrl: 'https://github.com/anuja-dr',
    iconType: 'planet'
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
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
          <span style="font-family: 'Fira Code', monospace; font-size: 0.8rem; font-weight: 600; color: var(--primary-light);">${project.period}</span>
          <span style="font-size: 0.8rem; color: var(--secondary); font-weight: 600;">${project.institution}</span>
        </div>
        <h3 class="project-title">${project.title}</h3>
        <div style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600; margin-bottom: 0.75rem;">
          Supervisor: <strong style="color: var(--text-primary);">${project.supervisor}</strong>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View code / profiles on GitHub">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
            GitHub
          </a>
          <a href="${project.demoUrl}" ${project.demoUrl.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''} class="project-link" aria-label="View details">
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
