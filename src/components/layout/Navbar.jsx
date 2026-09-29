import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ArrowUpRight, Menu, X, Heart } from "lucide-react";
import Button from "../ui/Button";
import { useFavorites } from "../../context/FavoritesContext";

function Navbar() {
  const { favorites } = useFavorites();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();


 const navLinks = [
  { name: "Home", path: "/" },
  { name: "Properties", path: "/properties" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav className={`navbar-premium fixed top-0 left-0 w-full z-30 ${scrolled ? "scrolled" : ""}`}>
      <div className="container-premium navbar-inner">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="logo-badge">
            <Home size={19} color="#fff" strokeWidth={2.2} />
          </div>
          <span className="logo-text">
            Estate<span> Haven</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-links ">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
              >
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA - desktop only */}
        {/* Favorites + CTA - desktop only */}
<div className="hidden md:flex items-center gap-3 shrink-0">
  <Link to="/favorites" className="nav-favorite-btn">
    <Heart size={19} color="#0f172a" />
    {favorites.length > 0 && <span className="nav-favorite-badge">{favorites.length}</span>}
  </Link>

  <Link to="/contact" className="nav-tour-link">
    <Button variant="solid">
      Book a Tour
      <ArrowUpRight size={16} strokeWidth={2.2} />
    </Button>
  </Link>
</div>

        {/* Mobile toggle button */}
      {/* <button
  className="mobile-toggle-btn"
  onClick={() => setMobileOpen(!mobileOpen)}
  aria-label="Toggle menu"
>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button> */}
        {/* Mobile: favorites + toggle button */}
<div className="mobile-actions">
  <Link to="/favorites" className="nav-favorite-btn">
    <Heart size={19} color="#0f172a" />
    {favorites.length > 0 && <span className="nav-favorite-badge">{favorites.length}</span>}
  </Link>

  <button
    className="mobile-toggle-btn"
    onClick={() => setMobileOpen(!mobileOpen)}
    aria-label="Toggle menu"
  >
    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
  </button>
</div>
      </div>

      
      <div className={`mobile-menu-panel ${mobileOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`mobile-nav-link ${location.pathname === link.path ? "active" : ""}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="mobile-cta-wrap">
          <Button variant="solid" style={{ width: "100%" }}>
            Book a Tour
            <ArrowUpRight size={16} strokeWidth={2.2} />
          </Button>
        </Link>
      </div> 
    </nav>
  );
}

export default Navbar;