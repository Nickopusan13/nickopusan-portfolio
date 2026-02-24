"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/all";
import { useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { CiGrid41, CiGrid2V, CiGrid2H } from "react-icons/ci";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import { motion } from "motion/react";

gsap.registerPlugin(Draggable);

const sortOptions = [
  { label: "WEB APP" },
  { label: "SAAS" },
  { label: "AGENCY WEBSITE" },
  { label: "E-COMMERCE" },
];

type GridType = "grid2v" | "grid2h" | "grid4";
const gridButtons = [
  { id: "grid2v", icon: <CiGrid2V /> },
  { id: "grid2h", icon: <CiGrid2H /> },
  { id: "grid4", icon: <CiGrid41 /> },
];

const images = [
  "/assets/caufi/caufi_1.webp",
  "/assets/caufi/caufi_2.webp",
  "/assets/caufi/caufi_3.webp",
  "/assets/caufi/caufi_4.webp",
];

export default function MainProject() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeGrid, setActiveGrid] = useState<GridType>("grid2v");
  return (
    <div className="min-h-dvh text-white">
      <section className="flex flex-col items-center justify-center gap-8 px-20">
        <h1 className="text-8xl">Our Craft</h1>
        <div className="flex flex-col items-center justify-center text-lg text-white/50">
          <span>50+ projects shipped. </span>
          <span>500M+ page views delivered.</span>
        </div>
      </section>
      <section className="pt-10 flex-col">
        <div className="flex justify-between items-center px-20 mb-15">
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="bg-zinc-400 rounded-lg px-5 py-3 text-black">
                  FILTER
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-zinc-400">
                {sortOptions.map((item, idx) => {
                  return (
                    <DropdownMenuItem className="focus:bg-zinc-300" key={idx}>
                      {item.label}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="px-3 rounded-lg bg-zinc-400 flex items-center justify-center text-2xl text-black">
              <MdKeyboardDoubleArrowDown />
            </div>
          </div>
          <div className="flex gap-3 justify-center items-center">
            {images.map((img, idx) => {
              return (
                <div
                  className="relative w-25 h-15"
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                >
                  <Image
                    fill
                    src={img}
                    alt=""
                    className={`object-cover rounded-md transition-all duration-300 ${activeIndex === idx ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
                  />
                  {activeIndex === idx && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-600 rounded-sm"
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex gap-4 text-xl">
            <div className="flex gap-2">
              {gridButtons.map((item) => (
                <button
                  key={item.id}
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
              ))}
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-zinc-400/10 p-2 rounded-full hover:bg-zinc-400/40"
              >
                <IoMdArrowRoundBack />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-zinc-400/10 p-2 rounded-full hover:bg-zinc-400/40"
              >
                <IoMdArrowRoundForward />
              </motion.button>
            </div>
          </div>
        </div>
        <Grid2V images={images} activeIndex={activeIndex} />
      </section>
    </div>
  );
}

function Grid2V({
  images,
  activeIndex,
}: {
  images: string[];
  activeIndex: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!containerRef.current) return;
    const totalWidth = containerRef.current.scrollWidth / 2;
    Draggable.create(containerRef.current, {
      type: "x",
      edgeResistance: 0.8,
      inertia: true,
      cursor: "grab",
      activeCursor: "grabbing",
      onDrag: function () {
        if (this.x <= -totalWidth) {
          gsap.set(containerRef.current, { x: 0 });
        }

        if (this.x >= 0) {
          gsap.set(containerRef.current, { x: -totalWidth });
        }
      },
    });
  });
  useGSAP(() => {
    if (!containerRef.current) return;
    const slideWidth = containerRef.current.children[0].clientWidth + 40;
    gsap.to(containerRef.current, {
      x: -slideWidth * activeIndex,
      duration: 0.6,
      ease: "power3.out",
    });
  }, [activeIndex]);
  return (
    <div className="w-full overflow-hidden">
      <div ref={containerRef} className="flex select-none cursor-grab gap-10">
        {[...images, ...images].map((item, idx) => (
          <div
            key={idx}
            className={`min-w-[70vw] relative h-120 transition-all duration-500 ${
              activeIndex === idx % images.length
                ? "scale-100 opacity-100"
                : "scale-90 opacity-50"
            }`}
          >
            <Image alt="" fill src={item} className="object-cover rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
}
