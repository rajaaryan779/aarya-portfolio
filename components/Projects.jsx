'use client'
import { useEffect, useRef, useState } from 'react'

const projects = [
  { id: 1, num: '01', icon: '⚡', name: 'AutoStream Agent', sub: 'Social-to-Lead AI Agent', accent: '#00ffe0', featured: true,
    desc: 'Conversational AI agent converting social interactions into qualified leads. LangGraph state machine across 6 turns, RAG from local knowledge base, intent detection, and automatic lead capture tool execution.',
    tags: ['LangGraph', 'Groq', 'LLaMA 3.3', 'RAG', 'Python', 'Intent Detection'],
    metrics: [{ val: 'RAG', lbl: 'Pipeline' }, { val: '6', lbl: 'Turn Memory' }, { val: 'LLM', lbl: 'Powered' }],
    github: 'https://github.com/rajaaryan779/autostream_agent' },
  { id: 2, num: '02', icon: '📈', name: 'TradingBot', sub: 'Binance Futures Testnet', accent: '#ffb800',
    desc: 'Python CLI trading bot for MARKET and LIMIT orders on Binance Futures Testnet. HMAC-SHA256 signed REST calls, structured logging, clean architecture.',
    tags: ['Python', 'REST API', 'HMAC-SHA256', 'argparse'],
    metrics: [{ val: '2', lbl: 'Order Types' }, { val: 'Live', lbl: 'Testnet' }],
    github: 'https://github.com/rajaaryan779/trading_bot' },
  { id: 3, num: '03', icon: '🧠', name: 'FlowMind', sub: 'AI Automation Suite', accent: '#ff4dff',
    desc: '19 production-grade workflows. Multi-agent bots with per-user memory, RAG pipeline (Google Drive → Pinecone → GPT-4o), voice transcription via Whisper.',
    tags: ['n8n', 'GPT-4o', 'LangChain', 'Pinecone', 'Whisper'],
    metrics: [{ val: '19', lbl: 'Workflows' }, { val: '10+', lbl: 'Integrations' }],
    github: 'https://github.com/rajaaryan779' },
  { id: 4, num: '04', icon: '🔬', name: 'SentimentIQ', sub: 'NLP Analysis System', accent: '#7b61ff',
    desc: '85%+ accuracy on 10,000+ records. Automated sentiment pipeline cutting manual effort by 60%. Interactive dashboard visualizations.',
    tags: ['Python', 'NLTK', 'VADER', 'Flask', 'NLP'],
    metrics: [{ val: '85%+', lbl: 'Accuracy' }, { val: '60%', lbl: 'Effort Saved' }],
    github: 'https://github.com/rajaaryan779' },
]

function useReveal() {
  const ref = useRef()
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: .08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

function ProjectCard({ p, index }) {
  const cardRef = useRef()
  const [ref, visible] = useReveal()

  const onMouseMove = (e) => {
    const r = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width - .5) * 12
    const y = -((e.clientY - r.top) / r.height - .5) * 12
    cardRef.current.style.transform = `translateY(-6px) rotateY(${x}deg) rotateX(${y}deg)`
    cardRef.current.style.boxShadow = `0 24px 60px rgba(0,0,0,.4), 0 0 30px ${p.accent}15`
    cardRef.current.style.borderColor = `${p.accent}25`
  }
  const onMouseLeave = () => {
    cardRef.current.style.transform = ''
    cardRef.current.style.boxShadow = ''
    cardRef.current.style.borderColor = ''
  }

  return (
    <div
      ref={ref}
      className={`${p.featured ? 'reveal-s' : 'reveal'} ${visible ? 'v' : ''}`}
      style={{ transitionDelay: `${index * .1}s`, gridColumn: p.featured ? 'span 2' : undefined }}
    >
      <div
        ref={cardRef}
        className={`proj-card ${p.featured ? 'featured' : ''}`}
        style={{ '--ac': p.accent }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <style>{`.proj-card[style*="${p.accent}"]::after { background: ${p.accent}; }`}</style>
        <div style={p.featured ? undefined : undefined}>
          <div className="proj-icon">{p.icon}</div>
          <div className="proj-name">{p.name}</div>
          <div className="proj-sub" style={{ color: p.accent }}>{p.sub}</div>
          <p className="proj-desc">{p.desc}</p>
          <div className="proj-tags">
            {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-link" style={{ color: p.accent }}>
            View on GitHub →
          </a>
          {!p.featured && (
            <div style={{ marginTop: '1.25rem', display: 'flex', gap: '1.5rem' }}>
              {p.metrics.map(m => (
                <div key={m.lbl}>
                  <div className="metric-val" style={{ color: p.accent }}>{m.val}</div>
                  <div className="metric-lbl">{m.lbl}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        {p.featured && (
          <div className="proj-metrics">
            {p.metrics.map(m => (
              <div key={m.lbl}>
                <div className="metric-val" style={{ color: p.accent }}>{m.val}</div>
                <div className="metric-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
        )}
        <span className="proj-num">{p.num}</span>
      </div>
    </div>
  )
}

export default function Projects() {
  const [tagRef, tagVis] = useReveal()
  const [titleRef, titleVis] = useReveal()

  return (
    <section className="sec-wrap" id="projects">
      <div ref={tagRef} className={`sec-tag reveal ${tagVis ? 'v' : ''}`}>Projects</div>
      <h2 ref={titleRef} className={`sec-title reveal ${titleVis ? 'v' : ''}`}>THINGS I&apos;VE<br />BUILT</h2>
      <div className="proj-grid">
        {projects.map((p, i) => <ProjectCard key={p.id} p={p} index={i} />)}
      </div>
    </section>
  )
}
