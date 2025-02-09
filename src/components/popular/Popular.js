import React from 'react'
import data_product from '../assets/data'
import './Popular.css'
import Item from '../item/Item'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN DEVICES</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((ele,i)=>{
return <Item key={i} id={ele.id} name={ele.name} image={ele.image} new_price={ele.new_price} old_price={ele.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
