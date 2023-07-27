import React from 'react'

const wrapSelectionWith = ({value, setValue, mdInput}, open, close=null) => {
  const cursor = {
    start: mdInput.current.selectionStart,
    end: mdInput.current.selectionEnd,
  }

  let midSection = " "
  if (cursor.start != cursor.end) {
    midSection = value.substring(cursor.start, cursor.end)
  }

  setValue(value.substring(0, cursor.start) + `${open}${midSection}${close? close : open}` + value.substring(cursor.end))
  
  setTimeout(() => {
    mdInput.current.focus();
    mdInput.current.setSelectionRange(cursor.start + open.length, cursor.end + open.length);
  }, 0);
}

const addToStartOfLine = ({value, setValue, mdInput}, symbol) => {
  const cursorStart = mdInput.current.selectionStart;
  const SOL = findStartOfLine(value, cursorStart);

  setValue(value.substring(0, SOL) + symbol + value.substring(SOL))
}

const doHyperLink = ({value, setValue, mdInput}) => {
  const endCursor = mdInput.current.selectionEnd;
  wrapSelectionWith({value, setValue, mdInput}, "[", "](url)")

  setTimeout(() => {
    mdInput.current.focus();
    mdInput.current.setSelectionRange(endCursor + 3, endCursor + 6);
  }, 0);
}

const findStartOfLine = (string, position) => {
  let startOfLine = 0;

  for (let i = position; i >= 0; i--) {
    if (string[i] == '\n') {
      startOfLine = i + 1;
      break;
    }
  }

  return startOfLine;
}

export const ActionBar = (props) => {
  return (
    <span className='action-bar'>
        <button className='icon-button' onClick={() => {wrapSelectionWith(props, "**")}}><img className="icon-button__img" src='/icons/formatting/bold.svg'></img></button>
        <button className='icon-button' onClick={() => {wrapSelectionWith(props, "*")}}><img className="icon-button__img" src='/icons/formatting/italic.svg'></img></button>
        <button className='icon-button' onClick={() => {wrapSelectionWith(props, "<u>", "</u>")}}><img className="icon-button__img" src='/icons/formatting/underline.svg'></img></button>
        <button className='icon-button' onClick={() => {wrapSelectionWith(props, "~")}}><img className="icon-button__img" src='/icons/formatting/strike-through.svg'></img></button>
        
        <span className='divider'></span>

        <button className='icon-button' onClick={() => {doHyperLink(props)}}><img className="icon-button__img" src='/icons/formatting/link.svg'></img></button>
        <button className='icon-button' onClick={() => {wrapSelectionWith(props, "``")}}><img className="icon-button__img" src='/icons/formatting/code.svg'></img></button>
        <button className='icon-button' onClick={() => {addToStartOfLine(props, " > ")}}><img className="icon-button__img" src='/icons/formatting/quote.svg'></img></button>
        
        <span className='divider'></span>

        <button className='icon-button' onClick={() => {addToStartOfLine(props, "1. ")}}><img className="icon-button__img" src='/icons/formatting/ordered-list.svg'></img></button>
        <button className='icon-button' onClick={() => {addToStartOfLine(props, " - ")}}><img className="icon-button__img" src='/icons/formatting/un-ordered-list.svg'></img></button>
        <button className='icon-button' onClick={() => {addToStartOfLine(props, " - [ ] ")}}><img className="icon-button__img" src='/icons/formatting/todo.svg'></img></button>
        
        <span className='divider'></span>
        
        <button className='icon-button' onClick={() => {addToStartOfLine(props, "# ")}}><img className="icon-button__img" src='/icons/formatting/h1.svg'></img></button>
        <button className='icon-button' onClick={() => {addToStartOfLine(props, "## ")}}><img className="icon-button__img" src='/icons/formatting/h2.svg'></img></button>
        <button className='icon-button' onClick={() => {addToStartOfLine(props, "### ")}}><img className="icon-button__img" src='/icons/formatting/h3.svg'></img></button>
        <button className='icon-button' onClick={() => {addToStartOfLine(props, "#### ")}}><img className="icon-button__img" src='/icons/formatting/h4.svg'></img></button>
        <button className='icon-button' onClick={() => {addToStartOfLine(props, "##### ")}}><img className="icon-button__img" src='/icons/formatting/h5.svg'></img></button>
        <button className='icon-button' onClick={() => {addToStartOfLine(props, "###### ")}}><img className="icon-button__img" src='/icons/formatting/h6.svg'></img></button>
    </span>
  )
}
