import React, { forwardRef, useState } from "react";
import { Toggle, ToggleOff, ToggleOn } from "../Button";
import { Eye, EyeClosed } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { input } from "./styles.js";
import { useOptionallyControlled } from "../hooks";

const PasswordAction = ({ onTogglePassword }) => {
    return (
        <div className="absolute right-1 flex h-full flex-col justify-center">
            <Toggle
                className="grid h-auto place-content-center p-[2px] md:h-6"
                variant="text"
                action="neutral"
                size="icon"
                onChange={onTogglePassword}
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
    return (
        <Slot
            ref={ref}
            className={twMerge(
                "absolute left-2 top-1/2 -translate-y-1/2 cursor-text text-zinc-400 peer-disabled:cursor-not-allowed",
                className,
            )}
            size={18}
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
            value: externalValue,
            defaultValue = "",
            className = "",
            onChange = () => {},
            type = "text",
            disableActions = false,
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
            <label className="group relative flex h-fit w-fit shadow-none">
                {children}
                <input
                    className={twMerge(
                        input({ padding: children ? "icon" : "" }),
                        className,
                    )}
                    value={value}
                    onChange={(e) => {
                        handleChange(e, e.target.value);
                    }}
                    ref={ref}
                    type={internalType}
                    {...props}
                />
                {!disableActions && type === "password" && (
                    <PasswordAction onTogglePassword={handleTogglePassword} />
                )}
            </label>
        );
    },
);
Input.displayName = "Input";

export { Input, InputIcon };
