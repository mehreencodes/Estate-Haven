import { Heart, BedDouble, Bath, Ruler, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useFavorites } from "../../context/FavoritesContext";
import CompareButton from "../CompareButton";
import StatusBadge from "./StatusBadge";

function PropertyCardAlt({ property }) {
  const { toggleFavorite, isFavorited } = useFavorites();
  const favorited = isFavorited(property.id);

  return (
    <div className={`pcard2 ${property.status === "Sold" ? "is-sold" : ""}`}>
      <div className="pcard2-image-wrap">
        <img src={property.image} alt={property.name} className="pcard2-image" />
        <span className="pcard2-badge">{property.category}</span>
        <button
          className="pcard2-fav"
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(property);
          }}
        >
          <Heart size={16} fill={favorited ? "#ef4444" : "none"} color={favorited ? "#ef4444" : "#0f172a"} />
        </button>
        <CompareButton propertyId={property.id} className="pcard2-compare-btn" />
        <StatusBadge status={property.status} className="pcard2-status" />
      </div>

      <div className="pcard2-info">
        <div className="pcard2-price-row">
          <span className="pcard2-price">{property.price}</span>
          <span className="pcard2-category-inline">{property.category}</span>
        </div>

        <h3 className="pcard2-name">{property.name}</h3>

        <p className="pcard2-location">
          <MapPin size={13} />
          {property.location}
        </p>

        <div className="pcard2-meta">
          <span><BedDouble size={14} /> {property.beds} Beds</span>
          <span><Bath size={14} /> {property.baths} Baths</span>
          <span><Ruler size={14} /> {property.area}</span>
        </div>

        <Link to={`/property/${property.id}`} className="pcard2-btn">
          View Property
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}

export default PropertyCardAlt;