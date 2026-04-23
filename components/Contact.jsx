'use client'
import { useState, useRef, useEffect } from 'react'
export default function Contact() {
  const [f,setF]=useState({name:'',email:'',msg:''})
  const [sub,setSub]=useState(false); const [res,setRes]=useState(null)
  const ref=useRef(); const [v,setV]=useState(false)
  useEffect(()=>{const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:.1});if(ref.current)obs.observe(ref.current);return()=>obs.disconnect()},[])
  const submit=e=>{e.preventDefault();setSub(true);setTimeout(()=>{setSub(false);setRes('ok');setF({name:'',email:'',msg:''});setTimeout(()=>setRes(null),4000)},1500)}
  return (
    <section className="sw" id="contact">
      <div ref={ref} className={`rv ${v?'v':''}`}>
        <div className="s-eyebrow">Contact</div>
        <h2 className="s-title">Let&apos;s Work<br/>Together</h2>
      </div>
      <div className="contact-wrap">
        <div className={`rv-l ${v?'v':''}`}>
          <a href="mailto:aaryasharadvaidya.10@gmail.com" className="c-email">aaryasharadvaidya<br/>.10@gmail.com</a>
          <div className="c-links">
            {[{l:'GitHub — rajaaryan779',h:'https://github.com/rajaaryan779'},{l:'LinkedIn — aarya-vaidya',h:'https://linkedin.com/in/aarya-vaidya'},{l:'+91 8149904590',h:'tel:+918149904590'},{l:'Pune, Maharashtra, India',h:'#'}].map(x=>(
              <a key={x.l} href={x.h} target={x.h.startsWith('http')?'_blank':undefined} rel="noopener noreferrer" className="c-link">{x.l}</a>
            ))}
          </div>
          <form className="c-form" onSubmit={submit}>
            <div className="c-fg"><input className="c-inp" type="text" id="cn" placeholder=" " value={f.name} onChange={e=>setF(p=>({...p,name:e.target.value}))} required/><label className="c-lbl" htmlFor="cn">Your Name</label></div>
            <div className="c-fg"><input className="c-inp" type="email" id="ce" placeholder=" " value={f.email} onChange={e=>setF(p=>({...p,email:e.target.value}))} required/><label className="c-lbl" htmlFor="ce">Email Address</label></div>
            <div className="c-fg"><textarea className="c-inp" id="cm" placeholder=" " value={f.msg} onChange={e=>setF(p=>({...p,msg:e.target.value}))} required/><label className="c-lbl" htmlFor="cm">Message</label></div>
            <button type="submit" className="c-submit"><span className="c-st">{sub?'Sending...':'Send Message →'}</span></button>
            {res==='ok'&&<div className="c-msg ok">✓ Message sent! Aarya will reply soon.</div>}
          </form>
        </div>
        <div className={`rv ${v?'v':''}`}>
          <div className="c-big">OPEN<br/>TO<br/>WORK</div>
        </div>
      </div>
    </section>
  )
}
