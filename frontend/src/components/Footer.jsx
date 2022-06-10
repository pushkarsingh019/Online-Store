import React from 'react'
import "../index.css";

function Footer() {

    let date = new Date();

  return (
    <div className='footer'>
        <i class="fa-regular fa-copyright"></i> Copyright {date.getFullYear()}
    </div>
  )
}

export default Footer