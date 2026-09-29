# Estate Haven — Real Estate Platform

A full-featured React real estate web application built to explore modern frontend architecture: multi-page routing, property search and filtering, favorites, property comparison, responsive layouts, and reusable components.

---

## Features

* **Multi-page architecture** — dedicated routes for Home, Properties, Property Details, Categories, Favorites, Compare, About, Contact, Blog, and individual blog posts using `react-router-dom`

* **Property search** — search properties by keywords and browse listings based on different criteria

* **Property filtering** — filter properties by location, property type, bedrooms, and price

* **Property sorting** — sort listings by newest, oldest, lowest price, or highest price

* **Property details** — dedicated property pages with detailed information about individual listings

* **Favorites** — save properties to a favorites list and manage saved listings

* **Property comparison** — compare multiple properties to help users evaluate listings

* **Recently viewed properties** — keeps track of properties recently visited by the user

* **Category browsing** — dedicated sections for Luxury Villas, Modern Apartments, Commercial Spaces, and Plots & Land

* **Blog** — dedicated blog listing and individual blog post pages for real estate content

* **Responsive design** — layouts adapt across desktop, tablet, and mobile screen sizes

* **Lazy loading** — routes are lazy-loaded with React `lazy()` and `Suspense` to improve the initial loading experience

* **Custom 404 page** — handles invalid routes with a dedicated not-found page

---

## Tech Stack

* **React** — component-based frontend development
* **Vite** — development server and production build tooling
* **React Router** — client-side routing
* **Tailwind CSS** — utility-first styling
* **Lucide React** — interface icons
* **JavaScript (ES6+)**
* **ESLint** — code quality and linting

---

## Getting Started

```bash
git clone https://github.com/mehreencodes/Estate-Haven.git
cd Estate-Haven
npm install
npm run dev
```

The development server will start with Vite.

---

## Production Build

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```text
src/
├── assets/
├── components/
├── context/
├── data/
├── layouts/
├── pages/
├── App.jsx
└── main.jsx
```

The project uses a component-based architecture with reusable UI components, page-level components, shared state through React Context, and centralized property data.

---

## Main Routes

```text
/
├── Home
├── Properties
├── Property Details
├── Luxury Villas
├── Modern Apartments
├── Commercial Spaces
├── Plots & Land
├── Favorites
├── Compare
├── About
├── Contact
├── Blog
├── Blog Post
└── 404 Not Found
```

---

## Performance

The application uses React `lazy()` and `Suspense` for route-level code splitting, allowing individual pages to load when required instead of loading every page during the initial application load.

---

## Project Notes

Estate Haven is a portfolio project focused on building a realistic real estate browsing experience with reusable components, interactive property features, responsive layouts, and modern React architecture.

The property listings and content are currently based on local project data and are intended for demonstration purposes.

---

Built by [Mehreen](https://github.com/mehreencodes)

**GitHub:** https://github.com/mehreencodes/Estate-Haven
