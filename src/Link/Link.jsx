import React from 'react'
import { Icon } from '../Icon'

import './Link.css'
import classNames from 'classnames'

export const Link = ({
    children, 
    link,
    showIcons = true,
    target = null,
    title = null
}) => {
    const iconName = classNames({
        'Mail': showIcons && link.startsWith('mailto:'),
        'Phone': showIcons && link.startsWith('tel:'),
        'ExternalLink' : showIcons && (link.startsWith('https://www.') || link.startsWith('http://www.'))
    })

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
    )
}
