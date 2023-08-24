import React, { useState } from 'react'
import { Container } from '../Container'
import { Icon } from '../Icon'
import classNames from 'classnames'

import './Toggle.css'

export const Toggle = ({ variant, children, setIsChecked, isChecked, onChange = () => {} }) => {
    const [isHovering, setIsHovering] = useState(false)

    let toggleClass = classNames(
        'toggle',
        `toggle--${variant}`,
        { 
            'toggle--checked': isChecked,
            'toggle--hover': isHovering,
        }
    )

    let iconClass = classNames(
        'checkmark',
        {
            'checkmark--hover': isHovering,
            'checkmark--checked': isChecked
        }
    )

    let iconName = classNames({
        'Check': variant === "checkbox",
        'Dot': variant === "radio",
        'Minus': variant === "parent-checkbox"
    })

  return (
    <Container 
        onClick = {() => {
            setIsChecked(!isChecked)
            onChange(isChecked)
        }}
        setHovering = {setIsHovering}
        
        paddingVer = "xs"
        paddingHor = "md"
        gap = "md"
        align='center'
        style={{cursor: "pointer"}}
    >
        <span className={toggleClass}>
            <Icon 
                className = {iconClass} 
                name = {iconName} 
                size = {18} 
                strokeWidth = {2.5}
            ></Icon>
        </span>
        <label className='toggle__label'>{children}</label>
    </Container>
  )
}
