import React from 'react'

function Button(props) {
  return (
    <button disabled={props.disabled} className={props.class}>{props.text}</button>
  )
}

export default Button