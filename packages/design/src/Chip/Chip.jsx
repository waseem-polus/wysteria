import React, { createContext, forwardRef, useContext } from "react";
import { X } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Button } from "../Button";
import { Container } from "../Container";
import { chip } from "./styles";

const ContextDefaults = {
    action: "progressive",
};
const ChipContext = createContext(ContextDefaults);

export const ChipField = ({ children, wrap = "wrap" }) => {
    return (
        <Container gap="xs" padding="xs" style={{ flexWrap: wrap }}>
            {children}
        </Container>
    );
};

export const ChipAction = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        const { action } = useContext(ChipContext);

        return (
            <Button
                className={twMerge("p-0", className)}
                ref={ref}
                size="icon"
                variant="text"
                action={action}
                {...props}
            >
                {children || <X size={16} />}
            </Button>
        );
    },
);

export const Chip = forwardRef(
    (
        {
            children,
            variant = "filled",
            action = "progressive",
            className = "",
            ...props
        },
        ref,
    ) => {
        return (
            <ChipContext.Provider value={{ action }}>
                <div
                    className={twMerge(chip({ action, variant }), className)}
                    ref={ref}
                    {...props}
                >
                    {children}
                </div>
            </ChipContext.Provider>
        );
    },
);
