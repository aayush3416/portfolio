import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {FaBlogger} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/aayush-soni-8282bb200/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/aayush3416" target="_blank"><BsGithub/></a>
        <a href="https://aayush-blog.herokuapp.com/" target="_blank"><FaBlogger/></a>
    </div>
  )
}

export default HeaderSocials