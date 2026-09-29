import { Scale, Check } from "lucide-react";
import { useCompare } from "../context/CompareContext"; // adjust path to wherever CompareContext.jsx lives

// Drop this into any property card — PropertyCardAlt, pcard2, the
// minimal home-page card, etc. It only needs the property's id.
// e.stopPropagation() so clicking it inside a <Link>-wrapped card
// doesn't also navigate to the property page.
function CompareButton({ propertyId, className = "" }) {
  const { isComparing, toggleCompare, maxReached } = useCompare();
  const active = isComparing(propertyId);
  const disabled = !active && maxReached;

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;
    toggleCompare(propertyId);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={`compare-toggle-btn ${active ? "active" : ""} ${className}`}
      title={
        disabled
          ? "You can compare up to 3 properties at a time"
          : active
          ? "Remove from Compare"
          : "Add to Compare"
      }
    >
      {active ? <Check size={13} /> : <Scale size={13} />}
      {active ? "Added" : "Compare"}
    </button>
  );
}

export default CompareButton;