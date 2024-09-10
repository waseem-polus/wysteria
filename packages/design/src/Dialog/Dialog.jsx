import React from "react";
import {Button} from "../Button"
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
            leftIcon="X"
            padding="none"
            variant="text"
            actionType="neutral"
            className="absolute top-3 right-3 text-zinc-600 dark:text-zinc-300"
        />
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
                "text-zinc-900 font-medium text-lg dark:text-zinc-50",
                className
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
                className
            )}
            {...props}
        >
            {children}
        </RadixDialog.Description>
    );
};

const DialogContent = ({ children, className = "", ...props }) => {
    return (
        <RadixDialog.Portal>
            <RadixDialog.Overlay className="bg-zinc-900 opacity-60 fixed inset-0" />
            <RadixDialog.Content
                className={twMerge(
                    "bg-zinc-50 animate-show-popover p-4 rounded-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full w-8/12 dark:bg-zinc-800 dark:border-zinc-600 dark:border",
                    className
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
    DialogClose,
};
