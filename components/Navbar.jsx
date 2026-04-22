'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: '1.2rem 3rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      borderBottom: '1px solid rgba(0,255,224,0.08)',
      background: 'rgba(3,5,7,0.7)',
      backdropFilter: 'blur(20px)',
      transition: 'all .3s',
    }}>
      <div style={{
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize: '1.4rem',
        letterSpacing: '.12em',
        color: '#00ffe0',
      }}>AV</div>
      <div style={{ display: 'flex', gap: '2.5rem' }}>
        {['About', 'Projects', 'Skills', 'Contact'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            fontFamily: "'Space Mono',monospace",
            fontSize: '.65rem',
            letterSpacing: '.15em',
            textTransform: 'uppercase',
            color: 'rgba(232,240,248,0.4)',
            textDecoration: 'none',
            transition: 'color .2s',
            cursor: 'none',
          }}
          onMouseEnter={e => e.target.style.color = '#00ffe0'}
          onMouseLeave={e => e.target.style.color = 'rgba(232,240,248,0.4)'}
          >{item}</a>
        ))}
      </div>
    </nav>
  )
}
