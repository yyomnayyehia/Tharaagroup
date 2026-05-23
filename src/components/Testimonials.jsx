import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Homeowner',
    initials: 'SJ',
    rating: 5,
    text: 'Tharaa Development transformed our vision into a breathtaking reality. Their attention to detail and commitment to quality is unmatched. The gold accents in our living space are simply divine.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Real Estate Investor',
    initials: 'MC',
    rating: 5,
    text: 'Working with Tharaa on the Lumina Villa project was a seamless experience. Their architectural prowess resulted in a property that stands out in the market. Highly recommended.',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Boutique Hotel Owner',
    initials: 'ER',
    rating: 5,
    text: 'From concept to completion, the team demonstrated exceptional professionalism. The dark blue and gold aesthetic they proposed perfectly captured the luxury vibe we wanted.',
  },
];

const Stars = ({ count }) => (
  <div className="stars" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive(a => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive(a => (a + 1) % testimonials.length);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        {/* Header */}
        <div className="testimonials-header">
          <span className="section-label">What Clients Say</span>
          <h2 className="heading-1 testimonials-title">Client Voices</h2>
          <div className="gold-divider"></div>
        </div>

        {/* Carousel */}
        <div className="testimonials-carousel">
          <div className="testimonials-track" style={{ transform: `translateX(-${active * 100}%)` }}>
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-slide">
                <div className="testimonial-card glass-panel">
                  <div className="card-top">
                    <svg className="quote-svg" width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                    </svg>
                    <Stars count={t.rating} />
                  </div>
                  <p className="testimonial-text body-large">"{t.text}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar" aria-hidden="true">{t.initials}</div>
                    <div className="author-info">
                      <span className="author-name">{t.name}</span>
                      <span className="author-role caption">{t.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="carousel-controls">
          <button className="carousel-btn" onClick={prev} aria-label="Previous testimonial">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <div className="carousel-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button className="carousel-btn" onClick={next} aria-label="Next testimonial">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
