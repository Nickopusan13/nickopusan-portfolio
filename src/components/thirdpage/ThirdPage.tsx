"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { frontend, backend, database, others } from "./Item";
import { motion } from "motion/react";
import { useState } from "react";
import { Code2, Server, Database, Wrench, ToolCase } from "lucide-react";

const sections = [
  {
    title: "Frontend",
    items: frontend,
    icon: <Code2 className="w-5 h-5" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend",
    items: backend,
    icon: <Server className="w-5 h-5" />,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Database",
    items: database,
    icon: <Database className="w-5 h-5" />,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Others",
    items: others,
    icon: <Wrench className="w-5 h-5" />,
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function ThirdPage() {
  const [openTooltip, setOpenTooltip] = useState<string | null>(null);
  return (
    <section
      id="my-skills"
      className="hero-section relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 bg-cover bg-center lg:min-h-screen md:min-h-screen h-auto p-5 w-full snap-start overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none" />
      <div className="relative z-10 flex flex-col text-white h-full w-full px-2 md:px-10 lg:px-32 py-8">
        <motion.div
          className="flex flex-col items-center gap-4 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-3 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl shadow-lg shadow-blue-500/30 hover:scale-105 hover:rotate-5 duration-200">
            <ToolCase className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            My Skills
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
          <p className="text-slate-400 text-center max-w-2xl">
            Technologies and tools I use to build modern applications
          </p>
        </motion.div>
        <div className="flex flex-col gap-12">
          {sections.map((section, sectionIdx) => (
            <motion.div
              key={section.title}
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIdx * 0.1 }}
            >
              <div className="flex items-center justify-center gap-4">
                <div
                  className={`p-2 bg-gradient-to-br ${section.gradient} rounded-xl shadow-lg hover:scale-105 hover:rotate-7 duration-200`}
                >
                  <span className="text-white">{section.icon}</span>
                </div>
                <h2 className="text-xl lg:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  {section.title}
                </h2>
                <div className="h-px flex-1 max-w-[500px] bg-gradient-to-r from-slate-600 to-transparent" />
              </div>
              <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                {section.items.map((item, idx) => {
                  const tooltipId = `${section.title.toLowerCase()}-${idx}`;
                  const isOpen = openTooltip === tooltipId;
                  return (
                    <div key={idx}>
                      <Tooltip open={isOpen || undefined}>
                        <TooltipTrigger
                          onTouchStart={(e) => {
                            e.preventDefault();
                            setOpenTooltip(isOpen ? null : tooltipId);
                          }}
                          className="relative group flex flex-col items-center justify-center p-6 lg:p-7 text-center bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-700/50 transition-all duration-300 ease-in-out hover:bg-slate-800/80 hover:border-blue-500/50 lg:hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden"
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                          />
                          <div className="relative z-10">{item.logo}</div>
                          <div
                            className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${section.gradient} rounded-t-full group-hover:w-full transition-all duration-300`}
                          />
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-900/95 backdrop-blur-sm border-slate-700 text-slate-200">
                          {item.desc}
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
