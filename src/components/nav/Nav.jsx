import React from 'react';
import './nav.css';
import { useState } from "react";
import About from '../about/About';
import Experience from '../experience/Experience';
import Portfolio from '../portfolio/Portfolio';

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <>
      <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>
        <a href="#experiences" onClick={() => setActiveNav('#experiences')} className={activeNav === '#experiences' ? 'active' : ''}>Experiences</a>
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>Projects</a>
      </nav>
      <About />
      <Experience />
      <Portfolio />
    </>
  )
}

export default Nav;
