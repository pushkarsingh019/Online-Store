import { authenticateUser } from "../actions/userActions";
import { useState } from "react";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function LoginScreen() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userLogin = useSelector(state => state.userLogin);
    const {loading} = userLogin;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function formSubmitHandler(e){
        dispatch(authenticateUser(email, password))
        e.preventDefault();
        navigate("/address");
    }

    return (
    <div className="login-screen">
        <div className="marketing-section">
            <h2>Login to experience the best shopping experince</h2>
        </div>
        <div>
        {loading ? <Loading /> : 
            <form className="login-form" onSubmit={formSubmitHandler}>
            <input type="email" name="email" placeholder="gavin@hooli.com" onChange={e => setEmail(e.target.value)} />
            <br />
            <input type="password" name="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
            <br />
            <button type="submit" className="button cta">Login</button>
            <br />
            <p>New user ? <Link className="link-text" to="/register">register here</Link></p>
        </form>
        }
        </div>
    </div>
  )
}

export default LoginScreen