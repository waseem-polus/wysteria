import React from "react";
import { twMerge } from "tailwind-merge";
import { button } from "./styles";

export const Button = ({
    onClick,
    children = null,
    size = "normal",
    variant = "primary",
    action = "progressive",
    disabled = false,
    className = "",
}) => {
    const approvedVariants = ['filled', 'ghost', 'outline', 'text'];

    if (!approvedVariants.includes(variant)) {
        console.error(`used ${variant} for variant you stoopid`)
    }

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
