'use client'
import { useEffect, useState } from 'react'

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

export default function EasterEgg() {
  const [show, setShow] = useState(false)
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const onKey = (e) => {
      setIdx(i => {
        const next = e.key === KONAMI[i] ? i + 1 : 0
        if (next === KONAMI.length) {
          const flash = document.getElementById('kflash')
          if (flash) { flash.style.opacity = '.5'; setTimeout(() => { flash.style.opacity = '0'; setShow(true) }, 200) }
          return 0
        }
        return next
      })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (!show) return null

  return (
    <div className="egg-wrap">
      <div className="egg-title">🎉 SECRET UNLOCKED!</div>
      <p className="egg-text">
        ↑ ↑ ↓ ↓ ← → ← → B A — Konami Code<br /><br />
        You clearly pay attention to detail.<br />
        <span style={{ color: 'var(--c)' }}>Just like Aarya does with code.</span><br /><br />
        aaryasharadvaidya.10@gmail.com
      </p>
      <button className="egg-close" onClick={() => setShow(false)}>[ Close ]</button>
    </div>
  )
}
