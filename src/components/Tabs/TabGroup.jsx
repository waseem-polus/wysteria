import React, { useState } from 'react'
import Tab from './Tab'

export default function TabGroup({
  children,
  tabs = ['Tab 1', 'Tab 2', 'Tab 3'],
}) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="tab-group">
      <div className="tab-group__tab-list">
        {children.map((tab, index) => (
          <button
            key={index}
            className={activeTab == index ? 'tab tab--active' : 'tab'}
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
