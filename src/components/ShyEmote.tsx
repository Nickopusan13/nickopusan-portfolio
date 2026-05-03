"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

export function ShyEmote({
  src,
  className,
  imageClassName,
  link,
  title,
}: {
  src: string;
  className?: string;
  imageClassName?: string;
  link: string;
  title: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 12 });
  const springY = useSpring(y, { stiffness: 120, damping: 12 });
  useEffect(() => {
    let frame: number | null = null;

    const handleMove = (e: MouseEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        const shyRadius = 300;
        const fleeStrength = 42;
        if (dist < shyRadius && dist > 1) {
          const force = (1 - dist / shyRadius) * fleeStrength;
          x.set((-dx / dist) * force);
          y.set((-dy / dist) * force);
        } else {
          x.set(0);
          y.set(0);
        }
      });
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMove);
    };
  }, [x, y]);
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        ref={ref}
        className="emote rounded-full bg-orange-400 w-32 h-32 md:w-40 md:h-40 cursor-pointer flex items-center justify-center relative"
        style={{ x: springX, y: springY }}
        whileHover={{ scale: 1.4 }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full flex items-center justify-center"
          href={link}
        >
          <motion.div
            whileHover={{ opacity: 1, x: 20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              ease: "easeIn",
            }}
            className="opacity-100 md:opacity-0 w-full h-full rounded-full flex flex-col items-center justify-center relative"
          >
            <motion.h2
              className="text-xl md:text-3xl absolute -top-3 font-bold bg-amber-300 border-4 border-amber-300 px-5 py-1.5 text-center rounded-full z-10 shadow-md"
              whileHover={{ x: 12, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {title}
            </motion.h2>
            <Image
              className={`object-contain ${imageClassName}`}
              src={src}
              alt={title}
              width={160}
              height={160}
            />
          </motion.div>
        </a>
      </motion.div>
    </motion.div>
  );
}
