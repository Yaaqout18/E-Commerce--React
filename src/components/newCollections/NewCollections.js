import React from 'react'
import new_collection from '../assets/newCollection.js'
import Item from '../item/Item.js'

import './NewCollections.css'

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
      {new_collection.map((ele,i)=>{
          return <Item key={i} id={ele.id} name={ele.name} image={ele.image} new_price={ele.new_price} old_price={ele.old_price}/>
      })}
      </div>
    </div>
  )
}

export default NewCollections
