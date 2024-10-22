import React from "react";

const NewComponent = ({ name, description }) => {
    return (
        <a
            href={`/components/${name.toLowerCase()}`}
            className="flex flex-grow flex-col gap-4 rounded border border-zinc-300 bg-zinc-50 p-8 shadow-sm hover:border-violet-600 dark:border-zinc-600 dark:bg-zinc-900 dark:hover:border-violet-400"
        >
            <h3 className="w-full font-semibold">{name}</h3>
            <h4 className="text-sm">{description}</h4>
        </a>
    );
};

export { NewComponent };
