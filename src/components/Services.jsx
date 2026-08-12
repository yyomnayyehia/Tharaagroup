import React from 'react';
import './Services.css';
import serviceInterior from '../assets/service_interior.png';
import serviceArchitecture from '../assets/arch.png';

const services = [
  {
    id: '01',
    title: 'Interior Design',
    desc: 'Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space. An interior designer plans, researches, coordinates, and manages such projects with meticulous care.',
    image: serviceInterior,
    href: '#interior',
    align: 'image-left',
  },
  {
    id: '02',
    title: 'Architecture Design',
    desc: 'Architecture is both the process and the product of planning, designing, and constructing buildings. Architectural works, in the material form of buildings, are often perceived as cultural symbols and as works of art — blending function with timeless beauty.',
    image: serviceArchitecture,
    href: '#architecture',
    align: 'image-right',
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      {/* Section Header */}
      <div className="container services-header">
        <span className="section-label">What We Offer</span>
        <h2 className="heading-1 services-title">Our Services</h2>
        <div className="gold-divider"></div>
        <p className="body-large services-intro">
          From concept to completion, we deliver unparalleled craftsmanship across every discipline.
        </p>
      </div>

      {/* Service Rows */}
      {services.map((svc) => (
        <div key={svc.id} className={`service-row ${svc.align}`}>
          <div className="service-img-col">
            <div className="service-img-wrapper">
              <img src={svc.image} alt={svc.title} className="service-img" loading="lazy" />
              <div className="service-img-accent"></div>
            </div>
          </div>
          <div className="service-text-col">
            <div className="service-inner">
              <span className="service-number">{svc.id}</span>
              <h3 className="service-title heading-1">{svc.title.toUpperCase()}</h3>
              <div className="gold-divider left"></div>
              <p className="service-desc body-regular">{svc.desc}</p>
              <a href={svc.href} className="service-link" aria-label={`Learn more about ${svc.title}`}>
                Learn More
                <svg className="arrow-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
