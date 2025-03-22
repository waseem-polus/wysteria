import { cva } from "class-variance-authority";

export const button = cva(
    [
        "font-sans flex border border-transparent align-middle font-normal justify-center rounded text-base cursor-pointer p-2 gap-2 transition-transform ease-in-out duration-100 [&:not(:disabled)]:active:scale-95 focus-visible:scale-105 disabled:cursor-not-allowed",
    ],
    {
        variants: {
            variant: {
                filled:
                    "disabled:bg-zinc-200 disabled:text-zinc-400 disabled:border-dashed disabled:border-zinc-400 dark:disabled:bg-zinc-700 dark:disabled:border-zinc-500 dark:disabled:text-zinc-500",
                ghost:
                    "bg-opacity-15 dark:bg-opacity-15 disabled:bg-opacity-15 disabled:bg-zinc-300 disabled:text-zinc-400 dark:disabled:bg-zinc-500 dark:disabled:text-zinc-500 dark:disabled:bg-opacity-15",
                outline:
                    "hover:bg-opacity-15 hover:dark:bg-opacity-15 disabled:hover:bg-transparent disabled:text-zinc-400 disabled:border-dashed disabled:border-zinc-400 dark:disabled:border-zinc-500 dark:disabled:text-zinc-500",
                text: "hover:bg-opacity-15 hover:dark:bg-opacity-15 disabled:hover:bg-transparent disabled:text-zinc-400 dark:disabled:text-zinc-500",
            },
            action: {
                progressive:
                    "text-violet-700 dark:text-violet-400 focus-visible:outline-violet-700",
                destructive:
                    "text-red-500 dark:text-red-400 focus-visible:outline-red-500",
                neutral:
                    "text-zinc-800 dark:text-zinc-300 focus-visible:outline-zinc-800 dark:focus-visible:outline-zinc-300",
            },
            size: {
                normal: "w-fit min-w-16",
                icon: "aspect-square h-fit w-auto min-w-0",
            },
        },
        compoundVariants: [
            {
                variant: "filled",
                action: "progressive",
                class: "bg-violet-600 text-zinc-100 dark:text-zinc-100",
            },
            {
                variant: "ghost",
                action: "progressive",
                class: "bg-purple-400 dark:bg-violet-600",
            },
            {
                variant: "outline",
                action: "progressive",
                class: "border-violet-700 border dark:border-violet-400 ",
            },
            {
                variant: ["outline", "text"],
                action: "progressive",
                class: "hover:bg-purple-400 dark:hover:bg-violet-600",
            },
            {
                variant: "filled",
                action: "destructive",
                class: "bg-red-500 text-zinc-100 dark:text-zinc-100",
            },
            {
                variant: "ghost",
                action: "destructive",
                class: "bg-red-400 dark:bg-red-500",
            },
            {
                variant: "outline",
                action: "destructive",
                class: "border-red-500 border dark:border-red-400",
            },
            {
                variant: ["outline", "text"],
                action: "destructive",
                class: "hover:bg-red-400 dark:hover:bg-red-500",
            },
            {
                variant: "filled",
                action: "neutral",
                class: "bg-zinc-800 text-zinc-100 dark:bg-zinc-300 dark:text-zinc-800",
            },
            {
                variant: "ghost",
                action: "neutral",
                class: "bg-zinc-400 dark:bg-zinc-300",
            },
            {
                variant: "outline",
                action: "neutral",
                class: "border-zinc-800 dark:border-zinc-300",
            },
            {
                variant: ["outline", "text"],
                action: "neutral",
                class: "hover:bg-zinc-400 dark:hover:bg-zinc-300",
            },
        ],
        defaultVariants: {
            variant: "filled",
            action: "progressive",
            size: "normal",
        },
    },
);
