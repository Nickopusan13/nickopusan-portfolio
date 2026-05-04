"use client";

import { useMediaQuery } from "@/utils/useMediaQuery";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { motion } from "motion/react";

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
      className="w-full h-[80svh] bg-amber-600"
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
      <div className="w-full h-full flex flex-col items-start justify-center">
        <div className="flex mt-15 flex-col w-full h-full mx-40 items-start justify-center gap-7">
          <h1 className="flex flex-col items-start justify-center text-8xl text-amber-300 font-bold">
            <span>High-performance websites</span>
            <span>built for real users.</span>
          </h1>
          <p className="flex flex-col text-amber-200 text-xl">
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
              className="bg-amber-700 border-black border-2 text-lg px-10 py-2 text-amber-200 rounded-tr-xl rounded-bl-xl cursor-pointer"
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
              className="bg-amber-400 border-black border-2 text-lg px-10 py-2 text-black rounded-tl-xl rounded-br-xl cursor-pointer"
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
