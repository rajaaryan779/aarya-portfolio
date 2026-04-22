'use client'
import { useState } from 'react'

const projects = [
  {
    id: 1, num: '01', icon: '⚡',
    name: 'AutoStream Agent', sub: 'Social-to-Lead AI Agent',
    accent: '#00ffe0', featured: true,
    desc: 'Conversational AI agent converting social interactions into qualified leads. LangGraph state machine across 6 turns, RAG from local knowledge base, intent detection, and automatic lead capture tool execution.',
    tags: ['LangGraph', 'Groq', 'LLaMA 3.3', 'RAG', 'Python', 'Intent Detection'],
    metrics: [{ val: 'RAG', lbl: 'Pipeline' }, { val: '6', lbl: 'Turn Memory' }, { val: 'LLM', lbl: 'Powered' }],
    github: 'https://github.com/rajaaryan779/autostream_agent',
  },
  {
    id: 2, num: '02', icon: '📈',
    name: 'TradingBot', sub: 'Binance Futures Testnet',
    accent: '#ffb800',
    desc: 'Python CLI trading bot for MARKET and LIMIT orders on Binance Futures Testnet. HMAC-SHA256 signed REST calls, structured logging, clean architecture.',
    tags: ['Python', 'REST API', 'HMAC-SHA256', 'argparse'],
    metrics: [{ val: '2', lbl: 'Order Types' }, { val: 'Live', lbl: 'Testnet' }, { val: 'CLI', lbl: 'Interface' }],
    github: 'https://github.com/rajaaryan779/trading_bot',
  },
  {
    id: 3, num: '03', icon: '🧠',
    name: 'FlowMind', sub: 'AI Automation Suite',
    accent: '#ff4dff',
    desc: '19 production-grade automation workflows. Multi-agent bots with per-user memory, RAG pipeline (Google Drive → Pinecone → GPT-4o), Whisper voice transcription.',
    tags: ['n8n', 'GPT-4o', 'LangChain', 'Pinecone', 'RAG'],
    metrics: [{ val: '19', lbl: 'Workflows' }, { val: 'GPT-4o', lbl: 'LLM' }, { val: '10+', lbl: 'Integrations' }],
    github: 'https://github.com/rajaaryan779',
  },
  {
    id: 4, num: '04', icon: '🔬',
    name: 'SentimentIQ', sub: 'NLP Analysis System',
    accent: '#7b61ff',
    desc: '85%+ accuracy on 10,000+ text records. Automated sentiment pipeline reducing manual effort by 60%. Interactive dashboard visualizations.',
    tags: ['Python', 'NLTK', 'VADER', 'Flask', 'NLP'],
    metrics: [{ val: '85%+', lbl: 'Accuracy' }, { val: '10K+', lbl: 'Records' }, { val: '60%', lbl: 'Effort Saved' }],
    github: 'https://github.com/rajaaryan779',
  },
  {
    id: 5, num: '05', icon: '👁',
    name: 'VisionNet', sub: 'Image Classification CNN',
    accent: '#00ff88',
    desc: 'CNN for multi-class image classification. +12% accuracy improvement via augmentation and hyperparameter tuning. End-to-end deep learning pipeline.',
    tags: ['TensorFlow', 'Keras', 'CNN', 'Python', 'Deep Learning'],
    metrics: [{ val: '+12%', lbl: 'Accuracy' }, { val: 'CNN', lbl: 'Architecture' }, { val: 'TF', lbl: 'Framework' }],
    github: 'https://github.com/rajaaryan779',
  },
  {
    id: 6, num: '06', icon: '🌱',
    name: 'CarbonTrack', sub: 'Carbon Budgeting App',
    accent: '#00cfff',
    desc: 'Full-stack carbon footprint tracker with authentication, interactive dashboards, REST APIs, and emissions trend analysis.',
    tags: ['Flask', 'SQLite', 'REST APIs', 'HTML/CSS'],
    metrics: [{ val: 'Full', lbl: 'Stack' }, { val: 'Auth', lbl: 'Secure' }, { val: 'REST', lbl: 'APIs' }],
    github: 'https://github.com/rajaaryan779',
  },
]

function ProjectCard({ p }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? `rgba(${p.accent === '#00ffe0' ? '0,255,224' : '255,255,255'},.03)` : 'rgba(255,255,255,.02)',
        border: `1px solid ${hovered ? p.accent + '30' : 'rgba(255,255,255,.06)'}`,
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all .3s',
        transform: hovered ? 'translateY(-4px)' : 'none',
        gridColumn: p.featured ? 'span 2' : 'span 1',
        display: p.featured ? 'grid' : 'block',
        gridTemplateColumns: p.featured ? '1fr auto' : undefined,
        gap: p.featured ? '2rem' : undefined,
        alignItems: p.featured ? 'start' : undefined,
        cursor: 'none',
      }}
    >
      {/* top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: p.accent,
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform .3s',
      }} />

      <div>
        <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{p.icon}</div>
        <div style={{
          fontFamily: "'Bebas Neue',sans-serif",
          fontSize: '1.8rem', letterSpacing: '.04em',
          marginBottom: '.25rem',
        }}>{p.name}</div>
        <div style={{
          fontFamily: "'Space Mono',monospace",
          fontSize: '.6rem', letterSpacing: '.12em',
          textTransform: 'uppercase',
          color: p.accent, marginBottom: '1rem',
        }}>{p.sub}</div>
        <p style={{
          fontSize: '.85rem',
          color: 'rgba(232,240,248,.55)',
          lineHeight: '1.7', marginBottom: '1.5rem',
        }}>{p.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '1.5rem' }}>
          {p.tags.map(t => (
            <span key={t} style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: '.55rem', letterSpacing: '.08em',
              textTransform: 'uppercase',
              padding: '.3rem .6rem',
              border: '1px solid rgba(255,255,255,.1)',
              color: 'rgba(232,240,248,.5)',
            }}>{t}</span>
          ))}
        </div>
        <a href={p.github} target="_blank" rel="noopener noreferrer" style={{
          fontFamily: "'Space Mono',monospace",
          fontSize: '.6rem', letterSpacing: '.1em',
          textTransform: 'uppercase',
          color: p.accent, textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: '.4rem',
          cursor: 'none',
        }}>View on GitHub →</a>
      </div>

      {/* Metrics */}
      <div style={{
        display: 'flex',
        flexDirection: p.featured ? 'column' : 'row',
        justifyContent: p.featured ? 'center' : 'space-between',
        gap: p.featured ? '1.5rem' : '.5rem',
        minWidth: p.featured ? '160px' : undefined,
        marginTop: p.featured ? 0 : '1.5rem',
      }}>
        {p.metrics.map(m => (
          <div key={m.lbl} style={{ textAlign: p.featured ? 'right' : 'center' }}>
            <div style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: '2.2rem', color: p.accent, lineHeight: 1,
            }}>{m.val}</div>
            <div style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: '.55rem', letterSpacing: '.1em',
              textTransform: 'uppercase',
              color: 'rgba(232,240,248,.35)',
            }}>{m.lbl}</div>
          </div>
        ))}
      </div>

      {/* bg number */}
      <span style={{
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize: '5rem',
        color: 'rgba(255,255,255,.03)',
        position: 'absolute', bottom: '-1rem', right: '1rem',
        lineHeight: 1, pointerEvents: 'none',
      }}>{p.num}</span>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-wrap">
      <div className="section-tag">Projects</div>
      <h2 className="section-title">THINGS I&apos;VE<br />BUILT</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {projects.map(p => <ProjectCard key={p.id} p={p} />)}
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href="https://github.com/rajaaryan779" target="_blank" rel="noopener noreferrer" style={{
          fontFamily: "'Space Mono',monospace",
          fontSize: '.65rem', letterSpacing: '.12em',
          textTransform: 'uppercase',
          color: 'rgba(232,240,248,.4)',
          textDecoration: 'none',
          transition: 'color .2s',
          cursor: 'none',
        }}
        onMouseEnter={e => e.target.style.color = '#00ffe0'}
        onMouseLeave={e => e.target.style.color = 'rgba(232,240,248,.4)'}
        >See all projects on GitHub →</a>
      </div>
    </section>
  )
}
