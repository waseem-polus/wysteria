import {
  Bold,
  Code2,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Italic,
  Link,
  List,
  ListChecks,
  ListOrdered,
  Quote,
  Strikethrough,
  Underline,
} from 'lucide-react'
import React from 'react'

const wrapSelectionWith = (
  { value, setValue, mdInput },
  open,
  close = null,
) => {
  const cursor = {
    start: mdInput.current.selectionStart,
    end: mdInput.current.selectionEnd,
  }

  let midSection = ' '
  if (cursor.start != cursor.end) {
    midSection = value.substring(cursor.start, cursor.end)
  }

  setValue(
    value.substring(0, cursor.start) +
      `${open}${midSection}${close ? close : open}` +
      value.substring(cursor.end),
  )

  setTimeout(() => {
    mdInput.current.focus()
    mdInput.current.setSelectionRange(
      cursor.start + open.length,
      cursor.end + open.length,
    )
  }, 0)
}

const addToStartOfLine = ({ value, setValue, mdInput }, symbol) => {
  const cursorStart = mdInput.current.selectionStart
  const SOL = findStartOfLine(value, cursorStart)

  setValue(value.substring(0, SOL) + symbol + value.substring(SOL))
}

const doHyperLink = ({ value, setValue, mdInput }) => {
  const endCursor = mdInput.current.selectionEnd
  wrapSelectionWith({ value, setValue, mdInput }, '[', '](url)')

  setTimeout(() => {
    mdInput.current.focus()
    mdInput.current.setSelectionRange(endCursor + 3, endCursor + 6)
  }, 0)
}

const findStartOfLine = (string, position) => {
  let startOfLine = 0

  for (let i = position; i >= 0; i--) {
    if (string[i] == '\n') {
      startOfLine = i + 1
      break
    }
  }

  return startOfLine
}

export const ActionBar = (props) => {
  const iconSize = 20 // px
  const iconStroke = 1.5 // px
  return (
    <span className="action-bar">
      <button
        className="icon-button"
        onClick={() => {
          wrapSelectionWith(props, '**')
        }}
      >
        <Bold size={iconSize} strokeWidth={iconStroke}></Bold>
      </button>
      <button
        className="icon-button"
        onClick={() => {
          wrapSelectionWith(props, '*')
        }}
      >
        <Italic size={iconSize} strokeWidth={iconStroke}></Italic>
      </button>
      <button
        className="icon-button"
        onClick={() => {
          wrapSelectionWith(props, '<u>', '</u>')
        }}
      >
        <Underline size={iconSize} strokeWidth={iconStroke}></Underline>
      </button>
      <button
        className="icon-button"
        onClick={() => {
          wrapSelectionWith(props, '~')
        }}
      >
        <Strikethrough size={iconSize} strokeWidth={iconStroke}></Strikethrough>
      </button>

      <span className="divider"></span>

      <button
        className="icon-button"
        onClick={() => {
          doHyperLink(props)
        }}
      >
        <Link size={iconSize} strokeWidth={iconStroke}></Link>
      </button>
      <button
        className="icon-button"
        onClick={() => {
          wrapSelectionWith(props, '``')
        }}
      >
        <Code2 size={iconSize} strokeWidth={iconStroke}></Code2>
      </button>
      <button
        className="icon-button"
        onClick={() => {
          addToStartOfLine(props, ' > ')
        }}
      >
        <Quote size={iconSize} strokeWidth={iconStroke}></Quote>
      </button>

      <span className="divider"></span>

      <button
        className="icon-button"
        onClick={() => {
          addToStartOfLine(props, '1. ')
        }}
      >
        <ListOrdered size={iconSize} strokeWidth={iconStroke}></ListOrdered>
      </button>
      <button
        className="icon-button"
        onClick={() => {
          addToStartOfLine(props, ' - ')
        }}
      >
        <List size={iconSize} strokeWidth={iconStroke}></List>
      </button>
      <button
        className="icon-button"
        onClick={() => {
          addToStartOfLine(props, ' - [ ] ')
        }}
      >
        <ListChecks size={iconSize} strokeWidth={iconStroke}></ListChecks>
      </button>

      <span className="divider"></span>

      <button
        className="icon-button"
        onClick={() => {
          addToStartOfLine(props, '# ')
        }}
      >
        <Heading1 size={iconSize} strokeWidth={iconStroke}></Heading1>
      </button>
      <button
        className="icon-button"
        onClick={() => {
          addToStartOfLine(props, '## ')
        }}
      >
        <Heading2 size={iconSize} strokeWidth={iconStroke}></Heading2>
      </button>
      <button
        className="icon-button"
        onClick={() => {
          addToStartOfLine(props, '### ')
        }}
      >
        <Heading3 size={iconSize} strokeWidth={iconStroke}></Heading3>
      </button>
      <button
        className="icon-button"
        onClick={() => {
          addToStartOfLine(props, '#### ')
        }}
      >
        <Heading4 size={iconSize} strokeWidth={iconStroke}></Heading4>
      </button>
      <button
        className="icon-button"
        onClick={() => {
          addToStartOfLine(props, '##### ')
        }}
      >
        <Heading5 size={iconSize} strokeWidth={iconStroke}></Heading5>
      </button>
      <button
        className="icon-button"
        onClick={() => {
          addToStartOfLine(props, '###### ')
        }}
      >
        <Heading6 size={iconSize} strokeWidth={iconStroke}></Heading6>
      </button>
    </span>
  )
}
