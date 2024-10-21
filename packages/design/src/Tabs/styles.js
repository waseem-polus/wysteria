import { cva } from "class-variance-authority";

const tabs = cva("flex", {
    variants: {
        orientation: {
            horizontal: "flex-col",
            vertical: "flex-row",
        },
    },
});

const tabsList = cva("flex border-zinc-400 dark:border-zinc-600", {
    variants: {
        orientation: {
            horizontal: "flex-row w-full border-b",
            vertical: "flex-col h-fit border-r",
        },
    },
});

const tabTrigger = cva(" border-violet-700 dark:border-violet-400", {
    variants: {
        variant: {
            filled: "data-[state=active]:bg-purple-400 data-[state=active]:dark:bg-violet-600 data-[state=active]:text-violet-700 data-[state=active]:dark:text-violet-400 data-[state=active]:bg-opacity-15 data-[state=active]:dark:bg-opacity-15",
            text: "",
        },
    },
});

export { tabs, tabsList, tabTrigger };
