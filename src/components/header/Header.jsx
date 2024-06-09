import ME from '../../assests/me.png';
import React, { useState, useEffect } from 'react';
import './header.css';
import HeaderSocials from './HeaderSocials';
import { FaLightbulb } from 'react-icons/fa';

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
    document.body.classList.toggle('light-mode', darkMode);
  };

  useEffect(() => {
    document.body.classList.add('dark-mode');
  }, []);

  return (
    <header className={darkMode ? 'dark' : 'light'}>
      <div className="container header__container">
        <div className="header__left">
          <div className="me">
            <img src={ME} alt="me" className="emoji" />
          </div>
        </div>
        <div className="header__right">
          <h5>Hello, I'm</h5>
          <h1 className="header__name">Aayush Soni</h1>
          <HeaderSocials />
        </div>
      </div>
    </header>
  );
};

export default Header;
