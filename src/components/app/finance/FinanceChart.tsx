"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import { ReactNode } from "react";
import { motion } from "motion/react";
import ToasterProvider from "@/components/Toaster";
import ReactMarkDown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { PreviewData, ChartSuggestion } from "@/utils/api";
import { FaFileAlt } from "react-icons/fa";

export default function FinanceChart({
  children,
  onClick,
  reportResult,
  chartResult,
  loading,
}: {
  children: ReactNode;
  onClick: () => void;
  reportResult?: string | null;
  chartResult?: {
    data: PreviewData["preview"];
    chart_suggestion: ChartSuggestion;
  } | null;
  loading: boolean;
}) {
  return (
    <Card className="w-full divide-y divide-white/5 rounded-2xl bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl border border-slate-700/50 backdrop-blur-xl">
      <ToasterProvider />
      <CardHeader className="text-2xl font-bold bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent px-8 py-6">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 bg-linear-to-br from-blue-500 to-violet-500 rounded-xl">
            <FaFileAlt className="text-2xl text-white" />
          </div>
          Report Dashboard
        </CardTitle>
      </CardHeader>
      <CardContent className="px-8 py-8">
        <CardDescription className="rounded-xl border border-slate-700/30 bg-slate-900/40 backdrop-blur-sm p-6 min-h-75 flex items-center justify-center">
          {children}
        </CardDescription>
        <CardAction className="w-full flex items-center justify-center mt-6">
          {chartResult && (
            <motion.button
              className="relative py-3 px-8 bg-linear-to-r from-blue-600 to-violet-600 rounded-xl cursor-pointer shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
              onClick={onClick}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              <span className="relative z-10 flex items-center gap-2 font-medium">
                {loading ? (
                  <>
                    <span className="animate-pulse">Generating Report</span>
                    <span className="flex gap-1">
                      <span
                        className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></span>
                      <span
                        className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></span>
                      <span
                        className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></span>
                    </span>
                  </>
                ) : (
                  <>
                    <FaFileAlt />
                    Analyze Report
                  </>
                )}
              </span>
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-blue-500 to-violet-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          )}
        </CardAction>
        {reportResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 prose prose-invert max-w-none font-sans leading-relaxed p-8 rounded-xl bg-slate-900/60 border border-slate-700/30 backdrop-blur-sm"
          >
            <ReactMarkDown remarkPlugins={[remarkGfm]}>
              {reportResult}
            </ReactMarkDown>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}
