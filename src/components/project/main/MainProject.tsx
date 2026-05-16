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
import { GiFlowerStar } from "react-icons/gi";

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
    <div className="min-h-svh py-20 text-white overflow-hidden bg-amber-600">
      <section className="flex flex-col items-center justify-center gap-4 lg:gap-8 px-5 lg:px-20">
        <div className="rounded-2xl border-2 md:border-4 border-black bg-amber-300 px-3 md:px-5 py-2 text-sm font-black text-black shadow-[4px_4px_0px_#000] md:text-base">
          FEATURED PROJECTS
        </div>
        <h1 className="text-center text-5xl md:text-6xl font-black leading-none text-amber-200 drop-shadow-[5px_5px_0px_#000] lg:text-9xl">
          Our Craft
        </h1>
        <div className="cartoon-item font-bold flex flex-col items-center justify-center text-sm md:text-lg text-white/50">
          <span>50+ projects shipped. </span>
          <span>500M+ page views delivered.</span>
        </div>
      </section>
      <section className="pt-10 flex-col">
        <div className="mx-3 mb-10 md:mb-15 rounded-tr-3xl rounded-bl-3xl border-3 md:border-4 border-black bg-amber-400 px-2 md:px-4 py-4 md:py-7 shadow-[5px_5px_0px_#000] md:shadow-[8px_8px_0px_#000] md:mx-30">
          <div className="flex justify-between items-center md:px-5">
            <div className="flex">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.button
                    whileHover={{
                      scale: 1.07,
                      y: -6,
                      x: -4,
                      rotate: -2,
                      boxShadow: "10px 10px 0px #000",
                    }}
                    whileTap={{
                      scale: 0.94,
                      y: 3,
                      x: 3,
                      rotate: 0,
                      boxShadow: "2px 2px 0px #000",
                    }}
                    whileInView={{ boxShadow: "5px 5px 0px #000" }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 18,
                    }}
                    className="cursor-pointer rounded-tr-xl rounded-bl-xl border-2 border-black bg-amber-300 px-3 md:px-10 py-2 md:py-3 text-base md:text-lg font-black text-black shadow-[5px_5px_0px_#000]"
                  >
                    FILTER
                  </motion.button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="z-50 border-2 border-black bg-amber-300 text-black shadow-[5px_5px_0px_#000]">
                  {sortOptions.map((item, idx) => {
                    return (
                      <DropdownMenuItem
                        className="cursor-pointer font-black focus:bg-orange-500 focus:text-black"
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
                  className="hidden md:flex gap-3 justify-center items-center"
                >
                  {images.map((img, idx) => (
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: idx % 2 === 0 ? -2 : 2,
                        y: -4,
                      }}
                      whileTap={{ scale: 0.94 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 18,
                      }}
                      className="relative h-12 w-24 cursor-pointer rounded-md border-2 border-black bg-amber-200 p-1 shadow-[4px_4px_0px_#000]"
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                    >
                      <Image
                        fill
                        src={img}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={img}
                        className={`rounded-sm object-cover p-1 transition-all duration-300 ${
                          activeIndex === idx
                            ? "opacity-100"
                            : "opacity-50 hover:opacity-80"
                        }`}
                      />
                      {activeIndex === idx && (
                        <motion.div
                          layoutId="activeIndicator"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                          className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xl text-orange-600 drop-shadow-[2px_2px_0px_#000]"
                        >
                          <GiFlowerStar />
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            <div className="flex gap-4 text-xl">
              <div className="flex gap-2">
                {gridButtons.map((item) => (
                  <Tooltip key={item.id}>
                    <TooltipTrigger asChild>
                      <motion.button
                        whileHover={{
                          scale: 1.08,
                          y: -3,
                          rotate: item.id === "grid2" ? -2 : 2,
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
                        onClick={() => setActiveGrid(item.id as GridType)}
                        className="relative cursor-pointer rounded-lg border-2 border-black bg-amber-300 p-2 text-xl md:text-2xl text-black overflow-hidden"
                      >
                        {activeGrid === item.id && (
                          <motion.div
                            layoutId="activeGridBg"
                            className="absolute inset-0 rounded-md bg-orange-500"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                          />
                        )}
                        <span className="relative z-10">{item.icon}</span>
                      </motion.button>
                    </TooltipTrigger>
                    <TooltipContent className="hidden border-2 border-black bg-amber-300 font-black text-black shadow-[4px_4px_0px_#000] md:block">
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
                    className="flex gap-2 text-black text-base md:text-xl"
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
                  className="flex md:hidden mt-5 gap-2 justify-center items-center"
                >
                  {images.map((img, idx) => (
                    <div
                      className="relative w-18 h-12 rounded-md border border-black bg-amber-200 p-1 shadow-[3px_3px_0px_#000]"
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                    >
                      <Image
                        fill
                        src={img}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={img}
                        className={`object-cover p-1 rounded-md transition-all duration-300 ${
                          activeIndex === idx
                            ? "opacity-100"
                            : "opacity-50 hover:opacity-70"
                        }`}
                      />
                      {activeIndex === idx && (
                        <motion.div
                          layoutId="activeIndicatorMobile"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                          className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-base text-orange-600 drop-shadow-[2px_2px_0px_#000]"
                        >
                          <GiFlowerStar />
                        </motion.div>
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
