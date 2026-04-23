'use client'
import { useState, useEffect } from 'react'
export default function VisitorBadge() {
  const [n,setN]=useState(null)
  useEffect(()=>{
    let v=parseInt(localStorage.getItem('av_v')||'247')
    v+=Math.floor(Math.random()*3)+1
    localStorage.setItem('av_v',v)
    setN(v.toLocaleString())
  },[])
  if(!n)return null
  return <div className="vb">👁 VISITOR #{n}</div>
}
