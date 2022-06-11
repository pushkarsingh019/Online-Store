import React from 'react'

import Rating from './Rating'

function Product({product}) {


    function clickHandler(){
        console.log("clicked!")
    }

  return (
    <div onClick={clickHandler} className="product-card">
        <a href={`/products/${product._id}`}>
        <img src={product.image} alt={product.name} />
        <h4>{product.name}</h4>
        <Rating value={product.rating} text={product.numReviews} color="#FFCD38" textColor='#7F8487' />
        <h2>{product.price}</h2>
        </a>
    </div>
  )
}

export default Product