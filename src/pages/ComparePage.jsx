import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BedDouble, Bath, Ruler, MapPin, X, Scale, Home } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useCompare } from "../context/CompareContext"; // adjust path
import properties from "../data/properties"; // adjust path

function ComparePage() {
  const { compareIds, removeFromCompare } = useCompare();
  const items = compareIds
    .map((id) => properties.find((p) => p.id === id))
    .filter(Boolean);

  const placeholderCount = Math.max(0, 3 - items.length);

  return (
    <div className="relative min-h-screen">
      <Navbar />

      <div className="compare-hero">
        <div className="container-premium">
          <Link to="/properties" className="compare-hero-back">
            <ArrowLeft size={15} /> Back to Properties
          </Link>

          <div className="compare-hero-text">
            <span className="compare-hero-badge">
              <Scale size={15} color="#a88652" />
              Compare up to 3 properties
            </span>
            <h1 className="compare-hero-title">
              Weigh Your <span>Options</span>
            </h1>
            <p className="compare-hero-subtitle">
              See your shortlisted properties side by side — price, size and
              location, all in one view.
            </p>
          </div>

          <div className="compare-hero-line-wrap">
            <svg
              className="compare-hero-line-svg"
              viewBox="0 0 1000 40"
              preserveAspectRatio="none"
            >
              <path
                d="M0,20 Q500,0 1000,20"
                stroke="#cbd5e1"
                strokeWidth="2"
                fill="none"
              />
            </svg>

            <div className="compare-polaroid-row">
              {items.map((p) => (
                <Link
                  to={`/property/${p.id}`}
                  key={p.id}
                  className="compare-polaroid"
                >
                  <span className="compare-polaroid-pin" />
                  <img
                    src={p.image}
                    alt={p.name}
                    className="compare-polaroid-image"
                  />
                  <p className="compare-polaroid-name">{p.name}</p>
                  <p className="compare-polaroid-location">{p.location}</p>
                </Link>
              ))}

              {Array.from({ length: placeholderCount }).map((_, i) => (
                <div key={`ph-${i}`} className="compare-polaroid placeholder">
                  <Home size={22} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-premium"
        style={{ paddingTop: "60px", paddingBottom: "100px" }}
      >
        {items.length === 0 ? (
          <div className="empty-state">
            <p className="empty-state-title">Nothing to compare yet</p>
            <p className="empty-state-text">
              Add 2 or more properties from the listings to compare them
              here.
            </p>
          </div>
        ) : (
          <>
            <p className="compare-scroll-hint">
              Swipe to compare <ArrowRight size={13} />
            </p>
            <div className="compare-table-wrap">
              <table className="compare-table">
              <thead>
                <tr>
                  <th className="compare-th-label"></th>
                  {items.map((p) => (
                    <th key={p.id}>
                      <button
                        className="compare-remove-btn"
                        onClick={() => removeFromCompare(p.id)}
                        aria-label={`Remove ${p.name}`}
                      >
                        <X size={13} />
                      </button>
                      <img src={p.image} alt={p.name} />
                      <p className="compare-th-name">{p.name}</p>
                      <p className="compare-th-price">{p.price}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="compare-td-label">Location</td>
                  {items.map((p) => (
                    <td key={p.id}>
                      <MapPin size={13} className="compare-icon-inline" />
                      {p.location}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="compare-td-label">Bedrooms</td>
                  {items.map((p) => (
                    <td key={p.id}>
                      <BedDouble size={13} className="compare-icon-inline" />
                      {p.beds}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="compare-td-label">Bathrooms</td>
                  {items.map((p) => (
                    <td key={p.id}>
                      <Bath size={13} className="compare-icon-inline" />
                      {p.baths}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="compare-td-label">Area</td>
                  {items.map((p) => (
                    <td key={p.id}>
                      <Ruler size={13} className="compare-icon-inline" />
                      {p.area}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="compare-td-label">Type</td>
                  {items.map((p) => (
                    <td key={p.id}>{p.category}</td>
                  ))}
                </tr>
                <tr>
                  <td className="compare-td-label"></td>
                  {items.map((p) => (
                    <td key={p.id}>
                      <Link
                        to={`/property/${p.id}`}
                        className="compare-view-btn"
                      >
                        View Details
                      </Link>
                    </td>
                  ))}
                </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default ComparePage;