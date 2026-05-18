"use client";

import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import Image from "next/image";

gsap.registerPlugin(ScrambleTextPlugin);

const item = [
  {
    title: "",
    desc: "I build responsive, high-performance websites and web apps using Python, React, Next.js, and modern tools. My focus is on clean architecture, fast load times, and scalable systems that deliver seamless user experiences.",
    src: "/assets/logo/first.svg",
    imageClassName:
      "hidden lg:block w-[50%] sm:w-[30%] lg:w-[50%] absolute lg:top-20 lg:-right-10 xl:top-10 xl:-right-2 z-10",
  },
  {
    title: "Interactive Experiences",
    desc: "I create smooth animations and scroll based interactions with Motion,GSAP, and Three.js, turning web interfaces into engaging and immersive experiences that delight users.",
    src: "/assets/logo/second.svg",
    imageClassName:
      "lg:block hidden w-[50%] sm:w-[30%] lg:w-[50%] absolute items-center justify-center z-10 lg:top-45 lg:left-50 xl:top-16",
  },
  {
    title: "Scalable Backend Systems",
    desc: "I design robust backend systems using Python (Django, FastAPI, Flask) and Node.js (Express.js), with databases like PostgreSQL, MySQL, and Supabase, ensuring your applications are secure, efficient, and ready to scale.",
    src: "/assets/logo/third.svg",
    imageClassName:
      "lg:block hidden w-[50%] sm:w-[30%] lg:w-[50%] absolute items-center justify-center z-10 lg:top-45 lg:right-0 xl:top-25",
  },
  {
    title: "Deployment & Maintenance",
    desc: "I handle deployment, containerization, and continuous integration with tools like Docker, Vercel, and cloud platforms, making sure your full-stack applications run reliably in production.",
    src: "/assets/logo/fourth.svg",
    imageClassName:
      "lg:block hidden w-[50%] sm:w-[30%] lg:w-[50%] absolute items-center justify-center z-10 lg:top-15 lg:-right-15 xl:top-5",
  },
];

interface itemImageProps {
  src: string;
  imageClassName: string;
  alt: string;
  title?: string;
  desc: string;
}

function ItemSec({ src, imageClassName, alt, title, desc }: itemImageProps) {
  return (
    <div className="relative flex flex-col">
      <Image
        loading="lazy"
        className={imageClassName}
        src={src}
        alt={alt}
        width={300}
        height={300}
        aria-hidden="true"
      />
      <div className="lg:h-screen lg:sticky items-center lg:items-start flex flex-col justify-center gap-2 z-20">
        <h2 className="text-3xl md:text-5xl leading-tight lg:text-4xl lg:text-start text-center text-black">
          {title}
        </h2>
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeIn", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-justify text-lg md:text-xl leading-tight"
        >
          {desc}
        </motion.span>
      </div>
    </div>
  );
}

export default function SectionOne() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const strokePath = useRef<SVGPathElement>(null);
  const asideRef = useRef<HTMLSpanElement>(null);
  const scrambleText = useRef<HTMLDivElement>(null);
  const scrambleTextOne = useRef<HTMLSpanElement>(null);
  const scrambleTextTwo = useRef<HTMLSpanElement>(null);
  const scrambleTextThree = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (strokePath.current) {
        const pathLength = strokePath.current.getTotalLength();
        gsap.set(strokePath.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });
        gsap.to(strokePath.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: asideRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }
      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
          },
        })
        .to(scrambleTextOne.current, {
          duration: 0.3,
          scrambleText: {
            text: "WHAT",
            revealDelay: 0.05,
          },
        })
        .to(scrambleTextTwo.current, {
          duration: 0.3,
          scrambleText: {
            text: "CAN I DO",
            revealDelay: 0.05,
          },
        })
        .to(scrambleTextThree.current, {
          duration: 0.3,
          scrambleText: {
            text: "FOR YOU",
            revealDelay: 0.05,
          },
        })
        .fromTo(
          lineRef.current,
          { opacity: 0, scaleY: 0 },
          { opacity: 1, scaleY: 1 },
        );
    },
    { scope: sectionRef },
  );
  return (
    <section
      ref={sectionRef}
      className="bg-orange-400 text-white font-bold min-h-svh py-6 items-center justify-center lg:items-start lg:justify-start flex lg:py-0"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-around min-h-svh gap-10 xl:gap-35 lg:px-10 xl:px-30">
        <div className="lg:sticky lg:left-0 lg:top-0 lg:h-svh flex items-center justify-center lg:justify-start">
          <div className="relative flex items-center justify-center gap-2 sm:gap-8">
            <div
              ref={lineRef}
              className="border-2 hidden border-yellow-200 rounded-full lg:flex lg:h-[40svh]"
            />
            <h1
              aria-hidden="true"
              className="lg:invisible flex z-30 flex-col items-center leading-tight tracking-tight font-bold text-yellow-200 text-5xl md:text-7xl lg:text-7xl xl:text-8xl [text-shadow:4px_4px_0_#000,8px_8px_0_rgba(0,0,0,0.4)] lg:opacity-0 opacity-100"
            >
              <div className="flex flex-col items-center justify-center lg:hidden">
                <span>WHAT CAN I DO</span>
                <span>FOR YOU</span>
              </div>
              <div className="flex-col hidden lg:flex">
                <span>WHAT</span>
                <span>CAN I DO</span>
                <span>FOR YOU</span>
              </div>
            </h1>
            <h1
              ref={scrambleText}
              className="lg:flex hidden absolute w-full top-0 lg:left-5 z-30 text-start flex-col leading-tight tracking-tight font-bold text-yellow-200 lg:text-7xl xl:text-8xl [text-shadow:4px_4px_0_#000,8px_8px_0_rgba(0,0,0,0.4)]"
            >
              <span ref={scrambleTextOne}></span>
              <span ref={scrambleTextTwo}></span>
              <span ref={scrambleTextThree}></span>
            </h1>
          </div>
        </div>
        <aside
          ref={asideRef}
          className="relative h-full gap-20 lg:gap-0 flex flex-col w-full lg:w-1/2 px-4 text-xl lg:text-2xl"
        >
          {item.map((item, idx) => {
            return (
              <ItemSec
                key={idx}
                alt={item.title}
                desc={item.desc}
                src={item.src}
                title={item.title}
                imageClassName={item.imageClassName}
              />
            );
          })}
          <svg
            width="538"
            height="1548"
            viewBox="0 0 538 1548"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-[150%] z-0 h-full top-0 xl:w-[120%] xl:-left-20 -left-40"
          >
            <path
              ref={strokePath}
              d="M416.864 25.0055C323.528 212.848 111.758 306.942 177.864 506.005C229.292 660.869 466.347 607.059 505.364 765.505C558.995 983.302 289.131 1316.82 109.864 1182.01C-20.9923 1083.6 30.4341 926.191 61.8638 765.505C123.662 449.562 701.332 1660.23 416.864 1509.51"
              stroke="#5A2D0C"
              strokeWidth="50"
              strokeLinecap="round"
            />
          </svg>
        </aside>
      </div>
    </section>
  );
}
