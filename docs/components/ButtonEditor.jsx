import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";

const ButtonEditor = () => {
	return (
		<Sandpack 
			template="vite-react"
			customSetup={{ 
				dependencies: { 
					"@wysteria/design": "latest" 
				}
			}}
			files={{
				"WuiButton.jsx": buttonJsx,
				"App.jsx": {
					code: appJsx,
					hidden: true,
				}
			}}
		/>
	);
};

const buttonJsx = (
	`import { Button } from "@wysteria/design"
    
    export default function WuiButton() {
        return (
            <Button>BUTTON</Button>
        )
    }`
);

const appJsx = (
	`import { Container, WuiApp } from "@wysteria/design"
    import WuiButton from "./WuiButton"

    export default function App() {
        return (
            <WuiApp>
                <Container justify="center">
                    <WuiButton />
                </Container>
            </WuiApp>
        )
    }`
);

export default ButtonEditor;