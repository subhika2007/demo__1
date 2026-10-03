import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'services', 'projects', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app position-relative">
      {/* Ambient background glowing orbs & grid */}
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-grid"></div>
        <div className="ambient-orb ambient-orb-1"></div>
        <div className="ambient-orb ambient-orb-2"></div>
        <div className="ambient-orb ambient-orb-3"></div>
      </div>

      {/* Main Portfolio Content */}
      <div className="position-relative z-1">
        <Navbar activeSection={activeSection} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}
