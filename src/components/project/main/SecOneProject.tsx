"use client";

import { useMediaQuery } from "@/utils/useMediaQuery";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { motion } from "motion/react";
import { AiOutlineBug } from "react-icons/ai";

gsap.registerPlugin(ScrollTrigger);

const marqueeItem = [
  "HIGH-PERFORMANCE WEBSITES",
  "SMOOTH ANIMATIONS & INTERACTIONS",
  "RESPONSIVE ON EVERY DEVICE",
  "CLEAN CODE & SCALABLE STRUCTURE",
  "BUILT WITH MODERN STACK",
];

const marqueeListProject = (
  <div className="flex items-center text-blue-950 gap-2 w-fit">
    {marqueeItem.map((item, idx) => {
      return (
        <span className="flex font-bold" key={idx}>
          <h1 className="mx-10">{item}</h1>
          <span>|</span>
        </span>
      );
    })}
  </div>
);

export default function SecOneProject() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeTimeline = useRef<GSAPTimeline>(null);
  const isMobile = useMediaQuery();
  const isReversed = false;
  useGSAP(
    () => {
      gsap.set(marqueeRef.current, {
        xPercent: isReversed ? -50 : 0,
      });
      marqueeTimeline.current = gsap
        .timeline({ repeat: -1, defaults: { ease: "none" } })
        .to(marqueeRef.current, {
          xPercent: isReversed ? 0 : -50,
          duration: 15,
        })
        .set(marqueeRef.current, { xPercent: 0 });
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => marqueeTimeline.current?.play(),
        onEnterBack: () => marqueeTimeline.current?.play(),
        onLeave: () => marqueeTimeline.current?.pause(),
        onLeaveBack: () => marqueeTimeline.current?.pause(),
      });
    },
    { dependencies: [isReversed] },
  );
  const timelineTimeScaleTween = useRef<GSAPTween>(null);
  const onPointerEnter = () => {
    if (!marqueeTimeline.current) return;
    if (!isMobile) {
      timelineTimeScaleTween.current?.kill();
      timelineTimeScaleTween.current = gsap.to(marqueeTimeline.current, {
        timeScale: 0.25,
        duration: 0.4,
      });
    }
  };

  const onPointerLeave = () => {
    if (!marqueeTimeline.current) return;
    if (!isMobile) {
      timelineTimeScaleTween.current?.kill();
      timelineTimeScaleTween.current = gsap.to(marqueeTimeline.current, {
        timeScale: 1,
        duration: 0.2,
      });
    }
  };
  return (
    <div
      ref={sectionRef}
      className="w-full h-[90svh] bg-amber-500 border-y-4 border-black relative overflow-hidden"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.10) 0px,
            rgba(0, 0, 0, 0.10) 1px,
            transparent 2px,
            transparent 5px
          )
        `,
      }}
    >
      <div className="pointer-events-none absolute -top-20 -left-20 size-72 rounded-full bg-amber-300 border-4 border-black opacity-40" />
      <div className="pointer-events-none absolute top-28 right-12 size-32 rounded-full bg-orange-500 border-4 border-black opacity-50" />
      <div className="pointer-events-none absolute -bottom-32 right-32 size-80 rounded-full bg-yellow-300 border-4 border-black opacity-30" />
      <div className="pointer-events-none absolute left-[8%] top-[22%] text-5xl font-black text-black opacity-20 rotate-12">
        <AiOutlineBug />
      </div>
      <div className="pointer-events-none absolute right-[12%] top-[40%] text-6xl font-black text-black opacity-20 -rotate-12">
        KICAW!
      </div>
      <div className="pointer-events-none absolute right-[25%] bottom-[22%] text-5xl font-black text-black opacity-20 rotate-6">
        POW!
      </div>
      <div className="w-full h-full flex flex-col items-start justify-center">
        <div className="flex mt-20 flex-col w-full h-full mx-40 items-start justify-center gap-7">
          <motion.div
            initial={{ rotate: -4, scale: 0.95 }}
            whileInView={{ rotate: -2, scale: 1 }}
            transition={{ type: "spring", stiffness: 350, damping: 16 }}
            className="rounded-tr-xl rounded-bl-xl border-2 border-black bg-amber-300 px-4 py-1 font-black text-black shadow-[4px_4px_0px_#000]"
          >
            FULLSTACK DEVELOPER
          </motion.div>
          <h1 className="flex flex-col items-start justify-center text-5xl font-black leading-[0.95] text-amber-200 md:text-7xl lg:text-8xl drop-shadow-[5px_5px_0px_#000]">
            <span>High-performance websites</span>
            <span>built for real users.</span>
          </h1>
          <p className="flex flex-col text-black font-bold text-xl">
            <span>I build fast, responsive websites and web apps</span>
            <span>focused on performance, UX, and real results.</span>
          </p>
          <div className="flex gap-5">
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
              className="cursor-pointer rounded-tr-xl rounded-bl-xl border-2 border-black bg-amber-800 px-10 py-3 text-lg font-black text-amber-100 shadow-[5px_5px_0px_#000]"
            >
              Contact Us
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.07,
                y: -6,
                x: -4,
                rotate: 2,
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
              className="cursor-pointer rounded-tl-xl rounded-br-xl border-2 border-black bg-amber-300 px-10 py-3 text-lg font-black text-black shadow-[5px_5px_0px_#000]"
            >
              About Us
            </motion.button>
          </div>
        </div>
        <div
          className="border-t w-full py-3 text-lg whitespace-nowrap overflow-hidden"
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
        >
          <div ref={marqueeRef} className="flex w-fit text-lg gap-2">
            {marqueeListProject}
            {marqueeListProject}
            {marqueeListProject}
            {marqueeListProject}
          </div>
        </div>
      </div>
    </div>
  );
}
