import React from 'react'
import { Icon } from '../Icon'

import './Link.css'
import classNames from 'classnames'

export const Link = ({
    children, 
    link, 
    target = null,
    title = null
}) => {
    const iconName = classNames({
        'Mail': link.startsWith('mailto:'),
        'Phone': link.startsWith('tel:'),
        'ExternalLink' : link.startsWith('https://www.') || link.startsWith('http://www.')
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
