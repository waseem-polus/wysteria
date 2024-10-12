import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { InputField, InputToggleButton } from "./InputField";

export const PasswordField = ({
    setValue,
    value="",
    disabled = false, 
    error = false, 
    errorTip="Fix all errors",
    placeholder = "Enter Password...",
    label="Password"
}) => {
    const [isActive, setIsActive] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isPassVisible, setIsPassVisible] = useState(false);

    const toggleVisibility = (
        <InputToggleButton 
            setIsOn={setIsPassVisible}
            isOn={isPassVisible}

            iconOn={<EyeOff size={16}></EyeOff>}
            iconOff={<Eye size={16}></Eye>}

            setIsActive={setIsActive}
            setIsHovering={setIsHovering}    
        ></InputToggleButton>
    );

    return (
        <InputField
            variant = {isPassVisible? "text" : "password"}
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
            right={toggleVisibility}
        ></InputField>
    );
};
