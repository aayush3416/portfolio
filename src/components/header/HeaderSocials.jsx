import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/aayush-soni-8282bb200/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/aayush3416" target="_blank"><BsGithub /></a>
      <a href="mailto:aayush.soni@uwaterloo.ca" target="_blank"><MdOutlineEmail/></a>
    </div>
  )
}

export default HeaderSocials
