import React, { useState, useEffect, useRef } from 'react';
import { statsData, aboutHighlights } from '../data/portfolioData';

export default function About() {
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animated counter effect when section scrolls into view
  useEffect(() => {
    if (!inView) return;

    const duration = 1600; // ms
    const frameRate = 30;
    const totalFrames = Math.round(duration / (1000 / frameRate));

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // easeOutQuad easing
      const easedProgress = 1 - (1 - progress) * (1 - progress);

      setCounts(
        statsData.map((stat) => Math.min(Math.round(easedProgress * stat.value), stat.value))
      );

      if (frame >= totalFrames) {
        clearInterval(timer);
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [inView]);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="section-badge">
            <span className="section-badge-dot"></span>
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Passionate About Crafting <span className="gradient-text">Exceptional Web</span> Products
          </h2>
          <p className="section-subtitle mx-auto">
            Turning ideas into meaningful digital experiences.
          </p>
        </div>

        <div className="row align-items-center g-5">
          {/* Left Column: Stylized Developer Portrait & Tech Frame */}
          <div className="col-12 col-lg-5">
            <div className="avatar-container">
              <div className="avatar-frame">
                <div className="avatar-content p-4 text-center">
                  {/* Decorative glowing background mesh */}
                  <div 
                    className="position-absolute"
                    style={{
                      width: '240px',
                      height: '240px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(0, 210, 255, 0.2), rgba(138, 43, 226, 0.2))',
                      filter: 'blur(35px)',
                      top: '15%',
                      left: '20%',
                      zIndex: 0
                    }}
                  ></div>

                  {/* Stylized Avatar Illustration */}
                  <div className="position-relative z-1 mb-3">
                    <div 
                      className="rounded-circle d-inline-flex align-items-center justify-content-center p-3 shadow-lg"
                      style={{
                        width: '180px',
                        height: '180px',
                        background: 'linear-gradient(145deg, #162035, #0c1220)',
                        border: '2px solid rgba(0, 210, 255, 0.5)',
                        boxShadow: '0 0 30px rgba(0, 210, 255, 0.3)'
                      }}
                    >
                      <i className="bi bi-person-workspace text-cyan" style={{ fontSize: '5rem' }}></i>
                    </div>
                  </div>

                  <h3 className="h4 font-bold text-white mb-1 z-1 position-relative">Subhika</h3>
                  <div className="text-cyan small font-monospace mb-3 z-1 position-relative">
                    &lt;FullStackDeveloper /&gt;
                  </div>

                  <p className="text-secondary small mb-3 z-1 position-relative px-2">
                    Specialized in creating modern responsive web applications, backend APIs, and intuitive user experiences.
                  </p>

                  <div className="d-flex justify-content-center gap-2 z-1 position-relative flex-wrap">
                    <span className="badge bg-dark text-cyan border border-info border-opacity-25 px-2 py-1">
                      <i className="bi bi-geo-alt-fill me-1"></i>India
                    </span>
                    <span className="badge bg-dark text-warning border border-warning border-opacity-25 px-2 py-1">
                      <i className="bi bi-briefcase-fill me-1"></i>Freelance
                    </span>
                    <span className="badge bg-dark text-success border border-success border-opacity-25 px-2 py-1">
                      <i className="bi bi-clock-history me-1"></i>Fast Response
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="avatar-badge-float">
                <div 
                  className="rounded-circle p-2 d-flex align-items-center justify-content-center text-white"
                  style={{ background: 'var(--gradient-accent)', width: '38px', height: '38px' }}
                >
                  <i className="bi bi-trophy-fill"></i>
                </div>
                <div>
                  <div className="fw-bold text-white small">2+ Years</div>
                  <div className="text-muted" style={{ fontSize: '0.72rem' }}>Hands-on Coding</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Principles & Statistics */}
          <div className="col-12 col-lg-7">
            <h3 className="h3 font-bold text-white mb-3">
              Crafting Scalable, Modern &amp; Meaningful Solutions
            </h3>
            
            <p className="text-secondary lead fs-6 mb-3">
              I'm a passionate freelance web developer focused on creating clean, scalable and user-friendly digital experiences. I enjoy transforming ideas into functional products using modern web technologies.
            </p>

            <p className="text-secondary mb-4" style={{ fontSize: '0.96rem' }}>
              My engineering approach is driven by methodical <strong className="text-white">problem solving</strong>, <strong className="text-white">clean code</strong> architecture, <strong className="text-white">responsive design</strong>, high <strong className="text-white">performance</strong>, and thoughtful <strong className="text-white">user experience</strong>. Through continuous learning, I keep up with the latest design patterns and best industry standards to ensure every project meets client objectives seamlessly.
            </p>

            {/* Core Values / Highlights */}
            <div className="row g-3 mb-4">
              {aboutHighlights.map((item, idx) => (
                <div key={idx} className="col-12 col-sm-6">
                  <div className="highlight-box h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <i className={`bi ${item.icon} text-cyan fs-5`}></i>
                      <h4 className="h6 text-white mb-0 fw-semibold">{item.title}</h4>
                    </div>
                    <p className="text-secondary small mb-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Statistics Cards Grid */}
            <div className="row g-3 pt-2">
              {statsData.map((stat, index) => (
                <div key={stat.id} className="col-6 col-sm-3">
                  <div className="stat-card">
                    <div className="stat-number gradient-text">
                      {counts[index]}
                      {stat.suffix}
                    </div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
