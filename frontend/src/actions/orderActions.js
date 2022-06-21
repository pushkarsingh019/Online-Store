import { ADDRESS_SAVE_FAIL, ADDRESS_SAVE_REQUEST, ADDRESS_SAVE_SUCCESS } from "../constants/orderConstants"

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