'use client'
import { useState, useRef, useEffect } from 'react'

const PROJECTS = [
  { id:1, num:'01', icon:'⚡', name:'AutoStream Agent', sub:'Social-to-Lead AI Agent', accent:'#6366f1', wide:true,
    desc:'Conversational AI agent converting social interactions into qualified leads. LangGraph state machine across 6 turns, RAG from local knowledge base, intent detection, and automatic lead capture tool execution.',
    tags:['LangGraph','Groq','LLaMA 3.3','RAG','Python','Intent Detection'],
    metrics:[{v:'RAG',l:'Pipeline'},{v:'6',l:'Turn Memory'},{v:'LLM',l:'Powered'}],
    github:'https://github.com/rajaaryan779/autostream_agent' },
  { id:2, num:'02', icon:'📈', name:'TradingBot', sub:'Binance Futures Testnet', accent:'#f59e0b',
    desc:'Python CLI trading bot for MARKET and LIMIT orders. HMAC-SHA256 signed REST calls, structured logging, clean architecture.',
    tags:['Python','REST API','HMAC-SHA256','argparse'],
    metrics:[{v:'2',l:'Order Types'},{v:'Live',l:'Testnet'}],
    github:'https://github.com/rajaaryan779/trading_bot' },
  { id:3, num:'03', icon:'🧠', name:'FlowMind', sub:'AI Automation Suite', accent:'#ec4899',
    desc:'19 production-grade workflows. Multi-agent bots with per-user memory, RAG pipeline (Google Drive → Pinecone → GPT-4o), Whisper voice transcription.',
    tags:['n8n','GPT-4o','LangChain','Pinecone','Whisper'],
    metrics:[{v:'19',l:'Workflows'},{v:'10+',l:'Integrations'}],
    github:'https://github.com/rajaaryan779' },
  { id:4, num:'04', icon:'🔬', name:'SentimentIQ', sub:'NLP Analysis System', accent:'#06b6d4',
    desc:'85%+ accuracy on 10,000+ records. Automated sentiment pipeline cutting manual effort by 60%. Interactive dashboards.',
    tags:['Python','NLTK','VADER','Flask','NLP'],
    metrics:[{v:'85%+',l:'Accuracy'},{v:'60%',l:'Effort Saved'}],
    github:'https://github.com/rajaaryan779' },
]

function useRV(threshold=.08) {
  const ref = useRef(); const [vis,setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e])=>{ if(e.isIntersecting){setVis(true);obs.disconnect()} },{threshold})
    if(ref.current)obs.observe(ref.current)
    return ()=>obs.disconnect()
  },[threshold])
  return [ref,vis]
}

function ProjCard({ p, i }) {
  const [ref,vis] = useRV()
  const cardRef = useRef()
  const onMove = e => {
    const r = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX-r.left)/r.width-.5)*10
    const y = -((e.clientY-r.top)/r.height-.5)*10
    cardRef.current.style.transform = `translateY(-6px) rotateY(${x}deg) rotateX(${y}deg)`
    cardRef.current.style.boxShadow = `0 24px 60px rgba(0,0,0,.5), 0 0 40px ${p.accent}12`
  }
  const onLeave = () => { cardRef.current.style.transform=''; cardRef.current.style.boxShadow='' }

  return (
    <div ref={ref} className={`${p.wide?'rv-s':'rv'} ${vis?'v':''}`} style={{ transitionDelay:`${i*.12}s`, gridColumn: p.wide?'span 2':undefined }}>
      <style>{`.pj[data-id="${p.id}"]::after{background:${p.accent}}`}</style>
      <div ref={cardRef} className={`pj ${p.wide?'wide':''}`} data-id={p.id} onMouseMove={onMove} onMouseLeave={onLeave}>
        <div className="pj-shine" />
        <div className="pj-line" style={{ background: p.accent }} />
        <div className="pj-glow" style={{ background: `radial-gradient(circle at 50% 0, ${p.accent}08, transparent 70%)` }} />

        <div>
          <div className="pj-icon">{p.icon}</div>
          <div className="pj-name">{p.name}</div>
          <div className="pj-sub" style={{ color: p.accent }}>{p.sub}</div>
          <p className="pj-desc">{p.desc}</p>
          <div className="pj-tags">{p.tags.map(t=><span key={t} className="p-tag">{t}</span>)}</div>
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="pj-link" style={{color:p.accent}}>View on GitHub →</a>
          {!p.wide && (
            <div className="pj-metrics">
              {p.metrics.map(m=>(
                <div key={m.l}>
                  <div className="pm-val" style={{color:p.accent}}>{m.v}</div>
                  <div className="pm-lbl">{m.l}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {p.wide && (
          <div className="pj-right">
            {p.metrics.map(m=>(
              <div key={m.l}>
                <div className="pm-val" style={{color:p.accent}}>{m.v}</div>
                <div className="pm-lbl">{m.l}</div>
              </div>
            ))}
          </div>
        )}
        <span className="pj-num">{p.num}</span>
      </div>
    </div>
  )
}

export default function Projects() {
  const [hr,hv] = useRV()
  return (
    <section className="sw" id="projects">
      <div ref={hr} className={`rv ${hv?'v':''}`}>
        <div className="s-eyebrow">Projects</div>
        <h2 className="s-title">Things I&apos;ve<br />Built</h2>
        <p className="s-sub">Production-ready AI systems — from social-to-lead agents to trading bots and automation suites.</p>
      </div>
      <div className="proj-bento">
        {PROJECTS.map((p,i)=><ProjCard key={p.id} p={p} i={i}/>)}
      </div>
    </section>
  )
}
