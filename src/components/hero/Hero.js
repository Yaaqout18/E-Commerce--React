import React from 'react'
import { MdWavingHand } from "react-icons/md";
import heroImg from '../assets/hero-apple.jpeg'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hand-section">
                <p>New</p>
                <MdWavingHand className='hand-icon'/>
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collections</div>

        </div>
      </div>
      <div className="hero-right">
        <img src={heroImg} alt="hero img" />
      </div>
    </div>
  )
}

export default Hero
