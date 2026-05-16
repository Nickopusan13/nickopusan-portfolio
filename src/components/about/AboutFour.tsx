"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "motion/react";

const item = [
  {
    title: "Precision.",
    subTitle:
      "I focus on building scalable applications with maintainable structures, efficient APIs, and modern technologies that create smooth and reliable user experiences.",
  },
  {
    title: "Automation.",
    subTitle:
      "From web scraping pipelines to ETL workflows, I develop systems that reduce manual work, process large-scale data, and improve operational efficiency.",
  },
  {
    title: "Motion.",
    subTitle:
      "I combine development with animation to craft immersive interfaces using GSAP, Framer Motion, and thoughtful interaction design principles.",
  },
  {
    title: "Performance.",
    subTitle:
      "Every project is built with optimization in mind — fast load times, responsive layouts, scalable systems, and clean code that performs well in production.",
  },
  {
    title: "Scalability.",
    subTitle:
      "I design systems and architectures that can grow efficiently, handling larger workloads and evolving product requirements without sacrificing stability.",
  },
  {
    title: "Creativity.",
    subTitle:
      "Beyond functionality, I enjoy creating experiences that feel visually engaging, interactive, and memorable through thoughtful design and motion.",
  },
];

export default function AboutFour() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemRef = useRef<(HTMLDivElement | null)[]>([]);
  useGSAP(
    () => {
      itemRef.current.forEach((section) => {
        if (!section) return;
        const itemTitle = section.querySelector(".item-title");
        gsap.to(itemTitle, {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          },
        });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
          },
        });
        tl.fromTo(
          titleRef.current,
          {
            yPercent: 100,
          },
          { yPercent: 0, ease: "power3.out" },
        );
      });
    },
    { scope: sectionRef },
  );
  return (
    <section
      ref={sectionRef}
      className="relative min-h-svh pb-20 md:pb-30 w-full flex flex-col justify-center items-center z-20 overflow-hidden bg-zinc-900"
    >
      <div className="flex h-svh justify-center items-center w-full">
        <div className="overflow-hidden">
          <h3
            ref={titleRef}
            className="text-white text-4xl md:text-8xl text-center px-5 md:px-20 font-black drop-shadow-[6px_6px_0px_#000] md:drop-shadow-[10px_10px_0px_#000]"
          >
            The principles behind how I design and build experiences
          </h3>
        </div>
      </div>
      <div className="w-full flex flex-col px-5 md:px-20 text-white gap-50">
        {item.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              ref={(el) => {
                itemRef.current[idx] = el;
              }}
              className={`w-full items-center flex justify-center md:${isEven ? "justify-start" : "justify-end"}`}
            >
              <div className="h-fit relative max-w-lg">
                <span className="absolute left-0 top-0">{idx + 1}</span>
                <div className="flex flex-col pl-4 md:pl-5 gap-5">
                  <div
                    style={{
                      clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
                    }}
                    className="item-title bg-zinc-800 w-fit px-2 border-4 border-zinc-700 rounded-2xl"
                  >
                    <h4 className="text-4xl md:text-6xl text-zinc-100">
                      {item.title}
                    </h4>
                  </div>
                  <motion.span
                    initial={{
                      opacity: 0,
                      y: 80,
                      rotate: 3,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      rotate: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      bounce: 0.5,
                    }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="inline-block text-base md:text-lg text-justify md:text-start leading-relaxed font-medium text-zinc-100"
                  >
                    {item.subTitle}
                  </motion.span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
