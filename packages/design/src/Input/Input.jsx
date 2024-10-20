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
import { input } from "./styles";

const InputActionButton = ({ children, className = "", ...props }) => {
    return (
        <Button
            className={twMerge(
                "grid h-auto place-content-center p-[2px] md:h-6",
                className,
            )}
            variant="text"
            action="neutral"
            size="icon"
            {...props}
        >
            <Slot className="aspect-square h-5 md:h-4">{children}</Slot>
        </Button>
    );
};

const NumberAction = ({ inputRef }) => {
    return (
        <div className="invisible absolute right-1 flex h-full flex-col justify-center md:visible">
            <Button
                className="min-w-6 p-0"
                onClick={() => inputRef.current.stepUp()}
                variant="text"
                action="neutral"
            >
                <ChevronUp size={16} />
            </Button>
            <Button
                className="min-w-6 p-0"
                onClick={() => inputRef.current.stepDown()}
                variant="text"
                action="neutral"
            >
                <ChevronDown size={16} />
            </Button>
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
                {showPassword ? <Eye /> : <EyeOff />}
            </InputActionButton>
        </div>
    );
};

const SearchAction = ({ inputRef }) => {
    return (
        <div className="absolute right-1 flex h-full flex-col justify-center">
            <InputActionButton onClick={() => (inputRef.current.value = "")}>
                <X />
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
            <label className="group relative flex h-fit w-fit shadow-none">
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
