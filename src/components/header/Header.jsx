import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/me.png'
import AS from "../../assests/AS2.png";
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="AS">
          <img src={AS} alt="me"/>
        </div>
        <h5>Hello I'm</h5>
        <h1>Aayush Soni</h1>
        <div className="i-title">
          <div className="i-title-wrapper">
            <h5 className="i-item">Software Developer</h5>
            <h5 className="i-item">A Student</h5>
            <h5 className="i-item">A Leader</h5>
            <h5 className="i-item">A Innovator</h5>
            <h5 className="i-item">Constant Learner</h5>
          </div>
        </div>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" className="emoji" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  ); 
}

export default Header