"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CiGrid41, CiGrid2V } from "react-icons/ci";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { NextPrevBtn } from "./BtnTooltip";
import { Grid2, Grid4 } from "./ProjectGrid";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const sortOptions = [
  { label: "WEB APP" },
  { label: "SAAS" },
  { label: "AGENCY WEBSITE" },
  { label: "E-COMMERCE" },
];

type GridType = "grid2" | "grid4";
const gridButtons = [
  { id: "grid2", icon: <CiGrid2V />, label: "2 Grid" },
  { id: "grid4", icon: <CiGrid41 />, label: "4 Grid" },
];

const images = [
  "/assets/caufi/caufi_1.webp",
  "/assets/caufi/caufi_2.webp",
  "/assets/caufi/caufi_3.webp",
  "/assets/caufi/caufi_4.webp",
];

export default function MainProject() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeGrid, setActiveGrid] = useState<GridType>("grid2");
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };
  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div className="min-h-dvh text-white overflow-hidden">
      <section className="flex flex-col items-center justify-center gap-4 lg:gap-8 px-5 lg:px-20">
        <h1 className="text-5xl font-semibold lg:text-8xl">Our Craft</h1>
        <div className="flex flex-col items-center justify-center text-lg text-white/50">
          <span>50+ projects shipped. </span>
          <span>500M+ page views delivered.</span>
        </div>
      </section>
      <section className="pt-10 flex-col">
        <div className="flex justify-between items-center px-5 lg:px-20 mb-15">
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-zinc-600/10 rounded-lg px-5 py-3 text-white"
                >
                  FILTER
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-zinc-900 text-white/40">
                {sortOptions.map((item, idx) => {
                  return (
                    <DropdownMenuItem
                      className="focus:bg-zinc-300/10 focus:text-white"
                      key={idx}
                    >
                      {item.label}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <AnimatePresence mode="wait">
            {activeGrid !== "grid4" && (
              <motion.div
                key="thumbnails"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="hidden lg:flex gap-3 justify-center items-center"
              >
                {images.map((img, idx) => (
                  <div
                    className="relative w-25 h-12"
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <Image
                      fill
                      src={img}
                      alt=""
                      className={`object-cover rounded-md transition-all duration-300 hover:scale-110 active:scale-95 ${
                        activeIndex === idx
                          ? "opacity-100"
                          : "opacity-40 hover:opacity-70"
                      }`}
                    />
                    {activeIndex === idx && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-600/80 rounded-sm"
                      />
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex gap-4 text-xl">
            <div className="flex gap-2">
              {gridButtons.map((item) => (
                <Tooltip key={item.id}>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => setActiveGrid(item.id as GridType)}
                      className={`relative p-2 rounded-lg text-white hover:bg-zinc-400/40 bg-zinc-400/10`}
                    >
                      {activeGrid === item.id && (
                        <motion.div
                          layoutId="activeGridBg"
                          className="absolute inset-0 bg-orange-500 rounded-lg"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">{item.icon}</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="lg:block hidden">
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
            <AnimatePresence>
              {activeGrid !== "grid4" && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-2"
                >
                  <NextPrevBtn content="Previous" onClick={handlePrevious}>
                    <IoMdArrowRoundBack />
                  </NextPrevBtn>
                  <NextPrevBtn content="Next" onClick={handleNext}>
                    <IoMdArrowRoundForward />
                  </NextPrevBtn>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {activeGrid === "grid2" ? (
            <>
              <motion.div
                key="grid2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Grid2
                  setActiveIndex={setActiveIndex}
                  images={images}
                  activeIndex={activeIndex}
                />
              </motion.div>
              <AnimatePresence mode="wait">
                <motion.div
                  key="thumbnails"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex lg:hidden mt-5 lg:mt-0 gap-2 lg:gap-3 justify-center items-center"
                >
                  {images.map((img, idx) => (
                    <div
                      className="relative w-20 sm:w-25 h-12"
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                    >
                      <Image
                        fill
                        src={img}
                        alt=""
                        className={`object-cover rounded-md transition-all duration-300 hover:scale-110 active:scale-95 ${
                          activeIndex === idx
                            ? "opacity-100"
                            : "opacity-40 hover:opacity-70"
                        }`}
                      />
                      {activeIndex === idx && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-600/80 rounded-sm"
                        />
                      )}
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            <motion.div
              key="grid4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Grid4 images={images} />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
