'use client'
import { useEffect, useRef, useState } from 'react'

const items = [
  { year: '2021', title: 'Diploma in AI/ML', org: 'K.K. Wagh Polytechnic, Nashik', desc: 'Started my AI/ML journey. Built first Python projects, explored neural networks and fundamental ML algorithms.' },
  { year: '2024', title: 'AI Learning Program Intern', org: 'Teachnook', desc: 'Intensive training covering deep learning, NLP, TensorFlow. Built real-world projects under expert mentorship.' },
  { year: '2024', title: 'B.Tech CSE — AI/ML Specialization', org: 'Pimpri Chinchwad University, Pune', desc: 'Pursuing B.Tech with full specialization in Artificial Intelligence and Machine Learning (graduating 2027).' },
  { year: '2025', title: 'AI Intern — Stock Price Prediction', org: 'Elevate Labs', desc: 'Built end-to-end ML forecasting system using time series analysis on real-world financial datasets.' },
  { year: '2026', title: 'Trading Bot + AI Agent', org: 'PrimetradeAI · ServiceHive', desc: 'Built Binance Futures trading bot and AutoStream Social-to-Lead Agent using LangGraph, Groq, and RAG.' },
]

function TLItem({ item, index }) {
  const ref = useRef()
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: .12 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={`tl-item ${visible ? 'v' : ''}`} style={{ transitionDelay: `${index * .1}s` }}>
      <div className="tl-dot" />
      <div className="tl-year">{item.year}</div>
      <div className="tl-title">{item.title}</div>
      <div className="tl-org">{item.org}</div>
      <p className="tl-desc">{item.desc}</p>
    </div>
  )
}

export default function Timeline() {
  const [tagRef, setTagRef] = useState(null)
  const [tagVis, setTagVis] = useState(false)
  useEffect(() => {
    if (!tagRef) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTagVis(true) }, { threshold: .1 })
    obs.observe(tagRef)
    return () => obs.disconnect()
  }, [tagRef])

  return (
    <section className="sec-wrap" id="journey">
      <div ref={setTagRef} className={`sec-tag reveal ${tagVis ? 'v' : ''}`}>Journey</div>
      <h2 className={`sec-title reveal ${tagVis ? 'v' : ''}`}>MY<br />TIMELINE</h2>
      <div className="timeline">
        {items.map((item, i) => <TLItem key={i} item={item} index={i} />)}
      </div>
    </section>
  )
}
