'use client'
import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const mc = document.createElement('div'); mc.id = 'mc'
    const ring = document.createElement('div'); ring.id = 'mc-ring'
    document.body.appendChild(mc); document.body.appendChild(ring)

    const trails = []
    for (let i = 0; i < 8; i++) {
      const t = document.createElement('div')
      t.style.cssText = `width:${8-i}px;height:${8-i}px;border-radius:50%;background:rgba(99,102,241,${.18-i*.02});position:fixed;pointer-events:none;z-index:9997;transform:translate(-50%,-50%);transition:all ${.04+i*.03}s ease`
      document.body.appendChild(t); trails.push(t)
    }

    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = e => {
      mx = e.clientX; my = e.clientY
      mc.style.left = mx + 'px'; mc.style.top = my + 'px'
      trails.forEach((t, i) => setTimeout(() => { t.style.left = mx + 'px'; t.style.top = my + 'px' }, i * 20))
    }

    const onEnter = () => mc.classList.add('big')
    const onLeave = () => mc.classList.remove('big')

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a,button').forEach(el => { el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave) })

    const onScroll = () => {
      const p = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      const bar = document.getElementById('prog')
      if (bar) bar.style.width = (p * 100) + '%'
      document.querySelector('nav')?.classList.toggle('s', window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll)

    const onClick = e => {
      const r = document.createElement('div'); r.className = 'rpl'
      r.style.cssText = `left:${e.clientX}px;top:${e.clientY}px`
      document.body.appendChild(r); setTimeout(() => r.remove(), 700)

      // sound
      try {
        const a = new (window.AudioContext || window.webkitAudioContext)()
        const o = a.createOscillator(), g = a.createGain()
        o.connect(g); g.connect(a.destination)
        o.frequency.setValueAtTime(600, a.currentTime)
        o.frequency.exponentialRampToValueAtTime(300, a.currentTime + .06)
        g.gain.setValueAtTime(.04, a.currentTime)
        g.gain.exponentialRampToValueAtTime(.001, a.currentTime + .08)
        o.start(); o.stop(a.currentTime + .08)
      } catch (_) {}
    }
    document.addEventListener('click', onClick)

    let raf
    const anim = () => {
      rx += (mx - rx) * .1; ry += (my - ry) * .1
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px'
      raf = requestAnimationFrame(anim)
    }
    anim()

    return () => {
      document.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(raf)
      mc.remove(); ring.remove(); trails.forEach(t => t.remove())
    }
  }, [])
  return null
}
