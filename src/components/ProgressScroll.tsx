"use client";

import { motion, useScroll } from "motion/react";

export default function ProgressScroll() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed left-0 top-0 h-0.75 w-full bg-red-500 z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
