'use client'
import { useState, useEffect } from 'react'
const TRK=[{t:'Lo-fi Study Beats',a:'Chill Mode'},{t:'Rainy Cafe Vibes',a:'Ambient'},{t:'Deep Focus Flow',a:'Dev Mode'},{t:'Midnight Coding',a:'Lo-fi Lab'}]
const HH=[4,8,12,6,10]
export default function MusicPlayer() {
  const [c,setC]=useState(0);const [pl,setPl]=useState(false);const [pg,setPg]=useState(25)
  useEffect(()=>{if(!pl)return;const iv=setInterval(()=>setPg(p=>(p+.4)%100),500);return()=>clearInterval(iv)},[pl])
  return (
    <div className="mp">
      <div className="mp-viz">{HH.map((h,i)=>(<div key={i} className="mp-bar" style={{height:h+'px',animation:pl?`vizP 1s ${i*.1}s ease-in-out infinite`:'none'}}/>))}</div>
      <style>{`@keyframes vizP{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.2)}}`}</style>
      <div className="mp-inf">
        <div className="mp-ti">{TRK[c].t}</div>
        <div className="mp-ar">🎵 {TRK[c].a}</div>
        <div className="mp-pb"><div className="mp-pf" style={{width:pg+'%'}}/></div>
      </div>
      <div className="mp-ct">
        <button className="mp-c" onClick={()=>{setC(p=>(p-1+TRK.length)%TRK.length);setPg(0)}}>⏮</button>
        <button className="mp-c" onClick={()=>setPl(p=>!p)}>{pl?'⏸':'▶'}</button>
        <button className="mp-c" onClick={()=>{setC(p=>(p+1)%TRK.length);setPg(0)}}>⏭</button>
      </div>
    </div>
  )
}
