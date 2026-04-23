'use client'
import { useState, useEffect } from 'react'

const CHARS = '!@#$%^&*_+-=[]<>?ABCDEFGHIJKLabcdefghijklmn0123456789'

export default function Hero() {
  const [show, setShow] = useState(false)
  const [scramble, setScramble] = useState('// B.Tech CSE · AI & ML · Pune, India')
  const [gh, setGh] = useState({ repos: '--', stars: '--', followers: '--' })
  const [counts, setCounts] = useState({ p1: 0, p2: 0, p3: 0 })
  const [dl, setDl] = useState(42)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1800)
    setDl(parseInt(localStorage.getItem('av_dl') || '42'))

    // GitHub
    fetch('https://api.github.com/users/rajaaryan779').then(r => r.json()).then(d => {
      fetch('https://api.github.com/users/rajaaryan779/repos?per_page=100').then(r => r.json()).then(repos => {
        const stars = Array.isArray(repos) ? repos.reduce((a, r) => a + (r.stargazers_count || 0), 0) : 0
        setGh({ repos: d.public_repos || 15, stars, followers: d.followers || 0 })
      }).catch(() => setGh({ repos: d.public_repos || 15, stars: 0, followers: d.followers || 0 }))
    }).catch(() => setGh({ repos: 15, stars: 0, followers: 0 }))

    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!show) return
    // Scramble
    const final = '// B.Tech CSE · AI & ML · Pune, India'
    let frame = 0; const total = 30
    const iv = setInterval(() => {
      setScramble(final.split('').map((c, i) => frame / total > i / final.length ? c : CHARS[Math.floor(Math.random() * CHARS.length)]).join(''))
      if (++frame > total) { setScramble(final); clearInterval(iv) }
    }, 30)

    // Counters
    const targets = { p1: 6, p2: 19, p3: 85 }
    let start = null
    const step = ts => {
      if (!start) start = ts
      const p = Math.min((ts - start) / 1600, 1)
      setCounts({ p1: Math.floor(p * targets.p1), p2: Math.floor(p * targets.p2), p3: Math.floor(p * targets.p3) })
      if (p < 1) requestAnimationFrame(step)
      else setCounts(targets)
    }
    setTimeout(() => requestAnimationFrame(step), 400)
    return () => clearInterval(iv)
  }, [show])

  const dlResume = e => {
    e.preventDefault()
    const n = dl + 1; setDl(n); localStorage.setItem('av_dl', n)
    window.open('https://drive.google.com/file/d/1dLuNQwhW41UpeBeojzT7JC5lhY6KB__S/view', '_blank')
  }

  const cards = [
    { icon: '⚡', title: 'AutoStream Agent', sub: 'LangGraph · Groq · RAG', tags: ['LangGraph', 'LLaMA 3.3', 'Python'], color: '#6366f1', rot: 'rotate(3deg)', pos: { top: '30px', right: '0' }, anim: 'cardFloat1' },
    { icon: '📈', title: 'TradingBot', sub: 'Binance Futures', tags: ['Python', 'REST API', 'HMAC'], color: '#f59e0b', rot: 'rotate(-2.5deg)', pos: { top: '180px', right: '70px' }, anim: 'cardFloat2' },
    { icon: '🧠', title: 'FlowMind', sub: '19 AI Workflows', tags: ['n8n', 'GPT-4o', 'Pinecone'], color: '#ec4899', rot: 'rotate(1.5deg)', pos: { top: '320px', right: '20px' }, anim: 'cardFloat3' },
    { icon: '🔬', title: 'SentimentIQ', sub: '85%+ Accuracy', tags: ['NLTK', 'VADER', 'Flask'], color: '#06b6d4', rot: 'rotate(-3deg)', pos: { top: '100px', right: '220px' }, anim: 'cardFloat1' },
  ]

  return (
    <section className="hero" id="about">
      <style>{`
        @keyframes cardFloat1{0%,100%{transform:rotate(3deg) translateY(0)}50%{transform:rotate(3deg) translateY(-14px)}}
        @keyframes cardFloat2{0%,100%{transform:rotate(-2.5deg) translateY(0)}50%{transform:rotate(-2.5deg) translateY(-18px)}}
        @keyframes cardFloat3{0%,100%{transform:rotate(1.5deg) translateY(0)}50%{transform:rotate(1.5deg) translateY(-10px)}}
        @keyframes cardFloat4{0%,100%{transform:rotate(-3deg) translateY(0)}50%{transform:rotate(-3deg) translateY(-12px)}}
      `}</style>
      <div className="hero-inner">

        {/* LEFT */}
        <div className="hero-left">
          <div className="h-badge">
            <span className="h-badge-dot" />
            Available for opportunities
          </div>

          <h1 className="h-name">
            <span className="h-name-line">
              <span className={`h-name-inner ${show ? 'show' : ''}`} style={{ transitionDelay: '.1s' }}>
                <span className="h-grad">AARYA</span>
              </span>
            </span>
            <span className="h-name-line">
              <span className={`h-name-inner ${show ? 'show' : ''}`} style={{ transitionDelay: '.2s' }}>
                <span className="h-outline">VAIDYA</span>
              </span>
            </span>
            <span className="h-name-line">
              <span className={`h-name-inner ${show ? 'show' : ''}`} style={{ transitionDelay: '.3s' }}>
                AI/ML
              </span>
            </span>
          </h1>

          <p className="h-role" style={{ opacity: show ? 1 : 0, transition: 'opacity .6s .5s' }}>{scramble}</p>
          <p className="h-desc" style={{ opacity: show ? 1 : 0, transition: 'opacity .6s .7s' }}>
            Building production-grade AI systems that don&apos;t just work in notebooks — they solve real problems at scale.
          </p>

          <div className="h-ctas" style={{ opacity: show ? 1 : 0, transition: 'opacity .6s .9s' }}>
            <a href="#projects" className="btn-a"><span>View Projects →</span></a>
            <a href="#contact" className="btn-b">Contact Me</a>
            <a href="#" className="btn-b" onClick={dlResume} style={{ fontSize: '.6rem' }}>
              ⬇ Resume <span style={{ opacity: .5, fontSize: '.48rem' }}>({dl})</span>
            </a>
          </div>

          <div className="h-stats" style={{ opacity: show ? 1 : 0, transition: 'opacity .6s 1.1s' }}>
            {[{ n: counts.p1, l: 'Projects' }, { n: counts.p2, l: 'Workflows' }, { n: counts.p3 + '%', l: 'Accuracy' }].map(s => (
              <div key={s.l}>
                <div className="h-stat-n">{s.n}</div>
                <div className="h-stat-l">{s.l}</div>
              </div>
            ))}
          </div>

          {/* GitHub stats */}
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem', opacity: show ? 1 : 0, transition: 'opacity .6s 1.3s' }}>
            {[{ n: gh.repos, l: 'Repos' }, { n: gh.stars, l: 'Stars' }, { n: gh.followers, l: 'Followers' }].map(g => (
              <div key={g.l} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.07)', padding: '.75rem 1rem' }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.4rem', background: 'linear-gradient(135deg,#6366f1,#ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{g.n}</div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.5rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(241,245,249,.3)', marginTop: '.2rem' }}>{g.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - floating cards */}
        <div className="hero-right" style={{ opacity: show ? 1 : 0, transition: 'opacity .8s 1s' }}>
          {cards.map((c, i) => (
            <div key={i} className="h-card" style={{
              ...c.pos, width: 250 - i * 15,
              animation: `${c.anim} ${6 + i}s ${i * .8}s ease-in-out infinite`,
              boxShadow: `0 0 30px ${c.color}12`,
              borderColor: `${c.color}20`,
            }}>
              <div className="hc-icon">{c.icon}</div>
              <div className="hc-title" style={{ color: c.color }}>{c.title}</div>
              <div className="hc-sub" style={{ color: 'rgba(241,245,249,.4)' }}>{c.sub}</div>
              <div className="hc-tags">
                {c.tags.map(t => (
                  <span key={t} className="hc-tag" style={{ borderColor: `${c.color}25`, color: 'rgba(241,245,249,.5)' }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
