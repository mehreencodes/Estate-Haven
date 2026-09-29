import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PropertyFilters from "../components/properties/PropertyFilters";
import PropertyGrid from "../components/properties/PropertyGrid";
import properties from "../data/properties";
import RecentlyViewed from "../components/properties/RecentlyViewed";

function PropertiesPage() {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get("type") || "All Types";
  const initialLocationSearch = searchParams.get("location") || "";

  const [search, setSearch] = useState(initialLocationSearch);
  const [dealType, setDealType] = useState("Buy");
  const [location, setLocation] = useState("All Locations");
  const [type, setType] = useState(initialType);
  const [beds, setBeds] = useState("Any Beds");
  const [sortBy, setSortBy] = useState("Newest");

  const locations = ["All Locations", "DHA Phase 6", "DHA Phase 5", "Gulberg", "Bahria Town", "Model Town"];
  const types = ["All Types", "Luxury Villa", "Modern Apartment", "Commercial Space", "Plot & Land"];
  const bedOptions = ["Any Beds", "3+", "4+", "5+", "6+"];
  const sortOptions = ["Newest", "Price: Low to High", "Price: High to Low"];

  const parsePrice = (priceStr) => parseFloat(priceStr.replace(/[^0-9.]/g, ""));

  const filteredProperties = useMemo(() => {
    let result = properties.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase());
      const matchesLocation = location === "All Locations" || p.location.includes(location);
      const matchesType = type === "All Types" || p.category === type;
      const matchesBeds = beds === "Any Beds" || p.beds >= parseInt(beds);

      return matchesSearch && matchesLocation && matchesType && matchesBeds;
    });

    if (sortBy === "Price: Low to High") {
      result = [...result].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortBy === "Price: High to Low") {
      result = [...result].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else {
      result = [...result].sort((a, b) => b.id - a.id);
    }

    return result;
  }, [search, location, type, beds, sortBy]);

  const clearFilters = () => {
    setSearch("");
    setLocation("All Locations");
    setType("All Types");
    setBeds("Any Beds");
    setSortBy("Newest");
  };

  const hasActiveFilters =
    search || location !== "All Locations" || type !== "All Types" || beds !== "Any Beds";

  return (
    <div className="relative min-h-screen">
      <Navbar />

      <section className="properties-hero">
        <div className="properties-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1800&q=85"
            alt="Properties"
          />
        </div>
        <div className="properties-hero-overlay"></div>

        <div className="properties-hero-content">
          <h1 className="properties-hero-title">Find Your Next Property in Lahore.</h1>

          <div className="properties-hero-search">
            <input
              type="text"
              placeholder="Enter a location, e.g. Gulberg, DHA"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="properties-hero-search-btn">
              <Search size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-premium">
          <RecentlyViewed />
          <PropertyFilters
            search={search} setSearch={setSearch}
            dealType={dealType} setDealType={setDealType}
            location={location} setLocation={setLocation}
            type={type} setType={setType}
            beds={beds} setBeds={setBeds}
            sortBy={sortBy} setSortBy={setSortBy}
            locations={locations} types={types} bedOptions={bedOptions} sortOptions={sortOptions}
          />

          <div className="results-bar">
            <p className="results-count">
              <strong>{filteredProperties.length}</strong>{" "}
              {filteredProperties.length === 1 ? "property" : "properties"} found
            </p>
            {hasActiveFilters && (
              <span className="clear-filters" onClick={clearFilters}>
                Clear all filters
              </span>
            )}
          </div>

          <PropertyGrid properties={filteredProperties} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PropertiesPage;