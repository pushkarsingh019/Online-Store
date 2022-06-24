import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {createOrder} from "../actions/orderActions.js"


function OrderScreen() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const shippingAddress = useSelector(state => state.address);
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart;
    const paymentData = useSelector(state => state.payment);
    const {paymentMethod} = paymentData;
    const {userAddress} = shippingAddress;

    function calculateTotalPrice(){
      let total = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0).toFixed(2);

      return total

    }

    function proceedHandler(){
        dispatch(createOrder({
          orderItems : cart.cartItems,
          shippingAddress : userAddress.address,
          paymentMethod : paymentMethod,
          shippingPrice : 10,
          totalPrice : calculateTotalPrice(),
        }))
    }

     const orderData = useSelector(state => state.createOrder);
     const {order, success, error} = orderData;

    useEffect(() => {
      if(success){
        navigate(`/orders/${order._id}`);
      }
      // eslint-disable-next-line
    }, [success, navigate])

  return (
    <div className='order-screen'>
        <h1>Order Details</h1>
        <div className='order-details'>
            <h3>Shipping Address</h3>
            <p>{`${userAddress.address} ${userAddress.city} ${userAddress.state} ${userAddress.pincode} ${userAddress.country}`}</p>
            <br />
            <p>Payment Method : <b>{paymentMethod}</b></p>
        </div>
        <div className='order-page-grid'>
            <div>
                <h2>Products Ordered</h2>
                {cartItems.map((product) => {
                    return (
                    //    <Link to={`/products/${product.product}`}>
                            <div className='product-card order-card'>
                                <span>{product.name}</span>
                                <span>{product.quantity}</span>
                                <span>{product.price}</span>
                                {/* <button onClick={deleteProductHandler(product.product)} className='delete-product'>X</button> */}
                            </div>
                    //    </Link>
                    )
                })}
            </div>
            <div>
            <div className="summary-section">
            <h2>Order Summary</h2>
            <div className='shop-table'>
              <span>Total Items : </span> <span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
            </div>
            <div className='shop-table'>
              <span>Total cost : </span> <span>{cartItems.reduce((total, item) => total + (item.quantity * item.price), 0).toFixed(2)}</span>
            </div>
            {error ? <p>{error}</p> : null}
            <button onClick={proceedHandler}  className={cartItems.length === 0 ? "button cta disabled" : "button cta"}>Proceed To Payment</button>
          </div>
            </div>
        </div>
    </div>
  )
}

export default OrderScreen