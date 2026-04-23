'use client'
import { useRef, useState, useEffect } from 'react'

const CATS = [
  { icon:'🤖', name:'AI / ML', color:'#6366f1',
    skills:[{n:'Python',p:92},{n:'TensorFlow',p:85},{n:'LangGraph',p:75},{n:'LangChain',p:78},{n:'Scikit-learn',p:80}] },
  { icon:'⚡', name:'Automation', color:'#ec4899',
    skills:[{n:'n8n Workflows',p:92},{n:'REST APIs',p:85},{n:'Webhooks',p:82},{n:'OpenAI API',p:90},{n:'Groq',p:80}] },
  { icon:'🛠', name:'Web & Tools', color:'#06b6d4',
    skills:[{n:'Flask',p:80},{n:'RAG Pipelines',p:82},{n:'Git / GitHub',p:88},{n:'Pandas/NumPy',p:88},{n:'SQL',p:78}] },
]

export default function Skills() {
  const ref = useRef(); const [anim,setAnim] = useState(false)
  const [hr,hv] = useIntersect()
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){setAnim(true);obs.disconnect()}},{threshold:.1})
    if(ref.current)obs.observe(ref.current)
    return()=>obs.disconnect()
  },[])
  return (
    <section className="sw" id="skills">
      <div ref={hr} className={`rv ${hv?'v':''}`}>
        <div className="s-eyebrow">Stack</div>
        <h2 className="s-title">Tech I Work With</h2>
        <p className="s-sub">From training neural networks to building multi-agent pipelines — here&apos;s what powers my work.</p>
      </div>
      <div ref={ref} className="skills-bento">
        {CATS.map((cat,ci)=>(
          <div key={cat.name} className="sk-cat rv-s" style={{ transitionDelay:`${ci*.15}s`, ...(hv?{opacity:1,transform:'none'}:{}) }}>
            <div className="sk-cat-icon">{cat.icon}</div>
            <div className="sk-cat-name">{cat.name}</div>
            <div className="sk-list">
              {cat.skills.map((s,si)=>(
                <div key={s.n} className="sk-row">
                  <div className="sk-row-top">
                    <span className="sk-name">{s.n}</span>
                    <span className="sk-pct">{s.p}%</span>
                  </div>
                  <div className="sk-bar">
                    <div className="sk-fill" style={{
                      background:`linear-gradient(90deg, ${cat.color}, ${cat.color}88)`,
                      transform: anim ? `scaleX(${s.p/100})` : 'scaleX(0)',
                      transitionDelay: `${ci*.2 + si*.08}s`,
                    }}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function useIntersect() {
  const ref=useRef(); const [v,setV]=useState(false)
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:.1})
    if(ref.current)obs.observe(ref.current)
    return()=>obs.disconnect()
  },[])
  return [ref,v]
}
