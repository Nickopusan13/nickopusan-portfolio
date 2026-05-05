"use client";

import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "motion/react";

export function NextPrevBtn({
  onClick,
  children,
  content,
}: {
  onClick: () => void;
  children: ReactNode;
  content: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.button
          onClick={onClick}
          whileHover={{
            scale: 1.08,
            y: -3,
            rotate: -10,
            boxShadow: "6px 6px 0px #000",
          }}
          whileTap={{
            scale: 0.92,
            x: 2,
            y: 2,
            boxShadow: "1px 1px 0px #000",
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 18,
          }}
          whileInView={{ boxShadow: "3px 3px 0px #000" }}
          className="bg-amber-300 rounded-full p-2 text-black overflow-hidden border-2 border-black"
        >
          {children}
        </motion.button>
      </TooltipTrigger>
      <TooltipContent className="hidden border-2 border-black bg-amber-300 font-black text-black shadow-[4px_4px_0px_#000] lg:block">
        <p>{content}</p>
      </TooltipContent>
    </Tooltip>
  );
}
