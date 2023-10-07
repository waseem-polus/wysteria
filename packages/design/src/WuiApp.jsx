import React from "react";
import './index.css'

export const WuiApp = ({ children }) => {
  return (
    <React.Fragment className="wui-app">
      {children}
    </React.Fragment>
  )
}
