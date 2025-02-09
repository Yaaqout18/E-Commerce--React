import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CiShop } from "react-icons/ci";
import { MdPhoneIphone } from "react-icons/md";
import { IoWatchOutline } from "react-icons/io5";
import { TbDeviceAirpods } from "react-icons/tb";
import './PhoneNavbar.css'

const PhoneNavbar = () => {
  const [activeNav,setActiveNav] = useState('/')
  return (
    <nav>
      <Link to='/' onClick={()=> setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}><CiShop /></Link>
      <Link to='/iphone' onClick={()=> setActiveNav('/iphone')} className={activeNav === '/iphone' ? 'active' : ''}><MdPhoneIphone /></Link>
      <Link to='/watch' onClick={()=> setActiveNav('/watch')} className={activeNav === '/watch' ? 'active' : ''}><IoWatchOutline /></Link>
      <Link to='/airpod' onClick={()=> setActiveNav('/airpod')} className={activeNav === '/airpod' ? 'active' : ''}><TbDeviceAirpods /></Link>
    </nav>
  )
}

export default PhoneNavbar
