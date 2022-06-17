import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { addToCart } from '../actions/cartActions';
import {useParams, useSearchParams} from "react-router-dom";

function CartScreen() {

  const {productId} = useParams();
  let [searchParams, setSearchParams] = useSearchParams("");
  let quantity = Number(searchParams.toString().split("=")[1]);

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;

  useEffect(() => {
    dispatch(addToCart(productId, quantity));
  })



  return (
    <div>
      <h1>This is the cart screen</h1>
    </div>
  )
}

export default CartScreen