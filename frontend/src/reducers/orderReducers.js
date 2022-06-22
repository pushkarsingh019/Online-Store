import { ADDRESS_SAVE_FAIL, ADDRESS_SAVE_REQUEST, ADDRESS_SAVE_SUCCESS, PAYMENT_METHOD_SAVE } from "../constants/orderConstants";

export const addressReducer = (state = {userAddress : {}}, action) => {
    switch(action.type){
        case ADDRESS_SAVE_REQUEST:
            return {saved : false, userAddress : {}};
        case ADDRESS_SAVE_SUCCESS:
            return {saved : true, userAddress : action.payload};
        case ADDRESS_SAVE_FAIL:
            return {saved : true, error : action.payload};
        default :
            return state
    }
}

export const paymentMethodReducer = (state = "", action) => {
    switch(action.type){
        case PAYMENT_METHOD_SAVE : 
            return {method : "exists", paymentMethod : action.payload}
        default : 
            return state
    }
}