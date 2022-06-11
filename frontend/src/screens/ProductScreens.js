import React from 'react'
import {Link, useParams} from "react-router-dom";
import products from "../products";
import Rating from '../components/Rating';
import Button from '../components/Button';

function ProductScreens() {

    let {userId} = useParams();

    let product = products.find(product => product._id === userId);

    return(
        <div className='product-screen screen'>
            <Link className="links" to="/">Go Back</Link>
            <div className='product-section' >
                <div>
                    <img src={product.image} alt={product.name} />
                </div>
                <div className='product-info-section'>
                    <h2>{product.name}</h2>
                    <hr />
                    <Rating value={product.rating} text={product.numReviews} color="#FFCD38" textColor='#7F8487' />
                    <hr />
                    <h4>{product.price}</h4>
                    <hr />
                    <p>{product.description}</p>
                </div>
                <div className='product-shopping-section'>
                    <div className='shop-table'>
                        <span>Price:</span> <span>{product.price}</span>
                    </div>
                    <div className='shop-table'>
                        <span>Status :</span> <span>{product.countInStock === 0? "Out of stock" : "In Stock"}</span>
                    </div>
                    <Button diabled={product.countInStock === 0? 'true' : 'false'} text={product.countInStock ===0? "Out of stock" : "Add To Cart"} class="cta button" />
                </div>
            </div>
        </div>
    )
}

export default ProductScreens