'use client'
import { useEffect } from 'react'

export default function CursorEffect() {
  useEffect(() => {
    const cur = document.createElement('div')
    cur.id = 'cur'
    const ring = document.createElement('div')
    ring.id = 'cur-ring'
    document.body.appendChild(cur)
    document.body.appendChild(ring)

    const trails = []
    for (let i = 0; i < 6; i++) {
      const t = document.createElement('div')
      t.className = 'cur-trail'
      t.style.cssText = `width:${6-i}px;height:${6-i}px;background:rgba(0,255,224,${.25-i*.04});transition:all ${.05+i*.04}s ease`
      document.body.appendChild(t)
      trails.push(t)
    }

    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      cur.style.left = mx + 'px'; cur.style.top = my + 'px'
      trails.forEach((t, i) => setTimeout(() => {
        t.style.left = mx + 'px'; t.style.top = my + 'px'
      }, i * 25))
    }
    document.addEventListener('mousemove', onMove)

    const onScroll = () => {
      const p = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      const bar = document.getElementById('sprogress')
      if (bar) bar.style.width = (p * 100) + '%'
    }
    window.addEventListener('scroll', onScroll)

    const onClick = (e) => {
      const r = document.createElement('div')
      r.className = 'ripple'
      r.style.cssText = `left:${e.clientX}px;top:${e.clientY}px`
      document.body.appendChild(r)
      setTimeout(() => r.remove(), 700)
    }
    document.addEventListener('click', onClick)

    let raf
    const animRing = () => {
      rx += (mx - rx) * .1; ry += (my - ry) * .1
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px'
      raf = requestAnimationFrame(animRing)
    }
    animRing()

    return () => {
      document.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(raf)
      cur.remove(); ring.remove()
      trails.forEach(t => t.remove())
    }
  }, [])

  return null
}
