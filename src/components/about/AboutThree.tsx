"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function AboutThree() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          delay: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 20%",
            end: "top top",
            scrub: 1.5,
          },
        });
        tl.fromTo(
          ".text-animate",
          { yPercent: 150 },
          { yPercent: 0, ease: "power3.out" },
        );
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        tl2.to(sectionRef.current, {
          yPercent: 50,
          ease: "power1.inOut",
          backgroundColor: "#18181b",
        });
        return () => {
          ctx.revert();
        };
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="flex relative gap-5 flex-col z-10 will-change-transform h-svh w-full items-center justify-center bg-amber-300 overflow-hidden lg:px-0 px-3"
    >
      <div className="overflow-hidden">
        <h3 className="text-animate text-6xl text-center md:text-7xl lg:text-8xl font-black">
          {" "}
          Build. Automate. Innovate.
        </h3>
      </div>
      <div className="overflow-hidden">
        <span className="text-animate inline-block text-center lg:text-start text-base md:text-xl lg:text-lg">
          Fullstack Developer crafting scalable apps, automation systems, and
          interactive web experiences.
        </span>
      </div>
    </section>
  );
}
