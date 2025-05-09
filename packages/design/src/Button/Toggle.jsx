import React, { createContext, useContext, forwardRef } from "react";
import { useToggle } from "../hooks";
import { Button } from "./Button";

const ToggleContext = createContext({ pressed: true });

const ToggleOn = ({ children }) => {
    const { pressed } = useContext(ToggleContext);
    return pressed && children;
};

const ToggleOff = ({ children }) => {
    const { pressed } = useContext(ToggleContext);
    return !pressed && children;
};

const Toggle = forwardRef(
    (
        {
            pressed: externalPressed,
            children,
            initialPressed = true,
            onChange = () => {},
            ...props
        },
        ref,
    ) => {
        const isControlled = externalPressed != undefined;

        const [internalPressed, toggleInternalPressed] = useToggle(
            isControlled ? externalPressed : initialPressed,
            onChange,
        );

        return (
            <ToggleContext.Provider
                value={{
                    pressed: isControlled ? externalPressed : internalPressed,
                }}
            >
                <Button
                    onClick={() => toggleInternalPressed()}
                    ref={ref}
                    {...props}
                >
                    {children}
                </Button>
            </ToggleContext.Provider>
        );
    },
);
Toggle.displayName = "Toggle";

export { Toggle, ToggleOn, ToggleOff };
