import React from 'react'
import './TextField.css'
import { useState } from 'react'

export const TextField = ({
    setValue,
    value="",
    disabled = false, 
    error = false, 
    errorTip="Fix all errors",
    placeholder = "Start typing...",
    label="label"
}) => {
    const [isActive, setIsActive] = useState(false)
    const [isHovering, setIsHovering] = useState(false)

    let textFieldClass = `
        text-field 
        ${isActive && 'text-field--active'}
        ${error && 'text-field--error'}
        ${disabled && 'text-field--disabled'}
        ${(isHovering && !(isActive || error || disabled)) && 'text-field--hover'}
    `;

    let labelClass = `
        text-field__notation 
        ${value.length > 0 || isActive? 'text-field__label--visible' : 'text-field__label--hidden'}
        ${isActive && 'text-field__label--active'}
        ${error && 'text-field__label--error'}
        ${disabled && 'text-field__label--disabled'}
    `;

    let errorTipClass = `
        text-field__notation 
        ${error && 'text-field__error-tip'}
    `;

    return (
        <div className='text-field__wrapper'>
            <label className={labelClass}>{label}</label>
            <input 
                type="password"
                className={textFieldClass} 
                placeholder={placeholder} 
                
                onChange={(e) => setValue(e.target.value)}
                
                onFocus={() => setIsActive(true)} 
                onBlur={() => setIsActive(false)}

                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)} 
                
                disabled={disabled? "disabled" : ""}

                value={value}
            />
            <label className={errorTipClass}>({errorTip})</label>
        </div>
    )
}
