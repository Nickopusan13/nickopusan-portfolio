"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function AboutFive() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
          end: "30% top",
          scrub: true,
        },
      });
      tl.fromTo(
        sectionRef.current,
        {
          yPercent: -70,
          backgroundColor: "#18181b",
          scale: 0.5,
        },
        {
          yPercent: 0,
          ease: "power1.inOut",
          backgroundColor: "#fcd34d",
          rotate: 0,
          scale: 1,
        },
      );
      gsap.fromTo(
        titleRef.current,
        { opacity: 0 },
        {
          duration: 1,
          opacity: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "30% top",
            scrub: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );
  return (
    <div className="h-svh bg-zinc-900">
      <div
        ref={sectionRef}
        className="min-h-svh justify-center flex items-center bg-amber-300"
      >
        <div className="flex flex-col items-center text-center gap-6 px-6">
          <span className="text-zinc-900 text-lg font-medium tracking-wide">
            Ready to build something impactful?
          </span>
          <div
            ref={titleRef}
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="bg-amber-700 px-5 py-3 rounded-lg border-4 border-black"
          >
            <h2 className="text-6xl md:text-8xl font-black text-amber-300 drop-shadow-[6px_6px_0px_#000] leading-none">
              Let’s Create Together.
            </h2>
          </div>
          <p className="max-w-2xl text-zinc-800 text-lg md:text-xl leading-relaxed">
            From fullstack applications and automation systems to immersive
            digital experiences. I turn ideas into scalable and interactive
            products.
          </p>
        </div>
      </div>
    </div>
  );
}
