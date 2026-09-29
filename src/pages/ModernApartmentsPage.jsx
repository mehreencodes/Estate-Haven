import { Link } from "react-router-dom";
import { ArrowLeft, Zap, Building2, Wifi, Home } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PropertyCardAlt from "../components/properties/PropertyCardAlt";
import properties from "../data/properties";

function ModernApartmentsPage() {
  const apartments = properties.filter((p) => p.category === "Modern Apartment");

  return (
    <div className="relative min-h-screen">
      <Navbar />

      <section className="cat-hero-v2 cat-apartment">
        <div className="container-premium">
          <Link to="/" className="cat-hero-v2-back">
            <ArrowLeft size={15} />
            Back to Home
          </Link>

          <div className="cat-hero-v2-grid">
            <div>
              <p className="cat-hero-v2-eyebrow">Modern Apartments</p>
              <h1 className="cat-hero-v2-title">Contemporary Living, Redefined</h1>
              <p className="cat-hero-v2-subtitle">
                Sleek, functional apartments in the city's most connected neighborhoods — built for
                modern, efficient living.
              </p>
              <span className="cat-hero-v2-count">
                <Home size={15} /> {apartments.length} Apartments Available
              </span>
            </div>

            <div className="cat-hero-v2-image-wrap">
              <div className="cat-hero-v2-blob" />
              <img
                src="https://i.pinimg.com/1200x/57/8c/5a/578c5a58a648b68f2c5e9cb2a2ff9c13.jpg"
                alt="Modern Apartments"
                className="cat-hero-v2-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" style={{ paddingTop: "20px" }}>
        <div className="container-premium">
          <div className="highlight-strip">
            <div className="highlight-item accent-apartment">
              <div className="highlight-icon"><Building2 size={19} color="#fff" /></div>
              <div>
                <p className="highlight-title">Prime Locations</p>
                <p className="highlight-text">Walking distance to business hubs, cafes, and transit.</p>
              </div>
            </div>
            <div className="highlight-item accent-apartment">
              <div className="highlight-icon"><Wifi size={19} color="#fff" /></div>
              <div>
                <p className="highlight-title">Smart-Ready Units</p>
                <p className="highlight-text">Fiber connectivity and modern building infrastructure.</p>
              </div>
            </div>
            <div className="highlight-item accent-apartment">
              <div className="highlight-icon"><Zap size={19} color="#fff" /></div>
              <div>
                <p className="highlight-title">Low Maintenance</p>
                <p className="highlight-text">Efficient layouts built for easy, modern city living.</p>
              </div>
            </div>
          </div>

          <div className="results-bar">
            <p className="results-count">
              <strong>{apartments.length}</strong> apartments available
            </p>
          </div>

          <div className="property-grid">
            {apartments.map((property) => (
              <PropertyCardAlt key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ModernApartmentsPage;