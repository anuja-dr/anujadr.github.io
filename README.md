# Anuja Rao Rane - Personal Portfolio Website

[![Deploy Portfolio to GitHub Pages](https://github.com/anuja-dr/anujadr.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/anuja-dr/anujadr.github.io/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live-Site-6366f1?style=flat&logo=google-chrome&logoColor=white)](https://anuja-dr.github.io)

A modern, fast, responsive personal portfolio website built with semantic HTML5, modern CSS3 (custom properties, glassmorphism, responsive grid), and modular JavaScript. Automated with GitHub Actions for zero-config CI/CD continuous deployment to GitHub Pages.

---

## 🌟 Features

- **🎨 Modern Dark & Light Mode**: Seamless theme toggler with persistent `localStorage` memory and OS system preference sync (`prefers-color-scheme`).
- **📱 Fully Responsive**: Pixel-perfect layouts optimized for mobile, tablet, laptop, and ultra-wide screens.
- **⚡ Dynamic Project Showcase**: Interactive category filters with smooth animations and direct links to live demos and GitHub repositories.
- **📈 Animated Counters & Micro-Interactions**: Smooth scroll spy, floating glow aesthetics, dynamic typewriter text, and animated metrics.
- **📬 Interactive Contact Hub**: Direct copy-to-clipboard email action, interactive form validation with toast notifications, and client-side feedback.
- **🚀 Automated GitHub Actions CI/CD**: Automatic deployment to GitHub Pages whenever changes are pushed to `main`.

---

## 📁 Repository Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions automated workflow for GitHub Pages
├── assets/
│   └── favicon.svg         # Modern vector brand favicon
├── css/
│   ├── style.css           # Layout, component styling, animations & media queries
│   └── themes.css          # Design tokens & dark/light theme definitions
├── js/
│   ├── app.js              # Theme switcher, scroll spy, typewriter, counters
│   ├── contact.js          # Contact form, toast system & clipboard interaction
│   └── projects.js         # Projects data store & dynamic filtering logic
├── .gitignore              # Git ignore rules
├── index.html              # Main semantic HTML5 structure & SEO meta tags
└── README.md               # Project documentation
```

---

## 🚀 Local Development

To run and preview the portfolio locally:

### Option 1: Using Python's built-in HTTP server
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option 2: Using Node.js / npx
```bash
npx serve .
```

### Option 3: VS Code Live Server
Right-click `index.html` in VS Code and select **"Open with Live Server"**.

---

## ⚙️ GitHub Pages Deployment Setup

This repository is pre-configured with a GitHub Actions workflow (`.github/workflows/deploy.yml`).

To enable GitHub Pages in your GitHub repository:
1. Go to your repository **Settings** on GitHub (`https://github.com/anuja-dr/anujadr.github.io/settings`).
2. Navigate to **Pages** in the left sidebar (under "Code and automation").
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. Every push to the `main` branch will automatically trigger the workflow and publish the site to `https://anuja-dr.github.io`.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
