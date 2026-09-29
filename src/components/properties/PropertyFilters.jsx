import { Search } from "lucide-react";

function PropertyFilters({
  search, setSearch,
  dealType, setDealType,
  location, setLocation,
  type, setType,
  beds, setBeds,
  sortBy, setSortBy,
  locations, types, bedOptions, sortOptions,
}) {
  return (
    <div className="filter-bar">
      <div className="filter-top-row">
        <div className="search-input-wrap">
          <Search size={17} className="search-icon" />
          <input
            type="text"
            placeholder="Search by property name or location..."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="toggle-group">
          <button
            className={`toggle-btn ${dealType === "Buy" ? "active" : ""}`}
            onClick={() => setDealType("Buy")}
          >
            Buy
          </button>
          <button
            className={`toggle-btn ${dealType === "Rent" ? "active" : ""}`}
            onClick={() => setDealType("Rent")}
          >
            Rent
          </button>
        </div>
      </div>

      <div className="filter-row">
        <select className="filter-select" value={location} onChange={(e) => setLocation(e.target.value)}>
          {locations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>

        <select className="filter-select" value={type} onChange={(e) => setType(e.target.value)}>
          {types.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <select className="filter-select" value={beds} onChange={(e) => setBeds(e.target.value)}>
          {bedOptions.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>

        <select className="filter-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          {sortOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default PropertyFilters;