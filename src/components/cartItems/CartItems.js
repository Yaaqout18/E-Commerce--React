import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import { IoRemoveCircleSharp } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
const CartItems = () => {
  const {all_products,cartItems,removeFromCart,getTotalCartAmount,addToCart} = useContext(ShopContext)
  return (
    <div className='cartItems'>
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p className='remove-title'>Remove</p>
        <p className='add-title'>Add</p>
      </div>
      <hr />
      {all_products.map((e)=>{
if(cartItems[e.id]>0){
  return <div>
  <div className="cartItems-format cartItems-format-main">
          <img src={e.image} alt=""  className='cartIcon-product-icon'/>
          <p>{e.name}</p>
          <p>$ {e.new_price}</p>
          <button className='cartItems-quantity'>{cartItems[e.id]}</button>
          <p>$ {e.new_price*cartItems[e.id]}</p>
          <IoRemoveCircleSharp onClick={()=>{removeFromCart(e.id)}} className='remove-icon' />
          <IoIosAddCircle onClick={()=>{addToCart(e.id)}} className='add-icon'/>
        </div>
        <hr />
  </div>
}
return null
      })}
      <div className="cartItems-down">
        <div className="cartItems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartItems-total-item">
              <p>Subtotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <h3>Total</h3>
              <h3>$ {getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartItems-promoCode">
          <p>If you have a promo code ,Enter it here </p>
          <div className="cartItems-promoBox">
            <input type="text" placeholder='Promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default CartItems
