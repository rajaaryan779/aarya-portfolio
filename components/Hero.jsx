"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "AI/ML Engineer",
  "LLM Pipeline Architect",
  "AI Agent Builder",
  "n8n Automation Expert",
];

function TypingText({ texts }) {
  const [idx, setIdx]         = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting]   = useState(false);
  const [pausing, setPausing]     = useState(false);

  useEffect(() => {
    const current = texts[idx];
    let t;
    if (pausing) { t = setTimeout(() => setPausing(false), 1500); return () => clearTimeout(t); }
    if (!deleting) {
      if (displayed.length < current.length) {
        t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else { t = setTimeout(() => setDeleting(true), 2200); }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else { setDeleting(false); setPausing(true); setIdx((p) => (p + 1) % texts.length); }
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, idx, texts, pausing]);

  return (
    <span>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-6 bg-violet-400 ml-1 align-middle"
      />
    </span>
  );
}

const techTags = [
  { label: "LangChain",    left: "7%",  top: "18%", delay: 0,   dur: 7   },
  { label: "⚡ n8n",        left: "80%", top: "12%", delay: 1.4, dur: 9   },
  { label: "< Agent />",  left: "3%",  top: "62%", delay: 0.7, dur: 8   },
  { label: "FAISS",        left: "87%", top: "55%", delay: 2.1, dur: 7.5 },
  { label: "✦ Claude",     left: "16%", top: "83%", delay: 0.9, dur: 10  },
  { label: "RAG Pipeline", left: "67%", top: "78%", delay: 1.8, dur: 8   },
  { label: "Pinecone",     left: "43%", top: "5%",  delay: 0.4, dur: 8.5 },
  { label: "LangGraph",    left: "73%", top: "32%", delay: 1.1, dur: 9.5 },
  { label: "FastAPI",      left: "55%", top: "88%", delay: 1.6, dur: 7.2 },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/rajaaryan779",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/aarya-vaidya-013227211",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:aaryasharadvaidya.10@gmail.com",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#08080f]">
      {/* ── Background ──────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dot-grid opacity-25" />
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full bg-violet-700/12 blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-600/8 blur-[120px]"
        />
        {/* Floating tech tags */}
        {techTags.map((tag) => (
          <motion.div
            key={tag.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: [0, 0.4, 0.4], y: [16, 0, -12, 0] }}
            transition={{
              opacity: { duration: 1.2, delay: tag.delay, times: [0, 0.25, 1] },
              y: { duration: tag.dur, repeat: Infinity, ease: "easeInOut", delay: tag.delay },
            }}
            style={{ left: tag.left, top: tag.top }}
            className="absolute px-3 py-1.5 rounded-full text-xs font-medium text-[#40405a] border border-white/[0.06] bg-white/[0.02]"
          >
            {tag.label}
          </motion.div>
        ))}
      </div>

      {/* ── Content ─────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-4xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.04] text-sm font-medium text-[#70708a]">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for work — Open to relocation worldwide
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-black leading-[0.88] tracking-tight mb-7"
            style={{ fontSize: "clamp(60px, 9.5vw, 130px)" }}
          >
            <span className="gradient-text">AARYA</span>
            <br />
            <span className="text-[#f0f0fa]">VAIDYA.</span>
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 text-xl md:text-2xl font-medium text-[#70708a] mb-7"
          >
            <span className="w-8 h-px bg-gradient-to-r from-violet-500 to-cyan-500 flex-shrink-0" />
            <TypingText texts={roles} />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-[#60607a] text-lg leading-relaxed mb-10 max-w-2xl"
          >
            Building{" "}
            <span className="text-violet-400 font-medium">production LLM pipelines</span>,{" "}
            multi-agent systems, and{" "}
            <span className="text-cyan-400 font-medium">39+ automation workflows</span>{" "}
            used by real businesses. Reduced RAG latency by 95% in production.
            Open to full-time roles globally.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm shadow-xl shadow-violet-600/20 transition-all duration-300"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 rounded-xl border border-white/[0.12] text-[#b0b0c8] font-bold text-sm hover:border-white/25 hover:text-white hover:bg-white/[0.04] transition-all duration-300"
            >
              Contact Me →
            </motion.a>
            <motion.a
              href="/Aarya_Resume.pdf"
              download
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 rounded-xl border border-violet-500/30 text-violet-400 font-bold text-sm hover:border-violet-400/50 hover:bg-violet-500/10 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Resume
            </motion.a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="flex items-center gap-3"
          >
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={s.label}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-[#70708a] hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.07] hover:border-white/[0.16] transition-all duration-300"
              >
                {s.icon}
              </motion.a>
            ))}
            <span className="text-[#35355a] text-sm ml-2">Pune, India</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#30305a]"
      >
        <span className="uppercase tracking-[0.2em] text-[10px]">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/[0.1] flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-violet-400/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
