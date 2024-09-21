import React from "react";
import { X } from "lucide-react";
import { Button } from "../Button";
import * as RadixDialog from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";

const DialogTrigger = ({ children, asChild = true, ...props }) => {
    return (
        <RadixDialog.Trigger asChild={asChild} {...props}>
            {children}
        </RadixDialog.Trigger>
    );
};

const DialogClose = ({
    children = (
        <Button
            size="icon"
            variant="text"
            action="neutral"
            className="absolute right-3 top-3 p-0 text-zinc-500 dark:text-zinc-400"
        >
            <X />
        </Button>
    ),
    asChild = true,
    ...props
}) => {
    return (
        <RadixDialog.Close asChild={asChild} {...props}>
            {children}
        </RadixDialog.Close>
    );
};

const DialogTitle = ({
    children = "Dialog Title",
    className = "",
    ...props
}) => {
    return (
        <RadixDialog.Title
            className={twMerge(
                "text-lg font-medium text-zinc-900 dark:text-zinc-50",
                className,
            )}
            {...props}
        >
            {children}
        </RadixDialog.Title>
    );
};

const DialogDescription = ({
    children = "text-zinc-900 dark:text-zinc-50 text-base my-2",
    className = "",
    ...props
}) => {
    return (
        <RadixDialog.Description
            className={twMerge(
                "DialogDescription text-zinc-600 dark:text-zinc-300",
                className,
            )}
            {...props}
        >
            {children}
        </RadixDialog.Description>
    );
};

const DialogFooter = ({ children, className = "", ...props }) => {
    return (
        <div
            className={twMerge("flex justify-end gap-2", className)}
            {...props}
        >
            {children}
        </div>
    );
};

const DialogContent = ({ children, className = "", ...props }) => {
    return (
        <RadixDialog.Portal>
            <RadixDialog.Overlay className="fixed inset-0 bg-zinc-900 opacity-60" />
            <RadixDialog.Content
                className={twMerge(
                    "animate-show-popover fixed left-1/2 top-1/2 max-h-full w-11/12 max-w-full -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-zinc-50 p-4 md:w-9/12 lg:w-7/12 2xl:w-1/2 dark:border dark:border-zinc-600 dark:bg-zinc-800",
                    className,
                )}
                {...props}
            >
                {children}
            </RadixDialog.Content>
        </RadixDialog.Portal>
    );
};

const Dialog = ({ children, modal = false, ...props }) => {
    return (
        <RadixDialog.Root modal={modal} {...props}>
            {children}
        </RadixDialog.Root>
    );
};

export {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
};
