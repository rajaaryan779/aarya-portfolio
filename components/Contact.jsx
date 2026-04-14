"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contactLinks = [
  {
    label: "Email",
    value: "aaryasharadvaidya.10@gmail.com",
    href: "mailto:aaryasharadvaidya.10@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-purple-500 to-pink-500",
    glow: "hover:shadow-purple-500/40",
  },
  {
    label: "LinkedIn",
    value: "aarya-vaidya",
    href: "https://linkedin.com/in/aarya-vaidya",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "from-cyan-500 to-blue-500",
    glow: "hover:shadow-cyan-500/40",
  },
  {
    label: "GitHub",
    value: "rajaaryan779",
    href: "https://github.com/rajaaryan779",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
      </svg>
    ),
    color: "from-slate-400 to-slate-600",
    glow: "hover:shadow-slate-500/40",
  },
  {
    label: "Phone",
    value: "+91 8149904590",
    href: "tel:+918149904590",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: "from-green-400 to-emerald-500",
    glow: "hover:shadow-green-500/40",
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:aaryasharadvaidya.10@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, delay: 3 }}
          className="absolute top-0 left-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-300 text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Let's{" "}
            <span className="gradient-text">work together</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Open to internships, freelance projects, and collaborations.
            Drop a message and I'll get back to you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left — contact links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-xl mb-2">Reach me directly</h3>
            <p className="text-slate-400 text-sm mb-8">
              Based in Pune, Maharashtra. Open to remote work anywhere.
            </p>

            <div className="flex flex-col gap-4">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 6, scale: 1.01 }}
                  className={`flex items-center gap-4 p-4 glass-card hover:border-white/15 transition-all duration-300 shadow-lg ${link.glow} hover:shadow-xl`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white flex-shrink-0`}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs font-medium uppercase tracking-wide">
                      {link.label}
                    </div>
                    <div className="text-white text-sm font-medium mt-0.5">
                      {link.value}
                    </div>
                  </div>
                  <div className="ml-auto text-slate-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-slate-400 text-sm"
            >
              <span className="text-base">📍</span>
              Pune, Maharashtra, India
            </motion.div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500" />

              <h3 className="text-white font-bold text-xl mb-6">Send a message</h3>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="text-5xl mb-4"
                    >
                      🎉
                    </motion.div>
                    <div className="text-white font-bold text-lg mb-2">Message sent!</div>
                    <div className="text-slate-400 text-sm">Your email client should have opened. Talk soon.</div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name */}
                    <div>
                      <label className="text-slate-400 text-sm font-medium block mb-2">
                        Name
                      </label>
                      <motion.div
                        animate={{
                          boxShadow:
                            focused === "name"
                              ? "0 0 0 2px rgba(139,92,246,0.5)"
                              : "0 0 0 1px rgba(255,255,255,0.08)",
                        }}
                        className="rounded-xl overflow-hidden"
                      >
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          placeholder="Your name"
                          className="w-full bg-white/5 text-white placeholder-slate-600 px-4 py-3 outline-none text-sm"
                        />
                      </motion.div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-slate-400 text-sm font-medium block mb-2">
                        Email
                      </label>
                      <motion.div
                        animate={{
                          boxShadow:
                            focused === "email"
                              ? "0 0 0 2px rgba(6,182,212,0.5)"
                              : "0 0 0 1px rgba(255,255,255,0.08)",
                        }}
                        className="rounded-xl overflow-hidden"
                      >
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          placeholder="your@email.com"
                          className="w-full bg-white/5 text-white placeholder-slate-600 px-4 py-3 outline-none text-sm"
                        />
                      </motion.div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-slate-400 text-sm font-medium block mb-2">
                        Message
                      </label>
                      <motion.div
                        animate={{
                          boxShadow:
                            focused === "message"
                              ? "0 0 0 2px rgba(236,72,153,0.5)"
                              : "0 0 0 1px rgba(255,255,255,0.08)",
                        }}
                        className="rounded-xl overflow-hidden"
                      >
                        <textarea
                          required
                          rows={4}
                          value={formState.message}
                          onChange={(e) =>
                            setFormState({ ...formState, message: e.target.value })
                          }
                          onFocus={() => setFocused("message")}
                          onBlur={() => setFocused(null)}
                          placeholder="Tell me about your project or opportunity..."
                          className="w-full bg-white/5 text-white placeholder-slate-600 px-4 py-3 outline-none text-sm resize-none"
                        />
                      </motion.div>
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
                    >
                      Send Message →
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="text-center mt-24 text-slate-600 text-sm"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="h-px w-16 bg-white/5" />
          <span className="gradient-text font-bold">Aarya Vaidya</span>
          <div className="h-px w-16 bg-white/5" />
        </div>
        <p>Built with Next.js · Tailwind CSS · Framer Motion</p>
      </motion.div>
    </section>
  );
}
