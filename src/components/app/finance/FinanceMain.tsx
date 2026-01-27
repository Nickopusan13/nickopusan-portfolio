"use client";

import { motion } from "motion/react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SideBarApp from "@/components/SideBar";
import UploadCsv from "./UploadCsv";

export default function FinanceMain() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="overflow-auto h-screen scroll-smooth scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-slate-600 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 relative"
    >
      <div className="p-3 fixed z-50 sm:z-100">
        <SidebarProvider defaultOpen={false}>
          <SideBarApp />
          <motion.div>
            <SidebarTrigger className="bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-sm border border-slate-700/50 rounded-lg transition-all duration-300 shadow-lg" />
          </motion.div>
        </SidebarProvider>
      </div>
      <div className="hero-section relative bg-cover bg-center w-full scrollbar-thin py-16 md:py-20 min-h-screen">
        <div className="flex items-center h-full w-full flex-col px-5 gap-8 lg:px-70 sm:px-20 relative z-10">
          <div className="relative">
            <motion.div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50"
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="bg-linear-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Financial Report Generator
              </span>
            </motion.h1>
            <motion.p
              className="text-slate-400 text-center text-sm md:text-base mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Transform your CSV data into actionable insights with AI-powered
              analysis
            </motion.p>
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span
                className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              />
              <span
                className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              />
            </motion.div>
          </div>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              "AI-Powered",
              "Real-time Analysis",
              "Interactive Charts",
              "Export Ready",
            ].map((feature, idx) => (
              <motion.span
                key={idx}
                className="px-4 py-2 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-full text-xs md:text-sm text-slate-300 font-medium shadow-lg cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(99, 102, 241, 0.5)",
                  boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)",
                }}
              >
                {feature}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            className="flex flex-col gap-10 w-full h-full max-w-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <UploadCsv />
          </motion.div>
          <div className="mt-16 flex items-center justify-center gap-8 opacity-30">
            <div className="h-px w-20 bg-linear-to-r from-transparent to-slate-600"></div>
            <span className="text-slate-300 text-xs uppercase tracking-widest">
              Demo Version
            </span>
            <div className="h-px w-20 bg-linear-to-l from-transparent to-slate-600"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
