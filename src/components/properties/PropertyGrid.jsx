import PropertyCardAlt from "./PropertyCardAlt";

function PropertyGrid({ properties }) {
  if (properties.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-state-title">No properties match your search</p>
        <p className="empty-state-text">Try adjusting your filters or search term.</p>
      </div>
    );
  }

  return (
    <div className="property-grid">
      {properties.map((property) => (
        <PropertyCardAlt key={property.id} property={property} />
      ))}
    </div>
  );
}

export default PropertyGrid;