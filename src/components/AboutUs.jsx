import React, { useState, useEffect } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Our Vision",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
      content: (
        <p className="body-regular">
          We look forward to expanding into advanced future businesses aligned with the state's vision for technology and eco-friendly alternative energy. We aim to create smart, sustainable urban communities and expand across new cities and coastal areas, particularly the North Coast.
        </p>
      )
    },
    {
      title: "Our Mission",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
        </svg>
      ),
      content: (
        <p className="body-regular">
          Our mission is to spread the true culture of quality within the general contracting field. We are dedicated to providing the best services at the most appropriate costs while keeping up with the latest global trends in planning and construction.
        </p>
      )
    },
    {
      title: "Our Goals",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      content: (
        <p className="body-regular">
          We strive to build long-term partnerships with our clients in Egypt and expand our activities to cover the entire country. We are deeply committed to adhering to execution timelines, supporting environmental sustainability, and achieving the highest levels of customer satisfaction.
        </p>
      )
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [tabs.length]);

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="about-header text-center">
          <span className="section-label">About Us</span>
          <h2 className="heading-1 section-title" style={{ marginBottom: 0 }}>About Tharaa Real Estate</h2>
          <div className="gold-divider center" style={{ margin: 'var(--spacing-md) auto var(--spacing-xl)' }}></div>
        </div>

        <div className="about-content">
          <div className="about-main-text">
            <p className="body-large">
              Established as a sole proprietorship in 1995, Tharaa Real Estate for Trade & Development officially transformed into a joint-stock company (S.A.E) in 2010. With over 31 years of continuous work and accumulated success in the real estate development sector, we have built a legacy of trust and excellence. We are proudly classified and registered with the Central Tenders Committee, enabling us to execute major governmental and private sector projects.
            </p>
          </div>

          {/* Slider containing Vision, Mission, Goals, and Quality */}
          <div className="about-slider-wrapper">
            <div className="about-slider-container">
              <div 
                className="about-slider-track" 
                style={{ transform: `translateX(-${activeTab * 100}%)` }}
              >
                {tabs.map((tab, idx) => (
                  <div key={idx} className="about-slide">
                    <div className="glass-panel about-card">
                      <div className="about-card-icon">
                        {tab.icon}
                      </div>
                      <h3 className="about-card-title heading-2">{tab.title}</h3>
                      {tab.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-slider-controls">
              {tabs.map((_, idx) => (
                <button
                  key={idx}
                  className={`slider-dot ${activeTab === idx ? 'active' : ''}`}
                  onClick={() => setActiveTab(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default AboutUs;
