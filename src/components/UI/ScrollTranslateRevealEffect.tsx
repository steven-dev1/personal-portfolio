'use client';
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function ScrollTranslateRevealEffect({ children, delay, className="", side="left" }: { children: React.ReactNode; delay?: number; className?: string; side?: "left" | "right" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  return (
    <motion.div
      className={`${className} relative`}
      ref={ref}
      initial={{ opacity: 0, translateX: side === "left" ? -100 : 100 }}
      animate={isInView ? { opacity: 1, translateX: 0 } : { opacity: 0, translateX: side === "left" ? -100 : 100 }}
      transition={{ duration: 0.4, ease: [0.17, 0.55, 0.55, 1], delay: delay || 0 }}
    >
      {children}
    </motion.div>
  );
}