import React, { useEffect, useId, useState } from 'react'
import { Container } from '../Container'
import { Icon } from '../Icon'
import classNames from 'classnames'

import './Toggle.css'

export const Toggle = ({ 
    children,  
    variant,
    group,
    parent = false,
    checked = false,
    disabled = false, 
    onChange = () => {} 
}) => {
    const [isHovering, setIsHovering] = useState(false)
    const [isChecked, setIsChecked] = useState(checked)
    const toggleId = useId()

    useEffect(() => {
        setIsChecked(checked)
    }, [checked])

    let toggleClass = classNames(
        'toggle',
        `toggle--${variant}`,
        { 
            'toggle--checked': !disabled && isChecked,
            'toggle--hover': !disabled && isHovering,
            'toggle--disabled': disabled
        }
    )

    let iconClass = classNames(
        'checkmark',
        {
            'checkmark--hover': !disabled && isHovering,
            'checkmark--checked': !disabled && isChecked,
        }
    )

    let labelClass = classNames(
        'toggle__label',
        { 'toggle__label--disabled': disabled }
    )

    let iconName = classNames({
        'Check': !parent && (variant === "checkbox"),
        'Minus': parent && (variant === "checkbox"),
        'Dot': variant === "radio"
    })

    return (
        <Container setHovering = {setIsHovering} padding='none'>
            <input 
                className = 'wui-html-checkbox' 
                type = {variant}
                id = {toggleId}
                name = {group}
                checked = {isChecked}

                disabled = {disabled}

                onChange={(e) => {
                    setIsChecked(e.target.checked)
                    onChange(e)
                }}
            />
            <label htmlFor={toggleId}>
                <Container             
                    paddingVer = "xs"
                    paddingHor = "md"
                    gap = "md"
                    align='center'
                >
                    <span className={toggleClass}>
                        <Icon 
                            className = {iconClass} 
                            name = {iconName} 
                            size = {18} 
                            strokeWidth = {2.5}
                        ></Icon>
                    </span>
                    <p className={labelClass}>{children}</p>
                </Container>
            </label>
        </Container>
    )
}