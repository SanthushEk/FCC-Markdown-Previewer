import { useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';

// Default Markdown content for the editor
const defaultMarkdown = `# Welcome to my React Markdown Previewer!
// ... (your Markdown content here)
`;

function App() {
  // State variable to store the Markdown text
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", fontFamily: 'sans-serif' }}>Markdown Previewer</h1>
        <div className='boxes-container'>
          {/* Textarea for editing Markdown */}
          <textarea name="editor" id="editor" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
          <div id="preview">
            {/* ReactMarkdown component to display the parsed Markdown */}
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
        <div className='signature-container'>
          {/* Signature indicating the designer's name */}
          Design By SanthushEK
        </div>
      </div>
    </>
  )
}

export default App;