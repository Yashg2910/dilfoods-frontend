import React from 'react';
import "./Button.css"

function Button({text, onClick, className, children, disabled}) {
  function handleOnClick() {
    if (!disabled) onClick();
  }
  return (
    <div className={`button ${className} ${disabled && 'button-disabled'}`} onClick={handleOnClick}>
      {text}
      {children}
    </div>
  )
}

export default Button
