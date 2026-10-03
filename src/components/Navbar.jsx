import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          {/* Left: Developer Logo & Initials */}
          <a 
            href="#home" 
            className="brand-logo-container"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <div className="brand-badge">
              {personalInfo.initials}
            </div>
            <div>
              <div className="brand-name">{personalInfo.name}</div>
              <div className="brand-subtitle">
                <span className="status-dot-pulse"></span>
                {personalInfo.title}
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="d-none d-lg-flex align-items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link-custom ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Action: Let's Talk Button */}
          <div className="d-none d-lg-block">
            <a
              href="#contact"
              className="btn-gradient"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              <span>Let's Talk</span>
              <i className="bi bi-chat-text-fill"></i>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="d-lg-none">
            <button
              className="mobile-nav-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer mt-3 rounded-4 shadow-lg border border-secondary border-opacity-25 d-lg-none">
            <div className="d-flex flex-column gap-2 py-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-link-custom px-3 py-2 ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  <i className="bi bi-chevron-right me-2 text-cyan"></i>
                  {item.label}
                </a>
              ))}
              <div className="pt-2 mt-2 border-top border-secondary border-opacity-25">
                <a
                  href="#contact"
                  className="btn-gradient w-100 justify-content-center py-2"
                  onClick={(e) => handleNavClick(e, 'contact')}
                >
                  <span>Let's Talk</span>
                  <i className="bi bi-chat-text-fill ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
