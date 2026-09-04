# Anuja Raorane - Academic & Research Website

[![Deploy Portfolio to GitHub Pages](https://github.com/anuja-dr/anujadr.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/anuja-dr/anujadr.github.io/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live-Site-6366f1?style=flat&logo=google-chrome&logoColor=white)](https://anuja-dr.github.io)

Personal academic and research portfolio of **Anuja Raorane**, PhD Student in Astrophysics at the **University of Vienna** (supervised by Dr. Kristina Kislyakova), focusing on **non-thermal atmospheric escape on Venus, Mars, and early Earth**, and **giant planet formation**.

---

## 🌟 Features

- **🪐 Planetary Science & Atmospheric Escape Showcase**: Research overview on non-thermal atmospheric loss at Venus, Mars, and early Earth, N-body accretion simulations, and Earth spectropolarimetry (ISRO Chandrayaan-3 SHAPE).
- **📚 Interactive Publications & Theses Hub**: Features peer-reviewed research published in *Icarus* (2024), Master's Thesis, DOI/ADS links, and one-click BibTeX citation copying.
- **🎤 Conferences, Workshops & Invited Talks**: Archive of presentations across EGU 2026, Space Weather Workshop Graz, Exploring Exoplanets School Bangalore, EPSC-DPS 2025, NISER, and IISER Pune.
- **🎨 Modern Dark & Light Mode**: Seamless theme toggler with persistent `localStorage` memory and OS system preference sync (`prefers-color-scheme`).
- **📱 Fully Responsive**: Pixel-perfect layout optimized for mobile, tablet, laptop, and desktop displays.
- **📬 Contact Hub**: Direct copy-to-clipboard email action, LinkedIn, GitHub, academic profile links (NASA ADS, Google Scholar, ORCID), and contact form.
- **🚀 Automated GitHub Actions CI/CD**: Automatic deployment to GitHub Pages on every push to `main`.

---

## 📁 Repository Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions automated workflow for GitHub Pages
├── assets/
│   └── favicon.svg         # Vector brand favicon
├── css/
│   ├── style.css           # Layout, academic components, publications & animations
│   └── themes.css          # Design tokens & dark/light theme definitions
├── js/
│   ├── app.js              # Theme switcher, scroll spy, typewriter, publications & conference filters
│   ├── contact.js          # Contact form, toast system & clipboard interaction
│   └── projects.js         # Research projects data store & dynamic filtering logic
├── .gitignore              # Git ignore rules
├── index.html              # Main semantic HTML5 structure & SEO meta tags
└── README.md               # Project documentation
```

---

## 🚀 Local Development

To run and preview the site locally:

### Option 1: Using Python's built-in HTTP server
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option 2: Using Node.js / npx
```bash
npx serve .
```

---

## ⚙️ GitHub Pages Deployment Setup

This repository is pre-configured with a GitHub Actions workflow (`.github/workflows/deploy.yml`).

Every push to the `main` branch automatically triggers the workflow and publishes the site to `https://anuja-dr.github.io`.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
