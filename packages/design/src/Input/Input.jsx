import React, {
    forwardRef,
    useRef,
    useImperativeHandle,
    useState,
} from "react";
import { Button } from "../Button";
import { ChevronDown, ChevronUp, Eye, EyeOff, X } from "lucide-react";
import { twMerge } from "tailwind-merge";

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

const NumberAction = ({ inputRef }) => {
    return (
        <div className="absolute right-1 flex h-full flex-col justify-center">
            <InputActionButton onClick={() => inputRef.current.stepUp()}>
                <ChevronUp size={16} />
            </InputActionButton>
            <InputActionButton onClick={() => inputRef.current.stepDown()}>
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

const Input = forwardRef(
    ({ onChange = () => {}, type = "text", ...props }, ref) => {
        const [value, setValue] = useState("");
        
        const internalRef = useRef(null);
        useImperativeHandle(ref, () => internalRef.current, []);

        return (
            <div className="group relative w-fit flex overflow-hidden rounded border border-zinc-400 bg-white align-middle focus-within:border-violet-500 focus-within:outline focus-within:outline-2 focus-within:outline-offset-[0.5px] focus-within:outline-violet-500 dark:border-zinc-600 dark:bg-zinc-800">
                <input
                    className="peer appearance-none flex flex-1 bg-transparent p-2"
                    ref={internalRef}
                    onChange={(e) => {
                        setValue(e.target.value);
                        onChange(e);
                    }}
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
            </div>
        );
    },
);
Input.displayName = "Input";

export { Input };
