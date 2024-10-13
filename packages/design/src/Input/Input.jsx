import React, {
    forwardRef,
    useRef,
    useImperativeHandle,
    useState,
} from "react";
import { Button } from "../Button";
import { ChevronDown, ChevronUp, Eye, EyeOff } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { usePointerEvents } from "../hooks";

const InputActionButton = ({ children, className = "", ...props }) => {
    return (
        <Button
            className={twMerge("p-0", className)}
            variant="text"
            action="neutral"
            size="icon"
            {...props}
        >
            {children}
        </Button>
    );
};

const NumberAction = ({ hover, type, inputRef }) => {
    return (
        type === "number" && (
            <div className="absolute right-1 flex h-full flex-col justify-center">
                <InputActionButton
                    onClick={() => inputRef.current.stepUp()}
                    action={hover ? "progressive" : "neutral"}
                >
                    <ChevronUp size={16} />
                </InputActionButton>
                <InputActionButton
                    onClick={() => inputRef.current.stepDown()}
                    action={hover ? "progressive" : "neutral"}
                >
                    <ChevronDown size={16} />
                </InputActionButton>
            </div>
        )
    );
};

const PasswordAction = ({ hover, type, inputRef }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        type === "password" && (
            <div className="absolute right-1 flex h-full flex-col justify-center">
                <InputActionButton
                    onClick={() => {
                        setShowPassword(!showPassword);
                        inputRef.current.type = showPassword
                            ? "text"
                            : "password";
                    }}
                    action={hover ? "progressive" : "neutral"}
                >
                    {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
                </InputActionButton>
            </div>
        )
    );
};

const Input = forwardRef(({ type = "text", ...props }, ref) => {
    const internalRef = useRef(null);
    const { hover, focus } = usePointerEvents(internalRef);

    useImperativeHandle(ref, () => internalRef.current, []);

    return (
        <div className="group relative flex overflow-hidden rounded border border-zinc-400 bg-white align-middle focus-within:border-violet-500 focus-within:outline focus-within:outline-2 focus-within:outline-offset-[0.5px] focus-within:outline-violet-500 dark:border-zinc-600 dark:bg-zinc-800 [&:not(:focus-within)]:hover:border-violet-500 [&:not(:focus-within)]:hover:bg-purple-100">
            <input
                className="peer appearance-none bg-transparent p-2 [&:not(:focus)]:group-hover:placeholder-violet-400"
                ref={internalRef}
                type={type}
                {...props}
            />
            <NumberAction
                hover={hover && !focus}
                type={type}
                inputRef={internalRef}
            />
            <PasswordAction
                hover={hover && !focus}
                type={type}
                inputRef={internalRef}
            />
        </div>
    );
});
Input.displayName = "Input";

export { Input };
