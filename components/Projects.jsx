"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "SentimentIQ",
    subtitle: "AI Sentiment Analysis Tool",
    description:
      "Achieved 85%+ accuracy on 10,000+ text records. Reduced manual analysis effort by 60% via full automation pipeline. Visualized sentiment trends using interactive charts and dashboards.",
    tags: ["Python", "NLTK", "VADER", "Flask", "NLP"],
    gradient: "from-purple-600 via-pink-500 to-rose-500",
    glow: "shadow-purple-500/40",
    hoverGlow: "hover:shadow-purple-500/60",
    accent: "#8B5CF6",
    icon: "🧠",
    metrics: [
      { label: "Accuracy", value: "85%+" },
      { label: "Records Processed", value: "10K+" },
      { label: "Effort Saved", value: "60%" },
    ],
    links: {
      github: "https://github.com/rajaaryan779",
    },
  },
  {
    id: 2,
    title: "CarbonTrack",
    subtitle: "Carbon Budgeting Web App",
    description:
      "Full-stack carbon footprint tracking platform with secure user authentication, interactive dashboards, and REST API integration. Built to make sustainability data actionable.",
    tags: ["Flask", "SQLite", "REST APIs", "HTML", "CSS"],
    gradient: "from-green-500 via-teal-500 to-cyan-500",
    glow: "shadow-cyan-500/40",
    hoverGlow: "hover:shadow-cyan-500/60",
    accent: "#06B6D4",
    icon: "🌱",
    metrics: [
      { label: "Stack", value: "Full-Stack" },
      { label: "Auth", value: "Secure" },
      { label: "Type", value: "Web App" },
    ],
    links: {
      github: "https://github.com/rajaaryan779",
    },
  },
  {
    id: 3,
    title: "VisionNet",
    subtitle: "Image Classification Tool",
    description:
      "Built CNN for multi-class image classification. Improved accuracy by 12% through data augmentation and hyperparameter tuning. End-to-end deep learning pipeline from preprocessing to inference.",
    tags: ["TensorFlow", "Keras", "CNN", "Python", "Deep Learning"],
    gradient: "from-orange-500 via-amber-400 to-yellow-400",
    glow: "shadow-orange-500/40",
    hoverGlow: "hover:shadow-orange-500/60",
    accent: "#F97316",
    icon: "👁️",
    metrics: [
      { label: "Accuracy Boost", value: "+12%" },
      { label: "Architecture", value: "CNN" },
      { label: "Framework", value: "TensorFlow" },
    ],
    links: {
      github: "https://github.com/rajaaryan779",
    },
  },
  {
    id: 4,
    title: "FlowMind",
    subtitle: "AI Automation Workflow Suite",
    description:
      "19 production-grade AI automation workflows. Multi-agent bots with per-user memory, RAG pipeline (Google Drive → Pinecone → GPT-4o), voice transcription via Whisper, and a Google Calendar agent with full CRUD via natural language.",
    tags: ["n8n", "GPT-4o", "LangChain", "Pinecone", "RAG", "Whisper"],
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    glow: "shadow-indigo-500/40",
    hoverGlow: "hover:shadow-indigo-500/60",
    accent: "#6366F1",
    icon: "⚡",
    metrics: [
      { label: "Workflows", value: "19" },
      { label: "LLM APIs", value: "GPT-4o" },
      { label: "Integrations", value: "10+" },
    ],
    featured: true,
    links: {
      github: "https://github.com/rajaaryan779",
    },
  },
];

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative group rounded-2xl overflow-hidden border border-white/8 bg-[#0a0a18] shadow-xl ${project.glow} ${project.hoverGlow} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${project.featured ? "lg:col-span-2" : ""}`}
    >
      {/* Top gradient bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

      {/* Hover background glow */}
      <motion.div
        animate={{ opacity: hovered ? 0.08 : 0 }}
        transition={{ duration: 0.3 }}
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} pointer-events-none`}
      />

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-5 right-5 px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold z-10">
          ⭐ Featured
        </div>
      )}

      <div className={`p-7 ${project.featured ? "lg:flex lg:gap-8" : ""}`}>
        {/* Left / main content */}
        <div className="flex-1">
          {/* Icon + title */}
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              animate={{ scale: hovered ? 1.1 : 1, rotate: hovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl shadow-lg`}
            >
              {project.icon}
            </motion.div>
            <div>
              <h3 className="text-white font-bold text-xl leading-tight">
                {project.title}
              </h3>
              <p
                className={`text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
              >
                {project.subtitle}
              </p>
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/6 border border-white/10 text-slate-300 hover:border-white/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold shadow-lg transition-all duration-300`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
              </svg>
              GitHub
            </motion.a>
          </div>
        </div>

        {/* Metrics (visible on featured, or on all) */}
        <div
          className={`${
            project.featured
              ? "lg:flex lg:flex-col lg:justify-center lg:gap-4 lg:min-w-[180px] mt-6 lg:mt-0"
              : "mt-6 grid grid-cols-3 gap-3"
          }`}
        >
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className={`glass-card p-3 text-center ${
                project.featured ? "py-4" : ""
              }`}
            >
              <div
                className={`font-black text-lg bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
              >
                {metric.value}
              </div>
              <div className="text-slate-500 text-xs mt-0.5">{metric.label}</div>
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
    <section id="projects" className="section-padding relative">
      {/* BG accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05050f] via-[#080814] to-[#05050f] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Things I&apos;ve{" "}
            <span className="gradient-text">built</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From NLP tools to multi-agent automation suites — production-ready
            systems that solve actual problems.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300 text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
            See all projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
