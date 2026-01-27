"use client";

import { useMediaQuery } from "@/utils/useMediaQuery";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { motion } from "motion/react";
import { useRef } from "react";

export default function SectionSeven() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef(null);
  const firstText = useRef<HTMLDivElement>(null);
  const secText = useRef<HTMLDivElement>(null);
  const thirdText = useRef<HTMLDivElement>(null);
  const fourText = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const titleSplit = SplitText.create(titleRef.current, {
      type: "chars",
    });
    const tl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });
    gsap.from(titleSplit.chars, {
      yPercent: 50,
      opacity: 0,
      stagger: 0.05,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 30%",
      },
    });
    tl.to(firstText.current, {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
      ease: "circ.out",
    });
    tl.to(secText.current, {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
      ease: "circ.out",
    });
    tl.to(thirdText.current, {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
      ease: "circ.out",
    });
    tl.to(fourText.current, {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
      ease: "circ.out",
    });
  });
  return (
    <section
      ref={sectionRef}
      className="min-h-dvh bg-pink-600 cursor-default py-10 lg:py-20 flex flex-col items-center justify-center overflow-hidden"
    >
      <h2
        ref={titleRef}
        className="text-5xl lg:text-6xl font-extrabold mb-10 text-center text-amber-200"
      >
        Why Choose Us
      </h2>
      <div className="flex flex-col items-center justify-center h-full text-4xl lg:text-9xl">
        <motion.span
          whileInView={{ y: 20 }}
          ref={firstText}
          style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
          className="bg-amber-400 text-pink-900 px-3 py-2 border-pink-800 rounded-4xl border-7 rotate-1 z-10"
        >
          Fast Delivery
        </motion.span>
        <span
          className="bg-pink-300 text-purple-800 px-3 py-2 border-pink-800 rounded-4xl border-7 -rotate-1 z-0"
          ref={secText}
          style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
        >
          {" "}
          Smooth Interaction
        </span>
        <motion.span
          whileInView={{ y: -20 }}
          className="bg-teal-400 text-yellow-900 px-3 py-2 border-pink-900 rounded-4xl border-7 rotate-0.5 z-10"
          ref={thirdText}
          style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
        >
          {" "}
          Dynamic Designs
        </motion.span>
        <motion.span
          whileInView={{ y: -30 }}
          className="bg-purple-500 text-amber-300 px-3 py-2 border-pink-900 rounded-4xl border-7 -rotate-1 z-0"
          ref={fourText}
          style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
        >
          {" "}
          Reliable Solutions
        </motion.span>
      </div>
    </section>
  );
}
