import React from 'react'
import './footer.css'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import {MdOutlineEmail} from 'react-icons/md'
const Footer = () => {
  return (
    <section id="footer">

    <footer>
      <p className='footer__logo'>Feel free to Contact me! I am always looking to make new connections :)</p>

      <div className='footer__socials'>
        <a href="https://github.com/aayush3416" target='_blank'><BsGithub/></a>
        <a className="link_icon" href="https://www.linkedin.com/in/aayush-soni-8282bb200/" target='_blank'><BsLinkedin/></a>
        <a className="email_icon" href="mailto:aayush.soni@uwaterloo.ca" target="_blank"><MdOutlineEmail/></a>
      </div>

      <div className='footer__socials'>
        <small className='footer__copyright'>
          Developed by Aayush Soni &copy; 2022. All rights reserved.
        </small>
      </div>
    </footer>
    </section>
  )
}

export default Footer
