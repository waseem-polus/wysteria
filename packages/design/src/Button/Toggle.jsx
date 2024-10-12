import React from "react";
import useToggle from "../hooks/useToggle";
import { Button } from "./Button";
import { forwardRef } from "react";

const Toggle = forwardRef(
    (
        {
            children,
            offChildren,
            initialValue = true,
            onChange = () => {},
            ...props
        },
        ref,
    ) => {
        const [value, toggleValue] = useToggle(initialValue, onChange);

        return (
            <Button onClick={() => toggleValue()} ref={ref} {...props}>
                {value ? children : offChildren}
            </Button>
        );
    },
);
Toggle.displayName = "Toggle";

export { Toggle };
