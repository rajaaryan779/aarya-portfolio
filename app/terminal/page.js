"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Archivo, JetBrains_Mono } from "next/font/google";

/* ── Type ──────────────────────────────────────────────── */
const display = Archivo({ subsets: ["latin"], weight: ["400", "600", "800", "900"], display: "swap" });
const mono    = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"], display: "swap" });

/* ── Palette ───────────────────────────────────────────── */
const BG     = "#E7E7E1";
const INK    = "#0A0A0A";
const ACCENT = "#1B1BFF";
const TERM   = "#0A0A0A";
const GREEN  = "#3DF07A";

/* ── Data ──────────────────────────────────────────────── */
const projects = [
  { id: "jenna",    name: "Jenna", desc: "Deterministic chat fast-path cutting p50 latency ~17x. Fabrication guard grounds every dollar figure.", stack: "FastAPI · Amazon Bedrock · PostgreSQL", href: "https://github.com/rajaaryan779" },
  { id: "mee",      name: "Market Expansion Engine", desc: "Multi-tenant B2B outreach SaaS. Row-Level Security across 8 tables.", stack: "Next.js · Supabase RLS · n8n", href: "https://github.com/rajaaryan779/MEE" },
  { id: "aiprash",  name: "Ai-Prashashan", desc: "Retrieval-grounded assistant over 440+ govt resolutions. Refuses rather than fabricates.", stack: "Kotlin · Jetpack Compose · Firebase", href: "https://github.com/rajaaryan779/Ai-Prashashan" },
  { id: "aeo",      name: "AEO Diagnostic Tool", desc: "3-LLM concurrent engine scoring AI-search visibility. Top 25 @ Pixii.ai.", stack: "FastAPI · Gemini · OpenRouter", href: "https://github.com/rajaaryan779/aeo-diagnostic" },
  { id: "grid07",   name: "Grid07", desc: "FAISS routing + LangGraph engine + injection-hardened RAG.", stack: "LangGraph · FAISS · Groq", href: "https://github.com/rajaaryan779" },
  { id: "suite",    name: "AI Automation Suite", desc: "19 production n8n workflows running for real businesses.", stack: "n8n · Pinecone · Gemini", href: "https://github.com/rajaaryan779/n8n-workflows" },
  { id: "dreamhome",name: "DreamHome", desc: "Full-stack real-estate platform. Auth latency 15ms → <1ms.", stack: "FastAPI · Next.js · PostgreSQL", href: "https://github.com/rajaaryan779/Real-Estate-software" },
  { id: "autostream",name: "AutoStream Agent", desc: "4-node LangGraph state machine for social-to-lead qualification (ServiceHive).", stack: "LangGraph · Gemini · Python", href: "https://github.com/rajaaryan779/autostream_agent" },
];

const stack = [
  ["AI / LLMs",   "LangChain · LangGraph · RAG · Grounded Generation · Claude · Gemini · Groq LLaMA · FAISS · Pinecone · Amazon Bedrock"],
  ["Backend",     "FastAPI · Flask · PostgreSQL · SQLAlchemy · REST · JWT · asyncio"],
  ["Mobile",      "Kotlin · Jetpack Compose · Firebase · Firestore"],
  ["Automation",  "n8n · WhatsApp API · Telegram API · Webhooks · Supabase · Cloudflare R2"],
  ["Languages",   "Python · TypeScript · JavaScript · Kotlin · SQL"],
  ["Workflow",    "Cursor · Claude Code · Git · GitHub Actions · Vercel · Docker"],
];

const journey = [
  ["2026", "AI Engineering Intern — OyeLabs Technologies"],
  ["2025", "AI Intern — Elevate Labs"],
  ["2024", "B.Tech CSE (AI/ML) — Pimpri Chinchwad University"],
  ["2021", "Diploma in AI/ML — K.K. Wagh Polytechnic"],
];

const certs = [
  ["Develop Generative AI Applications", "IBM · 2026", "https://coursera.org/verify/KTAVNVHE8H6H"],
  ["Claude with Amazon Bedrock", "Anthropic · 2026", "https://verify.skilljar.com/c/mi62wwe5n6hi"],
  ["Red Hat OpenStack Admin I", "Red Hat · 2026", "https://credly.com/badges/3115833a-4a07-4cf9-ac22-855f007a5914"],
  ["Foundations of Cybersecurity", "Google · 2025", "https://coursera.org/verify/MGIHIZWCAA54"],
  ["Django Web Framework", "Meta · 2025", "https://coursera.org/verify/2Z1HXMQV496N"],
  ["AI Automation w/ n8n, Deep Learning & CNN", "Udemy · 2025", null],
];

const socials = [
  ["EMAIL",    "aaryasharadvaidya.10@gmail.com", "mailto:aaryasharadvaidya.10@gmail.com"],
  ["LINKEDIN", "in/aarya-vaidya", "https://linkedin.com/in/aarya-vaidya-013227211"],
  ["GITHUB",   "rajaaryan779", "https://github.com/rajaaryan779"],
  ["FIVERR",   "fiverr.com/rajaaryan779", "https://www.fiverr.com/rajaaryan779"],
];

/* ── Command engine ────────────────────────────────────── */
function runCommand(cmd) {
  const c = cmd.trim().toLowerCase();
  if (!c) return [];
  switch (c) {
    case "help":
      return [
        "AVAILABLE COMMANDS:",
        "  whoami       who is aarya",
        "  about        short bio",
        "  projects     list selected work",
        "  stack        tech stack",
        "  experience   work + education history",
        "  certs        certifications",
        "  contact      get in touch",
        "  resume       download résumé (PDF)",
        "  clear        clear the screen",
        "",
        "TIP: click any command above to run it.",
      ];
    case "whoami":
      return ["aarya vaidya", "AI / ML Engineer — Pune, India", "Building production AI systems. Open to global roles + relocation."];
    case "about":
      return [
        "I build production-grade AI — LLM pipelines, multi-agent",
        "orchestration, RAG engines — that ship to real users.",
        "Currently at OyeLabs (WhatsCRM, Jenna). I care about latency,",
        "reliability, and the thing that breaks at 2am. Not just notebooks.",
      ];
    case "projects":
    case "ls":
      return projects.flatMap((p) => [`▸ ${p.name}`, `    ${p.desc}`, `    [${p.stack}]`, ""]);
    case "stack":
    case "skills":
      return stack.flatMap(([k, v]) => [`${k.toUpperCase()}:`, `  ${v}`, ""]);
    case "experience":
      return journey.map(([y, r]) => `${y}  ${r}`);
    case "certs":
      return certs.map(([n, o]) => `✓ ${n} — ${o}`);
    case "contact":
      return socials.map(([k, v]) => `${k.padEnd(9)} ${v}`);
    case "resume":
      return ["__RESUME__"];
    case "sudo":
    case "sudo su":
      return ["nice try. 😏 you don't have permission. (but i might — hire me)"];
    case "clear":
      return ["__CLEAR__"];
    default:
      return [`command not found: ${cmd}  —  type 'help'`];
  }
}

const QUICK = ["whoami", "projects", "stack", "experience", "certs", "contact", "resume"];

/* ── Terminal ──────────────────────────────────────────── */
function Terminal() {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState("");
  const [booted, setBooted] = useState(false);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  // boot sequence
  useEffect(() => {
    const boot = [
      { t: "sys", v: "aarya@portfolio:~$ ./init" },
      { t: "sys", v: "loading profile........ done" },
      { t: "out", v: "aarya vaidya" },
      { t: "out", v: "AI / ML Engineer — Pune, India" },
      { t: "out", v: "" },
      { t: "out", v: "type 'help' to explore, or click a command below ▾" },
    ];
    let i = 0;
    const id = setInterval(() => {
      const item = boot[i];
      if (item === undefined) { clearInterval(id); setBooted(true); return; }
      setLines((prev) => [...prev, item]);
      i++;
      if (i >= boot.length) { clearInterval(id); setBooted(true); }
    }, 320);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines]);

  const exec = (raw) => {
    const out = runCommand(raw);
    if (out[0] === "__CLEAR__") { setLines([]); return; }
    setLines((prev) => [...prev, { t: "in", v: raw }]);
    if (out[0] === "__RESUME__") {
      setLines((prev) => [...prev, { t: "out", v: "opening résumé… ↓ Aarya_Resume.pdf" }]);
      const a = document.createElement("a");
      a.href = "/Aarya_Resume.pdf"; a.download = "Aarya_Vaidya_Resume.pdf";
      document.body.appendChild(a); a.click(); a.remove();
      return;
    }
    setLines((prev) => [...prev, ...out.map((v) => ({ t: "out", v }))]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    exec(input);
    setInput("");
  };

  return (
    <div
      className={`${mono.className} text-sm`}
      style={{ background: TERM, color: "#E7E7E1", border: `2px solid ${INK}`, boxShadow: `8px 8px 0 ${INK}` }}
      onClick={() => inputRef.current?.focus()}
    >
      {/* title bar */}
      <div className="flex items-center gap-2 px-3 py-2" style={{ borderBottom: "1px solid #2a2a2a" }}>
        <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F56" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#27C93F" }} />
        <span className="ml-2 text-xs" style={{ color: "#777" }}>aarya@portfolio — bash</span>
      </div>

      {/* body */}
      <div ref={bodyRef} className="px-4 py-3 h-[300px] md:h-[340px] overflow-y-auto leading-relaxed" style={{ scrollbarWidth: "thin" }}>
        {lines.filter(Boolean).map((l, i) => (
          <div key={i} className="whitespace-pre-wrap break-words">
            {l.t === "in" && <span><span style={{ color: GREEN }}>aarya@portfolio</span>:<span style={{ color: "#6f9bff" }}>~</span>$ {l.v}</span>}
            {l.t === "sys" && <span style={{ color: "#888" }}>{l.v}</span>}
            {l.t === "out" && <span style={{ color: "#D7D7D1" }}>{l.v}</span>}
          </div>
        ))}

        {booted && (
          <form onSubmit={onSubmit} className="flex items-center gap-2 mt-1">
            <span><span style={{ color: GREEN }}>aarya@portfolio</span>:<span style={{ color: "#6f9bff" }}>~</span>$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
              spellCheck={false}
              className="flex-1 bg-transparent outline-none"
              style={{ color: "#E7E7E1", caretColor: GREEN }}
            />
          </form>
        )}
      </div>

      {/* quick commands */}
      <div className="flex flex-wrap gap-1.5 px-4 py-3" style={{ borderTop: "1px solid #2a2a2a" }}>
        {QUICK.map((q) => (
          <button
            key={q}
            onClick={() => exec(q)}
            className="text-xs px-2 py-1 transition-colors"
            style={{ border: "1px solid #333", color: "#9a9a9a" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = GREEN; e.currentTarget.style.color = TERM; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#9a9a9a"; }}
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Brutalist work cell (hover invert) ────────────────── */
function WorkCell({ p, n }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="block p-6 md:p-8 transition-colors duration-150"
      style={{ background: h ? INK : "transparent", color: h ? BG : INK, borderTop: `2px solid ${INK}` }}
    >
      <div className="flex items-start justify-between gap-4">
        <span className={`${mono.className} text-xs`}>[{String(n).padStart(2, "0")}]</span>
        <span className={`${mono.className} text-xs`} style={{ color: h ? GREEN : ACCENT }}>{h ? "OPEN ↗" : ""}</span>
      </div>
      <h3 className={`${display.className} font-black mt-3 uppercase`} style={{ fontSize: "clamp(28px, 4.5vw, 52px)", lineHeight: 0.95 }}>
        {p.name}
      </h3>
      <p className={`${mono.className} text-sm mt-3 max-w-2xl`} style={{ color: h ? "#bbb" : "#555" }}>{p.desc}</p>
      <p className={`${mono.className} text-xs mt-3 uppercase tracking-wide`} style={{ color: h ? GREEN : ACCENT }}>{p.stack}</p>
    </a>
  );
}

function Clock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const tick = () => setT(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Asia/Kolkata", hour12: false }).format(new Date()));
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, []);
  return <span>{t} IST</span>;
}

/* ── Page ──────────────────────────────────────────────── */
export default function TerminalSite() {
  const box = { border: `2px solid ${INK}` };

  return (
    <main className={mono.className} style={{ background: BG, color: INK, minHeight: "100vh" }}>
      {/* Header */}
      <header className="sticky top-0 z-50" style={{ background: BG, borderBottom: `2px solid ${INK}` }}>
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
          <a href="#top" className="text-sm font-bold tracking-tight">AARYA_VAIDYA.EXE</a>
          <nav className="hidden md:flex items-center gap-2 text-xs uppercase">
            {["work", "about", "stack", "contact"].map((s) => (
              <a key={s} href={`#${s}`} className="px-2 py-1 hover:underline">[{s}]</a>
            ))}
          </nav>
          <div className="text-xs flex items-center gap-2">
            <span className="w-2 h-2 rounded-full inline-block animate-pulse" style={{ background: GREEN }} />
            <span className="hidden sm:inline"><Clock /></span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="max-w-[1400px] mx-auto px-4 md:px-6 pt-10 md:pt-16 pb-12">
        {/* meta row */}
        <div className="grid grid-cols-2 md:grid-cols-4 text-xs uppercase" style={{ borderTop: `2px solid ${INK}`, borderBottom: `2px solid ${INK}` }}>
          {[["ROLE", "AI / ML Engineer"], ["LOCATION", "Pune, India"], ["STATUS", "Available"], ["EST.", "2021"]].map(([k, v], i) => (
            <div key={k} className="px-3 py-2" style={{ borderLeft: i === 0 ? "none" : `1px solid ${INK}` }}>
              <div style={{ color: "#888" }}>{k}</div>
              <div className="font-bold mt-0.5" style={{ color: i === 2 ? ACCENT : INK }}>{v}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-8 items-center">
          {/* left: big type */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`${display.className} font-black uppercase`}
              style={{ fontSize: "clamp(48px, 9vw, 124px)", lineHeight: 0.86, letterSpacing: "-0.03em" }}
            >
              I build AI<br />that <span style={{ color: ACCENT }}>ships</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm mt-6 max-w-md"
              style={{ color: "#444" }}
            >
              LLM pipelines, multi-agent automation, and RAG that survives production.
              Shipping Jenna, WhatsCRM & MEE at OyeLabs. Open to roles worldwide.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 mt-7 text-xs uppercase"
            >
              <a href="#work" className="px-5 py-3 font-bold" style={{ background: INK, color: BG }}>View work →</a>
              <a href="/Aarya_Resume.pdf" download className="px-5 py-3 font-bold" style={{ ...box }}>Résumé ↓</a>
            </motion.div>
          </div>

          {/* right: terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Terminal />
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden py-3" style={{ background: INK, color: BG, borderTop: `2px solid ${INK}`, borderBottom: `2px solid ${INK}` }}>
        <div className="flex gap-6 whitespace-nowrap animate-marquee text-xs uppercase tracking-widest">
          {[...Array(2)].flatMap((_, k) =>
            ["LangChain", "n8n", "FAISS", "Claude", "Gemini", "LangGraph", "Pinecone", "RAG", "FastAPI", "Supabase", "Bedrock", "Groq"].map((t) => (
              <span key={`${k}-${t}`} className="flex items-center gap-6">{t} <span style={{ color: GREEN }}>{"///"}</span></span>
            ))
          )}
        </div>
      </div>

      {/* Work */}
      <section id="work" className="max-w-[1400px] mx-auto px-4 md:px-6 py-16">
        <div className="flex items-end justify-between mb-2">
          <h2 className={`${display.className} font-black uppercase`} style={{ fontSize: "clamp(28px, 5vw, 56px)" }}>Selected_Work</h2>
          <span className="text-xs uppercase" style={{ color: "#888" }}>{"// 06 files"}</span>
        </div>
        <div style={{ borderBottom: `2px solid ${INK}` }}>
          {projects.map((p, i) => <WorkCell key={p.id} p={p} n={i + 1} />)}
        </div>
        <a href="https://github.com/rajaaryan779" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 text-xs uppercase hover:underline" style={{ color: ACCENT }}>
          $ git remote -v → github.com/rajaaryan779 ↗
        </a>
      </section>

      {/* About */}
      <section id="about" className="max-w-[1400px] mx-auto px-4 md:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="p-6 md:p-8" style={{ ...box, boxShadow: `8px 8px 0 ${INK}` }}>
            <div className="text-xs uppercase mb-4" style={{ color: "#888" }}>$ cat about.txt</div>
            <p className={`${display.className} font-bold`} style={{ fontSize: "clamp(20px, 2.6vw, 30px)", lineHeight: 1.3 }}>
              I started with a diploma in AI/ML in 2021 and never stopped shipping.
              Today I build <span style={{ color: ACCENT }}>production AI</span> that solves
              real problems — and I obsess over the boring parts that make it reliable.
            </p>
            <p className="text-sm mt-5" style={{ color: "#555" }}>
              Actively seeking full-time AI/ML roles globally. Open to relocation worldwide and visa sponsorship.
              If the problem is hard, I want in.
            </p>
          </div>
          <div style={box}>
            <div className="text-xs uppercase p-4" style={{ color: "#888", borderBottom: `2px solid ${INK}` }}>$ history --career</div>
            {journey.map(([y, r], i) => (
              <div key={y} className="flex gap-4 px-4 py-4" style={{ borderBottom: i < journey.length - 1 ? `1px solid ${INK}` : "none" }}>
                <span className="font-bold" style={{ color: ACCENT }}>{y}</span>
                <span className="text-sm">{r}</span>
              </div>
            ))}
          </div>
        </div>

        {/* numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-8" style={{ border: `2px solid ${INK}` }}>
          {[["17x", "RAG LATENCY CUT"], ["11+", "PROJECTS"], ["19", "WORKFLOWS"], ["5", "CERTS"]].map(([n, l], i) => (
            <div key={l} className="p-6 text-center" style={{ borderLeft: i === 0 ? "none" : `2px solid ${INK}` }}>
              <div className={`${display.className} font-black`} style={{ fontSize: "clamp(36px, 6vw, 72px)", lineHeight: 1 }}>{n}</div>
              <div className="text-xs uppercase mt-2" style={{ color: "#888" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="max-w-[1400px] mx-auto px-4 md:px-6 py-16">
        <h2 className={`${display.className} font-black uppercase mb-6`} style={{ fontSize: "clamp(28px, 5vw, 56px)" }}>Stack</h2>
        <div style={{ border: `2px solid ${INK}` }}>
          {stack.map(([k, v], i) => (
            <div key={k} className="grid md:grid-cols-[200px_1fr]" style={{ borderTop: i === 0 ? "none" : `2px solid ${INK}` }}>
              <div className="px-4 py-4 font-bold uppercase text-sm" style={{ background: INK, color: BG }}>{k}</div>
              <div className="px-4 py-4 text-sm" style={{ color: "#333" }}>{v}</div>
            </div>
          ))}
        </div>

        {/* certs */}
        <h3 className={`${display.className} font-black uppercase mt-12 mb-6`} style={{ fontSize: "clamp(22px, 3.4vw, 38px)" }}>Certifications</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ border: `2px solid ${INK}` }}>
          {certs.map(([n, o, href], i) => (
            <div key={n} className="p-5 flex flex-col justify-between gap-4" style={{ borderTop: i >= 3 ? `2px solid ${INK}` : (i >= 1 && i < 3 ? "none" : "none"), borderLeft: i % 3 === 0 ? "none" : `2px solid ${INK}` }}>
              <div className="text-sm font-bold leading-snug">{n}</div>
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: "#888" }}>{o}</span>
                {href && <a href={href} target="_blank" rel="noopener noreferrer" className="text-xs uppercase hover:underline" style={{ color: ACCENT }}>verify ↗</a>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-4 md:px-6 py-20" style={{ background: INK, color: BG, borderTop: `2px solid ${INK}` }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-xs uppercase mb-4" style={{ color: GREEN }}>$ ./contact.sh --hire</div>
          <h2 className={`${display.className} font-black uppercase`} style={{ fontSize: "clamp(48px, 12vw, 170px)", lineHeight: 0.86, letterSpacing: "-0.03em" }}>
            Let&apos;s<br />talk<span style={{ color: GREEN }}>_</span>
          </h2>

          <div className="grid sm:grid-cols-2 mt-12" style={{ border: `2px solid ${BG}` }}>
            {socials.map(([k, v, h], i) => (
              <a key={k} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                 className="group p-6 flex items-center justify-between transition-colors"
                 style={{ borderTop: i >= 2 ? `2px solid ${BG}` : "none", borderLeft: i % 2 === 1 ? `2px solid ${BG}` : "none" }}
                 onMouseEnter={(e) => { e.currentTarget.style.background = GREEN; e.currentTarget.style.color = INK; }}
                 onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = BG; }}>
                <div>
                  <div className="text-xs uppercase" style={{ color: "inherit", opacity: 0.6 }}>{k}</div>
                  <div className="font-bold mt-1">{v}</div>
                </div>
                <span className="text-xl">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-[1400px] mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs uppercase" style={{ color: "#666" }}>
        <span>© 2026 AARYA_VAIDYA</span>
        <span>PUNE, IN — <Clock /></span>
        <span>NEXT.JS // FRAMER-MOTION</span>
      </footer>
    </main>
  );
}
