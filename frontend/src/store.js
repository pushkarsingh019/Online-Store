import { createStore,combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools} from "@redux-devtools/extension";
import { productDetailsReducer, productListReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import { userLoginReducer, userRegisterReducer, userUpdateReducer } from "./reducers/userReducers";
import { addressReducer, createOrderReducer, paymentMethodReducer } from "./reducers/orderReducers";

const reducer = combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer,
    cart : cartReducer,
    userLogin : userLoginReducer,
    userRegister : userRegisterReducer,
    userUpdate : userUpdateReducer,
    address : addressReducer,
    payment : paymentMethodReducer,
    createOrder : createOrderReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const userAddressFromStorage = localStorage.getItem('userAddress') ? JSON.parse(localStorage.getItem('userAddress')) : {};
const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : [];
const paymentMethodFromStrorage = localStorage.getItem("paymentMethod") ? localStorage.getItem("paymentMethod") : "";

const initialState = {
    cart : {cartItems : cartItemsFromStorage },
    user : {userInfo : userInfoFromStorage},
    address : {userAddress : userAddressFromStorage},
    payment : {paymentMethod : paymentMethodFromStrorage}
};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
