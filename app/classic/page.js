"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { Instrument_Serif, Space_Grotesk, JetBrains_Mono } from "next/font/google";

/* ── Type system ───────────────────────────────────────── */
const serif = Instrument_Serif({ weight: "400", subsets: ["latin"], style: ["normal", "italic"], display: "swap" });
const sans  = Space_Grotesk({ subsets: ["latin"], display: "swap" });
const mono  = JetBrains_Mono({ subsets: ["latin"], display: "swap" });

/* ── Palette ───────────────────────────────────────────── */
const PAPER  = "#EAE5DA";
const INK    = "#17150F";
const MUTED  = "#8A8475";
const ACCENT = "#FF3B00";

/* ── Data ──────────────────────────────────────────────── */
const work = [
  {
    no: "01", title: "Jenna", year: "2026",
    blurb: "An AI financial coaching app I build at OyeLabs. I added a deterministic fast-path that answers read-only money questions with no LLM call, dropping response time from roughly 1,950ms to 115ms, about 17x. A fabrication guard then checks every dollar figure against real transaction data before it reaches you, so the assistant never invents a balance.",
    stack: ["FastAPI", "Amazon Bedrock", "PostgreSQL"], tag: "~17x faster reads",
    href: "https://github.com/rajaaryan779",
  },
  {
    no: "02", title: "WhatsCRM", year: "2026",
    blurb: "A WhatsApp CRM I build at OyeLabs. Every incoming message flows through OpenAI embeddings into a pgvector store, then surfaces the most relevant past context alongside an AI-drafted reply. Idempotent upserts hold it at zero message loss even under bursts of concurrent webhooks.",
    stack: ["FastAPI", "pgvector", "OpenAI"], tag: "Zero message loss",
    href: "https://github.com/rajaaryan779",
  },
  {
    no: "03", title: "Market Expansion Engine (MEE)", year: "2026",
    blurb: "A multi-tenant B2B lead-gen and AI outreach platform I build at OyeLabs. Converted it from single-tenant to a real SaaS: composite (owner_id, place_id) keys and Row-Level Security across all 8 tables, so tenant isolation is enforced by Postgres, not hopeful application code. A thin Next.js control plane hands scrape/crawl/LLM work to n8n, with a live dashboard over Supabase Realtime.",
    stack: ["Next.js", "Supabase RLS", "n8n", "Groq"], tag: "RLS across 8 tables",
    href: "https://github.com/rajaaryan779/MEE",
  },
  {
    no: "04", title: "Alianza Security Audit", year: "2026",
    blurb: "An independent security audit and agentic QA engagement on a 39-module NestJS/PostgreSQL real-estate SaaS. I surfaced 185 findings (66 entities, 56 REST controllers audited) and built an autonomous QA Testing Agent that boots the real app against a live database, writes Jest/Supertest integration tests, and reproduced 4 critical vulnerabilities as fail-first regression tests verified red-to-green.",
    stack: ["NestJS", "PostgreSQL", "Jest/Supertest"], tag: "185 findings, 4 verified",
    href: "https://github.com/rajaaryan779",
  },
  {
    no: "05", title: "Ultron", year: "2026",
    blurb: "Mission control for a crew of AI agents. An orchestrator plans each goal, specialist agents (research, writer, developer, librarian) do the work, and a person approves the plan. The Agentic City dashboard shows one building per agent with live status, history and chat. Text and voice chat with on-machine transcription, Telegram access, a task board and a searchable results library.",
    stack: ["Python", "Hermes agents", "Ollama", "Telegram"], tag: "Multi-agent mission control",
    href: "https://github.com/rajaaryan779",
  },
  {
    no: "06", title: "AI Receptionist", year: "2026",
    blurb: "A voice and text booking agent for a restaurant demo. Vapi takes the call, n8n runs the workflow, and Groq tool calling checks availability, creates and cancels reservations, and finds other venues through OpenStreetMap. Every request ends in a booking, a phone number or a taken message. The whole stack runs at $0 per month.",
    stack: ["Vapi", "n8n", "Groq"], tag: "Voice booking agent",
    href: "https://github.com/rajaaryan779",
  },
  {
    no: "07", title: "Ai-Prashashan", year: "2026",
    blurb: "A Marathi-language Android app for Maharashtra government employees, with a retrieval-grounded AI assistant over 440+ official Government Resolutions. It answers strictly from the retrieved GR text and cites the source PDF, and refuses rather than fabricates when nothing supports the question. I reverse-engineered the state GR portal to bulk-download 534 GRs and OCR'd them with Tesseract.",
    stack: ["Kotlin", "Jetpack Compose", "Firebase"], tag: "534 GRs, grounded answers",
    href: "https://github.com/rajaaryan779/Ai-Prashashan",
  },
  {
    no: "08", title: "AutoStream Agent", year: "2026",
    blurb: "A social-to-lead qualification agent built for ServiceHive: a 4-node LangGraph state machine that detects intent, collects details, extracts the lead, and responds, with keyword-grounded retrieval over a local knowledge base and structured, typed output.",
    stack: ["LangGraph", "Gemini", "Python"], tag: "ServiceHive",
    href: "https://github.com/rajaaryan779/autostream_agent",
  },
  {
    no: "09", title: "AEO Diagnostic Tool", year: "2026",
    blurb: "A concurrent engine that queries three LLMs at once to score how visible a product is inside AI search, and returns a 0 to 100 grade with fixes. Built it for the Pixii.ai founding-engineer application; it put me in the top 25.",
    stack: ["FastAPI", "Gemini 2.5", "OpenRouter"], tag: "Top 25 at Pixii.ai",
    href: "https://github.com/rajaaryan779/aeo-diagnostic",
  },
  {
    no: "10", title: "Grid07", year: "2026",
    blurb: "A three-phase AI system: a FAISS persona router, a LangGraph content engine with JSON-enforced output, and a RAG layer hardened against prompt injection. The kind of thing that breaks in production if you cut corners, so I didn't.",
    stack: ["LangGraph", "FAISS", "Groq"], tag: "Adversarial-hardened RAG",
    href: "https://github.com/rajaaryan779",
  },
  {
    no: "11", title: "DreamHome", year: "2025",
    blurb: "A full-stack real-estate platform with interactive maps and JWT auth. Caching the token validation cut auth latency from 15ms to under 1ms, a 93% drop. Small detail, big difference at scale.",
    stack: ["FastAPI", "Next.js", "PostgreSQL"], tag: "<1ms auth",
    href: "https://github.com/rajaaryan779/Real-Estate-software",
  },
  {
    no: "12", title: "AI Automation Suite", year: "2026",
    blurb: "19 production n8n workflows: RAG pipelines (Google Drive to Pinecone to Gemini), multi-agent bots with per-user memory namespacing, WhatsApp & Telegram automations, and Whisper voice transcription. Plumbing that quietly saves people hours every day.",
    stack: ["n8n", "Pinecone", "Gemini"], tag: "19 live workflows",
    href: "https://github.com/rajaaryan779/n8n-workflows",
  },
  {
    no: "13", title: "Binance Futures Trading Bot", year: "2026",
    blurb: "A testnet order CLI built for PrimetradeAI with HMAC-SHA256 signed REST calls, input validation, structured logging, and modular market/limit order execution.",
    stack: ["Python", "Binance API", "REST"], tag: "PrimetradeAI",
    href: "https://github.com/rajaaryan779/trading_bot",
  },
  {
    no: "14", title: "Rlook", year: "2026",
    blurb: "An AI virtual try-on running fully in-browser, with real-time 3D body segmentation and clothes overlay using WebGL and body-pose tracking, no native app or plugin. Still in development.",
    stack: ["Next.js 15", "Three.js", "MediaPipe"], tag: "In development",
    href: "https://github.com/rajaaryan779",
  },
];

const stack = [
  { group: "AI / LLMs",   items: ["LangChain", "LangGraph", "RAG", "Grounded Generation", "Claude", "Gemini", "Groq LLaMA", "FAISS", "Pinecone", "pgvector", "Sentence-Transformers", "Amazon Bedrock"] },
  { group: "Backend",     items: ["FastAPI", "Flask", "PostgreSQL", "SQLAlchemy", "Alembic", "REST", "JWT", "asyncio"] },
  { group: "Mobile",      items: ["Kotlin", "Jetpack Compose", "Firebase", "Firestore"] },
  { group: "Automation",  items: ["n8n", "WhatsApp API", "Telegram API", "Webhooks", "Supabase", "Cloudflare R2"] },
  { group: "Security",    items: ["Security audits", "IDOR / mass-assignment testing", "Row-Level Security", "Burp Suite", "OWASP Juice Shop"] },
  { group: "Languages",   items: ["Python", "TypeScript", "JavaScript", "Kotlin", "SQL"] },
  { group: "Workflow",    items: ["Cursor", "Claude Code", "Git", "GitHub Actions", "Vercel", "Docker", "AWS"] },
  { group: "DevOps (coursework)", items: ["Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins"] },
];

const certs = [
  { name: "Connect and Protect: Networks and Network Security", org: "Google · Coursera", year: "2026", href: "https://coursera.org/verify/9F4V0Y41V98N" },
  { name: "Play It Safe: Manage Security Risks", org: "Google · Coursera", year: "2026", href: "https://coursera.org/verify/BZQGDISOU8UX" },
  { name: "Foundations of Cybersecurity", org: "Google · Coursera", year: "2025", href: "https://coursera.org/verify/MGIHIZWCAA54" },
  { name: "Claude with Amazon Bedrock", org: "Anthropic", year: "2026", href: "https://verify.skilljar.com/c/mi62wwe5n6hi" },
  { name: "Develop Generative AI Applications: Get Started", org: "IBM · Coursera", year: "2026", href: "https://coursera.org/verify/KTAVNVHE8H6H" },
  { name: "AI Automation: Build LLM Apps & AI-Agents with n8n & APIs", org: "Udemy · 14.5 hours", year: "2026", href: "https://ude.my/UC-a4b3ffef-4132-4c9f-8844-925c734229cd" },
  { name: "Python & Gen AI Basics", org: "Udemy · 17 hours", year: "2026", href: "https://ude.my/UC-aeb9daa5-fc8d-4cc5-8d90-ed7952a161c7" },
  { name: "DevOps Mastery Specialization (Git, Jenkins, Docker, Kubernetes, Ansible, Terraform, Python)", org: "KodeKloud · Coursera", year: "2026", href: null },
  { name: "Red Hat OpenStack Administration I (CL110)", org: "Red Hat", year: "2026", href: "https://credly.com/badges/3115833a-4a07-4cf9-ac22-855f007a5914" },
  { name: "Django Web Framework", org: "Meta · Coursera", year: "2025", href: "https://coursera.org/verify/2Z1HXMQV496N" },
  { name: "Building REST APIs with Flask and Python", org: "Udemy · 9.5 hours", year: "2025", href: "https://ude.my/UC-e954de43-f9ab-4971-bf19-522511a1fbaf" },
  { name: "PCU InnovateX: 2nd Prize", org: "Pimpri Chinchwad University", year: "2025", href: null },
];
const moreCerts = "Also completed: Python (University of Michigan), Data Visualization with R (IBM) and Tableau, Java (IIT Bombay Spoken Tutorial), Deep Learning CNN image classification, C and C++.";

const journey = [
  { year: "2026", role: "AI Engineering Intern", org: "OyeLabs Technologies", note: "Jenna, WhatsCRM, MEE, Ultron & security audit" },
  { year: "2025", role: "AI Intern", org: "Elevate Labs", note: "LSTM stock-price forecasting" },
  { year: "2024", role: "B.Tech CSE (AI/ML)", org: "Pimpri Chinchwad University", note: "Final year · 2nd prize, PCU InnovateX" },
  { year: "2021", role: "Diploma in AI/ML", org: "K.K. Wagh Polytechnic", note: "Where it started" },
];

/* ── Helpers ───────────────────────────────────────────── */
function Reveal({ children, delay = 0, y = 26, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
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
    const tick = () =>
      setT(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit", minute: "2-digit", second: "2-digit",
          timeZone: "Asia/Kolkata", hour12: false,
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{t} IST</span>;
}

function Cursor() {
  const [mounted, setMounted] = useState(false);
  const [hover, setHover] = useState(false);
  const mx = useMotionValue(-100), my = useMotionValue(-100);
  const rx = useSpring(mx, { stiffness: 200, damping: 20, mass: 0.4 });
  const ry = useSpring(my, { stiffness: 200, damping: 20, mass: 0.4 });
  const dx = useMotionValue(-100), dy = useMotionValue(-100);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
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
        <motion.div
          animate={{ width: hover ? 56 : 28, height: hover ? 56 : 28, opacity: hover ? 1 : 0.6 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          style={{ border: `1px solid ${ACCENT}` }}
          className="rounded-full -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
      <motion.div style={{ x: dx, y: dy, background: ACCENT }} className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
    </>
  );
}

function WorkRow({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      tabIndex={0}
      data-cursor
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onClick={() => { if (window.matchMedia("(pointer: coarse)").matches) setOpen((o) => !o); }}
      className="group block border-t outline-none"
      style={{ borderColor: "rgba(23,21,15,0.14)" }}
    >
      <div className="relative py-7 md:py-8 px-1 md:px-4 overflow-hidden">
        <motion.div
          aria-hidden
          initial={false}
          animate={{ scaleY: open ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ background: ACCENT, originY: 1 }}
          className="absolute left-0 top-0 bottom-0 w-full -z-0 origin-bottom"
        />
        <motion.div className="relative z-10 flex items-baseline gap-5 md:gap-10"
             animate={{ color: open ? PAPER : INK }}
             transition={{ duration: 0.3 }}>
          <motion.span className={`${mono.className} text-xs md:text-sm pt-2`} animate={{ color: open ? PAPER : MUTED }} transition={{ duration: 0.3 }}>
            {item.no}
          </motion.span>
          <div className="flex-1">
            <div className="flex items-baseline justify-between gap-4">
              <motion.h3
                animate={{ x: open ? 16 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`${serif.className} leading-none`}
                style={{ fontSize: "clamp(34px, 6vw, 78px)" }}
              >
                {item.title}
              </motion.h3>
              <motion.span className={`${mono.className} text-xs md:text-sm hidden sm:block text-right whitespace-nowrap`} animate={{ color: open ? PAPER : MUTED }} transition={{ duration: 0.3 }}>
                {item.tag} · {item.year}
              </motion.span>
            </div>
            <motion.div className={`${mono.className} text-[11px] mt-2 sm:hidden`} animate={{ color: open ? PAPER : MUTED }} transition={{ duration: 0.3 }}>
              {item.tag} · {item.year}
            </motion.div>
            <motion.div
              initial={false}
              animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-5 grid md:grid-cols-[1fr_auto] gap-5 items-end" style={{ maxWidth: 920 }}>
                <p className={`${sans.className} text-sm md:text-base leading-relaxed`} style={{ color: "rgba(234,229,218,0.9)" }}>
                  {item.blurb}
                </p>
                <div className="flex flex-col items-start md:items-end gap-2">
                  <div className="flex flex-wrap gap-2">
                    {item.stack.map((s) => (
                      <span key={s} className={`${mono.className} text-[11px] px-2.5 py-1 rounded-full`}
                            style={{ border: "1px solid rgba(234,229,218,0.4)", color: PAPER }}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                     className={`${mono.className} text-[11px] flex items-center gap-1.5 underline underline-offset-4`} style={{ color: PAPER }}>
                    View on GitHub <span aria-hidden>↗</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ── Page ──────────────────────────────────────────────── */
export default function Home() {
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 240, damping: 30 });

  useEffect(() => {
    document.body.style.backgroundColor = PAPER;
    document.documentElement.style.backgroundColor = PAPER;
    return () => {
      document.body.style.backgroundColor = "";
      document.documentElement.style.backgroundColor = "";
    };
  }, []);

  const heroRef = useRef(null);
  const { scrollYProgress: heroP } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroP, [0, 1], [0, 120]);

  return (
    <main
      className={sans.className}
      style={{ background: PAPER, color: INK, minHeight: "100vh", cursor: "none" }}
    >
      <Cursor />

      <div
        aria-hidden
        className="fixed inset-0 z-[9997] pointer-events-none opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <motion.div style={{ scaleX: bar, background: ACCENT }} className="fixed top-0 left-0 right-0 h-[2px] z-[9998] origin-left" />

      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between text-white">
          <a href="#top" className={`${mono.className} text-xs tracking-wider uppercase`}>Aarya Vaidya</a>
          <nav className={`${mono.className} hidden md:flex items-center gap-7 text-xs tracking-wider uppercase`}>
            <a href="#work" className="hover:opacity-60 transition-opacity">Work</a>
            <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
            <a href="#stack" className="hover:opacity-60 transition-opacity">Stack</a>
            <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
          </nav>
          <div className={`${mono.className} text-xs tracking-wider hidden sm:block`}><Clock /></div>
        </div>
      </header>

      <section id="top" ref={heroRef} className="relative min-h-screen flex flex-col justify-between px-6 md:px-10 pt-28 pb-10 max-w-[1400px] mx-auto">
        <motion.div style={{ y: heroY }} className="flex-1 flex flex-col justify-center">
          <Reveal delay={0.05}>
            <div className={`${mono.className} flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] md:text-xs uppercase tracking-[0.18em] mb-10`} style={{ color: MUTED }}>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: ACCENT }} />
                Open to internships &amp; graduate roles
              </span>
              <span>AI / ML Engineer · Security</span>
              <span>Pune, India · Open to relocate anywhere</span>
              <span>Est. 2021</span>
            </div>
          </Reveal>

          <h1 className={`${serif.className} font-normal`} style={{ fontSize: "clamp(52px, 11vw, 168px)", lineHeight: 0.92, letterSpacing: "-0.02em" }}>
            <Reveal delay={0.1}><span className="block">I build AI</span></Reveal>
            <Reveal delay={0.2}>
              <span className="block">
                that actually{" "}
                <span style={{ color: ACCENT }} className="italic">ships.</span>
              </span>
            </Reveal>
          </h1>

          <Reveal delay={0.35}>
            <p className={`${sans.className} mt-10 max-w-xl text-base md:text-lg leading-relaxed`} style={{ color: "rgba(23,21,15,0.72)" }}>
              I&apos;m Aarya, a final-year B.Tech (AI/ML) student who builds LLM systems
              that run in production, and secures them. RAG, multi-agent automation,
              Postgres row-level security, security audits. Currently an AI Engineering Intern at{" "}
              <span style={{ color: INK }} className="font-medium">OyeLabs</span>; graduating May 2027.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#work" data-cursor className={`${mono.className} text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-300 hover:opacity-90`} style={{ background: INK, color: PAPER }}>
                See the work →
              </a>
              <a href="/Aarya_Resume.pdf" download data-cursor className={`${mono.className} text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-300`} style={{ border: `1px solid ${INK}`, color: INK }}>
                Résumé ↓
              </a>
            </div>
          </Reveal>
        </motion.div>

        <div className="relative overflow-hidden border-t pt-4" style={{ borderColor: "rgba(23,21,15,0.14)" }}>
          <div className={`${mono.className} flex gap-8 whitespace-nowrap animate-marquee text-xs uppercase tracking-[0.15em]`} style={{ color: MUTED }}>
            {[...Array(2)].flatMap((_, k) =>
              ["LangChain", "n8n", "FAISS", "Claude", "Gemini", "LangGraph", "Pinecone", "RAG", "FastAPI", "Supabase", "Amazon Bedrock", "Groq LLaMA"].map((t) => (
                <span key={`${k}-${t}`} className="flex items-center gap-8">
                  {t} <span style={{ color: ACCENT }}>✦</span>
                </span>
              ))
            )}
          </div>
        </div>
      </section>

      <section id="work" className="px-6 md:px-10 py-24 md:py-32 max-w-[1400px] mx-auto">
        <Reveal>
          <div className="flex items-baseline justify-between mb-12 md:mb-16">
            <h2 className={`${serif.className}`} style={{ fontSize: "clamp(30px, 5vw, 60px)" }}>Selected work</h2>
            <span className={`${mono.className} text-xs uppercase tracking-wider`} style={{ color: MUTED }}>01 / Projects</span>
          </div>
        </Reveal>
        <div>
          {work.map((item) => <WorkRow key={item.no} item={item} />)}
          <div className="border-t" style={{ borderColor: "rgba(23,21,15,0.14)" }} />
        </div>
        <Reveal>
          <a href="https://github.com/rajaaryan779" target="_blank" rel="noopener noreferrer" data-cursor
             className={`${mono.className} inline-flex items-center gap-2 mt-10 text-xs uppercase tracking-wider hover:gap-3 transition-all`} style={{ color: INK }}>
            Everything on GitHub <span style={{ color: ACCENT }}>↗</span>
          </a>
        </Reveal>
      </section>

      <section id="about" className="px-6 md:px-10 py-24 md:py-32" style={{ background: INK, color: PAPER }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-baseline justify-between mb-14">
            <Reveal><h2 className={`${serif.className}`} style={{ fontSize: "clamp(30px, 5vw, 60px)" }}>About</h2></Reveal>
            <span className={`${mono.className} text-xs uppercase tracking-wider`} style={{ color: "rgba(234,229,218,0.5)" }}>02 / Who</span>
          </div>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16">
            <Reveal>
              <p className={`${serif.className}`} style={{ fontSize: "clamp(24px, 3.4vw, 44px)", lineHeight: 1.25 }}>
                I started with a diploma in AI/ML in 2021 and never stopped shipping. Today I build
                <span style={{ color: ACCENT }}> production-grade</span> AI (LLM pipelines, agent orchestration,
                RAG engines) that solves real problems for real businesses. I care about the boring parts:
                latency, reliability, the thing that breaks at 2am. That&apos;s what separates a demo from a product.
              </p>
              <p className={`${sans.className} mt-8 text-base leading-relaxed max-w-xl`} style={{ color: "rgba(234,229,218,0.7)" }}>
                I&apos;m looking for internships and graduate AI/ML or security roles, anywhere in the world.
                Available remotely now and full-time from mid-2027, open to relocation and visa sponsorship.
                If you&apos;re building something hard, I want in.
              </p>
            </Reveal>
            <div>
              {journey.map((j, i) => (
                <Reveal key={j.year} delay={i * 0.06}>
                  <div className="flex gap-5 py-5 border-b" style={{ borderColor: "rgba(234,229,218,0.14)" }}>
                    <span className={`${mono.className} text-sm pt-1`} style={{ color: ACCENT }}>{j.year}</span>
                    <div>
                      <div className={`${sans.className} font-medium`}>{j.role}</div>
                      <div className={`${sans.className} text-sm`} style={{ color: "rgba(234,229,218,0.6)" }}>{j.org}</div>
                      <div className={`${mono.className} text-[11px] mt-1`} style={{ color: "rgba(234,229,218,0.4)" }}>{j.note}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t" style={{ borderColor: "rgba(234,229,218,0.14)" }}>
            {[
              { n: "17x", l: "Latency cut (Jenna)" },
              { n: "12+", l: "Production projects" },
              { n: "19",  l: "Automation workflows" },
              { n: "20+", l: "Certifications" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 0.08}>
                <div className={`${serif.className}`} style={{ fontSize: "clamp(40px, 6vw, 84px)", lineHeight: 1 }}>{s.n}</div>
                <div className={`${mono.className} text-[11px] uppercase tracking-wider mt-2`} style={{ color: "rgba(234,229,218,0.5)" }}>{s.l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="px-6 md:px-10 py-24 md:py-32 max-w-[1400px] mx-auto">
        <div className="flex items-baseline justify-between mb-14">
          <Reveal><h2 className={`${serif.className}`} style={{ fontSize: "clamp(30px, 5vw, 60px)" }}>Toolkit</h2></Reveal>
          <span className={`${mono.className} text-xs uppercase tracking-wider`} style={{ color: MUTED }}>03 / Stack</span>
        </div>
        <div className="divide-y" style={{ borderColor: "rgba(23,21,15,0.14)" }}>
          {stack.map((row, i) => (
            <Reveal key={row.group} delay={i * 0.05}>
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-10 py-7 border-t" style={{ borderColor: "rgba(23,21,15,0.14)" }}>
                <div className={`${mono.className} text-xs uppercase tracking-wider pt-1`} style={{ color: MUTED }}>{row.group}</div>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {row.items.map((it) => (
                    <span key={it} className={`${serif.className}`} style={{ fontSize: "clamp(20px, 2.6vw, 34px)" }}>{it}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t" style={{ borderColor: "rgba(23,21,15,0.14)" }} />
        </div>
        <div className="mt-20">
          <Reveal>
            <div className="flex items-baseline justify-between mb-8">
              <h3 className={`${serif.className}`} style={{ fontSize: "clamp(22px, 3vw, 38px)" }}>Certifications</h3>
              <span className={`${mono.className} text-xs uppercase tracking-wider`} style={{ color: MUTED }}>04 / Proof</span>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(23,21,15,0.12)" }}>
            {certs.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.04}>
                <div className="p-6 h-full flex flex-col justify-between gap-6" style={{ background: PAPER }}>
                  <div className={`${sans.className} font-medium leading-snug`}>{c.name}</div>
                  <div className="flex items-end justify-between">
                    <div className={`${mono.className} text-[11px] uppercase tracking-wide`} style={{ color: MUTED }}>{c.org} · {c.year}</div>
                    {c.href && (
                      <a href={c.href} target="_blank" rel="noopener noreferrer" data-cursor className={`${mono.className} text-[11px] uppercase tracking-wide`} style={{ color: ACCENT }}>Verify ↗</a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className={`${sans.className} mt-6 text-sm`} style={{ color: MUTED }}>{moreCerts}</p>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="px-6 md:px-10 py-24 md:py-36" style={{ background: ACCENT, color: INK }}>
        <div className="max-w-[1400px] mx-auto">
          <span className={`${mono.className} text-xs uppercase tracking-wider`}>05 / Contact</span>
          <Reveal>
            <h2 className={`${serif.className} mt-6`} style={{ fontSize: "clamp(48px, 12vw, 180px)", lineHeight: 0.9, letterSpacing: "-0.02em" }}>
              Let&apos;s talk.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a href="mailto:aaryasharadvaidya.10@gmail.com" data-cursor
               className={`${sans.className} inline-block mt-8 text-xl md:text-3xl font-medium underline underline-offset-8 decoration-2 hover:opacity-70 transition-opacity`}>
              aaryasharadvaidya.10@gmail.com
            </a>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t" style={{ borderColor: "rgba(23,21,15,0.25)" }}>
            {[
              { l: "LinkedIn", v: "aarya-vaidya", h: "https://linkedin.com/in/aarya-vaidya-013227211" },
              { l: "GitHub",   v: "rajaaryan779", h: "https://github.com/rajaaryan779" },
              { l: "Fiverr",   v: "rajaaryan779", h: "https://www.fiverr.com/rajaaryan779" },
              { l: "Phone",    v: "+91 81499 04590", h: "tel:+918149904590" },
            ].map((s) => (
              <a key={s.l} href={s.h} target={s.h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" data-cursor className="group">
                <div className={`${mono.className} text-[11px] uppercase tracking-wider mb-1`} style={{ color: "rgba(23,21,15,0.6)" }}>{s.l}</div>
                <div className={`${sans.className} font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all`}>{s.v} <span>↗</span></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-10 py-10" style={{ background: INK, color: "rgba(234,229,218,0.5)" }}>
        <div className={`${mono.className} max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-wider`}>
          <span>© 2026 Aarya Vaidya</span>
          <span>Pune, India · <Clock /></span>
          <span>Built with Next.js · Framer Motion</span>
        </div>
      </footer>
    </main>
  );
}
