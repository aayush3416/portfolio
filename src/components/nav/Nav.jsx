import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from "react-icons/bi";
import { VscFolderLibrary } from "react-icons/vsc";
import {BiMessageSquareDetail} from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import {useState} from "react"
const Nav = () => {
  const[activeNav, setActiveNav ] = useState("#")
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() =>setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUser/></a>
      {/* <a href="#skills" onClick={() =>setActiveNav('#skills')} className={activeNav === '#skills' ? 'active': ''}><FaLaptopCode/></a> */}
      <a href="#experiences" onClick={() =>setActiveNav('#experiences')} className={activeNav === '#experiences' ? 'active': ''}><BiBook/></a>
      <a href="#portfolio" onClick={() =>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active': ''}><VscFolderLibrary/></a>
      <a href="#contact" onClick={() =>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav