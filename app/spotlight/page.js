"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Sora, Inter } from "next/font/google";

const display = Sora({ subsets: ["latin"], weight: ["400", "600", "700", "800"], display: "swap" });
const body    = Inter({ subsets: ["latin"], display: "swap" });

const BG = "#060608", TEXT = "#EDEDF2", MUTED = "#6E6E84", ACCENT = "#8B5CF6";

const work = [
  { t: "Jenna", c: "AI Fintech · OyeLabs", d: "Deterministic chat fast-path cutting p50 latency ~17x, plus a fabrication guard grounding every dollar figure.", s: "FastAPI · Amazon Bedrock · PostgreSQL", h: "https://github.com/rajaaryan779" },
  { t: "Market Expansion Engine", c: "Multi-Tenant SaaS", d: "B2B lead-gen & outreach platform. Row-Level Security across 8 tables.", s: "Next.js · Supabase RLS · n8n", h: "https://github.com/rajaaryan779/MEE" },
  { t: "Ai-Prashashan", c: "Grounded RAG · Android", d: "Retrieval-grounded assistant over 440+ govt resolutions. Refuses rather than fabricates.", s: "Kotlin · Jetpack Compose · Firebase", h: "https://github.com/rajaaryan779/Ai-Prashashan" },
  { t: "AEO Diagnostic Tool", c: "LLM Tooling", d: "Concurrent engine querying three LLMs at once to score AI-search visibility. Top 25 at Pixii.ai.", s: "FastAPI · Gemini · OpenRouter", h: "https://github.com/rajaaryan779/aeo-diagnostic" },
  { t: "Grid07", c: "RAG Engine", d: "FAISS routing, LangGraph content engine, injection-hardened RAG.", s: "LangGraph · FAISS · Groq", h: "https://github.com/rajaaryan779" },
  { t: "AI Automation Suite", c: "Workflow", d: "19 production n8n workflows running for real businesses.", s: "n8n · Pinecone · Gemini", h: "https://github.com/rajaaryan779/n8n-workflows" },
  { t: "DreamHome", c: "Full-Stack", d: "Real-estate platform. Auth latency 15ms → under 1ms.", s: "FastAPI · Next.js · PostgreSQL", h: "https://github.com/rajaaryan779/Real-Estate-software" },
  { t: "AutoStream Agent", c: "AI Agent · ServiceHive", d: "4-node LangGraph lead-qualification state machine.", s: "LangGraph · Gemini · Python", h: "https://github.com/rajaaryan779/autostream_agent" },
];
const stack = [
  ["AI / LLMs", "LangChain · LangGraph · RAG · Grounded Generation · Claude · Gemini · Groq LLaMA · FAISS · Pinecone · Bedrock"],
  ["Backend", "FastAPI · Flask · PostgreSQL · SQLAlchemy · REST · JWT"],
  ["Mobile", "Kotlin · Jetpack Compose · Firebase"],
  ["Automation", "n8n · WhatsApp API · Telegram API · Webhooks · Supabase"],
  ["Languages & Tools", "Python · TypeScript · Kotlin · SQL · Cursor · Claude Code · Git · Vercel · Docker"],
];
const certs = [
  ["Develop Generative AI Applications", "IBM · 2026", "https://coursera.org/verify/KTAVNVHE8H6H"],
  ["Claude with Amazon Bedrock", "Anthropic · 2026", "https://verify.skilljar.com/c/mi62wwe5n6hi"],
  ["Red Hat OpenStack Admin I", "Red Hat · 2026", "https://credly.com/badges/3115833a-4a07-4cf9-ac22-855f007a5914"],
  ["Foundations of Cybersecurity", "Google · 2025", "https://coursera.org/verify/MGIHIZWCAA54"],
  ["Django Web Framework", "Meta · 2025", "https://coursera.org/verify/2Z1HXMQV496N"],
  ["AI Automation w/ n8n, Deep Learning & CNN", "Udemy · 2025", null],
];

function Up({ children, delay = 0, className = "" }) {
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>
  );
}

function TiltCard({ children }) {
  const mx = useMotionValue(0), my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 18 });
  return (
    <motion.div
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5); }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}>
      {children}
    </motion.div>
  );
}

export default function Spotlight() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) { setTouch(true); return; }
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main className={body.className} style={{ background: BG, color: TEXT, minHeight: "100vh", position: "relative" }}>
      {/* spotlight veil — darkens everything except a circle around the cursor */}
      {!touch && (
        <div className="fixed inset-0 z-[40] pointer-events-none transition-opacity"
          style={{ background: `radial-gradient(circle 360px at ${pos.x}px ${pos.y}px, transparent 0%, rgba(6,6,8,0.82) 75%)` }} />
      )}
      {/* accent glow following cursor */}
      {!touch && (
        <div className="fixed z-[39] pointer-events-none" style={{ left: pos.x, top: pos.y, width: 500, height: 500, transform: "translate(-50%,-50%)", background: `radial-gradient(circle, ${ACCENT}18, transparent 60%)` }} />
      )}

      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(6,6,8,0.5)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-[1150px] mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className={`${display.className} font-bold`}>Aarya Vaidya</a>
          <nav className="hidden md:flex items-center gap-8 text-sm" style={{ color: MUTED }}>
            {["work", "about", "stack"].map((s) => <a key={s} href={`#${s}`} className="capitalize hover:text-white transition-colors">{s}</a>)}
            <a href="#contact" className="px-4 py-1.5 rounded-full text-white text-sm font-medium" style={{ background: ACCENT }}>Hire me</a>
          </nav>
        </div>
      </header>

      <div className="relative z-[10]">
        {/* Hero */}
        <section id="top" className="max-w-[1150px] mx-auto px-6 min-h-screen flex flex-col justify-center pt-24">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.2em] mb-8" style={{ color: ACCENT }}>AI / ML Engineer — Pune, India</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`${display.className} font-extrabold tracking-tight`} style={{ fontSize: "clamp(48px, 9.5vw, 130px)", lineHeight: 0.92, letterSpacing: "-0.03em" }}>
            Find the<br />work in the <span style={{ color: ACCENT }}>light.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            className="mt-8 max-w-xl text-lg" style={{ color: MUTED }}>
            Move your cursor to explore. I build production AI — LLM pipelines, agent automation, and RAG that survives the real world. Shipping Jenna, WhatsCRM & MEE at OyeLabs.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4 mt-10">
            <a href="#work" className="px-7 py-3.5 rounded-xl text-white font-semibold text-sm" style={{ background: ACCENT }}>View work</a>
            <a href="/Aarya_Resume.pdf" download className="px-7 py-3.5 rounded-xl font-semibold text-sm" style={{ border: "1px solid rgba(255,255,255,0.15)" }}>Résumé ↓</a>
          </motion.div>
          {!touch && <p className="mt-12 text-xs" style={{ color: "#33334a" }}>✦ tip: this whole page is lit by your cursor</p>}
        </section>

        {/* Work */}
        <section id="work" className="max-w-[1150px] mx-auto px-6 py-24">
          <Up><h2 className={`${display.className} font-bold mb-12`} style={{ fontSize: "clamp(30px, 5vw, 56px)", letterSpacing: "-0.02em" }}>Selected work</h2></Up>
          <div className="grid md:grid-cols-2 gap-5">
            {work.map((p, i) => (
              <Up key={p.t} delay={(i % 2) * 0.08}>
                <TiltCard>
                  <a href={p.h} target="_blank" rel="noopener noreferrer" className="group block h-full rounded-2xl p-7"
                     style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.05)", color: MUTED }}>{p.c}</span>
                      <span className="text-lg group-hover:translate-x-1 transition-transform" style={{ color: ACCENT }}>↗</span>
                    </div>
                    <h3 className={`${display.className} text-2xl font-semibold`}>{p.t}</h3>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>{p.d}</p>
                    <p className="mt-4 text-xs font-medium" style={{ color: ACCENT }}>{p.s}</p>
                  </a>
                </TiltCard>
              </Up>
            ))}
          </div>
        </section>

        {/* About + stats */}
        <section id="about" className="max-w-[1150px] mx-auto px-6 py-24">
          <Up><h2 className={`${display.className} font-semibold max-w-3xl`} style={{ fontSize: "clamp(24px, 3.6vw, 46px)", lineHeight: 1.25, letterSpacing: "-0.02em" }}>
            I build production AI that solves real problems — and obsess over the parts that make it reliable.
          </h2></Up>
          <Up delay={0.1}><p className="mt-6 max-w-2xl text-lg" style={{ color: MUTED }}>
            Diploma in 2021, never stopped shipping. At OyeLabs I&apos;m building Jenna, WhatsCRM, and MEE — plus Ai-Prashashan, my own retrieval-grounded assistant. Looking for full-time AI/ML roles globally — open to relocation and visa sponsorship.
          </p></Up>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">
            {[["17x", "Latency cut"], ["11+", "Projects"], ["19", "Workflows"], ["5", "Certs"]].map(([n, l], i) => (
              <Up key={l} delay={i * 0.07}>
                <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className={`${display.className} font-bold`} style={{ fontSize: "clamp(36px, 6vw, 60px)", lineHeight: 1, color: ACCENT }}>{n}</div>
                  <div className="text-sm mt-2" style={{ color: MUTED }}>{l}</div>
                </div>
              </Up>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="max-w-[1150px] mx-auto px-6 py-24">
          <Up><h2 className={`${display.className} font-bold mb-12`} style={{ fontSize: "clamp(30px, 5vw, 56px)" }}>Toolkit</h2></Up>
          {stack.map(([k, v], i) => (
            <Up key={k} delay={i * 0.05}>
              <div className="grid md:grid-cols-[220px_1fr] gap-3 md:gap-10 py-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-sm font-medium" style={{ color: ACCENT }}>{k}</div>
                <div className={`${display.className} text-lg md:text-xl`} style={{ color: "rgba(237,237,242,0.9)" }}>{v}</div>
              </div>
            </Up>
          ))}
          <Up><h3 className={`${display.className} font-bold mt-20 mb-8`} style={{ fontSize: "clamp(22px, 3.4vw, 38px)" }}>Certifications</h3></Up>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certs.map(([n, o, h], i) => (
              <Up key={n} delay={(i % 3) * 0.06}>
                <div className="rounded-2xl p-6 h-full flex flex-col justify-between gap-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="font-medium leading-snug">{n}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: MUTED }}>{o}</span>
                    {h && <a href={h} target="_blank" rel="noopener noreferrer" className="text-xs font-medium" style={{ color: ACCENT }}>Verify ↗</a>}
                  </div>
                </div>
              </Up>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-[1150px] mx-auto px-6 py-28 text-center">
          <Up><h2 className={`${display.className} font-extrabold`} style={{ fontSize: "clamp(44px, 10vw, 130px)", lineHeight: 0.95, letterSpacing: "-0.03em" }}>
            Let&apos;s build <span style={{ color: ACCENT }}>together.</span>
          </h2></Up>
          <Up delay={0.15}><a href="mailto:aaryasharadvaidya.10@gmail.com" className="inline-block mt-10 px-8 py-4 rounded-xl text-white font-semibold" style={{ background: ACCENT }}>Get in touch</a></Up>
          <Up delay={0.25}>
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-sm" style={{ color: MUTED }}>
              {[["LinkedIn", "https://linkedin.com/in/aarya-vaidya-013227211"], ["GitHub", "https://github.com/rajaaryan779"], ["Fiverr", "https://www.fiverr.com/rajaaryan779"], ["Email", "mailto:aaryasharadvaidya.10@gmail.com"]].map(([l, h]) => (
                <a key={l} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </Up>
        </section>

        <footer className="max-w-[1150px] mx-auto px-6 py-10 text-center text-xs" style={{ color: MUTED }}>© 2026 Aarya Vaidya — Pune, India · Next.js</footer>
      </div>
    </main>
  );
}
