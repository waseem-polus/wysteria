import React from "react";
import Image from "next/image";
import { Container } from "@willoui/design";

export default {
	logo: (
		<Container padding="none" gap="sm" align="center">
			<Image src="/wysteria.svg" width={40} height={40} alt="wysteria ui logo"/>
			<h1>Wysteria UI</h1>
		</Container>
	),
	project: {
		link: "https://github.com/waseem-polus/wui-design"
	},
	primaryHue: {
		dark: 264,
		light: 264,
	},
	useNextSeoProps() {
		return {
			titleTemplate: "%s - Wysteria",
		};
	},
	head: (
		<>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="icon" type="image/x-icon" href="/wysteria.svg"></link>
			<meta property="og:title" content="Wysteria UI" />
			<meta property="og:description" content="We design, so you can create! Wysteria UI provides a collection of reusable React components to help streamline the development of web applications." />
		</>
	)
};