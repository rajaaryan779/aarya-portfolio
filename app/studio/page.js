"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";

/* ── Type ──────────────────────────────────────────────── */
const display = Sora({ subsets: ["latin"], weight: ["400", "600", "700", "800"], display: "swap" });
const body    = Inter({ subsets: ["latin"], display: "swap" });
const mono    = JetBrains_Mono({ subsets: ["latin"], display: "swap" });

/* ── Palette ───────────────────────────────────────────── */
const BG     = "#0B0B0C";
const SURF   = "#101012";
const TEXT   = "#F2F2EE";
const MUTED  = "#79796F";
const ACCENT = "#CDFF4F";

/* ── Data ──────────────────────────────────────────────── */
const work = [
  { no: "01", title: "Jenna", year: "2026", cat: "AI Fintech · OyeLabs",
    blurb: "Deterministic chat fast-path cutting p50 latency ~17x. A fabrication guard grounds every dollar figure against real transaction data.",
    stack: ["FastAPI", "Amazon Bedrock", "PostgreSQL"], href: "https://github.com/rajaaryan779" },
  { no: "02", title: "Market\nExpansion Engine", year: "2026", cat: "Multi-Tenant SaaS",
    blurb: "B2B lead-gen & AI outreach platform. Row-Level Security across all 8 tables — tenant isolation enforced by Postgres.",
    stack: ["Next.js", "Supabase RLS", "n8n"], href: "https://github.com/rajaaryan779/MEE" },
  { no: "03", title: "Ai-Prashashan", year: "2026", cat: "Grounded RAG · Android",
    blurb: "Retrieval-grounded assistant over 440+ govt resolutions. Answers only from source text, refuses when unsupported.",
    stack: ["Kotlin", "Jetpack Compose", "Firebase"], href: "https://github.com/rajaaryan779/Ai-Prashashan" },
  { no: "04", title: "AEO\nDiagnostic", year: "2026", cat: "LLM Tooling",
    blurb: "Queries three LLMs at once to score how visible a product is inside AI search. Top 25 at the Pixii.ai founding-engineer search.",
    stack: ["FastAPI", "Gemini 2.5", "OpenRouter"], href: "https://github.com/rajaaryan779/aeo-diagnostic" },
  { no: "05", title: "Grid07", year: "2026", cat: "RAG Engine",
    blurb: "Three-phase system — FAISS persona routing, LangGraph content engine, RAG hardened against prompt injection. Built to survive production.",
    stack: ["LangGraph", "FAISS", "Groq"], href: "https://github.com/rajaaryan779" },
  { no: "06", title: "Automation\nSuite", year: "2026", cat: "Workflow Eng.",
    blurb: "19 production n8n workflows running for real businesses — RAG pipelines, agent bots, voice transcription.",
    stack: ["n8n", "Pinecone", "Gemini"], href: "https://github.com/rajaaryan779/n8n-workflows" },
  { no: "07", title: "DreamHome", year: "2025", cat: "Full-Stack",
    blurb: "Real-estate platform with interactive maps and JWT auth. Token caching cut auth latency from 15ms to under 1ms — a 93% drop.",
    stack: ["FastAPI", "Next.js", "PostgreSQL"], href: "https://github.com/rajaaryan779/Real-Estate-software" },
  { no: "08", title: "AutoStream\nAgent", year: "2026", cat: "AI Agent · ServiceHive",
    blurb: "4-node LangGraph state machine for social-to-lead qualification, with keyword-grounded retrieval and structured extraction.",
    stack: ["LangGraph", "Gemini", "Python"], href: "https://github.com/rajaaryan779/autostream_agent" },
];

const capabilities = [
  { k: "AI / LLMs", v: "LangChain · LangGraph · RAG · Grounded Generation · Claude · Gemini · Groq LLaMA · FAISS · Pinecone · Amazon Bedrock" },
  { k: "Backend", v: "FastAPI · Flask · PostgreSQL · SQLAlchemy · REST · JWT · asyncio" },
  { k: "Mobile", v: "Kotlin · Jetpack Compose · Firebase · Firestore" },
  { k: "Automation", v: "n8n · WhatsApp API · Telegram API · Webhooks · Supabase · Cloudflare R2" },
  { k: "Languages", v: "Python · TypeScript · JavaScript · Kotlin · SQL" },
  { k: "Workflow", v: "Cursor · Claude Code · Git · GitHub Actions · Vercel · Docker" },
];

const journey = [
  { year: "2026", role: "AI Engineering Intern", org: "OyeLabs Technologies" },
  { year: "2025", role: "AI Intern", org: "Elevate Labs" },
  { year: "2024", role: "B.Tech CSE · AI/ML", org: "Pimpri Chinchwad University" },
  { year: "2021", role: "Diploma · AI/ML", org: "K.K. Wagh Polytechnic" },
];

const certs = [
  { name: "Develop Generative AI Applications", org: "IBM", year: "2026", href: "https://coursera.org/verify/KTAVNVHE8H6H" },
  { name: "Claude with Amazon Bedrock", org: "Anthropic", year: "2026", href: "https://verify.skilljar.com/c/mi62wwe5n6hi" },
  { name: "Red Hat OpenStack Administration I", org: "Red Hat", year: "2026", href: "https://credly.com/badges/3115833a-4a07-4cf9-ac22-855f007a5914" },
  { name: "Foundations of Cybersecurity", org: "Google · Coursera", year: "2025", href: "https://coursera.org/verify/MGIHIZWCAA54" },
  { name: "Django Web Framework", org: "Meta · Coursera", year: "2025", href: "https://coursera.org/verify/2Z1HXMQV496N" },
  { name: "AI Automation w/ n8n, Deep Learning & CNN", org: "Udemy", year: "2025", href: null },
];

/* ── Helpers ───────────────────────────────────────────── */
function Line({ children, delay = 0, now = false, className = "", style }) {
  const reveal = { y: 0 };
  const trigger = now
    ? { animate: reveal }
    : { whileInView: reveal, viewport: { once: true, margin: "-60px" } };
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        {...trigger}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`block ${className}`}
        style={style}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Fade({ children, delay = 0, y = 22, now = false, className = "" }) {
  const reveal = { opacity: 1, y: 0 };
  const trigger = now
    ? { animate: reveal }
    : { whileInView: reveal, viewport: { once: true, margin: "-60px" } };
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      {...trigger}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
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

/* Spotlight cursor */
function Cursor() {
  const [m, setM] = useState(false);
  const [hov, setHov] = useState(false);
  const x = useMotionValue(-200), y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 140, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 140, damping: 18, mass: 0.5 });
  const dx = useMotionValue(-200), dy = useMotionValue(-200);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setM(true);
    const move = (e) => { x.set(e.clientX); y.set(e.clientY); dx.set(e.clientX); dy.set(e.clientY); };
    const over = (e) => setHov(!!e.target.closest("a,button,[data-cursor]"));
    window.addEventListener("mousemove", move); window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, [x, y, dx, dy]);
  if (!m) return null;
  return (
    <>
      <motion.div style={{ x: sx, y: sy }} className="fixed top-0 left-0 z-[9999] pointer-events-none">
        <div className="w-[320px] h-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: `radial-gradient(circle, ${ACCENT}14 0%, transparent 60%)` }} />
      </motion.div>
      <motion.div style={{ x: dx, y: dy }} className="fixed top-0 left-0 z-[9999] pointer-events-none">
        <motion.div animate={{ scale: hov ? 2.4 : 1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: ACCENT }} />
      </motion.div>
    </>
  );
}

/* ── Page ──────────────────────────────────────────────── */
export default function Studio() {
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 240, damping: 30 });

  const heroRef = useRef(null);
  const { scrollYProgress: hp } = useScroll({ target: heroRef, offset: ["start", "end start"] });
  const glowY = useTransform(hp, [0, 1], [0, 200]);
  const nameY = useTransform(hp, [0, 1], [0, 80]);

  return (
    <main className={body.className} style={{ background: BG, color: TEXT, minHeight: "100vh", cursor: "none" }}>
      <Cursor />
      <motion.div style={{ scaleX: bar, background: ACCENT }} className="fixed top-0 left-0 right-0 h-[2px] z-[9998] origin-left" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ background: `${BG}cc`, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: ACCENT }} />
            <span className={`${display.className} font-bold text-sm tracking-tight`}>Aarya Vaidya</span>
          </a>
          <nav className={`${mono.className} hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.15em]`} style={{ color: MUTED }}>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#stack" className="hover:text-white transition-colors">Stack</a>
            <a href="#contact" className="px-4 py-1.5 rounded-full transition-colors" style={{ color: BG, background: ACCENT }}>Hire me</a>
          </nav>
          <div className={`${mono.className} md:hidden text-[11px]`} style={{ color: MUTED }}><Clock /></div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" ref={heroRef} className="relative min-h-screen flex flex-col justify-end overflow-hidden px-6 md:px-10 pb-12 pt-24 max-w-[1500px] mx-auto">
        <motion.div style={{ y: glowY }} aria-hidden className="absolute top-[10%] right-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none"
          // soft accent glow
          // keep restrained
        >
          <div className="w-full h-full rounded-full" style={{ background: `radial-gradient(circle, ${ACCENT}10 0%, transparent 65%)` }} />
        </motion.div>

        {/* top status */}
        <div className={`${mono.className} absolute top-24 left-6 md:left-10 right-6 md:right-10 flex flex-wrap justify-between gap-3 text-[11px] uppercase tracking-[0.15em]`} style={{ color: MUTED }}>
          <Fade now><span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} /> Available for work</span></Fade>
          <Fade now delay={0.1}><span className="hidden sm:block">AI / ML Engineer</span></Fade>
          <Fade now delay={0.2}><span>Pune, IN · <Clock /></span></Fade>
        </div>

        {/* big name */}
        <motion.div style={{ y: nameY }} className="relative">
          <h1 className={`${display.className} font-extrabold tracking-tight`} style={{ fontSize: "clamp(64px, 15vw, 260px)", lineHeight: 0.84, letterSpacing: "-0.04em" }}>
            <Line now delay={0.1}>AARYA</Line>
            <Line now delay={0.22}>
              VAIDYA<span style={{ color: ACCENT }}>.</span>
            </Line>
          </h1>

          <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <Fade now delay={0.4}>
              <p className="max-w-md text-base md:text-lg leading-relaxed" style={{ color: "rgba(242,242,238,0.7)" }}>
                I design and ship <span style={{ color: ACCENT }}>production AI</span> — LLM pipelines,
                agent systems, and automation that real businesses run on. Currently building products at OyeLabs.
              </p>
            </Fade>
            <Fade now delay={0.5}>
              <div className="flex items-center gap-3">
                <a href="#work" data-cursor className={`${mono.className} text-[11px] uppercase tracking-wider px-6 py-3.5 rounded-full font-medium`} style={{ background: ACCENT, color: BG }}>
                  View work
                </a>
                <a href="/Aarya_Resume.pdf" download data-cursor className={`${mono.className} text-[11px] uppercase tracking-wider px-6 py-3.5 rounded-full`} style={{ border: "1px solid rgba(255,255,255,0.2)", color: TEXT }}>
                  Résumé ↓
                </a>
              </div>
            </Fade>
          </div>
        </motion.div>
      </section>

      {/* Manifesto */}
      <section className="px-6 md:px-10 py-28 md:py-40 max-w-[1500px] mx-auto">
        <p className={`${display.className} font-semibold`} style={{ fontSize: "clamp(28px, 4.6vw, 68px)", lineHeight: 1.12, letterSpacing: "-0.02em" }}>
          <Line>Most AI demos die in</Line>
          <Line delay={0.08}>a notebook. <span style={{ color: MUTED }}>I care about</span></Line>
          <Line delay={0.16}><span style={{ color: MUTED }}>the part that comes after —</span></Line>
          <Line delay={0.24}>latency, reliability, the 2am</Line>
          <Line delay={0.32}>page that has to <span style={{ color: ACCENT }}>just work.</span></Line>
        </p>
      </section>

      {/* Work — horizontal gallery */}
      <section id="work" className="py-20 md:py-28">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 flex items-baseline justify-between mb-12">
          <Fade><h2 className={`${display.className} font-bold`} style={{ fontSize: "clamp(28px, 5vw, 64px)", letterSpacing: "-0.02em" }}>Selected work</h2></Fade>
          <span className={`${mono.className} text-[11px] uppercase tracking-wider`} style={{ color: MUTED }}>drag / scroll →</span>
        </div>

        <div className="flex gap-5 overflow-x-auto px-6 md:px-10 pb-6 snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
          {work.map((p, i) => (
            <motion.a
              key={p.no}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              className="group snap-start flex-shrink-0 w-[82vw] sm:w-[440px] rounded-2xl p-7 md:p-9 flex flex-col justify-between transition-colors duration-500"
              style={{ background: SURF, border: "1px solid rgba(255,255,255,0.07)", minHeight: 440 }}
            >
              <div className="flex items-start justify-between">
                <span className={`${mono.className} text-xs`} style={{ color: ACCENT }}>{p.no}</span>
                <span className={`${mono.className} text-[11px] uppercase tracking-wider`} style={{ color: MUTED }}>{p.cat} · {p.year}</span>
              </div>

              <div>
                <h3 className={`${display.className} font-bold whitespace-pre-line mb-5`} style={{ fontSize: "clamp(34px, 4vw, 52px)", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(242,242,238,0.6)" }}>{p.blurb}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className={`${mono.className} text-[11px] px-2.5 py-1 rounded-full`} style={{ border: "1px solid rgba(255,255,255,0.12)", color: MUTED }}>{s}</span>
                  ))}
                  <span className="ml-auto text-lg transition-transform duration-300 group-hover:translate-x-1" style={{ color: ACCENT }}>↗</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="max-w-[1500px] mx-auto px-6 md:px-10 mt-10">
          <a href="https://github.com/rajaaryan779" target="_blank" rel="noopener noreferrer" data-cursor
             className={`${mono.className} inline-flex items-center gap-2 text-[11px] uppercase tracking-wider hover:gap-3 transition-all`} style={{ color: TEXT }}>
            Everything on GitHub <span style={{ color: ACCENT }}>↗</span>
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 md:px-10 py-28 md:py-36 max-w-[1500px] mx-auto">
        <div className="grid lg:grid-cols-[auto_1fr] gap-6 lg:gap-20 items-start mb-20">
          <span className={`${mono.className} text-[11px] uppercase tracking-wider pt-3`} style={{ color: MUTED }}>About</span>
          <h2 className={`${display.className} font-semibold`} style={{ fontSize: "clamp(28px, 4.4vw, 60px)", lineHeight: 1.14, letterSpacing: "-0.02em" }}>
            <Line>I&apos;m an AI/ML engineer from</Line>
            <Line delay={0.08}>Pune, India — building since 2021,</Line>
            <Line delay={0.16}>shipping production systems today.</Line>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
          <Fade>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(242,242,238,0.72)" }}>
              I build LLM pipelines, multi-agent orchestration, and RAG engines that solve real problems — not
              toy demos. At OyeLabs I&apos;m shipping Jenna, WhatsCRM, and the Market Expansion Engine — plus
              Ai-Prashashan, my own retrieval-grounded assistant. Jenna&apos;s chat fast-path cut latency 17x.
              <br /><br />
              I&apos;m looking for full-time AI/ML roles globally — open to relocation worldwide and visa
              sponsorship. If the problem is hard, I&apos;m interested.
            </p>
          </Fade>
          <div>
            {journey.map((j, i) => (
              <Fade key={j.year} delay={i * 0.06}>
                <div className="flex items-baseline gap-6 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                  <span className={`${mono.className} text-sm`} style={{ color: ACCENT }}>{j.year}</span>
                  <div className="flex-1 flex flex-wrap items-baseline justify-between gap-2">
                    <span className={`${display.className} font-medium`}>{j.role}</span>
                    <span className="text-sm" style={{ color: MUTED }}>{j.org}</span>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>

        {/* numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {[
            { n: "17x", l: "Latency cut (Jenna)" },
            { n: "11+", l: "Production projects" },
            { n: "19",  l: "Automation workflows" },
            { n: "5",   l: "Certifications" },
          ].map((s, i) => (
            <Fade key={s.l} delay={i * 0.08}>
              <div className="py-8 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                <div className={`${display.className} font-extrabold`} style={{ fontSize: "clamp(44px, 7vw, 96px)", lineHeight: 1, letterSpacing: "-0.03em" }}>
                  {s.n}
                </div>
                <div className={`${mono.className} text-[11px] uppercase tracking-wider mt-3`} style={{ color: MUTED }}>{s.l}</div>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="px-6 md:px-10 py-28 md:py-36" style={{ background: SURF }}>
        <div className="max-w-[1500px] mx-auto">
          <div className="flex items-baseline justify-between mb-14">
            <Fade><h2 className={`${display.className} font-bold`} style={{ fontSize: "clamp(28px, 5vw, 64px)", letterSpacing: "-0.02em" }}>Capabilities</h2></Fade>
            <span className={`${mono.className} text-[11px] uppercase tracking-wider`} style={{ color: MUTED }}>Stack</span>
          </div>

          {capabilities.map((c, i) => (
            <Fade key={c.k} delay={i * 0.05}>
              <div className="grid md:grid-cols-[220px_1fr] gap-3 md:gap-12 py-7 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                <div className={`${mono.className} text-xs uppercase tracking-wider pt-1.5`} style={{ color: ACCENT }}>{c.k}</div>
                <div className={`${display.className} font-medium`} style={{ fontSize: "clamp(18px, 2.2vw, 28px)", lineHeight: 1.4, color: "rgba(242,242,238,0.9)" }}>{c.v}</div>
              </div>
            </Fade>
          ))}
          <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }} />

          {/* certs */}
          <div className="mt-20">
            <Fade><h3 className={`${display.className} font-bold mb-8`} style={{ fontSize: "clamp(22px, 3vw, 38px)" }}>Certifications</h3></Fade>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certs.map((c, i) => (
                <Fade key={c.name} delay={i * 0.04}>
                  <div className="p-6 h-full rounded-xl flex flex-col justify-between gap-6" style={{ background: BG, border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className={`${display.className} font-medium leading-snug`}>{c.name}</div>
                    <div className="flex items-end justify-between">
                      <span className={`${mono.className} text-[11px] uppercase tracking-wide`} style={{ color: MUTED }}>{c.org} · {c.year}</span>
                      {c.href && <a href={c.href} target="_blank" rel="noopener noreferrer" data-cursor className={`${mono.className} text-[11px] uppercase`} style={{ color: ACCENT }}>Verify ↗</a>}
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-10 py-28 md:py-40 max-w-[1500px] mx-auto">
        <span className={`${mono.className} text-[11px] uppercase tracking-wider`} style={{ color: MUTED }}>Contact</span>
        <h2 className={`${display.className} font-extrabold mt-6`} style={{ fontSize: "clamp(48px, 13vw, 200px)", lineHeight: 0.86, letterSpacing: "-0.04em" }}>
          <Line>Let&apos;s</Line>
          <Line delay={0.1}>build<span style={{ color: ACCENT }}>.</span></Line>
        </h2>

        <Fade delay={0.2}>
          <a href="mailto:aaryasharadvaidya.10@gmail.com" data-cursor
             className="inline-block mt-10 text-xl md:text-4xl font-medium hover:opacity-60 transition-opacity"
             style={{ textDecoration: "underline", textUnderlineOffset: "10px", textDecorationColor: ACCENT }}>
            aaryasharadvaidya.10@gmail.com
          </a>
        </Fade>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          {[
            { l: "LinkedIn", v: "aarya-vaidya", h: "https://linkedin.com/in/aarya-vaidya-013227211" },
            { l: "GitHub",   v: "rajaaryan779", h: "https://github.com/rajaaryan779" },
            { l: "Fiverr",   v: "rajaaryan779", h: "https://www.fiverr.com/rajaaryan779" },
            { l: "Phone",    v: "+91 81499 04590", h: "tel:+918149904590" },
          ].map((s) => (
            <a key={s.l} href={s.h} target={s.h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" data-cursor className="group">
              <div className={`${mono.className} text-[11px] uppercase tracking-wider mb-1`} style={{ color: MUTED }}>{s.l}</div>
              <div className={`${display.className} font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all`}>{s.v} <span style={{ color: ACCENT }}>↗</span></div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-10" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className={`${mono.className} max-w-[1500px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-wider`} style={{ color: MUTED }}>
          <span>© 2026 Aarya Vaidya</span>
          <span>Pune, India — <Clock /></span>
          <span>Next.js · Framer Motion</span>
        </div>
      </footer>
    </main>
  );
}
