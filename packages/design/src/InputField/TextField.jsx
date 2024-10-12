import React, { useState } from "react";
import { InputField } from "./InputField";

export const TextField = ({
    setValue,
    value="",
    disabled = false, 
    error = false, 
    errorTip="Fix all errors",
    placeholder = "Start typing...",
    label="label"
}) => {
    const [isActive, setIsActive] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    return (
        <InputField
            variant = "text"
            setValue = {setValue}
            setIsActive = {setIsActive}
            setIsHovering = {setIsHovering}
            value = {value}
            isHovering = {isHovering}
            isActive = {isActive}
            disabled = {disabled}
            error = {error}
            errorTip = {errorTip}
            placeholder = {placeholder}
            label = {label}
        ></InputField>
    );
};