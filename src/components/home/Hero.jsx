import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Home as HomeIcon } from "lucide-react";
import Button from "../ui/Button";
import heroImage from "../../assets/hero-home.jpg";
import heroImageMobile from "../../assets/hero-home-mobile.jpg";

function Hero() {
  const navigate = useNavigate();
  const [searchLocation, setSearchLocation] = useState("");
  const [searchType, setSearchType] = useState("All Types");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchLocation.trim()) params.set("location", searchLocation.trim());
    if (searchType !== "All Types") params.set("type", searchType);
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <section
      className="hero-section"
      style={{
        "--hero-bg": `url(${heroImage})`,
        "--hero-mobile-bg": `url(${heroImageMobile})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/20 to-transparent" />

      <div className="container-premium relative z-10 w-full">
        {/* Removed "max-w-xl" here — it was capping the ENTIRE block
            (heading + search bar + buttons + stats) at 576px.
            The heading breaks with <br/> anyway, and the subtitle
            already has its own max-w-md, so nothing needed this. */}
        <div className="hero-content">
          <h1 className="heading-premium text-slate-900 text-5xl md:text-7xl font-extrabold leading-[1.05] mb-3 hero-fade-in hero-fade-in-1">
            Find Your
            <br />
            Dream Home
          </h1>

         <p className="text-slate-600 text-lg leading-relaxed max-w-md hero-fade-in hero-fade-in-2">
            Exclusive listings. Premium locations. Find a home you'll love.
          </p>

          {/* Search Bar */}
          <div className="hero-search-box hero-fade-in hero-fade-in-3">
            <div className="hero-search-input-group">
              <MapPin size={16} color="#94a3b8" />
              <input
                type="text"
                placeholder="Search location..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>

            <div className="hero-search-divider" />

            <div className="hero-search-input-group">
              <HomeIcon size={16} color="#94a3b8" />
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
              >
                <option>All Types</option>
                <option>Luxury Villa</option>
                <option>Modern Apartment</option>
                <option>Commercial Space</option>
                <option>Plot & Land</option>
              </select>
            </div>

            <button className="hero-search-submit" onClick={handleSearch}>
              <Search size={18} />
            </button>
          </div>

          <div className="btn-group hero-fade-in hero-fade-in-4">
            <Button variant="solid" onClick={() => navigate("/properties")}>
              Explore Properties
            </Button>
            <Button variant="outline" onClick={() => navigate("/contact")}>
              Talk to an Agent
            </Button>
          </div>

          <div className="stats-row hero-fade-in hero-fade-in-5">
            <div>
              <p className="text-2xl font-extrabold text-slate-900">500+</p>
              <p className="text-xs text-slate-500 font-medium">
                Properties Listed
              </p>
            </div>
            <div className="stat-divider" />
            <div>
              <p className="text-2xl font-extrabold text-slate-900">98%</p>
              <p className="text-xs text-slate-500 font-medium">
                Client Satisfaction
              </p>
            </div>
            <div className="stat-divider" />
            <div>
              <p className="text-2xl font-extrabold text-slate-900">15+</p>
              <p className="text-xs text-slate-500 font-medium">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-mobile-image" />
    </section>
  );
}

export default Hero;
