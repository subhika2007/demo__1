import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify the subject or project type.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please include details about your inquiry.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="section-badge">
            <span className="section-badge-dot"></span>
            <span>Let's Connect</span>
          </div>
          <h2 className="section-title">
            Let's Build <span className="gradient-text">Something Great</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind? Let's turn your idea into reality.
          </p>
        </div>

        <div className="row g-5">
          {/* Left Column: Contact Details & Socials */}
          <div className="col-12 col-lg-5">
            <h3 className="h4 font-bold text-white mb-3">Get In Touch</h3>
            <p className="text-secondary mb-4">
              Whether you need a complete web application built from the ground up, frontend enhancements, or performance optimization, feel free to reach out. I'm always open to discussing exciting new projects.
            </p>

            {/* Email Card with Copy Feature */}
            <div className="contact-info-card">
              <div className="contact-icon-box">
                <i className="bi bi-envelope-at"></i>
              </div>
              <div className="flex-grow-1">
                <div className="text-muted small text-uppercase">Email Address</div>
                <div className="fw-semibold text-white">{personalInfo.email}</div>
              </div>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary text-cyan border-0"
                onClick={handleCopyEmail}
                title="Copy to clipboard"
                aria-label="Copy email address"
              >
                <i className={`bi ${copiedEmail ? 'bi-check2 text-success' : 'bi-clipboard'}`}></i>
                <span className="ms-1 small">{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Location Card */}
            <div className="contact-info-card">
              <div className="contact-icon-box">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div>
                <div className="text-muted small text-uppercase">Location</div>
                <div className="fw-semibold text-white">{personalInfo.location}</div>
                <div className="text-secondary small">Available for worldwide remote contracts</div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="contact-info-card">
              <div className="contact-icon-box">
                <i className="bi bi-calendar-check"></i>
              </div>
              <div>
                <div className="text-muted small text-uppercase">Availability</div>
                <div className="fw-semibold text-white d-flex align-items-center gap-2">
                  <span className="status-dot-pulse"></span>
                  <span>{personalInfo.availabilityText}</span>
                </div>
                <div className="text-secondary small">Typical response time: {personalInfo.responseTime}</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-4 pt-2">
              <div className="text-muted small text-uppercase mb-3 fw-semibold">Connect on Social Media</div>
              <div className="d-flex align-items-center gap-3">
                <a 
                  href={personalInfo.socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-button"
                  aria-label="GitHub Profile"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a 
                  href={personalInfo.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-button"
                  aria-label="LinkedIn Profile"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a 
                  href={personalInfo.socials.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-button"
                  aria-label="Twitter or X Profile"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a 
                  href={personalInfo.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-button"
                  aria-label="Instagram Profile"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="col-12 col-lg-7">
            <div className="glass-card p-4 p-md-5">
              {isSuccess ? (
                <div className="py-4 text-center">
                  <div 
                    className="rounded-circle d-inline-flex align-items-center justify-content-center p-3 mb-3"
                    style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', width: '70px', height: '70px' }}
                  >
                    <i className="bi bi-check-circle-fill fs-2"></i>
                  </div>
                  <h3 className="h4 text-white font-bold mb-2">Message Received!</h3>
                  <p className="text-secondary max-w-md mx-auto mb-4">
                    Thank you for reaching out. Your message has been sent successfully. I will get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    className="btn-gradient"
                    onClick={() => setIsSuccess(false)}
                  >
                    <span>Send Another Message</span>
                    <i className="bi bi-arrow-repeat"></i>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="h4 font-bold text-white mb-4">Send a Message</h3>

                  <div className="row g-3">
                    {/* Name Field */}
                    <div className="col-12 col-md-6">
                      <label htmlFor="contact-name" className="form-label text-secondary small fw-semibold">
                        Your Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`form-control form-control-dark ${errors.name ? 'is-invalid' : ''}`}
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>

                    {/* Email Field */}
                    <div className="col-12 col-md-6">
                      <label htmlFor="contact-email" className="form-label text-secondary small fw-semibold">
                        Your Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`form-control form-control-dark ${errors.email ? 'is-invalid' : ''}`}
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>

                    {/* Subject Field */}
                    <div className="col-12">
                      <label htmlFor="contact-subject" className="form-label text-secondary small fw-semibold">
                        Subject / Project Type <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Full Stack Web Application / Freelance Project"
                        className={`form-control form-control-dark ${errors.subject ? 'is-invalid' : ''}`}
                      />
                      {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                    </div>

                    {/* Message Field */}
                    <div className="col-12">
                      <label htmlFor="contact-message" className="form-label text-secondary small fw-semibold">
                        Your Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your project goals, timeline, and requirements..."
                        className={`form-control form-control-dark ${errors.message ? 'is-invalid' : ''}`}
                      ></textarea>
                      {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-gradient w-100 justify-content-center py-3"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <i className="bi bi-send-fill ms-2"></i>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
