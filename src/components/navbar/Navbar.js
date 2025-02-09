import React, { useContext, useState } from 'react'
import './Navbar.css'
import { SiMonica } from "react-icons/si";
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';


const Navbar = () => {

  const {getTotalCartItems} = useContext(ShopContext)
  const [menu,setMenu] = useState("shop")


  return (
    <div className='navbar'>
      <div className="nav-logo">
      <p>Store-YT</p>
        <SiMonica className='logo-icon'/>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu('shop')}}><Link to='/'>Shop</Link>{menu === 'shop' ? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu('iphone')}}><Link to='/iphone'>Iphone</Link>{menu === 'iphone' ? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu('watch')}}><Link to='/watch'>Watches</Link> {menu === 'watch' ? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu('airpod')}}><Link to='/airpod'>AirPods</Link>{menu === 'airpod' ? <hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><BsCart3 className='cart-icon'/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
