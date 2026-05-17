"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitText from "gsap/SplitText";
import Image from "next/image";
import { motion } from "motion/react";

const item = [
  {
    title: "Building modern fullstack applications.",
    subTitle:
      "Specialized in Next.js, FastAPI, Supabase, and scalable backend architecture with a strong focus on performance and clean UI.",
  },
  {
    title: "Creating scraping & automation systems.",
    subTitle:
      "Experienced with Scrapy, Playwright, Selenium, and ETL pipelines for large-scale structured data extraction.",
  },
  {
    title: "Designing interactive web experiences.",
    subTitle:
      "Using GSAP, Framer Motion, and Tailwind CSS to craft smooth, immersive, and motion-driven interfaces.",
  },
  {
    title: "Turning workflows into scalable tools.",
    subTitle:
      "Building automation, APIs, and cloud-ready systems that improve efficiency and scalability.",
  },
];

const colors = [
  "#1f2937", // dark slate blue
  "#3f1d2e", // dark wine
  "#1e3a2f", // dark emerald
  "#2d1b69", // dark purple
];
export default function AboutTwo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<(HTMLDivElement | null)[]>([]);
  const pinRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      itemRef.current.forEach((section, idx) => {
        if (!section) return;
        const title = section.querySelector(".title");
        const subtitle = section.querySelector(".subtitle");
        const split = new SplitText(title, {
          type: "words",
        });
        const splitSub = new SplitText(subtitle, {
          type: "words",
        });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        tl.to(".item-section", {
          backgroundColor: colors[idx],
          ease: "power1.inOut",
        });
        gsap.from(split.words, {
          delay: 0.5,
          yPercent: 300,
          stagger: 0.2,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 10%",
            end: "top top",
            scrub: 1.5,
          },
        });
        gsap.from(splitSub.words, {
          delay: 0.5,
          yPercent: 400,
          stagger: 0.2,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 10%",
            end: "top top",
            scrub: 1.5,
          },
        });
        return () => {
          splitSub.revert();
          split.revert();
          tl.revert();
        };
      });
    },
    { scope: sectionRef },
  );
  return (
    <section ref={sectionRef} className="min-h-svh flex flex-col bg-amber-700">
      {item.map((item, idx) => {
        return (
          <div
            key={idx}
            ref={(el) => {
              itemRef.current[idx] = el;
            }}
            className={`item-section h-svh flex sticky top-0 items-center justify-center text-white overflow-hidden border-4`}
          >
            <div className="flex flex-col h-full items-center justify-center md:items-start lg:items-center w-full lg:w-1/2 gap-10 pl-5 pr-5 lg:pl-10 lg:pr-10 xl:pr-25 overflow-hidden">
              <div className="flex flex-col overflow-hidden gap-2">
                <motion.div
                  initial={{
                    rotate: 3,
                    scale: 0,
                  }}
                  whileInView={{
                    rotate: 0,
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.8,
                    type: "spring",
                    bounce: 0.5,
                  }}
                  viewport={{ once: true, amount: "all" }}
                  className="top-0 left-0 w-fit px-3 py-1 bg-amber-600 rounded-bl-2xl rounded-tr-2xl"
                >
                  {idx + 1}
                </motion.div>
                <h3 className="title text-3xl md:text-start text-center md:text-4xl font-black">
                  {item.title}
                </h3>
              </div>

              <div className="overflow-hidden">
                <span className="subtitle block text-base text-justify md:text-start md:text-lg">
                  {item.subTitle}
                </span>
              </div>
            </div>
            <div
              ref={pinRef}
              className={`hidden lg:flex flex-col w-1/2 h-full overflow-hidden`}
            >
              <div className="relative h-full w-full">
                <Image
                  fill
                  alt=""
                  src="/assets/caufi/caufi_1.webp"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
