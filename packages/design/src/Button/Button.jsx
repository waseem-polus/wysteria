import React, { useState } from "react";
import classNames from "classnames";

import "./Button.css";

export const Button = ({
    onClick,
    children = null,
    size = "normal",
    padding = "md",
    variant = "filled",
    action = "progressive",
    disabled = false,
    className = "",
}) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    let buttonClass = classNames(
        `button button--${variant}`,
        `button--${action}`,
        `padding-${padding}`,
        {
            "button--icon-only": size === "icon",
            "button--hover": !disabled && isHovering,
            "button--active": !disabled,
            "button--click": !disabled && isClicking,
        },
        className,
    );

    return (
        <button
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
            onMouseDown={() => setIsClicking(true)}
            onMouseUp={() => setIsClicking(false)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {children}
        </button>
    );
};
