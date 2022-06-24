import { ADDRESS_SAVE_FAIL, ADDRESS_SAVE_REQUEST, ADDRESS_SAVE_SUCCESS, CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, PAYMENT_METHOD_SAVE } from "../constants/orderConstants"
import axios from "axios";

export const saveAddress = (address, city, pincode, state, country) => async(dispatch, getState) => {
    try {
        dispatch({
            type : ADDRESS_SAVE_REQUEST
        })
    
        dispatch({
            type : ADDRESS_SAVE_SUCCESS,
            payload : {
                address, city, pincode, state, country
            }
        })
    
        localStorage.setItem('userAddress', JSON.stringify(getState().address.userAddress))
    } catch (error) {
        dispatch({
            type : ADDRESS_SAVE_FAIL,
            payload : error
        })
    }

}

export const paymentMethod = (methodName) => async(dispatch, getState) => {
    dispatch({
        type : PAYMENT_METHOD_SAVE,
        payload : methodName
    })

    localStorage.setItem('paymentMethod', getState().payment.paymentMethod);
}

export const createOrder = (order) => async(dispatch, getState) => {
    try {
        dispatch({
            type : CREATE_ORDER_REQUEST
        })
    
        const {userLogin : {userInfo}} = getState();
    
        const config = {
            headers : {
                "content-type" : "application/json",
                authorization : `Bearer ${userInfo.token}`
            }
        }
    
        const {data} = await axios.post("/api/orders", order, config);
        
        dispatch({
            type : CREATE_ORDER_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            type : CREATE_ORDER_FAIL,
            payload : error
        })
    }

}