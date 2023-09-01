import React, { useEffect, useId, useState } from 'react'
import { Container } from '../Container'
import { Icon } from '../Icon'
import classNames from 'classnames'

import './CheckList.css'

export const RadioList = ({children, disabled = false, initialSelection = 0, title = null, group = useId()}) => {
    const [activeRadio, setActiveRadio] = useState(initialSelection)

    return (
        <>
            {title !== null && <p>{title}</p>}
            <Container
                padding = "none"
                gap = "md"
                direction = "column"
            >
                <fieldset>
                    {
                        children.map((child, index) => {
                            if (child.type.name === "Radio") {
                                return (
                                    <Radio
                                        key = {index} 
                                        group = {group} 

                                        checked = {activeRadio === index}
                                        onChange = {(e) => {
                                            setActiveRadio(index)
                                            if (child.props.hasOwnProperty('onChange')) {
                                                child.props.onChange(e)
                                            }
                                        }}

                                        disabled = {child.props.disabled || disabled}

                                        {...child.props}
                                    ></Radio>
                                )
                            } else if (child.type.name === "RadioList") {
                                return (
                                    <RadioList
                                        group = {group}
                                        disabled = {child.props.disabled || (activeRadio !== (index - 1))}
                                        title = {null}
                                        {...child.props}
                                    ></RadioList>
                                )
                            } else {
                                return child
                            }
                        })
                    }
                </fieldset>
            </Container>
        </>
    )
}

export const Radio = ({
    children, 
    group, 
    checked = false, 
    disabled = false, 
    onChange = (e) => {}
}) => {
    const [isChecked, setIsChecked] = useState(checked)
    const [isHovering, setIsHovering] = useState(false)
    const radioId = useId();
    
    useEffect(() => {
        setIsChecked(checked)
    }, [checked])

    let toggleClass = classNames(
        'toggle',
        'toggle--radio',
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
            type='radio' 
            id={radioId}
            name={group}
            checked = {isChecked}

            disabled = {disabled}

            onChange={(e) => {
                setIsChecked(e.target.checked)
                onChange(e)
            }}
        />
        <label htmlFor={radioId}>
            <Container             
                paddingVer = "xs"
                paddingHor = "md"
                gap = "md"
                align='center'
            >
                <span className={toggleClass}>
                    <Icon 
                        className = {iconClass} 
                        name = "Dot" 
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
