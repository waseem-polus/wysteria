import React from 'react'
import './Button.css'

export const Button = ({variant, children}) => {
  return (
    <button className={`button button--${variant}`}>{children}</button>
  )
}
