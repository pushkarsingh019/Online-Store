import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { paymentMethod } from '../actions/orderActions';
import CheckoutSteps from '../components/CheckoutSteps';

function PaymentScreen() {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const method = "PayPal";

  function paymentChoiceHandler(){
    dispatch(paymentMethod(method))
    navigate('/order');
  }


  return (
    <div>
      <div className='login-screen'>
        <div>
            <h1 className='header'>How do you want to pay?</h1>
            <br />
            <input type="checkbox" name="" id="" value="paypal" />
            <label htmlFor="paypal">  PayPal or Credit Card</label>
            <br />
            <button onClick={paymentChoiceHandler} className='button cta'>Choose payment method</button>
        </div>
    </div>
    </div>
  )
}

export default PaymentScreen