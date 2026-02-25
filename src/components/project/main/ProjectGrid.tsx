"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable, ScrambleTextPlugin } from "gsap/all";
import { motion, spring } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(Draggable, ScrambleTextPlugin);
const MotionImage = motion.create(Image);

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
      <div ref={containerRef} className="flex select-none cursor-grab gap-5">
        {[...images, ...images].map((item, idx) => (
          <Link
            onMouseEnter={() => handleEnter(idx)}
            onMouseLeave={() => handleLeave(idx)}
            href="/"
            key={idx}
            className={`min-w-[80vw] relative h-50 sm:h-80 lg:h-120 transition-all duration-500 overflow-hidden ${
              activeIndex === idx % images.length
                ? "scale-100 opacity-100"
                : "scale-90 opacity-50"
            }`}
          >
            <MotionImage
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              transition={{ type: spring, stiffness: 300, damping: 30 }}
              alt=""
              fill
              src={item}
              className="object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 w-full p-2 lg:p-6 bg-linear-to-t from-black/70 to-transparent text-white">
              <p
                ref={(el) => {
                  textRef.current[idx] = el;
                }}
                className="text-xl sm:text-2xl lg:text-3xl font-semibold"
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
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-x-5 gap-y-0 lg:gap-y-15 px-5 lg:px-10">
      {images.map((item, idx) => (
        <>
          <Link
            onMouseEnter={() => handleEnter(idx)}
            onMouseLeave={() => handleLeave(idx)}
            href="/"
            key={idx}
            className="relative h-50 sm:h-100 lg:h-100 w-full overflow-hidden"
          >
            <MotionImage
              whileHover={{ scale: 1.05 }}
              alt=""
              fill
              src={item}
              className="rounded-xl object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-2 lg:p-6 bg-linear-to-t from-black/70 to-transparent text-white">
              <p
                ref={(el) => {
                  textRef.current[idx] = el;
                }}
                className="text-xl sm:text-2xl lg:text-2xl font-semibold"
              >
                CAUFI
              </p>
              <p className="text-sm text-white/70">
                [MARKETING SITE] – [SPORTS]
              </p>
            </div>
          </Link>
          <div className="border-2 w-full my-5 border-white/20" />
        </>
      ))}
    </div>
  );
}
