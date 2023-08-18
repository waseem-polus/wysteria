import React, { useState } from 'react'
import { Icon } from '../Icon'
import classNames from 'classnames';

import './Button.css'

export const Button = ({
  onClick, 
  children = null, 
  padding = "md",
  variant = "filled", 
  actionType = "progressive", 
  leftIcon = null, 
  rightIcon = null,
  disabled = false
}) => {
  const [isHovering, setIsHovering] = useState(false)
  const [isActive, setIsActive] = useState(false)
  
  let buttonClass = classNames(
    `button button--${variant}`,
    `button--${actionType}`,
    `padding-${padding}`,
    { 
      'button--icon-only': children === null,
      'button--hover': !disabled && isHovering,
      'button--active': !disabled && isActive
    }
  )

  return (
    <button 
      className={buttonClass} 
      onClick={onClick} 
      
      disabled={disabled}

      onFocus={() => setIsActive(true)} 
      onBlur={() => setIsActive(false)}

      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)} 
    >
      {leftIcon != null && <Icon size={20} strokeWidth={1.5} name={leftIcon} />}
      {children}
      {rightIcon != null && <Icon size={20} strokeWidth={1.5} name={rightIcon} />}
    </button>
  )
}
