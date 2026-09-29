
// Small reusable badge. Properties with no `status` field are treated as "Available".
// "Available" is hidden by default so listing cards stay clean — only Sold / Under Offer show.
// Pass showAvailable on the details page to always show the status.
function StatusBadge({ status = "Available", showAvailable = false, className = "" }) {
  if (status === "Available" && !showAvailable) return null;

  const key = status.toLowerCase().replace(/\s+/g, ""); // available | underoffer | sold

  return (
    <span className={`status-badge status-${key} ${className}`}>
      <span className="status-badge-dot" />
      {status}
    </span>
  );
}

export default StatusBadge;