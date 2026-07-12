"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display, PT_Serif } from "next/font/google";

const head = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "800", "900"], style: ["normal", "italic"], display: "swap" });
const body = PT_Serif({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], display: "swap" });

const PAPER = "#F4F1E9", INK = "#1A1815";

const work = [
  { t: "Jenna Cuts Response Time 17x", d: "A deterministic chat fast-path answers read-only money questions with no LLM call. A fabrication guard checks every dollar figure against real transaction data before it ships.", s: "FastAPI · Amazon Bedrock · PostgreSQL", h: "https://github.com/rajaaryan779" },
  { t: "Market Expansion Engine Goes Multi-Tenant", d: "A B2B lead-gen and outreach platform rebuilt on Row-Level Security across all 8 tables — tenant isolation enforced by Postgres, not application code.", s: "Next.js · Supabase RLS · n8n", h: "https://github.com/rajaaryan779/MEE" },
  { t: "Ai-Prashashan Grounds Government Answers", d: "A Marathi Android assistant that answers strictly from 440+ retrieved Government Resolutions and refuses to answer when nothing supports the question.", s: "Kotlin · Jetpack Compose · Firebase", h: "https://github.com/rajaaryan779/Ai-Prashashan" },
  { t: "AEO Diagnostic Tool Lands Top 25 Spot", d: "A concurrent engine that queries three large language models at once to score how visible a product is inside AI search. Earned a top-25 placement in the Pixii.ai founding-engineer search.", s: "FastAPI · Gemini · OpenRouter", h: "https://github.com/rajaaryan779/aeo-diagnostic" },
  { t: "Grid07 Hardens RAG Against Attack", d: "A three-phase system pairing FAISS persona routing with a LangGraph content engine and a retrieval layer engineered to withstand prompt-injection attempts.", s: "LangGraph · FAISS · Groq", h: "https://github.com/rajaaryan779" },
  { t: "Automation Suite Reaches 19 Workflows", d: "A growing library of production n8n workflows — RAG pipelines, agent bots, voice transcription and lead generation — now running daily for real businesses.", s: "n8n · Pinecone · Gemini", h: "https://github.com/rajaaryan779/n8n-workflows" },
  { t: "DreamHome Cuts Auth Latency 93%", d: "A full-stack real-estate platform with interactive maps. Token caching dropped authentication latency from 15ms to under 1ms.", s: "FastAPI · Next.js · PostgreSQL", h: "https://github.com/rajaaryan779/Real-Estate-software" },
  { t: "AutoStream Agent Qualifies Leads Solo", d: "A 4-node LangGraph state machine built for ServiceHive detects intent, collects details, and extracts structured leads with no human in the loop.", s: "LangGraph · Gemini · Python", h: "https://github.com/rajaaryan779/autostream_agent" },
];
const stack = [
  ["AI & LLMs", "LangChain, LangGraph, RAG, Grounded Generation, Claude, Gemini, Groq LLaMA, FAISS, Pinecone, Amazon Bedrock"],
  ["Backend", "FastAPI, Flask, PostgreSQL, SQLAlchemy, REST, JWT, asyncio"],
  ["Mobile", "Kotlin, Jetpack Compose, Firebase, Firestore"],
  ["Automation", "n8n, WhatsApp API, Telegram API, Webhooks, Supabase, Cloudflare R2"],
  ["Languages & Tools", "Python, TypeScript, Kotlin, SQL, Cursor, Claude Code, Git, Vercel, Docker"],
];
const certs = [
  ["Develop Generative AI Applications", "IBM, 2026", "https://coursera.org/verify/KTAVNVHE8H6H"],
  ["Claude with Amazon Bedrock", "Anthropic, 2026", "https://verify.skilljar.com/c/mi62wwe5n6hi"],
  ["Red Hat OpenStack Administration I", "Red Hat, 2026", "https://credly.com/badges/3115833a-4a07-4cf9-ac22-855f007a5914"],
  ["Foundations of Cybersecurity", "Google, 2025", "https://coursera.org/verify/MGIHIZWCAA54"],
  ["Django Web Framework", "Meta, 2025", "https://coursera.org/verify/2Z1HXMQV496N"],
  ["AI Automation w/ n8n, Deep Learning & CNN", "Udemy, 2025", null],
];

function rule() { return <div style={{ borderTop: `1px solid ${INK}` }} />; }
function Up({ children, delay = 0, className = "" }) {
  return <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay }} className={className}>{children}</motion.div>;
}

export default function Press() {
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" }).format(new Date()).toUpperCase());
  }, []);

  return (
    <main className={body.className} style={{ background: PAPER, color: INK, minHeight: "100vh" }}>
      <div className="max-w-[1150px] mx-auto px-5 md:px-8 py-8">

        {/* top ribbon */}
        <div className="flex justify-between items-center text-[11px] uppercase tracking-widest pb-2" style={{ borderBottom: `1px solid ${INK}` }}>
          <span>Vol. XXVI — No. 1</span>
          <span className="hidden sm:block">{date}</span>
          <span>Pune · India</span>
        </div>

        {/* masthead */}
        <div className="text-center py-6" style={{ borderBottom: `3px double ${INK}` }}>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className={`${head.className} font-black`} style={{ fontSize: "clamp(40px, 9vw, 110px)", lineHeight: 0.95, letterSpacing: "-0.01em" }}>
            The Aarya Times
          </motion.h1>
          <div className="text-[11px] uppercase tracking-[0.3em] mt-3">“All the AI that&apos;s fit to ship”</div>
        </div>

        {/* lead story */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 py-8" style={{ borderBottom: `1px solid ${INK}` }}>
          <div className="md:col-span-2 md:pr-8" style={{ borderRight: `1px solid ${INK}` }}>
            <div className="text-[11px] uppercase tracking-widest mb-3">Front Page — Profile</div>
            <h2 className={`${head.className} font-black`} style={{ fontSize: "clamp(30px, 5vw, 60px)", lineHeight: 1.04 }}>
              Engineer Builds AI That Actually Ships
            </h2>
            <p className={`${head.className} italic mt-3 text-lg`} style={{ opacity: 0.75 }}>
              Pune-based AI/ML engineer turns research into production systems used by real businesses.
            </p>
            <div className="mt-5 text-[15px] leading-relaxed" style={{ columnCount: 2, columnGap: "2rem", textAlign: "justify" }}>
              <p className="mb-3"><span className={`${head.className}`} style={{ fontSize: "2.6em", float: "left", lineHeight: 0.8, paddingRight: "0.06em", fontWeight: 800 }}>A</span>arya Vaidya, an AI/ML engineer from Pune, India, has spent the better part of five years doing the unglamorous work that separates a demo from a product: latency, reliability, and the thing that breaks at 2am.</p>
              <p className="mb-3">Currently interning at OyeLabs Technologies, Vaidya is building Jenna, WhatsCRM, and the Market Expansion Engine — production AI products relied on daily, alongside his own retrieval-grounded assistant, Ai-Prashashan.</p>
              <p className="mb-3">His track record includes cutting Jenna&apos;s response latency by 17x and earning a top-25 placement in a competitive founding-engineer search at Pixii.ai.</p>
              <p>Now seeking full-time AI/ML roles globally, he remains, by his own account, “open to relocation worldwide.”</p>
            </div>
            <div className="flex gap-4 mt-6 text-[11px] uppercase tracking-widest">
              <a href="#work" className="underline">Read the work ↓</a>
              <a href="/Aarya_Resume.pdf" download className="underline">Download résumé ↓</a>
            </div>
          </div>

          {/* sidebar */}
          <div className="space-y-5">
            <div>
              <div className="text-[11px] uppercase tracking-widest pb-2" style={{ borderBottom: `1px solid ${INK}` }}>By The Numbers</div>
              {[["17x", "Latency cut (Jenna)"], ["19", "Automation workflows"], ["11+", "Projects shipped"], ["5", "Certifications earned"]].map(([n, l]) => (
                <div key={l} className="flex items-baseline gap-3 py-2" style={{ borderBottom: "1px dotted rgba(26,24,21,0.3)" }}>
                  <span className={`${head.className} font-black text-2xl`}>{n}</span>
                  <span className="text-sm">{l}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest pb-2" style={{ borderBottom: `1px solid ${INK}` }}>Career Record</div>
              {[["2026", "AI Engineering Intern, OyeLabs"], ["2025", "AI Intern, Elevate Labs"], ["2024", "B.Tech CSE (AI/ML), PCU"], ["2021", "Diploma AI/ML, K.K. Wagh"]].map(([y, r]) => (
                <div key={y} className="py-2 text-sm" style={{ borderBottom: "1px dotted rgba(26,24,21,0.3)" }}><b>{y}</b> — {r}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Work section */}
        <section id="work" className="py-8">
          <div className="text-center text-[11px] uppercase tracking-[0.3em] pb-4" style={{ borderBottom: `3px double ${INK}` }}>Selected Work — The Portfolio Pages</div>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-8 pt-8">
            {work.map((p, i) => (
              <Up key={p.t} delay={(i % 3) * 0.06}>
                <a href={p.h} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="text-[11px] uppercase tracking-widest mb-2" style={{ opacity: 0.6 }}>Story No. {String(i + 1).padStart(2, "0")}</div>
                  <h3 className={`${head.className} font-bold leading-tight group-hover:underline`} style={{ fontSize: "clamp(22px, 2.4vw, 28px)" }}>{p.t}</h3>
                  <div className="my-3" style={{ borderTop: `1px solid ${INK}`, width: 48 }} />
                  <p className="text-[15px] leading-relaxed" style={{ textAlign: "justify" }}>{p.d}</p>
                  <p className={`${head.className} italic text-sm mt-3`} style={{ opacity: 0.7 }}>{p.s}</p>
                </a>
              </Up>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://github.com/rajaaryan779" target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-widest underline">Full archive on GitHub ↗</a>
          </div>
        </section>

        {/* Stack — classifieds */}
        <section id="stack" className="py-8" style={{ borderTop: `3px double ${INK}` }}>
          <div className="text-center text-[11px] uppercase tracking-[0.3em] py-4">The Classifieds — Skills & Tools</div>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {stack.map(([k, v]) => (
              <div key={k} className="py-3" style={{ borderTop: `1px solid ${INK}` }}>
                <span className={`${head.className} font-bold`}>{k}: </span>
                <span className="text-[15px]">{v}</span>
              </div>
            ))}
          </div>
          <div className="text-center text-[11px] uppercase tracking-[0.3em] pt-8 pb-4">Credentials On File</div>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
            {certs.map(([n, o, h]) => (
              <div key={n} className="py-2 text-sm" style={{ borderTop: "1px dotted rgba(26,24,21,0.4)" }}>
                <b>{n}</b> — <span style={{ opacity: 0.7 }}>{o}</span> {h && <a href={h} target="_blank" rel="noopener noreferrer" className="underline italic"> verify</a>}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12 text-center" style={{ borderTop: `3px double ${INK}` }}>
          <h2 className={`${head.className} font-black`} style={{ fontSize: "clamp(36px, 7vw, 84px)", lineHeight: 1 }}>Write to the Editor</h2>
          <a href="mailto:aaryasharadvaidya.10@gmail.com" className={`${head.className} italic inline-block mt-5 text-xl md:text-2xl underline`}>aaryasharadvaidya.10@gmail.com</a>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-[11px] uppercase tracking-widest">
            {[["LinkedIn", "https://linkedin.com/in/aarya-vaidya-013227211"], ["GitHub", "https://github.com/rajaaryan779"], ["Fiverr", "https://www.fiverr.com/rajaaryan779"], ["+91 81499 04590", "tel:+918149904590"]].map(([l, h]) => (
              <a key={l} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="underline">{l}</a>
            ))}
          </div>
        </section>

        <footer className="py-6 text-center text-[11px] uppercase tracking-widest" style={{ borderTop: `1px solid ${INK}`, opacity: 0.6 }}>
          Printed in Pune · © 2026 The Aarya Times · Set in Next.js
        </footer>
      </div>
    </main>
  );
}
