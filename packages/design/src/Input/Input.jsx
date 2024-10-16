import React, {
    forwardRef,
    useRef,
    useImperativeHandle,
    useState,
} from "react";
import { Button } from "../Button";
import { ChevronDown, ChevronUp, Eye, EyeOff, X } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { input } from "./styles.js";

const InputActionButton = ({ children, className = "", ...props }) => {
    return (
        <Button
            className={twMerge("p-[2px]", className)}
            variant="text"
            action="neutral"
            size="icon"
            {...props}
        >
            {children}
        </Button>
    );
};

const NumberAction = ({ inputRef }) => {
    return (
        <div className="absolute right-1 flex h-full flex-col justify-center">
            <InputActionButton
                className="p-0"
                onClick={() => inputRef.current.stepUp()}
            >
                <ChevronUp size={16} />
            </InputActionButton>
            <InputActionButton
                className="p-0"
                onClick={() => inputRef.current.stepDown()}
            >
                <ChevronDown size={16} />
            </InputActionButton>
        </div>
    );
};

const PasswordAction = ({ inputRef }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="absolute right-1 flex h-full flex-col justify-center">
            <InputActionButton
                onClick={() => {
                    setShowPassword(!showPassword);
                    inputRef.current.type = showPassword ? "text" : "password";
                }}
            >
                {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
            </InputActionButton>
        </div>
    );
};

const SearchAction = ({ inputRef }) => {
    return (
        <div className="absolute right-1 flex h-full flex-col justify-center">
            <InputActionButton onClick={() => (inputRef.current.value = "")}>
                <X size={16} />
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

        return (
            <label className="group shadow-none relative flex h-fit w-fit">
                {children}
                <input
                    className={twMerge(
                        input({ padding: children ? "icon" : "" }),
                        className,
                    )}
                    onChange={(e) => {
                        setValue(e.target.value);
                        onChange(e);
                    }}
                    ref={internalRef}
                    type={type}
                    {...props}
                />
                {type === "number" && <NumberAction inputRef={internalRef} />}
                {type === "password" && (
                    <PasswordAction inputRef={internalRef} />
                )}
                {type === "search" && value && (
                    <SearchAction inputRef={internalRef} />
                )}
            </label>
        );
    },
);
Input.displayName = "Input";

export { Input, InputIcon };
