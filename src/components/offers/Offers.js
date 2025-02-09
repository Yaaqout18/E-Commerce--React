import React from 'react'
import ex_img from '../assets/ex_img.jpg'
import './Offers.css'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={ex_img} alt="exclusive imag" />
      </div>
    </div>
  )
}

export default Offers
