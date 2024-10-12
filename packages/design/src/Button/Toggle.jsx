import React, { createContext, useContext } from "react";
import useToggle from "../hooks/useToggle";
import { Button } from "./Button";
import { forwardRef } from "react";

const ToggleContext = createContext({ value: true });

const ToggleOn = ({ children }) => {
    const { value } = useContext(ToggleContext);
    return value && children;
};

const ToggleOff = ({ children }) => {
    const { value } = useContext(ToggleContext);
    return !value && children;
};

const Toggle = forwardRef(
    ({ children, initialValue = true, onChange = () => {}, ...props }, ref) => {
        const [value, toggleValue] = useToggle(initialValue, onChange);

        return (
            <ToggleContext.Provider value={{ value }}>
                <Button onClick={() => toggleValue()} ref={ref} {...props}>
                    {children}
                </Button>
            </ToggleContext.Provider>
        );
    },
);
Toggle.displayName = "Toggle";

export { Toggle, ToggleOn, ToggleOff };
