'use client'
import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const ref = useRef()

  useEffect(() => {
    const cv = ref.current
    const ctx = cv.getContext('2d')
    let W, H, pts = [], raf

    const resize = () => {
      W = cv.width = window.innerWidth
      H = cv.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 80; i++) {
      pts.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - .5) * .3,
        vy: (Math.random() - .5) * .3,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,255,224,0.6)'
        ctx.fill()
      })
      pts.forEach((a, i) => pts.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y)
        if (d < 120) {
          ctx.beginPath()
          ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = `rgba(0,255,224,${.15 * (1 - d / 120)})`
          ctx.lineWidth = .5; ctx.stroke()
        }
      }))
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas ref={ref} style={{
      position: 'fixed', inset: 0,
      width: '100%', height: '100%',
      zIndex: 0, opacity: .3,
      pointerEvents: 'none',
    }} />
  )
}
