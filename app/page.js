"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useInView, animate } from "framer-motion";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { work, stack, certs, moreCerts, journey } from "./data";

const sans = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"], display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], display: "swap" });

/* Graded to one red and one deep green, like a film grade */
const BG = "#0A0B0A";
const INK = "#ECE8DF";
const MUTED = "#7C7F76";
const RED = "#E5341D";
const GREEN = "#1F5A43";
const LINE = "rgba(236,232,223,0.14)";

const EMAIL = "aaryasharadvaidya.10@gmail.com";

/* ── helpers ───────────────────────────────────────────── */
function Label({ children, className = "" }) {
  return (
    <span className={`${mono.className} text-[11px] uppercase tracking-[0.14em] ${className}`} style={{ color: MUTED }}>
      {children}
    </span>
  );
}

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Section header styled like a slate: SEQ. 02 ........ TC */
function Seq({ n, title, right }) {
  return (
    <div className="flex items-end justify-between border-t pt-4 mb-10 md:mb-16" style={{ borderColor: LINE }}>
      <div className="flex gap-4 items-baseline">
        <Label>SEQ. {n}</Label>
        <Label className="hidden sm:inline">{title}</Label>
      </div>
      <Label>{right}</Label>
    </div>
  );
}

function Timecode() {
  const [tc, setTc] = useState("00:00:00:00");
  useEffect(() => {
    const t0 = performance.now();
    const id = setInterval(() => {
      const ms = performance.now() - t0;
      const f = Math.floor((ms / 1000) * 24) % 24;
      const s = Math.floor(ms / 1000) % 60;
      const m = Math.floor(ms / 60000) % 60;
      const p = (n) => String(n).padStart(2, "0");
      setTc(`00:${p(m)}:${p(s)}:${p(f)}`);
    }, 42);
    return () => clearInterval(id);
  }, []);
  return <span>{tc}</span>;
}

function Clock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const tick = () =>
      setT(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata" }).format(new Date()));
    tick();
    const id = setInterval(tick, 10000);
    return () => clearInterval(id);
  }, []);
  return <span>{t} IST</span>;
}

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.6, ease: [0.16, 1, 0.3, 1], onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

/* Cursor that grows into a label over cards */
function Cursor() {
  const [on, setOn] = useState(false);
  const [label, setLabel] = useState("");
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 260, damping: 24, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 260, damping: 24, mass: 0.4 });
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setOn(true);
    const move = (e) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e) => {
      const el = e.target.closest("[data-cursor], a, button");
      setLabel(el ? el.getAttribute("data-cursor") || "" : "");
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, [x, y]);
  if (!on) return null;
  const big = label.length > 0;
  return (
    <motion.div style={{ x: sx, y: sy }} className="fixed top-0 left-0 z-[9999] pointer-events-none">
      <motion.div
        animate={{ width: big ? 84 : 14, height: big ? 84 : 14 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className={`${mono.className} -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-[10px] uppercase tracking-wider`}
        style={{ background: RED, color: INK, mixBlendMode: big ? "normal" : "difference" }}
      >
        {big ? label : ""}
      </motion.div>
    </motion.div>
  );
}

/* ── Filmstrip of projects, scrolls sideways while the page scrolls down ── */
function Filmstrip() {
  const section = useRef(null);
  const track = useRef(null);
  const [dist, setDist] = useState(0);
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const measure = () => setDist(Math.max(0, track.current.scrollWidth - window.innerWidth + 48));
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section id="works" ref={section} style={{ height: `calc(100vh + ${dist}px)` }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div className="px-5 md:px-10 mb-6 flex items-end justify-between">
          <div>
            <Label>SEQ. 02 / SELECTED WORKS</Label>
            <h2 className={`${sans.className} font-bold uppercase leading-[0.9] mt-3 text-[clamp(2.2rem,6vw,5rem)]`}>
              Works<span style={{ color: RED }}>.</span> <span style={{ color: MUTED }}>14 frames</span>
            </h2>
          </div>
          <Label className="hidden md:block">KEEP SCROLLING ↓ DRAGS THE REEL →</Label>
        </div>

        <motion.div ref={track} style={{ x }} className="flex gap-4 md:gap-5 px-5 md:px-10 w-max">
          {work.map((w, i) => (
            <a
              key={w.no}
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Open"
              className="group relative shrink-0 w-[80vw] sm:w-[360px] h-[58vh] md:h-[62vh] min-h-[400px] flex flex-col justify-between p-5 md:p-6 border overflow-hidden transition-colors duration-500"
              style={{ borderColor: LINE, background: i % 2 ? "#0E1311" : "#0C0D0C" }}
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(120% 80% at 80% 0%, ${GREEN}88, transparent 60%)` }}
              />
              <div className="relative flex items-center justify-between">
                <Label>FR {w.no} · SC {i + 1}A, TK 1</Label>
                <Label>{w.year}</Label>
              </div>
              <div className="relative">
                <div className={`${mono.className} text-[11px] uppercase tracking-wider mb-3`} style={{ color: RED }}>[ {w.tag} ]</div>
                <h3 className={`${sans.className} font-bold uppercase leading-[0.95] text-2xl md:text-[1.7rem]`}>{w.title}</h3>
                <p className={`${sans.className} text-[13px] leading-relaxed mt-4 line-clamp-5 group-hover:line-clamp-none`} style={{ color: "rgba(236,232,223,0.68)" }}>
                  {w.blurb}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {w.stack.map((s) => (
                    <span key={s} className={`${mono.className} text-[10px] px-2 py-1 border uppercase`} style={{ borderColor: LINE, color: MUTED }}>{s}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </motion.div>

        <div className="mx-5 md:mx-10 mt-6 h-px relative" style={{ background: LINE }}>
          <motion.div style={{ width: bar, background: RED }} className="absolute inset-y-0 left-0 h-px" />
        </div>
      </div>
    </section>
  );
}

/* ── Page ──────────────────────────────────────────────── */
export default function Cinema() {
  const hero = useRef(null);
  const { scrollYProgress } = useScroll({ target: hero, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const tape = [...stack.flatMap((g) => g.items.slice(0, 4)), "Security audits", "Row-Level Security"];

  return (
    <main className={`${sans.className} relative`} style={{ background: BG, color: INK }}>
      <Cursor />

      {/* film grain */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[60] opacity-[0.07] mix-blend-screen"
        style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")" }}
      />

      {/* nav */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 md:px-10 py-4 mix-blend-difference">
        <a href="#top" data-cursor="Top" className={`${mono.className} text-xs uppercase tracking-[0.14em]`}>Aarya Vaidya ®</a>
        <nav className={`${mono.className} hidden md:flex gap-8 text-xs uppercase tracking-[0.14em]`}>
          {[["Works", "works", "01"], ["Stack", "stack", "02"], ["About", "about", "03"], ["Contact", "contact", "04"]].map(([l, id, n]) => (
            <a key={id} href={`#${id}`} className="hover:opacity-60 transition-opacity">{l} <sup>{n}</sup></a>
          ))}
        </nav>
        <a href={`mailto:${EMAIL}`} className={`${mono.className} text-xs uppercase tracking-[0.14em] px-4 py-2 border border-current`}>Hire me →</a>
      </header>

      {/* hero */}
      <section id="top" ref={hero} className="relative min-h-screen overflow-hidden flex flex-col justify-between px-5 md:px-10 pt-24 pb-8">
        <motion.div aria-hidden style={{ y: glowY }} className="absolute inset-0">
          <div className="absolute -top-1/4 -right-1/4 w-[80vw] h-[80vw] rounded-full blur-3xl opacity-50" style={{ background: `radial-gradient(circle, ${GREEN}, transparent 65%)` }} />
          <div className="absolute -bottom-1/3 -left-1/4 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-40" style={{ background: `radial-gradient(circle, ${RED}, transparent 65%)` }} />
        </motion.div>

        {/* portrait, framed like a camera viewfinder */}
        <motion.figure
          style={{ y: glowY, opacity: fade }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block absolute right-[4vw] top-[11vh] w-[min(56vh,33vw)] aspect-[9/14] z-0"
        >
          <img src="/aarya.jpg" alt="Aarya Vaidya" className="w-full h-full object-cover object-top" style={{ filter: "grayscale(0.35) contrast(1.05)" }} />
          <div aria-hidden className="absolute inset-0" style={{ background: `linear-gradient(to top, ${BG}cc, transparent 45%), linear-gradient(120deg, ${GREEN}55, transparent 60%)` }} />
          {[["top-2 left-2", "border-t border-l"], ["top-2 right-2", "border-t border-r"], ["bottom-2 left-2", "border-b border-l"], ["bottom-2 right-2", "border-b border-r"]].map(([pos, b]) => (
            <span key={pos} className={`absolute w-4 h-4 ${pos} ${b}`} style={{ borderColor: INK }} />
          ))}
          <figcaption className={`${mono.className} absolute -bottom-6 left-0 text-[10px] uppercase tracking-[0.14em]`} style={{ color: MUTED }}>FIG. 01 · AARYA VAIDYA, ON SET</figcaption>
        </motion.figure>

        <motion.div style={{ opacity: fade }} className="relative flex justify-between">
          <div className="space-y-1">
            <Label>PUNE, IN · OPEN TO RELOCATE ANYWHERE</Label><br />
            <Label>AI ENGINEERING · SECURITY · AGENTS</Label>
          </div>
        </motion.div>

        <motion.div style={{ y: titleY, opacity: fade }} className="relative md:w-[60%]">
          <h1 className="font-bold uppercase leading-[0.86] tracking-[-0.03em] text-[clamp(3rem,15vw,5rem)] md:text-[clamp(2.4rem,7vw,9rem)]">
            Production AI,<br />
            built <span style={{ color: RED }}>&amp;</span> secured.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: "rgba(236,232,223,0.72)" }}>
            I am Aarya, a final-year B.Tech (AI/ML) student and AI Engineering Intern at OyeLabs.
            I build LLM systems that run in production, and I audit them before someone else does.
            Graduating May 2027.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#works" data-cursor="View" className={`${mono.className} text-xs uppercase tracking-[0.14em] px-6 py-3.5`} style={{ background: INK, color: BG }}>View the work ↗</a>
            <a href={`mailto:${EMAIL}`} data-cursor="Mail" className={`${mono.className} text-xs uppercase tracking-[0.14em] px-6 py-3.5 border`} style={{ borderColor: INK }}>Start a conversation</a>
            <a href="/Aarya_Resume.pdf" download data-cursor="PDF" className={`${mono.className} text-xs uppercase tracking-[0.14em] px-6 py-3.5 border`} style={{ borderColor: LINE, color: MUTED }}>Resume</a>
          </div>
        </motion.div>

        <motion.div style={{ opacity: fade }} className="relative flex items-end justify-between">
          <Label>TC <Timecode /></Label>
          <Label>SCROLL TO ENTER ↓</Label>
          <Label className="hidden sm:block">MODEL: CLAUDE / GROQ / BEDROCK · 24 FPS</Label>
        </motion.div>
      </section>

      {/* marquee */}
      <section className="border-y overflow-hidden py-5" style={{ borderColor: LINE }}>
        <motion.div
          className={`${sans.className} flex w-max gap-10 text-3xl md:text-5xl font-bold uppercase whitespace-nowrap`}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        >
          {[...tape, ...tape].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              <span style={{ color: i % 3 === 0 ? RED : INK, opacity: i % 3 === 0 ? 1 : 0.85 }}>{t}</span>
              <span style={{ color: MUTED }}>+</span>
            </span>
          ))}
        </motion.div>
      </section>

      {/* numbers */}
      <section className="px-5 md:px-10 py-20 md:py-28">
        <Seq n="01" title="BY THE NUMBERS" right="MEASURED, NOT CLAIMED" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
          {[
            { n: 17, s: "x", l: "Faster financial answers", d: "1,950ms to 115ms in Jenna" },
            { n: 185, s: "", l: "Findings in a security audit", d: "4 verified as fail-first tests" },
            { n: 19, s: "", l: "Live n8n workflows", d: "RAG, agents, WhatsApp, voice" },
            { n: 93, s: "%", l: "Auth latency cut", d: "15ms to under 1ms in DreamHome" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="text-[clamp(3.5rem,9vw,8rem)] font-bold leading-none tracking-[-0.04em]"><Counter to={s.n} suffix={s.s} /></div>
              <div className="mt-3 text-sm font-medium">{s.l}</div>
              <Label>{s.d}</Label>
            </Reveal>
          ))}
        </div>
      </section>

      <Filmstrip />

      {/* stack */}
      <section id="stack" className="px-5 md:px-10 py-24 md:py-32">
        <Seq n="03" title="CORE / FOCUS" right="TOOLS OF THE TRADE" />
        <div className="grid md:grid-cols-2 gap-x-16">
          {stack.map((g, i) => (
            <Reveal key={g.group} delay={(i % 2) * 0.08}>
              <div className="border-t py-6" style={{ borderColor: LINE }}>
                <div className="flex gap-4 items-baseline mb-4">
                  <Label>{String(i + 1).padStart(2, "0")}</Label>
                  <h3 className="text-2xl md:text-3xl font-bold uppercase">{g.group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className={`${mono.className} text-[11px] px-2.5 py-1.5 border uppercase`} style={{ borderColor: LINE, color: "rgba(236,232,223,0.78)" }}>{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* about */}
      <section id="about" className="px-5 md:px-10 py-24 md:py-32">
        <Seq n="04" title="THE STUDIO" right="PUNE, IN · 18.52N 73.85E" />
        <div className="grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-7">
            <p className="text-[clamp(1.6rem,3.4vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em]">
              I turn messy ideas into systems that survive <span style={{ color: RED }}>real users</span>: grounded RAG,
              multi-agent automation, Postgres row-level security and security audits.
            </p>
            <p className="mt-8 max-w-xl leading-relaxed" style={{ color: "rgba(236,232,223,0.7)" }}>
              I am looking for internships and graduate AI/ML or security roles, anywhere in the world.
              Available remotely now and full-time from mid-2027, open to relocation and visa sponsorship.
            </p>
          </Reveal>
          <div className="md:col-span-5">
            <Reveal className="relative mb-10 aspect-[4/5] overflow-hidden">
              <img src="/aarya.jpg" alt="Aarya Vaidya" className="w-full h-full object-cover object-top" style={{ filter: "grayscale(0.35) contrast(1.05)" }} />
              <div aria-hidden className="absolute inset-0" style={{ background: `linear-gradient(to top, ${BG}aa, transparent 50%)` }} />
              <span className={`${mono.className} absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.14em]`}>FIG. 01 · AARYA VAIDYA, AI ENGINEER</span>
            </Reveal>
            <Label>CALL SHEET</Label>
            {journey.map((j) => (
              <Reveal key={j.org + j.year}>
                <div className="border-t py-5 mt-3" style={{ borderColor: LINE }}>
                  <div className="flex justify-between"><span className="font-medium">{j.role}</span><Label>{j.year}</Label></div>
                  <div className="text-sm mt-1" style={{ color: MUTED }}>{j.org}</div>
                  <div className="text-sm mt-1" style={{ color: "rgba(236,232,223,0.6)" }}>{j.note}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* credits / certs */}
      <section className="px-5 md:px-10 py-24 md:py-32">
        <Seq n="05" title="SELECTED CREDITS" right={`${certs.length} VERIFIED`} />
        <div>
          {certs.map((c) => {
            const Tag = c.href ? "a" : "div";
            return (
              <Tag
                key={c.name}
                {...(c.href ? { href: c.href, target: "_blank", rel: "noopener noreferrer", "data-cursor": "Verify" } : {})}
                className="group grid grid-cols-12 gap-4 items-baseline border-t py-4 md:py-5 transition-colors hover:bg-white/[0.03]"
                style={{ borderColor: LINE }}
              >
                <Label className="col-span-2 md:col-span-1">{c.year}</Label>
                <span className="col-span-10 md:col-span-7 font-medium group-hover:translate-x-2 transition-transform duration-300">{c.name}</span>
                <span className="col-span-12 md:col-span-3 text-sm" style={{ color: MUTED }}>{c.org}</span>
                <span className="hidden md:block col-span-1 text-right" style={{ color: c.href ? RED : MUTED }}>{c.href ? "↗" : ""}</span>
              </Tag>
            );
          })}
          <div className="border-t pt-5 text-sm" style={{ borderColor: LINE, color: MUTED }}>{moreCerts}</div>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="relative px-5 md:px-10 pt-24 pb-10 overflow-hidden">
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3" style={{ background: `radial-gradient(70% 100% at 50% 100%, ${GREEN}66, transparent)` }} />
        <div className="relative">
          <Seq n="06" title="LET'S ROLL" right="NOW BOOKING · REMOTE NOW, FULL-TIME FROM MID-2027" />
          <a href={`mailto:${EMAIL}`} data-cursor="Mail" className="block font-bold uppercase leading-[0.86] tracking-[-0.03em] text-[clamp(3rem,12vw,12rem)] hover:opacity-80 transition-opacity">
            Let&apos;s <span style={{ color: RED }}>roll</span> ↗
          </a>
          <p className="mt-6" style={{ color: "rgba(236,232,223,0.72)" }}>
            Building something hard in AI or security? I would like to be on the crew.
          </p>

          <footer className={`${mono.className} mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs uppercase tracking-[0.12em]`}>
            <div><Label>(00) Studio</Label><p className="mt-2 leading-relaxed" style={{ color: "rgba(236,232,223,0.7)" }}>Aarya Vaidya, AI/ML engineer. Production AI, built and secured.</p></div>
            <div><Label>(N) Index</Label>
              <ul className="mt-2 space-y-1">{["works", "stack", "about", "contact"].map((l) => <li key={l}><a href={`#${l}`} className="hover:text-white">{l}</a></li>)}</ul>
            </div>
            <div><Label>(L) Location</Label><p className="mt-2">Pune, India<br /><Clock /></p></div>
            <div><Label>(S) Elsewhere</Label>
              <ul className="mt-2 space-y-1">
                <li><a href="https://github.com/rajaaryan779" target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
                <li><a href="https://linkedin.com/in/aarya-vaidya-013227211" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
                <li><a href={`mailto:${EMAIL}`}>Email ↗</a></li>
              </ul>
            </div>
          </footer>
          <div className={`${mono.className} mt-10 flex justify-between text-[11px] uppercase tracking-[0.14em]`} style={{ color: MUTED }}>
            <span>© 2026 Aarya Vaidya</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </section>
    </main>
  );
}
