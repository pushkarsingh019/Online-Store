import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Header() {

    const userData = useSelector(state => state.userLogin);
    const {userInfo}  = userData;

    console.log(userInfo ? userInfo : userInfo);

  return (
    <nav className="navbar">
        <div className="brand-title">
            <Link className='brand-title-link' to="/">The Online Shop</Link>
        </div>
        <a href="#" className='toggle-button'>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
        <div className="navbar-links">
            <ul>
                <li><Link to="/"><i class="fa-solid fa-store"></i>Shop</Link></li>
                <li><Link to="/cart/"><i class="fa-solid fa-cart-shopping"></i> Cart</Link></li>
                {JSON.stringify(userInfo) === "{}" ? <li><Link to="/signin"><i class="fa-solid fa-user"></i> Sign in</Link></li> : <li><Link to="/users/profile">{userInfo.name}</Link></li>}
                {/* {typeof userInfo === "undefined" ? <li><Link to="/users/profile">{userInfo.name}</Link></li> : <li><Link to="/signin"><i class="fa-solid fa-user"></i> Sign in</Link></li> } */}
                {/* {typeof userInfo === "undefined" ?
                    <li><Link to="/signin"><i class="fa-solid fa-user"></i> Sign in</Link></li> 

                    :
                    <li><Link to="/users/profile">{userInfo.name}</Link></li>
                } */}
                {/* {typeof userInfo === undefined ? <li><Link to="/signin"><i class="fa-solid fa-user"></i> Sign in</Link></li> : 
                    Object.keys(userInfo).length === 0 ? <li><Link to="/signin"><i class="fa-solid fa-user"></i> Sign in</Link></li>  : <li><Link to="/users/profile">{userInfo.name}</Link></li>
                } */}
                {/* {Object.keys(userInfo).length === 0 ? <li><Link to="/signin"><i class="fa-solid fa-user"></i> Sign in</Link></li>  : <li><Link to="/users/profile">{userInfo.name}</Link></li>  */}
{/* } */}
            </ul>
        </div>
    </nav> 
  )
}

export default Header