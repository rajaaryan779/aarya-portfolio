"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Space_Grotesk, Inter } from "next/font/google";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });
const body    = Inter({ subsets: ["latin"], display: "swap" });

const BG = "#070710", TEXT = "#ECECF5", MUTED = "#7B7B96";

const work = [
  { t: "Jenna", c: "AI Fintech · OyeLabs", d: "Deterministic chat fast-path cutting p50 latency ~17x, plus a fabrication guard that grounds every dollar figure against real transaction data.", s: ["FastAPI", "Amazon Bedrock", "PostgreSQL"], h: "https://github.com/rajaaryan779" },
  { t: "Market Expansion Engine", c: "Multi-Tenant SaaS · OyeLabs", d: "B2B lead-gen & AI outreach platform. Row-Level Security across 8 tables — tenant isolation enforced by Postgres, not application code.", s: ["Next.js", "Supabase RLS", "n8n"], h: "https://github.com/rajaaryan779/MEE" },
  { t: "Ai-Prashashan", c: "Grounded RAG · Android", d: "Retrieval-grounded Nemotron assistant over 440+ govt resolutions. Answers only from source text, refuses when unsupported.", s: ["Kotlin", "Jetpack Compose", "Firebase"], h: "https://github.com/rajaaryan779/Ai-Prashashan" },
  { t: "AEO Diagnostic Tool", c: "LLM Tooling", d: "Concurrent engine querying three LLMs at once to score AI-search visibility. Top 25 at Pixii.ai.", s: ["FastAPI", "Gemini", "OpenRouter"], h: "https://github.com/rajaaryan779/aeo-diagnostic" },
  { t: "Grid07", c: "RAG Engine", d: "FAISS persona routing, a LangGraph content engine, and RAG hardened against prompt injection.", s: ["LangGraph", "FAISS", "Groq"], h: "https://github.com/rajaaryan779" },
  { t: "AI Automation Suite", c: "Workflow Eng.", d: "19 production n8n workflows running for real businesses — RAG pipelines, agents, lead-gen.", s: ["n8n", "Pinecone", "Gemini"], h: "https://github.com/rajaaryan779/n8n-workflows" },
  { t: "DreamHome", c: "Full-Stack", d: "Real-estate platform with maps and JWT auth. Auth latency cut from 15ms to under 1ms.", s: ["FastAPI", "Next.js", "PostgreSQL"], h: "https://github.com/rajaaryan779/Real-Estate-software" },
  { t: "AutoStream Agent", c: "AI Agent · ServiceHive", d: "4-node LangGraph state machine for social-to-lead qualification, with keyword-grounded retrieval.", s: ["LangGraph", "Gemini", "Python"], h: "https://github.com/rajaaryan779/autostream_agent" },
];

const stack = [
  ["AI / LLMs", "LangChain · LangGraph · RAG · Grounded Generation · Claude · Gemini · Groq LLaMA · FAISS · Pinecone · pgvector · Bedrock"],
  ["Backend", "FastAPI · Flask · PostgreSQL · SQLAlchemy · Alembic · REST · JWT · asyncio"],
  ["Mobile", "Kotlin · Jetpack Compose · Firebase · Firestore"],
  ["Automation", "n8n · WhatsApp API · Telegram API · Webhooks · Supabase · Cloudflare R2"],
  ["Languages & Tools", "Python · TypeScript · Kotlin · SQL · Cursor · Claude Code · Git · Vercel · Docker"],
];

const journey = [
  ["2026", "AI Engineering Intern", "OyeLabs Technologies"],
  ["2025", "AI Intern", "Elevate Labs"],
  ["2024", "B.Tech CSE · AI/ML", "Pimpri Chinchwad University"],
  ["2021", "Diploma · AI/ML", "K.K. Wagh Polytechnic"],
];

const certs = [
  ["Develop Generative AI Applications", "IBM · Coursera · 2026", "https://coursera.org/verify/KTAVNVHE8H6H"],
  ["Claude with Amazon Bedrock", "Anthropic · 2026", "https://verify.skilljar.com/c/mi62wwe5n6hi"],
  ["Red Hat OpenStack Admin I", "Red Hat · 2026", "https://credly.com/badges/3115833a-4a07-4cf9-ac22-855f007a5914"],
  ["Foundations of Cybersecurity", "Google · 2025", "https://coursera.org/verify/MGIHIZWCAA54"],
  ["Django Web Framework", "Meta · 2025", "https://coursera.org/verify/2Z1HXMQV496N"],
  ["AI Automation w/ n8n, Deep Learning & CNN", "Udemy · 2025", null],
];

const GRAD = "linear-gradient(120deg, #818cf8, #c084fc, #22d3ee)";

function Up({ children, delay = 0, className = "" }) {
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function Clock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const tick = () => setT(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata", hour12: false }).format(new Date()));
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, []);
  return <span>{t} IST</span>;
}

const glass = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" };

export default function Aurora() {
  return (
    <main className={body.className} style={{ background: BG, color: TEXT, minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      {/* Aurora background */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <motion.div animate={{ x: [0, 80, 0], y: [0, 40, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute rounded-full" style={{ top: "-15%", left: "-10%", width: "55vw", height: "55vw", background: "radial-gradient(circle, rgba(129,140,248,0.22), transparent 60%)", filter: "blur(80px)" }} />
        <motion.div animate={{ x: [0, -60, 0], y: [0, 60, 0] }} transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute rounded-full" style={{ top: "20%", right: "-15%", width: "50vw", height: "50vw", background: "radial-gradient(circle, rgba(192,132,252,0.18), transparent 60%)", filter: "blur(80px)" }} />
        <motion.div animate={{ x: [0, 50, 0], y: [0, -40, 0] }} transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 6 }}
          className="absolute rounded-full" style={{ bottom: "-20%", left: "20%", width: "55vw", height: "55vw", background: "radial-gradient(circle, rgba(34,211,238,0.14), transparent 60%)", filter: "blur(90px)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Nav */}
        <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(7,7,16,0.6)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
            <a href="#top" className={`${display.className} font-bold tracking-tight`}>Aarya Vaidya</a>
            <nav className="hidden md:flex items-center gap-8 text-sm" style={{ color: MUTED }}>
              {["work", "about", "stack"].map((s) => <a key={s} href={`#${s}`} className="capitalize hover:text-white transition-colors">{s}</a>)}
              <a href="#contact" className="px-4 py-1.5 rounded-full text-white text-sm font-medium" style={{ background: GRAD }}>Hire me</a>
            </nav>
            <span className="md:hidden text-xs" style={{ color: MUTED }}><Clock /></span>
          </div>
        </header>

        {/* Hero */}
        <section id="top" className="max-w-[1200px] mx-auto px-6 min-h-screen flex flex-col justify-center pt-24 pb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm w-fit mb-8" style={glass}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> <span style={{ color: MUTED }}>Available — open to relocation worldwide</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`${display.className} font-bold tracking-tight`} style={{ fontSize: "clamp(48px, 9vw, 120px)", lineHeight: 0.95, letterSpacing: "-0.03em" }}>
            Production AI,
            <br />
            <span style={{ background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>engineered to ship.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed" style={{ color: MUTED }}>
            I&apos;m Aarya — an AI/ML engineer building LLM pipelines, multi-agent automation, and RAG systems that real businesses run on. Currently at OyeLabs, shipping Jenna, WhatsCRM, and MEE.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }} className="flex flex-wrap gap-4 mt-10">
            <a href="#work" className="px-7 py-3.5 rounded-xl text-white font-semibold text-sm" style={{ background: GRAD }}>View work</a>
            <a href="/Aarya_Resume.pdf" download className="px-7 py-3.5 rounded-xl font-semibold text-sm" style={glass}>Résumé ↓</a>
          </motion.div>
        </section>

        {/* Work */}
        <section id="work" className="max-w-[1200px] mx-auto px-6 py-24">
          <Up><h2 className={`${display.className} font-bold mb-3`} style={{ fontSize: "clamp(30px, 5vw, 56px)", letterSpacing: "-0.02em" }}>Selected work</h2></Up>
          <Up delay={0.05}><p className="mb-12 text-lg" style={{ color: MUTED }}>Production AI systems used by real businesses.</p></Up>
          <div className="grid md:grid-cols-2 gap-5">
            {work.map((p, i) => (
              <Up key={p.t} delay={(i % 2) * 0.08}>
                <motion.a href={p.h} target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }}
                  className="group block h-full rounded-2xl p-7 transition-colors duration-300" style={glass}>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.05)", color: MUTED }}>{p.c}</span>
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1" style={{ background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>↗</span>
                  </div>
                  <h3 className={`${display.className} text-2xl font-semibold`}>{p.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>{p.d}</p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {p.s.map((x) => <span key={x} className="text-xs px-2.5 py-1 rounded-full" style={{ border: "1px solid rgba(255,255,255,0.1)", color: MUTED }}>{x}</span>)}
                  </div>
                </motion.a>
              </Up>
            ))}
          </div>
          <Up><a href="https://github.com/rajaaryan779" target="_blank" rel="noopener noreferrer" className="inline-block mt-10 text-sm font-medium" style={{ background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Everything on GitHub ↗</a></Up>
        </section>

        {/* About */}
        <section id="about" className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16">
            <div>
              <Up><span className="text-sm font-medium" style={{ background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>About</span></Up>
              <Up delay={0.05}>
                <h2 className={`${display.className} font-semibold mt-4`} style={{ fontSize: "clamp(24px, 3.4vw, 44px)", lineHeight: 1.25, letterSpacing: "-0.02em" }}>
                  I started with a diploma in 2021 and never stopped shipping production AI.
                </h2>
              </Up>
              <Up delay={0.1}>
                <p className="mt-6 text-lg leading-relaxed max-w-xl" style={{ color: MUTED }}>
                  I build LLM pipelines, agent orchestration, and RAG engines that solve real problems. At OyeLabs I&apos;m shipping Jenna, WhatsCRM, and MEE — plus Ai-Prashashan, my own retrieval-grounded assistant. I obsess over latency, reliability, and the thing that breaks at 2am. Looking for full-time AI/ML roles globally.
                </p>
              </Up>
            </div>
            <div>
              {journey.map(([y, r, o], i) => (
                <Up key={y} delay={i * 0.06}>
                  <div className="flex items-baseline gap-5 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    <span className="text-sm font-medium" style={{ background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{y}</span>
                    <div className="flex-1 flex flex-wrap items-baseline justify-between gap-2">
                      <span className={`${display.className} font-medium`}>{r}</span>
                      <span className="text-sm" style={{ color: MUTED }}>{o}</span>
                    </div>
                  </div>
                </Up>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-20">
            {[["17x", "Latency cut"], ["11+", "Projects"], ["19", "Workflows"], ["5", "Certs"]].map(([n, l], i) => (
              <Up key={l} delay={i * 0.07}>
                <div className="rounded-2xl p-6" style={glass}>
                  <div className={`${display.className} font-bold`} style={{ fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1, background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{n}</div>
                  <div className="text-sm mt-2" style={{ color: MUTED }}>{l}</div>
                </div>
              </Up>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="max-w-[1200px] mx-auto px-6 py-24">
          <Up><h2 className={`${display.className} font-bold mb-12`} style={{ fontSize: "clamp(30px, 5vw, 56px)", letterSpacing: "-0.02em" }}>Toolkit</h2></Up>
          {stack.map(([k, v], i) => (
            <Up key={k} delay={i * 0.05}>
              <div className="grid md:grid-cols-[220px_1fr] gap-3 md:gap-10 py-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-sm font-medium" style={{ background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{k}</div>
                <div className={`${display.className} text-lg md:text-xl`} style={{ color: "rgba(236,236,245,0.9)" }}>{v}</div>
              </div>
            </Up>
          ))}

          <Up><h3 className={`${display.className} font-bold mt-20 mb-8`} style={{ fontSize: "clamp(22px, 3.4vw, 38px)" }}>Certifications</h3></Up>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certs.map(([n, o, h], i) => (
              <Up key={n} delay={(i % 3) * 0.06}>
                <div className="rounded-2xl p-6 h-full flex flex-col justify-between gap-6" style={glass}>
                  <div className="font-medium leading-snug">{n}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: MUTED }}>{o}</span>
                    {h && <a href={h} target="_blank" rel="noopener noreferrer" className="text-xs font-medium" style={{ background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Verify ↗</a>}
                  </div>
                </div>
              </Up>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-[1200px] mx-auto px-6 py-28 text-center">
          <Up>
            <h2 className={`${display.className} font-bold`} style={{ fontSize: "clamp(44px, 10vw, 130px)", lineHeight: 0.95, letterSpacing: "-0.03em" }}>
              Let&apos;s build
              <br />
              <span style={{ background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>something great.</span>
            </h2>
          </Up>
          <Up delay={0.15}>
            <a href="mailto:aaryasharadvaidya.10@gmail.com" className="inline-block mt-10 px-8 py-4 rounded-xl text-white font-semibold" style={{ background: GRAD }}>Get in touch</a>
          </Up>
          <Up delay={0.25}>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12 text-sm" style={{ color: MUTED }}>
              {[["LinkedIn", "https://linkedin.com/in/aarya-vaidya-013227211"], ["GitHub", "https://github.com/rajaaryan779"], ["Fiverr", "https://www.fiverr.com/rajaaryan779"], ["Email", "mailto:aaryasharadvaidya.10@gmail.com"]].map(([l, h]) => (
                <a key={l} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </Up>
        </section>

        <footer className="max-w-[1200px] mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: MUTED, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <span>© 2026 Aarya Vaidya</span>
          <span>Pune, India — <Clock /></span>
          <span>Next.js · Framer Motion</span>
        </footer>
      </div>
    </main>
  );
}
