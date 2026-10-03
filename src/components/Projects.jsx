import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

// Mockup visuals for the 6 projects
const ProjectThumbnailVisual = ({ projectId, accentColor, title }) => {
  switch (projectId) {
    case 1: // Freelancer Hiring Portal
      return (
        <div className="w-100 h-100 p-3 d-flex flex-column justify-content-between position-relative" style={{ background: 'radial-gradient(circle at top right, rgba(0, 210, 255, 0.18), #090e1a)' }}>
          <div className="d-flex justify-content-between align-items-center">
            <span className="badge bg-dark border border-info border-opacity-50 text-cyan small">PORTAL v2.4</span>
            <div className="d-flex gap-1">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
          </div>
          <div className="rounded-3 p-2 bg-dark bg-opacity-75 border border-secondary border-opacity-25 my-auto">
            <div className="d-flex align-items-center gap-2 mb-2">
              <div className="rounded-circle bg-primary bg-opacity-25 p-2 text-cyan">
                <i className="bi bi-briefcase-fill"></i>
              </div>
              <div>
                <div className="text-white fw-bold small">Senior Frontend Engineer</div>
                <div className="text-muted" style={{ fontSize: '0.68rem' }}>Client Contract • $85/hr</div>
              </div>
            </div>
            <div className="d-flex gap-1">
              <span className="badge bg-secondary bg-opacity-25 text-white" style={{ fontSize: '0.62rem' }}>React</span>
              <span className="badge bg-secondary bg-opacity-25 text-white" style={{ fontSize: '0.62rem' }}>Spring</span>
              <span className="badge bg-secondary bg-opacity-25 text-white" style={{ fontSize: '0.62rem' }}>Verified</span>
            </div>
          </div>
          <div className="d-flex justify-content-between text-muted small" style={{ fontSize: '0.7rem' }}>
            <span>Milestones: Active</span>
            <span className="text-success"><i className="bi bi-check-all"></i> Escrow Secure</span>
          </div>
        </div>
      );
    case 2: // E-Commerce Platform
      return (
        <div className="w-100 h-100 p-3 d-flex flex-column justify-content-between position-relative" style={{ background: 'radial-gradient(circle at top right, rgba(138, 43, 226, 0.22), #090e1a)' }}>
          <div className="d-flex justify-content-between align-items-center">
            <span className="badge bg-dark border border-purple border-opacity-50 text-light small" style={{ borderColor: '#8a2be2' }}>STOREFRONT</span>
            <span className="text-warning small"><i className="bi bi-star-fill"></i> 4.9 (128 reviews)</span>
          </div>
          <div className="rounded-3 p-2 bg-dark bg-opacity-75 border border-secondary border-opacity-25 my-auto">
            <div className="d-flex align-items-center justify-content-between mb-1">
              <div className="text-white fw-bold small">Minimalist Mechanical Keyboard</div>
              <div className="text-cyan fw-bold small">$149.00</div>
            </div>
            <div className="progress mb-2" style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
              <div className="progress-bar bg-info" style={{ width: '75%' }}></div>
            </div>
            <div className="d-flex justify-content-between text-muted" style={{ fontSize: '0.68rem' }}>
              <span>Stock: 8 units left</span>
              <span className="text-cyan"><i className="bi bi-cart3"></i> Fast Checkout</span>
            </div>
          </div>
          <div className="d-flex justify-content-between text-muted small" style={{ fontSize: '0.7rem' }}>
            <span>Stripe & MySQL Integrated</span>
            <span className="text-info">Instant Delivery</span>
          </div>
        </div>
      );
    case 3: // Task Management Application
      return (
        <div className="w-100 h-100 p-3 d-flex flex-column justify-content-between position-relative" style={{ background: 'radial-gradient(circle at top right, rgba(58, 123, 213, 0.2), #090e1a)' }}>
          <div className="d-flex justify-content-between align-items-center">
            <span className="badge bg-dark border border-primary border-opacity-50 text-cyan small">KANBAN BOARD</span>
            <span className="badge bg-success bg-opacity-25 text-success small">Sprint #14</span>
          </div>
          <div className="row g-2 my-auto">
            <div className="col-6">
              <div className="p-2 rounded bg-dark bg-opacity-75 border border-secondary border-opacity-25">
                <div className="text-warning fw-semibold mb-1" style={{ fontSize: '0.65rem' }}>IN PROGRESS</div>
                <div className="text-white small fw-bold text-truncate">Redesign Navigation</div>
                <div className="text-muted" style={{ fontSize: '0.62rem' }}>Due tomorrow</div>
              </div>
            </div>
            <div className="col-6">
              <div className="p-2 rounded bg-dark bg-opacity-75 border border-success border-opacity-25">
                <div className="text-success fw-semibold mb-1" style={{ fontSize: '0.65rem' }}>COMPLETED</div>
                <div className="text-white small fw-bold text-truncate">User Auth APIs</div>
                <div className="text-muted" style={{ fontSize: '0.62rem' }}>Approved</div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between text-muted small" style={{ fontSize: '0.7rem' }}>
            <span>Drag & Drop Enabled</span>
            <span className="text-cyan">Auto-Syncing</span>
          </div>
        </div>
      );
    case 4: // Portfolio Website
      return (
        <div className="w-100 h-100 p-3 d-flex flex-column justify-content-between position-relative" style={{ background: 'radial-gradient(circle at top right, rgba(0, 242, 254, 0.2), #090e1a)' }}>
          <div className="d-flex justify-content-between align-items-center">
            <span className="badge bg-dark border border-info border-opacity-50 text-cyan small">PORTFOLIO UI</span>
            <span className="text-white small font-monospace">&lt;Subhika /&gt;</span>
          </div>
          <div className="p-2 rounded-3 bg-dark bg-opacity-80 border border-secondary border-opacity-25 text-center my-auto">
            <div className="gradient-text fw-bold small mb-1">Modern Dark Glassmorphism</div>
            <div className="text-secondary" style={{ fontSize: '0.68rem' }}>100/100 Lighthouse Performance</div>
            <div className="mt-1 d-flex justify-content-center gap-1">
              <span className="badge bg-info bg-opacity-25 text-cyan" style={{ fontSize: '0.6rem' }}>Zero CLS</span>
              <span className="badge bg-purple bg-opacity-25 text-light" style={{ fontSize: '0.6rem' }}>Pure CSS</span>
            </div>
          </div>
          <div className="d-flex justify-content-between text-muted small" style={{ fontSize: '0.7rem' }}>
            <span>Responsive Layout</span>
            <span className="text-success"><i className="bi bi-shield-check"></i> High a11y</span>
          </div>
        </div>
      );
    case 5: // Employee Management System
      return (
        <div className="w-100 h-100 p-3 d-flex flex-column justify-content-between position-relative" style={{ background: 'radial-gradient(circle at top right, rgba(109, 179, 63, 0.2), #090e1a)' }}>
          <div className="d-flex justify-content-between align-items-center">
            <span className="badge bg-dark border border-success border-opacity-50 text-success small">HR DASHBOARD</span>
            <span className="badge bg-dark text-muted small">Total: 48 Staff</span>
          </div>
          <div className="p-2 rounded-3 bg-dark bg-opacity-75 border border-secondary border-opacity-25 my-auto">
            <div className="d-flex justify-content-between align-items-center pb-1 mb-1 border-bottom border-secondary border-opacity-25">
              <span className="text-white small fw-bold">Engineering Dept</span>
              <span className="badge bg-success bg-opacity-25 text-success" style={{ fontSize: '0.65rem' }}>Active</span>
            </div>
            <div className="d-flex justify-content-between text-muted" style={{ fontSize: '0.68rem' }}>
              <span>Payroll Status:</span>
              <span className="text-light">Processed</span>
            </div>
            <div className="d-flex justify-content-between text-muted" style={{ fontSize: '0.68rem' }}>
              <span>Attendance Rate:</span>
              <span className="text-success">98.4%</span>
            </div>
          </div>
          <div className="d-flex justify-content-between text-muted small" style={{ fontSize: '0.7rem' }}>
            <span>Spring Boot REST</span>
            <span className="text-light">MySQL Relational</span>
          </div>
        </div>
      );
    case 6: // Learning Management Platform
    default:
      return (
        <div className="w-100 h-100 p-3 d-flex flex-column justify-content-between position-relative" style={{ background: 'radial-gradient(circle at top right, rgba(248, 152, 32, 0.2), #090e1a)' }}>
          <div className="d-flex justify-content-between align-items-center">
            <span className="badge bg-dark border border-warning border-opacity-50 text-warning small">EDTECH LMS</span>
            <span className="text-cyan small"><i className="bi bi-play-circle-fill"></i> Lesson 08/12</span>
          </div>
          <div className="p-2 rounded-3 bg-dark bg-opacity-75 border border-secondary border-opacity-25 my-auto">
            <div className="text-white small fw-bold mb-1">Full Stack Architecture</div>
            <div className="progress mb-2" style={{ height: '5px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
              <div className="progress-bar bg-warning" style={{ width: '68%' }}></div>
            </div>
            <div className="d-flex justify-content-between text-muted" style={{ fontSize: '0.68rem' }}>
              <span>Progress: 68%</span>
              <span className="text-warning">Quiz Ready</span>
            </div>
          </div>
          <div className="d-flex justify-content-between text-muted small" style={{ fontSize: '0.7rem' }}>
            <span>Modular Video Player</span>
            <span className="text-warning">Certificate Issued</span>
          </div>
        </div>
      );
  }
};

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = ['All', 'Full Stack', 'Frontend'];

  const filteredProjects = projectsData.filter((item) => {
    if (filter === 'All') return true;
    return item.category === filter;
  });

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="section-badge">
            <span className="section-badge-dot"></span>
            <span>Featured Projects</span>
          </div>
          <h2 className="section-title">
            A Selection of <span className="gradient-text">Projects I've Built</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Explore recent web applications and platforms engineered with modern frontend interfaces, secure backend services, and high attention to design details.
          </p>

          {/* Filter Pills */}
          <div className="d-flex justify-content-center flex-wrap gap-2 mt-4">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                className={`filter-pill ${filter === opt ? 'active' : ''}`}
                onClick={() => setFilter(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Projects Grid */}
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4">
              <div className="glass-card glass-card-interactive project-card">
                {/* Visual Thumbnail */}
                <div className="project-thumbnail">
                  <div className="project-category-badge">
                    {project.category}
                  </div>
                  <div className="project-thumbnail-art">
                    <ProjectThumbnailVisual 
                      projectId={project.id} 
                      accentColor={project.accentColor}
                      title={project.title}
                    />
                  </div>
                </div>

                {/* Project Details Body */}
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Technology Tags */}
                  <div className="mb-3">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Action Buttons */}
                  <div className="project-footer">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-sm-glass"
                      title="View GitHub Repository"
                    >
                      <i className="bi bi-github"></i>
                      <span>GitHub</span>
                    </a>

                    <button
                      type="button"
                      className="btn-gradient btn-sm py-1 px-3"
                      style={{ fontSize: '0.85rem' }}
                      onClick={() => setSelectedProject(project)}
                    >
                      <span>Live Demo</span>
                      <i className="bi bi-box-arrow-up-right ms-1"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
