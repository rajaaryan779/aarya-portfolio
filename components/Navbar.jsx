'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    const saved = localStorage.getItem('av_theme') || 'dark'
    setTheme(saved)
  }, [])
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next); localStorage.setItem('av_theme', next)
  }
  const openTerm = () => window.dispatchEvent(new CustomEvent('openTerm'))
  return (
    <nav id="nav">
      <a href="#about" className="n-logo">AV</a>
      <div className="n-links">
        {['About','Projects','Journey','Blog','Skills','Contact'].map(s => (
          <a key={s} href={`#${s.toLowerCase()}`} className="n-link">{s}</a>
        ))}
      </div>
      <div className="n-actions">
        <button className="n-icon" onClick={toggleTheme}>{theme==='dark'?'☀️':'🌙'}</button>
        <button className="n-btn" onClick={openTerm}><span className="n-btn-t">[ ` Terminal ]</span></button>
      </div>
    </nav>
  )
}
