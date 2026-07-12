"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    label: "AI/ML & LLMs", icon: "🧠",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "LangChain / LangGraph", level: 88 },
      { name: "Claude (Anthropic)",    level: 92 },
      { name: "TensorFlow / Keras",    level: 85 },
      { name: "Groq + Gemini API",     level: 87 },
      { name: "FAISS / RAG Pipelines", level: 86 },
      { name: "Amazon Bedrock",        level: 82 },
    ],
  },
  {
    label: "Backend & APIs", icon: "⚙️",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "FastAPI",              level: 88 },
      { name: "Flask",                level: 85 },
      { name: "PostgreSQL / SQLAlchemy", level: 82 },
      { name: "JWT / REST APIs",      level: 87 },
      { name: "NestJS / GraphQL",     level: 75 },
      { name: "Prisma",               level: 78 },
    ],
  },
  {
    label: "Automation", icon: "⚡",
    color: "from-orange-500 to-yellow-400",
    skills: [
      { name: "n8n Workflows",         level: 92 },
      { name: "WhatsApp Business API", level: 85 },
      { name: "Telegram Bot API",      level: 88 },
      { name: "Webhook Integrations",  level: 87 },
      { name: "Airtable / SerpAPI",    level: 82 },
      { name: "LLM Agent Orchestration", level: 86 },
    ],
  },
  {
    label: "Frontend & Tools", icon: "🛠️",
    color: "from-green-400 to-teal-500",
    skills: [
      { name: "Python",                level: 93 },
      { name: "TypeScript / JavaScript", level: 82 },
      { name: "Next.js / React",       level: 80 },
      { name: "Tailwind CSS",          level: 85 },
      { name: "Git / GitHub",          level: 88 },
      { name: "Linux / Vercel",        level: 80 },
    ],
  },
];

const techBadges = [
  { name: "Python",         icon: "🐍", color: "from-yellow-400 to-green-400"  },
  { name: "LangGraph",      icon: "🔗", color: "from-blue-400 to-purple-400"   },
  { name: "Groq LLaMA",    icon: "⚡", color: "from-orange-400 to-yellow-400" },
  { name: "Gemini API",     icon: "🤖", color: "from-blue-400 to-cyan-400"     },
  { name: "Amazon Bedrock", icon: "☁️", color: "from-orange-500 to-amber-400"  },
  { name: "FastAPI",        icon: "🚀", color: "from-green-400 to-teal-400"    },
  { name: "n8n",            icon: "⚙️", color: "from-purple-400 to-pink-400"   },
  { name: "FAISS",          icon: "🔍", color: "from-cyan-400 to-blue-500"     },
  { name: "LangChain",      icon: "🧬", color: "from-red-400 to-pink-400"      },
  { name: "PostgreSQL",     icon: "🐘", color: "from-blue-500 to-indigo-400"   },
  { name: "Pinecone",       icon: "🌲", color: "from-green-500 to-teal-400"    },
  { name: "Claude",         icon: "✦",  color: "from-violet-500 to-orange-400" },
  { name: "Whisper",        icon: "🎤", color: "from-indigo-400 to-purple-500" },
  { name: "Cursor / Copilot", icon: "🖱️", color: "from-slate-400 to-blue-400" },
  { name: "Supabase",       icon: "🟢", color: "from-green-400 to-emerald-500" },
];

const certifications = [
  { name: "Claude with Amazon Bedrock", issuer: "Anthropic", year: "2026", url: "https://verify.skilljar.com/c/mi62wwe5n6hi",                                                  color: "from-violet-500 to-orange-400", icon: "✦"  },
  { name: "Red Hat OpenStack Administration I", issuer: "Red Hat", year: "2026", url: "https://credly.com/badges/3115833a-4a07-4cf9-ac22-855f007a5914",                       color: "from-red-500 to-rose-400",       icon: "🎓" },
  { name: "Foundations of Cybersecurity", issuer: "Google · Coursera", year: "2025", url: "https://coursera.org/verify/MGIHIZWCAA54",                                         color: "from-blue-500 to-cyan-400",      icon: "🔐" },
  { name: "AI Automation with n8n", issuer: "Udemy", year: "2025", url: null,                                                                                                 color: "from-orange-500 to-yellow-400",  icon: "⚡" },
  { name: "Deep Learning & CNN", issuer: "Udemy", year: "2025", url: null,                                                                                                    color: "from-purple-500 to-pink-400",    icon: "🧠" },
  { name: "Python Programming", issuer: "University of Michigan · Coursera", year: "2024", url: "https://coursera.org/verify/O960T7F3KVLN",                                   color: "from-yellow-400 to-green-400",   icon: "🐍" },
];

function SkillBar({ skill, color, delay }) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-[#70708a] text-sm font-medium">{skill.name}</span>
        <span className="text-[#40406a] text-xs font-mono">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}

function CategoryCard({ cat, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card p-6 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-xl">
          {cat.icon}
        </div>
        <div>
          <h3 className={`font-bold text-base bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
            {cat.label}
          </h3>
          <p className="text-[#40406a] text-xs">{cat.skills.length} skills</p>
        </div>
      </div>
      {cat.skills.map((skill, i) => (
        <SkillBar key={skill.name} skill={skill} color={cat.color} delay={i * 0.1} />
      ))}
    </motion.div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="skills" className="section-padding relative bg-[#08080f]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-400">Skills</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 leading-tight">
            My tech{" "}
            <span className="gradient-text">stack</span>
          </h2>
          <p className="text-[#50506a] text-lg mt-4 max-w-2xl">
            From training neural networks to building multi-agent automation pipelines.
          </p>
        </motion.div>

        {/* Skill bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.label} cat={cat} index={i} />
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <p className="text-[#40406a] text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-center">
            Tools & Integrations
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((badge, i) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.04, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:border-white/[0.14] transition-all duration-300"
              >
                <span className="text-base">{badge.icon}</span>
                <span className={`text-sm font-semibold bg-gradient-to-r ${badge.color} bg-clip-text text-transparent`}>
                  {badge.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <p className="text-[#40406a] text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-center">
            Certifications
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.07 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="glass-card p-4 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center text-white text-sm flex-shrink-0`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-semibold leading-snug">{cert.name}</p>
                    <p className="text-[#50506a] text-xs mt-0.5">{cert.issuer} · {cert.year}</p>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block mt-1.5 text-xs font-medium bg-gradient-to-r ${cert.color} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                      >
                        Verify →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
