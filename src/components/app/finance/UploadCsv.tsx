"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { financePreview, financeChart, financeReport } from "@/utils/api";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { useDropzone } from "react-dropzone";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import toast from "react-hot-toast";
import ToasterProvider from "@/components/Toaster";
import type { PreviewData, ChartSuggestion, ChartRow } from "@/utils/api";
import AppDialog from "@/components/AppDialog";
import { DialogTitle } from "@headlessui/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";
import { FaChartSimple } from "react-icons/fa6";
import FinanceChart from "./FinanceChart";
import { PlotType } from "plotly.js";
import dynamic from "next/dynamic";
import { FaChartBar } from "react-icons/fa";
import { RiUploadCloud2Line } from "react-icons/ri";

const DynamicPlotlyChart = dynamic(() => import("./DynamicChart"), {
  ssr: false,
});

export default function UploadCsv() {
  const [chartResult, setChartResult] = useState<{
    data: ChartRow[];
    aggregated_data: ChartRow[];
    chart_suggestion: ChartSuggestion;
  } | null>(null);
  const chartType: PlotType =
    (chartResult?.chart_suggestion.chart_type as PlotType) || "scatter";
  const [reportResult, setReportResult] = useState<string | null>(null);
  const [x, setX] = useState<string>("");
  const [y, setY] = useState<string>("");
  const [group, setGroup] = useState<string>("");
  const axisOptions = [
    {
      key: "x",
      label: "X Axis",
      placeholder: "Select column",
      value: x,
      setValue: setX,
    },
    {
      key: "y",
      label: "Y Axis",
      placeholder: "Select column",
      value: y,
      setValue: setY,
    },
    {
      key: "group",
      label: "Group By",
      placeholder: "Select column (optional)",
      value: group,
      setValue: setGroup,
    },
  ];
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<PreviewData | null>(null);
  const [openCard, setOpenCard] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const selectedValues = [x, y, group].filter(Boolean);
  const onDrop = useCallback((acceptFiles: File[]) => {
    if (acceptFiles.length > 0) {
      setFile(acceptFiles[0]);
      console.log("File selcted:", acceptFiles[0]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "text/csv": [".csv"] },
    multiple: false,
    maxSize: 50 * 1024 * 1024,
  });
  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const data = await financePreview(file);
      setPreview(data);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something Wrong";
      toast.error(message, { duration: 5000 });
    } finally {
      setLoading(false);
    }
  };
  const handleAnalyze = async () => {
    if (!file || !x || !y) {
      toast.error("Pleae select a file, X and Y columns");
      return;
    }
    setLoading(true);
    try {
      const result = await financeChart(file, x, y, group || undefined);
      setChartResult(result);
      toast.success("Chart analysis complete!");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      toast.error(message, { duration: 5000 });
    } finally {
      setLoading(false);
      setOpenCard(false);
    }
  };
  const handleReport = async () => {
    if (!file || !x || !y) {
      toast.error("Error in making report");
      return;
    }
    setLoading(true);
    try {
      const result = await financeReport(file, x, y, group || undefined);
      setReportResult(result.report);
      toast.success("Report generated successfully!");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      toast.error(message, { duration: 5000 });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <ToasterProvider />
      <Card className="w-full divide-y divide-white/5 rounded-2xl bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl border border-slate-700/50 backdrop-blur-xl">
        <CardHeader className="text-2xl font-bold bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent px-8 py-6">
          <CardTitle className="flex items-center gap-3">
            <div className="p-2 bg-linear-to-br from-blue-500 to-violet-500 rounded-xl">
              <RiUploadCloud2Line className="text-2xl text-white" />
            </div>
            Upload CSV File
          </CardTitle>
        </CardHeader>
        <CardContent className="px-8 py-8">
          <CardDescription className="text-slate-300 text-sm text-center mb-6 font-medium">
            {file ? (
              <span className="flex items-center justify-center gap-2 text-blue-400">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                Selected: {file.name}
              </span>
            ) : (
              "Drag & drop CSV file here, or click to browse (max. 50MB)"
            )}
          </CardDescription>
          <div {...getRootProps()}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`relative mt-4 p-10 border-2 border-dashed rounded-2xl cursor-pointer text-center transition-all duration-300 overflow-hidden ${
                isDragActive
                  ? "border-blue-400 bg-blue-500/10 shadow-lg shadow-blue-500/20"
                  : "border-slate-600/50 hover:border-slate-500 bg-slate-800/40 hover:bg-slate-800/60"
              }`}
            >
              <input {...getInputProps()} />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <motion.div
                  animate={isDragActive ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className={`p-6 rounded-2xl ${
                    isDragActive
                      ? "bg-linear-to-br from-blue-500 to-violet-500"
                      : "bg-linear-to-br from-slate-700 to-slate-800"
                  }`}
                >
                  <RiUploadCloud2Line className="text-5xl text-white" />
                </motion.div>
                <p className="text-slate-300 font-medium">
                  {isDragActive
                    ? "Drop the file here..."
                    : "Drag & drop, or click to select"}
                </p>
              </div>
              {isDragActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.1 }}
                  className="absolute inset-0 bg-linear-to-br from-blue-500 to-violet-500"
                />
              )}
            </motion.div>
          </div>
          <CardAction className="mt-6 w-full flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-linear-to-r from-slate-700 to-slate-800 px-8 py-3 rounded-xl text-white font-medium cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-600/50 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
              onClick={handleUpload}
              disabled={!file || loading}
            >
              <span className="relative z-10">
                {loading ? "Loading..." : "See Preview"}
              </span>
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-slate-600 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity"
                layoutId="button-hover"
              />
            </motion.button>
            {preview && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setOpenCard(true)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-linear-to-r from-blue-600 to-violet-600 px-8 py-3 rounded-xl text-white font-medium cursor-pointer shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaChartSimple />
                  Analyze & Upload
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
          <div className="w-full h-90 overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900 mt-8 rounded-xl border border-slate-700/30">
            {preview ? (
              <div className="bg-slate-900/40 backdrop-blur-sm rounded-xl">
                <Table>
                  <TableHeader className="bg-linear-to-r from-slate-800 to-slate-900 sticky top-0">
                    <TableRow className="hover:bg-transparent border-b border-slate-700/50">
                      {preview.columns.map((col, idx) => (
                        <TableHead
                          key={idx}
                          className="text-blue-400 font-semibold text-sm uppercase tracking-wide"
                        >
                          {col}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {preview.preview.map((row, idx) => (
                      <TableRow
                        key={idx}
                        className="hover:bg-slate-800/50 transition-colors border-b border-slate-800/30"
                      >
                        {preview.columns.map((col, colIdx) => (
                          <TableCell
                            key={colIdx}
                            className="text-slate-300 text-sm"
                          >
                            {row[col]}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full py-20 gap-4">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  <RiUploadCloud2Line className="text-9xl text-slate-700 opacity-30" />
                </motion.div>
                <p className="text-slate-600 text-sm">No preview available</p>
              </div>
            )}
          </div>
        </CardContent>
        <AnimatePresence>
          {openCard && (
            <AppDialog open={true} onClose={() => setOpenCard(false)}>
              <DialogTitle className="text-center text-xl font-bold bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">
                Configure Your Chart
              </DialogTitle>
              <p className="text-center text-slate-400 text-sm mb-8">
                Select the columns for X, Y axis and optional grouping
              </p>
              <div className="flex flex-col gap-6 py-6">
                {axisOptions.map((axis) => (
                  <motion.div
                    key={axis.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * axisOptions.indexOf(axis) }}
                    className="flex items-center justify-between p-4 rounded-xl bg-slate-800/40 border border-slate-700/30 hover:border-slate-600/50 transition-colors"
                  >
                    <span className="font-medium text-slate-300">
                      {axis.label}:
                    </span>
                    <Select
                      value={axis.value}
                      onValueChange={(val) => axis.setValue(val)}
                    >
                      <SelectTrigger className="w-55 bg-slate-900/50 border-slate-700/50 hover:border-slate-600 transition-colors">
                        <SelectValue placeholder={axis.placeholder} />
                      </SelectTrigger>
                      <SelectContent
                        className="bg-slate-900 text-white border-slate-700"
                        side="bottom"
                      >
                        <SelectGroup>
                          <SelectLabel className="text-center mb-2 text-slate-400 font-semibold">
                            {axis.label}
                          </SelectLabel>
                          {preview?.columns
                            ?.filter(
                              (col) =>
                                !selectedValues.includes(col) ||
                                col === axis.value,
                            )
                            .map((col, idx) => (
                              <SelectItem
                                className="focus:bg-slate-700 cursor-pointer"
                                key={idx}
                                value={col}
                              >
                                {col}
                              </SelectItem>
                            ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </motion.div>
                ))}
              </div>
              <div className="w-full flex items-center justify-center mt-4">
                <motion.button
                  onClick={handleAnalyze}
                  disabled={loading}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative py-3 px-8 bg-linear-to-r from-blue-600 to-violet-600 rounded-xl cursor-pointer shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
                >
                  {loading ? (
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      <span className="font-medium">Please Wait</span>
                      <FaChartSimple className="animate-pulse" />
                    </div>
                  ) : (
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      <span className="font-medium">Start Analyzing</span>
                      <FaChartSimple />
                    </div>
                  )}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-blue-500 to-violet-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div>
            </AppDialog>
          )}
        </AnimatePresence>
      </Card>
      <FinanceChart
        onClick={handleReport}
        reportResult={reportResult}
        chartResult={chartResult}
        loading={loading}
      >
        {chartResult ? (
          <>
            <DynamicPlotlyChart
              data={chartResult?.aggregated_data || []}
              x={x}
              y={y}
              group={group || undefined}
              type={chartType}
            />
          </>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 py-12">
            <motion.div>
              <FaChartBar className="text-9xl text-slate-700 opacity-20" />
            </motion.div>
            <p className="text-slate-600 text-sm">No chart data available</p>
          </div>
        )}
      </FinanceChart>
    </>
  );
}
