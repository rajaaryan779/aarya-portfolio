'use client'
import { useEffect, useRef, useState } from 'react'

function useCounter(target, start = false, duration = 1600) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    let s = null
    const step = (ts) => {
      if (!s) s = ts
      const p = Math.min((ts - s) / duration, 1)
      setVal(Math.floor(p * target))
      if (p < 1) requestAnimationFrame(step)
      else setVal(target)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return val
}

const CHARS = '!@#$%^&*_+-=[]{}|<>?ABCDEFGHIJKLMNabcdefghijklmn0123456789'

function useScramble(final, trigger, duration = 900) {
  const [text, setText] = useState(final)
  useEffect(() => {
    if (!trigger) return
    let frame = 0
    const total = Math.floor(duration / 30)
    const iv = setInterval(() => {
      setText(final.split('').map((c, i) =>
        frame / total > i / final.length ? c : CHARS[Math.floor(Math.random() * CHARS.length)]
      ).join(''))
      if (++frame > total) { setText(final); clearInterval(iv) }
    }, 30)
    return () => clearInterval(iv)
  }, [trigger, final, duration])
  return text
}

export default function Hero() {
  const [started, setStarted] = useState(false)
  const [ghData, setGhData] = useState({ repos: '--', stars: '--', followers: '--' })
  const [dlCount, setDlCount] = useState(42)

  const p1 = useCounter(6, started)
  const p2 = useCounter(19, started)
  const p3 = useCounter(85, started)
  const scrambled = useScramble('// B.Tech CSE · AI & ML · Pune, India', started)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 1800)
    const dl = parseInt(localStorage.getItem('av_downloads') || '42')
    setDlCount(dl)

    fetch('https://api.github.com/users/rajaaryan779')
      .then(r => r.json())
      .then(d => {
        fetch('https://api.github.com/users/rajaaryan779/repos?per_page=100')
          .then(r => r.json())
          .then(repos => {
            const stars = Array.isArray(repos) ? repos.reduce((a, r) => a + (r.stargazers_count || 0), 0) : 0
            setGhData({ repos: d.public_repos || 15, stars, followers: d.followers || 0 })
          }).catch(() => setGhData({ repos: d.public_repos || 15, stars: 0, followers: d.followers || 0 }))
      }).catch(() => setGhData({ repos: 15, stars: 0, followers: 0 }))

    return () => clearTimeout(timer)
  }, [])

  const downloadResume = (e) => {
    e.preventDefault()
    const next = dlCount + 1
    setDlCount(next)
    localStorage.setItem('av_downloads', next)
    window.open('https://drive.google.com/file/d/1dLuNQwhW41UpeBeojzT7JC5lhY6KB__S/view', '_blank')
  }

  return (
    <section className="hero" id="about">
      <span className="float-tag ft1">LangGraph Agent</span>
      <span className="float-tag ft2">RAG Pipeline</span>
      <span className="float-tag ft3">Binance API</span>
      <span className="float-tag ft4">Groq LLaMA 3.3</span>

      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="eyebrow-dot" />
          <span className={`eyebrow-text ${started ? 'show' : ''}`}>Available for opportunities</span>
        </div>

        <span className="glitch" data-text="AARYA" style={{ color: '#e8f0f8' }}>AARYA</span>
        <span className="glitch outline-t" data-text="VAIDYA">VAIDYA</span>
        <span className="glitch acc-t" data-text="AI/ML">AI/ML</span>

        <p className="scramble-txt" style={{ opacity: started ? 1 : 0 }}>{scrambled}</p>
        <p className="hero-desc" style={{ opacity: started ? 1 : 0 }}>
          Building production-grade AI systems that don&apos;t just work in notebooks — they solve real problems at scale.
        </p>

        <div className="hero-ctas" style={{ opacity: started ? 1 : 0 }}>
          <a href="#projects" className="btn-p"><span className="btn-p-inner">View Projects</span></a>
          <a href="#contact" className="btn-g">Contact Me →</a>
          <a href="#" className="resume-btn" onClick={downloadResume}>
            <span className="resume-icon">⬇</span>
            Resume
            <span className="dl-count">({dlCount} downloads)</span>
          </a>
        </div>

        {/* GitHub Stats */}
        <div className="gh-stats" style={{ opacity: started ? 1 : 0 }}>
          {[
            { num: ghData.repos, label: 'Public Repos' },
            { num: ghData.stars, label: 'GitHub Stars' },
            { num: ghData.followers, label: 'Followers' },
            { num: '6', label: 'Projects Live' },
          ].map(({ num, label }) => (
            <div className="gh-stat" key={label}>
              <div className="gh-num">{num}</div>
              <div className="gh-lbl">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-stats" style={{ opacity: started ? 1 : 0 }}>
        {[
          { val: p1, label: 'Projects' },
          { val: p2, label: 'Workflows' },
          { val: p3, label: '% Accuracy' },
        ].map(({ val, label }) => (
          <div key={label}>
            <div className="stat-n">{val}</div>
            <div className="stat-l">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
