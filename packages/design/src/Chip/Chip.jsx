import React, { createContext, forwardRef, useContext } from "react";
import { X } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Button } from "../Button";
import { chip } from "./styles";

const ContextDefaults = {
	action: "progressive",
};
const ChipContext = createContext(ContextDefaults);

const ChipAction = forwardRef(
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
ChipAction.displayName = "ChipAction";

const Chip = forwardRef(
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
Chip.displayName = "Chip";

export {Chip, ChipAction};