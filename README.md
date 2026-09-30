<div align="center">

# 🏡 Estate Haven

**A modern, full-featured real estate platform built with React — focused on Lahore's premium property market.**

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38BDF8?logo=tailwindcss&logoColor=white)
![Status](https://img.shields.io/badge/status-in%20development-orange)
![License](https://img.shields.io/badge/license-MIT-green)

</div>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Roadmap](#-roadmap)
- [Screenshots](#-screenshots)
- [License](#-license)

---

## 🏠 About the Project

**Estate Haven** is a full-stack-feeling real estate listings website built for a single-city agency operating in **Lahore, Pakistan** — covering DHA, Gulberg, Bahria Town, and Model Town. Rather than a generic property-listing template, the project focuses on **genuinely useful, decision-driving features** that a real buyer or seller would actually need — not decorative add-ons.

The goal throughout has been: *if a feature doesn't help someone make a real decision, it doesn't belong on the site.*

---

## ✨ Features

<details open>
<summary><strong>🔎 Property Discovery</strong></summary>

- Searchable, filterable property listings (location, type, beds, sort)
- Category pages (Luxury Villas, Modern Apartments, Commercial Spaces, Plots & Land)
- Trending Properties — an editorial, ranked strip on the home page
- Recently Viewed Properties — persisted locally, so users can pick up where they left off

</details>

<details open>
<summary><strong>🧮 Decision-Making Tools</strong></summary>

- **Installment / Loan Calculator** — down payment %, tenure, interest rate → monthly installment & total payment, right on the property details page
- **Compare Properties** — select up to 3 listings and compare price, beds, baths, area, and location side by side
- **Availability Status** — Available / Under Offer / Sold badges, so buyers never waste time on a property that's gone

</details>

<details open>
<summary><strong>💬 Communication</strong></summary>

- **Request a Viewing** and **Contact** forms — both wired to a real inquiry pipeline (Formspree), not just UI state
- **Share on WhatsApp** — one tap to send a property (name, price, location, link) to family or friends, matching how people actually shop for property in Pakistan

</details>

<details open>
<summary><strong>❤️ Personalization</strong></summary>

- Favorites — save properties to revisit later
- Fully responsive, mobile-first design across every page

</details>

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React (Vite) |
| Routing | React Router |
| Styling | Tailwind CSS + custom design system |
| Icons | Lucide React |
| Forms / Inquiries | Formspree |
| State | React Context (Favorites, Compare) + localStorage |

---

## 📁 Project Structure

```
src/
├── assets/              # Images and static assets
├── components/
│   ├── home/             # Home page sections (Hero, Featured, Trending, etc.)
│   ├── layout/            # Navbar, Footer
│   ├── properties/       # Property cards, filters, grid, calculator
│   └── ui/                # Shared UI primitives (Button, etc.)
├── context/              # FavoritesContext, CompareContext
├── data/                 # Property data
├── hooks/                # Custom hooks (useRecentlyViewed, etc.)
├── pages/                # Route-level pages
├── utils/                # Shared helpers (submitForm, etc.)
├── App.jsx
└── index.css
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/mehreencodes/Estate-Haven.git

# Move into the project
cd Estate-Haven

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
VITE_FORMSPREE_URL=your_formspree_endpoint_here
```

This powers the **Request a Viewing** and **Contact** forms. Without it, forms will show an error instead of silently failing — so you'll always know if it's missing.

> `.env` is git-ignored and never committed — you'll need your own Formspree endpoint to test form submissions locally.

---

## 🗺 Roadmap

- [x] Property listings with filters & search
- [x] Loan/Installment Calculator
- [x] Trending Properties section
- [x] Compare Properties
- [x] Share on WhatsApp
- [x] Recently Viewed Properties
- [x] Availability Status badges
- [x] Live form submissions (Formspree)
- [ ] Full mobile QA pass
- [ ] Deployment (Vercel)
- [ ] Saved Search / property alerts

---

## 📸 Screenshots

> _Coming soon — screenshots will be added here once the final UI pass is complete._

---

## 📄 License

This project is licensed under the MIT License — feel free to explore, learn from, or build on it.

---

<div align="center">

Built with care by **Mehreen Khalid** — React.js & Full Stack Developer

</div>
