import { ADDRESS_SAVE_FAIL, ADDRESS_SAVE_REQUEST, ADDRESS_SAVE_SUCCESS } from "../constants/orderConstants";

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