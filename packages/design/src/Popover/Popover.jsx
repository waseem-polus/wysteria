import React from "react";
import * as RadixPopover from "@radix-ui/react-popover";
import { twMerge } from "tailwind-merge";
import { Button } from "../Button";
import { X } from "lucide-react";
import { forwardRef } from "react";

const Popover = RadixPopover.Root;

const PopoverAnchor = RadixPopover.Anchor;

const PopoverTrigger = forwardRef(
    ({ children, asChild = true, ...props }, ref) => {
        return (
            <RadixPopover.Trigger ref={ref} asChild={asChild} {...props}>
                {children}
            </RadixPopover.Trigger>
        );
    },
);
PopoverTrigger.displayName = RadixPopover.Trigger.displayName;

const PopoverContent = forwardRef(
    (
        { children, className = "", side = "bottom", sideOffset = 8, ...props },
        ref,
    ) => {
        return (
            <RadixPopover.Portal>
                <RadixPopover.Content
                    className={twMerge(
                        "origin-popover data-[side=top]:animate-show-popover-top data-[side=bottom]:animate-show-popover-bottom data-[side=left]:animate-show-popover-left data-[side=right]:animate-show-popover-right rounded-md border border-zinc-300 bg-zinc-50 p-4 shadow-md transition-all dark:border-zinc-600 dark:bg-zinc-800",
                        className,
                    )}
                    ref={ref}
                    side={side}
                    sideOffset={sideOffset}
                    {...props}
                >
                    {children}
                </RadixPopover.Content>
            </RadixPopover.Portal>
        );
    },
);
PopoverContent.displayName = RadixPopover.Content.displayName;

const PopoverClose = forwardRef(
    ({ children, asChild = true, ...props }, ref) => {
        return (
            <RadixPopover.Close ref={ref} asChild={asChild} {...props}>
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
    },
);
PopoverClose.displayName = RadixPopover.Close.displayName;

const PopoverArrow = forwardRef(({ className, ...props }, ref) => {
    return (
        <RadixPopover.Arrow
            className={twMerge(
                "border-zinc-300 fill-zinc-300 dark:border-zinc-600 dark:fill-zinc-600",
                className,
            )}
            ref={ref}
            {...props}
        />
    );
});
PopoverArrow.displayName = RadixPopover.Arrow.displayName;

export {
    Popover,
    PopoverTrigger,
    PopoverAnchor,
    PopoverContent,
    PopoverClose,
    PopoverArrow,
};
