'use client'
import { useState, useEffect } from 'react'

export default function Navbar({ onTerminalOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    const saved = localStorage.getItem('av_theme') || 'dark'
    setTheme(saved)
    document.documentElement.dataset.theme = saved
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.dataset.theme = next
    localStorage.setItem('av_theme', next)
  }

  const openTerminal = () => window.dispatchEvent(new CustomEvent('openTerminal'))

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#about" className="nav-logo">AV</a>
      <div className="nav-links">
        {['About', 'Projects', 'Journey', 'Blog', 'Skills', 'Contact'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
        ))}
      </div>
      <div className="nav-actions">
        <button className="icon-btn" onClick={toggleTheme} title="Toggle theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <button className="term-btn" onClick={openTerminal}>
          <span className="term-btn-inner">[ ` Terminal ]</span>
        </button>
      </div>
    </nav>
  )
}
