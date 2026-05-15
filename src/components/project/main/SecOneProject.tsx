"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { motion } from "motion/react";
import { AiOutlineBug } from "react-icons/ai";
import Link from "next/link";
import { useMediaQuery } from "@/utils/useMediaQuery";

gsap.registerPlugin(ScrollTrigger, SplitText);
const MotionLink = motion.create(Link);

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
      const splitTitleDesktop = SplitText.create(".title-split-desktop", {
        type: "chars",
      });
      const splitTitleMobile = SplitText.create(".title-split-mobile", {
        type: "words",
      });
      const splitTitleSec = SplitText.create(".title-split-two", {
        type: "words",
      });
      gsap.fromTo(
        ".bg-blobs",
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 1,
          delay: 0.3,
          ease: "elastic.out(1, 0.45)",
          stagger: 0.12,
        },
      );
      if (isMobile) {
        gsap.set(".title-split-mobile", { opacity: 1 });
        gsap.from(splitTitleMobile.words, {
          stagger: 0.05,
          ease: "power2.inOut",
          yPercent: 300,
          delay: 1,
        });
      } else {
        gsap.set(".title-split-desktop", { opacity: 1 });
        gsap.from(splitTitleDesktop.chars, {
          stagger: 0.05,
          ease: "power2.inOut",
          yPercent: 110,
          delay: 1,
        });
      }
      gsap.set(".title-split-two", { opacity: 1 });
      gsap.from(splitTitleSec.words, {
        stagger: 0.05,
        ease: "power2.inOut",
        yPercent: 300,
        delay: 1,
      });
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
      return () => {
        splitTitleDesktop.revert();
        splitTitleMobile.revert();
        splitTitleSec.revert();
      };
    },
    { dependencies: [isReversed, isMobile] },
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
      className="w-full h-full bg-amber-500 border-y-4 border-black relative overflow-hidden"
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
      <div className="bg-blobs pointer-events-none absolute -top-20 -left-20 size-72 rounded-full bg-amber-300 border-4 border-black opacity-40" />
      <div className="bg-blobs pointer-events-none absolute top-28 right-12 size-32 rounded-full bg-orange-500 border-4 border-black opacity-50" />
      <div className="bg-blobs pointer-events-none absolute -bottom-32 right-32 size-80 rounded-full bg-yellow-300 border-4 border-black opacity-30" />
      <div className="bg-blobs pointer-events-none absolute left-[8%] top-[22%] text-5xl font-black text-black opacity-20 rotate-12">
        <AiOutlineBug />
      </div>
      <div className="bg-blobs pointer-events-none absolute right-[12%] top-[40%] text-6xl font-black text-black opacity-20 -rotate-12">
        KICAW!
      </div>
      <div className="bg-blobs pointer-events-none absolute right-[25%] bottom-[22%] text-5xl font-black text-black opacity-20 rotate-6">
        POW!
      </div>
      <div className="w-full h-full gap-20 flex flex-col items-start justify-center">
        <div className="flex mt-25 md:mt-30 flex-col w-full h-full px-5 md:px-0 md:mx-40 items-start justify-center gap-7">
          <motion.div
            viewport={{ once: true }}
            initial={{ rotate: -10, scale: 0 }}
            whileInView={{ rotate: -2, scale: 1 }}
            transition={{ type: "spring", stiffness: 350, damping: 16 }}
            className="rounded-tr-xl text-sm rounded-bl-xl border-2 border-black bg-amber-300 px-3 md:px-4 py-1 font-black text-black shadow-[4px_4px_0px_#000]"
          >
            FULLSTACK DEVELOPER
          </motion.div>
          {/* NOT MOBILE DEVICE */}
          <h1
            className={`${isMobile ? "hidden" : "block"}  flex flex-col items-start justify-center text-5xl font-black leading-[0.95] text-amber-200 md:text-7xl lg:text-8xl drop-shadow-[5px_5px_0px_#000]`}
          >
            <span className="title-split-desktop overflow-hidden opacity-0">
              High-performance websites
            </span>
            <span className="title-split-desktop overflow-hidden opacity-0">
              built for real users.
            </span>
          </h1>
          <h2
            className={`${isMobile ? "hidden" : "block"} flex flex-col text-black font-bold text-base md:text-xl`}
          >
            <span className="title-split-two overflow-hidden opacity-0">
              I build fast, responsive websites and web apps
            </span>
            <span className="title-split-two overflow-hidden opacity-0">
              focused on performance, UX, and real results.
            </span>
          </h2>
          {/* MOBILE DEVICE */}
          <h1
            className={`${isMobile ? "block" : "hidden"}  flex flex-col items-start justify-center text-3xl font-black leading-[0.95] text-amber-200 drop-shadow-[5px_5px_0px_#000] w-full`}
          >
            <span className="title-split-mobile overflow-hidden opacity-0">
              High-performance websites built for real users.
            </span>
          </h1>
          <h2
            className={`${isMobile ? "block" : "hidden"} flex flex-col text-black font-bold text-base md:text-xl`}
          >
            <span className="title-split-two overflow-hidden opacity-0">
              I build fast, responsive websites and web apps focused on
              performance, UX, and real results.
            </span>
          </h2>
          <div className="flex gap-5">
            <MotionLink
              href="/contact"
              viewport={{ once: true }}
              initial={{ scale: 0, rotate: -2 }}
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
              whileInView={{
                boxShadow: "5px 5px 0px #000",
                scale: 1,
                rotate: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 18,
              }}
              className="cursor-pointer rounded-tr-xl rounded-bl-xl border-2 border-black bg-amber-800 px-5 md:px-10 py-3 text-base md:text-lg font-black text-amber-100"
            >
              Contact Us
            </MotionLink>
            <MotionLink
              href="/about"
              viewport={{ once: true }}
              initial={{ scale: 0, rotate: 2 }}
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
              whileInView={{
                boxShadow: "5px 5px 0px #000",
                scale: 1,
                rotate: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 18,
              }}
              className="cursor-pointer rounded-tl-xl rounded-br-xl border-2 border-black bg-amber-300 px-5 md:px-10 py-3 text-base md:text-lg font-black text-black shadow-[5px_5px_0px_#000]"
            >
              About Us
            </MotionLink>
          </div>
        </div>
        <div
          className="border-t w-full py-3 text-lg whitespace-nowrap overflow-hidden"
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
        >
          <div
            ref={marqueeRef}
            className="flex w-fit text-base md:text-lg gap-2"
          >
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
