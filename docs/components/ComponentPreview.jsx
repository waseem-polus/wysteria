import React from "react";

const ComponentPreview = ({ children }) => {
    return (
        <div className="grid min-h-60 w-full place-items-center rounded-md border border-zinc-300 dark:border-zinc-600">
            {children}
        </div>
    );
};

export default ComponentPreview;
