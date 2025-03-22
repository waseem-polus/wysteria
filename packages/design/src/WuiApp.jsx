import React, { createContext, useRef } from "react";
import "./index.css";

export const RootContext = createContext(null);

export const WuiApp = ({ children }) => {
    const root = useRef(null);
    return (
        <RootContext.Provider value={{ root }}>
            <div ref={root} className="wui-app">
                {children}
            </div>
        </RootContext.Provider>
    );
};
