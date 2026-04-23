'use client'
import { useEffect, useRef, useState } from 'react'

const posts = [
  { tag: 'LangGraph · RAG', title: 'Building a Social-to-Lead AI Agent with LangGraph', excerpt: 'How I built a conversational agent that captures leads using LangGraph state machines, Groq LLaMA 3.3, and a local RAG knowledge base — for the ServiceHive internship assignment.', date: 'Apr 2026', read: '5 min read' },
  { tag: 'Python · Binance API', title: 'How I Built a Trading Bot on Binance Futures Testnet', excerpt: 'A deep dive into building a Python CLI trading bot with HMAC-SHA256 signed REST calls, clean separation of concerns, and structured logging — in under 60 minutes.', date: 'Mar 2026', read: '4 min read' },
  { tag: 'n8n · GPT-4o', title: '19 AI Automations I Built with n8n (And What I Learned)', excerpt: 'From multi-agent bots with per-user memory to RAG pipelines — a breakdown of my 19-workflow automation suite and the architecture decisions behind it.', date: 'Feb 2026', read: '6 min read' },
]

function BlogCard({ post, index }) {
  const ref = useRef()
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: .08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={`blog-card reveal-s ${visible ? 'v' : ''}`} style={{ transitionDelay: `${index * .12}s` }}>
      <div className="blog-tag">{post.tag}</div>
      <div className="blog-title">{post.title}</div>
      <p className="blog-excerpt">{post.excerpt}</p>
      <div className="blog-meta"><span>{post.date}</span><span>{post.read}</span></div>
    </div>
  )
}

export default function Blog() {
  const [ref, setRef] = useState(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    if (!ref) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: .1 })
    obs.observe(ref)
    return () => obs.disconnect()
  }, [ref])

  return (
    <section className="sec-wrap" id="blog">
      <div ref={setRef} className={`sec-tag reveal ${vis ? 'v' : ''}`}>Blog</div>
      <h2 className={`sec-title reveal ${vis ? 'v' : ''}`}>THOUGHTS &<br />WRITEUPS</h2>
      <div className="blog-grid">
        {posts.map((p, i) => <BlogCard key={i} post={p} index={i} />)}
      </div>
    </section>
  )
}
