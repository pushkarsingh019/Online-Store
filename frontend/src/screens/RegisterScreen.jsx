import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticateUser, registerUser } from '../actions/userActions';

function RegisterScreen() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch  = useDispatch();
    // const newUserData = useSelector(state => state.userRegister);
    const navigate = useNavigate()


    function registerFormHandler(e){
        dispatch(registerUser(name, email, password));
        dispatch(authenticateUser(email, password));
        e.preventDefault();
        navigate("/");
    }


  return (
    <div className="login-screen">
        <div className='marketing-section'>
            <h2>Register </h2>
            <br />
            <h3>Highest Quality, Best Deals</h3>
        </div>
        <div>
            <form className='login-form' onSubmit={registerFormHandler}>
                <input type="text" placeholder='Gavin Belson' onChange={e => setName(e.target.value)} />
                <br />
                <input onChange={e => setEmail(e.target.value)} type="email" name="email" placeholder='gavin@hooli.com' />
                <br />
                <input onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder='password : killPiedPiper' />
                <br />
                <button className='button cta'>Register</button>
            </form>
        </div>
    </div>
  )
}

export default RegisterScreen