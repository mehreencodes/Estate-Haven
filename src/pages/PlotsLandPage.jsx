import { Link } from "react-router-dom";
import { ArrowLeft, MapPinned, FileCheck, Sprout, Home } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PropertyCardAlt from "../components/properties/PropertyCardAlt";
import properties from "../data/properties";

function PlotsLandPage() {
  const plots = properties.filter((p) => p.category === "Plot & Land");

  return (
    <div className="relative min-h-screen">
      <Navbar />

      <section className="cat-hero-v2 cat-plot">
        <div className="container-premium">
          <Link to="/" className="cat-hero-v2-back">
            <ArrowLeft size={15} />
            Back to Home
          </Link>

          <div className="cat-hero-v2-grid">
            <div>
              <p className="cat-hero-v2-eyebrow">Plots & Land</p>
              <h1 className="cat-hero-v2-title">Own the Ground You Build On</h1>
              <p className="cat-hero-v2-subtitle">
                Residential and investment plots in prime, high-growth locations — a foundation for
                what you build next.
              </p>
              <span className="cat-hero-v2-count">
                <Home size={15} /> {plots.length} Plots Available
              </span>
            </div>

            <div className="cat-hero-v2-image-wrap">
              <div className="cat-hero-v2-blob" />
              <img
                src="https://i.pinimg.com/736x/e2/5d/04/e25d04d4f22adb8314225a994bda40dc.jpg"
                alt="Plots & Land"
                className="cat-hero-v2-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" style={{ paddingTop: "20px" }}>
        <div className="container-premium">
          <div className="highlight-strip">
            <div className="highlight-item accent-plot">
              <div className="highlight-icon"><FileCheck size={19} color="#fff" /></div>
              <div>
                <p className="highlight-title">Clear Titles</p>
                <p className="highlight-text">Fully verified ownership and documentation, no disputes.</p>
              </div>
            </div>
            <div className="highlight-item accent-plot">
              <div className="highlight-icon"><MapPinned size={19} color="#fff" /></div>
              <div>
                <p className="highlight-title">Growth Corridors</p>
                <p className="highlight-text">Plots selected in areas with strong appreciation potential.</p>
              </div>
            </div>
            <div className="highlight-item accent-plot">
              <div className="highlight-icon"><Sprout size={19} color="#fff" /></div>
              <div>
                <p className="highlight-title">Build-Ready</p>
                <p className="highlight-text">Utility access and approvals in place, ready to develop.</p>
              </div>
            </div>
          </div>

          <div className="results-bar">
            <p className="results-count">
              <strong>{plots.length}</strong> plots available
            </p>
          </div>

          <div className="property-grid">
            {plots.map((property) => (
              <PropertyCardAlt key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PlotsLandPage;