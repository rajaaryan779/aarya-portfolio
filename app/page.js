"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion, useScroll, useSpring, useTransform, useMotionValue,
  useInView, animate, useAnimationFrame, useMotionTemplate,
} from "framer-motion";
import { Space_Grotesk, JetBrains_Mono, Instrument_Serif } from "next/font/google";

/* ── Fonts ───────────────────────────────────────────────
   Trionn uses Neue Haas Grotesk (display/body) + PP Editorial (serif numbers).
   Free stand-ins: Helvetica Neue/Arial stack for grotesk, Instrument Serif for numbers. */
const display = Space_Grotesk({ subsets: ["latin"], display: "swap" }); // grotesk UI
const serif  = Instrument_Serif({ weight: "400", subsets: ["latin"], style: ["normal", "italic"], display: "swap" });
const mono   = JetBrains_Mono({ subsets: ["latin"], display: "swap" });

/* ── Exact Trionn tokens ───────────────────────────────── */
const BG     = "#040508";   // near-black (slightly blue)
const SURFACE= "#131415";
const PAPER  = "#E6E4E2";   // warm off-white
const MUTED  = "#8A8780";
const ACCENT = "#DC0A00";   // true Trionn red
const LINE   = "rgba(230,228,226,0.14)";

/* ── Data ──────────────────────────────────────────────── */
const work = [
  { no: "01", title: "Jenna", tag: "AI financial coach", year: "2026", grad: ["#DC0A00", "#1a0604"],
    blurb: "AI financial coaching app at OyeLabs. A deterministic fast-path answers read-only money questions with no LLM call — ~1,950ms → 115ms (≈17x). A fabrication guard checks every figure against real transaction data.",
    stack: ["FastAPI", "Amazon Bedrock", "PostgreSQL"], href: "https://github.com/rajaaryan779" },
  { no: "02", title: "WhatsCRM", tag: "WhatsApp CRM", year: "2026", grad: ["#3B82F6", "#06121f"],
    blurb: "WhatsApp CRM at OyeLabs. Every message flows through OpenAI embeddings into pgvector, surfacing relevant context with an AI-drafted reply. Idempotent upserts hold zero message loss under concurrent webhook bursts.",
    stack: ["FastAPI", "pgvector", "OpenAI"], href: "https://github.com/rajaaryan779" },
  { no: "03", title: "Market Expansion Engine", tag: "B2B lead-gen SaaS", year: "2026", grad: ["#22D3EE", "#04181c"],
    blurb: "Multi-tenant lead-gen + AI outreach platform at OyeLabs. Rebuilt single-tenant → real SaaS with composite keys + Row-Level Security across 8 tables. Next.js control plane + live Supabase Realtime dashboard.",
    stack: ["Next.js", "Supabase RLS", "n8n", "Groq"], href: "https://github.com/rajaaryan779/MEE" },
  { no: "04", title: "Alianza Security Audit", tag: "Security & agentic QA", year: "2026", grad: ["#EF4444", "#1f0606"],
    blurb: "Security audit of a NestJS/PostgreSQL SaaS: 185 findings, including IDOR and mass-assignment flaws. Built an agentic QA harness that reproduces critical vulnerabilities as fail-first tests, so every fix is proven by a test that goes red then green.",
    stack: ["NestJS", "PostgreSQL", "Security testing", "Agentic QA"], href: "https://github.com/rajaaryan779" },
  { no: "05", title: "AEO Diagnostic Tool", tag: "Top-25 Pixii.ai", year: "2026", grad: ["#A855F7", "#160a1f"],
    blurb: "Queries three LLMs at once (Gemini 2.5 Flash, Qwen 3, Auto AI) to score product visibility in AI search — 0–100 grade with fixes. Built for Pixii.ai founding-engineer round; landed a top-25 shortlist.",
    stack: ["FastAPI", "Gemini 2.5", "OpenRouter"], href: "https://github.com/rajaaryan779/aeo-diagnostic" },
  { no: "06", title: "Grid07", tag: "Adversarial-hardened RAG", year: "2026", grad: ["#F59E0B", "#1f1404"],
    blurb: "Three-phase AI system: FAISS persona router, LangGraph content engine with JSON-enforced output, RAG layer hardened against prompt injection with a persona-lock header.",
    stack: ["LangGraph", "FAISS", "Groq"], href: "https://github.com/rajaaryan779" },
  { no: "07", title: "DreamHome", tag: "Full-stack real estate", year: "2025", grad: ["#10B981", "#041a13"],
    blurb: "Full-stack real-estate platform with interactive maps + JWT auth. Caching token validation cut auth latency 15ms → <1ms (93% drop). Alembic zero-downtime migrations.",
    stack: ["FastAPI", "Next.js", "PostgreSQL"], href: "https://github.com/rajaaryan779/Real-Estate-software" },
];

const facts = [
  { n: 12, suffix: "+", label: "Production AI projects" },
  { n: 19, suffix: "",  label: "Live automation workflows" },
  { n: 17, suffix: "x", label: "Latency cut on Jenna reads" },
  { n: 185, suffix: "", label: "Findings in a security audit" },
];

const serviceGroups = [
  { key: "A.I.", items: [
    ["AI & Intelligent Automation", "AI-powered solutions that enhance products, automate workflows, and unlock smarter digital experiences."],
    ["Applied AI Engineering", "LangGraph agents, grounded RAG, and LLM systems with latency, reliability, and guardrails done right."],
  ]},
  { key: "Design", items: [
    ["Product & Interface Design", "Thoughtful product design that captures attention, deepens engagement, and builds lasting loyalty."],
    ["Brand & Presence", "Sharp, credible portfolios and product sites that position a builder for the roles they want."],
  ]},
  { key: "Development", items: [
    ["Web & Full-Stack Development", "Custom web development with a product focus — FastAPI, Next.js, PostgreSQL, built to scale."],
    ["Automation & Integrations", "n8n workflows, WhatsApp/Telegram bots, and webhook plumbing that quietly removes repetitive work."],
  ]},
  { key: "Branding", items: [
    ["Systems & Story", "Coherent technical narrative and presence for engineers and AI products."],
    ["Credibility by craft", "Clarity-first positioning that makes hard work legible to the right people."],
  ]},
];

const clients = [
  { quote: "Aarya ships AI systems that actually run in production — the latency and reliability work is what separates a demo from a product. Rare at this stage.", name: "Founding Engineer", org: "Pixii.ai · Shortlist" },
  { quote: "Built our agentic QA harness that reproduced critical vulns as fail-first tests. Thorough, fast, security-minded.", name: "CTO", org: "Alianza" },
  { quote: "Turned a single-tenant script into a real multi-tenant SaaS with RLS across every table. Clean, measured execution.", name: "Tech Lead", org: "OyeLabs" },
  { quote: "The AEO tool he built for our founding-engineer round was sharper than most senior applicants' work. Top 25, deservedly.", name: "Hiring Panel", org: "Pixii.ai" },
];

const journey = [
  { year: "2026", role: "AI Engineering Intern", org: "OyeLabs Technologies", note: "Jenna · WhatsCRM · MEE · Security audit" },
  { year: "2026", role: "AI Agent Developer Intern", org: "ServiceHive", note: "AutoStream agentic workflow" },
  { year: "2025", role: "AI Intern", org: "Elevate Labs", note: "LSTM stock-price forecasting" },
  { year: "2024", role: "B.Tech CSE (AI/ML)", org: "Pimpri Chinchwad University", note: "Final year · 2nd prize PCU InnovateX" },
  { year: "2021", role: "Diploma in AI/ML", org: "K.K. Wagh Polytechnic", note: "Where it started" },
];

/* ── Counter (serif, Trionn .numbers) ─────────────────── */
function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.6, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, value]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function Reveal({ children, delay = 0, y = 28, className = "" }) {
  return (
    <motion.div initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>{children}</motion.div>
  );
}

/* ── Magnetic button (Trionn-style pull toward cursor) ── */
function Magnetic({ children, strength = 0.35 }) {
  const ref = useRef(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 }), sy = useSpring(y, { stiffness: 200, damping: 15 });
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => { x.set(0); y.set(0); };
  return (
    <motion.span ref={ref} style={{ x: sx, y: sy, display: "inline-block" }}
      onMouseMove={onMove} onMouseLeave={reset} data-cursor>
      {children}
    </motion.span>
  );
}

/* ── Hero "blast" — real particle explosion on hold ───── */
function Blast() {
  const [hold, setHold] = useState(false);
  const [burst, setBurst] = useState(0);
  const parts = Array.from({ length: 18 });
  const fire = () => { setBurst((b) => b + 1); };
  return (
    <span className="inline-flex items-center gap-2 select-none" style={{ color: MUTED }}>
      <span className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`}
        onMouseDown={() => { setHold(true); fire(); }} onMouseUp={() => setHold(false)} onMouseLeave={() => setHold(false)}
        onTouchStart={() => { setHold(true); fire(); }} onTouchEnd={() => setHold(false)} style={{ cursor: "none", position: "relative" }}>
        hold to{" "}
        <motion.span key={burst} animate={{ scale: hold ? 1.15 : 1, color: hold ? ACCENT : PAPER }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }} style={{ display: "inline-block", fontWeight: 700 }}>blast</motion.span>
        {/* particle burst */}
        {hold && (
          <span className="absolute left-1/2 top-1/2 pointer-events-none" style={{ width: 0, height: 0 }}>
            {parts.map((_, i) => {
              const ang = (i / parts.length) * Math.PI * 2;
              const dist = 40 + (i % 3) * 14;
              return (
                <motion.span key={i} initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{ x: Math.cos(ang) * dist, y: Math.sin(ang) * dist, opacity: 0, scale: 0.2 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  style={{ position: "absolute", width: 4, height: 4, borderRadius: "50%", background: i % 2 ? ACCENT : PAPER }} />
              );
            })}
          </span>
        )}
      </span>
      <span aria-hidden style={{ color: ACCENT }}>⚡</span>
      <span className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: MUTED }}>Dare to touch the lines.</span>
    </span>
  );
}

/* ── Work card with cursor-follow spotlight ────────────── */
function WorkCard({ item }) {
  const [hover, setHover] = useState(false);
  const mx = useMotionValue(50), my = useMotionValue(50);
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };
  const spot = useMotionTemplate`radial-gradient(220px circle at ${mx}% ${my}%, rgba(220,10,0,0.18), transparent 60%)`;
  return (
    <motion.a href={item.href} target="_blank" rel="noopener noreferrer" data-cursor
      onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)} onMouseMove={onMove}
      className="group block border-t pt-10 pb-12 relative" style={{ borderColor: LINE }}>
      <motion.div className="absolute inset-0 pointer-events-none" style={{ background: spot, opacity: hover ? 1 : 0, transition: "opacity .3s" }} />
      <div className="grid md:grid-cols-[1.05fr_1fr] gap-8 items-center relative">
        <div>
          <div className={`${mono.className} text-xs uppercase tracking-[0.15em] mb-3`} style={{ color: MUTED }}>{item.no} — {item.tag} · {item.year}</div>
          <h3 className={`${serif.className}`} style={{ fontSize: "clamp(34px, 5.5vw, 68px)", lineHeight: 0.95 }}>{item.title}</h3>
          <p className={`${display.className} mt-5 text-base leading-relaxed max-w-md`} style={{ color: "rgba(230,228,226,0.72)" }}>{item.blurb}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {item.stack.map((s) => (
              <span key={s} className={`${mono.className} text-[11px] px-2.5 py-1 rounded-full`} style={{ border: "1px solid rgba(230,228,226,0.3)", color: PAPER }}>{s}</span>
            ))}
          </div>
          <span className={`${mono.className} inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-wider`} style={{ color: ACCENT }}>Explore project ↗</span>
        </div>
        <motion.div className="relative aspect-[4/3] rounded-lg overflow-hidden"
          animate={{ scale: hover ? 1.03 : 1 }} transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }}
          style={{ background: `linear-gradient(135deg, ${item.grad[0]}, ${item.grad[1]})` }}>
          <div className={`${serif.className} absolute inset-0 flex items-center justify-center text-center px-6`}
            style={{ fontSize: "clamp(26px,4vw,50px)", color: "rgba(255,255,255,0.92)" }}>{item.title}</div>
          <motion.div className="absolute inset-0" animate={{ scale: hover ? 1.1 : 1 }} transition={{ duration: 0.6 }}
            style={{ background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.18), transparent 55%)" }} />
        </motion.div>
      </div>
    </motion.a>
  );
}

/* ── Cursor ────────────────────────────────────────────── */
function Cursor() {
  const [mounted, setMounted] = useState(false);
  const [hover, setHover] = useState(false);
  const mx = useMotionValue(-100), my = useMotionValue(-100);
  const rx = useSpring(mx, { stiffness: 200, damping: 20, mass: 0.4 });
  const ry = useSpring(my, { stiffness: 200, damping: 20, mass: 0.4 });
  const dx = useMotionValue(-100), dy = useMotionValue(-100);
  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;
    setMounted(true);
    const move = (e) => { mx.set(e.clientX); my.set(e.clientY); dx.set(e.clientX); dy.set(e.clientY); };
    const over = (e) => setHover(!!e.target.closest("a, button, [data-cursor]"));
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, [mx, my, dx, dy]);
  if (!mounted) return null;
  return (
    <>
      <motion.div style={{ x: rx, y: ry }} className="fixed top-0 left-0 z-[9999] pointer-events-none">
        <motion.div animate={{ width: hover ? 56 : 26, height: hover ? 56 : 26, opacity: hover ? 1 : 0.6 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }} style={{ border: `1px solid ${ACCENT}` }}
          className="rounded-full -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
      <motion.div style={{ x: dx, y: dy, background: ACCENT }} className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
    </>
  );
}

/* ── Page ──────────────────────────────────────────────── */
export default function Home() {
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 240, damping: 30 });
  const heroRef = useRef(null);
  const { scrollYProgress: heroP } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroP, [0, 1], [0, 140]);
  const heroOpacity = useTransform(heroP, [0, 0.8], [1, 0]);

  useEffect(() => {
    document.body.style.backgroundColor = BG;
    document.documentElement.style.backgroundColor = BG;
    return () => { document.body.style.backgroundColor = ""; document.documentElement.style.backgroundColor = ""; };
  }, []);

  return (
    <main className={display.className} style={{ background: BG, color: PAPER, minHeight: "100vh", cursor: "none" }}>
      <Cursor />
      <motion.div style={{ scaleX: bar, background: ACCENT }} className="fixed top-0 left-0 right-0 h-[2px] z-[9998] origin-left" />

      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between text-white">
          <a href="#top" className={`${mono.className} text-xs tracking-wider uppercase`}>Aarya Vaidya</a>
          <nav className={`${mono.className} hidden md:flex items-center gap-7 text-xs tracking-wider uppercase`}>
            <a href="#work" className="hover:opacity-60 transition-opacity">Work</a>
            <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
            <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
            <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
          </nav>
          <a href="mailto:aaryasharadvaidya.10@gmail.com" className={`${mono.className} text-xs tracking-wider hidden sm:block hover:opacity-60`}>Let&apos;s talk ↗</a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" ref={heroRef} className="relative min-h-screen flex flex-col justify-between px-6 md:px-10 pt-28 pb-10 max-w-[1400px] mx-auto">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="flex-1 flex flex-col justify-center">
          <Reveal delay={0.05}>
            <div className={`${mono.className} flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] md:text-xs uppercase tracking-[0.18em] mb-10`} style={{ color: MUTED }}>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: ACCENT }} /> Open to internships &amp; graduate roles</span>
              <span>AI / ML Engineer · Security</span>
              <span>Pune, India · Seeking roles in Australia · Open to relocation &amp; visa sponsorship</span>
            </div>
          </Reveal>
          <h1 style={{ "font-family": "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 500, fontSize: "clamp(5rem, 9.164vw, 10rem)", lineHeight: 0.672, letterSpacing: "-0.04em" }}>
            <span className="block overflow-hidden"><motion.span className="block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16,1,0.3,1], delay: 0.1 }}>Designed to</motion.span></span>
            <span className="block overflow-hidden"><motion.span className="block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16,1,0.3,1], delay: 0.25 }}>mean <span style={{ color: ACCENT }}>something.</span></motion.span></span>
          </h1>
          <Reveal delay={0.35}>
            <p className={`${display.className} mt-10 max-w-xl text-base md:text-lg leading-relaxed`} style={{ color: "rgba(230,228,226,0.72)" }}>
              I&apos;m Aarya, a final-year B.Tech (AI/ML) student who builds LLM systems that run in production and secures them. RAG, multi-agent automation, Postgres row-level security, security audits. Currently an AI Engineering Intern at <span style={{ color: PAPER }} className="font-medium">OyeLabs</span>; graduating May 2027.
            </p>
          </Reveal>
          <Reveal delay={0.45}><div className="mt-9"><Blast /></div></Reveal>
          <Reveal delay={0.55}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Magnetic><a href="#work" data-cursor className={`${mono.className} text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-300 hover:opacity-90`} style={{ background: ACCENT, color: "#040508" }}>See the work →</a></Magnetic>
              <Magnetic><a href="/Aarya_Resume.pdf" download data-cursor className={`${mono.className} text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-300`} style={{ border: `1px solid ${PAPER}`, color: PAPER }}>Résumé ↓</a></Magnetic>
            </div>
          </Reveal>
        </motion.div>
        <div className="relative overflow-hidden border-t pt-4" style={{ borderColor: LINE }}>
          <div className={`${mono.className} flex gap-8 whitespace-nowrap animate-marquee text-xs uppercase tracking-[0.15em]`} style={{ color: MUTED }}>
            {[...Array(2)].flatMap((_, k) => ["LangChain","n8n","FAISS","Claude","Gemini","LangGraph","Pinecone","RAG","FastAPI","Supabase","Amazon Bedrock","Groq LLaMA"].map((t) => (
              <span key={`${k}-${t}`} className="flex items-center gap-8">{t} <span style={{ color: ACCENT }}>✦</span></span>
            )))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 md:px-10 py-24 md:py-32 max-w-[1400px] mx-auto">
        <div className="flex items-baseline justify-between mb-12">
          <Reveal><h2 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 500, fontSize: "clamp(2.5rem,6.283vw,5.938rem)", lineHeight: 0.9, letterSpacing: "-0.03em" }}>About</h2></Reveal>
          <span className={`${mono.className} text-xs uppercase tracking-wider`} style={{ color: MUTED }}>From idea to outcome</span>
        </div>
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16">
          <Reveal>
            <p style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 400, fontSize: "clamp(1.5rem,3.4vw,2.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              I&apos;m an AI/ML engineer crafting production-grade systems through strategy, models, and code, with a security mindset.
              <span style={{ color: ACCENT }}> Clarity first, craft always,</span> built to scale.
            </p>
            <p className={`${display.className} mt-8 text-base leading-relaxed max-w-xl`} style={{ color: "rgba(230,228,226,0.7)" }}>
              My aim is to make AI feel dependable: systems that are intuitive, purposeful, and safe for the people who ship with them. I&apos;m looking for internships and graduate AI/ML or security roles, especially in Australia. Available remotely now and full-time from mid-2027, open to relocation and visa sponsorship.
            </p>
          </Reveal>
          <div>
            {journey.map((j, i) => (
              <Reveal key={j.year} delay={i * 0.06}>
                <div className="flex gap-5 py-5 border-b" style={{ borderColor: LINE }}>
                  <span className={`${mono.className} text-sm pt-1`} style={{ color: ACCENT }}>{j.year}</span>
                  <div>
                    <div className={`${display.className} font-medium`}>{j.role}</div>
                    <div className={`${display.className} text-sm`} style={{ color: "rgba(230,228,226,0.6)" }}>{j.org}</div>
                    <div className={`${mono.className} text-[11px] mt-1`} style={{ color: "rgba(230,228,226,0.4)" }}>{j.note}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* KEY FACTS — serif numbers (Trionn .numbers) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t" style={{ borderColor: LINE }}>
          {facts.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className={`${serif.className}`} style={{ fontSize: "clamp(3.5rem,6.349vw,6rem)", lineHeight: 0.9, color: PAPER }}>
                <Counter value={s.n} suffix={s.suffix} />
              </div>
              <div className={`${mono.className} text-[11px] uppercase tracking-wider mt-2`} style={{ color: MUTED }}>{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="px-6 md:px-10 py-24 md:py-32 max-w-[1400px] mx-auto">
        <Reveal>
          <div className="flex items-baseline justify-between mb-12 md:mb-16">
            <h2 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 500, fontSize: "clamp(2.5rem,6.283vw,5.938rem)", lineHeight: 0.9, letterSpacing: "-0.03em" }}>Selected work &amp; explorations</h2>
            <span className={`${mono.className} text-xs uppercase tracking-wider`} style={{ color: MUTED }}>Projects</span>
          </div>
        </Reveal>
        <div>
          {work.map((item) => <WorkCard key={item.no} item={item} />)}
          <div className="border-t" style={{ borderColor: LINE }} />
        </div>
        <Reveal>
          <a href="https://github.com/rajaaryan779" target="_blank" rel="noopener noreferrer" data-cursor
            className={`${mono.className} inline-flex items-center gap-2 mt-10 text-xs uppercase tracking-wider hover:gap-3 transition-all`} style={{ color: ACCENT }}>
            Discover the complete collection ↗
          </a>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 md:px-10 py-24 md:py-32" style={{ background: SURFACE }}>
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className={`${mono.className} text-xs uppercase tracking-wider mb-3`} style={{ color: ACCENT }}>Our services</div>
            <h2 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 500, fontSize: "clamp(2.5rem,6.614vw,6.25rem)", lineHeight: 0.9, letterSpacing: "-0.03em" }}>
              Design with intent.<br/>Built to work.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-x-16 mt-16">
            {serviceGroups.map((g, gi) => (
              <div key={g.key}>
                <Reveal><div className={`${mono.className} text-xs uppercase tracking-wider mb-6`} style={{ color: ACCENT }}>{g.key}</div></Reveal>
                <div className="divide-y" style={{ borderColor: LINE }}>
                  {g.items.map((it, i) => (
                    <Reveal key={it[0]} delay={i * 0.04}>
                      <div className="py-7 border-t" style={{ borderColor: LINE }}>
                        <h3 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 500, fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>{it[0]}</h3>
                        <p className={`${display.className} mt-3 text-sm md:text-base leading-relaxed`} style={{ color: "rgba(230,228,226,0.7)" }}>{it[1]}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT STORIES */}
      <section className="px-6 md:px-10 py-24 md:py-32 max-w-[1400px] mx-auto">
        <Reveal>
          <div className="flex items-baseline justify-between mb-14">
            <h2 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 500, fontSize: "clamp(2.5rem,6.283vw,5.938rem)", lineHeight: 0.9, letterSpacing: "-0.03em" }}>Client stories</h2>
            <span className={`${mono.className} text-xs uppercase tracking-wider`} style={{ color: MUTED }}>Great work is built through partnership</span>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-px" style={{ background: LINE }}>
          {clients.map((c, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="p-8 h-full flex flex-col justify-between gap-6" style={{ background: BG }}>
                <p style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 400, fontSize: "clamp(1.25rem,2.4vw,1.875rem)", lineHeight: 1.2, letterSpacing: "-0.01em" }}>“{c.quote}”</p>
                <div className={`${mono.className} text-[11px] uppercase tracking-wider`} style={{ color: MUTED }}>{c.name} · {c.org}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DESIGN IN MOTION */}
      <section className="px-6 md:px-10 py-24 md:py-32" style={{ background: SURFACE }}>
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className={`${mono.className} text-xs uppercase tracking-wider mb-6`} style={{ color: ACCENT }}>Design in motion</div>
            <h2 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 500, fontSize: "clamp(2.5rem,6.614vw,6.25rem)", lineHeight: 0.9, letterSpacing: "-0.03em" }}>
              Exploring ideas through<br/>daily design practice.
            </h2>
            <p className={`${display.className} mt-6 max-w-xl text-base leading-relaxed`} style={{ color: "rgba(230,228,226,0.7)" }}>
              Concepts, experiments, and interface motion shared openly as part of the build process — the same craft behind every production system.
            </p>
            <a href="https://github.com/rajaaryan779" target="_blank" rel="noopener noreferrer" data-cursor
              className={`${mono.className} inline-flex items-center gap-2 mt-8 text-xs uppercase tracking-wider`} style={{ color: ACCENT }}>View on GitHub ↗</a>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-10 py-24 md:py-36" style={{ background: ACCENT, color: "#040508" }}>
        <div className="max-w-[1400px] mx-auto">
          <span className={`${mono.className} text-xs uppercase tracking-wider`}>Contact</span>
          <Reveal><h2 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 500, fontSize: "clamp(48px,12vw,180px)", lineHeight: 0.9, letterSpacing: "-0.03em" }}>Let&apos;s talk.</h2></Reveal>
          <Reveal delay={0.1}>
            <a href="mailto:aaryasharadvaidya.10@gmail.com" data-cursor
              className={`${display.className} inline-block mt-8 text-xl md:text-3xl font-medium underline underline-offset-8 decoration-2 hover:opacity-70 transition-opacity`}>
              aaryasharadvaidya.10@gmail.com
            </a>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t" style={{ borderColor: "rgba(4,5,8,0.25)" }}>
            {[
              { l: "LinkedIn", v: "aarya-vaidya", h: "https://linkedin.com/in/aarya-vaidya-013227211" },
              { l: "GitHub",   v: "rajaaryan779", h: "https://github.com/rajaaryan779" },
              { l: "Location", v: "Pune, India",  h: "#" },
              { l: "Phone",    v: "+91 81499 04590", h: "tel:+918149904590" },
            ].map((s) => (
              <a key={s.l} href={s.h} target={s.h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" data-cursor className="group">
                <div className={`${mono.className} text-[11px] uppercase tracking-wider mb-1`} style={{ color: "rgba(4,5,8,0.6)" }}>{s.l}</div>
                <div className={`${display.className} font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all`}>{s.v} <span>↗</span></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-10 py-10" style={{ background: BG, color: "rgba(230,228,226,0.5)" }}>
        <div className={`${mono.className} max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-wider`}>
          <span>© 2026 Aarya Vaidya</span>
          <span>Pune, India</span>
          <span>Built with Next.js · Framer Motion</span>
        </div>
      </footer>
    </main>
  );
}
