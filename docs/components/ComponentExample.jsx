import React from "react";
import { TabGroup, Tab } from "@wysteria/design";

const PreviewTab = ({ children, ...props }) => {
    return (
        <Tab label="Preview" {...props}>
            <div className="flex min-h-20 justify-evenly p-2 align-middle">
                {children}
            </div>
        </Tab>
    );
};

const CodeTab = ({ children, ...props }) => {
    return <Tab label="Code" {...props}>{children}</Tab>;
};

const ComponentExample = ({ children }) => {
    return <TabGroup>{children}</TabGroup>;
};

export { ComponentExample, PreviewTab, CodeTab };
