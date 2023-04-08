import React from 'react';
import "./Button.css"

function Button({text, onClick, className, children, disabled}) {
  return (
    <div className={`button ${className} ${disabled && 'button-disabled'}`} onClick={!disabled ? onClick : () => {}}>
      {text}
      {children}
    </div>
  )
}

export default Button
