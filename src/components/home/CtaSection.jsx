import Button from "../ui/Button";
import { Link } from "react-router-dom";

function CtaSection() {
  return (
 <section className="section-padding bg-white">
  <div className="container-premium">
    <div className="cta-section">
      <div className="cta-glow" />
      <h2 className="cta-title">Ready to Find Your Next Property?</h2>
      <p className="cta-subtitle">
        Let's find a property that fits your lifestyle. Our team is ready to guide you every step of the way.
      </p>
      <div className="cta-btn-wrap">
        <Link to="/contact">
          <Button variant="solid" className="btn-light">
            Schedule a Viewing
          </Button>
        </Link>
      </div>
    </div>
  </div>
</section>
  );
}

export default CtaSection;