import React from 'react'

function Rating({value, text, color, textColor}) {
  return (
    <div className="rating">
        <small>
          <i style={{color : color}} className={value >= 1 ? 'fa-solid fa-star' : value >= 0.5? 'fa-regular fa-star-half-stroke' : 'fa-regular fa-star' }></i>
        </small>
        <small>
          <i style={{color : color}} className={value >= 2 ? 'fa-solid fa-star' : value >= 1.5? 'fa-regular fa-star-half-stroke' : 'fa-regular fa-star' }></i>
        </small>
        <small>
          <i style={{color : color}} className={value >= 3 ? 'fa-solid fa-star' : value >= 2.5? 'fa-regular fa-star-half-stroke' : 'fa-regular fa-star' }></i>
        </small>
        <small>
          <i style={{color : color}} className={value >= 4 ? 'fa-solid fa-star' : value >= 3.5? 'fa-regular fa-star-half-stroke' : 'fa-regular fa-star' }></i>
        </small>
        <small>
          <i style={{color : color}} className={value >= 5 ? 'fa-solid fa-star' : value >= 4.5? 'fa-regular fa-star-half-stroke' : 'fa-regular fa-star' }></i>
        </small>
        <small style={{color : textColor}}>  {text} reviews</small>
    </div>

  )
}

export default Rating;