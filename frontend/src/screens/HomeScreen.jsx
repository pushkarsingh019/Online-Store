import React from 'react'
import products from "../products";
import Product from '../components/Product';

function HomeScreen() {
  return (
    <div className="home-screen">
        <h1>Latest Products</h1>
        <div className="products-display">
            {products.map((product) => {
            return <Product key={product._id} product={product} />
            })}
        </div>
    </div>
  )
}

export default HomeScreen