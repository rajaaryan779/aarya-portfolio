"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const timeline = [
  {
    year: "2021",
    title: "Started Diploma in AI/ML",
    org: "K.K. Wagh Polytechnic, Nashik",
    desc: "Began my journey into Artificial Intelligence and Machine Learning.",
    color: "from-purple-500 to-pink-500",
    glow: "shadow-purple-500/30",
  },
  {
    year: "2024",
    title: "AI Learning Program Intern",
    org: "Teachnook",
    desc: "Completed intensive AI/ML training covering deep learning, NLP, and built projects with Python, Scikit-learn, and TensorFlow.",
    color: "from-pink-500 to-orange-500",
    glow: "shadow-pink-500/30",
  },
  {
    year: "2024",
    title: "B.Tech CSE — AI/ML Specialization",
    org: "Pimpri Chinchwad University",
    desc: "Pursuing B.Tech in Computer Science with specialization in AI and Machine Learning.",
    color: "from-cyan-500 to-blue-500",
    glow: "shadow-cyan-500/30",
  },
  {
    year: "2025",
    title: "AI Intern — Stock Price Prediction",
    org: "Elevate Labs",
    desc: "Developed end-to-end ML forecasting system using time series analysis on real-world financial datasets.",
    color: "from-green-400 to-cyan-500",
    glow: "shadow-green-500/30",
  },
];

function TimelineItem({ item, index }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex gap-6"
    >
      {/* Dot + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg ${item.glow} text-white text-xs font-bold`}
        >
          {item.year.slice(2)}
        </div>
        <div className="w-px flex-1 bg-gradient-to-b from-white/10 to-transparent mt-2" />
      </div>

      {/* Content */}
      <div className="pb-10 group">
        <div className="glass-card p-5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div
            className={`text-xs font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}
          >
            {item.year} · {item.org}
          </div>
          <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            The person behind the{" "}
            <span className="gradient-text">code</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I&apos;m an AI/ML engineer who loves turning complex ideas into working systems.
            From building neural networks to designing multi-agent automation pipelines.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — about text + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-card p-8 mb-6">
              <h3 className="text-white font-bold text-xl mb-4">
                Who I Am
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                I&apos;m a B.Tech CSE student at Pimpri Chinchwad University, specializing
                in Artificial Intelligence and Machine Learning. My work spans
                sentiment analysis, image classification, stock price prediction,
                and complex multi-agent automation systems.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I&apos;m passionate about building{" "}
                <span className="text-purple-400 font-medium">production-grade</span> AI
                systems that don&apos;t just work in notebooks — they solve real problems
                at scale. Whether that&apos;s a RAG pipeline, a Telegram bot with per-user
                memory, or a multi-workflow automation suite.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "AI Projects Built", value: "4+", color: "from-purple-500 to-pink-500", glow: "hover:glow-purple" },
                { label: "Automation Workflows", value: "19", color: "from-cyan-500 to-blue-500", glow: "hover:glow-cyan" },
                { label: "Model Accuracy", value: "85%+", color: "from-green-400 to-cyan-500", glow: "" },
                { label: "Tech Tools Used", value: "25+", color: "from-orange-400 to-pink-500", glow: "" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="glass-card p-5 text-center hover:border-white/15 transition-all cursor-default"
                >
                  <div
                    className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-xl mb-8">My Journey</h3>
            <div>
              {timeline.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
