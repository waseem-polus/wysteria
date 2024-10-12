import React, { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { InputButton, InputField } from "./InputField";

export const NumberField = ({
    setValue,
    value="",
    disabled = false, 
    error = false, 
    errorTip="Fix all errors",
    placeholder = "Enter Number...",
    label="Label"
}) => {
    const [isActive, setIsActive] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const inputRef = useRef(null);

    const handleStepUp = () => {
        inputRef.current.stepUp();
        setValue(inputRef.current.value);
    };

    const handleStepDown = () => {
        inputRef.current.stepDown();
        setValue(inputRef.current.value);
    };

    return (
        <InputField
            variant = "number"
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
            ref = {inputRef}
            right = {
                <>
                    <InputButton
                        icon={<ChevronUp size={16}></ChevronUp>}
                        
                        onClick={handleStepUp}

                        setIsActive={setIsActive}
                        setIsHovering={setIsHovering}
                    ></InputButton>

                    <InputButton
                        icon={<ChevronDown size={16}></ChevronDown>}
                        onClick={handleStepDown}

                        setIsActive={setIsActive}
                        setIsHovering={setIsHovering}
                    ></InputButton>
                </>
            }
        ></InputField>
    );
};
