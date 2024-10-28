'use client'

import React, { useState } from 'react'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism.css'
import { FileIcon, Settings, Terminal } from 'lucide-react'

export default function VSEditorCode() {
  const [code, setCode] = useState(
    `// Welcome to VSEditorCode!\n// Start typing your JavaScript code here.\n\nfunction greet(name) {\n  console.log("Hello, " + name + "!");\n}\n\ngreet("World");`
  )

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-2 flex items-center">
        <h1 className="text-xl font-bold">VSEditorCode</h1>
      </header>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-16 bg-gray-800 flex flex-col items-center py-4">
          <button className="mb-4">
            <FileIcon className="text-gray-400 hover:text-white" />
          </button>
          <button>
            <Settings className="text-gray-400 hover:text-white" />
          </button>
        </aside>

        {/* Editor */}
        <main className="flex-1 overflow-auto">
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 14,
              backgroundColor: '#1e1e1e',
              minHeight: '100%',
            }}
          />
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 p-1 flex items-center text-xs">
        <Terminal className="w-4 h-4 mr-2" />
        <span>JavaScript</span>
      </footer>
    </div>
  )
}
