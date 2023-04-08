import React from 'react';
import "./Button.css"

function Button({text, onClick, className, children}) {
  return (
    <div className={`button ${className}`} onClick={onClick}>
      {text}
      {children}
    </div>
  )
}

export default Button
