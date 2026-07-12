"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const rx = useSpring(mx, { stiffness: 160, damping: 18, mass: 0.4 });
  const ry = useSpring(my, { stiffness: 160, damping: 18, mass: 0.4 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setMounted(true);

    const onMove = (e) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      setDotPos({ x: e.clientX, y: e.clientY });
    };
    const onOver = (e) => {
      setIsHover(!!e.target.closest("a, button, [role='button'], [data-hover]"));
    };
    const onDown = () => setIsClick(true);
    const onUp = () => setIsClick(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [mx, my]);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: rx, y: ry }}
      >
        <motion.div
          animate={{
            width: isClick ? 20 : isHover ? 48 : 30,
            height: isClick ? 20 : isHover ? 48 : 30,
            backgroundColor: isHover ? "rgba(124,58,237,0.12)" : "transparent",
            borderColor: isHover ? "#7c3aed" : "rgba(124,58,237,0.5)",
          }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          className="rounded-full border-2 -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>

      <div
        className="fixed top-0 left-0 w-[7px] h-[7px] rounded-full bg-violet-600 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate(${dotPos.x - 3.5}px, ${dotPos.y - 3.5}px)`,
        }}
      />
    </>
  );
}
