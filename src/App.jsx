import { useState } from 'react'
import { MarkdownEditor } from "./components/MDEditor/MarkdownEditor";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MarkdownEditor></MarkdownEditor>
  )
}

export default App
