import React, {useEffect, useState} from 'react'
import {Link, Navigate, useParams} from "react-router-dom";
import Rating from '../components/Rating';
import { listProductDeatils } from '../actions/productActions';
import {useDispatch, useSelector} from "react-redux";
import Loading from '../components/Loading';
import { useNavigate } from "react-router-dom";

function ProductScreens() {

    let {productId} = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.productDetails);

    const {loading, error, product} = productDetails;

    useEffect(() => {
       dispatch(listProductDeatils(productId));
    }, [dispatch, productId]);


    const [quantity, setQuantity] = useState(0);

    function addToCartHandler(){
        navigate(`/cart/${productId}?quantity=${quantity}`);
    }


    return(
        <div className='product-screen screen'>
            <Link className="links" to="/">Go Back</Link>
            {loading ? <Loading /> : error ? <h3>{error}</h3> : 
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
                    {product.countInStock === 0? null : 
                        <div className="shop-table">
                            <span>Quantity: </span>
                            <select name="quantity-select" onChange={e => setQuantity(e.target.value)}>
                                {[...Array(product.countInStock).keys()].map((x) => {
                                    return (<option key={x+1} value={x+1}>{x+1}</option>)
                                })}
                            </select>
                        </div>
                    }
                    <button onClick={addToCartHandler} className={product.countInStock === 0? "disabled cta button" : "cta button"}>{product.countInStock ===0? "Out of stock" : "Add To Cart"}</button>
                </div>
            </div> 
                }
        </div>
    )
}

export default ProductScreens