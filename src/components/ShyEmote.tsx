"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
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
    const handleMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const shyRadius = 400;
      const fleeStrength = 40;
      if (dist < shyRadius) {
        const force = (1 - dist / shyRadius) * fleeStrength;
        x.set((-dx / dist) * force);
        y.set((-dy / dist) * force);
      } else {
        x.set(0);
        y.set(0);
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        ref={ref}
        className="emote rounded-full bg-orange-400 w-30 h-30 lg:w-45 lg:h-45 cursor-pointer"
        style={{ x: springX, y: springY }}
        whileHover={{ scale: 1.4 }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full"
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
            className="lg:opacity-0 opacity-100 w-full h-full rounded-full"
          >
            <motion.h2
              whileHover={{ x: 300 }}
              className="text-2xl lg:text-4xl absolute w-full font-bold bg-amber-300 border-4 border-amber-300 top-0 text-center rounded-4xl"
            >
              {title}
            </motion.h2>
            <Image
              className={imageClassName}
              src={src}
              alt={src}
              width={10}
              height={10}
            />
          </motion.div>
        </a>
      </motion.div>
    </motion.div>
  );
}
