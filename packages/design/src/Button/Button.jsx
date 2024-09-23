import React from "react";
import { twMerge } from "tailwind-merge";
import { button } from "./styles";
import { forwardRef } from "react";

export const Button = forwardRef(
    (
        {
            onClick,
            children = null,
            size = "normal",
            variant = "filled",
            action = "progressive",
            disabled = false,
            className = "",
            ...props
        },
        ref,
    ) => {
        return (
            <button
                className={twMerge(
                    button({ variant, action, size }),
                    className,
                )}
                onClick={onClick}
                disabled={disabled}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    },
);
