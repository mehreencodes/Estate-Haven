import { Link } from "react-router-dom";
import { ArrowLeft, Gem, ShieldCheck, TreePine, Home } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PropertyCardAlt from "../components/properties/PropertyCardAlt";
import properties from "../data/properties";

function LuxuryVillasPage() {
  const villas = properties.filter((p) => p.category === "Luxury Villa");

  return (
    <div className="relative min-h-screen">
      <Navbar />

      <section className="cat-hero-v2 cat-villa">
        <div className="container-premium">
          <Link to="/" className="cat-hero-v2-back">
            <ArrowLeft size={15} />
            Back to Home
          </Link>

          <div className="cat-hero-v2-grid">
            <div>
              <p className="cat-hero-v2-eyebrow">Luxury Villas</p>
              <h1 className="cat-hero-v2-title">Live in Absolute Grandeur</h1>
              <p className="cat-hero-v2-subtitle">
                Spacious, private, and thoughtfully designed — explore our finest luxury villa listings
                built for those who expect more.
              </p>
              <span className="cat-hero-v2-count">
                <Home size={15} /> {villas.length} Villas Available
              </span>
            </div>

            <div className="cat-hero-v2-image-wrap">
              <div className="cat-hero-v2-blob" />
              <img
                src="https://i.pinimg.com/736x/f7/8e/9e/f78e9ec3e95cca842ebadc27878b79e0.jpg"
                alt="Luxury Villas"
                className="cat-hero-v2-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" style={{ paddingTop: "20px" }}>
        <div className="container-premium">
          <div className="highlight-strip">
            <div className="highlight-item accent-villa">
              <div className="highlight-icon"><Gem size={19} color="#fff" /></div>
              <div>
                <p className="highlight-title">Premium Finishes</p>
                <p className="highlight-text">Imported materials, custom interiors, and architect-led design.</p>
              </div>
            </div>
            <div className="highlight-item accent-villa">
              <div className="highlight-icon"><ShieldCheck size={19} color="#fff" /></div>
              <div>
                <p className="highlight-title">Gated Security</p>
                <p className="highlight-text">24/7 surveillance and controlled access in every community.</p>
              </div>
            </div>
            <div className="highlight-item accent-villa">
              <div className="highlight-icon"><TreePine size={19} color="#fff" /></div>
              <div>
                <p className="highlight-title">Private Gardens</p>
                <p className="highlight-text">Generous outdoor space built for privacy and relaxation.</p>
              </div>
            </div>
          </div>

          <div className="results-bar">
            <p className="results-count">
              <strong>{villas.length}</strong> luxury villas available
            </p>
          </div>

          <div className="property-grid">
            {villas.map((property) => (
              <PropertyCardAlt key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LuxuryVillasPage;