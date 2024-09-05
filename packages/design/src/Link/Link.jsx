import React from "react";
import classNames from "classnames";
import { Icon } from "../Icon";

import "./Link.css";

export const Link = ({
	children, 
	link,
	showIcons = true,
	target = null,
	title = null
}) => {
	const iconName = classNames({
		"Mail": showIcons && link.startsWith("mailto:"),
		"Phone": showIcons && link.startsWith("tel:"),
		"ExternalLink" : showIcons && (link.startsWith("https://") || link.startsWith("http://"))
	});

	return (
		<a 
			className = "link"
			href = {link} 
			target = {target}
			title={title}
		>
			{children}
			{iconName != "" && <Icon name={iconName} strokeWidth={1.5} size={14}></Icon>}    
		</a>
	);
};
