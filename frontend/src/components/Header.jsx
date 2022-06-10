import React from 'react'

function Header() {
  return (
    <nav className="navbar">
        <div className="brand-title">
            The Online Shop
        </div>
        <a href="#" className='toggle-button'>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
        <div className="navbar-links">
            <ul>
                <li><a href="/shop"><i class="fa-solid fa-store"></i> Shop </a></li>
                <li><a href="/signin"><i class="fa-solid fa-user"></i> Sign in</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Header