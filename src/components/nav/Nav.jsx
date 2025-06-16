import React, { useEffect, useState } from 'react';
import './nav.css';
import About from '../about/About';
import Experience from '../experience/Experience';
import Portfolio from '../portfolio/Portfolio';

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    // Intersection Observer for better performance
    const options = {
      threshold: 0.3,
      rootMargin: '-80px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(`#${entry.target.id}`);
          entry.target.classList.add('visible');
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Scroll progress indicator
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.pageYOffset;
      const scrollProgress = (scrollTop / scrollHeight) * 100;
      
      document.documentElement.style.setProperty('--scroll-progress', `${scrollProgress}%`);
    };

    window.addEventListener('scroll', updateScrollProgress);

    // Initial check for sections in view
    const checkInitialVisibility = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          section.classList.add('visible');
        }
      });
    };

    // Smooth scroll behavior
    const smoothScrollToSection = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const headerOffset = 80;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    // Add smooth scroll to nav links
    navLinks.forEach(link => {
      link.addEventListener('click', smoothScrollToSection);
    });

    checkInitialVisibility();

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      window.removeEventListener('scroll', updateScrollProgress);
      navLinks.forEach(link => {
        link.removeEventListener('click', smoothScrollToSection);
      });
    };
  }, []);

  return (
    <>
      <nav>
        <div className="nav-indicator"></div>
        <a 
          href="#home" 
          data-tooltip="Home"
          className={activeNav === '#home' ? 'active' : ''}
        >
          🏠
        </a>
        <a 
          href="#about" 
          data-tooltip="About"
          className={activeNav === '#about' ? 'active' : ''}
        >
          👨‍💻
        </a>
        <a 
          href="#experiences" 
          data-tooltip="Experience"
          className={activeNav === '#experiences' ? 'active' : ''}
        >
          💼
        </a>
        <a 
          href="#projects" 
          data-tooltip="Projects"
          className={activeNav === '#projects' ? 'active' : ''}
        >
          🚀
        </a>
      </nav>
      
      <section id="home" className="fade-in">
        {/* Header content is already handled in App.jsx */}
      </section>
      
      <section id="about" className="fade-in">
        <About />
      </section>
      
      <section id="experiences" className="fade-in">
        <Experience />
      </section>
      
      <section id="projects" className="fade-in">
        <Portfolio />
      </section>
    </>
  );
}

export default Nav;
