"use client";

import { motion } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLongArrowAltRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const item = [
  {
    title1: "React & Next.js Development",
    title2: "Beautiful, fast, and conversion-focused frontend experiences",
    description:
      "I create modern web interfaces using React, Next.js, TypeScript, Tailwind CSS, and responsive design best practices. Every project is built with performance, accessibility, and user experience in mind to help clients make a strong digital impression.",
  },
  {
    title1: "Node.js & Python Backend",
    title2: "Secure, scalable, and powerful backend systems",
    description:
      "I build robust backend solutions with Node.js, Express.js, Python, APIs, authentication systems, and database integrations. Whether it is a dashboard, SaaS platform, booking system, or custom business tool, I create backends that are reliable and scalable.",
  },
  {
    title1: "Full Stack Web Applications",
    title2: "End-to-end development for complete digital products",
    description:
      "I handle the complete development process, from planning and UI development to backend logic, database design, API integration, testing, and deployment. I turn business ideas into professional web applications that are ready for real users.",
  },
  {
    title1: "Business-Driven Websites",
    title2: "Websites built to attract, engage, and convert clients",
    description:
      "I design and develop websites that do more than look good. My work focuses on clear messaging, smooth user experience, fast loading speed, SEO-friendly structure, and strong calls to action to help businesses gain trust and generate more leads.",
  },
];

export default function SecTwoProject() {
  const scrollSection = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  useGSAP(
    () => {
      if (!scrollSection.current) return;

      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      if (!cards.length) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        gsap.set(cards, {
          position: "absolute",
          yPercent: 120,
          zIndex: (i) => i + 1,
        });

        gsap.set(cards[0], {
          yPercent: 0,
          scale: 1,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: scrollSection.current,
            start: "top top",
            end: `+=${(cards.length - 1) * 100}%`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cards.slice(1).forEach((card, i) => {
          const previousCard = cards[i];

          tl.to(
            previousCard,
            {
              yPercent: 5,
              duration: 0.6,
              ease: "none",
            },
            i,
          ).to(
            card,
            {
              yPercent: 5,
              duration: 0.6,
              ease: "none",
            },
            i,
          );
        });
      });

      return () => {
        mm.revert();
      };
    },
    {
      scope: scrollSection,
    },
  );
  return (
    <section className="relative min-h-svh w-full overflow-hidden bg-amber-500 text-black border-y-4 border-black">
      <div className="relative z-10 px-3 py-5 md:px-5 md:py-8 xl:px-10 lg:py-16">
        <div
          className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="flex flex-col items-start justify-center gap-5 md:rounded-tr-4xl rounded-tr-2xl rounded-bl-2xl border-3 md:rounded-bl-4xl md:border-4 border-black bg-amber-300 px-3 py-4 font-bold shadow-[5px_5px_0px_#000] md:shadow-[8px_8px_0px_#000] md:px-5 xl:px-10"
          >
            <div className="flex w-full items-center justify-between text-black">
              <span className="rounded-tr-xl rounded-bl-xl border-2 border-black bg-orange-500 px-2 md:px-3 py-1 text-sm font-black shadow-[3px_3px_0px_#000]">
                SOLUTIONS
              </span>
              <span className="flex size-8 items-center justify-center rounded-full border-2 border-black bg-amber-100 font-black shadow-[3px_3px_0px_#000]">
                X
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight text-black drop-shadow-[3px_3px_0px_rgba(255,255,255,0.65)]">
              Industrialized technology for an evolving environment
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1,
            }}
            className="hidden min-h-64 rounded-tl-4xl rounded-br-4xl border-4 border-black bg-amber-200 shadow-[8px_8px_0px_#000] lg:block"
          >
            <div
              className="h-full w-full opacity-[0.18]"
              style={{
                backgroundImage: `radial-gradient(circle, #000 1.5px, transparent 1.5px)`,
                backgroundSize: "18px 18px",
              }}
            />
          </motion.div>
        </div>
        <div
          ref={scrollSection}
          className="relative mt-8 md:mt-10 flex flex-col gap-8 lg:gap-10 lg:block lg:h-[78svh]"
        >
          {item.map((item, idx) => {
            const number = idx + 1;
            return (
              <div
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                key={idx}
                className={`grid w-full grid-cols-1 gap-4 lg:gap-6 md:rounded-tr-4xl rounded-tr-2xl rounded-bl-2xl md:rounded-bl-4xl border-3 md:border-4 border-black bg-amber-400 p-3 shadow-[7px_7px_0px_#000] md:shadow-[10px_10px_0px_#000] lg:absolute lg:left-0 lg:top-0 lg:h-full lg:grid-cols-2 xl:grid-cols-[20%_1fr_30%] md:p-8`}
              >
                <div className="flex lg:w-fit xl:w-full items-start border-b-3 border-black pb-4 lg:border-b-0 lg:border-r-4 lg:pb-0 lg:pr-5">
                  <span className=" flex size-10 md:size-20 items-center justify-center md:rounded-tr-2xl rounded-tr-xl rounded-bl-xl md:rounded-bl-2xl border-3 md:border-4 border-black bg-orange-500 text-2xl md:text-5xl font-black text-black shadow-[3px_3px_0px_#000] md:shadow-[5px_5px_0px_#000]">
                    {number}
                  </span>
                </div>
                <div className="flex flex-col w-full gap-4 lg:gap-8 items-center lg:items-start">
                  <div className="flex flex-col items-center md:items-start gap-4 w-full">
                    <h3 className="w-fit rounded-tr-xl rounded-bl-xl border-2 border-black bg-amber-200 px-2 md:px-3 py-1 text-base md:text-lg font-black shadow-[3px_3px_0px_#000]">
                      {item.title1}
                    </h3>
                    <h3 className="text-2xl text-center md:text-start font-black leading-tight lg:text-5xl">
                      {item.title2}
                    </h3>
                  </div>
                  <p className="lg:max-w-3xl text-base font-bold text-justify lg:text-start leading-relaxed text-black/75 md:text-lg">
                    {item.description}
                  </p>
                  <motion.button
                    whileHover={{
                      scale: 1.06,
                      x: -4,
                      y: -4,
                      rotate: -2,
                      boxShadow: "8px 8px 0px #000",
                    }}
                    whileTap={{
                      scale: 0.94,
                      x: 2,
                      y: 2,
                      rotate: 0,
                      boxShadow: "2px 2px 0px #000",
                    }}
                    whileInView={{ boxShadow: "4px 4px 0px #000" }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 18,
                    }}
                    className="flex w-fit cursor-pointer items-center gap-2 md:gap-3 rounded-tr-xl rounded-bl-xl border-2 border-black bg-amber-200 px-3 py-2 md:px-5 md:py-3 text-lg font-black text-black"
                  >
                    <span>Learn More</span>
                    <span>
                      <FaLongArrowAltRight />
                    </span>
                  </motion.button>
                </div>
                <motion.div
                  whileHover={{
                    rotate: 2,
                    scale: 1.03,
                    boxShadow: "10px 10px 0px #000",
                  }}
                  whileInView={{ boxShadow: "6px 6px 0px #000" }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="hidden xl:block min-h-72 overflow-hidden rounded-tl-4xl rounded-br-4xl border-4 border-black bg-amber-100
            "
                >
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage: `
                  radial-gradient(circle at 30% 30%, rgba(249,115,22,0.9) 0px, transparent 26%),
                  radial-gradient(circle at 70% 70%, rgba(253,224,71,0.9) 0px, transparent 28%),
                  radial-gradient(circle, #000 1.4px, transparent 1.4px)
                `,
                      backgroundSize: `
                  auto,
                  auto,
                  18px 18px
                `,
                    }}
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
