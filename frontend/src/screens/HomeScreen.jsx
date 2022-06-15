import React, {useState} from 'react'
import Product from '../components/Product';
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../actions/productActions";
import Loading from '../components/Loading';

function HomeScreen() {

  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);

  const {loading, error, products} = productList;

  useState(() => {
    dispatch(listProducts());
  }, [dispatch])


  return (
    <div className="home-screen">
        <h1>Latest Products</h1>
        {loading ? (
          <Loading />
        ) : error ? (
          {error}
        ) : (
          <div className="products-display">
            {products.map((product) => {
            return <Product key={product._id} product={product} />
            })}
        </div>
        )}
    </div>  
  )
}

export default HomeScreen