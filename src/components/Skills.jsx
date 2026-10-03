import React from 'react';
import { skillsData } from '../data/portfolioData';

const categories = [
  {
    key: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Modern interfaces & responsive design',
    icon: 'bi-code-square',
    accent: '#00d2ff',
    items: skillsData.frontend
  },
  {
    key: 'backend',
    title: 'Backend Engineering',
    subtitle: 'Robust server logic & scalable APIs',
    icon: 'bi-server',
    accent: '#8a2be2',
    items: skillsData.backend
  },
  {
    key: 'database',
    title: 'Database Management',
    subtitle: 'Relational & document data models',
    icon: 'bi-database-fill-gear',
    accent: '#38bdf8',
    items: skillsData.database
  },
  {
    key: 'tools',
    title: 'Tools & DevOps Workflow',
    subtitle: 'Version control & development tools',
    icon: 'bi-tools',
    accent: '#10b981',
    items: skillsData.tools
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="section-badge">
            <span className="section-badge-dot"></span>
            <span>My Skills</span>
          </div>
          <h2 className="section-title">
            Technologies I Use to <span className="gradient-text">Bring Ideas</span> to Life
          </h2>
          <p className="section-subtitle mx-auto">
            A balanced full-stack toolkit focused on performance, modular design, and robust data persistence.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="row g-4">
          {categories.map((cat) => (
            <div key={cat.key} className="col-12 col-md-6 col-lg-6">
              <div className="glass-card skill-category-card">
                {/* Category Header */}
                <div className="category-header">
                  <div 
                    className="category-icon"
                    style={{
                      background: `rgba(${cat.accent === '#00d2ff' ? '0, 210, 255' : cat.accent === '#8a2be2' ? '138, 43, 226' : cat.accent === '#38bdf8' ? '56, 189, 248' : '16, 185, 129'}, 0.12)`,
                      color: cat.accent,
                      border: `1px solid ${cat.accent}33`
                    }}
                  >
                    <i className={`bi ${cat.icon}`}></i>
                  </div>
                  <div>
                    <h3 className="h5 fw-bold text-white mb-0">{cat.title}</h3>
                    <span className="text-secondary small">{cat.subtitle}</span>
                  </div>
                </div>

                {/* Skills Pill List */}
                <div className="d-flex flex-column gap-2">
                  {cat.items.map((skill, index) => (
                    <div key={index} className="skill-pill">
                      <div className="d-flex align-items-center gap-3">
                        <i 
                          className={`bi ${skill.icon} fs-5`}
                          style={{ color: skill.color || cat.accent }}
                        ></i>
                        <span className="fw-medium text-light" style={{ fontSize: '0.92rem' }}>
                          {skill.name}
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="skill-level-badge">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
