import React from 'react'
import { Icon } from '../Icon'

import './Button.css'

export const Button = ({children, onClick, variant = "filled", actionType = "progressive", leftIcon=null, rightIcon=null}) => {
  let buttonClass = `button button--${variant} button--${actionType}`;
  
  return (
    <button className={buttonClass} onClick={onClick}>
      {leftIcon != null && <Icon size={20} strokeWidth={1.5} name={leftIcon} />}
      {children}
      {rightIcon != null && <Icon size={20} strokeWidth={1.5} name={rightIcon} />}
    </button>
  )
}
