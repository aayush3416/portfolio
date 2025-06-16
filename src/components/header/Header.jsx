import ME from '../../assests/me.png';
import React, { useState, useEffect } from 'react';
import './header.css';
import HeaderSocials from './HeaderSocials';
import { FaSun, FaMoon, FaCode, FaRocket, FaBrain } from 'react-icons/fa';

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [currentTitle, setCurrentTitle] = useState(0);

  const titles = [
    { text: "Software Developer", icon: <FaCode /> },
    { text: "Problem Solver", icon: <FaBrain /> },
    { text: "Innovation Enthusiast", icon: <FaRocket /> }
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
    document.body.classList.toggle('light-mode', darkMode);
  };

  useEffect(() => {
    document.body.classList.add('dark-mode');
    
    // Animated title rotation
    const titleInterval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(titleInterval);
  }, []);

  return (
    <header className={darkMode ? 'dark' : 'light'}>
      <button className="toggle-mode" onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
        <span>{darkMode ? 'Light' : 'Dark'}</span>
      </button>
      
      <div className="container header__container">
        <div className="header__content">
          <div className="header__text">
            <h5 className="greeting">Hello, I'm</h5>
            <h1 className="header__name">Aayush Soni</h1>
            
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
            <div className="image-container">
              <div className="floating-elements">
                <div className="floating-element" style={{'--delay': '0s'}}>💻</div>
                <div className="floating-element" style={{'--delay': '1s'}}>🚀</div>
                <div className="floating-element" style={{'--delay': '2s'}}>⚡</div>
                <div className="floating-element" style={{'--delay': '3s'}}>🎯</div>
              </div>
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
