"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles } from "lucide-react";
import { ReactNode } from "react";

export default function AppDialog({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <AnimatePresence>
      {open && (
        <Dialog
          as="div"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          open={open}
          onClose={onClose}
        >
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
              scale: { duration: 0.3 },
            }}
            className="relative w-full max-w-4xl mx-auto"
          >
            <DialogPanel
              className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900
                         border border-slate-700/50 rounded-2xl shadow-2xl
                         p-6 sm:p-10 text-white backdrop-blur-xl 
                         overflow-y-auto max-h-[85vh] overflow-x-hidden 
                         scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-900"
            >
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-linear-to-r from-blue-500 via-violet-500 to-cyan-500 rounded-b-full"
                initial={{ width: 0 }}
                animate={{ width: "8rem" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <motion.div
                className="absolute top-4 left-4 text-blue-400/30"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-xl 
                          bg-slate-800/60 hover:bg-slate-700/80 
                          border border-slate-700/50 hover:border-slate-600/50
                          transition-all duration-300 group
                          shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <X className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
              </motion.button>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="relative z-0"
              >
                {children}
              </motion.div>
            </DialogPanel>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
