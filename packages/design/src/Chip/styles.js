import { cva } from "class-variance-authority";

export const chip = cva(
    [
        "flex items-center font-normal text-base min-w-6 rounded-full gap-2 px-3 py-1 bg-opacity-15 dark:bg-opacity-15 border",
    ],
    {
        variants: {
            action: {
                progressive:
                    "bg-purple-400 dark:bg-violet-600 text-violet-700 dark:text-violet-400 border-violet-700 dark:border-violet-400",
                destructive:
                    "bg-red-400 dark:bg-red-500 text-red-500 dark:text-red-400 border-red-500 dark:border-red-400",
                neutral:
                    "bg-zinc-400 dark:bg-zinc-300 text-zinc-800 dark:text-zinc-300 border-zinc-800 dark:border-zinc-300",
            },
            variant: {
                filled: "border-transparent dark:border-transparent",
                outline: "bg-transparent dark:bg-transparent",
            },
        },
        defaultVariants: {
            action: "progressive",
            variant: "filled",
        },
    },
);
