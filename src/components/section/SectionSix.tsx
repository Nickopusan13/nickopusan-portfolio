"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import { motion } from "motion/react";
import Link from "next/link";
import { skill } from "../ui/Skill";

export default function SectionSix() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (!sectionRef.current || !titleRef.current) return;
      const mm = gsap.matchMedia();
      mm.add("(max-width: 760px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=400%",
            pin: true,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        skill.forEach((item, i) => {
          tl.fromTo(
            `.card-${i}`,
            {
              xPercent: 200,
              yPercent: 50,
              x: item.xMobile,
              y: item.yMobile,
              scale: 0.8,
              opacity: 0,
              ease: "power3.out",
              duration: 1,
            },
            {
              xPercent: 0,
              yPercent: 0,
              x: item.xMobile,
              y: item.yMobile,
              scale: 1,
              opacity: 1,
              duration: 0.3,
              ease: "power3.out",
            },
            i * 0.2,
          );
        });
      });

      mm.add("(min-width: 761px) and (max-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=400%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        skill.forEach((item, i) => {
          tl.fromTo(
            `.card-${i}`,
            {
              xPercent: 200,
              yPercent: 50,
              x: item.xTablet,
              y: item.yTablet,
              opacity: 0,
              scale: 0.8,
              ease: "power3.out",
              duration: 1,
            },
            {
              xPercent: 0,
              yPercent: 0,
              x: item.xTablet,
              y: item.yTablet,
              opacity: 1,
              duration: 0.3,
              scale: 1,
              ease: "power3.out",
            },
            i * 0.2,
          );
        });
      });

      mm.add("(min-width: 1025px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=400%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        skill.forEach((item, i) => {
          tl.fromTo(
            `.card-${i}`,
            {
              xPercent: 200,
              yPercent: 50,
              x: item.x,
              y: item.y,
              opacity: 0,
              scale: 0.8,
              ease: "power3.out",
              duration: 1,
            },
            {
              xPercent: 0,
              yPercent: 0,
              x: item.x,
              y: item.y,
              opacity: 1,
              duration: 0.3,
              scale: 1,
              ease: "power3.out",
            },
            i * 0.2,
          );
        });
      });
      const titleSplit = SplitText.create(titleRef.current, {
        type: "chars",
      });
      gsap.from(titleSplit.chars, {
        yPercent: 50,
        opacity: 0,
        stagger: 0.02,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 30%",
        },
      });
      return () => {
        mm.revert();
        titleSplit.revert();
      };
    },
    { scope: sectionRef },
  );
  return (
    <section ref={sectionRef} className="relative min-h-svh bg-pink-800">
      <div className="h-svh sticky top-0 flex-col md:flex-wrap bg-pink-800 p-5 lg:p-10 overflow-hidden flex md:justify-end justify-center">
        <aside
          ref={titleRef}
          className="md:absolute md:justify-end md:top-10 md:right-10 justify-center w-full flex flex-col gap-3 font-bold text-3xl md:text-5xl tracking-tight items-center md:items-end lg:w-fit text-amber-200"
        >
          <span>THE ENGINE</span>
          <span>BEHIND THE MAGIC</span>
        </aside>
        <div className="relative w-full h-[80svh] flex justify-start">
          {skill.map((item, idx) => (
            <div
              key={idx}
              className={`card-${idx} absolute w-45 h-45 sm:w-80 sm:h-80 lg:w-90 lg:h-90 xl:w-100 xl:h-100`}
            >
              <motion.div
                whileHover={{ y: -20 }}
                className="w-full h-full bg-pink-900 text-amber-300 border-amber-300/50 border-2 shadow-2xl"
              >
                <div className="flex flex-col p-2 md:p-5 w-full h-full text-xl md:text-5xl font-extrabold">
                  <p className="w-full h-full justify-start flex items-start">
                    {item.number}
                  </p>
                  <div className="flex flex-col items-center justify-center px-2">
                    <Link aria-label={item.title} href={item.href}>
                      {item.icon}
                    </Link>
                  </div>
                  <p className="w-full h-full justify-end flex items-end">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
