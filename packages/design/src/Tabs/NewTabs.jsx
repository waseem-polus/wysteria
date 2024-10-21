import React, { forwardRef, createContext, useContext } from "react";
import * as RadixTabs from "@radix-ui/react-tabs";
import { twMerge } from "tailwind-merge";
import { tabs, tabsList, tabTrigger } from "./styles";

const TabsContext = createContext({
    orientation: "horizontal",
    variant: "text",
});

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
        const { variant } = useContext(TabsContext);

        return (
            <RadixTabs.Trigger
                className={twMerge(tabTrigger({ variant }), className)}
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
    const { orientation } = useContext(TabsContext);

    return (
        <RadixTabs.List
            className={twMerge(tabsList({ orientation }), className)}
            ref={ref}
            {...props}
        >
            {children}
        </RadixTabs.List>
    );
});
TabsList.displayName = "TabsList";

const Tabs = forwardRef(
    (
        {
            children,
            variant = "text",
            orientation = "horizontal",
            className = "",
            ...props
        },
        ref,
    ) => {
        return (
            <TabsContext.Provider value={{ orientation, variant }}>
                <RadixTabs.Root
                    className={twMerge(tabs({ orientation }), className)}
                    ref={ref}
                    {...props}
                >
                    {children}
                </RadixTabs.Root>
            </TabsContext.Provider>
        );
    },
);
Tabs.displayName = "Tabs";

export { Tabs, TabsContent, TabsTrigger, TabsList };
