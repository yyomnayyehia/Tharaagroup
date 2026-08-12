import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectGallery.css';
import { allProjects, categories } from '../data/projects';

// Show 9 items on the homepage grid
const PREVIEW_COUNT = 9;

const ProjectGallery = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const navigate = useNavigate();

  const filtered =
    activeFilter === 'ALL'
      ? allProjects.slice(0, PREVIEW_COUNT)
      : allProjects.filter((p) => p.category === activeFilter).slice(0, PREVIEW_COUNT);

  return (
    <section id="projects" className="section gallery-section">
      <div className="container">
        <div className="gallery-header">
          <span className="section-label">Our Work</span>
          <h2 className="heading-1 section-title" style={{ textAlign: 'left', marginBottom: 0 }}>
            Selected Works
          </h2>
          <div className="gold-divider left"></div>
        </div>

        {/* Filter Tabs */}
        <div className="gallery-filters" role="tablist" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeFilter === cat}
              className={`filter-btn caption ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="gallery-grid">
          {filtered.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-img-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="project-overlay-inner">
                    <span className="project-category caption">{project.category}</span>
                    <h3 className="project-title heading-2">{project.title}</h3>
                    <p className="project-location body-small">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="gallery-footer">
          <button
            className="btn-outline"
            id="view-all-projects-btn"
            onClick={() => navigate('/projects')}
          >
            View All Projects
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
