"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { SplitText } from "gsap/all";
import { motion } from "motion/react";
import Link from "next/link";
import { skill } from "../ui/Skill";

export default function SectionSix() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!sectionRef.current || !titleRef.current) return;
    const mm = gsap.matchMedia();
    mm.add("(max-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=400%",
          pin: true,
          scrub: true,
        },
      });

      skill.forEach((item, i) => {
        tl.fromTo(
          `.card-${i}`,
          {
            bottom: item.bottom,
            right: item.right,
            opacity: 0,
            ease: "power3.out",
            duration: 1,
          },
          {
            top: item.topMobile,
            left: item.leftMobile,
            opacity: 1,
            duration: 0.3,
            ease: "power3.out",
          },
          i * 0.2,
        );
      });

      const titleSplit = SplitText.create(titleRef.current, { type: "chars" });
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
    });

    mm.add("(min-width: 769px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=400%",
          pin: true,
          scrub: true,
        },
      });

      skill.forEach((item, i) => {
        tl.fromTo(
          `.card-${i}`,
          {
            bottom: item.bottom,
            right: item.right,
            opacity: 0,
            ease: "power3.out",
            duration: 1,
          },
          {
            top: item.top,
            left: item.left,
            opacity: 1,
            duration: 0.3,
            ease: "power3.out",
          },
          i * 0.2,
        );
      });
      const titleSplit = SplitText.create(titleRef.current, { type: "chars" });
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
    });
    return () => mm.revert();
  });
  return (
    <section
      ref={sectionRef}
      className="h-dvh relative flex-col lg:flex-wrap bg-pink-800 p-5 lg:p-10 overflow-hidden flex lg:justify-end justify-center"
    >
      <aside
        ref={titleRef}
        className="lg:absolute justify-center w-full lg:justify-end lg:top-10 lg:right-10 flex flex-col gap-3 lg:gap-0 lg:flex-col font-bold text-4xl lg:text-5xl tracking-tight items-end lg:w-fit text-amber-200"
      >
        <span>THE ENGINE</span>
        <span>BEHIND THE MAGIC</span>
      </aside>
      <div className="relative w-full h-[80vh]">
        {skill.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -20 }}
            className={`card-${idx} absolute w-50 h-50 sm:w-60 sm:h-60 lg:w-100 lg:h-100 bg-pink-900 text-amber-300 border-amber-300/50 border-2 shadow-2xl`}
          >
            <div className="flex flex-col p-2 lg:p-5 w-full h-full text-3xl lg:text-5xl font-extrabold">
              <p className="w-full h-full justify-start flex items-start">
                {item.number}
              </p>
              <div className="flex flex-col items-center justify-center px-2">
                <Link href={item.href}>{item.icon}</Link>
              </div>
              <p className="w-full h-full justify-end flex items-end">
                {item.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
