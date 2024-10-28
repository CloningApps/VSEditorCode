import React from 'react'
import ReactDOM from 'react-dom'
import VSEditorCode from './vs-editor-code'
import './index.css' // Make sure to include Tailwind CSS here

ReactDOM.render(
  <React.StrictMode>
    <VSEditorCode />
  </React.StrictMode>,
  document.getElementById('root')
)
