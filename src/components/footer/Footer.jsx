import React from 'react'
import './footer.css'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaBlogger } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>AAYUSH SONI</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#experiences">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://github.com/aayush3416"><BsGithub/></a>
        <a className="link_icon" href="https://www.linkedin.com/in/aayush-soni-a9a8a817b/"><BsLinkedin/></a>
        <a className="blog_icon" href="https://aayush-blog.herokuapp.com/"><FaBlogger/></a>
      </div>

      <div className='footer__socials'>
        <small className='footer__copyright'>
          Developed by Aayush Soni &copy; 2022. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer