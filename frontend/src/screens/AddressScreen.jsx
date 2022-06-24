import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveAddress } from '../actions/orderActions';

function AddressScreen() {

    const [address, setAddress] = useState("");
    const [city, setCity] = useState("")
    const [pincode,setPincode] = useState("");
    const [state,setState] = useState("");
    const [country,setCountry] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function addressHandler(e){
        dispatch(saveAddress(address, city, pincode, state, country));
        navigate('/payment');
        e.preventDefault();
    }

    return (
        <div>
            <form className='login-form' onSubmit={addressHandler}>
            <input type="text" placeholder='Complete Address'  onChange={(e) => setAddress(e.target.value)}/>
            <br />
            <input type="text" placeholder='Enter City'  onChange={(e) => setCity(e.target.value)}/>
            <br />
            <input type="text" placeholder='Pin Code'  onChange={(e) => setPincode(e.target.value)}/>
            <br />
            <input type="text" placeholder='State' onChange={(e) => setState(e.target.value)}/>
            <br />
            <input type="text" placeholder='Country'  onChange={(e) => setCountry(e.target.value)}/>
            <br />
            <button type="submit" className='button cta'>Add Address</button>
        </form>
        </div>
)
}

export default AddressScreen