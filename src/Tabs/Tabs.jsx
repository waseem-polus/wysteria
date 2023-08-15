import React, { useState } from 'react'
import './Tabs.css'

export function TabGroup({ children, variant="filled" }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="tab-group"> 
      <div className="tab-group__tab-list">
        {children.map((tab, index) => (
          <button
            key={index}
            className={activeTab == index ? `tab tab--${variant} tab--active` : `tab tab--${variant}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.props.label}
          </button>
        ))}
      </div>

      {children[activeTab]}
    </div>
  )
}

export function Tab({ children }) {
  return <section className="tab-group__panel">{children}</section>
}
