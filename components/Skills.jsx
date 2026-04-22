'use client'
import { useEffect, useRef } from 'react'

const skills = [
  { name: 'Python', pct: 92 },
  { name: 'TensorFlow', pct: 85 },
  { name: 'LangChain', pct: 78 },
  { name: 'LangGraph', pct: 75 },
  { name: 'OpenAI API', pct: 90 },
  { name: 'n8n', pct: 92 },
  { name: 'Flask', pct: 80 },
  { name: 'REST APIs', pct: 85 },
  { name: 'RAG Pipelines', pct: 82 },
  { name: 'Pandas / NumPy', pct: 88 },
  { name: 'Git / GitHub', pct: 88 },
  { name: 'SQL / SQLite', pct: 78 },
]

export default function Skills() {
  const ref = useRef()

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      const items = ref.current?.querySelectorAll('.skill-item')
      items?.forEach((item, i) => {
        setTimeout(() => {
          const fill = item.querySelector('.skill-fill')
          const pct = item.dataset.pct
          fill.style.transform = `scaleX(${pct / 100})`
        }, i * 60)
      })
      obs.disconnect()
    }, { threshold: .1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className="section-wrap">
      <div className="section-tag">Stack</div>
      <h2 className="section-title">TECH I<br />WORK WITH</h2>
      <div ref={ref} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))',
        gap: '1px',
        border: '1px solid rgba(255,255,255,.06)',
      }}>
        {skills.map(s => (
          <div key={s.name}
            className="skill-item"
            data-pct={s.pct}
            style={{
              padding: '1.5rem',
              border: '1px solid rgba(255,255,255,.04)',
              transition: 'background .2s',
              cursor: 'none',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,255,224,.03)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <div style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: '.7rem', fontWeight: 700,
              letterSpacing: '.08em', textTransform: 'uppercase',
              marginBottom: '.8rem',
            }}>{s.name}</div>
            <div style={{
              height: '2px',
              background: 'rgba(255,255,255,.07)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div className="skill-fill" style={{
                height: '100%', background: '#00ffe0',
                transform: 'scaleX(0)', transformOrigin: 'left',
                transition: 'transform 1s ease',
              }} />
            </div>
            <div style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: '.9rem',
              color: 'rgba(232,240,248,.3)',
              marginTop: '.4rem',
            }}>{s.pct}%</div>
          </div>
        ))}
      </div>
    </section>
  )
}
