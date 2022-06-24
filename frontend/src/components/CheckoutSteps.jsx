import React from 'react'

function CheckoutSteps(props) {
  return (
    <div className='checkout-steps'>
        <span className={props.step ? props.step : "disabled"}>Sign up</span>
        <span className={props.step ? props.step : "disabled"}>Shipping Address</span>
        <span className={props.step ? props.step : "disabled"}>Payment Details</span>
        <span className={props.step ? props.step : "disabled"}>Place Order</span>
    </div>
  )
}

export default CheckoutSteps