import { cva } from "class-variance-authority";

const input = cva(
    "peer flex w-fit appearance-none overflow-hidden rounded border disabled:cursor-not-allowed placeholder-zinc-400 disabled:border-dashed disabled:bg-zinc-50 dark:disabled:bg-zinc-800 bg-white p-2 align-middle group-focus-within:outline group-focus-within:outline-2 group-focus-within:outline-offset-[0.5px] dark:bg-zinc-800",
    {
        variants: {
            status: {
                error: "group-focus-within:outline-red-400 border-red-500 dark:border-red-400 ring-red-200 dark:ring-0",
                success:
                    "group-focus-within:outline-emerald-400 border-emerald-500 dark:border-emerald-400 ring-emerald-200 dark:ring-0",
                neutral:
                    "group-focus-within:outline-violet-500 group-focus-within:border-violet-500 dark:border-zinc-600 border-zinc-400 ",
            },
            padding: {
                icon: "pl-8",
            },
        },
    },
);

const inputIcon = cva(
    "absolute left-2 top-1/2 -translate-y-1/2 cursor-text peer-disabled:cursor-not-allowed",
    {
        variants: {
            status: {
                error: "text-red-500 dark:text-red-400",
                success: "text-emerald-500 dark:text-emerald-400",
                neutral: "text-zinc-400 dark:zinc-500",
                disabled: "text-zinc-400 cursor-not-allowed"
            },
        },
    },
);

export { input, inputIcon };
