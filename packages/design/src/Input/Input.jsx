import React, { forwardRef, useState, createContext, useContext } from "react";
import { Toggle, ToggleOff, ToggleOn } from "../Button";
import { Eye, EyeClosed } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { input, inputIcon } from "./styles.js";
import { useOptionallyControlled } from "../hooks";

const InputContext = createContext({ disabled: false, status: "neutral" });

const PasswordAction = ({ onTogglePassword, disabled }) => {
    return (
        <div className="absolute right-1 flex h-full flex-col justify-center">
            <Toggle
                className="grid h-auto place-content-center p-[2px] md:h-6"
                variant="text"
                action="neutral"
                size="icon"
                onChange={onTogglePassword}
                disabled={disabled}
            >
                <ToggleOn>
                    <Eye className="aspect-square h-5 md:h-4" />
                </ToggleOn>
                <ToggleOff>
                    <EyeClosed className="aspect-square h-5 md:h-4" />
                </ToggleOff>
            </Toggle>
        </div>
    );
};

const InputIcon = forwardRef(({ children, className = "", ...props }, ref) => {
    const { disabled, status } = useContext(InputContext);

    return (
        <Slot
            className={twMerge(
                inputIcon({ status: disabled ? "disabled" : status }),
                className,
            )}
            size={18}
            ref={ref}
            {...props}
        >
            {children}
        </Slot>
    );
});
InputIcon.displayName = "InputIcon";

const Input = forwardRef(
    (
        {
            children,
            type = "text",
            value: externalValue,
            defaultValue = "",
            onChange = () => {},
            className = "",
            status = "neutral",
            disabled,
            ...props
        },
        ref,
    ) => {
        const [internalType, setInternalType] = useState(type);
        const [value, handleChange] = useOptionallyControlled(
            externalValue,
            defaultValue,
            onChange,
        );

        const handleTogglePassword = (showPassword) => {
            setInternalType(showPassword ? "text" : "password");
        };

        return (
            <InputContext.Provider value={{ disabled, status }}>
                <label className="group relative flex h-fit w-fit shadow-none">
                    {children}
                    <input
                        className={twMerge(
                            input({
                                padding: children ? "icon" : "",
                                status,
                            }),
                            className,
                        )}
                        type={internalType}
                        value={value}
                        onChange={(e) => {
                            handleChange(e, e.target.value);
                        }}
                        disabled={disabled}
                        ref={ref}
                        {...props}
                    />
                    {type === "password" && (
                        <PasswordAction
                            onTogglePassword={handleTogglePassword}
                            disabled={disabled}
                        />
                    )}
                </label>
            </InputContext.Provider>
        );
    },
);
Input.displayName = "Input";

export { Input, InputIcon };
