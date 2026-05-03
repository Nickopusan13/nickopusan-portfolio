"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "@/utils/useMediaQuery";

export default function SectionFive() {
  const experiencesRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const firstMessage = useRef<HTMLDivElement>(null);
  const secondMessage = useRef<HTMLDivElement>(null);
  const paragraphMessage = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery();
  useGSAP(() => {
    const firstMessageSplit = SplitText.create(firstMessage.current, {
      type: "words",
    });
    const secondMessageSplit = SplitText.create(secondMessage.current, {
      type: "words",
    });
    const paragraphMessageSplit = SplitText.create(paragraphMessage.current, {
      type: "chars",
    });
    gsap.to(experiencesRef.current, {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.out,",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 10%",
      },
    });
    gsap.to(firstMessageSplit.words, {
      color: "#fee685",
      ease: "none",
      stagger: 1,
      scrollTrigger: {
        trigger: firstMessage.current,
        start: "top center",
        end: "35% center",
        scrub: 2,
      },
    });
    gsap.to(secondMessageSplit.words, {
      color: "#fee685",
      ease: "none",
      stagger: 1,
      scrollTrigger: {
        trigger: secondMessage.current,
        start: "top center",
        end: "40% center",
        scrub: 2,
      },
    });
    gsap.from(paragraphMessageSplit.chars, {
      yPercent: 50,
      opacity: 0,
      stagger: 0.01,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: paragraphMessage.current,
        start: "bottom bottom",
      },
    });
  });
  return (
    <section
      ref={sectionRef}
      className="min-h-svh relative bg-pink-800 z-20 flex flex-col items-center justify-center text-amber-200/20 lg:text-8xl text-4xl text-center font-bold uppercase py-20 overflow-hidden"
    >
      <span
        ref={firstMessage}
        className={`z-0 ${isMobile ? "translate-y-1" : "translate-y-5"}`}
      >
        Crafting
      </span>
      <span
        ref={experiencesRef}
        className="bg-amber-400 px-3 py-2 border-4 border-pink-800 text-pink-800 -rotate-3 z-20"
        style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
      >
        Experiences
      </span>
      <div
        className={`flex flex-col items-center justify-center z-0 ${isMobile ? "translate-1" : "-translate-y-3"}`}
        ref={secondMessage}
      >
        <span> One Pixel at a Time</span>
        <span>
          Designing Worlds <br /> Through Motion
        </span>
      </div>
      <div
        ref={paragraphMessage}
        className="lg:text-base text-base max-w-3xl text-amber-200 mt-20 font-normal mx-5"
      >
        <p>
          My work lives at the intersection of design and engineering. I build
          interfaces that move, respond, and breathe — transforming static ideas
          into dynamic digital worlds.
        </p>
      </div>
    </section>
  );
}
