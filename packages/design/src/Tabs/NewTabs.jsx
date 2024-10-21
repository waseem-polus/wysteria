import React, { forwardRef } from "react";
import * as RadixTabs from "@radix-ui/react-tabs";
import { twMerge } from "tailwind-merge";

const TabsContent = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <RadixTabs.Content
                className={twMerge("", className)}
                ref={ref}
                {...props}
            >
                {children}
            </RadixTabs.Content>
        );
    },
);
TabsContent.displayName = "TabsContent";

const TabsTrigger = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <RadixTabs.Trigger
                className={twMerge("", className)}
                ref={ref}
                {...props}
            >
                {children}
            </RadixTabs.Trigger>
        );
    },
);
TabsTrigger.displayName = "TabsTrigger";

const TabsList = forwardRef(({ children, className = "", ...props }, ref) => {
    return (
        <RadixTabs.List className={twMerge("", className)} ref={ref} {...props}>
            {children}
        </RadixTabs.List>
    );
});
TabsList.displayName = "TabsList";

const Tabs = forwardRef(({ children, className = "", ...props }, ref) => {
    return (
        <RadixTabs.Root className={twMerge("", className)} ref={ref} {...props}>
            {children}
        </RadixTabs.Root>
    );
});
Tabs.displayName = "Tabs";

export { Tabs, TabsContent, TabsTrigger, TabsList };
