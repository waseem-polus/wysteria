import React, { forwardRef } from "react";
import classNames from "classnames/bind";

import "./InputField.css";

export const InputButton = ({icon, onClick, setIsActive = () => {}, setIsHovering = () => {}}) => {
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
	);
};

export const InputToggleButton = ({
	iconOn, 
	iconOff, 
	setIsOn, 
	isOn, 
	setIsActive = () => {}, 
	setIsHovering = () => {}, 
	onClick = () => {}
}) => {
	return (
		<button 
			className='input-field__btn'
			onClick={() => {
				onClick();
				setIsOn(!isOn);
			}}

			onFocus={() => setIsActive(true)} 
			onBlur={() => setIsActive(false)}

			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)} 
		>
			{isOn? iconOn : iconOff}
		</button>
	);
};

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
			"input-field": true, 
			"input-field--hover": isHovering && !(isActive || error || disabled),
			"input-field--active": isActive,
			"input-field--error": error,
			"input-field--disabled": disabled
		});

		let labelClass = classNames({
			"input-field__notation" : true,
			"input-field__label--active": isActive,
			"input-field__label--visible": value.length > 0 || isActive,
			"input-field__label--hidden": !(value.length > 0 || isActive), 
			"input-field__label--error": error,
			"input-field__label--disabled": disabled
		});
        
		let errorTipClass = classNames({
			"input-field__notation": true,
			"input-field__error-tip": error
		});

		return (
			<div className='input-field__wrapper'>
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
		);
	}
);
