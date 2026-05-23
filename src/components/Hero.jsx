import React, { useEffect, useRef } from 'react';
import './Hero.css';
import heroBg from '../assets/hero_bg.png';

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '12+', label: 'Years of Excellence' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '35+', label: 'Awards Won' },
];

const Hero = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timeout = setTimeout(() => el.classList.add('hero-loaded'), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section ref={ref} className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div>

      {/* Breadcrumb */}
      <div className="hero-breadcrumb container">
        <span className="caption" style={{ color: 'rgba(255,255,255,0.5)' }}>HOME / REAL ESTATE</span>
      </div>

      <div className="container hero-content">
        <div className="hero-text-block">
          <span className="hero-label caption">Luxury Real Estate Development</span>
          <h1 className="hero-title display-large">
            Where Excellence <br />
            Has An <em>Address,</em> <br />
            And Investment Is Secure.
          </h1>
          <p className="hero-subtitle body-large">
            Tharaa crafts timeless, luxurious spaces that redefine modern living — blending artistry with precision engineering.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary" id="hero-portfolio-btn">
              View Portfolio
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="#contact" className="btn-secondary" id="hero-contact-btn">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="hero-stats">
        <div className="container hero-stats-inner">
          {stats.map((stat, i) => (
            <div key={i} className="hero-stat">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label caption">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="scroll-hint" aria-hidden="true">
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
};

export default Hero;
