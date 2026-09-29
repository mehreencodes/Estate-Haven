import { Gem, MapPinned, HeartHandshake } from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Gem,
    title: "Curated Properties",
    text: "We focus on properties that meet high standards of location, design and value — no listing makes the cut without careful vetting.",
  },
  {
    number: "02",
    icon: MapPinned,
    title: "Local Expertise",
    text: "Deep insight into neighborhoods, pricing trends and emerging opportunities, built from years of working the local market.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Personal Guidance",
    text: "From your first search to the final viewing, our team walks with you at every step — no pressure, just honest advice.",
  },
];

function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-premium">
        <div className="section-heading">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">Built on Trust and Expertise</h2>
          <p className="section-subtitle">
            We're not just listing properties — we're helping you find a place worth calling home.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => (
            <div key={reason.number} className="why-item">
              <div className="why-top-row">
                <div className="why-icon-box">
                  <reason.icon size={24} color="#ffffff" strokeWidth={1.8} />
                </div>
                <span className="why-number">{reason.number}</span>
              </div>
              <h3 className="why-title">{reason.title}</h3>
              <p className="why-text">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;