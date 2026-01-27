"use client";

import { motion } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useMediaQuery } from "@/utils/useMediaQuery";

export default function SectionThree() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinkMaskRef = useRef<HTMLDivElement>(null);
  const pinkText = useRef(null);
  const textOne = useRef<HTMLDivElement>(null);
  const textTwo = useRef<HTMLDivElement>(null);
  const textThree = useRef<HTMLDivElement>(null);
  const textFour = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery();
  useGSAP(() => {
    gsap.set(pinkMaskRef.current, {
      clipPath: "circle(0% at 50% 50%)",
      backgroundColor: "#ff8904",
    });
    gsap.set(sectionRef.current, {
      transformOrigin: "50% 50%",
    });
    gsap.to(pinkText.current, {
      delay: 1,
      opacity: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.out,",
      scrollTrigger: {
        trigger: pinkText.current,
        start: "top 10%",
        scrub: 1.5,
      },
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: true,
      },
    });
    tl.to(pinkMaskRef.current, {
      clipPath: "circle(150% at 50% 50%)",
      backgroundColor: "#ec4899",
      ease: "none",
    });
    tl.to(
      sectionRef.current,
      {
        scale: 5,
        ease: "none",
      },
      0,
    );
    const sctl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 30%",
      },
    });
    sctl
      .to(textOne.current, {
        duration: 0.8,
        scrambleText: {
          text: "I ALWAYS BUILT",
          revealDelay: 0.05,
        },
      })
      .to(textTwo.current, {
        duration: 0.8,
        scrambleText: {
          text: "SOMETHING AMAZING",
          revealDelay: 0.05,
        },
      });
    sctl
      .to(textThree.current, {
        duration: 0.8,
        scrambleText: {
          text: "LET'S DIVE",
          revealDelay: 0.05,
        },
      })
      .to(textFour.current, {
        duration: 0.8,
        scrambleText: {
          text: "IN THIS REALM",
          revealDelay: 0.05,
        },
      });
  });
  return (
    <section
      ref={sectionRef}
      className="overflow-hidden flex h-dvh py-0 lg:py-15 px-3 lg:px-10 bg-orange-400"
    >
      <motion.div className="flex flex-col lg:gap-10 font-bold relative w-full">
        <h2 className="lg:text-9xl text-5xl absolute top-20 left-0 lg:top-0 lg:left-0 ">
          <span ref={textOne} className="inline-block text-cyan-300" />
          <br />
          <span ref={textTwo} className="text-yellow-300 inline-block" />
        </h2>
        <div
          ref={pinkMaskRef}
          className="inset-0 z-50 pointer-events-none h-full"
        >
          <div className="text-center flex items-center justify-center h-full md:text-[10px] lg:text-sm text-[5px]">
            <span className="text-amber-200 ">Welcome to the</span>
            <motion.span
              whileInView={isMobile ? { x: -1 } : { x: -2 }}
              style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
              className="bg-amber-400 border lg:border-2 border-amber-200 px-1 lg:px-2 text-[#ec4899] rounded-sm -rotate-2"
              ref={pinkText}
            >
              Pink Realm
            </motion.span>
          </div>
        </div>
        <h2 className="lg:text-9xl text-5xl absolute bottom-20 right-0 lg:bottom-0 lg:right-0 lg:gap-10 flex lg:flex-row flex-col">
          <span ref={textThree} className="text-sky-600" />
          <span ref={textFour} className="text-purple-900" />
        </h2>
      </motion.div>
    </section>
  );
}
