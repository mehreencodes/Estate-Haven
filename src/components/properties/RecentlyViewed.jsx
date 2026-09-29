import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import properties from "../../data/properties";
import { useRecentlyViewed } from "../../hooks/useRecentlyViewed";

// Renders nothing until the user has viewed at least one property.
function RecentlyViewed({ excludeId }) {
  const { ids, clearViewed } = useRecentlyViewed();

  const items = ids
    .filter((id) => id !== excludeId)
    .map((id) => properties.find((p) => p.id === id))
    .filter(Boolean);

  if (items.length === 0) return null;

  return (
    <div className="recent-strip">
      <div className="recent-strip-head">
        <span className="recent-strip-title">
          <Clock size={14} /> Recently viewed
        </span>
        <button className="recent-strip-clear" onClick={clearViewed}>
          Clear
        </button>
      </div>

      <div className="recent-strip-list">
        {items.map((p) => (
          <Link key={p.id} to={`/property/${p.id}`} className="recent-item">
            <img src={p.image} alt={p.name} />
            <div className="recent-item-text">
              <p className="recent-item-name">{p.name}</p>
              <p className="recent-item-price">{p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecentlyViewed;