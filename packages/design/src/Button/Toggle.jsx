import React from "react";
import useToggle from "../hooks/useToggle";
import { Button } from "./Button";

export const Toggle = ({
    onIcon,
    offIcon,
    onLabel,
    offLabel,
    initialValue = true,
    onChange = () => {},
    ...props
}) => {
    const [value, toggleValue] = useToggle(initialValue, onChange);

    return (
        <Button {...props} onClick={() => toggleValue()}>
            {value ? onIcon : offIcon}
            {value ? onLabel : offLabel}
        </Button>
    );
};
