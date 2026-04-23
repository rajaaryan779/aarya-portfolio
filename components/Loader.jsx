'use client'
import { useEffect, useState } from 'react'

export default function Loader() {
  const [prog, setProg] = useState(0)
  const [done, setDone] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProg(p => {
        const next = p + Math.random() * 15 + 3
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(() => setDone(true), 400)
          setTimeout(() => setHidden(true), 900)
          return 100
        }
        return next
      })
    }, 60)
    return () => clearInterval(interval)
  }, [])

  if (hidden) return null

  return (
    <div className="loader-wrap" style={{ opacity: done ? 0 : 1, pointerEvents: done ? 'none' : 'all' }}>
      <div className="loader-logo">AV</div>
      <div className="loader-bar-wrap">
        <div className="loader-bar" style={{ width: `${Math.min(prog, 100)}%` }} />
      </div>
      <div className="loader-pct">{Math.floor(Math.min(prog, 100))}%</div>
      <div className="loader-sub">INITIALIZING PORTFOLIO...</div>
    </div>
  )
}
