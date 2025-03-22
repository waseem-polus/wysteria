import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";

const Link = forwardRef(
    ({ children, href, hideIcon = false, className = "", ...props }, ref) => {
        const linkIcon = (
            <Slot strokeWidth={1.5} size={14}>
                {(href && href.startsWith("mailto:") && <Mail />) ||
                    (href.startsWith("tel:") && <Phone />) ||
                    ((href.startsWith("https://") ||
                        href.startsWith("http://")) && <ExternalLink />)}
            </Slot>
        );

        return (
            <a
                className={twMerge(
                    "inline-flex w-fit gap-1 rounded align-baseline font-sans text-violet-700 underline underline-offset-2 visited:text-fuchsia-700 dark:text-violet-400 dark:visited:text-fuchsia-400",
                    className,
                )}
                href={href}
                ref={ref}
                {...props}
            >
                {children}
                {!hideIcon && linkIcon}
            </a>
        );
    },
);
Link.displayName = "Link";

export { Link };
