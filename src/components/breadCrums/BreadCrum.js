import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import './BreadCrum.css'
const BreadCrum = (props) => {
  const {product} = props
  return (
    <div className='breadCrum'>
      HOME <IoIosArrowForward  className='arrow-icon'/>  SHOP  <IoIosArrowForward  className='arrow-icon'/> {product.category} <IoIosArrowForward  className='arrow-icon'/>  {product.name}
    </div>
  )
}

export default BreadCrum
