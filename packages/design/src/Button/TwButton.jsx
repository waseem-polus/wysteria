import { cva } from "class-variance-authority";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const button = cva(
    [
        "font-sans flex border border-transparent align-middle font-normal justify-center rounded text-base cursor-pointer p-2 gap-2 transition-transform ease-in-out duration-100 active:scale-95 focus-visible:scale-105",
    ],
    {
        variants: {
            variant: {
                primary: "",
                secondary: "",
                outline: "",
                text: "",
            },
            action: {
                progressive: "",
                destructive: "",
                neutral: "",
            },
            size: {
                normal: "w-fit min-w-16",
                icon: "aspect-square h-fit w-auto min-w-0",
            },
        },
        compoundVariants: [
            {
                variant: "primary",
                action: "progressive",
                class: "bg-violet-600 text-zinc-100",
            },
            {
                variant: "secondary",
                action: "progressive",
                class: "bg-purple-50 hover:border hover:border-violet-300 text-violet-700",
            },
            {
                variant: "outline",
                action: "progressive",
                class: "hover:bg-purple-400 dark:hover:bg-violet-600 dark:hover:bg-opacity-15 hover:bg-opacity-15 border-violet-700 border text-violet-700 dark:border-violet-400 dark:text-violet-400",
            },
            {
                variant: "text",
                action: "progressive",
                class: "hover:bg-purple-50 text-violet-700",
            },
        ],
        defaultVariants: {
            variant: "primary",
            action: "progressive",
            size: "normal"
        },
    },
);

export const TwButton = ({
    onClick,
    children = null,
    size = "normal",
    variant = "primary",
    action = "progressive",
    disabled = false,
    className = "",
}) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    return (
        <button
            className={twMerge(button({ variant, action, size }), className)}
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
