'use client';
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function ScrollScaleRevealEffect({ children, delay, className="" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  return (
    <motion.div
      className={`${className} relative`}
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.5 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.5 }}
      transition={{ duration: 0.3, ease: [0.17, 0.55, 0.55, 1], delay: delay || 0 }}
    >
      {children}
    </motion.div>
  );
}
