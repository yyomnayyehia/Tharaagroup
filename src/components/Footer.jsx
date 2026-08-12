import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoImg from '../assets/logo.png';

const Footer = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    // Simulate async submit
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 1200);
  };

  return (
    <>
      {/* ── Contact Section ─────────────────────── */}
      <section id="contact" className="contact-section">
        <div className="container contact-grid">
          {/* Left Info */}
          <div className="contact-info">
            <span className="section-label">Get in Touch</span>
            <h2 className="heading-1 contact-title">Let's Build Something Extraordinary</h2>
            <div className="gold-divider left"></div>
            <p className="body-regular contact-desc">
              Whether you have a project in mind or simply want to explore possibilities, our team is ready to listen and collaborate.
            </p>

            <ul className="contact-details">
              <li className="contact-detail-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div>
                  <p className="detail-label caption">Our Office</p>
                  <p className="body-regular">18 Zaki Ragab , Smouha, Alexandria, Egypt</p>
                </div>
              </li>
              <li className="contact-detail-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.49 2 2 0 0 1 3.62 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.06 6.06l.87-.87a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <div>
                  <p className="detail-label caption">Phone</p>
                  <p className="body-regular">+20 1145003800</p>
                </div>
              </li>
              <li className="contact-detail-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <div>
                  <p className="detail-label caption">Email</p>
                  <p className="body-regular">tharaagroup@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Form */}
          <div className="contact-form-col">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label caption">Full Name *</label>
                  <input
                    id="contact-name" name="name" type="text" required
                    value={form.name} onChange={handleChange}
                    className="form-input" placeholder="John Smith"
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label caption">Email Address *</label>
                  <input
                    id="contact-email" name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    className="form-input" placeholder="john@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contact-phone" className="form-label caption">Phone Number</label>
                <input
                  id="contact-phone" name="phone" type="tel"
                  value={form.phone} onChange={handleChange}
                  className="form-input" placeholder="+20 1234567890"
                  autoComplete="tel"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message" className="form-label caption">Message *</label>
                <textarea
                  id="contact-message" name="message" rows="5" required
                  value={form.message} onChange={handleChange}
                  className="form-input form-textarea"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="btn-primary form-submit"
                disabled={status === 'sending' || status === 'sent'}
                id="contact-submit-btn"
              >
                {status === 'sending' ? 'Sending…'
                  : status === 'sent' ? '✓ Message Sent!'
                    : 'Send Message'}
              </button>
              {status === 'sent' && (
                <p className="form-success body-small">Thank you! We'll be in touch within 24 hours.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────── */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src={logoImg} alt="Tharaa Real Estate Logo" className="footer-logo" />
            <p className="body-regular footer-tagline">
              Redefining luxury architecture and interior design through innovation and timeless elegance.
            </p>
            <div className="footer-socials">
              {['Instagram', 'LinkedIn', 'X'].map(s => (
                <a key={s} href={`#${s.toLowerCase()}`} className="social-chip caption" aria-label={s}>{s}</a>
              ))}
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h3 className="footer-col-title caption">Company</h3>
              <ul>
                <li><a href="#about" className="body-small">About Us</a></li>
                <li><Link to="/projects" className="body-small">Our Portfolio</Link></li>
                <li><a href="#services" className="body-small">Services</a></li>
                <li><a href="#careers" className="body-small">Careers</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3 className="footer-col-title caption">Services</h3>
              <ul>
                <li><a href="#interior" className="body-small">Interior Design</a></li>
                <li><a href="#architecture" className="body-small">Architecture</a></li>

              </ul>
            </div>
            <div className="footer-col">
              <h3 className="footer-col-title caption">Contact</h3>
              <ul>
                <li className="body-small">tharaagroup@gmail.com</li>
                <li className="body-small">+20 1145003800</li>
                <li className="body-small">18 Zaki Ragab , Smouha, Alexandria, Egypt</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bar">
          <div className="container footer-bar-inner">
            <p className="caption">© {new Date().getFullYear()} Tharaa Real Estate. All rights reserved.</p>
            <div className="footer-bar-links">
              <a href="#privacy" className="caption">Privacy Policy</a>
              <a href="#terms" className="caption">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
