import React, { useState } from 'react'
import classNames from 'classnames'

import './Tabs.css'

export function TabGroup({ children, variant="filled" }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="tab-group"> 
      <div className="tab-group__tab-list">
        {
          children.map((tab, index) => {
            let tabClass = classNames(
              'tab',
              `tab--${variant}`,
              {
                'tab--active': activeTab == index,
              }
            )
            
            return (
              <button key={index} className={tabClass} onClick={() => setActiveTab(index)}>
                {tab.props.label}
              </button>
            )
          })
        }
      </div>

      {children[activeTab]}
    </div>
  )
}

export function Tab({ children }) {
  return <section className="tab-group__panel">{children}</section>
}
