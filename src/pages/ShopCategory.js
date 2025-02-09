import React, { useContext } from 'react'
import Item from '../components/item/Item';
import './css/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import { MdOutlineReadMore } from "react-icons/md";

const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="anything" className='category-banner'/>
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort by 
        </div>
      </div>
      <div className="shopCategory-products">
        {all_products.map((item,index)=>{
if(props.category === item.category){
return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
}else{
  return null
}
        })}
      </div>
      <div className="shopCategory-loadMore">
        More <MdOutlineReadMore className='more-icon'/>
      </div>
    </div>
  )
}

export default ShopCategory
