import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Plus } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import { submitForm } from "../utils/submitForm";

const contactDetails = [
  { icon: Phone, label: "Phone", value: "+92 300 1234567" },
  { icon: Mail, label: "Email", value: "hello@estatehaven.com" },
  { icon: MapPin, label: "Office", value: "123 Main Boulevard, DHA Phase 5\nLahore, Pakistan" },
  { icon: Clock, label: "Hours", value: "Mon – Sat, 9:00 AM – 7:00 PM" },
];

const faqs = [
  {
    q: "How quickly can I schedule a property viewing?",
    a: "Most viewings can be arranged within 24–48 hours of your request, depending on the property and agent availability.",
  },
  {
    q: "Do you charge a fee for buyers?",
    a: "No, our services are completely free for buyers. Our fee is paid by the seller upon successful closing.",
  },
  {
    q: "Can you help with properties outside Lahore?",
    a: "Currently we specialize in Lahore and surrounding areas, but we're expanding — reach out and we'll see how we can help.",
  },
  {
    q: "What documents do I need to start the process?",
    a: "A valid CNIC and proof of funds are typically enough to begin. Our team will guide you through anything else needed.",
  },
];

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSending(true);
    setSendError("");
    try {
      await submitForm({
        form: "Contact page",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });
      setSubmitted(true);
    } catch {
      setSendError("Something went wrong sending your message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      <Navbar />

      <section className="contact-hero">
        <div className="contact-hero-bg">
          <img
            src="https://i.pinimg.com/1200x/85/f4/c6/85f4c6cdc0c2fa327fb259f547d16680.jpg"
            alt="Contact"
          />
        </div>
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <p className="contact-hero-eyebrow">Get in Touch</p>
          <h1 className="contact-hero-title">
            Let's Talk. <span>We're Ready.</span>
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-premium">
          <div className="contact-split">
            {/* Left: dark info panel */}
            <div className="contact-panel-dark">
              <div className="contact-panel-glow" />

              <div>
                <p className="contact-panel-tag">Contact Details</p>

                <h2 className="contact-panel-title">We'd love to hear from you.</h2>
                <p className="contact-panel-desc">
                  Fill in the form and our team will get back to you within one business day.
                </p>
                <div className="contact-detail-list">
                  {contactDetails.map((item) => (
                    <div key={item.label} className="contact-detail-item">
                      <div className="contact-detail-icon">
                        <item.icon size={16} color="#d1b078" />
                      </div>
                      <div>
                        <p className="contact-detail-label">{item.label}</p>
                        <p className="contact-detail-value">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-social-row">
                <div className="contact-social-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.5.5.7.3 1.2.6 1.7 1.1.5.5.9 1 1.1 1.7.3.7.4 1.4.5 2.5.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.5 2.5-.3.7-.6 1.2-1.1 1.7-.5.5-1 .9-1.7 1.1-.7.3-1.4.4-2.5.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.5-.5-.7-.3-1.2-.6-1.7-1.1-.5-.5-.9-1-1.1-1.7-.3-.7-.4-1.4-.5-2.5C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1.1.2-1.8.5-2.5.3-.7.6-1.2 1.1-1.7.5-.5 1-.9 1.7-1.1.7-.3 1.4-.4 2.5-.5C8.9 2 9.3 2 12 2Zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 8.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM17.5 6.5a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" /></svg>
                </div>
                <div className="contact-social-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" /></svg>
                </div>
                <div className="contact-social-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.8c0-1.4 0-3.1-1.9-3.1-1.9 0-2.2 1.5-2.2 3v5.9h-4V9Z" /></svg>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="contact-panel-light">
              {submitted ? (
                <div className="form-success">
                  <div className="form-success-icon">
                    <CheckCircle2 size={32} color="#16a34a" />
                  </div>
                  <p className="form-success-title">Message Sent!</p>
                  <p className="form-success-text">
                    Thanks for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="contact-panel-light-heading">Send us a message</h3>
                  <p className="contact-panel-light-subtext">Fill in your details below and we'll be in touch shortly.</p>

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-row two-col">
                      <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="John Doe"
                          className={`form-input ${errors.name ? "error" : ""}`}
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && <p className="form-error-text">{errors.name}</p>}
                      </div>

                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+92 300 1234567"
                          className="form-input"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        className={`form-input ${errors.email ? "error" : ""}`}
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <p className="form-error-text">{errors.email}</p>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <textarea
                        name="message"
                        rows="5"
                        placeholder="Tell us what you're looking for..."
                        className={`form-input ${errors.message ? "error" : ""}`}
                        style={{ resize: "none" }}
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {errors.message && <p className="form-error-text">{errors.message}</p>}
                    </div>

                    {sendError && (
                      <p className="form-error-text" style={{ marginBottom: "14px" }}>
                        {sendError}
                      </p>
                    )}

                    <Button variant="solid" type="submit" style={{ width: "100%" }} disabled={sending}>
                      {sending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="faq-section">
        <div className="container-premium">
          <div className="faq-layout">
            <div>
              <span className="section-tag faq-side-tag">Common Questions</span>
              <h2 className="faq-side-title">Answers before you even ask.</h2>
              <p className="faq-side-text">
                Can't find what you're looking for? Send us a message and we'll get back to you personally.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${openFaq === index ? "open" : ""}`}>
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    <span className="faq-question-text">{faq.q}</span>
                    <span className="faq-icon">
                      <Plus size={14} color={openFaq === index ? "#0f172a" : "#64748b"} />
                    </span>
                  </button>
                  <div className="faq-answer">
                    <p className="faq-answer-text">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactPage;