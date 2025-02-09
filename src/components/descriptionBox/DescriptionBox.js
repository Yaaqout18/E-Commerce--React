import React from 'react'

import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionBox'>
      <div className="descriptionBox-navigator">
        <div className="descriptionBox-nav-box">Description</div>
        <div className="descriptionBox-nav-box fade">Reviews (145)</div>
      </div>
      <div className="descriptionBox-description">
        <p>Manufacturer: Generic,
ASIN :B0DSLZ5J88,
Item model number  :  multi,
Country of origin  :  China,
Best Sellers Rank: #5,196 in Electronics (See Top 100 in Electronics)</p>
        <p>works on a good wireless signal and makes the perfect strong sounds made of the most powerful material. Always enjoy the best sound regardless : in your hand, in your pocket, in your arm, or in the gym.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
