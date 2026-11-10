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
  {
    text: "I was buying from abroad and was nervous, but the team kept me updated at every step. Documents, visits, negotiation, all handled smoothly.",
    name: "Usman Tariq",
    role: "Overseas Buyer, Islamabad",
    initials: "UT",
  },
  {
    text: "They negotiated a much better price than I expected and were completely transparent about every cost involved. Truly trustworthy.",
    name: "Sana Malik",
    role: "First-time Buyer, Johar Town",
    initials: "SM",
  },
  {
    text: "As an investor I need speed and accurate market insight. Estate Haven delivered both and helped me close two deals in one month.",
    name: "Hamza Siddiqui",
    role: "Investor, Clifton Karachi",
    initials: "HS",
  },
  {
    text: "Very polite and patient team. They showed us many options until we found the perfect house for our family.",
    name: "Nimra Aslam",
    role: "Homeowner, Model Town",
    initials: "NA",
  },
  {
    text: "Selling my property was stress free. They handled the listing, viewings and paperwork, and I got a great offer within weeks.",
    name: "Kamran Javed",
    role: "Seller, Satellite Town",
    initials: "KJ",
  },
  {
    text: "Honest advice even when it meant telling us to skip a property. That kind of integrity is rare in this business.",
    name: "Hina Farooq",
    role: "Homeowner, F-7 Islamabad",
    initials: "HF",
  },
  {
    text: "Professional from start to finish. The legal verification support gave us complete peace of mind before we signed.",
    name: "Zain Abbas",
    role: "Business Owner, Johar Town",
    initials: "ZA",
  },
  {
    text: "They understood our budget and never pressured us. We moved into our new home sooner than we thought possible.",
    name: "Maryam Iqbal",
    role: "Homeowner, Askari 11",
    initials: "MI",
  },
  {
    text: "Excellent communication and quick responses on WhatsApp. Booking viewings was effortless, even with my busy schedule.",
    name: "Daniyal Shah",
    role: "Investor, DHA Phase 6",
    initials: "DS",
  },
];

// split into 3 columns (4 testimonials each)
const columns = [
  testimonials.slice(0, 4),
  testimonials.slice(4, 8),
  testimonials.slice(8, 12),
];

function TestimonialCard({ t }) {
  return (
    <div className="testimonial-card">
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
  );
}

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

        <div className="testimonial-marquee">
          {columns.map((col, colIndex) => (
            <div
              key={colIndex}
              className={`testimonial-column col-${colIndex + 1}`}
            >
              {/* list is rendered twice for a seamless infinite loop */}
              <div
                className={`testimonial-track ${
                  colIndex === 1 ? "reverse" : ""
                }`}
              >
                {[...col, ...col].map((t, i) => (
                  <TestimonialCard key={`${t.name}-${i}`} t={t} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;