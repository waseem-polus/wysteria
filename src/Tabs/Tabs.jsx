import React, { useState } from 'react'
import classNames from 'classnames'
import { Icon } from '../Icon'

import './Tabs.css'

export function TabGroup({ children, filled = true }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="tab-group"> 
      <div className="tab-group__tab-list">
        {
          children.map((tab, index) => 
            <TabButton 
              key={index}

              leftIcon = {tab.props.leftIcon}
              label = {tab.props.label}
              
              index = {index}
              setActiveTab = {setActiveTab}
              activeTab = {activeTab}
              
              filled = {tab.props.filled}
              disabled = {tab.props.disabled}
            ></TabButton>
          )
        }
      </div>

      {children[activeTab]}
    </div>
  )
}

export function Tab({ children }) {
  return <section className="tab-group__panel">{children}</section>
}

const TabButton = ({leftIcon, index, setActiveTab, activeTab, filled = true, disabled = false, label = null, padding = "md"}) => {
  const [isHovering, setIsHovering] = useState(false)

  let tabClass = classNames(
    'tab',
    `padding-${padding}`,
    {
      'tab--filled': !disabled && filled,
      'tab--icon-only': label === null,
      'tab--active': !disabled && activeTab === index,
      'tab--hover': !disabled && isHovering,
      'tab--disabled': disabled
    }
  )
  
  return (
    <button 
      className={tabClass} 
      onClick={() => setActiveTab(index)} 
      disabled={disabled}

      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)} 
    >
      {leftIcon != null && <Icon size={20} strokeWidth={1.5} name={leftIcon} />}
      {label}
    </button>
  )
}
