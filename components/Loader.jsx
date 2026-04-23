'use client'
import { useState, useEffect } from 'react'

export default function Loader() {
  const [p, setP] = useState(0)
  const [out, setOut] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const iv = setInterval(() => {
      setP(prev => {
        const n = prev + Math.random() * 18 + 2
        if (n >= 100) {
          clearInterval(iv)
          setTimeout(() => setOut(true), 300)
          setTimeout(() => setGone(true), 900)
          return 100
        }
        return n
      })
    }, 55)
    return () => clearInterval(iv)
  }, [])

  if (gone) return null

  return (
    <div style={{
      position: 'fixed', inset: 0, background: '#030014', zIndex: 2000,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem',
      opacity: out ? 0 : 1, transition: 'opacity .5s', pointerEvents: out ? 'none' : 'all',
    }}>
      {/* Spinning ring */}
      <div style={{ position: 'relative', width: 80, height: 80 }}>
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          border: '1px solid rgba(99,102,241,.15)',
        }} />
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          border: '2px solid transparent',
          borderTopColor: '#6366f1', borderRightColor: '#ec4899',
          animation: 'loaderSpin 1s linear infinite',
        }} />
        <div style={{
          position: 'absolute', inset: 12, borderRadius: '50%',
          border: '1px solid transparent',
          borderBottomColor: '#06b6d4',
          animation: 'loaderSpin 1.5s linear infinite reverse',
        }} />
        <style>{`@keyframes loaderSpin{to{transform:rotate(360deg)}}`}</style>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.1rem',
          background: 'linear-gradient(135deg, #6366f1, #ec4899)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>AV</div>
      </div>

      <div style={{ width: 200, height: 1, background: 'rgba(99,102,241,.1)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, #6366f1, #ec4899, #06b6d4)',
          transform: `scaleX(${Math.min(p, 100) / 100})`, transformOrigin: 'left',
          boxShadow: '0 0 10px #6366f1',
        }} />
      </div>

      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.58rem', letterSpacing: '.2em', color: 'rgba(99,102,241,.5)' }}>
        {Math.floor(Math.min(p, 100))}% — LOADING
      </div>
    </div>
  )
}
