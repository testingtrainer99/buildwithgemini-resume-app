<div align="center">

# 📄 Crisp & Interactive Resume Web App

### A modern, interactive, and responsive web application designed for showcasing and exporting professional resumes, optimized for **GitHub Pages** hosting.

<br />

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.style=for-the-badge)

<br />

[✨ Live Features](#-key-features) • [🚀 Deploy to GitHub Pages](#-github-pages-deployment-guide) • [🛠️ Local Setup](#%EF%B8%8F-local-development) • [📂 Project Structure](#-project-structure)

</div>

---

## ✨ Key Features

- 🎨 **Sleek Modern Aesthetics**: Clean glassmorphic design system using CSS variables, custom Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono*), and responsive breakpoints.
- 🌙 **Light / Dark Mode**: Smooth one-click theme switcher with persistent user preference stored in `localStorage`.
- ✏️ **Live Interactive Editor**: Modal dialog allowing real-time edits to name, title, contact information, and executive summary with instant UI updates.
- 📂 **JSON Import / Export**:
  - Export your complete resume data into a structured `.json` document.
  - Import any formatted resume JSON file to update the site instantly.
- 🖨️ **Pixel-Perfect Print & PDF Export**: Dedicated `@media print` styles format the layout for A4/Letter paper when using standard browser `Print / Save as PDF` (hides action bars, navigation, and dark themes for crisp paper output).
- ⚡ **Zero External Dependencies**: Pure vanilla HTML5, CSS3, and JavaScript — lightning fast load times with zero build steps required.

---

## 🚀 GitHub Pages Deployment Guide

This project is pre-configured for instant hosting on **GitHub Pages**.

### Option A: Automated via GitHub Actions (Recommended)

1. Push your repository to GitHub.
2. In your repository on GitHub, go to **Settings** ➔ **Pages**.
3. Under **Build and deployment** ➔ **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site on push to `main`.

### Option B: Deploy from Branch (`main` / `/docs`)

1. Copy the files (`index.html`, `styles.css`, `app.js`, `resume-data.js`) to your branch root `/` or `/docs` directory.
2. Go to **Settings** ➔ **Pages** in your GitHub repository.
3. Under **Source**, choose **Deploy from a branch**.
4. Select `main` branch and `/ (root)` folder, then click **Save**.
5. Your live resume will be accessible at `https://<your-username>.github.io/<repo-name>/` in 1–2 minutes!

---

## 🛠️ Local Development

You can run the web app locally without installing any heavy tools. Simply open `index.html` in any modern web browser, or launch a lightweight local server:

### Using Python
```bash
python3 -m http.server 8080
```
Then navigate to `http://localhost:8080`.

### Using Node.js / npx
```bash
npx serve .
```

---

## 📁 Project Structure

```text
resume-app/
├── index.html                  # Semantic HTML5 layout & modal structure
├── styles.css                  # Theme system, custom typography & @media print styles
├── app.js                      # DOM rendering, theme toggle, modal editing & JSON logic
├── resume-data.js              # Default structured resume dataset
├── README.md                   # Project documentation & deployment guide
└── .github/
    └── workflows/
        └── deploy.yml          # GitHub Actions deployment workflow for GitHub Pages
```

---

## 📝 Customizing Your Data

To customize the default resume content permanently:
1. Open [`resume-data.js`](file:///config/Desktop/Session1/resume-app/resume-data.js).
2. Edit the fields in `defaultResumeData` (Profile, Highlights, Experience, Projects, Skills, Education, Certifications).
3. Save the file and refresh your browser.

Alternatively, use the **Import** button on the live web app to load your custom JSON file at any time!

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
