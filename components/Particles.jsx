'use client'
import { useEffect, useRef } from 'react'

export default function Particles() {
  const ref = useRef()
  useEffect(() => {
    const cv = ref.current, ctx = cv.getContext('2d')
    let W, H, raf
    const resize = () => { W = cv.width = innerWidth; H = cv.height = innerHeight }
    resize(); window.addEventListener('resize', resize)

    const pts = Array.from({ length: 60 }, () => ({
      x: Math.random() * innerWidth, y: Math.random() * innerHeight,
      vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18,
      r: Math.random() * 1 + .3,
      hue: Math.floor(Math.random() * 3),
    }))
    const colors = ['rgba(99,102,241', 'rgba(236,72,153', 'rgba(6,182,212']

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = colors[p.hue] + ',.45)'; ctx.fill()
      })
      pts.forEach((a, i) => pts.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y)
        if (d < 90) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = colors[a.hue] + `,.${Math.floor(8*(1-d/90))})`
          ctx.lineWidth = .4; ctx.stroke()
        }
      }))
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf) }
  }, [])
  return <canvas ref={ref} style={{ position:'fixed', inset:0, width:'100%', height:'100%', zIndex:0, opacity:.2, pointerEvents:'none' }} />
}
