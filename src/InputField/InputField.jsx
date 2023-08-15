import React, { forwardRef } from 'react'
import classNames from 'classnames/bind';

import './InputField.css'

export const InputButton = ({icon, onClick, setIsActive, setIsHovering}) => {
    return (
        <button
            className='input-field__btn'
            onClick={onClick}

            onFocus={() => setIsActive(true)} 
            onBlur={() => setIsActive(false)}

            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)} 
        >
            {icon}
        </button>
    )
}

export const InputToggleButton = ({iconOn, iconOff, setIsOn, isOn, setIsActive, setIsHovering, onClick = () => {}}) => {
    return (
        <button 
            className='input-field__btn'
            onClick={() => {
                onClick()
                setIsOn(!isOn)
            }}

            onFocus={() => setIsActive(true)} 
            onBlur={() => setIsActive(false)}

            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)} 
        >
            {isOn? iconOn : iconOff}
        </button>
    )
}

export const InputField = forwardRef(
    function InputField({
        variant,
        setValue,
        setIsActive,
        setIsHovering,
        value,
        isHovering,
        isActive,
        disabled, 
        error, 
        errorTip,
        placeholder,
        label,
        right = null
    }, ref) {
        let textFieldClass = classNames({
            'text-field': true, 
            'text-field--hover': isHovering && !(isActive || error || disabled),
            'text-field--active': isActive,
            'text-field--error': error,
            'text-field--disabled': disabled
        });

        let labelClass = classNames({
            'text-field__notation' : true,
            'text-field__label--active': isActive,
            'text-field__label--visible': value.length > 0 || isActive,
            'text-field__label--hidden': !(value.length > 0 || isActive), 
            'text-field__label--error': error,
            'text-field__label--disabled': disabled
        })
        
        let errorTipClass = classNames({
            'text-field__notation': true,
            'text-field__error-tip': error
        })

        return (
            <div className='text-field__wrapper'>
                <label className={labelClass}>{label}</label>
                <input 
                    type={variant}
                    className={textFieldClass} 
                    placeholder={placeholder} 
                    
                    onChange={(e) => setValue(e.target.value)}
                    
                    onFocus={() => setIsActive(true)} 
                    onBlur={() => setIsActive(false)}

                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)} 
                    
                    disabled={disabled? "disabled" : ""}

                    value={value}
                    ref={ref}
                />
                <label className={errorTipClass}>({errorTip})</label>
                
                {right != null && (
                    <div className="input-field__right">
                        {right}
                    </div>
                )}
            </div>
        )
    }
)
