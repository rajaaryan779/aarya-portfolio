"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const projects = [
  {
    id: 1, title: "AEO Diagnostic Tool", subtitle: "AI Search Visibility Analyzer",
    description: "Queries 3 LLMs simultaneously (Gemini 2.5 Flash, Qwen 3, Auto AI) to check product visibility in AI search engines. Returns 0–100 score with grade A–F. Built for Pixii.ai founding engineer application — shortlisted Top 25.",
    tags: ["FastAPI", "Gemini 2.5 Flash", "OpenRouter", "Python", "Vercel"],
    gradient: "from-purple-600 via-pink-500 to-rose-500",
    icon: "🔍", featured: true,
    metrics: [{ label: "LLMs Queried", value: "3" }, { label: "Score Range", value: "0–100" }, { label: "Achievement", value: "Top 25" }],
    links: { github: "https://github.com/rajaaryan779" },
  },
  {
    id: 2, title: "Grid07", subtitle: "Cognitive Routing & RAG Engine",
    description: "3-phase AI system: FAISS persona router → LangGraph autonomous content engine with JSON-enforced output → adversarial RAG with prompt injection defense and persona-lock header.",
    tags: ["LangGraph", "FAISS", "Groq", "Python", "RAG"],
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    icon: "🧠", featured: false,
    metrics: [{ label: "Phases", value: "3" }, { label: "Router", value: "FAISS" }, { label: "Defense", value: "Active" }],
    links: { github: "https://github.com/rajaaryan779" },
  },
  {
    id: 3, title: "DreamHome", subtitle: "Full-Stack Real Estate Platform",
    description: "Full-stack real estate platform with JWT auth, property listings, interactive maps (Leaflet). JWT token caching cut auth latency from 15ms to <1ms (93% reduction). Zero-downtime Alembic migrations on PostgreSQL.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "Leaflet", "JWT"],
    gradient: "from-green-500 via-teal-500 to-cyan-500",
    icon: "🏠", featured: false,
    metrics: [{ label: "Auth Latency", value: "<1ms" }, { label: "DB", value: "PostgreSQL" }, { label: "Stack", value: "Full" }],
    links: { github: "https://github.com/rajaaryan779" },
  },
  {
    id: 4, title: "AI Automation Suite", subtitle: "39+ Production Workflows",
    description: "39+ production n8n workflows: RAG pipelines (Google Drive → Pinecone → Gemini), multi-agent bots with per-user memory, WhatsApp/Telegram bots, Whisper voice transcription, LinkedIn automation, resume screening agents, and sales automation.",
    tags: ["n8n", "LangChain", "Pinecone", "Gemini", "Whisper", "RAG"],
    gradient: "from-orange-500 via-amber-400 to-yellow-400",
    icon: "⚡", featured: false,
    metrics: [{ label: "Workflows", value: "39+" }, { label: "Integrations", value: "20+" }, { label: "LLM", value: "Gemini" }],
    links: { github: "https://github.com/rajaaryan779" },
  },
  {
    id: 5, title: "FRIDAY — Personal AI Agent", subtitle: "Telegram AI with Memory & Voice",
    description: "Personal AI assistant on Telegram with long-term memory, ElevenLabs voice replies, Google Calendar integration, web search, and Gmail — built on n8n + Ollama LLaMA 3.1. Responds, books events, searches the web, remembers.",
    tags: ["n8n", "Ollama", "LLaMA", "Telegram", "ElevenLabs"],
    gradient: "from-violet-600 via-purple-500 to-indigo-500",
    icon: "🤖", featured: false,
    metrics: [{ label: "Tools", value: "6" }, { label: "Memory", value: "Long-term" }, { label: "Voice", value: "TTS" }],
    links: { github: "https://github.com/rajaaryan779" },
  },
  {
    id: 6, title: "LinkedIn & Sales Automation", subtitle: "Lead Scraping & Outreach",
    description: "End-to-end sales automation: LinkedIn lead scraping, Google lead scraper, outreach sequences, CRM updates via GHL + Supabase, AI-generated personalized emails. Built for enterprise clients at OyeLabs.",
    tags: ["n8n", "LinkedIn API", "GHL", "Supabase", "SerpAPI", "Gemini"],
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    icon: "🎯", featured: false,
    metrics: [{ label: "Leads/day", value: "500+" }, { label: "CRM", value: "GHL" }, { label: "Type", value: "Enterprise" }],
    links: { github: "https://github.com/rajaaryan779" },
  },
  {
    id: 7, title: "WhatsApp Restaurant Bot", subtitle: "AI Order & Menu Assistant",
    description: "WhatsApp chatbot for restaurants: handles menu queries, takes orders, sends confirmations, manages reservations via WhatsApp Business API + n8n + Gemini. Zero human intervention for standard orders.",
    tags: ["n8n", "WhatsApp API", "Gemini", "Webhook", "PostgreSQL"],
    gradient: "from-green-500 via-emerald-400 to-teal-500",
    icon: "🍽️", featured: false,
    metrics: [{ label: "Channel", value: "WhatsApp" }, { label: "Orders", value: "Automated" }, { label: "LLM", value: "Gemini" }],
    links: { github: "https://github.com/rajaaryan779" },
  },
  {
    id: 8, title: "VisionNet & SentimentIQ", subtitle: "Deep Learning & NLP Suite",
    description: "CNN image classifier with 12% accuracy gain via data augmentation. NLP sentiment pipeline achieving 85%+ accuracy on 10,000+ records, reducing manual analysis effort by 60%.",
    tags: ["TensorFlow", "Keras", "CNN", "NLTK", "VADER", "Flask"],
    gradient: "from-pink-600 via-rose-500 to-orange-400",
    icon: "👁️", featured: false,
    metrics: [{ label: "NLP Accuracy", value: "85%+" }, { label: "CNN Boost", value: "+12%" }, { label: "Records", value: "10K+" }],
    links: { github: "https://github.com/rajaaryan779" },
  },
];

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);
  const springRotX = useSpring(rotX, { stiffness: 200, damping: 20 });
  const springRotY = useSpring(rotY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width - 0.5);
    mouseY.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.09 }}
      style={{ rotateX: springRotX, rotateY: springRotY, transformPerspective: 1000 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className={`relative group glass-card overflow-hidden transition-all duration-500 ${project.featured ? "lg:col-span-2" : ""}`}
    >
      {/* Top gradient bar */}
      <div className={`h-px w-full bg-gradient-to-r ${project.gradient}`} />

      {/* Hover bg glow */}
      <motion.div
        animate={{ opacity: hovered ? 0.05 : 0 }}
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} pointer-events-none`}
      />

      {/* Large faded index number */}
      <div className="absolute top-4 right-6 text-7xl font-black text-white/[0.03] font-mono select-none leading-none">
        {String(index + 1).padStart(2, "0")}
      </div>

      {project.featured && (
        <div className="absolute top-5 right-5 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold z-10">
          ⭐ Featured
        </div>
      )}

      <div className={`p-7 ${project.featured ? "lg:flex lg:gap-8" : ""}`}>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              animate={{ scale: hovered ? 1.1 : 1, rotate: hovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
              className={`w-11 h-11 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-xl shadow-lg flex-shrink-0`}
            >
              {project.icon}
            </motion.div>
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
              <p className={`text-xs font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                {project.subtitle}
              </p>
            </div>
          </div>

          <p className="text-[#50506a] text-sm leading-relaxed mb-5">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/[0.07] text-[#60607a]">
                {tag}
              </span>
            ))}
          </div>

          <motion.a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white text-xs font-bold`}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
            GitHub
          </motion.a>
        </div>

        <div className={`${project.featured ? "lg:flex lg:flex-col lg:justify-center lg:gap-4 lg:min-w-[180px] mt-6 lg:mt-0" : "mt-5 grid grid-cols-3 gap-3"}`}>
          {project.metrics.map((m) => (
            <div key={m.label} className={`glass-card p-3 text-center ${project.featured ? "py-4" : ""}`}>
              <div className={`font-black text-lg bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                {m.value}
              </div>
              <div className="text-[#40406a] text-xs mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="projects" className="section-padding relative bg-[#08080f]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c18] via-[#08080f] to-[#0c0c18] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-400">Work</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 leading-tight">
            Things I&apos;ve{" "}
            <span className="gradient-text">shipped</span>
          </h2>
          <p className="text-[#50506a] text-lg mt-4 max-w-2xl">
            Production AI systems used by real businesses — LLM pipelines, multi-agent
            orchestration, and 39+ enterprise automation workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/rajaaryan779"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.08] text-[#70708a] hover:text-white hover:border-white/[0.16] hover:bg-white/[0.04] transition-all duration-300 text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
            See all on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
