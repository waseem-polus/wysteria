import React, {
    forwardRef,
    useRef,
    useImperativeHandle,
    useState,
} from "react";
import { Button } from "../Button";
import { ChevronDown, ChevronUp, Eye, EyeClosed, X } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { input } from "./styles.js";

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
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="absolute right-1 flex h-full flex-col justify-center">
            <InputActionButton
                onClick={() => {
                    onTogglePassword(!showPassword);
                    setShowPassword(!showPassword);
                }}
            >
                <InputActionIcon>
                    {showPassword ? <Eye /> : <EyeClosed />}
                </InputActionIcon>
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
            className = "",
            onChange = () => {},
            type = "text",
            ...props
        },
        ref,
    ) => {
        const [value, setValue] = useState("");

        const internalRef = useRef(null);
        useImperativeHandle(ref, () => internalRef.current, []);

        const handleTogglePassword = (showPassword) => {
            internalRef.current.type = showPassword ? "text" : "password";
        };

        const handleStepUp = () => {
            internalRef.current.stepUp();
        };

        const handleStepDown = () => {
            internalRef.current.stepDown();
        };

        const handleClear = () => {
            setValue("");
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
                        setValue(e.target.value);
                        onChange(e);
                    }}
                    ref={internalRef}
                    type={type}
                    {...props}
                />
                {type === "number" && (
                    <NumberAction
                        onStepDown={handleStepDown}
                        onStepUp={handleStepUp}
                    />
                )}
                {type === "password" && (
                    <PasswordAction onTogglePassword={handleTogglePassword} />
                )}
                {type === "search" && value.length > 0 && (
                    <SearchAction onClear={handleClear} />
                )}
            </label>
        );
    },
);
Input.displayName = "Input";

export { Input, InputIcon };
