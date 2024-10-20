import { cva } from "class-variance-authority";

export const input = cva(
    "peer flex w-fit appearance-none overflow-hidden rounded border border-zinc-400 disabled:cursor-not-allowed placeholder-zinc-400 disabled:border-dashed disabled:bg-zinc-50 bg-white p-2 align-middle group-focus-within:border-violet-500 group-focus-within:outline group-focus-within:outline-2 group-focus-within:outline-offset-[0.5px] group-focus-within:outline-violet-500 dark:border-zinc-600 dark:bg-zinc-800",
    {
        variants: {
            padding: {
                icon: "pl-8",
            },
        },
    },
);
