import React, { useRef, useState } from 'react'
import { TabGroup, Tab } from '../Tabs'
import MDEditor from '@uiw/react-md-editor'
import { ActionBar } from './ActionBar'
import './MarkdownEditor.css'

export const MarkdownEditor = () => {
  const [value, setValue] = useState('')
  const mdInputRef = useRef(null)

  return (
    <TabGroup>
      <Tab label="Write">
        <ActionBar
          value={value}
          setValue={setValue}
          mdInput={mdInputRef}
        ></ActionBar>
        <textarea
          ref={mdInputRef}
          className="markdown-editor__md-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </Tab>

      <Tab label="Preview">
        <MDEditor.Markdown
          className="markdown-editor__md-output"
          source={value}
        ></MDEditor.Markdown>
      </Tab>
    </TabGroup>
  )
}
