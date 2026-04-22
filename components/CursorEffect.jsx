'use client'
import { useEffect } from 'react'

export default function CursorEffect() {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.className = 'cursor'
    const ring = document.createElement('div')
    ring.className = 'cursor-ring'
    const scrollLine = document.createElement('div')
    scrollLine.className = 'scroll-line'
    document.body.appendChild(cursor)
    document.body.appendChild(ring)
    document.body.appendChild(scrollLine)

    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
    }
    document.addEventListener('mousemove', onMove)

    const onScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      scrollLine.style.width = (pct * 100) + '%'
    }
    window.addEventListener('scroll', onScroll)

    let raf
    const animRing = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      raf = requestAnimationFrame(animRing)
    }
    animRing()

    return () => {
      document.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
      cursor.remove(); ring.remove(); scrollLine.remove()
    }
  }, [])

  return null
}
