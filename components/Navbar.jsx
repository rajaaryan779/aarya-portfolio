"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About",   href: "#about"    },
  { label: "Work",    href: "#projects" },
  { label: "Skills",  href: "#skills"   },
  { label: "Contact", href: "#contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const ids = ["about", "projects", "skills", "contact"];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#08080f]/90 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.a href="#" whileHover={{ scale: 1.05 }} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-black text-xs shadow-lg shadow-violet-600/30">
              AV
            </div>
            <span className="font-bold text-white text-base tracking-tight">
              Aarya<span className="text-violet-400">.</span>
            </span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  active === link.href.slice(1)
                    ? "text-violet-400"
                    : "text-[#70708a] hover:text-white"
                }`}
              >
                {active === link.href.slice(1) && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-0 bg-violet-500/10 rounded-lg border border-violet-500/20"
                  />
                )}
                <span className="relative">{link.label}</span>
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-5 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-violet-600/20"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="w-5 h-0.5 bg-white block" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-5 h-0.5 bg-white block" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="w-5 h-0.5 bg-white block" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a14]/95 backdrop-blur-xl border-t border-white/[0.06]"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-4 text-[#70708a] hover:text-white hover:bg-white/[0.04] rounded-lg transition-all font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                onClick={() => setMenuOpen(false)}
                className="mt-2 py-3 px-4 text-center rounded-lg bg-violet-600 text-white font-semibold"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
