"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    label: "AI / ML",
    icon: "🧠",
    color: "from-purple-500 to-pink-500",
    textColor: "text-purple-400",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/10",
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "Keras", level: 82 },
      { name: "Scikit-learn", level: 88 },
      { name: "NLTK / VADER", level: 85 },
      { name: "LangChain", level: 78 },
      { name: "OpenAI API", level: 90 },
    ],
  },
  {
    label: "Data Science",
    icon: "📊",
    color: "from-cyan-500 to-blue-500",
    textColor: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    bgColor: "bg-cyan-500/10",
    skills: [
      { name: "NumPy", level: 90 },
      { name: "Pandas", level: 88 },
      { name: "Feature Engineering", level: 80 },
      { name: "RAG Pipelines", level: 82 },
      { name: "Pinecone", level: 75 },
      { name: "Time Series Analysis", level: 78 },
    ],
  },
  {
    label: "Automation",
    icon: "⚡",
    color: "from-orange-500 to-yellow-400",
    textColor: "text-orange-400",
    borderColor: "border-orange-500/30",
    bgColor: "bg-orange-500/10",
    skills: [
      { name: "n8n Workflows", level: 92 },
      { name: "WhatsApp API", level: 85 },
      { name: "Telegram Bot API", level: 88 },
      { name: "Webhook Integrations", level: 87 },
      { name: "Airtable", level: 82 },
      { name: "SerpAPI", level: 78 },
    ],
  },
  {
    label: "Web & Tools",
    icon: "🛠️",
    color: "from-green-400 to-teal-500",
    textColor: "text-green-400",
    borderColor: "border-green-500/30",
    bgColor: "bg-green-500/10",
    skills: [
      { name: "Python", level: 92 },
      { name: "Flask", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "SQL / SQLite", level: 78 },
      { name: "Git / GitHub", level: 88 },
      { name: "Linux", level: 75 },
    ],
  },
];

const techBadges = [
  { name: "Python", icon: "🐍", color: "from-yellow-400 to-green-400" },
  { name: "TensorFlow", icon: "🔶", color: "from-orange-400 to-yellow-400" },
  { name: "OpenAI GPT-4o", icon: "🤖", color: "from-green-400 to-cyan-400" },
  { name: "n8n", icon: "⚡", color: "from-purple-400 to-pink-400" },
  { name: "LangChain", icon: "🔗", color: "from-blue-400 to-purple-400" },
  { name: "Pinecone", icon: "🌲", color: "from-green-500 to-teal-400" },
  { name: "Flask", icon: "🌶️", color: "from-red-400 to-orange-400" },
  { name: "RAG", icon: "🔍", color: "from-cyan-400 to-blue-500" },
  { name: "Whisper", icon: "🎤", color: "from-indigo-400 to-purple-500" },
  { name: "Pandas", icon: "🐼", color: "from-blue-400 to-indigo-400" },
  { name: "Keras", icon: "🧬", color: "from-red-500 to-pink-500" },
  { name: "GitHub", icon: "🐙", color: "from-gray-400 to-slate-400" },
];

function SkillBar({ skill, color, delay }) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
        <span className="text-slate-500 text-xs font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color} shadow-sm`}
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
      className="glass-card p-6 hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`w-10 h-10 rounded-xl ${cat.bgColor} border ${cat.borderColor} flex items-center justify-center text-xl`}
        >
          {cat.icon}
        </div>
        <div>
          <h3 className={`font-bold text-base ${cat.textColor}`}>
            {cat.label}
          </h3>
          <p className="text-slate-500 text-xs">{cat.skills.length} skills</p>
        </div>
      </div>

      {/* Skill bars */}
      <div>
        {cat.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            color={cat.color}
            delay={i * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-sm font-medium mb-4">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            My tech{" "}
            <span className="gradient-text">stack</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From training neural networks to building multi-agent automation
            pipelines — here&apos;s what I work with.
          </p>
        </motion.div>

        {/* Skill category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.label} cat={cat} index={i} />
          ))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <p className="text-slate-500 text-sm font-medium mb-6 uppercase tracking-widest">
            Tools & Integrations
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((badge, i) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.05, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/10 hover:border-white/20 cursor-default transition-all duration-300"
              >
                <span className="text-base">{badge.icon}</span>
                <span
                  className={`text-sm font-semibold bg-gradient-to-r ${badge.color} bg-clip-text text-transparent`}
                >
                  {badge.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
