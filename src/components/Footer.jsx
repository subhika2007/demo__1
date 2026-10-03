import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4 align-items-center justify-content-between mb-4 pb-4 border-bottom border-secondary border-opacity-25">
          {/* Left: Brand & Tagline */}
          <div className="col-12 col-md-5">
            <div className="d-flex align-items-center gap-2 mb-2">
              <div className="brand-badge" style={{ width: '36px', height: '36px', fontSize: '1rem' }}>
                {personalInfo.initials}
              </div>
              <span className="brand-name fs-5">{personalInfo.name}</span>
            </div>
            <p className="text-secondary small mb-0" style={{ maxWidth: '380px' }}>
              Building high-performance, modern, and responsive web applications that convert ideas into impactful digital realities.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="col-12 col-md-4">
            <div className="d-flex flex-wrap gap-3">
              <button type="button" onClick={() => scrollTo('home')} className="btn btn-link footer-nav-link p-0 text-decoration-none">
                Home
              </button>
              <button type="button" onClick={() => scrollTo('about')} className="btn btn-link footer-nav-link p-0 text-decoration-none">
                About
              </button>
              <button type="button" onClick={() => scrollTo('skills')} className="btn btn-link footer-nav-link p-0 text-decoration-none">
                Skills
              </button>
              <button type="button" onClick={() => scrollTo('services')} className="btn btn-link footer-nav-link p-0 text-decoration-none">
                Services
              </button>
              <button type="button" onClick={() => scrollTo('projects')} className="btn btn-link footer-nav-link p-0 text-decoration-none">
                Projects
              </button>
              <button type="button" onClick={() => scrollTo('contact')} className="btn btn-link footer-nav-link p-0 text-decoration-none">
                Contact
              </button>
            </div>
          </div>

          {/* Right: Social Icons */}
          <div className="col-12 col-md-3 text-md-end">
            <div className="d-inline-flex align-items-center gap-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
                style={{ width: '38px', height: '38px', fontSize: '1rem' }}
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
                style={{ width: '38px', height: '38px', fontSize: '1rem' }}
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-button"
                style={{ width: '38px', height: '38px', fontSize: '1rem' }}
                aria-label="Email"
              >
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2 text-secondary small">
          <div>
            &copy; 2026 {personalInfo.name}. All rights reserved.
          </div>
          <div className="d-flex align-items-center gap-1">
            <span>Built with React &amp; <span className="text-danger">❤️</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
