import React from 'react'
import classNames from 'classnames'

import './Container.css'

export const Container = ({
    children,
    
    padding = "xxxl", 
    paddingH = padding,
    paddingV = padding,
    paddingTop = paddingV,
    paddingRight = paddingH,
    paddingBottom = paddingV,
    paddingLeft = paddingH,

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
        paddingRight: `var(--wui-padding-${paddingRight})`,
        paddingBottom: `var(--wui-padding-${paddingBottom})`, 
        paddingLeft: `var(--wui-padding-${paddingLeft})`,
        
        gap: `var(--wui-padding-${gap})`
    }
    
    return <div className={containerClass} style={paddingStyle}>{children}</div>
}
