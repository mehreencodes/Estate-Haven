import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  BedDouble, Bath, Ruler, MapPin, Phone, ArrowLeft,
  Wifi, Car, ShieldCheck, Trees, Dumbbell, Waves,
  Calendar, Building2, Compass, Flame, CheckCircle2,
  MessageCircle,
} from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import PropertyCardAlt from "../components/properties/PropertyCardAlt";
import properties from "../data/properties";
import LoanCalculator from "../components/properties/LoanCalculator";
import { useRecentlyViewed } from "../hooks/useRecentlyViewed";
import StatusBadge from "../components/properties/StatusBadge";
import { submitForm } from "../utils/submitForm";


const amenities = [
  { icon: Wifi, label: "High-Speed Internet" },
  { icon: Car, label: "Covered Parking" },
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: Trees, label: "Garden Area" },
  { icon: Dumbbell, label: "Gym Access" },
  { icon: Waves, label: "Swimming Pool" },
];

function PropertyDetailsPage() {
  const { id } = useParams();
  const [inquiryData, setInquiryData] = useState({ name: "", phone: "", message: "" });
    const [inquirySent, setInquirySent] = useState(false);
const [sending, setSending] = useState(false);
const [sendError, setSendError] = useState("");

const handleInquiryChange = (e) => {
  const { name, value } = e.target;
  setInquiryData((prev) => ({ ...prev, [name]: value }));
};

// const handleRequestViewing = () => {
//   if (!inquiryData.name.trim() || !inquiryData.phone.trim()) {
//     alert("Please enter your name and phone number.");
//     return;
//   }
//   setInquirySent(true);
// };

const handleRequestViewing = async () => {
  if (sending) return;

  if (!inquiryData.name.trim() || !inquiryData.phone.trim()) {
    setSendError("Please enter your name and phone number.");
    return;
  }
  if (inquiryData.phone.replace(/\D/g, "").length < 10) {
    setSendError("Please enter a valid phone number.");
    return;
  }

  setSending(true);
  setSendError("");
  try {
    await submitForm({
      form: "Property viewing request",
      property: `${property.name} (ID ${property.id})`,
      name: inquiryData.name,
      phone: inquiryData.phone,
      message: inquiryData.message,
    });
    setInquirySent(true);
  } catch {
    setSendError("Something went wrong. Please try again or call the agent.");
  } finally {
    setSending(false);
  }
};


const property = properties.find((p) => p.id === parseInt(id));

const whatsappShareUrl = property
  ? `https://wa.me/?text=${encodeURIComponent(
      `Check out this property: ${property.name} — ${property.price}\n${property.location}\n${window.location.href}`
    )}`
  : "";
const { addViewed } = useRecentlyViewed();

useEffect(() => {
  if (property) addViewed(property.id);
}, [property?.id]);
  if (!property) {
    return (
      <div className="relative min-h-screen">
        <Navbar />
        <div className="not-found">
          <h2 className="section-title">Property Not Found</h2>
          <p className="section-subtitle" style={{ marginBottom: "24px" }}>
            The property you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/properties">
            <Button variant="solid">Back to Properties</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
const isSold = property.status === "Sold";
  const similarProperties = properties
    .filter((p) => p.category === property.category && p.id !== property.id)
    .slice(0, 3);

  return (
    <div className="relative min-h-screen">
      <Navbar />

      <div style={{ paddingTop: "80px", position: "relative" }}>
        <Link to="/properties" className="back-btn">
          <ArrowLeft size={16} />
          Back to Properties
        </Link>
        <img src={property.image} alt={property.name} className="detail-hero-image" />
      </div>

      <div className="container-premium">
        <div className="detail-layout">
          <div>
            {/* Main info card */}
            <div className="detail-card">
              <div className="detail-title-row">
                <h1 className="detail-title">{property.name}</h1>
             <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
  <p className="detail-price">{property.price}</p>
  <StatusBadge status={property.status} showAvailable />
</div>
              </div>

              <p className="detail-location">
                <MapPin size={15} />
                {property.location}
              </p>

              <div className="detail-meta-grid">
                <div className="detail-meta-item">
                  <p className="detail-meta-value"><BedDouble size={18} /> {property.beds}</p>
                  <p className="detail-meta-label">Bedrooms</p>
                </div>
                <div className="detail-meta-item">
                  <p className="detail-meta-value"><Bath size={18} /> {property.baths}</p>
                  <p className="detail-meta-label">Bathrooms</p>
                </div>
                <div className="detail-meta-item">
                  <p className="detail-meta-value"><Ruler size={18} /></p>
                  <p className="detail-meta-label">{property.area}</p>
                </div>
              </div>

              <h3 className="detail-desc-title">About This Property</h3>
              <p className="detail-desc-text">
                This stunning {property.category.toLowerCase()} offers {property.beds} spacious bedrooms and{" "}
                {property.baths} modern bathrooms across {property.area} of thoughtfully designed living space.
                Located in {property.location}, it combines comfort, style and convenience — ideal for families
                looking for a home that truly fits their lifestyle.
              </p>
              <p className="detail-desc-text">
                Every detail has been considered, from natural light to functional layout, making this a rare
                find in today's market. The property is move-in ready and available for immediate viewing.
              </p>

              {/* Key facts */}
              <h3 className="detail-desc-title" style={{ marginTop: "28px" }}>Key Facts</h3>
              <div className="key-facts-grid">
                <div className="key-fact-item">
                  <p className="key-fact-label">Year Built</p>
                  <p className="key-fact-value"><Calendar size={13} style={{ display: "inline", marginRight: "4px" }} /> 2021</p>
                </div>
                <div className="key-fact-item">
                  <p className="key-fact-label">Property Type</p>
                  <p className="key-fact-value"><Building2 size={13} style={{ display: "inline", marginRight: "4px" }} /> {property.category}</p>
                </div>
                <div className="key-fact-item">
                  <p className="key-fact-label">Facing</p>
                  <p className="key-fact-value"><Compass size={13} style={{ display: "inline", marginRight: "4px" }} /> East</p>
                </div>
                <div className="key-fact-item">
                  <p className="key-fact-label">Heating</p>
                  <p className="key-fact-value"><Flame size={13} style={{ display: "inline", marginRight: "4px" }} /> Central</p>
                </div>
              </div>

              {/* Amenities */}
              <h3 className="detail-desc-title" style={{ marginTop: "28px" }}>Amenities</h3>
              <div className="amenities-grid">
                {amenities.map((a) => (
                  <div key={a.label} className="amenity-item">
                    <a.icon size={16} color="#0f172a" />
                    {a.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
           <div className="sidebar-card">
  <div className="sidebar-agent">
    <div className="logo-badge" style={{ width: "50px", height: "50px" }}>
      SA
    </div>
    <div>
      <p className="sidebar-agent-name">Sarah Ahmed</p>
      <p className="sidebar-agent-role">Luxury Property Consultant</p>
    </div>
  </div>
 
<LoanCalculator propertyPrice={property.price} />

  {isSold ? (
    <div className="sold-notice">
      <p className="sold-notice-title">This property has been sold</p>
      <p className="sold-notice-text">
        Browse similar listings below, or talk to our agent about upcoming properties.
      </p>
      <Link to="/properties" style={{ textDecoration: "none" }}>
        <Button variant="solid" style={{ width: "100%" }}>Browse Properties</Button>
      </Link>
    </div>
  ) : inquirySent ? (
    <div style={{ textAlign: "center", padding: "20px 0" }}>
      <CheckCircle2 size={36} color="#16a34a" style={{ margin: "0 auto 12px" }} />
      <p style={{ fontSize: "14.5px", fontWeight: 700, color: "#0f172a", marginBottom: "6px" }}>
        Request Sent!
      </p>
      <p style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.6" }}>
        Sarah will contact you shortly to schedule your viewing.
      </p>
    </div>
  ) : (
    <>
      <div className="sidebar-mini-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="sidebar-mini-input"
          value={inquiryData.name}
          onChange={handleInquiryChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="sidebar-mini-input"
          value={inquiryData.phone}
          onChange={handleInquiryChange}
        />
        <textarea
          name="message"
          placeholder={`I'm interested in ${property.name}...`}
          rows="3"
          className="sidebar-mini-input textarea"
          value={inquiryData.message}
          onChange={handleInquiryChange}
        />
      </div>

      {sendError && (
        <p style={{ fontSize: "12.5px", color: "#ef4444", marginBottom: "10px", fontWeight: 500 }}>
          {sendError}
        </p>
      )}

      <Button variant="solid" style={{ width: "100%", marginBottom: "10px" }} onClick={handleRequestViewing}>
        {sending ? "Sending..." : "Request a Viewing"}
      </Button>


      <a href="tel:+923001234567" style={{ textDecoration: "none", display: "block" }}>
        <Button variant="outline" style={{ width: "100%" }}>
          <Phone size={15} style={{ marginRight: "6px", display: "inline" }} />
          Call Agent
        </Button>
      </a>

            <a
        href={whatsappShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", display: "block", marginTop: "10px" }}
      >
       
        <Button variant="outline" style={{ width: "100%" }}>
          <MessageCircle size={15} style={{ marginRight: "6px", display: "inline" }} color="#25D366" />
          Share on WhatsApp
        </Button>
      </a>

      <p className="sidebar-safety-note">
        We respect your privacy. Your details are only shared with our verified agent.
      </p>
    </>
  )}
</div>
          </div>
        </div>
      </div>

      {/* Similar Properties */}
      {similarProperties.length > 0 && (
        <section className="similar-properties-section">
          <div className="container-premium">
            <div className="section-heading">
              <span className="section-tag">You May Also Like</span>
              <h2 className="section-title">Similar Properties</h2>
              <p className="section-subtitle">
                More {property.category.toLowerCase()} listings that match your interest.
              </p>
            </div>

            <div className="property-grid">
              {similarProperties.map((p) => (
                <PropertyCardAlt key={p.id} property={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

export default PropertyDetailsPage;