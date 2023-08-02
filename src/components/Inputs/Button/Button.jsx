import React from 'react'
import './Button.css'
import Icon from '../../Icon'

export const Button = ({children, onClick, variant, leftIcon=null, rightIcon=null}) => {
  return (
    <button className={`button button--${variant}`} onClick={onClick}>
      {leftIcon != null && <Icon size={18} strokeWidth={2} name={leftIcon} />}
      {children}
      {rightIcon != null && <Icon size={18} strokeWidth={2} name={rightIcon} />}
      </button>
  )
}
