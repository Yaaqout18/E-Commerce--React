import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import BreadCrum from '../components/breadCrums/BreadCrum';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import DescriptionBox from '../components/descriptionBox/DescriptionBox';
import RelatedProducts from '../components/relatedProducts/RelatedProducts';

const Product = () => {
  const {all_products}  = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_products.find((e)=> e.id === Number(productId))
  return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts/>
    </div>
  )
}

export default Product
