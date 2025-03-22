import React from "react";
import { WuiApp } from "@wysteria/design";
import "@wysteria/design/style.css";
import "../public/index.css";

export default function App({ Component, pageProps }) {
    return (
        <WuiApp>
            <Component {...pageProps} />
        </WuiApp>
    );
}
