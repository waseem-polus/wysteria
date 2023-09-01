import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { Container } from '../Container'
import { Icon } from '../Icon'
import classNames from 'classnames'

import './Toggle.css'

export const Toggle = forwardRef(
    function Toggle(
        { 
            variant, 
            children, 
            setIsChecked : extSetIsChecked, 
            isChecked : extIsChecked = false, 
            disabled = false, 
            onChange = () => {} 
        }, 
        ref
    ) {
        const [isHovering, setIsHovering] = useState(false)
        const [isChecked, setIsChecked] = useState(false)

        useEffect(() => {
            setIsChecked(extIsChecked)
        }, [extIsChecked])

        useImperativeHandle(ref, () => {
            return {
                toggle() {
                    setIsChecked(!isChecked)
                    extSetIsChecked(isChecked)

                    return isChecked
                },
                setIsChecked(value) {
                    setIsChecked(value)
                    extSetIsChecked(value)

                    return value
                }
            }
        }, [])

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
            'Check': variant === "checkbox",
            'Dot': variant === "radio",
            'Minus': variant === "parent-checkbox"
        })

        return (
            <Container 
                onClick = {() => {
                    setIsChecked(!isChecked)
                    extSetIsChecked(isChecked)
                    onChange(isChecked)
                }}
                setHovering = {setIsHovering}
                
                paddingVer = "xs"
                paddingHor = "md"
                gap = "md"
                align='center'
                style={disabled? {cursor: "not-allowed"} : {cursor: "pointer"}}
            >
                <span className={toggleClass}>
                    <Icon 
                        className = {iconClass} 
                        name = {iconName} 
                        size = {18} 
                        strokeWidth = {2.5}
                    ></Icon>
                </span>
                <label className={labelClass}>{children}</label>
            </Container>
        )
    }
)
