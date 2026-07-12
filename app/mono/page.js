"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Archivo, Inter } from "next/font/google";

const display = Archivo({ subsets: ["latin"], weight: ["400", "700", "800", "900"], display: "swap" });
const body    = Inter({ subsets: ["latin"], display: "swap" });

const work = [
  { n: "001", t: "JENNA", d: "Deterministic chat fast-path cutting p50 latency ~17x, plus a fabrication guard grounding every dollar figure against real transaction data.", s: "FastAPI / Amazon Bedrock / PostgreSQL", h: "https://github.com/rajaaryan779" },
  { n: "002", t: "MARKET EXPANSION ENGINE", d: "Multi-tenant B2B outreach SaaS. Row-Level Security across 8 tables — tenant isolation enforced by Postgres.", s: "Next.js / Supabase RLS / n8n", h: "https://github.com/rajaaryan779/MEE" },
  { n: "003", t: "AI-PRASHASHAN", d: "Retrieval-grounded Nemotron assistant over 440+ govt resolutions. Refuses rather than fabricates.", s: "Kotlin / Jetpack Compose / Firebase", h: "https://github.com/rajaaryan779/Ai-Prashashan" },
  { n: "004", t: "AEO DIAGNOSTIC", d: "A concurrent engine querying three LLMs at once to score AI-search visibility. Top 25 at Pixii.ai.", s: "FastAPI / Gemini / OpenRouter", h: "https://github.com/rajaaryan779/aeo-diagnostic" },
  { n: "005", t: "GRID07", d: "FAISS persona routing, a LangGraph content engine, and RAG hardened against prompt injection.", s: "LangGraph / FAISS / Groq", h: "https://github.com/rajaaryan779" },
  { n: "006", t: "AUTOMATION SUITE", d: "19 production n8n workflows running for real businesses every single day.", s: "n8n / Pinecone / Gemini", h: "https://github.com/rajaaryan779/n8n-workflows" },
  { n: "007", t: "DREAMHOME", d: "Full-stack real-estate platform. Auth latency cut from 15ms to under 1ms.", s: "FastAPI / Next.js / PostgreSQL", h: "https://github.com/rajaaryan779/Real-Estate-software" },
  { n: "008", t: "AUTOSTREAM AGENT", d: "4-node LangGraph state machine for social-to-lead qualification, built for ServiceHive.", s: "LangGraph / Gemini / Python", h: "https://github.com/rajaaryan779/autostream_agent" },
];

const stack = [
  ["AI / LLMS", "LangChain — LangGraph — RAG — Grounded Generation — Claude — Gemini — Groq LLaMA — FAISS — Pinecone — Bedrock"],
  ["BACKEND", "FastAPI — Flask — PostgreSQL — SQLAlchemy — REST — JWT — asyncio"],
  ["MOBILE", "Kotlin — Jetpack Compose — Firebase — Firestore"],
  ["AUTOMATION", "n8n — WhatsApp API — Telegram API — Webhooks — Supabase — Cloudflare R2"],
  ["LANGUAGES", "Python — TypeScript — JavaScript — Kotlin — SQL"],
  ["WORKFLOW", "Cursor — Claude Code — Git — GitHub Actions — Vercel — Docker"],
];

const journey = [
  ["2026", "AI ENGINEERING INTERN", "OYELABS TECHNOLOGIES"],
  ["2025", "AI INTERN", "ELEVATE LABS"],
  ["2024", "B.TECH CSE — AI/ML", "PIMPRI CHINCHWAD UNIVERSITY"],
  ["2021", "DIPLOMA — AI/ML", "K.K. WAGH POLYTECHNIC"],
];

const certs = [
  ["GENERATIVE AI APPLICATIONS", "IBM / 2026", "https://coursera.org/verify/KTAVNVHE8H6H"],
  ["CLAUDE WITH AMAZON BEDROCK", "ANTHROPIC / 2026", "https://verify.skilljar.com/c/mi62wwe5n6hi"],
  ["RED HAT OPENSTACK ADMIN I", "RED HAT / 2026", "https://credly.com/badges/3115833a-4a07-4cf9-ac22-855f007a5914"],
  ["FOUNDATIONS OF CYBERSECURITY", "GOOGLE / 2025", "https://coursera.org/verify/MGIHIZWCAA54"],
  ["DJANGO WEB FRAMEWORK", "META / 2025", "https://coursera.org/verify/2Z1HXMQV496N"],
  ["N8N + DEEP LEARNING & CNN", "UDEMY / 2025", null],
];

function Mask({ children, delay = 0, now = false, className = "", style }) {
  const reveal = { y: 0 };
  const trig = now ? { animate: reveal } : { whileInView: reveal, viewport: { once: true, margin: "-60px" } };
  return (
    <span className="block overflow-hidden">
      <motion.span initial={{ y: "110%" }} {...trig} transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }} className={`block ${className}`} style={style}>
        {children}
      </motion.span>
    </span>
  );
}

function Clock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const tick = () => setT(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Asia/Kolkata", hour12: false }).format(new Date()));
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, []);
  return <span>{t}</span>;
}

function WorkRow({ p }) {
  const [h, setH] = useState(false);
  return (
    <a href={p.h} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
       className="block transition-colors duration-200" style={{ background: h ? "#fff" : "#000", color: h ? "#000" : "#fff", borderTop: "1px solid #333" }}>
      <div className="max-w-[1300px] mx-auto px-5 md:px-8 py-8 md:py-10 grid md:grid-cols-[90px_1fr_auto] gap-4 md:gap-10 items-center">
        <span className={`${body.className} text-sm`} style={{ opacity: 0.5 }}>{p.n}</span>
        <div>
          <h3 className={`${display.className} font-black uppercase`} style={{ fontSize: "clamp(32px, 6vw, 80px)", lineHeight: 0.9, letterSpacing: "-0.02em" }}>{p.t}</h3>
          <motion.p initial={false} animate={{ height: h ? "auto" : 0, opacity: h ? 1 : 0 }} transition={{ duration: 0.35 }} className="overflow-hidden">
            <span className={`${body.className} block pt-4 max-w-xl text-sm md:text-base`}>{p.d}</span>
          </motion.p>
        </div>
        <span className={`${body.className} text-xs uppercase tracking-widest text-right`} style={{ opacity: 0.6 }}>{p.s}</span>
      </div>
    </a>
  );
}

export default function Mono() {
  return (
    <main className={body.className} style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="max-w-[1300px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between text-white">
          <a href="#top" className={`${display.className} font-black text-sm tracking-tight`}>AARYA VAIDYA</a>
          <nav className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em]">
            {["work", "about", "stack", "contact"].map((s) => <a key={s} href={`#${s}`} className="hover:opacity-50 transition-opacity">{s}</a>)}
          </nav>
          <span className="text-xs tracking-widest"><Clock /> IST</span>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="min-h-screen flex flex-col justify-center px-5 md:px-8 pt-24 pb-12 max-w-[1300px] mx-auto">
        <div className="flex justify-between text-xs uppercase tracking-[0.2em] mb-12" style={{ opacity: 0.6 }}>
          <Mask now>AI / ML ENGINEER</Mask>
          <Mask now delay={0.1}>PUNE, INDIA</Mask>
          <Mask now delay={0.2} className="hidden sm:block">AVAILABLE 2026</Mask>
        </div>

        <h1 className={`${display.className} font-black uppercase`} style={{ fontSize: "clamp(58px, 15vw, 230px)", lineHeight: 0.82, letterSpacing: "-0.04em" }}>
          <Mask now delay={0.05}>BUILDING</Mask>
          <Mask now delay={0.18} style={{ WebkitTextStroke: "1.5px #fff", color: "transparent" }}>INTELLIGENT</Mask>
          <Mask now delay={0.3}>SYSTEMS.</Mask>
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-12">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="max-w-md text-sm md:text-base" style={{ opacity: 0.7 }}>
            I design and ship production AI — LLM pipelines, multi-agent automation, and RAG that survives the real world. Currently shipping Jenna, WhatsCRM & MEE at OyeLabs. Open to roles worldwide.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex gap-4 text-xs uppercase tracking-widest">
            <a href="#work" className="px-6 py-3 bg-white text-black font-bold">View work →</a>
            <a href="/Aarya_Resume.pdf" download className="px-6 py-3 border border-white font-bold hover:bg-white hover:text-black transition-colors">Résumé ↓</a>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden py-4 border-y border-white/20">
        <div className={`${display.className} flex gap-8 whitespace-nowrap animate-marquee text-2xl md:text-4xl font-black uppercase`} style={{ opacity: 0.25 }}>
          {[...Array(2)].flatMap((_, k) => ["LangChain", "n8n", "FAISS", "Claude", "Gemini", "LangGraph", "RAG", "FastAPI"].map((t) => (
            <span key={`${k}-${t}`} className="flex items-center gap-8">{t} <span>✦</span></span>
          )))}
        </div>
      </div>

      {/* Work */}
      <section id="work">
        <div className="max-w-[1300px] mx-auto px-5 md:px-8 py-16 flex items-end justify-between">
          <h2 className={`${display.className} font-black uppercase`} style={{ fontSize: "clamp(28px, 5vw, 56px)" }}>Selected Work</h2>
          <span className="text-xs uppercase tracking-widest" style={{ opacity: 0.5 }}>06 / Projects</span>
        </div>
        <div style={{ borderBottom: "1px solid #333" }}>
          {work.map((p) => <WorkRow key={p.n} p={p} />)}
        </div>
        <div className="max-w-[1300px] mx-auto px-5 md:px-8 py-8">
          <a href="https://github.com/rajaaryan779" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest hover:opacity-50 transition-opacity">→ Everything on GitHub</a>
        </div>
      </section>

      {/* About — inverted */}
      <section id="about" style={{ background: "#fff", color: "#000" }}>
        <div className="max-w-[1300px] mx-auto px-5 md:px-8 py-24 md:py-36">
          <span className="text-xs uppercase tracking-[0.2em]" style={{ opacity: 0.5 }}>About</span>
          <h2 className={`${display.className} font-black uppercase mt-6`} style={{ fontSize: "clamp(28px, 4.4vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            <Mask>I started in 2021.</Mask>
            <Mask delay={0.08}>I never stopped shipping.</Mask>
          </h2>
          <p className="mt-8 max-w-2xl text-base md:text-lg" style={{ opacity: 0.7 }}>
            I build production-grade AI that solves real problems — not toy demos. At OyeLabs I&apos;m shipping Jenna, WhatsCRM, and MEE — plus Ai-Prashashan, my own retrieval-grounded assistant. I obsess over latency, reliability, and the thing that breaks at 2am. Actively seeking full-time AI/ML roles globally — open to relocation and visa sponsorship.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20" style={{ background: "#000" }}>
            {[["17x", "LATENCY CUT"], ["11+", "PROJECTS"], ["19", "WORKFLOWS"], ["5", "CERTS"]].map(([n, l]) => (
              <div key={l} className="p-6 md:p-8" style={{ background: "#fff" }}>
                <div className={`${display.className} font-black`} style={{ fontSize: "clamp(40px, 7vw, 88px)", lineHeight: 1 }}>{n}</div>
                <div className="text-xs uppercase tracking-widest mt-2" style={{ opacity: 0.5 }}>{l}</div>
              </div>
            ))}
          </div>

          {/* journey */}
          <div className="mt-20">
            {journey.map(([y, r, o], i) => (
              <div key={y} className="grid md:grid-cols-[100px_1fr_auto] gap-2 md:gap-8 py-5 items-baseline" style={{ borderTop: "1px solid #ddd" }}>
                <span className={`${display.className} font-black text-xl`}>{y}</span>
                <span className="font-bold uppercase text-sm tracking-wide">{r}</span>
                <span className="text-sm" style={{ opacity: 0.5 }}>{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="max-w-[1300px] mx-auto px-5 md:px-8 py-24 md:py-32">
        <h2 className={`${display.className} font-black uppercase mb-12`} style={{ fontSize: "clamp(28px, 5vw, 56px)" }}>Capabilities</h2>
        {stack.map(([k, v], i) => (
          <div key={k} className="grid md:grid-cols-[220px_1fr] gap-2 md:gap-10 py-7" style={{ borderTop: "1px solid #333" }}>
            <div className="text-xs uppercase tracking-[0.2em] pt-1" style={{ opacity: 0.5 }}>{k}</div>
            <div className={`${display.className} font-bold uppercase`} style={{ fontSize: "clamp(16px, 2.2vw, 28px)", lineHeight: 1.4 }}>{v}</div>
          </div>
        ))}

        <h3 className={`${display.className} font-black uppercase mt-20 mb-10`} style={{ fontSize: "clamp(22px, 3.4vw, 40px)" }}>Certifications</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "#333" }}>
          {certs.map(([n, o, h]) => (
            <div key={n} className="p-6 flex flex-col justify-between gap-6" style={{ background: "#000" }}>
              <div className="font-bold uppercase text-sm leading-snug">{n}</div>
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ opacity: 0.5 }}>{o}</span>
                {h && <a href={h} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest underline">verify</a>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ background: "#fff", color: "#000" }}>
        <div className="max-w-[1300px] mx-auto px-5 md:px-8 py-28 md:py-44">
          <h2 className={`${display.className} font-black uppercase`} style={{ fontSize: "clamp(52px, 15vw, 230px)", lineHeight: 0.82, letterSpacing: "-0.04em" }}>
            <Mask>LET&apos;S</Mask>
            <Mask delay={0.1}>WORK.</Mask>
          </h2>
          <a href="mailto:aaryasharadvaidya.10@gmail.com" className="inline-block mt-10 text-lg md:text-3xl font-bold underline underline-offset-8 hover:opacity-50 transition-opacity">
            aaryasharadvaidya.10@gmail.com
          </a>
          <div className="flex flex-wrap gap-8 mt-16 text-xs uppercase tracking-[0.2em]">
            {[["LinkedIn", "https://linkedin.com/in/aarya-vaidya-013227211"], ["GitHub", "https://github.com/rajaaryan779"], ["Fiverr", "https://www.fiverr.com/rajaaryan779"], ["+91 81499 04590", "tel:+918149904590"]].map(([l, h]) => (
              <a key={l} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">{l} ↗</a>
            ))}
          </div>
        </div>
      </section>

      <footer className="max-w-[1300px] mx-auto px-5 md:px-8 py-8 flex flex-col sm:flex-row justify-between gap-3 text-xs uppercase tracking-widest" style={{ opacity: 0.4 }}>
        <span>© 2026 AARYA VAIDYA</span>
        <span>PUNE, IN — <Clock /></span>
        <span>NEXT.JS</span>
      </footer>
    </main>
  );
}
