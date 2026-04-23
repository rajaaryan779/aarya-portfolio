'use client'
import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const ref = useRef()

  useEffect(() => {
    const cv = ref.current
    const ctx = cv.getContext('2d')
    let W, H, raf

    const resize = () => { W = cv.width = window.innerWidth; H = cv.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    const pts = Array.from({ length: 70 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - .5) * .22,
      vy: (Math.random() - .5) * .22,
      r: Math.random() * 1.2 + .3,
    }))

    const shapes = Array.from({ length: 5 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 70 + 30,
      vx: (Math.random() - .5) * .12,
      vy: (Math.random() - .5) * .12,
      rot: 0,
      rs: (Math.random() - .5) * .004,
      sides: Math.floor(Math.random() * 3) + 3,
      alpha: Math.random() * .05 + .015,
    }))

    const poly = (x, y, r, s, rot) => {
      ctx.beginPath()
      for (let i = 0; i < s; i++) {
        const a = rot + i * (Math.PI * 2 / s)
        i ? ctx.lineTo(x + r * Math.cos(a), y + r * Math.sin(a))
          : ctx.moveTo(x + r * Math.cos(a), y + r * Math.sin(a))
      }
      ctx.closePath()
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      shapes.forEach(s => {
        s.x += s.vx; s.y += s.vy; s.rot += s.rs
        if (s.x < -100 || s.x > W + 100) s.vx *= -1
        if (s.y < -100 || s.y > H + 100) s.vy *= -1
        poly(s.x, s.y, s.r, s.sides, s.rot)
        ctx.strokeStyle = `rgba(0,255,224,${s.alpha})`
        ctx.lineWidth = .5; ctx.stroke()
      })
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,255,224,.5)'; ctx.fill()
      })
      pts.forEach((a, i) => pts.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y)
        if (d < 100) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = `rgba(0,255,224,${.1 * (1 - d / 100)})`
          ctx.lineWidth = .4; ctx.stroke()
        }
      }))
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf) }
  }, [])

  return (
    <canvas ref={ref} style={{
      position: 'fixed', inset: 0,
      width: '100%', height: '100%',
      zIndex: 0, opacity: .25,
      pointerEvents: 'none',
    }} />
  )
}
