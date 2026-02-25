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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bg-zinc-400/10 p-2 rounded-full hover:bg-zinc-400/40"
        >
          {children}
        </motion.button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{content}</p>
      </TooltipContent>
    </Tooltip>
  );
}
