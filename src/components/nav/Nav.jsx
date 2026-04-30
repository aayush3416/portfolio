import React, { useEffect, useState } from 'react';
import './nav.css';
import Header from '../header/Header';
import Experience from '../experience/Experience';
import Portfolio from '../portfolio/Portfolio';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -80px 0px' }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    return () => {
      observer.disconnect();
      revealObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#experience', label: 'Experience' },
    { href: '#portfolio', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`top-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav__container">
          <a href="#home" className="nav__logo">
            AS<span className="nav__logo-dot">.</span>
          </a>
          <div className="nav__links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav__link ${activeNav === link.href ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <Header />
      <Experience />
      <Portfolio />

      <section id="contact">
        <div className="container">
          <span className="section-label reveal">Contact</span>
          <h2 className="reveal">Let's work together</h2>
          <p className="contact__intro reveal">
            Ready to collaborate on something amazing? Let's connect and bring ideas to life.
          </p>

          <div
            className="contact__grid reveal"
            onMouseMove={(e) => {
              for (const card of document.querySelectorAll('.contact__card')) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
              }
            }}
          >
            <a href="mailto:aayush.soni@uwaterloo.ca" className="contact__card">
              <div className="contact__card-icon">✉</div>
              <h4>Email</h4>
              <span className="contact__card-detail">aayush.soni@uwaterloo.ca</span>
              <span className="contact__card-action">Send a message →</span>
            </a>

            <a
              href="https://www.linkedin.com/in/aayush-soni-8282bb200/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card"
            >
              <div className="contact__card-icon">in</div>
              <h4>LinkedIn</h4>
              <span className="contact__card-detail">Let's connect professionally</span>
              <span className="contact__card-action">Connect →</span>
            </a>

            <a
              href="https://github.com/aayush3416"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card"
            >
              <div className="contact__card-icon">gh</div>
              <h4>GitHub</h4>
              <span className="contact__card-detail">Check out my code</span>
              <span className="contact__card-action">View profile →</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Aayush Soni</p>
        </div>
      </footer>
    </>
  );
};

export default Nav;
