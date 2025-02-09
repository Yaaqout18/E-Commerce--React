import React, { useContext } from 'react'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import './ProductDisplay.css'
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
  const {product} = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className='productDisplay'>
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
<img src={product.image} alt="product imag" />
<img src={product.image} alt="product imag" />
<img src={product.image} alt="product imag" />
<img src={product.image} alt="product imag" />
        </div>
        <div className="productDisplay-img">
          <img src={product.image} className='productDisplay-main-img' alt="product imag" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-stars">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStarHalf />
        <p>(145)</p>
        </div>
        <div className="productDisplay-right-prices">
          <div className="productDisplay-right-price-old">$ {product.old_price}</div>
          <div className="productDisplay-right-price-new">$ {product.new_price}</div>
        </div>
        <div className="productDisplay-right-description">
          Special price for you , what are you waiting hurry up and take it .
        </div>
        <div className="productDisplay-right-kind">
          <h1>Select Category</h1>
          <div className="productDisplay-right-kinds">
            <div>N</div>
            <div>Pro</div>
            <div>Pro Max</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productDisplay-right-category"><span>Tags: Modern ,Latest</span></p>
      </div>
    </div>
  )
}

export default ProductDisplay
