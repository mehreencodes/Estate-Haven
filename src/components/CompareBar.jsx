import { useNavigate } from "react-router-dom";
import { X, ArrowRight, Plus } from "lucide-react";
import { useCompare } from "../context/CompareContext"; // adjust path
import properties from "../data/properties"; // adjust path

// Render this ONCE, globally — e.g. right before </Footer> in your
// root layout, or inside App.jsx below <Routes>. It renders nothing
// (returns null) until the user adds at least one property.
function CompareBar() {
  const { compareIds, removeFromCompare, clearCompare, maxCompare } = useCompare();
  const navigate = useNavigate();

  if (compareIds.length === 0) return null;

  const items = compareIds
    .map((id) => properties.find((p) => p.id === id))
    .filter(Boolean);

  const emptySlots = maxCompare - items.length;

  return (
    <div className="compare-bar">
      <div className="compare-bar-inner container-premium">
        <div className="compare-bar-items">
          {items.map((p) => (
            <div key={p.id} className="compare-bar-item">
              <img src={p.image} alt={p.name} />
              <button
                onClick={() => removeFromCompare(p.id)}
                aria-label={`Remove ${p.name} from compare`}
                className="compare-bar-item-remove"
              >
                <X size={13} />
              </button>
            </div>
          ))}

          {Array.from({ length: emptySlots }).map((_, i) => (
            <button
              key={`empty-${i}`}
              className="compare-bar-item empty"
              onClick={() => navigate("/properties")}
              aria-label="Add a property to compare"
              title="Add a property to compare"
            >
              <Plus size={18} />
            </button>
          ))}

          <span className="compare-bar-label">
            {items.length} of {maxCompare} selected
          </span>
        </div>

        <div className="compare-bar-actions">
          <button className="compare-bar-clear" onClick={clearCompare}>
            Clear
          </button>
          <button
            className="compare-bar-cta"
            disabled={items.length < 2}
            onClick={() => navigate("/compare")}
          >
            Compare <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompareBar;