# Nova AI — Modern SaaS Landing Page

A responsive, high-converting artificial intelligence SaaS landing page built with pure **HTML5**, **CSS3**, and **Vanilla JavaScript**.

---

## 🚀 Live Preview & Quick Start

No build tools or package managers required. Simply open `index.html` in any modern web browser:

### Option 1: Direct File Open
Double-click [index.html](file:///c:/Users/PC-CLICK-PLUS/Desktop/pythoon/index.html) or open it via your preferred browser.

### Option 2: Local HTTP Server (Optional)
Using Python:
```bash
python -m http.server 3000
```
Then navigate to `http://localhost:3000` in your browser.

---

## 📂 Project Structure

```
pythoon/
├── index.html       # Semantic HTML5 markup, SEO tags & accessible structure
├── style.css        # Custom CSS design system, dark-mode styling & animations
├── script.js        # Dynamic UI logic, tab switching, pricing & simulation effects
└── README.md        # Project documentation
```

---

## ✨ Features & Highlights

- **Dark-Mode Aesthetic**: Ambient glowing orbs, subtle grid overlay, glassmorphism (`backdrop-filter`), and neon accents.
- **Hero Section**:
  - Dynamic status indicators and stats counter on scroll (Uptime, Engineers, G2 Rating).
  - Interactive hero terminal with realistic workspace simulation and prompt sandbox.
- **Interactive Capabilities Playground**:
  - Tabbed interface (Code Generation, Data Analysis, Security Audit).
  - Simulated typewriter streaming code generator.
  - One-click copy code to clipboard with toast notification.
- **Pricing Switcher**:
  - Interactive toggle between Monthly and Annual billing (with 20% discount calculation).
- **FAQ Accordion**: Smooth expand/collapse FAQ items.
- **Toast Notifications**: Built-in non-intrusive alert system for user interactions.
- **Fully Responsive**: Optimized for mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

- **HTML5**: Semantic tags (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`) with SEO meta tags.
- **CSS3 (Vanilla)**:
  - CSS Custom Properties (Variables)
  - CSS Grid & Flexbox layouts
  - Keyframe animations & smooth transitions
  - Media queries for responsive breakpoints
- **JavaScript (ES6+)**:
  - IntersectionObserver for scroll-triggered counter animations
  - Event-driven state handling (tabs, pricing toggle, accordions)
  - DOM manipulation and dynamic toast messages
- **External CDN Resources**:
  - [Google Fonts](https://fonts.google.com/): *Plus Jakarta Sans* & *Space Grotesk*
  - [Lucide Icons](https://lucide.dev/): Crisp SVG icons via unpkg CDN

---

## 🎨 Customization

### Changing Brand Colors
Update CSS variables in [`style.css`](file:///c:/Users/PC-CLICK-PLUS/Desktop/pythoon/style.css):

```css
:root {
  --bg-primary: #07090e;
  --accent-purple: #8b5cf6;
  --accent-cyan: #06b6d4;
  --grad-primary: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
}
```

---

## 📄 License

This project is open-source and free to use for personal and commercial projects.
