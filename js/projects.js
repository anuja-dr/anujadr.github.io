/**
 * Projects Data & Dynamic Filter System
 */

const portfolioProjects = [
  {
    id: 'ai-genomics-explorer',
    title: 'Genomic Variant Analyzer',
    category: 'ai-data',
    categoryLabel: 'AI & Genomics',
    description: 'Interactive deep learning platform for predicting functional variant effects on transcription factor binding and chromatin accessibility.',
    tags: ['Python', 'PyTorch', 'FastAPI', 'React', 'Tailwind'],
    demoUrl: 'https://github.com/anuja-dr',
    githubUrl: 'https://github.com/anuja-dr',
    iconType: 'dna'
  },
  {
    id: 'cloud-scale-dashboard',
    title: 'Cloud Ops & Analytics Hub',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    description: 'High-throughput real-time telemetry dashboard featuring microservices monitoring, event logs streaming, and automated alerting pipelines.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'GraphQL'],
    demoUrl: 'https://github.com/anuja-dr',
    githubUrl: 'https://github.com/anuja-dr',
    iconType: 'dashboard'
  },
  {
    id: 'interactive-data-viz',
    title: 'Multi-Omics Visualizer',
    category: 'frontend',
    categoryLabel: 'Frontend',
    description: 'High-performance interactive 3D protein structure and molecular pathway viewer with WebGL and D3.js data visualizations.',
    tags: ['TypeScript', 'Three.js', 'D3.js', 'WebGL', 'Vite'],
    demoUrl: 'https://github.com/anuja-dr',
    githubUrl: 'https://github.com/anuja-dr',
    iconType: 'chart'
  },
  {
    id: 'devops-ci-cd-platform',
    title: 'AutoDeploy CI/CD Pipeline Engine',
    category: 'devops',
    categoryLabel: 'DevOps & Cloud',
    description: 'Automated GitHub Actions and Kubernetes deployment runner with zero-downtime rollouts and ephemeral preview environments.',
    tags: ['GitHub Actions', 'Kubernetes', 'Terraform', 'Go', 'AWS'],
    demoUrl: 'https://github.com/anuja-dr',
    githubUrl: 'https://github.com/anuja-dr',
    iconType: 'server'
  },
  {
    id: 'nlp-research-assistant',
    title: 'BioMed Literature Search AI',
    category: 'ai-data',
    categoryLabel: 'AI & NLP',
    description: 'RAG-augmented scientific paper search engine querying PubMed and arXiv with semantic embeddings and citation graphs.',
    tags: ['LangChain', 'OpenAI', 'ChromaDB', 'Python', 'Streamlit'],
    demoUrl: 'https://github.com/anuja-dr',
    githubUrl: 'https://github.com/anuja-dr',
    iconType: 'search'
  },
  {
    id: 'design-system-lib',
    title: 'Aurora UI Component Library',
    category: 'frontend',
    categoryLabel: 'Frontend',
    description: 'Accessible, modern, dark-mode ready component library crafted with Tailwind CSS, Radix UI primitives, and Storybook docs.',
    tags: ['React', 'TailwindCSS', 'Storybook', 'TypeScript', 'NPM'],
    demoUrl: 'https://github.com/anuja-dr',
    githubUrl: 'https://github.com/anuja-dr',
    iconType: 'palette'
  }
];

function getProjectIcon(type) {
  const icons = {
    dna: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 15c6.667-6 13.333 0 20-6"/><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"/><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"/><path d="m17 6-2.5-2.5"/><path d="m14 8-1-1"/><path d="m7 18 2.5 2.5"/><path d="m3.5 14.5.5.5"/><path d="m20 9 .5.5"/><path d="m6.5 12.5 1 1"/><path d="m16.5 10.5 1 1"/><path d="m10 16 1 1"/></svg>`,
    dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
    chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
    server: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>`,
    search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`
  };
  return icons[type] || icons.dashboard;
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = portfolioProjects.map(project => `
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
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View source code on GitHub">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
            Code
          </a>
          <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View project demo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" x2="21" y1="14" y2="3"/>
            </svg>
            Demo
          </a>
        </div>
      </div>
    </article>
  `).join('');

  setupProjectFilters();
}

function setupProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
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
