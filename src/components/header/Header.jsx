import ME from '../../assests/me.png';
import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import './CoolEffects.css';
import HeaderSocials from './HeaderSocials';
import { FaSun, FaMoon, FaCode, FaRocket, FaBrain } from 'react-icons/fa';

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const imageContainerRef = useRef(null);
  const [currentTitle, setCurrentTitle] = useState(0);

  const titles = [
    { text: "Software Developer", icon: <FaCode /> },
    { text: "Problem Solver", icon: <FaBrain /> },
    { text: "Innovation Enthusiast", icon: <FaRocket /> }
  ];

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.body.classList.toggle('dark-mode', next);
    document.body.classList.toggle('light-mode', !next);
    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch {}
  };

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    try {
      const stored = localStorage.getItem('theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const shouldDark = stored ? stored === 'dark' : prefersDark;
      setDarkMode(shouldDark);
      document.body.classList.toggle('dark-mode', shouldDark);
      document.body.classList.toggle('light-mode', !shouldDark);
    } catch {
      document.body.classList.add('dark-mode');
    }

    // Animated title rotation
    const titleInterval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(titleInterval);
  }, []);

  useEffect(() => {
    // Subtle 3D parallax on hero image
    const el = imageContainerRef.current;
    if (!el) return;
    let rafId = 0;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 12; // degrees
      const rotateX = (0.5 - y) * 12;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };
    const handleLeave = () => {
      cancelAnimationFrame(rafId);
      el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    };
    el.classList.add('tilt-active');
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <header id="home" className={darkMode ? 'dark' : 'light'}>
      <button className="toggle-mode" onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
        <span>{darkMode ? 'Light' : 'Dark'}</span>
      </button>

      <div className="container header__container">
        <div className="header__content">
          <div className="header__text">
            <h5 className="greeting">Hello, I'm</h5>
            <h1 className="header__name shimmer">Aayush Soni</h1>

            <div className="title-container">
              <div className="animated-title">
                {titles[currentTitle].icon}
                <span>{titles[currentTitle].text}</span>
              </div>
            </div>

            <p className="header__description">
              Mechatronics Engineering student passionate about creating innovative solutions
              through code and cutting-edge technology.
            </p>

            <HeaderSocials />

            <div className="header__cta">
              <a href="#about" className="btn">Get to Know Me</a>
              <a href="#contact" className="btn btn-primary">Let's Connect</a>
            </div>
          </div>

          <div className="header__image">
            <div className="image-container" ref={imageContainerRef}>
              <img src={ME} alt="Aayush Soni" className="profile-image" />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
