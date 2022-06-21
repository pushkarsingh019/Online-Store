import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link  } from 'react-router-dom';
import { logoutUser } from '../actions/userActions';
import { userLoginReducer } from '../reducers/userReducers';
import {updateUser} from "../actions/userActions";

function ProfileScreen() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const userData = useSelector(state => state.userLogin);
    const {userInfo} = userData;

    const [name, setName] = useState(userInfo.name);
    const [email, setEmail] = useState(userInfo.email);
    const [password, setPassword] = useState("");

    function logoutHandler(){
        dispatch(logoutUser())
        navigate('/signin');
    }

    function updateUserDeatils(e){
        dispatch(updateUser(name, email, password, userInfo.token))
        navigate('/')
        e.preventDefault();
    }

    return (
       <div className="login-screen">
        {/* {JSON.stringify(userInfo) === "{}" ? <p>should not load </p> : "page should not load"} */}
        <div className="login-form">
            <h2 className='update-profile'>Update Profile</h2>
            <form onSubmit={updateUserDeatils}>
                <input onChange={e => setName(e.target.value)} placeholder={userInfo.name} type="text"  className="update-profile-elements" value={name} />
                <br />
                <input onChange={e => setEmail(e.target.value)} placeholder = {userInfo.email} type="email" className="update-profile-elements" value={email} />
                <br />
                <input onChange={e => setPassword(e.target.value)} type="password" placeholder='enter new password' />
                <br />
                <button type='submit' className="update-profile-elements button update-button cta">Update Profile</button>
            </form>
        </div>
        <div className="user-options">
            <button onClick={logoutHandler} className="button cta">Log out</button>
        </div>
       </div>
  )
}

export default ProfileScreen