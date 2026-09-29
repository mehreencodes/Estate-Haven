import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PropertyCardAlt from "../components/properties/PropertyCardAlt";
import { useFavorites } from "../context/FavoritesContext";

function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="relative min-h-screen">
      <Navbar />

      <section className="section-padding bg-white" style={{ paddingTop: "140px" }}>
        <div className="container-premium">
          <div className="section-heading">
            <span className="section-tag">Saved Properties</span>
            <h2 className="section-title">Your Favorites</h2>
            <p className="section-subtitle">
              Properties you've saved for later — all in one place.
            </p>
          </div>

          {favorites.length > 0 ? (
            <div className="property-grid">
              {favorites.map((property) => (
                <PropertyCardAlt key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Heart size={40} color="#cbd5e1" style={{ margin: "0 auto 16px" }} />
              <p className="empty-state-title">No favorites yet</p>
              <p className="empty-state-text" style={{ marginBottom: "20px" }}>
                Tap the heart icon on any property to save it here.
              </p>
              <Link to="/properties" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontWeight: 600, color: "#0f172a" }}>
                Browse Properties <ArrowRight size={15} />
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default FavoritesPage;