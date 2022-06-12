import React, {useState} from 'react'
import Product from '../components/Product';
import axios from "axios"

function HomeScreen() {

  const [products, setProducts] = useState([]);


  useState(()=> {
    const fetchProducts = async () => {
      const {data} = await axios.get("/api/products");
      setProducts(data)
    }

    fetchProducts();

  })


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