import { Link } from "react-router-dom";
import { Flame, MapPin, ArrowUpRight } from "lucide-react";
import properties from "../../data/properties"; // adjust path if your folder differs

// Images used ONLY for this Trending section, mapped by property id.
// Add/replace URLs here directly — properties.js stays untouched.
// If an id isn't listed here, it silently falls back to that property's normal image.
const trendingImages = {
  1: "https://i.pinimg.com/1200x/ef/39/59/ef3959927cdda6223562be58bd06d560.jpg",
  2: "https://i.pinimg.com/736x/06/2f/14/062f14f68098b342299f94116718dfb5.jpg",
  3: "https://i.pinimg.com/736x/2c/fb/cd/2cfbcd7b97a58389b1b72affcc2d1d52.jpg",
  4: "https://i.pinimg.com/736x/3c/34/81/3c3481e3f38f80287a752f94539abf71.jpg",
};

function TrendingProperties() {
  // Add `trending: true` to specific properties in your data file to control
  // exactly which ones show here. Falls back to the first 4 so nothing breaks
  // if you haven't added that field yet.
  const trending = properties.filter((p) => p.trending).length
    ? properties.filter((p) => p.trending).slice(0, 4)
    : properties.slice(0, 4);

  if (!trending.length) return null;

  return (
    <section className="section-padding">
      <div className="container-premium">
        <div className="section-heading" style={{ textAlign: "left", margin: "0 0 40px" }}>
          <span className="section-tag" style={{ color: "#a88652" }}>
            High Demand
          </span>
          <h2 className="section-title" style={{ marginBottom: "6px" }}>
            Trending Right Now
          </h2>
          <p className="section-subtitle">
            The listings buyers are viewing and enquiring about the most this week.
          </p>
        </div>

        <div className="trending-strip">
          {trending.map((property, index) => (
            <Link
              to={`/property/${property.id}`}
              key={property.id}
              className="trending-row"
            >
              <span className="trending-rank">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="trending-thumb">
                <img
                  src={trendingImages[property.id] || property.image}
                  alt={property.name}
                />
              </div>

              <div className="trending-info">
                <span className="trending-flame-tag">
                  <Flame size={11} />
                  Trending
                </span>
                <h3 className="trending-name">{property.name}</h3>
                <p className="trending-location">
                  <MapPin size={12} />
                  {property.location}
                </p>
              </div>

              <div className="trending-meta-col">
                <span className="trending-price">{property.price}</span>
                <span className="trending-meta-row">
                  <span>{property.beds} Bed</span>
                  <span>·</span>
                  <span>{property.baths} Bath</span>
                </span>
              </div>

              <div className="trending-arrow">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingProperties;