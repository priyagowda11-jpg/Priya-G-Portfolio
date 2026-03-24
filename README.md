# 🌌 Priya G — Personal Portfolio 

<div align="center">

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Vercel-black?style=for-the-badge)](https://vercel.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion)

> **A high-end interactive portfolio with custom cursor, particle canvas, 3D parallax hero, tilt project cards, scroll animations, dark/light mode, and EmailJS contact form.**

</div>

---

## ✨ Features Built

| Feature                | What it does                                                            |
| ---------------------- | ----------------------------------------------------------------------- |
| 🖱️ Custom Cursor       | Dot + lagging ring, expands on hover over buttons/links                 |
| 🌌 Particle Canvas     | 90 animated dots with connecting lines, reacts to resize                |
| 🎯 3D Parallax Hero    | Profile image tilts in 3D with mouse movement via Framer Motion springs |
| ⌨️ Typing Animation    | Multi-phrase cycling with smooth delete/type effect                     |
| 🃏 3D Tilt Cards       | Project cards rotate on cursor + shimmer light follows mouse            |
| 📊 Glowing Skill Bars  | Animated on scroll-enter, colored glow per category                     |
| 🔢 Counter Stats       | Numbers count up when scrolled into view                                |
| 📜 Scroll Progress Bar | Blue→teal gradient indicator fixed at top                               |
| 🌓 Dark / Light Mode   | Toggle with Navbar button                                               |
| ⬆️ Back to Top         | Spring-animated floating button                                         |
| 📧 EmailJS Contact     | Ready to wire — add 3 keys, get real emails                             |
| 📱 Fully Responsive    | Mobile hamburger menu, fluid grid layouts                               |

---

## 📁 Project Structure

```
priya-portfolio-v2/
├── public/assets/
│   ├── profile/profile.jpg         ← 📸 ADD YOUR PHOTO HERE
│   └── resume/Priya_G_Resume.pdf   ← 📄 ADD YOUR RESUME HERE
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certificates.jsx
│   │   ├── Vision.jsx
│   │   ├── Contact.jsx
│   │   └── BackToTop.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── package.json
```

---

## ⚡ Run Steps

### 1. Install Node.js

Download from [nodejs.org](https://nodejs.org) — choose LTS version (v18+)

### 2. Install dependencies

```bash
cd priya-portfolio-v2
npm install
```

### 3. Start dev server

```bash
npm run dev
```

Open **http://localhost:5173** ✅

---

## 📸 Add Your Photo

```
1. Rename your photo to:   profile.jpg
2. Drop it inside:         public/assets/profile/
3. Restart server
```

Falls back to "PG" initials if photo is missing.

---

## 📄 Add Your Resume

```
1. Rename your PDF to:     Priya_G_Resume.pdf
2. Drop it inside:         public/assets/resume/
```

Download Resume button + Navbar Resume link both work automatically.

---

## 💌 Connect EmailJS (Real Emails — Free)

1. Sign up at [emailjs.com](https://emailjs.com)
2. Create a Service (Gmail) → copy Service ID
3. Create a Template → use `{{from_name}}` `{{from_email}}` `{{subject}}` `{{message}}` → copy Template ID
4. Account → API Keys → copy Public Key
5. Open `src/components/Contact.jsx` and replace:

```js
const EMAILJS_SERVICE = "service_abc123";
const EMAILJS_TEMPLATE = "template_xyz456";
const EMAILJS_KEY = "your_public_key";
```

---

## 🏗️ Build for Production

```bash
npm run build     # Output → dist/
npm run preview   # Preview locally
```

## 🚀 Deploy Free

**Netlify:** `npm run build` → drag `dist/` to [netlify.com](https://netlify.com)

**Vercel:** `npx vercel --prod`

---

## 🛠️ Scripts

| Command           | Action                       |
| ----------------- | ---------------------------- |
| `npm run dev`     | Dev server at localhost:5173 |
| `npm run build`   | Production build to dist/    |
| `npm run preview` | Preview production build     |

---

## 👩‍💻 Author

**Priya G**
B.E. Electrical & Electronics Engineering | AI & IoT Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/priya-g-07422429a/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=flat&logo=github)](https://github.com/priyagowda11-jpg/)
[![Email](https://img.shields.io/badge/Email-Contact-red?style=flat&logo=gmail)](mailto:priyag11032005@gmail.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-Connect-black?style=flat&logo=linkedin)]([https://www.linkedin.com/in/priya-g-07422429a/](https://priya-gowda-portfolio.netlify.app))

---

<div align="center">
⭐ If you found this project useful, please star the repository!
</div>
