"use client";

import Link from "next/link";
import { motion } from "motion/react";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  classname?: string;
}

const MotionLink = motion.create(Link);

export function AnimatedLink({ href, children, classname }: AnimatedLinkProps) {
  return (
    <MotionLink
      initial="rest"
      whileHover="hover"
      animate="rest"
      href={href}
      className={`relative inline-block w-fit ${classname}`}
    >
      <span className="relative">
        {children}
        <motion.span
          className="absolute left-0 bottom-0 h-0.5 bg-white w-full"
          variants={{
            rest: { scaleX: 0 },
            hover: { scaleX: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ originX: 0 }}
        />
      </span>
    </MotionLink>
  );
}
