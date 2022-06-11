import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
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
                <li><Link to="/shop"><i class="fa-solid fa-store"></i>Shop</Link></li>
                <li><Link to="/signin"><i class="fa-solid fa-user"></i> Sign in</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Header