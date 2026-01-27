"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/all";
import { motion } from "motion/react";
import { useMediaQuery } from "@/utils/useMediaQuery";

export default function SectionFour() {
  const sectionOneRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const isMobile = useMediaQuery();
  useGSAP(() => {
    const titleSplit = SplitText.create(title1Ref.current, {
      type: "chars",
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionOneRef.current,
        start: "5% top",
        end: "bottom top",
        scrub: true,
      },
    });
    tl.to(sectionOneRef.current, {
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
        trigger: sectionOneRef.current,
        start: "top 30%",
      },
    });
    gsap.to(title2Ref.current, {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.out,",
      scrollTrigger: {
        trigger: sectionOneRef.current,
        start: "top 10%",
      },
    });
  });
  return (
    <section
      ref={sectionOneRef}
      className="h-dvh w-full flex flex-col justify-center items-center text-pink-300 text-center px-10 bg-[#ec4899] z-10 will-change-transform overflow-hidden"
    >
      <h1 className="text-4xl lg:text-[clamp(3rem,8vw,8rem)] font-bold flex flex-col">
        <motion.span
          whileInView={isMobile ? { y: 7 } : { y: 45 }}
          viewport={{ once: true }}
          ref={title1Ref}
          className="z-0 whitespace-nowrap overflow-hidden"
        >
          {`I DON'T BUILD WEBSITES.`}
        </motion.span>
        <motion.span
          style={{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          }}
          ref={title2Ref}
          className="z-10 inline-block text-pink-600 bg-amber-400 px-5 -rotate-2 border-pink-600 border-7"
        >
          I BUILD WORLDS.
        </motion.span>
      </h1>
      <div className="mt-16 text-lg lg:text-2xl opacity-80 space-y-1">
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
