import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { allProjects, categories } from '../data/projects';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  const filtered =
    activeFilter === 'All'
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="app-wrapper">
      <div className="projects-page-content">
        {/* ── Page Hero ─────────────────────────── */}
        <section className="projects-hero">
          <div className={`projects-hero-inner ${visible ? 'visible' : ''}`}>
            <span className="section-label">Our Portfolio</span>
            <h1 className="display-large projects-hero-title">
              Every project,<br />
              <em>a masterpiece.</em>
            </h1>
            <p className="body-large projects-hero-sub">
              Browse our full collection of completed works — each one a
              testament to precision, craft, and timeless design.
            </p>
          </div>
        </section>

        {/* ── Projects Grid ─────────────────────── */}
        <section className="projects-main-section">
          <div className="container">

            {/* Filter Bar */}
            <div className="pg-filters" role="tablist" aria-label="Filter projects by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeFilter === cat}
                  className={`pg-filter-btn caption ${activeFilter === cat ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                  <span className="pg-filter-count">
                    {cat === 'All'
                      ? allProjects.length
                      : allProjects.filter((p) => p.category === cat).length}
                  </span>
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="pg-grid">
              {filtered.map((project, i) => (
                <article
                  key={project.id}
                  className="pg-card"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="pg-card-img-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="pg-card-img"
                      loading="lazy"
                    />
                    <div className="pg-card-overlay">
                      <span className="pg-card-cat caption">{project.category}</span>
                    </div>
                  </div>
                  <div className="pg-card-body">
                    <div className="pg-card-meta">
                      <span className="pg-card-year caption">{project.year}</span>
                      <span className="pg-card-area caption">{project.area}</span>
                    </div>
                    <h2 className="pg-card-title heading-2">{project.title}</h2>
                    <p className="pg-card-location body-small">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {project.location}
                    </p>
                    <p className="pg-card-desc body-small">{project.description}</p>
                    <div className="pg-card-divider" />
                    <button className="pg-card-link caption" aria-label={`View details for ${project.title}`}>
                      View Project
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Back CTA */}
            <div className="pg-back-row">
              <button className="btn-outline pg-back-btn" onClick={() => navigate('/')}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                Back to Home
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;
