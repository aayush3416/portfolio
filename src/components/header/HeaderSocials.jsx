import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './header.css';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/aayush-soni-8282bb200/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/aayush3416" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="mailto:aayushsoni3416@gmail.com">
        <FaEnvelope />
      </a>
    </div>
  );
};

export default HeaderSocials;
