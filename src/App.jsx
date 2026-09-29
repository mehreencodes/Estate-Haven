
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CompareProvider } from "./context/CompareContext";
import CompareBar from "./components/CompareBar";

const HomePage = lazy(() => import("./pages/HomePage"));
const PropertiesPage = lazy(() => import("./pages/PropertiesPage"));
const PropertyDetailsPage = lazy(() => import("./pages/PropertyDetailsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const LuxuryVillasPage = lazy(() => import("./pages/LuxuryVillasPage"));
const ModernApartmentsPage = lazy(() => import("./pages/ModernApartmentsPage"));
const CommercialSpacesPage = lazy(() => import("./pages/CommercialSpacesPage"));
const PlotsLandPage = lazy(() => import("./pages/PlotsLandPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const ComparePage = lazy(() => import("./pages/ComparePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));


function App() {
  return (
        <CompareProvider>
    <BrowserRouter>
      <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/property/:id" element={<PropertyDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/luxury-villas" element={<LuxuryVillasPage />} />
          <Route path="/modern-apartments" element={<ModernApartmentsPage />} />
          <Route path="/commercial-spaces" element={<CommercialSpacesPage />} />
          <Route path="/plots-land" element={<PlotsLandPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <CompareBar />
    </BrowserRouter>
    </CompareProvider>
  );
}

export default App;