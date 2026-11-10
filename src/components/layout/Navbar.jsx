import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Menu, X, Heart, User, LogOut } from "lucide-react";
import { useFavorites } from "../../context/FavoritesContext";
import { useAuth } from "../../context/AuthContext";
import "../auth/auth.css";

function UserMenu() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const initial = (user.displayName || user.email || "U")[0].toUpperCase();

  return (
    <div className="user-menu" ref={ref}>
      <button
        className="user-avatar"
        onClick={() => setOpen((o) => !o)}
        aria-label="Account menu"
      >
        {user.photoURL ? (
          <img src={user.photoURL} alt="" referrerPolicy="no-referrer" />
        ) : (
          initial
        )}
      </button>

      {open && (
        <div className="user-dropdown">
          <div className="user-dropdown-head">
            <p className="user-name">{user.displayName || "My Account"}</p>
            <p className="user-email">{user.email}</p>
          </div>
          <button
            className="user-dropdown-item"
            onClick={() => {
              logout();
              setOpen(false);
            }}
          >
            <LogOut size={16} /> Log out
          </button>
        </div>
      )}
    </div>
  );
}

function Navbar() {
  const { favorites } = useFavorites();
  const { user, openAuth } = useAuth();
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
    return () => {
      document.body.style.overflow = "";
    };
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

        {/* Favorites + Auth - desktop only */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link to="/favorites" className="nav-favorite-btn">
            <Heart size={19} color="#0f172a" />
            {favorites.length > 0 && (
              <span className="nav-favorite-badge">{favorites.length}</span>
            )}
          </Link>

          {user ? (
            <UserMenu />
          ) : (
            <button className="nav-auth-btn" onClick={() => openAuth("signup")}>
              <User size={17} strokeWidth={2.2} />
              Sign Up
            </button>
          )}
        </div>

        {/* Mobile: favorites + auth icon + toggle button */}
        <div className="mobile-actions">
          <Link to="/favorites" className="nav-favorite-btn">
            <Heart size={19} color="#0f172a" />
            {favorites.length > 0 && (
              <span className="nav-favorite-badge">{favorites.length}</span>
            )}
          </Link>

          {/* Auth icon only */}
          {user ? (
            <UserMenu />
          ) : (
            <button
              className="nav-auth-icon-btn"
              onClick={() => openAuth("signup")}
              aria-label="Sign up"
            >
              <User size={19} strokeWidth={2.2} />
            </button>
          )}

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
      </div>
    </nav>
  );
}

export default Navbar;