"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contactLinks = [
  { label: "Email",    value: "aaryasharadvaidya.10@gmail.com", href: "mailto:aaryasharadvaidya.10@gmail.com", color: "from-purple-500 to-pink-500",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
  { label: "LinkedIn", value: "linkedin.com/in/aarya-vaidya", href: "https://linkedin.com/in/aarya-vaidya-013227211", color: "from-cyan-500 to-blue-500",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
  { label: "GitHub",   value: "github.com/rajaaryan779", href: "https://github.com/rajaaryan779", color: "from-slate-400 to-slate-600",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" /></svg> },
  { label: "Fiverr",   value: "fiverr.com/rajaaryan779", href: "https://www.fiverr.com/rajaaryan779", color: "from-green-500 to-emerald-500",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.168c.078.67.624.99 1.287.99.468 0 .84-.156 1.114-.48l1.2.84c-.528.702-1.337 1.08-2.34 1.08-1.793 0-2.892-1.156-2.892-2.567 0-1.425 1.123-2.57 2.748-2.57 1.56 0 2.625 1.123 2.625 2.57 0 .2-.02.39-.574.137zm-3.132-.782h1.685c-.097-.624-.527-.936-1.014-.936-.547 0-.977.332-1.07.936zM6.386 11.368H7.98v4.874H6.386v-.516c-.37.438-.878.654-1.504.654-1.366 0-2.45-1.115-2.45-2.57 0-1.455 1.084-2.568 2.45-2.568.625 0 1.134.215 1.504.653v-.527zm0 2.44c0-.742-.566-1.27-1.226-1.27-.67 0-1.224.528-1.224 1.27 0 .74.554 1.27 1.224 1.27.66 0 1.226-.53 1.226-1.27zM0 14.906h1.756v-6.26H0v6.26z"/></svg> },
];

export default function Contact() {
  const { ref, inView }   = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm]   = useState({ name: "", email: "", message: "" });
  const [sent, setSent]   = useState(false);
  const [focused, setFoc] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sub  = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:aaryasharadvaidya.10@gmail.com?subject=${sub}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-padding relative bg-[#08080f]">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div animate={{ x: [0,30,0], y:[0,-20,0] }} transition={{ duration:14, repeat:Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-violet-700/10 blur-[120px]" />
        <motion.div animate={{ x:[0,-20,0], y:[0,30,0] }} transition={{ duration:18, repeat:Infinity, delay:3 }}
          className="absolute top-0 left-0 w-80 h-80 rounded-full bg-cyan-600/8 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Big headline */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-20"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-400">Contact</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mt-4 leading-[0.95] max-w-4xl">
            Let&apos;s build something{" "}
            <span className="gradient-text">remarkable.</span>
          </h2>
          <p className="text-[#50506a] text-lg mt-6 max-w-xl">
            Open to full-time global roles, freelance projects, and collaborations.
            Currently based in Pune, India — open to relocation worldwide.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl">

          {/* Left — links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex flex-col gap-3 mb-8">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.09 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 glass-card hover:border-white/[0.14] transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white flex-shrink-0`}>
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-[#40406a] text-xs font-semibold uppercase tracking-wider">{link.label}</div>
                    <div className="text-white text-sm font-medium mt-0.5">{link.value}</div>
                  </div>
                  <div className="ml-auto text-[#40406a]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-[#50506a] text-sm"
            >
              <span>📍</span> Pune, Maharashtra, India
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="glass-card p-8 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 rounded-t-2xl" />

              <h3 className="text-white font-bold text-xl mb-6">Send a message</h3>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12"
                  >
                    <div className="text-5xl mb-4">🎉</div>
                    <div className="text-white font-bold text-lg mb-2">Message sent!</div>
                    <div className="text-[#50506a] text-sm">Your email client should have opened. Talk soon!</div>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { key: "name",    label: "Name",    type: "text",  ph: "Your name",          color: "rgba(139,92,246,0.4)" },
                      { key: "email",   label: "Email",   type: "email", ph: "your@email.com",     color: "rgba(6,182,212,0.4)"  },
                    ].map(({ key, label, type, ph, color }) => (
                      <div key={key}>
                        <label className="text-[#50506a] text-sm font-medium block mb-2">{label}</label>
                        <motion.div
                          animate={{ boxShadow: focused === key ? `0 0 0 2px ${color}` : "0 0 0 1px rgba(255,255,255,0.07)" }}
                          className="rounded-xl overflow-hidden"
                        >
                          <input
                            type={type} required value={form[key]}
                            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                            onFocus={() => setFoc(key)} onBlur={() => setFoc(null)}
                            placeholder={ph}
                            className="w-full bg-white/[0.04] text-white placeholder-[#40406a] px-4 py-3 outline-none text-sm"
                          />
                        </motion.div>
                      </div>
                    ))}

                    <div>
                      <label className="text-[#50506a] text-sm font-medium block mb-2">Message</label>
                      <motion.div
                        animate={{ boxShadow: focused === "message" ? "0 0 0 2px rgba(236,72,153,0.4)" : "0 0 0 1px rgba(255,255,255,0.07)" }}
                        className="rounded-xl overflow-hidden"
                      >
                        <textarea
                          required rows={4} value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          onFocus={() => setFoc("message")} onBlur={() => setFoc(null)}
                          placeholder="Tell me about your project or opportunity..."
                          className="w-full bg-white/[0.04] text-white placeholder-[#40406a] px-4 py-3 outline-none text-sm resize-none"
                        />
                      </motion.div>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-pink-500 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-violet-600/20 hover:shadow-violet-500/30 transition-all duration-300"
                    >
                      Send Message →
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-28 pb-4"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-16 bg-white/[0.05]" />
            <span className="gradient-text font-black text-lg">Aarya Vaidya</span>
            <div className="h-px w-16 bg-white/[0.05]" />
          </div>
          <p className="text-[#30305a] text-sm">Built with Next.js · Tailwind CSS · Framer Motion</p>
        </motion.div>
      </div>
    </section>
  );
}
