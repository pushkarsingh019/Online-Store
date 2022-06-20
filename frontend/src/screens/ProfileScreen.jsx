import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../actions/userActions';

function ProfileScreen() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const userData = useSelector(state => state.userLogin);
    const {userInfo} = userData;

    function logoutHandler(){
        dispatch(logoutUser());
        navigate('/signin');
    }

    return (
        <div>
            {userInfo ? 
                <div>
                    <button onClick={logoutHandler} className='button cta'>Log out</button>
                </div>
            : <h1>There is nothing here</h1>}
        </div>
  )
}

export default ProfileScreen