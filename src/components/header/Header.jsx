import React, { useState, useEffect } from 'react';
import './header.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = ['Software Developer', 'Problem Solver', 'Innovation Enthusiast'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <header id="home">
      <div className="container header__container">
        <div className="header__content">
          <div className="header__badge">
            <span className="header__status-dot"></span>
            Open to opportunities
          </div>

          <h1 className="header__name">
            Aayush Soni
          </h1>

          <div className="header__title-wrapper">
            <span className="header__title" key={currentTitle}>
              {titles[currentTitle]}
            </span>
          </div>

          <p className="header__description">
            Mechatronics Engineering student at the University of Waterloo, passionate about
            creating innovative solutions through code and cutting-edge technology.
          </p>

          <div className="header__socials">
            <a href="https://www.linkedin.com/in/aayush-soni-8282bb200/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/aayush3416" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:aayushsoni3416@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>

          <div className="header__cta">
            <a href="#experience" className="btn">View Experience</a>
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
          </div>
        </div>

        <div className="header__scroll">
          <div className="header__scroll-line"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
