import React, { useContext } from "react";
import { X } from "lucide-react";
import { Button } from "../Button";
import * as RadixDialog from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";
import { RootContext } from "../WuiApp";
import { forwardRef } from "react";

const DialogTrigger = forwardRef(
    ({ children, asChild = true, ...props }, ref) => {
        return (
            <RadixDialog.Trigger asChild={asChild} ref={ref} {...props}>
                {children}
            </RadixDialog.Trigger>
        );
    },
);
DialogTrigger.displayName = "DialogTrigger";

const DialogClose = forwardRef(
    (
        {
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
        },
        ref,
    ) => {
        return (
            <RadixDialog.Close ref={ref} asChild={asChild} {...props}>
                {children}
            </RadixDialog.Close>
        );
    },
);
DialogClose.displayName = "DialogClose";

const DialogTitle = forwardRef(
    ({ children = "Dialog Title", className = "", ...props }, ref) => {
        return (
            <RadixDialog.Title
                className={twMerge(
                    "text-lg font-medium text-zinc-900 dark:text-zinc-50",
                    className,
                )}
                ref={ref}
                {...props}
            >
                {children}
            </RadixDialog.Title>
        );
    },
);
DialogTitle.displayName = "DialogTitle";

const DialogDescription = forwardRef(
    (
        {
            children = "text-zinc-900 dark:text-zinc-50 text-base my-2",
            className = "",
            ...props
        },
        ref,
    ) => {
        return (
            <RadixDialog.Description
                className={twMerge(
                    "DialogDescription text-zinc-600 dark:text-zinc-300",
                    className,
                )}
                ref={ref}
                {...props}
            >
                {children}
            </RadixDialog.Description>
        );
    },
);
DialogDescription.displayName = "DialogDescription";

const DialogFooter = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <div
                className={twMerge("flex justify-end gap-2", className)}
                ref={ref}
                {...props}
            >
                {children}
            </div>
        );
    },
);
DialogFooter.displayName = "DialogFooter";

const DialogContent = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        const { root } = useContext(RootContext);
        return (
            <RadixDialog.Portal container={root.current}>
                <RadixDialog.Overlay className="fixed inset-0 bg-zinc-900 opacity-60" />
                <RadixDialog.Content
                    className={twMerge(
                        "animate-show-dialog fixed left-1/2 top-1/2 flex max-h-full w-11/12 max-w-full -translate-x-1/2 -translate-y-1/2 transform flex-col gap-2 rounded-md bg-zinc-50 p-4 md:w-9/12 lg:w-7/12 2xl:w-1/2 dark:border dark:border-zinc-600 dark:bg-zinc-800",
                        className,
                    )}
                    ref={ref}
                    {...props}
                >
                    {children}
                </RadixDialog.Content>
            </RadixDialog.Portal>
        );
    },
);
DialogContent.displayName = "DialogContent";

const Dialog = forwardRef(({ children, modal = false, ...props }, ref) => {
    return (
        <RadixDialog.Root modal={modal} ref={ref} {...props}>
            {children}
        </RadixDialog.Root>
    );
});
Dialog.displayName = "Dialog";

export {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
};
