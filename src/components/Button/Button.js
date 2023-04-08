import React from 'react';
import "./Button.css"

function Button({text, onClick, classname}) {
  return (
    <div className='button' onClick={onClick}>
      {text}
    </div>
  )
}

export default Button
