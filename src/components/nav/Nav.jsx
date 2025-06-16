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
        <a 
          href="#contact" 
          data-tooltip="Contact"
          className={activeNav === '#contact' ? 'active' : ''}
        >
          📧
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
      
      <section id="contact" className="fade-in">
        <div className="container contact__container">
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>
          <p className="contact__intro">
            Ready to collaborate on something amazing? Let's connect and bring your ideas to life!
          </p>
          
          <div className="contact__options">
            <article className="contact__option">
              <div className="contact__option-icon">
                📧
              </div>
              <h4>Email</h4>
              <h5>aayushsoni3416@gmail.com</h5>
              <a href="mailto:aayushsoni3416@gmail.com" className="btn btn-primary">
                Send a message
              </a>
            </article>
            
            <article className="contact__option">
              <div className="contact__option-icon">
                💼
              </div>
              <h4>LinkedIn</h4>
              <h5>Let's connect professionally</h5>
              <a href="https://www.linkedin.com/in/aayush-soni-8282bb200/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Connect with me
              </a>
            </article>
            
            <article className="contact__option">
              <div className="contact__option-icon">
                🚀
              </div>
              <h4>GitHub</h4>
              <h5>Check out my code</h5>
              <a href="https://github.com/aayush3416" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View projects
              </a>
            </article>
          </div>
          
          <div className="contact__form">
            <form>
              <input type="text" name="name" placeholder="Your Full Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
          
          <div className="contact__floating">
            <div className="floating-shape shape-1">✨</div>
            <div className="floating-shape shape-2">💫</div>
            <div className="floating-shape shape-3">🌟</div>
            <div className="floating-shape shape-4">⚡</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nav;
