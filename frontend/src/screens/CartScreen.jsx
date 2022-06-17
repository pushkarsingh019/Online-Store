import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { addToCart, removeFromCart } from '../actions/cartActions';
import {useParams, useSearchParams, useNavigate} from "react-router-dom";
import "../index.css"


function CartScreen() {

  const {productId} = useParams();
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams("");
  const [removeId, setRemoveId] = useState();
  let quantity = Number(searchParams.toString().split("=")[1]);

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;

  useEffect(() => {
    dispatch(addToCart(productId, quantity));
  })

  function removeItemHandler(id){
    setRemoveId(id);

    dispatch(removeFromCart(removeId));
    navigate('/cart');
    dispatch(addToCart(productId, quantity));
  }



  return (
    <div className='screen'>
      <h1>Shopping List</h1>
      {cartItems.length === 0 ? <h3 className='cart-component'>Your cart is empty</h3> : null }
      <div className="cart-section">
        <div className="products-section">
          {cartItems.map((item) => {
            return(
            <div className="cart-component" >
              <div className="image-section">
                <img src={item.image} alt={item.name} key={item.product} width="100%" />
              </div>
              <div className="info-section">
                <h3>{item.name}</h3>
                <div>
                  <span>Quantity : </span> <span>{item.quantity}</span>
                </div>
                <div>
                <span>Status : </span> <span>{item.countInStock === 0? "Out Of Stock" : "In Stock"}</span>
                </div>  
              </div>
              <div className='info-section'>
                  <h3>${item.price}</h3>
                  <button onClick={() => removeItemHandler(item.product)} className='button delete-item'> <i className="fa-solid fa-circle-trash" /> Remove from Cart</button>
              </div>

            </div>
            )
          })}
        </div>
      
        <div className="summary-section">
            <h2>Order Summary</h2>
            <div className='shop-table'>
              <span>Total Items : </span> <span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
            </div>
            <div className='shop-table'>
              <span>Total cost : </span> <span>{cartItems.reduce((total, item) => total + (item.quantity * item.price), 0).toFixed(2)}</span>
            </div>
            <button className="button cta">Proceed To Checkout</button>
          </div>
      </div>
      </div>
  )
}

export default CartScreen