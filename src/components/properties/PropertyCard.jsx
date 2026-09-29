import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <Link to="/properties" className="property-card-minimal">
      <div className="property-card-minimal-image-wrap">
        <img src={property.image} alt={property.name} className="property-card-minimal-image" />
        <div className="property-card-minimal-scrim" />
        <div className="property-card-minimal-overlay">
          <span>Explore Listings</span>
          <ArrowRight size={15} />
        </div>
      </div>

      <div className="property-card-minimal-info">
        <h3 className="property-card-minimal-name">{property.name}</h3>
        <p className="property-card-minimal-location">
          <MapPin size={13} />
          {property.location}
        </p>
      </div>
    </Link>
  );
}

export default PropertyCard;