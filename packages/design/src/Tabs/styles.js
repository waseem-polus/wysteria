import { cva } from "class-variance-authority";

const tabs = cva("flex", {
    variants: {
        orientation: {
            horizontal: "flex-col",
            vertical: "flex-row",
        },
    },
});

const tabsList = cva("flex", {
    variants: {
        orientation: {
            horizontal: "flex-row",
            vertical: "flex-col",
        },
    },
});

export { tabs, tabsList };
