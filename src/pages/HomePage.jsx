import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import FeaturedProperties from "../components/home/FeaturedProperties";
import PropertyCategories from "../components/home/PropertyCategories";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import CtaSection from "../components/home/CtaSection";
import Footer from "../components/layout/Footer";
import { useEffect } from "react";
import TrendingProperties from "../components/home/TrendingProperties";


function HomePage() {
  useEffect(() => {
  document.title = "Estate Haven | Find Your Dream Home in Lahore";
}, []);
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <TrendingProperties />
      <PropertyCategories />
      <WhyChooseUs />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default HomePage;