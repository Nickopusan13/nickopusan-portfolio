"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
export default function SectionThree() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinkMaskRef = useRef<HTMLDivElement>(null);
  const pinkText = useRef(null);
  const textOne = useRef<HTMLDivElement>(null);
  const textTwo = useRef<HTMLDivElement>(null);
  const textThree = useRef<HTMLDivElement>(null);
  const textFour = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
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
          start: "top 40%",
        },
      });
      sctl
        .to(textOne.current, {
          duration: 0.4,
          scrambleText: {
            text: "I ALWAYS BUILT",
            revealDelay: 0.05,
          },
        })
        .to(textTwo.current, {
          duration: 0.4,
          scrambleText: {
            text: "SOMETHING AMAZING",
            revealDelay: 0.05,
          },
        });
      sctl
        .to(textThree.current, {
          duration: 0.4,
          scrambleText: {
            text: "LET'S DIVE",
            revealDelay: 0.05,
          },
        })
        .to(textFour.current, {
          duration: 0.4,
          scrambleText: {
            text: "IN THIS REALM",
            revealDelay: 0.05,
          },
        });
    },
    { scope: sectionRef },
  );
  return (
    <section
      ref={sectionRef}
      className="overflow-hidden flex h-svh px-2 py-20 md:py-15 sm:px-5 lg:px-10 bg-orange-400 will-change-transform"
    >
      <div className="flex flex-col lg:gap-10 font-bold relative w-full">
        <h2 className="lg:text-7xl xl:text-8xl sm:text-5xl md:text-6xl text-[28px] absolute top-20 left-0 lg:top-0 lg:left-0 flex flex-col">
          <span ref={textOne} className="inline-block text-cyan-300" />
          <span ref={textTwo} className="text-yellow-300 inline-block" />
        </h2>
        <div
          ref={pinkMaskRef}
          className="inset-0 z-50 pointer-events-none h-full"
        >
          <div className="overflow-hidden text-center flex flex-col sm:flex-row items-center justify-center h-full sm:text-[9px] md:text-[10px] lg:text-sm text-[7px]">
            <span className="text-amber-200">Welcome to the</span>
            <span
              style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
              className={`bg-amber-400 border lg:border-2 border-amber-200 px-1 lg:px-2 text-[#ec4899] rounded-xs lg:rounded-sm sm:-rotate-1 sm:-translate-x-0.5 md:-translate-x-0.75`}
              ref={pinkText}
            >
              Pink Realm
            </span>
          </div>
        </div>
        <h2 className="lg:text-7xl xl:text-8xl md:text-6xl sm:text-5xl text-[28px] absolute bottom-20 right-0 gap-2 lg:bottom-0 lg:right-0 sm:gap-3 md:gap-5 lg:gap-10 flex flex-row">
          <span ref={textThree} className="text-sky-600" />
          <span ref={textFour} className="text-purple-900" />
        </h2>
      </div>
    </section>
  );
}
