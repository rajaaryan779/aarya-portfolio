"use client";

import { motion } from "framer-motion";
import { Bricolage_Grotesque, Inter } from "next/font/google";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400", "600", "700", "800"], display: "swap" });
const body    = Inter({ subsets: ["latin"], display: "swap" });

const BG = "#FDF6E3", INK = "#0A0A0A";
const C = ["#FFD23F", "#FF90E8", "#8AD8FF", "#A6E3A1", "#C4B5FD", "#FFB37B"];

const work = [
  { t: "Jenna", d: "Deterministic chat fast-path cutting p50 latency ~17x, plus a fabrication guard grounding every dollar figure in real transactions.", s: "FastAPI · Amazon Bedrock · PostgreSQL", h: "https://github.com/rajaaryan779" },
  { t: "Market Expansion Engine", d: "Multi-tenant B2B outreach SaaS. Row-Level Security across 8 tables — tenant isolation enforced by Postgres.", s: "Next.js · Supabase RLS · n8n", h: "https://github.com/rajaaryan779/MEE" },
  { t: "Ai-Prashashan", d: "Retrieval-grounded Nemotron assistant over 440+ govt resolutions. Refuses rather than fabricates.", s: "Kotlin · Jetpack Compose · Firebase", h: "https://github.com/rajaaryan779/Ai-Prashashan" },
  { t: "AEO Diagnostic Tool", d: "Queries 3 LLMs at once to score AI-search visibility. Top 25 at Pixii.ai.", s: "FastAPI · Gemini · OpenRouter", h: "https://github.com/rajaaryan779/aeo-diagnostic" },
  { t: "Grid07", d: "FAISS routing + LangGraph engine + injection-hardened RAG.", s: "LangGraph · FAISS · Groq", h: "https://github.com/rajaaryan779" },
  { t: "AI Automation Suite", d: "19 production n8n workflows running for real businesses.", s: "n8n · Pinecone · Gemini", h: "https://github.com/rajaaryan779/n8n-workflows" },
  { t: "DreamHome", d: "Full-stack real-estate platform. Auth latency 15ms → under 1ms.", s: "FastAPI · Next.js · PostgreSQL", h: "https://github.com/rajaaryan779/Real-Estate-software" },
  { t: "AutoStream Agent", d: "4-node LangGraph state machine for social-to-lead qualification (ServiceHive).", s: "LangGraph · Gemini · Python", h: "https://github.com/rajaaryan779/autostream_agent" },
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
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const box = (bg) => ({ background: bg, border: `3px solid ${INK}`, boxShadow: `6px 6px 0 ${INK}` });

export default function Bold() {
  return (
    <main className={body.className} style={{ background: BG, color: INK, minHeight: "100vh" }}>
      {/* Nav */}
      <header className="sticky top-0 z-50" style={{ background: BG, borderBottom: `3px solid ${INK}` }}>
        <div className="max-w-[1200px] mx-auto px-5 h-16 flex items-center justify-between">
          <a href="#top" className={`${display.className} text-xl font-extrabold`}>Aarya ✺</a>
          <nav className="hidden md:flex items-center gap-2 text-sm font-bold">
            {["work", "about", "stack"].map((s) => (
              <a key={s} href={`#${s}`} className="px-3 py-1.5 rounded-lg capitalize hover:bg-black hover:text-white transition-colors">{s}</a>
            ))}
          </nav>
          <a href="#contact" className="text-sm font-extrabold px-4 py-2 rounded-xl" style={box(C[1])}>Hire me →</a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="max-w-[1200px] mx-auto px-5 pt-16 pb-20">
        <motion.div initial={{ opacity: 0, scale: 0.8, rotate: -8 }} animate={{ opacity: 1, scale: 1, rotate: -3 }} transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="inline-block text-sm font-extrabold px-4 py-2 rounded-full mb-8" style={box(C[3])}>
          ● AVAILABLE FOR WORK — OPEN TO RELOCATION
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className={`${display.className} font-extrabold`} style={{ fontSize: "clamp(48px, 10vw, 132px)", lineHeight: 0.92, letterSpacing: "-0.02em" }}>
          I build AI that <span style={{ background: C[0], padding: "0 .15em", border: `3px solid ${INK}`, boxShadow: `5px 5px 0 ${INK}`, display: "inline-block", transform: "rotate(-2deg)" }}>ships.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-lg md:text-xl font-medium mt-8 max-w-2xl">
          AI/ML Engineer from Pune, India. LLM pipelines, multi-agent automation, and RAG that survives production. Shipping Jenna, WhatsCRM, and MEE at OyeLabs.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-4 mt-10">
          <a href="#work" className="text-base font-extrabold px-6 py-3.5 rounded-xl transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none" style={box(C[2])}>See the work →</a>
          <a href="/Aarya_Resume.pdf" download className="text-base font-extrabold px-6 py-3.5 rounded-xl transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none" style={box("#fff")}>Résumé ↓</a>
        </motion.div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden py-3" style={{ background: C[4], borderTop: `3px solid ${INK}`, borderBottom: `3px solid ${INK}` }}>
        <div className={`${display.className} flex gap-6 whitespace-nowrap animate-marquee text-lg font-extrabold`}>
          {[...Array(2)].flatMap((_, k) => ["LangChain", "n8n", "FAISS", "Claude", "Gemini", "LangGraph", "Pinecone", "RAG", "FastAPI", "Supabase"].map((t) => (
            <span key={`${k}-${t}`} className="flex items-center gap-6">{t} <span>✺</span></span>
          )))}
        </div>
      </div>

      {/* Work */}
      <section id="work" className="max-w-[1200px] mx-auto px-5 py-20">
        <Up><h2 className={`${display.className} font-extrabold mb-10`} style={{ fontSize: "clamp(32px, 6vw, 64px)" }}>Selected work ✦</h2></Up>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {work.map((p, i) => (
            <Up key={p.t} delay={(i % 3) * 0.08}>
              <a href={p.h} target="_blank" rel="noopener noreferrer"
                 className="block h-full p-6 rounded-2xl transition-transform hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none"
                 style={box(C[i % C.length])}>
                <div className="flex justify-between items-start mb-4">
                  <span className={`${display.className} text-2xl font-extrabold`}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-xl">↗</span>
                </div>
                <h3 className={`${display.className} text-2xl font-extrabold leading-tight`}>{p.t}</h3>
                <p className="text-sm font-medium mt-3">{p.d}</p>
                <p className="text-xs font-bold mt-4 uppercase">{p.s}</p>
              </a>
            </Up>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-[1200px] mx-auto px-5 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[["17x", "Latency cut", C[0]], ["11+", "Projects", C[1]], ["19", "Workflows", C[2]], ["5", "Certs", C[3]]].map(([n, l, c], i) => (
            <Up key={l} delay={i * 0.06}>
              <div className="p-6 rounded-2xl text-center" style={box(c)}>
                <div className={`${display.className} font-extrabold`} style={{ fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1 }}>{n}</div>
                <div className="text-sm font-bold mt-2 uppercase">{l}</div>
              </div>
            </Up>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-[1200px] mx-auto px-5 py-10">
        <Up>
          <div className="p-8 md:p-12 rounded-3xl" style={box("#fff")}>
            <h2 className={`${display.className} font-extrabold mb-5`} style={{ fontSize: "clamp(26px, 4vw, 44px)" }}>About me 👋</h2>
            <p className="text-lg md:text-2xl font-medium leading-snug">
              I started with a diploma in AI/ML in 2021 and never stopped shipping. Today I build production AI at <span style={{ background: C[2], padding: "0 .2em" }}>OyeLabs</span> — Jenna, WhatsCRM, and MEE — plus Ai-Prashashan, my own retrieval-grounded assistant. I care about the boring parts that make things actually work. Now hunting full-time AI/ML roles globally.
            </p>
          </div>
        </Up>
      </section>

      {/* Stack */}
      <section id="stack" className="max-w-[1200px] mx-auto px-5 py-20">
        <Up><h2 className={`${display.className} font-extrabold mb-10`} style={{ fontSize: "clamp(32px, 6vw, 64px)" }}>The toolkit 🛠️</h2></Up>
        <div className="grid md:grid-cols-2 gap-6">
          {stack.map(([k, v], i) => (
            <Up key={k} delay={(i % 2) * 0.08}>
              <div className="p-6 rounded-2xl h-full" style={box(C[(i + 2) % C.length])}>
                <div className={`${display.className} text-xl font-extrabold mb-2`}>{k}</div>
                <div className="text-sm font-semibold">{v}</div>
              </div>
            </Up>
          ))}
        </div>

        <Up><h3 className={`${display.className} font-extrabold mt-16 mb-8`} style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>Certifications 🏅</h3></Up>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map(([n, o, h], i) => (
            <Up key={n} delay={(i % 3) * 0.06}>
              <div className="p-5 rounded-2xl h-full flex flex-col justify-between gap-5" style={box("#fff")}>
                <div className="font-bold leading-snug">{n}</div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold opacity-70">{o}</span>
                  {h && <a href={h} target="_blank" rel="noopener noreferrer" className="text-xs font-extrabold underline">verify ↗</a>}
                </div>
              </div>
            </Up>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-[1200px] mx-auto px-5 py-20">
        <Up>
          <div className="p-10 md:p-16 rounded-3xl text-center" style={box(C[1])}>
            <h2 className={`${display.className} font-extrabold`} style={{ fontSize: "clamp(40px, 9vw, 110px)", lineHeight: 0.9 }}>Let&apos;s talk!</h2>
            <a href="mailto:aaryasharadvaidya.10@gmail.com" className="inline-block mt-8 text-lg md:text-2xl font-extrabold px-8 py-4 rounded-xl bg-white" style={{ border: `3px solid ${INK}`, boxShadow: `5px 5px 0 ${INK}` }}>
              aaryasharadvaidya.10@gmail.com
            </a>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              {[["LinkedIn", "https://linkedin.com/in/aarya-vaidya-013227211"], ["GitHub", "https://github.com/rajaaryan779"], ["Fiverr", "https://www.fiverr.com/rajaaryan779"]].map(([l, h]) => (
                <a key={l} href={h} target="_blank" rel="noopener noreferrer" className="text-sm font-extrabold px-5 py-2.5 rounded-xl bg-white" style={{ border: `3px solid ${INK}` }}>{l} ↗</a>
              ))}
            </div>
          </div>
        </Up>
      </section>

      <footer className="max-w-[1200px] mx-auto px-5 py-8 text-center text-sm font-bold">© 2026 Aarya Vaidya — Pune, India ✺ Built with Next.js</footer>
    </main>
  );
}
