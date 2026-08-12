import React, { useEffect, useRef } from 'react';
import './Hero.css';
import heroBg from '../assets/enhanced.png';



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

      {/* Vertical Right Element */}
      <div className="hero-vertical-accent">
        <span className="caption">EST. 1995</span>
        <span className="vertical-line"></span>
      </div>

      <div className="container hero-content">
        <div className="hero-text-block">
          <h1 className="hero-title display-large">
            Where Excellence <br />
            Has An <em>Address,</em> <br />
            And Every Detail Matters.
          </h1>
          <p className="hero-subtitle body-large">
            Crafting timeless spaces that redefine modern living.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary" id="hero-portfolio-btn">
              View Portfolio
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Trust Signal */}
      <div className="hero-trust-signal">
        <span className="trust-line"></span>
        <span className="caption">31+ YEARS OF EXCELLENCE</span>
      </div>

      {/* Centered Scroll Hint */}
      <div className="scroll-indicator" aria-hidden="true">
        <span className="caption" style={{ letterSpacing: '2px', opacity: 0.6 }}>SCROLL</span>
        <div className="scroll-hint">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
