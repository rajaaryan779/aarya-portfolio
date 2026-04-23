'use client'
import { useRef, useState, useEffect } from 'react'
const POSTS = [
  {tag:'LangGraph · RAG',title:'Building a Social-to-Lead AI Agent with LangGraph',ex:"How I built a conversational agent that captures leads using LangGraph state machines, Groq's LLaMA 3.3, and a local RAG knowledge base.",date:'Apr 2026',read:'5 min'},
  {tag:'Python · Binance',title:'How I Built a Trading Bot on Binance Futures Testnet',ex:'Deep dive into building a Python CLI trading bot with HMAC-SHA256 signed REST calls, clean separation of concerns, and structured logging.',date:'Mar 2026',read:'4 min'},
  {tag:'n8n · GPT-4o',title:'19 AI Automations I Built with n8n',ex:'From multi-agent bots with per-user memory to RAG pipelines powered by Pinecone and GPT-4o — a breakdown of my automation suite.',date:'Feb 2026',read:'6 min'},
]
function BCard({p,i}) {
  const ref=useRef(); const [v,setV]=useState(false)
  useEffect(()=>{const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);obs.disconnect()}},{threshold:.08});if(ref.current)obs.observe(ref.current);return()=>obs.disconnect()},[])
  return (
    <div ref={ref} className={`bl rv-s ${v?'v':''}`} style={{transitionDelay:`${i*.12}s`}}>
      <div className="bl-tag">{p.tag}</div>
      <div className="bl-title">{p.title}</div>
      <p className="bl-ex">{p.ex}</p>
      <div className="bl-meta"><span>{p.date}</span><span>{p.read} read</span></div>
    </div>
  )
}
export default function Blog() {
  const ref=useRef(); const [v,setV]=useState(false)
  useEffect(()=>{const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:.1});if(ref.current)obs.observe(ref.current);return()=>obs.disconnect()},[])
  return (
    <section className="sw" id="blog">
      <div ref={ref} className={`rv ${v?'v':''}`}>
        <div className="s-eyebrow">Blog</div>
        <h2 className="s-title">Thoughts &<br/>Writeups</h2>
      </div>
      <div className="blog-grid">{POSTS.map((p,i)=><BCard key={i} p={p} i={i}/>)}</div>
    </section>
  )
}
