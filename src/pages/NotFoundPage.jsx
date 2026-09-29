import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";

function NotFoundPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <div className="not-found-404">
        <p className="not-found-404-code">404</p>
        <h1 className="not-found-404-title">Page Not Found</h1>
        <p className="not-found-404-text">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="not-found-404-actions">
          <Link to="/">
            <Button variant="solid">
              <Home size={16} style={{ marginRight: "6px" }} />
              Back to Home
            </Button>
          </Link>
          <Link to="/properties">
            <Button variant="outline">
              Browse Properties
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default NotFoundPage;