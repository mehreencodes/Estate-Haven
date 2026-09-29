import { Home } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-premium">
        <div className="footer-top">
          <div>
            <div className="footer-logo">
              <div className="logo-badge">
                <Home size={19} color="#fff" strokeWidth={2.2} />
              </div>
              <span className="footer-logo-text">Estate Haven</span>
            </div>
            <p className="footer-desc">
              Helping you find a place worth coming home to — exceptional properties, carefully selected for the way you want to live.
            </p>
            <div className="footer-social">
              <div className="footer-social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z"/></svg>
              </div>
              <div className="footer-social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.5.5.7.3 1.2.6 1.7 1.1.5.5.9 1 1.1 1.7.3.7.4 1.4.5 2.5.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.5 2.5-.3.7-.6 1.2-1.1 1.7-.5.5-1 .9-1.7 1.1-.7.3-1.4.4-2.5.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.5-.5-.7-.3-1.2-.6-1.7-1.1-.5-.5-.9-1-1.1-1.7-.3-.7-.4-1.4-.5-2.5C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1.1.2-1.8.5-2.5.3-.7.6-1.2 1.1-1.7.5-.5 1-.9 1.7-1.1.7-.3 1.4-.4 2.5-.5C8.9 2 9.3 2 12 2Zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 8.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM17.5 6.5a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z"/></svg>
              </div>
              <div className="footer-social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.7a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.3 4a4.1 4.1 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.9c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.2Z"/></svg>
              </div>
              <div className="footer-social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.8c0-1.4 0-3.1-1.9-3.1-1.9 0-2.2 1.5-2.2 3v5.9h-4V9Z"/></svg>
              </div>
            </div>
          </div>

        <div>
  <h4 className="footer-heading">Navigation</h4>
  <div className="footer-links">
    <Link to="/" className="footer-link">Home</Link>
    <Link to="/properties" className="footer-link">Properties</Link>
    <Link to="/about" className="footer-link">About</Link>
    <Link to="/contact" className="footer-link">Contact</Link>
  </div>
</div>

          <div>
            <h4 className="footer-heading">Categories</h4>
            <div className="footer-links">
              <span className="footer-link">Luxury Villas</span>
              <span className="footer-link">Modern Apartments</span>
              <span className="footer-link">Commercial Spaces</span>
              <span className="footer-link">Plots & Land</span>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Stay Updated</h4>
            <p className="footer-desc" style={{ marginBottom: "14px" }}>
              Subscribe to get the latest listings and market insights.
            </p>
            <div className="newsletter-input-wrap">
              <input type="email" placeholder="Your email" className="newsletter-input" />
              <button className="newsletter-btn">Join</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 Estate Haven. All rights reserved.</p>
          <div className="footer-bottom-links">
            <span className="footer-bottom-link">Privacy Policy</span>
            <span className="footer-bottom-link">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;