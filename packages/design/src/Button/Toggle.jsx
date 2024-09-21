import React from "react";
import useToggle from "../hooks/useToggle";
import { Button } from "./Button";

export const Toggle = ({
    children,
    offChildren,
    initialValue = true,
    onChange = () => {},
    ...props
}) => {
    const [value, toggleValue] = useToggle(initialValue, onChange);

    return (
        <Button onClick={() => toggleValue()} {...props}>
            {value ? children : offChildren}
        </Button>
    );
};
