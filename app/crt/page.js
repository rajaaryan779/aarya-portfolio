"use client";

import { useEffect, useRef, useState } from "react";
import { VT323 } from "next/font/google";

const vt = VT323({ subsets: ["latin"], weight: "400", display: "swap" });

const GREEN = "#33FF66", DIM = "#1f8f3f", BG = "#020a04";

const SECTIONS = {
  about: [
    "> AARYA VAIDYA // AI-ML ENGINEER",
    "> LOCATION: PUNE, INDIA",
    "",
    "I build production AI: LLM pipelines, multi-agent",
    "automation, and RAG that survives the real world.",
    "Diploma 2021, never stopped shipping. Currently at",
    "OyeLabs building Jenna, WhatsCRM & MEE + 19 workflows.",
    "Seeking full-time AI/ML roles globally. Relocation: YES.",
  ],
  projects: [
    "> SELECTED WORK ----------------------------------",
    "[01] JENNA            17x latency cut, fabrication guard",
    "[02] MARKET EXP ENGINE Multi-tenant SaaS, RLS on 8 tables",
    "[03] AI-PRASHASHAN     Grounded RAG over 440+ govt GRs",
    "[04] AEO DIAGNOSTIC    3-LLM AI-search scorer. Top25 Pixii.ai",
    "[05] GRID07            FAISS+LangGraph+injection-hardened RAG",
    "[06] AUTO SUITE        19 production n8n workflows, live",
    "[07] DREAMHOME         Full-stack realty, auth 15ms->1ms",
    "[08] AUTOSTREAM AGENT  LangGraph lead-qual agent (ServiceHive)",
    "> repo: github.com/rajaaryan779",
  ],
  stack: [
    "> STACK ------------------------------------------",
    "AI/LLMS    LangChain LangGraph RAG Grounded-Gen Claude",
    "           Gemini Groq FAISS Pinecone Amazon-Bedrock",
    "BACKEND    FastAPI Flask PostgreSQL SQLAlchemy JWT",
    "MOBILE     Kotlin Jetpack-Compose Firebase",
    "AUTOMATE   n8n WhatsApp-API Telegram Webhooks Supabase",
    "LANGS      Python TypeScript Kotlin SQL",
    "TOOLS      Cursor Claude-Code Git Vercel Docker",
  ],
  certs: [
    "> CERTIFICATIONS ---------------------------------",
    "[x] Generative AI Applications .... IBM 2026",
    "[x] Claude with Amazon Bedrock .... Anthropic 2026",
    "[x] Red Hat OpenStack Admin I ..... Red Hat 2026",
    "[x] Foundations of Cybersecurity .. Google 2025",
    "[x] Django Web Framework .......... Meta 2025",
    "[x] AI Automation w/ n8n, DL&CNN .. Udemy 2025",
  ],
  contact: [
    "> CONTACT ----------------------------------------",
    "EMAIL     aaryasharadvaidya.10@gmail.com",
    "LINKEDIN  in/aarya-vaidya",
    "GITHUB    github.com/rajaaryan779",
    "FIVERR    fiverr.com/rajaaryan779",
    "PHONE     +91 81499 04590",
  ],
  help: [
    "> COMMANDS: about  projects  stack  certs  contact",
    ">           resume  clear  help",
    "> (or click the buttons below)",
  ],
};

const BOOT = [
  "AARYA-BIOS v2.6  (c) 2026",
  "Memory test ........... 640K OK",
  "Detecting AI cores .... 4 found",
  "Loading LLM drivers ... done",
  "Mounting /portfolio ... ok",
  "",
  "  █████╗  █████╗ ██████╗ ██╗   ██╗ █████╗",
  " ██╔══██╗██╔══██╗██╔══██╗╚██╗ ██╔╝██╔══██╗",
  " ███████║███████║██████╔╝ ╚████╔╝ ███████║",
  " ██╔══██║██╔══██║██╔══██╗  ╚██╔╝  ██╔══██║",
  " ██║  ██║██║  ██║██║  ██║   ██║   ██║  ██║",
  "",
  "SYSTEM READY. Type 'help' and press ENTER.",
];

export default function CRT() {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState("");
  const [ready, setReady] = useState(false);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      const item = BOOT[i];
      if (item === undefined) { clearInterval(id); setReady(true); return; }
      setLines((p) => [...p, item]);
      i++;
      if (i >= BOOT.length) { clearInterval(id); setReady(true); }
    }, 180);
    return () => clearInterval(id);
  }, []);

  useEffect(() => { if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight; }, [lines]);

  const exec = (raw) => {
    const c = raw.trim().toLowerCase();
    setLines((p) => [...p, `aarya@crt:~$ ${raw}`]);
    if (c === "clear") { setLines([]); return; }
    if (c === "resume") {
      setLines((p) => [...p, "> downloading resume.pdf ..."]);
      const a = document.createElement("a"); a.href = "/Aarya_Resume.pdf"; a.download = "Aarya_Vaidya_Resume.pdf";
      document.body.appendChild(a); a.click(); a.remove(); return;
    }
    const out = SECTIONS[c];
    if (out) setLines((p) => [...p, ...out]);
    else if (c) setLines((p) => [...p, `command not found: ${c}  (try 'help')`]);
  };

  const submit = (e) => { e.preventDefault(); if (input.trim()) exec(input); setInput(""); };

  return (
    <main className={vt.className} style={{ background: "#000", minHeight: "100vh", padding: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}
      onClick={() => inputRef.current?.focus()}>
      <style>{`
        @keyframes crtflick { 0%,100%{opacity:.98} 50%{opacity:.94} }
        @keyframes crton { from{transform:scaleY(.002);opacity:0} to{transform:scaleY(1);opacity:1} }
        .scan::before{content:'';position:absolute;inset:0;pointer-events:none;z-index:3;background:repeating-linear-gradient(transparent 0,transparent 2px,rgba(0,0,0,.28) 3px);}
        .scan::after{content:'';position:absolute;inset:0;pointer-events:none;z-index:3;background:radial-gradient(ellipse at center,transparent 60%,rgba(0,0,0,.55) 100%);}
      `}</style>

      <div className="scan" style={{ position: "relative", width: "100%", maxWidth: 900, height: "min(86vh, 720px)", background: BG, borderRadius: 18, padding: "26px 26px 22px", boxShadow: `0 0 60px ${DIM}55, inset 0 0 120px #000`, border: "2px solid #0c2a14", animation: "crton .6s ease, crtflick 4s infinite" }}>
        <div style={{ color: GREEN, textShadow: `0 0 6px ${GREEN}`, fontSize: 22, lineHeight: 1.15, height: "100%", display: "flex", flexDirection: "column" }}>
          {/* status line */}
          <div style={{ display: "flex", justifyContent: "space-between", color: DIM, fontSize: 18, marginBottom: 8, borderBottom: `1px solid ${DIM}55`, paddingBottom: 6 }}>
            <span>AARYA-OS TERMINAL</span>
            <span>● REC  PUNE/IN</span>
          </div>

          {/* body */}
          <div ref={bodyRef} style={{ flex: 1, overflowY: "auto", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
            {lines.map((l, i) => <div key={i}>{l}</div>)}
            {ready && (
              <form onSubmit={submit} style={{ display: "flex", gap: 8, marginTop: 4 }}>
                <span>aarya@crt:~$</span>
                <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} autoFocus spellCheck={false}
                  style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: GREEN, textShadow: `0 0 6px ${GREEN}`, fontFamily: "inherit", fontSize: 22 }} />
                <span style={{ animation: "crtflick 1s steps(1) infinite" }}>█</span>
              </form>
            )}
          </div>

          {/* quick keys */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10, borderTop: `1px solid ${DIM}55`, paddingTop: 10 }}>
            {["about", "projects", "stack", "certs", "contact", "resume", "clear"].map((q) => (
              <button key={q} onClick={() => exec(q)} style={{ background: "transparent", border: `1px solid ${DIM}`, color: GREEN, padding: "2px 10px", fontFamily: "inherit", fontSize: 18, cursor: "pointer", textShadow: `0 0 6px ${GREEN}` }}
                onMouseEnter={(e) => { e.currentTarget.style.background = GREEN; e.currentTarget.style.color = "#000"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = GREEN; }}>
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
