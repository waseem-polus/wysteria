import React from "react";
import { GitPullRequestArrow, CircleDot } from "lucide-react";

const NewAddition = ({ name, children, pr }) => {
    return (
        <div className="relative flex flex-grow flex-col rounded border border-zinc-300 bg-zinc-50 px-8 py-7 shadow-sm hover:border-violet-600 hover:shadow-inner dark:border-zinc-600 dark:bg-zinc-900 dark:hover:border-violet-400 dark:hover:shadow-violet-800">
            <a
                href={`/components/${name.toLowerCase()}`}
                className="flex flex-grow flex-col gap-4"
            >
                <div className="flex items-baseline justify-between gap-2">
                    <h2 className="font-semibold underline-offset-4">{name}</h2>
                </div>
                <div className="text-sm font-light dark:text-zinc-200">
                    {children}
                </div>
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href={`https://github.com/waseem-polus/wysteria/pull/${pr}`}
                className="absolute top-7 right-8 hover:underline outline-none border-none flex items-center gap-1 rounded-full text-sm text-zinc-500 visited:text-zinc-500 dark:text-zinc-400 visited:dark:text-zinc-400"
            >
                <GitPullRequestArrow strokeWidth={1.5} size={14} />
                {pr}
            </a>
        </div>
    );
};

const ComingSoon = ({ children, name, issue = "" }) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="mt-5 flex gap-2">
                <code className="rounded-md border border-zinc-300 bg-zinc-100 px-2 text-base font-medium dark:border-zinc-600 dark:bg-zinc-800">
                    {name}
                </code>
                {issue !== "" && (
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={`https://github.com/waseem-polus/wysteria/issues/${issue}`}
                        className="flex items-center gap-1 rounded-full text-sm text-zinc-600 underline-offset-2 visited:text-zinc-600 hover:underline dark:text-zinc-300 visited:dark:text-zinc-300"
                    >
                        <CircleDot strokeWidth={1.5} size={14} />
                        {issue}
                    </a>
                )}
            </div>
            <div>{children}</div>
        </div>
    );
};

export { NewAddition, ComingSoon };
