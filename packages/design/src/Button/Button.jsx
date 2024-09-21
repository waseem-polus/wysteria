import React from "react";
import { twMerge } from "tailwind-merge";
import { button } from "./styles";

export const Button = ({
    onClick,
    children = null,
    size = "normal",
    variant = "filled",
    action = "progressive",
    disabled = false,
    className = "",
}) => {
    return (
        <button
            className={twMerge(button({ variant, action, size }), className)}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
