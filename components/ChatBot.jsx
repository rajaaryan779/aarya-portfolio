'use client'
import { useState, useRef, useEffect } from 'react'
const CTX=`You are Aarya Vaidya's AI assistant. Answer in 2-4 sentences max. Be friendly and professional.
Aarya: AI/ML Engineer, B.Tech CSE AI/ML PCU Pune 2024-2027, open to internships immediately.
Contact: aaryasharadvaidya.10@gmail.com, +91 8149904590, Pune India, github.com/rajaaryan779
Projects: AutoStream Agent (LangGraph+Groq+RAG), TradingBot (Binance), FlowMind (19 n8n workflows), SentimentIQ (85%+ NLP), VisionNet (CNN), CarbonTrack (Flask)
Skills: Python, TensorFlow, LangChain, LangGraph, OpenAI, Groq, n8n, Flask, RAG, Pandas, Git`
export default function ChatBot() {
  const [open,setOpen]=useState(false)
  const [msgs,setMsgs]=useState([{r:'bot',t:"Hey! I'm Aarya's AI. Ask me about his projects, skills, or experience. 👋"}])
  const [inp,setInp]=useState('');const [key,setKey]=useState('');const [load,setLoad]=useState(false)
  const ms=useRef()
  useEffect(()=>{const k=localStorage.getItem('av_gk');if(k)setKey(k)},[])
  useEffect(()=>{if(ms.current)ms.current.scrollTop=ms.current.scrollHeight},[msgs])
  const saveKey=()=>localStorage.setItem('av_gk',key)
  const send=async()=>{
    const m=inp.trim();if(!m)return;setInp('')
    setMsgs(p=>[...p,{r:'usr',t:m}]);setLoad(true)
    if(!key){setTimeout(()=>{setLoad(false);setMsgs(p=>[...p,{r:'bot',t:'Enter your Groq API key below to enable AI. Free at console.groq.com!'}])},500);return}
    try {
      const h=msgs.map(x=>({role:x.r==='bot'?'assistant':'user',content:x.t}))
      const res=await fetch('https://api.groq.com/openai/v1/chat/completions',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+key},body:JSON.stringify({model:'llama-3.3-70b-versatile',messages:[{role:'system',content:CTX},...h,{role:'user',content:m}],max_tokens:200,temperature:.7})})
      const d=await res.json()
      setMsgs(p=>[...p,{r:'bot',t:d.choices?.[0]?.message?.content||'Sorry, trouble responding.'}])
    } catch { setMsgs(p=>[...p,{r:'bot',t:'Connection error. Check your API key.'}]) }
    finally { setLoad(false) }
  }
  return (
    <>
      {!open&&<div className="cb-bbl" onClick={()=>setOpen(true)} title="Chat with Aarya's AI"><svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg></div>}
      {open&&(
        <div className="cb-win">
          <div className="cb-hd"><div className="cb-av">A</div><div><div className="cb-nm">AARYA AI</div><div className="cb-st">● Online</div></div><button className="cb-cl" onClick={()=>setOpen(false)}>✕</button></div>
          <div className="cb-ms" ref={ms}>
            {msgs.map((m,i)=><div key={i} className={`cb-m ${m.r}`}>{m.t}</div>)}
            {load&&<div className="cb-m tp">Thinking...</div>}
          </div>
          <div className="cb-ir">
            <input className="cb-ii" value={inp} onChange={e=>setInp(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="Ask about Aarya..."/>
            <button className="cb-snd" onClick={send}>→</button>
          </div>
          <div className="cb-kr">
            <input className="cb-ki" type="password" value={key} onChange={e=>setKey(e.target.value)} placeholder="Groq API key to enable AI..."/>
            <button className="cb-ks" onClick={saveKey}>SAVE</button>
          </div>
        </div>
      )}
    </>
  )
}
