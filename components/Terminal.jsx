'use client'
import { useState, useEffect, useRef } from 'react'
const CMDS = {
  help:()=>[{t:'╔══════════════════════════════════════╗',c:''},{t:'║         AVAILABLE COMMANDS           ║',c:''},{t:'╚══════════════════════════════════════╝',c:''},{t:'  about      projects   skills',c:'d'},{t:'  experience contact     github',c:'d'},{t:'  hire       matrix      theme',c:'d'},{t:'  clear      exit',c:'d'}],
  about:()=>[{t:'━━ ABOUT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',c:''},{t:'Name     Aarya Vaidya',c:'w'},{t:'Role     AI/ML Engineer',c:'w'},{t:'Edu      B.Tech CSE AI/ML · PCU Pune',c:'w'},{t:'Status   🟢 Open to internships NOW',c:'g'}],
  projects:()=>[{t:'━━ PROJECTS ━━━━━━━━━━━━━━━━━━━━━━━━━',c:''},{t:'01  AutoStream Agent   LangGraph+Groq+RAG',c:'w'},{t:'02  TradingBot         Binance Futures',c:'w'},{t:'03  FlowMind           19 AI Workflows',c:'w'},{t:'04  SentimentIQ        85%+ NLP',c:'w'},{t:'05  VisionNet          CNN +12% Acc',c:'w'},{t:'06  CarbonTrack        Full-Stack',c:'w'}],
  skills:()=>[{t:'━━ SKILLS ━━━━━━━━━━━━━━━━━━━━━━━━━━━',c:''},{t:'AI/ML   TensorFlow LangChain LangGraph',c:'w'},{t:'LLM     OpenAI Groq RAG-Pipelines',c:'w'},{t:'Auto    n8n Webhooks REST-APIs',c:'w'},{t:'Lang    Python SQL',c:'w'},{t:'Web     Flask HTML CSS',c:'w'}],
  experience:()=>[{t:'━━ EXPERIENCE ━━━━━━━━━━━━━━━━━━━━━━',c:''},{t:'2026  ServiceHive · AI Agent Dev',c:'w'},{t:'2026  PrimetradeAI · Trading Bot',c:'w'},{t:'2025  Elevate Labs · AI Intern',c:'w'},{t:'2024  Teachnook · AI Program',c:'w'}],
  contact:()=>[{t:'━━ CONTACT ━━━━━━━━━━━━━━━━━━━━━━━━━',c:''},{t:'Email   aaryasharadvaidya.10@gmail.com',c:'w'},{t:'GitHub  github.com/rajaaryan779',c:'w'},{t:'Phone   +91 8149904590',c:'w'}],
  hire:()=>[{t:'━━ WHY HIRE AARYA ━━━━━━━━━━━━━━━━━━━',c:''},{t:'✓ Production code not just notebooks',c:'g'},{t:'✓ LangGraph + RAG + REST from scratch',c:'g'},{t:'✓ Binance bot in under 60 minutes',c:'g'},{t:'✓ 19-workflow n8n automation suite',c:'g'},{t:'✓ Available immediately',c:'g'},{t:'',c:''},{t:'→ aaryasharadvaidya.10@gmail.com',c:'y'}],
  github:'GH',matrix:'MATRIX',theme:'THEME',clear:'CLEAR',exit:'EXIT',
}
export default function Terminal() {
  const [open,setOpen]=useState(false)
  const [lines,setLines]=useState([{t:'╔══════════════════════════════════════╗',c:''},{t:'║    AARYA VAIDYA · PORTFOLIO CLI      ║',c:''},{t:'╚══════════════════════════════════════╝',c:''},{t:"Type 'help' · ESC or ` to toggle",c:'d'}])
  const [input,setInput]=useState('')
  const bd=useRef()
  useEffect(()=>{
    const on=()=>setOpen(true)
    const key=e=>{if(e.key==='Escape')setOpen(false);if(e.key==='`'){setOpen(o=>!o);e.preventDefault()}}
    window.addEventListener('openTerm',on);window.addEventListener('keydown',key)
    return()=>{window.removeEventListener('openTerm',on);window.removeEventListener('keydown',key)}
  },[])
  useEffect(()=>{if(bd.current)bd.current.scrollTop=bd.current.scrollHeight},[lines])
  const matrix=()=>{
    const c=document.createElement('canvas');c.style.cssText='position:fixed;inset:0;width:100%;height:100%;z-index:599;pointer-events:none'
    document.body.appendChild(c);const x=c.getContext('2d');c.width=innerWidth;c.height=innerHeight
    const cols=Math.floor(innerWidth/14),drops=Array(cols).fill(1);let fr=0
    const iv=setInterval(()=>{x.fillStyle='rgba(3,0,20,.06)';x.fillRect(0,0,c.width,c.height);x.fillStyle='#6366f1';x.font='13px JetBrains Mono';drops.forEach((y,i)=>{const ch=String.fromCharCode(0x30A0+Math.random()*96);x.fillText(ch,i*14,y*14);if(y*14>c.height&&Math.random()>.97)drops[i]=0;drops[i]++});if(++fr>350){clearInterval(iv);c.remove()}},33)
  }
  const run=e=>{
    e.preventDefault();const v=input.trim().toLowerCase();setInput('');if(!v)return
    const echo={t:`aarya@portfolio:~$ ${v}`,c:'echo'}
    const cmd=CMDS[v]
    if(!cmd){setLines(l=>[...l,echo,{t:`zsh: command not found: ${v} — try 'help'`,c:'e'}]);return}
    if(cmd==='CLEAR'){setLines([]);return}
    if(cmd==='EXIT'){setOpen(false);return}
    if(cmd==='GH'){window.open('https://github.com/rajaaryan779','_blank');setLines(l=>[...l,echo,{t:'Opening GitHub...',c:'d'}]);return}
    if(cmd==='MATRIX'){matrix();setLines(l=>[...l,echo,{t:'Matrix mode activated!',c:'g'}]);return}
    if(cmd==='THEME'){const h=document.documentElement;h.dataset.theme=h.dataset.theme==='dark'?'light':'dark';setLines(l=>[...l,echo,{t:'Theme toggled!',c:'g'}]);return}
    setLines(l=>[...l,echo,...cmd()])
  }
  if(!open)return null
  return (
    <div className="t-ov on">
      <div className="t-wrap">
        <div className="t-top">
          <div className="t-dots"><div className="t-dot" style={{background:'#ff5f57'}}/><div className="t-dot" style={{background:'#febc2e'}}/><div className="t-dot" style={{background:'#28c840'}}/></div>
          <div className="t-ttl">aarya@portfolio ~ %</div>
          <button className="t-x" onClick={()=>setOpen(false)}>✕ [ESC]</button>
        </div>
        <div className="t-bd" ref={bd}>
          {lines.map((l,i)=>(
            <div key={i} className={`tl2 ${l.c==='d'?'d':l.c==='w'?'w':l.c==='e'?'e':l.c==='g'?'g':l.c==='y'?'y':l.c==='echo'?'d':''}`}
              style={l.c==='echo'?{color:'rgba(99,102,241,.5)'}:undefined}>{l.t}</div>
          ))}
        </div>
        <form className="t-ir" onSubmit={run}>
          <span className="t-pr">aarya@portfolio:~$</span>
          <input className="t-in" value={input} onChange={e=>setInput(e.target.value)} autoComplete="off" spellCheck="false" placeholder="_" autoFocus/>
        </form>
      </div>
    </div>
  )
}
