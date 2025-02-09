import React from 'react'
import { SiMonica } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbPentagonNumber7 } from "react-icons/tb";
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
      <p>Store-YT</p>
      <SiMonica className='logo-icon'/>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-socials-icon">
        <div className="footer-icons-container">
        <FaInstagram className='footer-icon'/>
        </div>
        <div className="footer-icons-container">
        <FaTiktok className='footer-icon'/>
        </div>
        <div className="footer-icons-container">
        <FaLinkedin className='footer-icon'/>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>&copy;Copyright 2025 @Store-YT - All Right Reserved . developed by <span className='yaaqout-logo'>Yaaqout <TbPentagonNumber7 className='yaaqout-icon'/></span></p>
      </div>
    </div>
  )
}

export default Footer
