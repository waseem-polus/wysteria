import React from "react";

export const Container = ({
	children,
    
	direction = "row",

	align = "start",
	justify = "left",

	padding = "xxxl", 
	paddingHor = padding,
	paddingVer = padding,
	paddingTop = paddingVer,
	paddingRgt = paddingHor,
	paddingBot = paddingVer,
	paddingLft = paddingHor,

	gap = padding,

	style = null,

	onClick = () => {},
	setHovering = () => {}
}) => {
	const containerStyle = {
		display: "flex",
		flexDirection: direction,

		alignItems: align,
		justifyContent: justify,

		paddingTop: `var(--wui-padding-${paddingTop})`,
		paddingRight: `var(--wui-padding-${paddingRgt})`,
		paddingBottom: `var(--wui-padding-${paddingBot})`, 
		paddingLeft: `var(--wui-padding-${paddingLft})`,
        
		gap: `var(--wui-padding-${gap})`
	};
    
	return (
		<div 
			onClick = {() => onClick()}
            
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}

			style={{...containerStyle, ...style}}
		>{children}</div>
	);
};
