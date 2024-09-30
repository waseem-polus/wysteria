import React from "react";
import * as RadixPopover from "@radix-ui/react-popover";
import { twMerge } from "tailwind-merge";
import { Button } from "../Button";
import { X } from "lucide-react";

const PopoverTrigger = ({ children, asChild = true, ...props }) => {
    return (
        <RadixPopover.Trigger asChild={asChild} {...props}>
            {children}
        </RadixPopover.Trigger>
    );
};

const PopoverAnchor = ({ children, ...props }) => {
    return <RadixPopover.Anchor {...props}>{children}</RadixPopover.Anchor>;
};

const PopoverContent = ({
    children,
    className = "",
    side = "bottom",
    sideOffset = 8,
    ...props
}) => {
    return (
        <RadixPopover.Portal>
            <RadixPopover.Content
                className={twMerge(
                    "transition-all origin-popover data-[side=top]:animate-show-popover-top data-[side=bottom]:animate-show-popover-bottom data-[side=left]:animate-show-popover-left data-[side=right]:animate-show-popover-right rounded-md border border-zinc-300 bg-zinc-50 p-4 shadow-md dark:border-zinc-600 dark:bg-zinc-800",
                    className,
                )}
                side={side}
                sideOffset={sideOffset}
                {...props}
            >
                {children}
            </RadixPopover.Content>
        </RadixPopover.Portal>
    );
};

const PopoverClose = ({ children, asChild = true, ...props }) => {
    return (
        <RadixPopover.Close asChild={asChild} {...props}>
            {children || (
                <Button
                    size="icon"
                    variant="text"
                    action="neutral"
                    className="absolute right-3 top-3 p-0 text-zinc-500 dark:text-zinc-400"
                >
                    <X />
                </Button>
            )}
        </RadixPopover.Close>
    );
};

const PopoverArrow = ({ className, ...props }) => {
    return (
        <RadixPopover.Arrow
            className={twMerge(
                "border-zinc-300 fill-zinc-300 dark:border-zinc-600 dark:fill-zinc-600",
                className,
            )}
            {...props}
        />
    );
};

const Popover = ({ children, ...props }) => {
    return <RadixPopover.Root {...props}>{children}</RadixPopover.Root>;
};

export {
    Popover,
    PopoverTrigger,
    PopoverAnchor,
    PopoverContent,
    PopoverClose,
    PopoverArrow,
};
