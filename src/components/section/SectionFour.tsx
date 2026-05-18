"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import { motion } from "motion/react";

export default function SectionFour() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  useGSAP(
    () => {
      const titleSplit = SplitText.create(title1Ref.current, {
        type: "chars",
      });
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 25%",
            end: "bottom top",
            scrub: true,
          },
        });
        tl.to(sectionRef.current, {
          rotate: 10,
          scale: 0.9,
          yPercent: 30,
          ease: "power1.inOut",
        });
        gsap.from(titleSplit.chars, {
          yPercent: 50,
          opacity: 0,
          stagger: 0.02,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 30%",
          },
        });
        gsap.to(title2Ref.current, {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 10%",
          },
        });
      });
      return () => {
        titleSplit.revert();
        ctx.revert();
      };
    },
    { scope: sectionRef },
  );
  return (
    <section
      ref={sectionRef}
      className="h-svh w-full flex flex-col gap-15 justify-center items-center text-pink-300 text-center px-10 bg-[#ec4899] z-10 will-change-transform overflow-hidden"
    >
      <h1 className="text-3xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold flex flex-col">
        <span
          ref={title1Ref}
          className="z-0 whitespace-nowrap overflow-hidden translate-y-2 md:translate-y-3 lg:translate-y-5 xl:translate-y-7"
        >
          {`I DON'T BUILD WEBSITES.`}
        </span>
        <span
          style={{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          }}
          ref={title2Ref}
          className="z-10 inline-block text-pink-600 bg-amber-400 px-5 -rotate-1 md:-rotate-1.5 xl:-rotate-2 border-pink-600 border-7"
        >
          I BUILD WORLDS.
        </span>
      </h1>
      <div className="text-lg sm:text-2xl md:text-2xl lg:text-2xl opacity-90 space-y-1">
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          Scroll is my camera.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          Motion is my language.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          Code is my canvas.
        </motion.p>
      </div>
    </section>
  );
}
