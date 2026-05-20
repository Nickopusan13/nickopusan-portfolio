"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useMediaQuery } from "@/utils/useMediaQuery";
import Link from "next/link";

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
  const isMobile = useMediaQuery();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 12 });
  const springY = useSpring(y, { stiffness: 120, damping: 12 });
  useEffect(() => {
    if (isMobile) return;
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
  }, [x, y, isMobile]);
  return (
    <motion.div
      className={`lg:absolute ${className}`}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        ref={ref}
        className="emote rounded-full bg-orange-400 w-30 h-30 md:w-40 md:h-40 cursor-pointer flex items-center justify-center relative"
        style={isMobile ? undefined : { x: springX, y: springY }}
        whileHover={isMobile ? undefined : { scale: 1.4 }}
      >
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full flex items-center justify-center"
          href={link}
        >
          <motion.div
            whileHover={isMobile ? undefined : { opacity: 1, x: 20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              ease: "easeIn",
            }}
            className="opacity-100 lg:opacity-0 w-full h-full rounded-full flex flex-col items-center justify-center relative"
          >
            <motion.h2
              className="text-xl md:text-3xl absolute -top-3 font-bold bg-amber-300 border-4 border-amber-300 px-10 py-1.5 lg:px-5 text-center rounded-full z-10 shadow-md"
              whileHover={isMobile ? undefined : { x: 12, scale: 1.05 }}
              transition={
                isMobile
                  ? undefined
                  : { type: "spring", stiffness: 300, damping: 20 }
              }
            >
              {title}
            </motion.h2>
            <Image
              className={`object-contain lg:${imageClassName}`}
              src={src}
              alt={title}
              width={160}
              height={160}
              loading="eager"
            />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
