import axios from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "../constants/userConstants";

export const authenticateUser = (email, password) => async(dispatch) => {
    try {
        dispatch({
            type : USER_LOGIN_REQUEST,
        })

        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        };

        const {data} = await axios.post('/api/users/login', {email, password}, config);

        dispatch({
            type : USER_LOGIN_SUCCESS,
            payload : data
        })

        localStorage.setItem("userInfo", JSON.stringify(data));

    } catch (error) {
        dispatch({
            type : USER_LOGIN_FAIL,
            payload : error.message
        })
    }
}

export const logoutUser = () => async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({
        type : USER_LOGOUT
    })
}

export const registerUser = (name, email, password) => async(dispatch) => {
    try {
        dispatch({
            type : USER_REGISTER_REQUEST
        });

        const config = {
            headers : {
                "content-type"  : "application/json"
            }
        }

        await axios.post("/api/users", {name, email, password}, config);

        dispatch({
            type : USER_REGISTER_SUCCESS,
            payload : {name, email, password}
        })
    } catch (error) {
        dispatch({
            type : USER_REGISTER_FAIL,
            error : error.message
        })
    }
}

export const updateUser = (name, email, password, token) => async(dispatch) => {
    try {
        dispatch({
            type : USER_UPDATE_REQUEST
        })
    
        const config = {
            headers : {
                "content-type" : "application/json"
            }
        }
    
        await axios.put('/api/users', {
            name, email, password, token
        }, config)
    
        dispatch({
            type : USER_UPDATE_SUCCESS
        })
    } catch (error) {
        dispatch({
            type : USER_UPDATE_FAIL
        })
    }
}