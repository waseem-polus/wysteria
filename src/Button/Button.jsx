import React from 'react'
import { Icon } from '../Icon'
import classNames from 'classnames';

import './Button.css'

export const Button = ({
  onClick, 
  children = null, 
  padding = "md",
  variant = "filled", 
  actionType = "progressive", 
  leftIcon=null, 
  rightIcon=null
}) => {
  let buttonClass = classNames(
    `button button--${variant}`,
    `button--${actionType}`,
    `padding-${padding}`,
    { 'button--icon-only': children === null }
  )

  return (
    <button className={buttonClass} onClick={onClick}>
      {leftIcon != null && <Icon size={20} strokeWidth={1.5} name={leftIcon} />}
      {children}
      {rightIcon != null && <Icon size={20} strokeWidth={1.5} name={rightIcon} />}
    </button>
  )
}
