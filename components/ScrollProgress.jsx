"use client";
import { useScroll, useSpring, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 280, damping: 30 });

  return (
    <motion.div
      style={{
        scaleX,
        background: "linear-gradient(to right, #7c3aed, #ec4899, #06b6d4)",
        boxShadow: "0 0 12px rgba(124,58,237,0.7), 0 0 24px rgba(236,72,153,0.3)",
      }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[9998] origin-left"
    />
  );
}
