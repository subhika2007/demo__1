import React from 'react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="custom-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="custom-modal-card p-4 p-md-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="d-flex align-items-start justify-content-between mb-4">
          <div>
            <div className="badge bg-primary bg-opacity-25 text-cyan border border-info border-opacity-25 px-3 py-1 mb-2">
              {project.badge || project.category}
            </div>
            <h2 className="h3 font-bold text-white mb-1">{project.title}</h2>
          </div>
          <button 
            type="button" 
            className="btn btn-sm text-secondary hover-text-white border-0 fs-4 p-0 ms-3"
            onClick={onClose}
            aria-label="Close modal"
          >
            <i className="bi bi-x-circle-fill"></i>
          </button>
        </div>

        {/* Detailed Description */}
        <p className="text-secondary mb-4 leading-relaxed" style={{ fontSize: '0.98rem' }}>
          {project.detailedDescription || project.description}
        </p>

        {/* Key Project Highlights */}
        {project.highlights && (
          <div className="mb-4 p-3 rounded-4 bg-dark bg-opacity-50 border border-secondary border-opacity-25">
            <h4 className="h6 text-white fw-bold mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-stars text-cyan"></i>
              <span>Key Architectural Highlights</span>
            </h4>
            <div className="row g-2">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="col-12 col-sm-6">
                  <div className="d-flex align-items-center gap-2 text-secondary small">
                    <i className="bi bi-check2 text-success"></i>
                    <span>{highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technology Stack */}
        <div className="mb-4">
          <h4 className="h6 text-white fw-bold mb-2">Technologies Used</h4>
          <div className="d-flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 pt-3 border-top border-secondary border-opacity-25">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-glow btn-sm"
          >
            <i className="bi bi-github"></i>
            <span>View Source on GitHub</span>
          </a>

          <div className="d-flex gap-2">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary text-secondary"
              onClick={onClose}
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                onClose();
                const contactEl = document.getElementById('contact');
                if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-gradient btn-sm"
            >
              <span>Inquire Similar Project</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
