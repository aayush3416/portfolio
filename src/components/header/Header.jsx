import React from 'react'
import './header.css'
import ME from '../../assests/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Aayush Soni</h1>
        <div className="i-title">
          <div className="i-title-wrapper">
            <h5 className="i-item">Previosuly @ Super.com</h5>
            <h5 className="i-item"> A Software Engineer.</h5>
          </div>
        </div>
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" className="emoji" />
        </div>
        <a href="#footer" className="scroll__down">
          Let's Talk
        </a>
      </div>
    </header>
  );
}

export default Header
