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

    const options = {
      threshold: 0.4, // Adjusted threshold to trigger sooner
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(`#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 80) {
          setActiveNav(`#${section.getAttribute("id")}`);
        }
      });

      if (window.scrollY === 0) {
        setActiveNav('#home');
      }
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <nav>
        <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>Home</a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>
        <a href="#experiences" onClick={() => setActiveNav('#experiences')} className={activeNav === '#experiences' ? 'active' : ''}>Experiences</a>
        <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}>Projects</a>
      </nav>
      <section id="home">
        <About />
      </section>
      <section id="about">
        <Experience />
      </section>
      <section id="experiences">
        <Portfolio />
      </section>
      <section id="projects">
        {/* Add your content here */}
      </section>
    </>
  );
}

export default Nav;
