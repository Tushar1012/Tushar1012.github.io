# Tushar Solanki — Portfolio Website

> **Live:** [https://tushar1012.github.io](https://tushar1012.github.io)

A lightweight, fully responsive personal portfolio website built with **pure HTML5, CSS3, and Vanilla JavaScript** — zero dependencies, zero build steps, GitHub Pages ready.

---

## 🚀 Features
- 🌙 / ☀️ **Dark / Light theme toggle** with localStorage persistence
- ⌨️ **Typewriter animation** cycling through your tech roles
- 🎯 **Smooth scroll** with active nav link highlighting
- 📱 **Mobile-responsive** — hamburger menu for small screens
- ✨ **Entrance animations** via Intersection Observer API
- 🔢 **Animated counters** for key stats
- 📧 **mailto: contact** — no backend needed
- 🔍 **SEO + Open Graph** meta tags for LinkedIn/social preview

---

## 📁 File Structure

```
portfolio/
├── index.html                                        ← Main page (all sections)
├── style.css                                         ← Design system with dark/light CSS variables
├── script.js                                         ← All interactivity
├── ts_image.jpg                                      ← Profile photo
├── Tushar_Solanki_Full_Stack_Developer_Resume.pdf    ← Downloadable CV (professional naming)
├── resume.pdf                                        ← Backup CV link
└── README.md                                         ← This file
```

---

## 🛠 How to Deploy on GitHub Pages

1. **Create a new GitHub repository** (e.g. `portfolio` or your-username.github.io)
2. **Upload these files** (push or drag & drop via GitHub UI):
   - `index.html`
   - `style.css`
   - `script.js`
   - `ts_image.jpg`
   - `Tushar_Solanki_Full_Stack_Developer_Resume.pdf`
   - `resume.pdf`
3. Go to **Settings → Pages → Source → main branch / root**
4. Your site will be live at `https://your-username.github.io/portfolio`

---

## ✏️ Customization

| What to change | Where |
|---|---|
| Name, bio, email | `index.html` — Hero & Contact sections |
| Colors / theme | `style.css` — `:root` and `[data-theme="light"]` blocks |
| Typewriter phrases | `script.js` — `phrases` array |
| Add a project | `index.html` — copy a `.project-card` block |
| Profile photo | Replace `ts_image.jpg` (keep same filename) |

---

*Built with ❤️ — Pure HTML + CSS + JS · No frameworks · No dependencies*
