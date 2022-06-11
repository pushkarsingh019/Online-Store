import React from 'react'
import { Link } from 'react-router-dom'

import Rating from './Rating'

function Product({product}) {


    function clickHandler(){
        console.log("clicked!")
    }

  return (
    <div onClick={clickHandler} className="product-card">
        <Link to={`/products/${product._id}`}>
        <img src={product.image} alt={product.name} />
        <h4>{product.name}</h4>
        <Rating value={product.rating} text={product.numReviews} color="#FFCD38" textColor='#7F8487' />
        <h2>{product.price}</h2>
        </Link>
    </div>
  )
}

export default Product