"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useDragControls } from "framer-motion";
import { Inter } from "next/font/google";

const ui = Inter({ subsets: ["latin"], display: "swap" });

const projects = [
  { t: "Jenna", d: "Deterministic chat fast-path, ~17x latency cut. Fabrication guard grounds every dollar figure.", s: "FastAPI · Amazon Bedrock · PostgreSQL" },
  { t: "Market Expansion Engine", d: "Multi-tenant SaaS. Row-Level Security across 8 tables.", s: "Next.js · Supabase RLS · n8n" },
  { t: "Ai-Prashashan", d: "Retrieval-grounded assistant over 440+ govt resolutions. Refuses vs. fabricates.", s: "Kotlin · Jetpack Compose · Firebase" },
  { t: "AEO Diagnostic Tool", d: "3-LLM concurrent AI-search scorer. Top 25 @ Pixii.ai.", s: "FastAPI · Gemini · OpenRouter" },
  { t: "Grid07", d: "FAISS routing + LangGraph + injection-hardened RAG.", s: "LangGraph · FAISS · Groq" },
  { t: "AI Automation Suite", d: "19 production n8n workflows, live for real businesses.", s: "n8n · Pinecone · Gemini" },
  { t: "DreamHome", d: "Full-stack realty. Auth latency 15ms → under 1ms.", s: "FastAPI · Next.js · PostgreSQL" },
  { t: "AutoStream Agent", d: "4-node LangGraph lead-qualification agent for ServiceHive.", s: "LangGraph · Gemini · Python" },
];
const stack = [
  ["AI / LLMs", "LangChain, LangGraph, RAG, Grounded Generation, Claude, Gemini, Groq LLaMA, FAISS, Pinecone, Bedrock"],
  ["Backend", "FastAPI, Flask, PostgreSQL, SQLAlchemy, REST, JWT"],
  ["Mobile", "Kotlin, Jetpack Compose, Firebase"],
  ["Automation", "n8n, WhatsApp API, Telegram API, Webhooks, Supabase"],
  ["Languages & Tools", "Python, TypeScript, Kotlin, SQL, Cursor, Claude Code, Git, Vercel, Docker"],
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
  ["LinkedIn", "in/aarya-vaidya", "https://linkedin.com/in/aarya-vaidya-013227211"],
  ["GitHub", "rajaaryan779", "https://github.com/rajaaryan779"],
  ["Fiverr", "fiverr.com/rajaaryan779", "https://www.fiverr.com/rajaaryan779"],
  ["Email", "aaryasharadvaidya.10@gmail.com", "mailto:aaryasharadvaidya.10@gmail.com"],
];

function AboutApp() {
  return (
    <div className="space-y-3 text-sm text-slate-700">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 grid place-items-center text-white text-2xl font-black">AV</div>
        <div>
          <div className="font-bold text-slate-900 text-base">Aarya Vaidya</div>
          <div className="text-slate-500">AI / ML Engineer — Pune, India</div>
        </div>
      </div>
      <p>I build production AI — LLM pipelines, multi-agent automation, and RAG that survives the real world. Diploma in AI/ML in 2021, never stopped shipping.</p>
      <p>Currently at <b>OyeLabs</b> building Jenna, WhatsCRM, and MEE. Seeking full-time AI/ML roles globally — open to relocation and visa sponsorship.</p>
      <div className="grid grid-cols-4 gap-2 pt-2">
        {[["17x", "Latency"], ["11+", "Projects"], ["19", "Flows"], ["5", "Certs"]].map(([n, l]) => (
          <div key={l} className="rounded-xl bg-slate-100 p-2 text-center"><div className="font-black text-slate-900">{n}</div><div className="text-[11px] text-slate-500">{l}</div></div>
        ))}
      </div>
    </div>
  );
}
function ProjectsApp() {
  return (
    <div className="space-y-2">
      {projects.map((p) => (
        <a key={p.t} href="https://github.com/rajaaryan779" target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-slate-200 p-3 hover:bg-slate-50 transition-colors">
          <div className="flex justify-between"><span className="font-semibold text-slate-900 text-sm">{p.t}</span><span className="text-violet-500">↗</span></div>
          <p className="text-xs text-slate-500 mt-1">{p.d}</p>
          <p className="text-[11px] text-violet-600 mt-1.5">{p.s}</p>
        </a>
      ))}
    </div>
  );
}
function SkillsApp() {
  return (
    <div className="space-y-3 text-sm">
      {stack.map(([k, v]) => (<div key={k}><div className="font-semibold text-slate-900">{k}</div><div className="text-slate-500 text-xs mt-0.5">{v}</div></div>))}
    </div>
  );
}
function CertsApp() {
  return (
    <div className="space-y-2 text-sm">
      {certs.map(([n, o, h]) => (
        <div key={n} className="rounded-xl border border-slate-200 p-3 flex justify-between items-center gap-3">
          <div><div className="font-medium text-slate-900 text-[13px]">{n}</div><div className="text-[11px] text-slate-500">{o}</div></div>
          {h && <a href={h} target="_blank" rel="noopener noreferrer" className="text-[11px] text-violet-600 shrink-0">Verify ↗</a>}
        </div>
      ))}
    </div>
  );
}
function ContactApp() {
  return (
    <div className="space-y-2">
      {socials.map(([l, v, h]) => (
        <a key={l} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex justify-between rounded-xl border border-slate-200 p-3 hover:bg-slate-50 transition-colors text-sm">
          <span className="text-slate-500">{l}</span><span className="font-medium text-slate-900">{v} ↗</span>
        </a>
      ))}
    </div>
  );
}
function ResumeApp() {
  return (
    <div className="text-center py-6 space-y-4">
      <div className="text-5xl">📄</div>
      <div className="text-sm text-slate-600">Aarya_Vaidya_Resume.pdf</div>
      <a href="/Aarya_Resume.pdf" download className="inline-block px-5 py-2.5 rounded-full bg-violet-600 text-white text-sm font-semibold">Download ↓</a>
    </div>
  );
}

const APPS = {
  about:    { title: "About Me", icon: "👤", w: 380, render: AboutApp },
  projects: { title: "Projects", icon: "📁", w: 420, render: ProjectsApp },
  skills:   { title: "Skills", icon: "🧠", w: 380, render: SkillsApp },
  certs:    { title: "Certifications", icon: "🏆", w: 400, render: CertsApp },
  contact:  { title: "Contact", icon: "✉️", w: 380, render: ContactApp },
  resume:   { title: "Résumé", icon: "📄", w: 320, render: ResumeApp },
};
const START = { about: { x: 60, y: 60 }, projects: { x: 470, y: 90 }, skills: { x: 120, y: 200 }, certs: { x: 520, y: 230 }, contact: { x: 200, y: 320 }, resume: { x: 600, y: 380 } };

function Window({ id, z, onFocus, onClose, pos }) {
  const controls = useDragControls();
  const app = APPS[id];
  const Body = app.render;
  return (
    <motion.div
      drag dragControls={controls} dragListener={false} dragMomentum={false}
      initial={{ opacity: 0, scale: 0.9, x: pos.x, y: pos.y }}
      animate={{ opacity: 1, scale: 1 }}
      onMouseDown={onFocus}
      style={{ position: "absolute", zIndex: z, width: app.w, maxWidth: "92vw" }}
      className="rounded-xl overflow-hidden shadow-2xl border border-black/10 bg-white/90 backdrop-blur-xl"
    >
      <div onPointerDown={(e) => controls.start(e)} className="flex items-center gap-2 px-3 h-9 bg-slate-100/80 border-b border-black/5 cursor-grab active:cursor-grabbing select-none">
        <button onClick={onClose} className="w-3 h-3 rounded-full bg-[#FF5F56]" aria-label="close" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        <span className="ml-2 text-xs font-medium text-slate-500">{app.icon} {app.title}</span>
      </div>
      <div className="p-4 max-h-[60vh] overflow-y-auto">
        <Body />
      </div>
    </motion.div>
  );
}

export default function OS() {
  const [open, setOpen] = useState(["about", "projects"]); // z-order, last = front
  const [clock, setClock] = useState("");
  const deskRef = useRef(null);

  useEffect(() => {
    const tick = () => setClock(new Intl.DateTimeFormat("en-US", { weekday: "short", hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata", hour12: true }).format(new Date()));
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, []);

  const focus = (id) => setOpen((o) => [...o.filter((x) => x !== id), id]);
  const openApp = (id) => setOpen((o) => (o.includes(id) ? [...o.filter((x) => x !== id), id] : [...o, id]));
  const closeApp = (id) => setOpen((o) => o.filter((x) => x !== id));

  return (
    <main ref={deskRef} className={ui.className} style={{ height: "100vh", overflow: "hidden", position: "relative", background: "linear-gradient(135deg,#5b21b6,#1e3a8a 45%,#0891b2)" }}>
      {/* wallpaper glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.18), transparent 40%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.25), transparent 50%)" }} />

      {/* menu bar */}
      <div className="absolute top-0 left-0 right-0 h-7 px-4 flex items-center justify-between text-white text-[13px] bg-black/20 backdrop-blur-xl z-[1000]">
        <div className="flex items-center gap-4 font-medium"><span className="font-bold">✦ Aarya OS</span><span className="opacity-80 hidden sm:inline">Portfolio</span><span className="opacity-60 hidden md:inline">Window</span></div>
        <div className="flex items-center gap-3"><span className="opacity-80 hidden sm:inline">🔋 100%</span><span>{clock}</span></div>
      </div>

      {/* desktop hint */}
      <div className="absolute top-12 right-5 text-white/70 text-xs text-right hidden md:block">
        <p>Welcome to Aarya OS 👋</p>
        <p className="opacity-70">Drag windows · click the dock below</p>
      </div>

      {/* windows */}
      {open.map((id, i) => (
        <Window key={id} id={id} z={100 + i} pos={START[id] || { x: 100 + i * 30, y: 80 + i * 30 }} onFocus={() => focus(id)} onClose={() => closeApp(id)} />
      ))}

      {/* dock */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-[1000]">
        <div className="flex items-end gap-2 px-3 py-2 rounded-2xl bg-white/20 backdrop-blur-2xl border border-white/30 shadow-2xl">
          {Object.entries(APPS).map(([id, app]) => (
            <motion.button key={id} onClick={() => openApp(id)} whileHover={{ scale: 1.3, y: -8 }} whileTap={{ scale: 0.95 }}
              className="relative w-12 h-12 rounded-xl bg-white/85 grid place-items-center text-2xl shadow-lg" title={app.title}>
              {app.icon}
              {open.includes(id) && <span className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-white" />}
            </motion.button>
          ))}
        </div>
      </div>
    </main>
  );
}
