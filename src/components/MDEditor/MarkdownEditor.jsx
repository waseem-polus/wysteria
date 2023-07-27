import React, { useRef, useState } from 'react'
import TabGroup from '../Tabs/TabGroup'
import Tab from '../Tabs/Tab'
import MDEditor from '@uiw/react-md-editor'
import { ActionBar } from '../ActionBar'

export const MarkdownEditor = () => {
  const [value, setValue] = useState('')
  const mdInputRef = useRef(null)

  return (
    <TabGroup>
      <Tab label="Write">
        <ActionBar value={value} setValue={setValue} mdInput={mdInputRef}></ActionBar>
        <textarea
          ref={mdInputRef}
          className="md-input"
          id=""
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </Tab>

      <Tab label="Preview">
        <MDEditor.Markdown
          className="md-output"
          source={value}
        ></MDEditor.Markdown>
      </Tab>
    </TabGroup>
  )
}
