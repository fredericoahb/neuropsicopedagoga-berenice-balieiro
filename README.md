<div align="center">

# 🧠 Berenice Balieiro — Clinical Neuropsychopedagogue

**High-conversion landing page for neuropsychopedagogical assessment and cognitive rehabilitation — children, adults & elderly.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06b6d4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](#license)

</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **12-Section High-Conversion Page** | Hero, pain identification, belief break, science explainer, about, process, audience tabs, differentials, trust, CTA |
| **3 Target Audiences** | Tabbed sections for children, adults, and elderly |
| **WhatsApp Integration** | Floating button + CTA buttons with pre-filled message |
| **Scroll Animations** | Intersection Observer-powered fade-in reveals |
| **Responsive Design** | Mobile-first, optimized for all screen sizes |
| **SEO Optimized** | Meta tags, Open Graph, semantic HTML |
| **Performance** | Static generation, optimized bundle |
| **Copywriting Strategy** | Authority-based clinical copy, belief-breaking, trust signals |

---

## 🛠 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://typescriptlang.org/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Playfair Display + Source Sans 3
- **Hosting:** [Vercel](https://vercel.com/) (free tier)

---

## 🚀 Quick Start

```bash
git clone https://github.com/fredericoahb/neuropsicopedagoga-berenice-balieiro.git
cd neuropsicopedagoga-berenice-balieiro
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## ⚙️ Configuration

### 1. WhatsApp Number (required)
In `src/app/page.tsx`, line 14:
```tsx
const WPP_NUM = '5527999998888' // replace with real number
```

### 2. Professional Photo (recommended)
Save photo as `public/berenice.jpg` and update `AboutSection`.

---

## 🌐 Deploy

```bash
# Push to GitHub, then import at vercel.com/new
# Or via CLI:
npm i -g vercel && vercel --prod
```

### Custom Domain (.com.br)
| Type | Name | Value |
|------|------|-------|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

---

## 📁 Structure

```
neuropsicopedagoga-berenice-balieiro/
├── public/
│   └── logo.jpg              # Neural brain logo
├── src/app/
│   ├── globals.css            # Tailwind + animations
│   ├── layout.tsx             # SEO metadata
│   └── page.tsx               # Full 12-section landing page
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vercel.json
```

---

## 📄 License

[MIT License](LICENSE)

<div align="center">

**Built with evidence-based strategy for families seeking answers.**

</div>
