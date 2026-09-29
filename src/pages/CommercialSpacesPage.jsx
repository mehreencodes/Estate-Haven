import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, Users, ParkingCircle, Home } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PropertyCardAlt from "../components/properties/PropertyCardAlt";
import properties from "../data/properties";

function CommercialSpacesPage() {
  const commercial = properties.filter((p) => p.category === "Commercial Space");

  return (
    <div className="relative min-h-screen">
      <Navbar />

      <section className="cat-hero-v2 cat-commercial">
        <div className="container-premium">
          <Link to="/" className="cat-hero-v2-back">
            <ArrowLeft size={15} />
            Back to Home
          </Link>

          <div className="cat-hero-v2-grid">
            <div>
              <p className="cat-hero-v2-eyebrow">Commercial Spaces</p>
              <h1 className="cat-hero-v2-title">Build Your Business Here</h1>
              <p className="cat-hero-v2-subtitle">
                Prime commercial spaces for offices, retail, and growing businesses — positioned where
                customers and talent already are.
              </p>
              <span className="cat-hero-v2-count">
                <Home size={15} /> {commercial.length} Spaces Available
              </span>
            </div>

            <div className="cat-hero-v2-image-wrap">
              <div className="cat-hero-v2-blob" />
              <img
                src="https://i.pinimg.com/736x/b6/4e/8f/b64e8fe1276e67ddcd5ece664f6e6333.jpg"
                alt="Commercial Spaces"
                className="cat-hero-v2-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" style={{ paddingTop: "20px" }}>
        <div className="container-premium">
          <div className="highlight-strip">
            <div className="highlight-item accent-commercial">
              <div className="highlight-icon"><TrendingUp size={19} color="#fff" /></div>
              <div>
                <p className="highlight-title">High Foot Traffic</p>
                <p className="highlight-text">Locations chosen for visibility and customer flow.</p>
              </div>
            </div>
            <div className="highlight-item accent-commercial">
              <div className="highlight-icon"><Users size={19} color="#fff" /></div>
              <div>
                <p className="highlight-title">Flexible Layouts</p>
                <p className="highlight-text">Configurable spaces suited for offices or retail.</p>
              </div>
            </div>
            <div className="highlight-item accent-commercial">
              <div className="highlight-icon"><ParkingCircle size={19} color="#fff" /></div>
              <div>
                <p className="highlight-title">Dedicated Parking</p>
                <p className="highlight-text">On-site parking built for staff and visiting clients.</p>
              </div>
            </div>
          </div>

          <div className="results-bar">
            <p className="results-count">
              <strong>{commercial.length}</strong> commercial spaces available
            </p>
          </div>

          <div className="property-grid">
            {commercial.map((property) => (
              <PropertyCardAlt key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default CommercialSpacesPage;