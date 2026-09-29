import PropertyCard from "../properties/PropertyCard";
import properties from "../../data/properties";

function FeaturedProperties() {
  const featured = properties.slice(0, 6);

  return (
    <section className="section-padding bg-white">
      <div className="container-premium">
        <div className="section-heading">
          <span className="section-tag">Featured Listings</span>
          <h2 className="section-title">Handpicked Properties for You</h2>
          <p className="section-subtitle">
            Explore our curated selection of premium homes, chosen for their location, design, and value.
          </p>
        </div>

        <div className="property-grid">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;