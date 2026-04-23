'use client'
import { useEffect, useRef, useState } from 'react'

const skills = [
  { name: 'Python', pct: 92 }, { name: 'TensorFlow', pct: 85 },
  { name: 'LangChain', pct: 78 }, { name: 'LangGraph', pct: 75 },
  { name: 'OpenAI API', pct: 90 }, { name: 'n8n Automation', pct: 92 },
  { name: 'Flask', pct: 80 }, { name: 'REST APIs', pct: 85 },
  { name: 'RAG Pipelines', pct: 82 }, { name: 'Pandas / NumPy', pct: 88 },
  { name: 'Git / GitHub', pct: 88 }, { name: 'SQL / SQLite', pct: 78 },
]

export default function Skills() {
  const gridRef = useRef()
  const [animated, setAnimated] = useState(false)
  const [ref, setRef] = useState(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    if (!gridRef.current) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setAnimated(true); obs.disconnect() }
    }, { threshold: .1 })
    obs.observe(gridRef.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!ref) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: .1 })
    obs.observe(ref)
    return () => obs.disconnect()
  }, [ref])

  const onMouseMove = (e, el) => {
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%')
    el.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%')
  }

  return (
    <section className="sec-wrap" id="skills">
      <div ref={setRef} className={`sec-tag reveal ${vis ? 'v' : ''}`}>Stack</div>
      <h2 className={`sec-title reveal ${vis ? 'v' : ''}`}>TECH I<br />WORK WITH</h2>
      <div ref={gridRef} className="skills-grid">
        {skills.map((s, i) => (
          <div key={s.name} className="skill-item"
            onMouseMove={(e) => onMouseMove(e, e.currentTarget)}
          >
            <div className="skill-name">{s.name}</div>
            <div className="skill-bar">
              <div className="skill-fill" style={{
                transform: animated ? `scaleX(${s.pct / 100})` : 'scaleX(0)',
                transitionDelay: `${i * .065}s`,
              }} />
            </div>
            <div className="skill-pct">{s.pct}%</div>
          </div>
        ))}
      </div>
    </section>
  )
}
