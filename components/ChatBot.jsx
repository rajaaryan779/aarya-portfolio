'use client'
import { useState, useRef, useEffect } from 'react'

const CONTEXT = `You are Aarya Vaidya's AI assistant on his portfolio. Answer questions about Aarya concisely (2-4 sentences max). Be friendly and professional.

ABOUT: Aarya Vaidya, AI/ML Engineer, B.Tech CSE AI/ML at Pimpri Chinchwad University Pune (2024-2027), open to internships immediately.
CONTACT: aaryasharadvaidya.10@gmail.com, +91 8149904590, Pune India, github.com/rajaaryan779
PROJECTS: AutoStream Agent (LangGraph+Groq+RAG), TradingBot (Binance Futures), FlowMind (19 n8n workflows), SentimentIQ (85%+ NLP), VisionNet (CNN), CarbonTrack (Flask)
SKILLS: Python, TensorFlow, LangChain, LangGraph, OpenAI, Groq, n8n, Flask, REST APIs, RAG, Pandas, NumPy, Git`

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState([{ role: 'bot', text: "Hey! I'm Aarya's AI assistant. Ask me anything about his projects, skills, or experience. 👋" }])
  const [input, setInput] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [loading, setLoading] = useState(false)
  const msgsRef = useRef()

  useEffect(() => {
    const saved = localStorage.getItem('av_groq_key')
    if (saved) setApiKey(saved)
  }, [])

  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight
  }, [msgs])

  const saveKey = () => {
    localStorage.setItem('av_groq_key', apiKey)
  }

  const send = async () => {
    const msg = input.trim()
    if (!msg) return
    setInput('')
    setMsgs(m => [...m, { role: 'user', text: msg }])
    setLoading(true)

    if (!apiKey) {
      setTimeout(() => {
        setLoading(false)
        setMsgs(m => [...m, { role: 'bot', text: 'Please enter your Groq API key below to enable AI. Get one free at console.groq.com!' }])
      }, 500)
      return
    }

    try {
      const history = msgs.map(m => ({ role: m.role === 'bot' ? 'assistant' : 'user', content: m.text }))
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [{ role: 'system', content: CONTEXT }, ...history, { role: 'user', content: msg }],
          max_tokens: 200, temperature: .7,
        }),
      })
      const data = await res.json()
      const reply = data.choices?.[0]?.message?.content || 'Sorry, I had trouble responding.'
      setMsgs(m => [...m, { role: 'bot', text: reply }])
    } catch {
      setMsgs(m => [...m, { role: 'bot', text: 'Connection error. Check your Groq API key.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {!open && (
        <div className="chat-bubble" onClick={() => setOpen(true)} title="Chat with Aarya's AI">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#000">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        </div>
      )}
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-avatar">A</div>
            <div>
              <div className="chat-name">AARYA AI</div>
              <div className="chat-status">● Online — Ask me anything</div>
            </div>
            <button className="chat-close-btn" onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="chat-msgs" ref={msgsRef}>
            {msgs.map((m, i) => (
              <div key={i} className={`chat-msg ${m.role}`}>{m.text}</div>
            ))}
            {loading && <div className="chat-msg typing">Thinking...</div>}
          </div>
          <div className="chat-input-row">
            <input className="chat-input" value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()} placeholder="Ask about Aarya..." />
            <button className="chat-send" onClick={send}>→</button>
          </div>
          <div className="chat-api-row">
            <input className="chat-api-input" type="password" value={apiKey}
              onChange={e => setApiKey(e.target.value)} placeholder="Enter Groq API key to enable AI..." />
            <button className="chat-api-save" onClick={saveKey}>SAVE</button>
          </div>
        </div>
      )}
    </>
  )
}
