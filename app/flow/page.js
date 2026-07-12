"use client";

import { motion } from "framer-motion";
import { Sora, Inter } from "next/font/google";

const display = Sora({ subsets: ["latin"], weight: ["400", "600", "700", "800"], display: "swap" });
const body    = Inter({ subsets: ["latin"], display: "swap" });

const INK = "#0A0A14", GREY = "#5A5A6E";
const GRAD = "linear-gradient(100deg, #6366F1, #EC4899, #F59E0B, #06B6D4)";

const work = [
  { t: "Jenna", c: "AI Fintech · OyeLabs", d: "Deterministic chat fast-path cutting p50 latency ~17x, plus a fabrication guard grounding every dollar figure in real transactions.", s: "FastAPI · Amazon Bedrock · PostgreSQL", h: "https://github.com/rajaaryan779" },
  { t: "Market Expansion Engine", c: "Multi-Tenant SaaS", d: "B2B lead-gen & AI outreach platform. Row-Level Security across 8 tables — tenant isolation enforced by Postgres.", s: "Next.js · Supabase RLS · n8n", h: "https://github.com/rajaaryan779/MEE" },
  { t: "Ai-Prashashan", c: "Grounded RAG · Android", d: "Retrieval-grounded Gemini assistant over 440+ govt resolutions. Refuses rather than fabricates.", s: "Kotlin · Jetpack Compose · Firebase", h: "https://github.com/rajaaryan779/Ai-Prashashan" },
  { t: "AEO Diagnostic Tool", c: "LLM Tooling", d: "Concurrent engine querying three LLMs at once to score AI-search visibility. Top 25 at Pixii.ai.", s: "FastAPI · Gemini · OpenRouter", h: "https://github.com/rajaaryan779/aeo-diagnostic" },
  { t: "Grid07", c: "RAG Engine", d: "FAISS routing, a LangGraph content engine, and RAG hardened against prompt injection.", s: "LangGraph · FAISS · Groq", h: "https://github.com/rajaaryan779" },
  { t: "AI Automation Suite", c: "Workflow Eng.", d: "19 production n8n workflows running for real businesses every day.", s: "n8n · Pinecone · Gemini", h: "https://github.com/rajaaryan779/n8n-workflows" },
  { t: "DreamHome", c: "Full-Stack", d: "Real-estate platform with maps + JWT auth. Auth latency 15ms → under 1ms.", s: "FastAPI · Next.js · PostgreSQL", h: "https://github.com/rajaaryan779/Real-Estate-software" },
  { t: "AutoStream Agent", c: "AI Agent · ServiceHive", d: "4-node LangGraph state machine for social-to-lead qualification.", s: "LangGraph · Gemini · Python", h: "https://github.com/rajaaryan779/autostream_agent" },
];
const stack = [
  ["AI / LLMs", "LangChain · LangGraph · RAG · Grounded Generation · Claude · Gemini · Groq LLaMA · FAISS · Pinecone · Bedrock"],
  ["Backend", "FastAPI · Flask · PostgreSQL · SQLAlchemy · REST · JWT"],
  ["Mobile", "Kotlin · Jetpack Compose · Firebase"],
  ["Automation", "n8n · WhatsApp API · Telegram API · Webhooks · Supabase"],
  ["Languages & Tools", "Python · TypeScript · Kotlin · SQL · Cursor · Claude Code · Git · Vercel · Docker"],
];
const certs = [
  ["Develop Generative AI Applications", "IBM · Coursera · 2026", "https://coursera.org/verify/KTAVNVHE8H6H"],
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

export default function Flow() {
  return (
    <main className={body.className} style={{ background: "#fff", color: INK, minHeight: "100vh", overflowX: "hidden" }}>
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl" style={{ background: "rgba(255,255,255,0.8)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="max-w-[1150px] mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className={`${display.className} font-bold`}>Aarya Vaidya</a>
          <nav className="hidden md:flex items-center gap-8 text-sm" style={{ color: GREY }}>
            {["work", "about", "stack"].map((s) => <a key={s} href={`#${s}`} className="capitalize hover:text-black transition-colors">{s}</a>)}
            <a href="#contact" className="px-4 py-1.5 rounded-full text-white text-sm font-semibold" style={{ background: GRAD }}>Hire me</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative max-w-[1150px] mx-auto px-6 pt-40 pb-28 text-center">
        {/* flowing gradient ribbon */}
        <motion.div aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1, rotate: [0, 4, 0], scale: [1, 1.08, 1] }}
          transition={{ opacity: { duration: 1 }, rotate: { duration: 16, repeat: Infinity, ease: "easeInOut" }, scale: { duration: 16, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute left-1/2 -translate-x-1/2 -z-0" style={{ top: "8%", width: "120%", height: 360, background: GRAD, filter: "blur(90px)", opacity: 0.28, borderRadius: "50%" }} />
        <div className="relative">
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-8" style={{ border: "1px solid rgba(0,0,0,0.1)", color: GREY }}>
            ● AI / ML Engineer — Pune, India
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`${display.className} font-extrabold tracking-tight`} style={{ fontSize: "clamp(46px, 8vw, 108px)", lineHeight: 1, letterSpacing: "-0.03em" }}>
            Ship production AI
            <br /><span style={{ background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>without the friction.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl max-w-2xl mx-auto" style={{ color: GREY }}>
            I build LLM pipelines, multi-agent automation, and RAG systems that real businesses run on. Currently at OyeLabs, shipping Jenna, WhatsCRM, and MEE.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }} className="mt-10 flex items-center justify-center gap-4">
            <a href="#work" className="px-7 py-3.5 rounded-full text-white font-semibold text-sm" style={{ background: GRAD }}>See my work</a>
            <a href="/Aarya_Resume.pdf" download className="px-7 py-3.5 rounded-full font-semibold text-sm" style={{ border: "1px solid rgba(0,0,0,0.15)" }}>Résumé ↓</a>
          </motion.div>
        </div>
      </section>

      {/* logos strip */}
      <div className="overflow-hidden py-6 border-y" style={{ borderColor: "rgba(0,0,0,0.06)", background: "#FAFAFC" }}>
        <div className="flex gap-10 whitespace-nowrap animate-marquee text-sm font-semibold" style={{ color: "#9999AA" }}>
          {[...Array(2)].flatMap((_, k) => ["LangChain", "n8n", "FAISS", "Claude", "Gemini", "LangGraph", "Pinecone", "FastAPI", "Supabase", "Bedrock"].map((t) => (
            <span key={`${k}-${t}`} className="flex items-center gap-10">{t}</span>
          )))}
        </div>
      </div>

      {/* Stats */}
      <section className="max-w-[1150px] mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[["17x", "Latency cut"], ["19", "Workflows live"], ["11+", "Projects shipped"], ["Top 25", "Pixii.ai search"]].map(([n, l], i) => (
          <Up key={l} delay={i * 0.06}>
            <div className={`${display.className} font-extrabold`} style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1, background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{n}</div>
            <div className="text-sm mt-2" style={{ color: GREY }}>{l}</div>
          </Up>
        ))}
      </section>

      {/* Work */}
      <section id="work" className="max-w-[1150px] mx-auto px-6 py-20">
        <Up><h2 className={`${display.className} font-extrabold text-center mb-3`} style={{ fontSize: "clamp(32px, 5.5vw, 60px)", letterSpacing: "-0.02em" }}>Selected work</h2></Up>
        <Up delay={0.05}><p className="text-center mb-14 text-lg" style={{ color: GREY }}>Production AI systems used by real businesses.</p></Up>
        <div className="grid md:grid-cols-2 gap-5">
          {work.map((p, i) => (
            <Up key={p.t} delay={(i % 2) * 0.08}>
              <motion.a href={p.h} target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }}
                className="group block h-full rounded-2xl p-7 transition-shadow hover:shadow-xl" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "#F4F4F8", color: GREY }}>{p.c}</span>
                  <span className="text-lg transition-transform group-hover:translate-x-1" style={{ background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>↗</span>
                </div>
                <h3 className={`${display.className} text-2xl font-bold`}>{p.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed" style={{ color: GREY }}>{p.d}</p>
                <p className="mt-4 text-[13px] font-semibold">{p.s}</p>
              </motion.a>
            </Up>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-[900px] mx-auto px-6 py-24 text-center">
        <Up><h2 className={`${display.className} font-bold`} style={{ fontSize: "clamp(28px, 4.4vw, 52px)", lineHeight: 1.15, letterSpacing: "-0.02em" }}>I obsess over the part that comes after the demo.</h2></Up>
        <Up delay={0.1}><p className="mt-8 text-lg leading-relaxed" style={{ color: GREY }}>I started with a diploma in AI/ML in 2021 and never stopped shipping. Today I&apos;m at OyeLabs building Jenna, WhatsCRM and MEE — and I&apos;m looking for full-time AI/ML roles globally, open to relocation worldwide and visa sponsorship.</p></Up>
      </section>

      {/* Stack */}
      <section id="stack" className="max-w-[1000px] mx-auto px-6 py-20">
        <Up><h2 className={`${display.className} font-bold text-center mb-12`} style={{ fontSize: "clamp(28px, 5vw, 52px)" }}>Toolkit</h2></Up>
        {stack.map(([k, v], i) => (
          <Up key={k} delay={i * 0.05}>
            <div className="py-6 border-b" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
              <div className="text-sm font-semibold mb-2" style={{ background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{k}</div>
              <div className="text-lg md:text-xl" style={{ color: "#2A2A3A" }}>{v}</div>
            </div>
          </Up>
        ))}
        <Up><h3 className={`${display.className} font-bold text-center mt-20 mb-10`} style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>Certifications</h3></Up>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map(([n, o, h], i) => (
            <Up key={n} delay={(i % 3) * 0.06}>
              <div className="rounded-2xl p-6 h-full flex flex-col justify-between gap-5" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                <div className="font-semibold leading-snug">{n}</div>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: GREY }}>{o}</span>
                  {h && <a href={h} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold" style={{ background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Verify ↗</a>}
                </div>
              </div>
            </Up>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-28 text-center text-white" style={{ background: GRAD }}>
        <Up><h2 className={`${display.className} font-extrabold`} style={{ fontSize: "clamp(40px, 8vw, 92px)", lineHeight: 1, letterSpacing: "-0.03em" }}>Let&apos;s work together.</h2></Up>
        <Up delay={0.1}><p className="mt-6 text-lg" style={{ opacity: 0.9 }}>Open to full-time global roles, freelance, and collaborations.</p></Up>
        <Up delay={0.2}><a href="mailto:aaryasharadvaidya.10@gmail.com" className="inline-block mt-10 px-8 py-4 rounded-full bg-white font-semibold" style={{ color: INK }}>Get in touch →</a></Up>
        <Up delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-sm font-medium" style={{ opacity: 0.95 }}>
            {[["LinkedIn", "https://linkedin.com/in/aarya-vaidya-013227211"], ["GitHub", "https://github.com/rajaaryan779"], ["Fiverr", "https://www.fiverr.com/rajaaryan779"]].map(([l, h]) => (
              <a key={l} href={h} target="_blank" rel="noopener noreferrer" className="hover:underline">{l} ↗</a>
            ))}
          </div>
        </Up>
      </section>

      <footer className="px-6 py-8 text-center text-sm" style={{ color: GREY }}>© 2026 Aarya Vaidya — Pune, India · Built with Next.js</footer>
    </main>
  );
}
