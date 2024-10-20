import React, { forwardRef, useRef, useImperativeHandle, useState } from "react";
import { Button, Toggle, ToggleOff, ToggleOn } from "../Button";
import { ChevronDown, ChevronUp, Eye, EyeClosed, X } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { input } from "./styles.js";
import { useOptionallyControlled } from "../hooks";

const InputActionButton = ({
    children,
    asChild = false,
    className = "",
    ...props
}) => {
    const Comp = asChild ? Slot : Button;

    return (
        <Comp
            className={twMerge(
                "grid h-auto place-content-center p-[2px] md:h-6",
                className,
            )}
            variant="text"
            action="neutral"
            size="icon"
            {...props}
        >
            <Slottable>{children}</Slottable>
        </Comp>
    );
};

const InputActionIcon = ({ children, className = "" }) => {
    return (
        <Slot className={twMerge("aspect-square h-5 md:h-4", className)}>
            {children}
        </Slot>
    );
};

const NumberAction = ({ onStepUp, onStepDown }) => {
    return (
        <div className="invisible absolute right-1 flex h-full flex-col justify-center md:visible">
            <Button
                className="min-w-6 p-0"
                onClick={onStepUp}
                variant="text"
                action="neutral"
            >
                <ChevronUp size={16} />
            </Button>
            <Button
                className="min-w-6 p-0"
                onClick={onStepDown}
                variant="text"
                action="neutral"
            >
                <ChevronDown size={16} />
            </Button>
        </div>
    );
};

const PasswordAction = ({ onTogglePassword }) => {
    return (
        <div className="absolute right-1 flex h-full flex-col justify-center">
            <InputActionButton asChild>
                <Toggle onChange={onTogglePassword}>
                    <ToggleOn>
                        <InputActionIcon>
                            <Eye />
                        </InputActionIcon>
                    </ToggleOn>
                    <ToggleOff>
                        <InputActionIcon>
                            <EyeClosed />
                        </InputActionIcon>
                    </ToggleOff>
                </Toggle>
            </InputActionButton>
        </div>
    );
};

const SearchAction = ({ onClear }) => {
    return (
        <div className="absolute right-1 flex h-full flex-col justify-center">
            <InputActionButton onClick={onClear}>
                <InputActionIcon>
                    <X />
                </InputActionIcon>
            </InputActionButton>
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

        const internalRef = useRef(null);
        useImperativeHandle(ref, () => internalRef.current, []);

        const handleTogglePassword = (showPassword) => {
            setInternalType(showPassword ? "text" : "password");
        };

        const handleStepUp = () => {
            internalRef.current.stepUp();
        };

        const handleStepDown = () => {
            internalRef.current.stepDown();
        };

        const handleClear = () => {
            const newValue = defaultValue ?? "";
            handleChange({ target: { value: newValue } }, newValue);
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
                    ref={internalRef}
                    type={internalType}
                    {...props}
                />
                {!disableActions && type === "number" && (
                    <NumberAction
                        onStepDown={handleStepDown}
                        onStepUp={handleStepUp}
                    />
                )}
                {!disableActions && type === "password" && (
                    <PasswordAction onTogglePassword={handleTogglePassword} />
                )}
                {!disableActions && type === "search" && value.length > 0 && (
                    <SearchAction onClear={handleClear} />
                )}
            </label>
        );
    },
);
Input.displayName = "Input";

export { Input, InputIcon };
