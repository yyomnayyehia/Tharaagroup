import React from 'react';
import './Process.css';

const Process = () => {
  const steps = [
    {
      id: 1,
      title: "Consultation & Planning",
      description: "Defining your vision, objectives, and outlining a strategic roadmap for success.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      )
    },
    {
      id: 2,
      title: "Design & Approval",
      description: "Developing comprehensive architectural designs and securing necessary permits.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "Construction & Dev",
      description: "Executing the build phase with precision, premium materials, and expert oversight.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      id: 4,
      title: "Quality Assurance",
      description: "Rigorous inspections to ensure every detail meets our uncompromising standards.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      )
    },
    {
      id: 5,
      title: "Handover & Support",
      description: "Delivering the finalized project along with dedicated post-completion support.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <path d="M9 16l2 2 4-4"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="process-section section">
      <div className="container">
        <div className="process-header text-center">
          <span className="section-label">Our Process</span>
          <h2 className="heading-1 section-title" style={{ marginBottom: 0 }}>How We Work</h2>
          <div className="gold-divider center" style={{ margin: 'var(--spacing-md) auto var(--spacing-md)' }}></div>
          <p className="body-large process-intro">
            A seamless journey from initial concept to extraordinary completion.
          </p>
        </div>

        <div className="process-timeline-container">
          <div className="process-timeline-line"></div>
          
          <div className="process-steps-grid">
            {steps.map((step) => (
              <div key={step.id} className="process-step">
                <div className="process-icon-wrapper">
                  {step.icon}
                </div>
                <div className="process-text-content">
                  <h3 className="heading-2 process-step-title">{step.title}</h3>
                  <p className="body-small process-step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
