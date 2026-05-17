"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable, ScrambleTextPlugin } from "gsap/all";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(Draggable, ScrambleTextPlugin);
const MotionImage = motion.create(Image);
const MotionLink = motion.create(Link);

export function Grid2({
  images,
  activeIndex,
  setActiveIndex,
}: {
  images: string[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const handleEnter = (index: number) => {
    gsap.to(textRef.current[index], {
      duration: 0.6,
      color: "#f97316",
      overwrite: "auto",
      scrambleText: {
        text: "CAUFI",
        chars: "upperCase",
      },
    });
  };
  const handleLeave = (index: number) => {
    gsap.to(textRef.current[index], {
      duration: 0.6,
      color: "#ffffff",
      overwrite: "auto",
      scrambleText: {
        text: "CAUFI",
        chars: "upperCase",
      },
    });
  };
  useGSAP(() => {
    if (!containerRef.current) return;
    const slideWidth = containerRef.current.children[0].clientWidth + 40;
    const totalSlides = images.length;
    const totalWidth = containerRef.current.scrollWidth / 2;
    function updateActiveIndex(currentX: number) {
      const index = Math.round(Math.abs(currentX) / slideWidth) % totalSlides;
      setActiveIndex(index);
    }
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
        updateActiveIndex(this.x);
      },
      onThrowUpdate: function () {
        updateActiveIndex(this.x);
      },
    });
  });
  useGSAP(() => {
    if (!containerRef.current) return;
    const slides = Array.from(containerRef.current.children) as HTMLElement[];
    const viewportWidth = containerRef.current.parentElement!.clientWidth;
    const activeSlide = slides[activeIndex];
    if (!activeSlide) return;
    const offset =
      activeSlide.offsetLeft -
      containerRef.current.scrollLeft -
      (viewportWidth / 2 - activeSlide.offsetWidth / 2);
    gsap.to(containerRef.current, {
      x: -offset,
      duration: 0.6,
      ease: "power3.out",
    });
  }, [activeIndex]);
  return (
    <div className="w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex select-none cursor-grab gap-2 md:gap-5 active:cursor-grabbing"
      >
        {[...images, ...images].map((item, idx) => (
          <Link
            onMouseEnter={() => handleEnter(idx)}
            onMouseLeave={() => handleLeave(idx)}
            href="/"
            key={idx}
            className={`group relative min-w-screen xl:min-w-[80vw] h-50 md:h-80 lg:h-120 overflow-hidden md:rounded-tr-4xl rounded-tr-2xl rounded-bl-2xl md:rounded-bl-4xl border-3 md:border-4 border-black bg-amber-200 p-2 transition-all duration-500 ${
              activeIndex === idx % images.length
                ? "scale-95 opacity-100 shadow-[5px_5px_0px_#000] md:shadow-[10px_10px_0px_#000]"
                : "scale-90 opacity-60 shadow-[3px_3px_0px_#000] md:shadow-[5px_5px_0px_#000]"
            }`}
          >
            <MotionImage
              alt={item}
              fill
              src={item}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-tr-xl md:rounded-tr-3xl rounded-bl-xl md:rounded-bl-3xl p-1.5 md:p-2"
              priority={idx === 0}
            />
            <div className="absolute right-3 top-3 md:right-5 md:top-5 rotate-3 rounded-tr-xl rounded-bl-xl border-2 border-black bg-orange-500 px-2 md:px-3 py-1 text-xs font-black text-black shadow-[3px_3px_0px_#000]">
              CASE STUDY
            </div>
            <div className="absolute bottom-0 left-0 w-full p-3 md:p-6 bg-linear-to-t from-black/70 to-transparent text-white">
              <p
                ref={(el) => {
                  textRef.current[idx] = el;
                }}
                className="text-base md:text-3xl font-semibold"
              >
                CAUFI
              </p>
              <p className="text-sm text-white/70">
                [MARKETING SITE] – [SPORTS]
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Grid4({ images }: { images: string[] }) {
  const textRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const handleEnter = (index: number) => {
    gsap.to(textRef.current[index], {
      duration: 0.6,
      color: "#f97316",
      scrambleText: {
        text: "CAUFI",
        chars: "upperCase",
      },
    });
  };
  const handleLeave = (index: number) => {
    gsap.to(textRef.current[index], {
      duration: 0.6,
      color: "#ffffff",
      scrambleText: {
        text: "CAUFI",
      },
    });
  };
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-x-5 gap-y-0 lg:gap-y-15 px-2 md:px-5 lg:px-10">
      {images.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30, rotate: idx % 2 === 0 ? -2 : 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: idx % 2 === 0 ? -1 : 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 22,
            delay: idx * 0.06,
          }}
        >
          <MotionLink
            onMouseEnter={() => handleEnter(idx)}
            onMouseLeave={() => handleLeave(idx)}
            whileHover={{
              translateY: -5,
              translateX: -5,
              boxShadow: "12px 12px 0px #000",
            }}
            whileTap={{
              scale: 0.94,
              y: 3,
              x: 3,
              rotate: 0,
              boxShadow: "2px 2px 0px #000",
            }}
            whileInView={{ boxShadow: "8px 8px 0px #000" }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 18,
            }}
            href="/"
            className="group relative block h-50 w-full overflow-hidden md:rounded-tr-4xl rounded-tr-2xl rounded-bl-2xl md:rounded-bl-4xl border-3 md:border-4 border-black bg-amber-200 p-2 md:h-100"
          >
            <MotionImage
              alt={item}
              fill
              src={item}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="md:rounded-tr-3xl rounded-tr-xl rounded-bl-xl md:rounded-bl-3xl object-cover p-1 md:p-2"
            />
            <div className="absolute md:right-5 md:top-5 right-3 top-3 rotate-3 rounded-tr-xl rounded-bl-xl border-2 border-black bg-orange-500 px-2 md:px-3 py-1 text-xs font-black text-black shadow-[3px_3px_0px_#000]">
              PROJECT
            </div>
            <div className="absolute bottom-0 left-0 w-full p-3 md:p-6 bg-linear-to-t from-black/70 to-transparent text-white">
              <p
                ref={(el) => {
                  textRef.current[idx] = el;
                }}
                className="text-base md:text-2xl font-semibold"
              >
                CAUFI
              </p>
              <p className="text-sm text-white/70">
                [MARKETING SITE] – [SPORTS]
              </p>
            </div>
          </MotionLink>
          <div className="lg:hidden block border-2 w-full my-5 border-white/20" />
        </motion.div>
      ))}
    </div>
  );
}
