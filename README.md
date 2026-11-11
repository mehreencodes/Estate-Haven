<div align="center">

# Estate Haven

**A modern real estate platform for Lahore's premium property market.**

Built with React, Vite, Tailwind CSS and Firebase.

[Live Demo](https://estate-haven-two.vercel.app/) &nbsp;|&nbsp; [Report a Bug](https://github.com/mehreencodes/Estate-Haven/issues) &nbsp;|&nbsp; [Request a Feature](https://github.com/mehreencodes/Estate-Haven/issues)

</div>

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
6. [Environment Variables](#environment-variables)
7. [Firebase Setup](#firebase-setup)
8. [Deployment](#deployment)
9. [Roadmap](#roadmap)
10. [Screenshots](#screenshots)
11. [License](#license)
12. [Author](#author)

---

## Overview

Estate Haven is a real estate listings website built for a single-city agency operating in Lahore, Pakistan, covering **DHA**, **Gulberg**, **Bahria Town** and **Model Town**.

Rather than a generic property-listing template, the project focuses on genuinely useful, decision-driving features that a real buyer or seller would actually need, not decorative add-ons.

> **Design principle:** if a feature doesn't help someone make a real decision, it doesn't belong on the site.

| | |
|---|---|
| **Live site** | https://estate-haven-two.vercel.app/ |
| **Market** | Lahore, Pakistan |
| **Status** | Live, actively improved |
| **Frontend** | React 18, Vite, Tailwind CSS |
| **Auth** | Firebase Authentication |

---

## Features

### Property Discovery

| Feature | Description |
|---|---|
| Search and filters | Filter listings by location, type, bedrooms, and sort order |
| Category pages | Luxury Villas, Modern Apartments, Commercial Spaces, Plots & Land |
| Trending Properties | An editorial, ranked strip on the home page |
| Recently Viewed | Persisted locally so users can pick up where they left off |

### Decision-Making Tools

| Feature | Description |
|---|---|
| Installment / Loan Calculator | Down payment %, tenure and interest rate produce the monthly installment and total payment, right on the property details page |
| Compare Properties | Select up to 3 listings and compare price, beds, baths, area and location side by side |
| Availability Status | Available, Under Offer and Sold badges, so buyers never waste time on a property that's gone |

### Communication

| Feature | Description |
|---|---|
| Request a Viewing and Contact forms | Wired to a real inquiry pipeline (Formspree), not just UI state |
| Share on WhatsApp | One tap sends a property (name, price, location, link) to family or friends, matching how people actually shop for property in Pakistan |

### Authentication

| Feature | Description |
|---|---|
| Sign up and log in | Powered by Firebase Authentication, including Continue with Google |
| Account menu | Avatar, name, email and log out once signed in |
| Responsive auth button | Full Sign Up button on desktop, compact icon-only button in the mobile header |

### Personalization and UI

| Feature | Description |
|---|---|
| Favorites | Save properties to revisit later |
| Testimonials | Vertically auto-scrolling client reviews |
| Responsive design | Mobile-first layout across every page |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React (Vite) |
| Routing | React Router |
| Styling | Tailwind CSS with a custom design system |
| Icons | Lucide React |
| Authentication | Firebase Authentication |
| Forms / Inquiries | Formspree |
| State | React Context (Favorites, Compare, Auth) and localStorage |
| Deployment | Vercel |

---

## Project Structure

```text
src/
├── assets/              # Images and static assets
├── components/
│   ├── auth/            # Sign up / log in modal and auth styles
│   ├── home/            # Home sections (Hero, Featured, Trending, Testimonials)
│   ├── layout/          # Navbar, Footer
│   ├── properties/      # Property cards, filters, grid, calculator
│   └── ui/              # Shared UI primitives (Button, etc.)
├── context/             # FavoritesContext, CompareContext, AuthContext
├── data/                # Property data
├── hooks/               # Custom hooks (useRecentlyViewed, etc.)
├── pages/               # Route-level pages
├── utils/               # Shared helpers (submitForm, etc.)
├── App.jsx
└── index.css
```

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/mehreencodes/Estate-Haven.git

# 2. Move into the project
cd Estate-Haven

# 3. Install dependencies
npm install

# 4. Create your .env file (see the next section)

# 5. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |

---

## Environment Variables

Create a `.env` file in the project root:

```env
# Formspree (contact and viewing forms)
VITE_FORMSPREE_URL=your_formspree_endpoint_here

# Firebase (authentication)
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

| Variable | Purpose |
|---|---|
| `VITE_FORMSPREE_URL` | Powers the Request a Viewing and Contact forms. If missing, forms show an error instead of silently failing |
| `VITE_FIREBASE_*` | Firebase project config, found under Project Settings, Your apps, Web app |

> [!NOTE]
> `.env` is git-ignored and never committed. You will need your own Formspree endpoint and Firebase project to test forms and authentication locally.

---

## Firebase Setup

1. Create a project in the [Firebase Console](https://console.firebase.google.com) and register a **Web app**.
2. Go to **Authentication, Sign-in method** and enable the providers you want (for example Email/Password and Google).
3. Go to **Authentication, Settings, Authorized domains** and add your deployed domain, for example:

   ```text
   estate-haven-two.vercel.app
   ```

> [!IMPORTANT]
> If the deployed domain is not in the Authorized domains list, Google sign-in fails with "This domain is not authorized in Firebase settings".

---

## Deployment

The project is deployed on **Vercel**.

1. Import the GitHub repository into Vercel.
2. Add every variable from your `.env` file under **Project Settings, Environment Variables**.
3. Redeploy the project.

> [!NOTE]
> Vite embeds environment variables at build time, so a redeploy is required whenever they change.

---

## Roadmap

- [x] Property listings with filters and search
- [x] Loan / Installment Calculator
- [x] Trending Properties section
- [x] Compare Properties
- [x] Share on WhatsApp
- [x] Recently Viewed Properties
- [x] Availability Status badges
- [x] Live form submissions (Formspree)
- [x] User authentication (Firebase)
- [x] Deployment (Vercel)
- [ ] Full mobile QA pass
- [ ] Saved Search / property alerts

---

## Screenshots

Screenshots will be added here once the final UI pass is complete.

---

## License

This project is licensed under the **MIT License**. Feel free to explore, learn from, or build on it.

---

## Author

<div align="center">

**Mehreen Khalid**

React.js & Website Developer

[GitHub](https://github.com/mehreencodes) &nbsp;|&nbsp; [Live Project](https://estate-haven-two.vercel.app/)

</div>
