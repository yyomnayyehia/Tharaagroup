import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import heroBg from '../assets/enhanced.webp';



const textStructure = [
  { text: "Where Excellence ", type: 'normal' },
  { type: 'br' },
  { text: "Has An ", type: 'normal' },
  { text: "Address,", type: 'gold' },
  { type: 'br' },
  { text: "And Every Detail Matters.", type: 'normal' },
];

const tokens = [];
textStructure.forEach(segment => {
  if (segment.type === 'br') {
    tokens.push({ type: 'br', id: tokens.length });
  } else {
    for (let i = 0; i < segment.text.length; i++) {
      tokens.push({ char: segment.text[i], type: segment.type, id: tokens.length });
    }
  }
});

let hasPlayedThisSession = false;

const Hero = () => {
  const ref = useRef(null);
  const [typedCount, setTypedCount] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || hasPlayedThisSession) {
      setSkipAnimation(true);
      setIsTypingDone(true);
      setTypedCount(tokens.length);
      return;
    }

    // Start typing animation
    let currentCount = 0;
    const interval = setInterval(() => {
      currentCount++;
      setTypedCount(currentCount);
      if (currentCount >= tokens.length) {
        clearInterval(interval);
        setIsTypingDone(true);
        hasPlayedThisSession = true;
      }
    }, 65); // Slower typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="hero" style={{ backgroundImage: `url(${heroBg})` }} aria-label="Hero Section">
      <div className="hero-overlay"></div>

      {/* Vertical Right Element */}
      <div className="hero-vertical-accent">
        <span className="caption">EST. 1995</span>
        <span className="vertical-line"></span>
      </div>

      <div className={`container hero-content ${isTypingDone ? 'hero-typing-done' : ''}`}>
        <div className="hero-text-block">
          <h1 className="hero-title display-large" style={{ position: 'relative' }}>
            {/* Hidden text to reserve full layout space */}
            <span style={{ visibility: 'hidden' }} aria-hidden="true">
              Where Excellence <br />
              Has An <em>Address,</em> <br />
              And Every Detail Matters.
            </span>

            {/* Typing text overlaid */}
            <span className="typewriter-overlay" aria-hidden="true">
              {tokens.slice(0, typedCount).map(token => {
                if (token.type === 'br') return <br key={token.id} />;
                if (token.type === 'gold') return <em key={token.id}>{token.char}</em>;
                return <span key={token.id}>{token.char}</span>;
              })}
              {!isTypingDone && !skipAnimation && <span className="typewriter-cursor">|</span>}
            </span>

            {/* Screen reader only text */}
            <span className="sr-only">Where Excellence Has An Address, And Every Detail Matters.</span>
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
