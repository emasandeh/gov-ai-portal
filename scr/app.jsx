import { useState } from 'react'

export default function App() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (!input) return

    const userMsg = { role: 'user', text: input }
    const botMsg = {
      role: 'bot',
      text: 'Government AI Response: ' + input
    }

    setMessages([...messages, userMsg, botMsg])
    setInput('')
  }

  return (
    <div className="app">
      <header>
        <h1>Government AI Portal</h1>
        <p>Official Digital Services Assistant</p>
      </header>

      <div className="chat">
        {messages.map((m, i) => (
          <div key={i} className={m.role}>
            {m.text}
          </div>
        ))}
      </div>

      <div className="input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a government service question..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}
