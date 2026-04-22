'use client'
import { useEffect, useRef } from 'react'

function useCounter(elRef, target, duration = 1500) {
  useEffect(() => {
    const el = elRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      let start = null
      const step = (ts) => {
        if (!start) start = ts
        const p = Math.min((ts - start) / duration, 1)
        el.textContent = Math.floor(p * target)
        if (p < 1) requestAnimationFrame(step)
        else el.textContent = target
      }
      requestAnimationFrame(step)
      obs.disconnect()
    }, { threshold: .1 })
    obs.observe(el)
    return () => obs.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default function Hero() {
  const c1 = useRef(), c2 = useRef(), c3 = useRef()
  useCounter(c1, 6)
  useCounter(c2, 19)
  useCounter(c3, 85)

  return (
    <section id="about" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: '8rem 3rem 4rem',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1100px', width: '100%', margin: '0 auto' }}>

        <div className="fade-up-1" style={{
          fontFamily: "'Space Mono',monospace",
          fontSize: '.65rem', letterSpacing: '.3em',
          textTransform: 'uppercase', color: '#00ffe0',
          marginBottom: '1.5rem',
          display: 'flex', alignItems: 'center', gap: '.8rem',
        }}>
          <span style={{ display: 'block', width: '32px', height: '1px', background: '#00ffe0' }} />
          Available for opportunities
        </div>

        <h1 className="fade-up-2" style={{
          fontFamily: "'Bebas Neue',sans-serif",
          fontSize: 'clamp(5rem,12vw,11rem)',
          lineHeight: '.9',
          letterSpacing: '.03em',
          marginBottom: '1rem',
        }}>
          <span style={{ color: '#e8f0f8' }}>AARYA</span><br />
          <span style={{ WebkitTextStroke: '1px rgba(232,240,248,0.2)', color: 'transparent' }}>VAIDYA</span><br />
          <span style={{ color: '#00ffe0' }}>AI/ML</span>
        </h1>

        <p className="fade-up-3" style={{
          fontFamily: "'Space Mono',monospace",
          fontSize: '.85rem', letterSpacing: '.1em',
          color: 'rgba(232,240,248,0.5)',
          marginBottom: '2.5rem',
        }}>
          {String.fromCharCode(47, 47)} B.Tech CSE · AI &amp; ML Specialization · Pune, India
        </p>

        <p className="fade-up-4" style={{
          fontSize: '1rem',
          color: 'rgba(232,240,248,0.6)',
          lineHeight: '1.8',
          maxWidth: '480px',
          marginBottom: '3rem',
        }}>
          Building production-grade AI systems that don&apos;t just work in notebooks — they solve real problems at scale.
        </p>

        <div className="fade-up-5" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-ghost">Contact Me →</a>
        </div>
      </div>

      <div className="fade-up-6" style={{
        position: 'absolute',
        bottom: '4rem', right: '3rem',
        display: 'flex', gap: '3rem',
      }}>
        {[
          { elRef: c1, label: 'Projects' },
          { elRef: c2, label: 'Workflows' },
          { elRef: c3, label: '% Accuracy' },
        ].map(({ elRef, label }) => (
          <div key={label}>
            <div ref={elRef} style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: '3rem', color: '#00ffe0', lineHeight: 1,
            }}>0</div>
            <div style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: '.6rem', letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'rgba(232,240,248,0.35)',
              marginTop: '.2rem',
            }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}