'use client'
import { useRef, useState, useEffect } from 'react'
const ITEMS = [
  {yr:'2021',ti:'Diploma in AI/ML',org:'K.K. Wagh Polytechnic, Nashik',desc:'Started the AI/ML journey. Built first Python projects, explored neural networks and fundamental algorithms.'},
  {yr:'2024',ti:'AI Learning Program Intern',org:'Teachnook',desc:'Intensive training: deep learning, NLP, TensorFlow. Built real-world projects under expert mentorship.'},
  {yr:'2024',ti:'B.Tech CSE — AI/ML Specialization',org:'Pimpri Chinchwad University, Pune',desc:'Pursuing B.Tech with full AI/ML specialization (graduating 2027).'},
  {yr:'2025',ti:'AI Intern — Stock Price Prediction',org:'Elevate Labs',desc:'Built end-to-end ML forecasting system using time series analysis on real financial datasets.'},
  {yr:'2026',ti:'Trading Bot + AI Agent Projects',org:'PrimetradeAI · ServiceHive',desc:'Built Binance Futures trading bot and AutoStream Social-to-Lead AI Agent using LangGraph, Groq, and RAG.'},
]
function TLI({item,i}) {
  const ref=useRef(); const [v,setV]=useState(false)
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:.12})
    if(ref.current)obs.observe(ref.current)
    return()=>obs.disconnect()
  },[])
  return (
    <div ref={ref} className={`tl-item ${v?'v':''}`} style={{transitionDelay:`${i*.1}s`}}>
      <div className="tl-dot"/>
      <div className="tl-yr">{item.yr}</div>
      <div className="tl-ti">{item.ti}</div>
      <div className="tl-org">{item.org}</div>
      <p className="tl-desc">{item.desc}</p>
    </div>
  )
}
export default function Timeline() {
  const ref=useRef(); const [v,setV]=useState(false)
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:.1})
    if(ref.current)obs.observe(ref.current)
    return()=>obs.disconnect()
  },[])
  return (
    <section className="sw" id="journey">
      <div ref={ref} className={`rv ${v?'v':''}`}>
        <div className="s-eyebrow">Journey</div>
        <h2 className="s-title">My Timeline</h2>
      </div>
      <div className="tl">
        {ITEMS.map((item,i)=><TLI key={i} item={item} i={i}/>)}
      </div>
    </section>
  )
}
