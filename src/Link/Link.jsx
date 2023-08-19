import React from 'react'
import { Icon } from '../Icon'

import './Link.css'

export const Link = ({children, link, newTab = false}) => {
  return (
    <a 
        className = "link"
        href = {link} 
        target={newTab? '_blank' : '_top'}
    >
        {children}
        {newTab && <Icon name="ExternalLink" strokeWidth={1.5} size={14}></Icon>}    
    </a>
  )
}
