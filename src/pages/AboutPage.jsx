import { Link } from "react-router-dom";
import { useState } from "react";
import { Target, Eye, HeartHandshake, Sparkles, X, Phone, Mail, Award } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
// import WhyChooseUs from "../components/home/WhyChooseUs";
import Button from "../components/ui/Button";

const stats = [
  { index: "01", number: "500+", label: "Properties Sold" },
  { index: "02", number: "15+", label: "Years of Experience" },
  { index: "03", number: "98%", label: "Client Satisfaction" },
  { index: "04", number: "24", label: "Expert Agents" },
];

const missionValues = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To make finding a home feel personal, transparent, and genuinely exciting — not stressful.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be the most trusted name in real estate across every neighborhood we serve.",
  },
  {
    icon: HeartHandshake,
    title: "Our Integrity",
    text: "Honest advice over quick sales. We recommend what's right for you, not our commission.",
  },
  {
    icon: Sparkles,
    title: "Our Standard",
    text: "Every listing is personally vetted for quality, location, and long-term value.",
  },
];

// Extended with bio/experience/specialties for the click-to-view modal.
// Replace the placeholder text, phone, and email with real details.
const team = [
  {
    name: "Sarah Ahmed",
    role: "Luxury Property Consultant",
    photo:
      "https://i.pinimg.com/736x/2c/84/01/2c840185326e28d262832f4ae13e5a1a.jpg",
    bio: "Sarah specializes in high-end residential properties across DHA and Bahria Town. With a sharp eye for detail and genuine care for client goals, she's helped families find homes that fit both their lifestyle and budget.",
    experience: "8+ Years",
    propertiesSold: "150+",
    specialties: ["Luxury Homes", "DHA & Bahria Town", "First-Time Buyers"],
    phone: "+92 300 1234567",
    email: "sarah.ahmed@estatehaven.pk",
  },
  {
    name: "Frwa Malik",
    role: "Senior Sales Agent",
    photo:
      "https://i.pinimg.com/1200x/00/5a/67/005a67ec098b15aed026498e71bc1d74.jpg",
    bio: "Frwa brings a data-driven approach to selling, combining local market knowledge with clear, honest communication. Clients trust him to negotiate fair deals without the usual sales pressure.",
    experience: "10+ Years",
    propertiesSold: "220+",
    specialties: ["Residential Sales", "Negotiation", "Gulberg & Model Town"],
    phone: "+92 300 2345678",
    email: "frwa.malik@estatehaven.pk",
  },
  {
    name: "Zara Sheikh",
    role: "Commercial Specialist",
    photo:
      "https://i.pinimg.com/736x/ef/97/25/ef972507d073f998e8091814528e86d1.jpg",
    bio: "Zara focuses exclusively on commercial real estate — offices, retail spaces, and mixed-use developments. She understands what businesses actually need from a location, not just square footage.",
    experience: "6+ Years",
    propertiesSold: "90+",
    specialties: ["Commercial Property", "Retail Spaces", "Investment Analysis"],
    phone: "+92 300 3456789",
    email: "zara.sheikh@estatehaven.pk",
  },
  {
    name: "Hareem Farooq",
    role: "Investment Advisor",
    photo:
      "https://i.pinimg.com/736x/17/f4/8a/17f48a686b59c357997d52d1380896f0.jpg",
    bio: "Hareem helps clients think beyond the purchase — rental yield, resale value, and long-term growth. His advice has guided both first-time investors and seasoned portfolio owners.",
    experience: "12+ Years",
    propertiesSold: "300+",
    specialties: ["Investment Strategy", "Rental Yield", "Portfolio Growth"],
    phone: "+92 300 4567890",
    email: "hareem.farooq@estatehaven.pk",
  },
];

function AboutPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />

  
      <section className="about-hero-v2">
  <div className="container-premium">
    <div className="about-hero-v2-layout">
      <div className="about-hero-v2-text-col">
  <p className="about-hero-v2-eyebrow">Meet Our Network</p>
  <h1 className="about-hero-v2-title">
    Backed by agents who know your neighborhood best.
  </h1>
</div>

      <div className="about-hero-marquee">
        <div className="marquee-row left">
          <img className="marquee-photo" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80" alt="" />
          <img className="marquee-photo" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&q=80" alt="" />
          <img className="marquee-photo" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80" alt="" />
          <img className="marquee-photo" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80" alt="" />
          <img className="marquee-photo" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80" alt="" />
          {/* duplicate for seamless loop */}
          <img className="marquee-photo" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80" alt="" />
          <img className="marquee-photo" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&q=80" alt="" />
          <img className="marquee-photo" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80" alt="" />
          <img className="marquee-photo" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80" alt="" />
          <img className="marquee-photo" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80" alt="" />
        </div>

        <div className="marquee-row right">
          <img className="marquee-photo" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80" alt="" />
          <img className="marquee-photo" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80" alt="" />
          <img className="marquee-photo" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80" alt="" />
          <img className="marquee-photo" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&q=80" alt="" />
          <img className="marquee-photo" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80" alt="" />
          {/* duplicate for seamless loop */}
          <img className="marquee-photo" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80" alt="" />
          <img className="marquee-photo" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80" alt="" />
          <img className="marquee-photo" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80" alt="" />
          <img className="marquee-photo" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&q=80" alt="" />
          <img className="marquee-photo" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="about-stats-section">
        <div className="container-premium">
          <div className="about-stats-grid">
            {stats.map((stat) => (
              <div className="about-stat" key={stat.label}>
                <span className="about-stat-index">{stat.index}</span>
                <span className="about-stat-number">{stat.number}</span>
                <div className="about-stat-underline" />
                <span className="about-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Story ===== */}
      <section className="about-story-section">
        <div className="container-premium">
          <div className="about-story-grid">
            <div className="about-story-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=90"
                alt="Luxury Estate Haven property"
                className="about-story-image"
              />
              <div className="about-story-badge">
                <span>15+</span>
                <small>Years of experience</small>
              </div>
            </div>

            <div className="about-story-content">
              <span className="section-tag">Our Story</span>
              <h2 className="about-story-title">
                Built on trust.
                <br />
                <span>Driven by people.</span>
              </h2>
              <p className="about-story-lead">
                Estate Haven started with a simple belief: finding the right
                property should feel personal, clear, and genuinely exciting.
              </p>
              <p className="about-story-text">
                What began as a small team of two agents in Lahore has grown
                into a trusted real estate team serving clients across the city.
                Our growth has always come through relationships, referrals, and
                the confidence our clients place in us.
              </p>
              <p className="about-story-text">
                From a first home to a long-term investment, we take the time to
                understand what matters to you before recommending a property.
                No unnecessary pressure. Just thoughtful guidance and spaces
                worth considering.
              </p>
              <div className="about-story-signature">
                <div className="signature-line" />
                <div>
                  <strong>Estate Haven</strong>
                  <span>Real Estate & Advisory</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Mission & Values ===== */}
      <section className="mission-section">
        <div className="container-premium">
          <div className="mission-header">
            <span className="section-tag">What Drives Us</span>
            <h2 className="mission-title">
              Guided by Purpose, <span>Not Just Property</span>
            </h2>
            <p className="mission-subtitle">
              Every decision we make comes back to one thing — doing right by
              the people we work with.
            </p>
          </div>

          <div className="mission-grid">
            {missionValues.map((item) => (
              <div key={item.title} className="mission-card">
                <div className="mission-icon-wrap">
                  <item.icon size={21} color="#d1b078" strokeWidth={1.8} />
                </div>
                <h3 className="mission-card-title">{item.title}</h3>
                <p className="mission-card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      {/* <WhyChooseUs /> */}

      {/* ===== Team ===== */}
      <section className="about-team-section">
        <div className="container-premium">
          <div className="about-team-heading">
            <span className="team-heading-number">04</span>
            <div>
              <span className="section-tag">Meet the Team</span>
              <h2 className="about-team-title">
                The people behind <span>Estate Haven</span>
              </h2>
              <p className="about-team-description">
                A dedicated team combining local market knowledge, experience,
                and a personal approach to every property journey.
              </p>
            </div>
          </div>

          <div className="team-grid">
            {team.map((member, index) => (
              <div
                className="team-card"
                key={member.name}
                onClick={() => setSelectedMember(member)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedMember(member)}
              >
                <div className="team-photo-wrap">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="team-photo"
                  />
                  <div className="team-index">0{index + 1}</div>
                </div>
                <div className="team-info">
                  <div>
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                  </div>
                  <span className="team-arrow">↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Team Member Detail Modal ===== */}
      {selectedMember && (
        <div
          className="team-modal-overlay"
          onClick={() => setSelectedMember(null)}
        >
          <div className="team-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="team-modal-close"
              onClick={() => setSelectedMember(null)}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="team-modal-image-wrap">
              <img
                src={selectedMember.photo}
                alt={selectedMember.name}
                className="team-modal-image"
              />
            </div>

            <div className="team-modal-info">
              <p className="team-modal-role">{selectedMember.role}</p>
              <h3 className="team-modal-name">{selectedMember.name}</h3>
              <p className="team-modal-bio">{selectedMember.bio}</p>

              <div className="team-modal-stats">
                <div className="team-modal-stat">
                  <Award size={15} />
                  <div>
                    <span className="team-modal-stat-value">
                      {selectedMember.experience}
                    </span>
                    <span className="team-modal-stat-label">Experience</span>
                  </div>
                </div>
                <div className="team-modal-stat">
                  <span className="team-modal-stat-value">
                    {selectedMember.propertiesSold}
                  </span>
                  <span className="team-modal-stat-label">
                    Properties Sold
                  </span>
                </div>
              </div>

              <div className="team-modal-specialties">
                {selectedMember.specialties.map((tag) => (
                  <span key={tag} className="team-modal-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="team-modal-contact">
                <a href={`tel:${selectedMember.phone}`} className="team-modal-contact-link">
                  <Phone size={14} />
                  {selectedMember.phone}
                </a>
                <a href={`mailto:${selectedMember.email}`} className="team-modal-contact-link">
                  <Mail size={14} />
                  {selectedMember.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== CTA ===== */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <div className="cta-section">
            <div className="cta-glow" />
            <h2 className="cta-title">Ready to Start Your Search?</h2>
            <p className="cta-subtitle">
              Let's find a property that fits your lifestyle. Reach out and our
              team will guide you every step of the way.
            </p>
            <div className="cta-btn-wrap">
              <Link to="/contact">
                <Button variant="solid" className="btn-light">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;