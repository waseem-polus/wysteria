import React from "react";

const ComponentPreview = ({ children }) => {
    return (
        <div className="my-2 mt-8 grid min-h-60 w-full place-items-center rounded-md border border-zinc-300 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] [background-size:16px_16px] dark:border-zinc-600 dark:bg-[radial-gradient(#3f3f46_1px,transparent_1px)]">
            {children}
        </div>
    );
};

export { ComponentPreview };
