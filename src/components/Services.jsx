import React from 'react';
import { servicesData } from '../data/portfolioData';

export default function Services() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="section-badge">
            <span className="section-badge-dot"></span>
            <span>What I Do</span>
          </div>
          <h2 className="section-title">
            Solutions Designed Around <span className="gradient-text">Your Goals</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From sleek single-page interfaces to complete full-stack web applications, I deliver bespoke digital solutions tailored to elevate your business.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="row g-4">
          {servicesData.map((service) => (
            <div key={service.id} className="col-12 col-md-6 col-lg-6">
              <div className="glass-card glass-card-interactive service-card">
                {/* Large Icon */}
                <div className="service-icon-box">
                  <i className={`bi ${service.icon}`}></i>
                </div>

                {/* Service Title */}
                <h3 className="service-title">{service.title}</h3>

                {/* Description */}
                <p className="service-description">{service.description}</p>

                {/* Key Features Bullet List */}
                <ul className="service-features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="bi bi-check2-circle"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link with Animated Arrow */}
                <div className="pt-3 border-top border-secondary border-opacity-25 mt-auto">
                  <a href="#contact" onClick={scrollToContact} className="service-link">
                    <span>Discuss Your Project</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
