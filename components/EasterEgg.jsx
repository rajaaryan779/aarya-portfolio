'use client'
import { useState, useEffect } from 'react'
const K=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']
export default function EasterEgg() {
  const [show,setShow]=useState(false);const [idx,setIdx]=useState(0)
  useEffect(()=>{
    const h=e=>{setIdx(i=>{const n=e.key===K[i]?i+1:0;if(n===K.length){const f=document.getElementById('kf');if(f){f.style.opacity='.5';setTimeout(()=>{f.style.opacity='0';setShow(true)},200)}return 0}return n})}
    window.addEventListener('keydown',h);return()=>window.removeEventListener('keydown',h)
  },[])
  if(!show)return null
  return (
    <div className="egg">
      <div className="egg-t">🎉 SECRET UNLOCKED!</div>
      <p className="egg-p">↑ ↑ ↓ ↓ ← → ← → B A — Konami Code<br/><br/>You clearly pay attention to detail.<br/><span style={{color:'#6366f1'}}>Just like Aarya does with code.</span><br/><br/>aaryasharadvaidya.10@gmail.com</p>
      <button className="egg-cl" onClick={()=>setShow(false)}>[ Close ]</button>
    </div>
  )
}
