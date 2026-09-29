import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "The entire process felt simple and well managed. They understood exactly what we were looking for and never pushed us toward something that wasn't right.",
    name: "Ayesha Khan",
    role: "Homeowner, DHA Lahore",
    initials: "AK",
  },
  {
    text: "From the first viewing to closing, everything was handled with real professionalism. I'd recommend them to anyone serious about buying property.",
    name: "Bilal Ahmed",
    role: "Investor, Gulberg",
    initials: "BA",
  },
  {
    text: "Great local knowledge and honest advice. They found us a home that matched our budget and lifestyle without wasting our time.",
    name: "Fatima Raza",
    role: "Homeowner, Bahria Town",
    initials: "FR",
  },
];

function Testimonials() {
  return (
    <section className="section-padding testimonials-section">
      <div className="testimonials-glow" />
      <div className="container-premium" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-heading">
          <span className="section-tag" style={{ color: "rgba(255,255,255,0.5)" }}>
            Testimonials
          </span>
          <h2 className="section-title" style={{ color: "#ffffff" }}>
            What Our Clients Say
          </h2>
          <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.55)" }}>
            Real experiences from people who found their home with us.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="testimonial-quote-icon">
                <Quote size={20} color="#0f172a" fill="#0f172a" />
              </div>

              <p className="testimonial-text">{t.text}</p>

              <div className="testimonial-author">
                <div className="author-avatar">{t.initials}</div>
                <div>
                  <p className="author-name">{t.name}</p>
                  <p className="author-role">{t.role}</p>
                </div>
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;