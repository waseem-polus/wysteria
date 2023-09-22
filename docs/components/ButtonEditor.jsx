import { Sandpack } from "@codesandbox/sandpack-react"

const ButtonEditor = () => {
    return (
        <Sandpack 
            template="vite-react"
            customSetup={{ 
                dependencies: { 
                "@willoui/design": "latest" 
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
    )
}

const buttonJsx = (
    `import { Button } from "@willoui/design"
    
    export default function WuiButton() {
        return (
            <Button>BUTTON</Button>
        )
    }`
)

const appJsx = (
    `import { Container, WuiApp } from "@willoui/design"
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
)

export default ButtonEditor;