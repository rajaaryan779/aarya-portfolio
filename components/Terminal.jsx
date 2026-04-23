'use client'
import { useState, useEffect, useRef } from 'react'

const COMMANDS = {
  help: () => [
    { t: '┌─────────────────────────────────────────┐', c: '' },
    { t: '│           AVAILABLE COMMANDS            │', c: '' },
    { t: '└─────────────────────────────────────────┘', c: '' },
    { t: '  about       Who is Aarya?', c: 'dim' },
    { t: '  projects    All 6 projects', c: 'dim' },
    { t: '  skills      Full tech stack', c: 'dim' },
    { t: '  experience  Work history', c: 'dim' },
    { t: '  contact     Get in touch', c: 'dim' },
    { t: '  github      Open GitHub', c: 'dim' },
    { t: '  hire        Why hire Aarya', c: 'dim' },
    { t: '  matrix      Enable matrix rain', c: 'dim' },
    { t: '  theme       Toggle dark/light', c: 'dim' },
    { t: '  clear       Clear terminal', c: 'dim' },
    { t: '  exit        Close terminal', c: 'dim' },
  ],
  about: () => [
    { t: '━━ ABOUT AARYA ━━━━━━━━━━━━━━━━━━━━━━━━━━', c: '' },
    { t: 'Name     Aarya Vaidya', c: 'white' },
    { t: 'Role     AI/ML Engineer (Entry Level)', c: 'white' },
    { t: 'Edu      B.Tech CSE AI/ML · PCU Pune', c: 'white' },
    { t: 'Status   🟢 Open to internships NOW', c: 'ok' },
    { t: 'Loc      Pune, Maharashtra, India', c: 'white' },
  ],
  projects: () => [
    { t: '━━ ALL PROJECTS ━━━━━━━━━━━━━━━━━━━━━━━━━', c: '' },
    { t: '01  AutoStream Agent   LangGraph+Groq+RAG', c: 'white' },
    { t: '02  TradingBot         Binance Futures CLI', c: 'white' },
    { t: '03  FlowMind           19 AI Workflows', c: 'white' },
    { t: '04  SentimentIQ        85%+ NLP Accuracy', c: 'white' },
    { t: '05  VisionNet          CNN +12% Accuracy', c: 'white' },
    { t: '06  CarbonTrack        Full-Stack Web App', c: 'white' },
  ],
  skills: () => [
    { t: '━━ TECH STACK ━━━━━━━━━━━━━━━━━━━━━━━━━━━', c: '' },
    { t: 'AI/ML   TensorFlow Keras Scikit-learn', c: 'white' },
    { t: 'LLM     LangChain LangGraph OpenAI Groq', c: 'white' },
    { t: 'Auto    n8n Webhooks REST-APIs', c: 'white' },
    { t: 'Lang    Python SQL', c: 'white' },
    { t: 'Web     Flask HTML CSS', c: 'white' },
  ],
  experience: () => [
    { t: '━━ EXPERIENCE ━━━━━━━━━━━━━━━━━━━━━━━━━━━', c: '' },
    { t: '2025  AI Intern · Elevate Labs', c: 'white' },
    { t: '2024  AI Program Intern · Teachnook', c: 'white' },
    { t: '2026  PrimetradeAI · Trading Bot', c: 'white' },
    { t: '2026  ServiceHive · AI Agent Dev', c: 'white' },
  ],
  contact: () => [
    { t: '━━ CONTACT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', c: '' },
    { t: 'Email   aaryasharadvaidya.10@gmail.com', c: 'white' },
    { t: 'GitHub  github.com/rajaaryan779', c: 'white' },
    { t: 'Phone   +91 8149904590', c: 'white' },
  ],
  hire: () => [
    { t: '━━ WHY HIRE AARYA ━━━━━━━━━━━━━━━━━━━━━━', c: '' },
    { t: '✓ Ships production code, not just notebooks', c: 'ok' },
    { t: '✓ LangGraph + RAG + REST APIs from scratch', c: 'ok' },
    { t: '✓ Binance trading bot in <60 minutes', c: 'ok' },
    { t: '✓ 19-workflow n8n automation suite', c: 'ok' },
    { t: '✓ Available immediately for internships', c: 'ok' },
    { t: '', c: '' },
    { t: '→ aaryasharadvaidya.10@gmail.com', c: 'warn' },
  ],
  github: 'GITHUB',
  theme: 'THEME',
  matrix: 'MATRIX',
  clear: 'CLEAR',
  exit: 'EXIT',
}

export default function Terminal() {
  const [open, setOpen] = useState(false)
  const [lines, setLines] = useState([
    { t: '╔══════════════════════════════════════════╗', c: '' },
    { t: '║    AARYA VAIDYA · PORTFOLIO TERMINAL     ║', c: '' },
    { t: '╚══════════════════════════════════════════╝', c: '' },
    { t: "Type 'help' for commands · ESC or ` to toggle", c: 'dim' },
  ])
  const [input, setInput] = useState('')
  const bodyRef = useRef()

  useEffect(() => {
    const onOpen = () => setOpen(true)
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === '`') { setOpen(o => !o); e.preventDefault() }
    }
    window.addEventListener('openTerminal', onOpen)
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('openTerminal', onOpen); window.removeEventListener('keydown', onKey) }
  }, [])

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [lines])

  const startMatrix = () => {
    const c = document.createElement('canvas')
    c.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:599;pointer-events:none'
    document.body.appendChild(c)
    const x = c.getContext('2d'); c.width = window.innerWidth; c.height = window.innerHeight
    const cols = Math.floor(window.innerWidth / 14), drops = Array(cols).fill(1)
    let frames = 0
    const iv = setInterval(() => {
      x.fillStyle = 'rgba(3,5,10,.06)'; x.fillRect(0, 0, c.width, c.height)
      x.fillStyle = '#00ffe0'; x.font = '13px Space Mono'
      drops.forEach((y, i) => {
        const ch = String.fromCharCode(0x30A0 + Math.random() * 96)
        x.fillText(ch, i * 14, y * 14)
        if (y * 14 > c.height && Math.random() > .97) drops[i] = 0
        drops[i]++
      })
      if (++frames > 350) { clearInterval(iv); c.remove() }
    }, 33)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const val = input.trim().toLowerCase()
    setInput('')
    if (!val) return

    const echo = { t: `aarya@portfolio:~$ ${val}`, c: 'echo' }
    const cmd = COMMANDS[val]

    if (!cmd) {
      setLines(l => [...l, echo, { t: `zsh: command not found: ${val} — type 'help'`, c: 'err' }])
      return
    }
    if (cmd === 'CLEAR') { setLines([]); return }
    if (cmd === 'EXIT') { setOpen(false); return }
    if (cmd === 'GITHUB') { window.open('https://github.com/rajaaryan779', '_blank'); setLines(l => [...l, echo, { t: 'Opening GitHub...', c: 'dim' }]); return }
    if (cmd === 'MATRIX') { startMatrix(); setLines(l => [...l, echo, { t: 'Matrix mode activated!', c: 'ok' }]); return }
    if (cmd === 'THEME') {
      const html = document.documentElement
      html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark'
      setLines(l => [...l, echo, { t: 'Theme toggled!', c: 'ok' }]); return
    }
    const result = cmd()
    setLines(l => [...l, echo, ...result])
  }

  if (!open) return null

  return (
    <div className="t-overlay open">
      <div className="t-box">
        <div className="t-bar">
          <div className="t-dots">
            <div className="t-dot" style={{ background: '#ff5f57' }} />
            <div className="t-dot" style={{ background: '#febc2e' }} />
            <div className="t-dot" style={{ background: '#28c840' }} />
          </div>
          <div className="t-title">aarya@portfolio ~ %</div>
          <button className="t-close" onClick={() => setOpen(false)}>✕ [ESC]</button>
        </div>
        <div className="t-body" ref={bodyRef}>
          {lines.map((l, i) => (
            <div key={i} className={`t-line ${l.c || ''}`}
              style={l.c === 'echo' ? { color: 'rgba(0,255,224,.4)' } : undefined}>
              {l.t}
            </div>
          ))}
        </div>
        <form className="t-input-row" onSubmit={handleSubmit}>
          <span className="t-prompt">aarya@portfolio:~$</span>
          <input className="t-input" value={input} onChange={e => setInput(e.target.value)}
            autoComplete="off" spellCheck="false" placeholder="_" autoFocus />
        </form>
      </div>
    </div>
  )
}
