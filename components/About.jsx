"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const timeline = [
  { year: "2021", title: "Diploma in AI/ML", org: "K.K. Wagh Polytechnic, Nashik", color: "from-purple-500 to-pink-500" },
  { year: "2024", title: "B.Tech CSE — AI/ML Specialization", org: "Pimpri Chinchwad University", color: "from-cyan-500 to-blue-500" },
  { year: "2025", title: "AI Intern — Stock Price Prediction", org: "Elevate Labs", color: "from-green-400 to-cyan-500" },
  { year: "2026", title: "AI Automation Intern — Present", org: "OyeLabs Technologies", color: "from-violet-500 to-cyan-500" },
];

const stats = [
  { value: "8+",   label: "Projects Built",         color: "from-violet-500 to-pink-500" },
  { value: "39+",  label: "Automation Workflows",   color: "from-cyan-500 to-blue-500"   },
  { value: "85%+", label: "Model Accuracy",         color: "from-green-400 to-cyan-500"  },
  { value: "40+",  label: "Tech Tools Used",        color: "from-orange-400 to-pink-500" },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="section-padding relative bg-[#08080f]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-400">About</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 leading-tight">
            The person behind the{" "}
            <span className="gradient-text">code</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — bio + stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-card p-8 mb-5">
              <h3 className="text-white font-bold text-lg mb-5">Who I Am</h3>
              <p className="text-[#70708a] leading-relaxed mb-4">
                I&apos;m an AI/ML Engineer from Pune, India — currently interning at{" "}
                <span className="text-violet-400 font-medium">OyeLabs Technologies</span>,
                where I build production AI products (WhatsCRM, Jenna) and 39+ enterprise
                automation workflows. B.Tech in CSE with AI/ML specialization from Pimpri Chinchwad University.
              </p>
              <p className="text-[#70708a] leading-relaxed mb-4">
                I build{" "}
                <span className="text-violet-400 font-medium">production-grade</span> AI systems —
                LLM pipelines, multi-agent orchestration, RAG engines — that ship to real users
                and solve real business problems. Not just notebooks.
              </p>
              <p className="text-[#70708a] leading-relaxed">
                Actively seeking{" "}
                <span className="text-cyan-400 font-medium">full-time global roles</span> in
                AI/ML Engineering — open to relocation worldwide and visa sponsorship.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  whileHover={{ scale: 1.04, y: -3 }}
                  className="glass-card p-5 text-center"
                >
                  <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-[#50506a] text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg mb-8">My Journey</h3>
            <div>
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="relative flex gap-5 pb-7 last:pb-0"
                >
                  {i < timeline.length - 1 && (
                    <div className="absolute left-[17px] top-10 bottom-0 w-px bg-white/[0.05]" />
                  )}
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xs font-black flex-shrink-0 shadow-lg`}>
                    {item.year.slice(2)}
                  </div>
                  <div className="glass-card p-4 flex-1 hover:-translate-y-0.5 transition-transform duration-300">
                    <div className={`text-xs font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-0.5`}>
                      {item.year} · {item.org}
                    </div>
                    <div className="text-white font-semibold text-sm">{item.title}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
