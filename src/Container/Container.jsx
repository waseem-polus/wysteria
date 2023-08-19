import React from 'react'
import classNames from 'classnames'

import './Container.css'

export const Container = ({
    children,
    
    padding = "xxxl", 
    paddingHor = padding,
    paddingVer = padding,
    paddingTop = paddingVer,
    paddingRgt = paddingHor,
    paddingBot = paddingVer,
    paddingLft = paddingHor,

    gap = padding,

    reverse = false, 
    vertical = false
}) => {
    let containerClass = classNames(
        'container',
        {
            'container--vertical': vertical,
            'container--reverse': reverse,
        }
    )

    const paddingStyle = {
        paddingTop: `var(--wui-padding-${paddingTop})`,
        paddingRight: `var(--wui-padding-${paddingRgt})`,
        paddingBottom: `var(--wui-padding-${paddingBot})`, 
        paddingLeft: `var(--wui-padding-${paddingLft})`,
        
        gap: `var(--wui-padding-${gap})`
    }
    
    return <div className={containerClass} style={paddingStyle}>{children}</div>
}
