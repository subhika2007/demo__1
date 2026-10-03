import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="col-12 col-lg-6 text-start">
            {/* Availability Pill */}
            <div className="hero-work-badge">
              <span className="status-dot-pulse"></span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              Building <span className="gradient-text">{personalInfo.heroHighlight}</span> That Make an Impact.
            </h1>

            {/* Description */}
            <p className="hero-description">
              {personalInfo.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="hero-action-btns d-flex flex-wrap align-items-center gap-3">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-gradient"
                type="button"
              >
                <span>View My Work</span>
                <i className="bi bi-arrow-right"></i>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="btn-outline-glow"
                type="button"
              >
                <span>Let's Talk</span>
                <i className="bi bi-chat-dots"></i>
              </button>
            </div>

            {/* Availability Status Text */}
            <div className="hero-availability-tag">
              <span className="status-dot-pulse"></span>
              <span>{personalInfo.availabilityText}</span>
              <span className="text-muted mx-1">•</span>
              <span className="text-secondary">Fast turnaround & clear communication</span>
            </div>
          </div>

          {/* Right Column: Code Window & Floating Tech Badges */}
          <div className="col-12 col-lg-6">
            <div className="position-relative d-flex justify-content-center">
              {/* Glowing Gradient Orb behind card */}
              <div className="hero-glow-orb"></div>

              {/* Floating Technology Badges */}
              <div className="floating-badge badge-react">
                <i className="bi bi-filetype-jsx fs-5"></i>
                <span>React</span>
              </div>

              <div className="floating-badge badge-js">
                <i className="bi bi-filetype-js fs-5"></i>
                <span>JavaScript</span>
              </div>

              <div className="floating-badge badge-bootstrap">
                <i className="bi bi-bootstrap fs-5"></i>
                <span>Bootstrap</span>
              </div>

              <div className="floating-badge badge-java">
                <i className="bi bi-cup-hot-fill fs-5"></i>
                <span>Java</span>
              </div>

              <div className="floating-badge badge-spring">
                <i className="bi bi-hdd-network-fill fs-5"></i>
                <span>Spring Boot</span>
              </div>

              {/* Code Editor Inspired Card */}
              <div className="code-window w-100" style={{ maxWidth: '480px' }}>
                <div className="code-header">
                  <div className="window-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <div className="window-title">
                    <i className="bi bi-code-slash text-cyan"></i>
                    <span>developer.config.js</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge bg-dark text-muted border border-secondary border-opacity-25 px-2 py-1" style={{ fontSize: '0.65rem' }}>
                      ES6+
                    </span>
                  </div>
                </div>

                <div className="code-body">
                  <div className="text-muted mb-2">// Developer Profile Configuration</div>
                  <div>
                    <span className="code-keyword">const</span> <span className="code-var">developer</span> = <span className="code-brace">{'{'}</span>
                  </div>
                  <div className="ms-4">
                    <span className="code-prop">name:</span> <span className="code-string">"Subhika"</span>,
                  </div>
                  <div className="ms-4">
                    <span className="code-prop">role:</span> <span className="code-string">"Full Stack Developer"</span>,
                  </div>
                  <div className="ms-4">
                    <span className="code-prop">passion:</span> <span className="code-string">"Building the Web"</span>,
                  </div>
                  <div className="ms-4">
                    <span className="code-prop">focus:</span> <span className="code-string">"High Performance & Clean UI"</span>,
                  </div>
                  <div className="ms-4">
                    <span className="code-prop">availability:</span> <span className="code-string">"Freelance Ready"</span>
                  </div>
                  <div>
                    <span className="code-brace">{'}'}</span>;
                  </div>
                  <div className="mt-3 pt-2 border-top border-secondary border-opacity-25 d-flex align-items-center justify-content-between text-muted" style={{ fontSize: '0.78rem' }}>
                    <span>
                      <i className="bi bi-check-circle-fill text-success me-1"></i> Ready for deployment
                    </span>
                    <span className="font-monospace text-cyan">UTF-8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
