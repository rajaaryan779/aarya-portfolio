"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Manrope } from "next/font/google";

/* ── Type ──────────────────────────────────────────────── */
const sans = Manrope({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], display: "swap" });

/* ── Palette (Apple-grade) ─────────────────────────────── */
const PAPER  = "#FBFBFD";
const CARD   = "#F5F5F7";
const INK     = "#1D1D1F";
const GREY     = "#6E6E73";
const BLUE     = "#0071E3";

/* ── Data ──────────────────────────────────────────────── */
const work = [
  { title: "Jenna", tag: "AI Fintech · OyeLabs", desc: "Deterministic chat fast-path cutting p50 latency ~17x, plus a fabrication guard grounding every dollar figure against real transaction data.", stack: "FastAPI · Amazon Bedrock · PostgreSQL", href: "https://github.com/rajaaryan779" },
  { title: "Market Expansion Engine", tag: "Multi-Tenant SaaS", desc: "B2B lead-gen & AI outreach platform. Row-Level Security across 8 tables — tenant isolation enforced by Postgres, not application code.", stack: "Next.js · Supabase RLS · n8n", href: "https://github.com/rajaaryan779/MEE" },
  { title: "Ai-Prashashan", tag: "Grounded RAG · Android", desc: "Retrieval-grounded Gemini assistant over 440+ govt resolutions. Answers only from source text, refuses when unsupported.", stack: "Kotlin · Jetpack Compose · Firebase", href: "https://github.com/rajaaryan779/Ai-Prashashan" },
  { title: "AEO Diagnostic Tool", tag: "LLM Tooling", desc: "A concurrent engine that queries three LLMs at once to score how visible a product is inside AI search. Top 25 at the Pixii.ai founding-engineer search.", stack: "FastAPI · Gemini · OpenRouter", href: "https://github.com/rajaaryan779/aeo-diagnostic" },
  { title: "Grid07", tag: "RAG Engine", desc: "Three-phase system — FAISS persona routing, a LangGraph content engine, and a RAG layer hardened against prompt injection.", stack: "LangGraph · FAISS · Groq", href: "https://github.com/rajaaryan779" },
  { title: "AI Automation Suite", tag: "Workflow Engineering", desc: "19 production n8n workflows running for real businesses — RAG pipelines, agent bots, voice transcription, lead generation.", stack: "n8n · Pinecone · Gemini", href: "https://github.com/rajaaryan779/n8n-workflows" },
  { title: "DreamHome", tag: "Full-Stack", desc: "A real-estate platform with interactive maps and JWT auth. Token caching cut auth latency from 15ms to under 1ms.", stack: "FastAPI · Next.js · PostgreSQL", href: "https://github.com/rajaaryan779/Real-Estate-software" },
  { title: "AutoStream Agent", tag: "AI Agent · ServiceHive", desc: "A 4-node LangGraph state machine for social-to-lead qualification, with keyword-grounded retrieval and structured extraction.", stack: "LangGraph · Gemini · Python", href: "https://github.com/rajaaryan779/autostream_agent" },
];

const capabilities = [
  { k: "AI / LLMs", v: "LangChain · LangGraph · RAG · Grounded Generation · Claude · Gemini · Groq LLaMA · FAISS · Pinecone · Amazon Bedrock" },
  { k: "Backend", v: "FastAPI · Flask · PostgreSQL · SQLAlchemy · REST · JWT · asyncio" },
  { k: "Mobile", v: "Kotlin · Jetpack Compose · Firebase · Firestore" },
  { k: "Automation", v: "n8n · WhatsApp API · Telegram API · Webhooks · Supabase · Cloudflare R2" },
  { k: "Languages & Tools", v: "Python · TypeScript · Kotlin · SQL · Cursor · Claude Code · Git · Vercel · Docker" },
];

const certs = [
  { name: "Develop Generative AI Applications", org: "IBM · Coursera · 2026", href: "https://coursera.org/verify/KTAVNVHE8H6H" },
  { name: "Claude with Amazon Bedrock", org: "Anthropic · 2026", href: "https://verify.skilljar.com/c/mi62wwe5n6hi" },
  { name: "Red Hat OpenStack Administration I", org: "Red Hat · 2026", href: "https://credly.com/badges/3115833a-4a07-4cf9-ac22-855f007a5914" },
  { name: "Foundations of Cybersecurity", org: "Google · 2025", href: "https://coursera.org/verify/MGIHIZWCAA54" },
  { name: "Django Web Framework", org: "Meta · 2025", href: "https://coursera.org/verify/2Z1HXMQV496N" },
  { name: "AI Automation w/ n8n, Deep Learning & CNN", org: "Udemy · 2025", href: null },
];

/* ── Helpers ───────────────────────────────────────────── */
function Up({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Page ──────────────────────────────────────────────── */
export default function Minimal() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <main className={sans.className} style={{ background: PAPER, color: INK, minHeight: "100vh" }}>
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl" style={{ background: "rgba(251,251,253,0.8)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="max-w-[1100px] mx-auto px-6 h-12 flex items-center justify-between">
          <a href="#top" className="font-semibold text-sm tracking-tight">Aarya Vaidya</a>
          <nav className="hidden md:flex items-center gap-8 text-[13px]" style={{ color: GREY }}>
            <a href="#work" className="hover:text-black transition-colors">Work</a>
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#skills" className="hover:text-black transition-colors">Skills</a>
          </nav>
          <a href="#contact" className="text-[13px] font-medium px-4 py-1.5 rounded-full text-white transition-opacity hover:opacity-90" style={{ background: BLUE }}>
            Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" ref={heroRef} className="relative min-h-[100svh] flex items-center justify-center px-6 text-center">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity, y: heroY }} className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-base md:text-lg font-medium mb-6" style={{ color: BLUE }}
          >
            AI / ML Engineer — Pune, India
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-semibold tracking-tight"
            style={{ fontSize: "clamp(44px, 8vw, 104px)", lineHeight: 1.02, letterSpacing: "-0.03em" }}
          >
            AI that solves
            <br />
            <span style={{ background: `linear-gradient(120deg, ${BLUE}, #9333EA)`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              real problems.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-snug" style={{ color: GREY }}
          >
            I build production LLM pipelines, multi-agent automation, and RAG systems
            that real businesses run on. Not demos — products.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex items-center justify-center gap-5"
          >
            <a href="#work" className="text-[15px] font-medium px-6 py-3 rounded-full text-white transition-opacity hover:opacity-90" style={{ background: BLUE }}>
              See my work
            </a>
            <a href="/Aarya_Resume.pdf" download className="text-[15px] font-medium transition-colors hover:underline" style={{ color: BLUE }}>
              Download résumé ↓
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }} style={{ color: GREY }}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Statement */}
      <section id="about" className="px-6 py-28 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <Up>
            <h2 className="font-semibold tracking-tight" style={{ fontSize: "clamp(30px, 5vw, 60px)", lineHeight: 1.12, letterSpacing: "-0.02em" }}>
              I obsess over the part that
              <br className="hidden md:block" /> comes after the demo.
            </h2>
          </Up>
          <Up delay={0.1}>
            <p className="mt-8 text-lg md:text-xl font-light leading-relaxed" style={{ color: GREY }}>
              Latency, reliability, the thing that breaks at 2am. I started with a diploma
              in AI/ML in 2021 and never stopped shipping. Today I&apos;m at OyeLabs building
              Jenna, WhatsCRM and MEE — and I&apos;m looking for full-time AI/ML roles globally,
              open to relocation worldwide.
            </p>
          </Up>
        </div>
      </section>

      {/* Bento grid */}
      <section className="px-6 pb-28 md:pb-36">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {/* big */}
          <Up className="col-span-2 row-span-2">
            <div className="h-full rounded-3xl p-8 flex flex-col justify-between" style={{ background: INK, color: PAPER }}>
              <div className="text-sm font-medium" style={{ color: "rgba(251,251,253,0.55)" }}>In production</div>
              <div>
                <div className="font-semibold tracking-tight" style={{ fontSize: "clamp(56px, 9vw, 110px)", lineHeight: 1 }}>19</div>
                <div className="text-lg md:text-xl mt-2" style={{ color: "rgba(251,251,253,0.7)" }}>automation workflows running for real businesses.</div>
              </div>
            </div>
          </Up>
          <Up delay={0.05}>
            <div className="h-full rounded-3xl p-6 flex flex-col justify-between" style={{ background: CARD }}>
              <div className="text-sm font-medium" style={{ color: GREY }}>Latency cut</div>
              <div className="font-semibold tracking-tight" style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 1, color: BLUE }}>17x</div>
            </div>
          </Up>
          <Up delay={0.1}>
            <div className="h-full rounded-3xl p-6 flex flex-col justify-between" style={{ background: CARD }}>
              <div className="text-sm font-medium" style={{ color: GREY }}>Projects shipped</div>
              <div className="font-semibold tracking-tight" style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 1 }}>11+</div>
            </div>
          </Up>
          <Up delay={0.15} className="col-span-2">
            <div className="h-full rounded-3xl p-6 flex flex-col justify-center" style={{ background: CARD }}>
              <div className="text-sm font-medium mb-1" style={{ color: GREY }}>Currently</div>
              <div className="text-lg md:text-xl font-medium leading-snug">AI Engineering Intern at <span style={{ color: BLUE }}>OyeLabs</span> — building Jenna, WhatsCRM & MEE.</div>
            </div>
          </Up>
          <Up delay={0.2}>
            <div className="h-full rounded-3xl p-6 flex flex-col justify-between" style={{ background: CARD }}>
              <div className="text-sm font-medium" style={{ color: GREY }}>Recognition</div>
              <div className="text-2xl font-semibold leading-tight">Top 25<div className="text-sm font-normal mt-1" style={{ color: GREY }}>Pixii.ai eng. search</div></div>
            </div>
          </Up>
          <Up delay={0.25}>
            <div className="h-full rounded-3xl p-6 flex flex-col justify-between" style={{ background: CARD }}>
              <div className="text-sm font-medium" style={{ color: GREY }}>Certifications</div>
              <div className="font-semibold tracking-tight" style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 1 }}>12</div>
            </div>
          </Up>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-6 py-24 md:py-32" style={{ background: CARD }}>
        <div className="max-w-[1100px] mx-auto">
          <Up>
            <div className="text-center mb-16">
              <h2 className="font-semibold tracking-tight" style={{ fontSize: "clamp(34px, 5.5vw, 64px)", letterSpacing: "-0.02em" }}>Selected work</h2>
              <p className="mt-4 text-lg font-light" style={{ color: GREY }}>Production AI systems, used by real people.</p>
            </div>
          </Up>

          <div className="grid md:grid-cols-2 gap-4">
            {work.map((p, i) => (
              <Up key={p.title} delay={(i % 2) * 0.08}>
                <motion.a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="group block h-full rounded-3xl p-8 transition-shadow duration-300 hover:shadow-xl"
                  style={{ background: PAPER }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[13px] font-medium px-3 py-1 rounded-full" style={{ background: CARD, color: GREY }}>{p.tag}</span>
                    <span className="text-xl transition-transform duration-300 group-hover:translate-x-1" style={{ color: BLUE }}>↗</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed" style={{ color: GREY }}>{p.desc}</p>
                  <p className="mt-5 text-[13px] font-medium" style={{ color: INK }}>{p.stack}</p>
                </motion.a>
              </Up>
            ))}
          </div>

          <Up>
            <div className="text-center mt-12">
              <a href="https://github.com/rajaaryan779" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium hover:underline" style={{ color: BLUE }}>
                Everything on GitHub ↗
              </a>
            </div>
          </Up>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-24 md:py-32">
        <div className="max-w-[1100px] mx-auto">
          <Up><h2 className="font-semibold tracking-tight text-center mb-16" style={{ fontSize: "clamp(34px, 5.5vw, 64px)", letterSpacing: "-0.02em" }}>Toolkit</h2></Up>
          <div className="max-w-3xl mx-auto">
            {capabilities.map((c, i) => (
              <Up key={c.k} delay={i * 0.06}>
                <div className="py-7 border-b" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                  <div className="text-sm font-medium mb-2" style={{ color: GREY }}>{c.k}</div>
                  <div className="text-xl md:text-2xl font-light leading-relaxed">{c.v}</div>
                </div>
              </Up>
            ))}
          </div>

          {/* certs */}
          <Up><h3 className="font-semibold tracking-tight text-center mt-24 mb-12" style={{ fontSize: "clamp(26px, 4vw, 44px)" }}>Certifications</h3></Up>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certs.map((c, i) => (
              <Up key={c.name} delay={(i % 3) * 0.06}>
                <div className="h-full rounded-2xl p-6 flex flex-col justify-between gap-6" style={{ background: CARD }}>
                  <div className="font-medium leading-snug">{c.name}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px]" style={{ color: GREY }}>{c.org}</span>
                    {c.href && <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium hover:underline" style={{ color: BLUE }}>Verify ↗</a>}
                  </div>
                </div>
              </Up>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-28 md:py-44 text-center" style={{ background: INK, color: PAPER }}>
        <Up>
          <h2 className="font-semibold tracking-tight" style={{ fontSize: "clamp(40px, 8vw, 96px)", lineHeight: 1.02, letterSpacing: "-0.03em" }}>
            Let&apos;s work
            <br />together.
          </h2>
        </Up>
        <Up delay={0.1}>
          <p className="mt-8 text-lg md:text-xl font-light" style={{ color: "rgba(251,251,253,0.65)" }}>
            Open to full-time global roles, freelance, and collaborations.
          </p>
        </Up>
        <Up delay={0.2}>
          <a href="mailto:aaryasharadvaidya.10@gmail.com" className="inline-block mt-10 text-base font-medium px-8 py-4 rounded-full text-white transition-opacity hover:opacity-90" style={{ background: BLUE }}>
            Get in touch
          </a>
        </Up>
        <Up delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-14 text-[15px]" style={{ color: "rgba(251,251,253,0.7)" }}>
            {[
              ["LinkedIn", "https://linkedin.com/in/aarya-vaidya-013227211"],
              ["GitHub", "https://github.com/rajaaryan779"],
              ["Fiverr", "https://www.fiverr.com/rajaaryan779"],
              ["Email", "mailto:aaryasharadvaidya.10@gmail.com"],
            ].map(([l, h]) => (
              <a key={l} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </Up>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 text-center text-[13px]" style={{ color: GREY }}>
        © 2026 Aarya Vaidya — Pune, India · Built with Next.js
      </footer>
    </main>
  );
}
