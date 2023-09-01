import React, { useEffect, useId, useState } from 'react'
import { Container } from '../Container'
import { Toggle } from './Toggle'
import { Icon } from '../Icon'
import classNames from 'classnames'

import './CheckList.css'

export const CheckList = ({children, title = null}) => {
    const [checkedCount, setCheckedCount] = useState(0)

    const countChecked = () => children.filter(checkbox => checkbox.props.isChecked).length;
    useEffect(() => {
        setCheckedCount(countChecked)
    }, [countChecked()])

    const setAll = (value) => children.forEach(checkbox => checkbox.props.setIsChecked(value))
    
    let parentCheckVariant = classNames({
        'checkbox': checkedCount === 0 || checkedCount === children.length,
        'parent-checkbox': checkedCount > 0 && checkedCount < children.length
    })

    return (
        <>
        {
            title !== null && 
                <Toggle  
                    isChecked = {checkedCount > 0}
                    onChange={(value) => setAll(!value)}
                    variant = {parentCheckVariant}
                >{title}</Toggle>
        }
            <Container 
                padding = "none"
                gap = "md"
                direction = "column"
            >        
                <fieldset>
                    {children}
                </fieldset>
            </Container>
        </>
    )
}

export const Check = ({children, checked = false, disabled = false, onChange = () => {}}) => {
    const [isChecked, setIsChecked] = useState(checked)
    const [isHovering, setIsHovering] = useState(false)
    const checkboxID = useId();
    
    useEffect(() => {
        setIsChecked(checked)
    }, [checked])
    
    let toggleClass = classNames(
        'toggle',
        'toggle--checkbox',
        { 
            'toggle--checked': !disabled && isChecked,
            'toggle--hover': !disabled && isHovering,
            'toggle--disabled': disabled
        }
    )

    let iconClass = classNames('checkmark')

    let labelClass = classNames('toggle__label')

  return (
    <Container setHovering = {setIsHovering} padding='none'>
        <input 
            className = 'wui-html-checkbox' 
            type='checkbox' 
            id={checkboxID}

            disabled = {disabled}

            onChange={(e) => {
                setIsChecked(e.target.checked)
                onChange(e)
            }}
        />
        <label htmlFor={checkboxID}>
            <Container             
                paddingVer = "xs"
                paddingHor = "md"
                gap = "md"
                align='center'
            >
                <span className={toggleClass}>
                    <Icon 
                        className = {iconClass} 
                        name = "Check" 
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
