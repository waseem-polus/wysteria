import React from "react";
import useToggle from "../hooks/useToggle";
import {Button} from "./Button";

import "./Button.css";

export const Toggle = ({
	onIcon,
	offIcon,
	onLabel,
	offLabel,
	initialValue = true,
	onChange = () => {},
	...props
}) => {
	const [value, toggleValue] = useToggle(initialValue, onChange);

	return (
		<Button 
			{...props}

			leftIcon={value? onIcon : offIcon} 
			onClick={() => toggleValue()}
		>
			{value? onLabel : offLabel}
		</Button>
	);
};