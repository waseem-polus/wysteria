import React, { forwardRef, createContext, useContext } from "react";
import * as RadixTabs from "@radix-ui/react-tabs";
import { twMerge } from "tailwind-merge";
import { tabs, tabsList } from "./styles";

const TabsContext = createContext({ orientation: "horizontal" });

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
        { children, orientation = "horizontal", className = "", ...props },
        ref,
    ) => {
        return (
            <TabsContext.Provider value={{ orientation }}>
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
