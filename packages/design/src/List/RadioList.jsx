import React, { useId, useState } from "react";
import { Container } from "../Container";
import { Toggle } from "./Toggle";

export const RadioList = ({
	children, 
	disabled = false, 
	initialSelection = 0, 
	title = null, 
	group = useId()
}) => {
	const [activeRadio, setActiveRadio] = useState(initialSelection);

	return (
		<>
			{title !== null && <p>{title}</p>}
			<Container
				padding = "none"
				gap = "md"
				direction = "column"
			>
				<fieldset>
					{
						children.map((child, index) => {
							if (child.type.name === "Radio") {
								return (
									<Radio
										{...child.props}

										key = {index} 
										group = {group} 

										checked = {activeRadio === index}
										onChange = {(e) => {
											setActiveRadio(index);
											if (Object.prototype.hasOwnProperty.call(child, "onChange")) {
												child.props.onChange(e);
											}
										}}

										disabled = {child.props.disabled || disabled}
									></Radio>
								);
							} else if (child.type.name === "RadioList") {
								return (
									<React.Fragment key = {index}>
										<Radio
											group = {group} 

											checked = {activeRadio === index}
											onChange = {(e) => {
												setActiveRadio(index);
												if (Object.prototype.hasOwnProperty.call(child, "onChange")) {
													child.props.onChange(e);
												}
											}}

											disabled = {child.props.disabled || disabled}
										>{child.props.title}</Radio>
										<RadioList
											{...child.props}

											disabled = {child.props.disabled || (activeRadio !== index)}
											title = {null}
										></RadioList>
									</React.Fragment>
								);
							}
						})
					}
				</fieldset>
			</Container>
		</>
	);
};

export const Radio = ({
	children, 
	group, 
	checked = false, 
	disabled = false, 
	onChange = () => {}
}) => {
	return (
		<Toggle 
			variant = "radio"
			group = {group}
			checked = {checked} 
			disabled = {disabled}
			onChange = {onChange}
		>{children}</Toggle>
	);
};
