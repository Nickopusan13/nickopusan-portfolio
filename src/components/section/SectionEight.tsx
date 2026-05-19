"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import useMousePosition from "@/utils/mousePosition";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "@/utils/useMediaQuery";
import { AnimatedLink } from "../ui/AnimatedLink";
import { marqueeList } from "@/utils/marqueeList";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SectionEight() {
  const isMobile = useMediaQuery();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const isReversed = false;
  const timeline = useRef<GSAPTimeline>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();
  const size = isHovered ? 320 : 60;
  const scrambleTextOne = useRef(null);
  const scrambleTextTwo = useRef(null);
  const scrambleTextThree = useRef(null);
  const underline = "bg-amber-200";
  useGSAP(
    () => {
      gsap.set(marqueeRef.current, {
        xPercent: isReversed ? -50 : 0,
      });
      timeline.current = gsap
        .timeline({ defaults: { ease: "none", repeat: -1 } })
        .to(marqueeRef.current, {
          xPercent: isReversed ? 0 : -50,
          duration: 8,
        })
        .set(marqueeRef.current, {
          xPercent: 0,
        });
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => timeline.current?.play(),
        onEnterBack: () => timeline.current?.play(),
        onLeave: () => timeline.current?.pause(),
        onLeaveBack: () => timeline.current?.pause(),
      });
    },
    { dependencies: [isReversed] },
  );
  useGSAP(() => {
    gsap
      .timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
        },
      })
      .to(scrambleTextOne.current, {
        duration: 0.8,
        scrambleText: {
          text: "DROP ME",
          revealDelay: 0.01,
        },
      })
      .to(scrambleTextTwo.current, {
        duration: 0.8,
        scrambleText: {
          text: "AN",
          revealDelay: 0.01,
        },
      })
      .to(scrambleTextThree.current, {
        duration: 0.8,
        scrambleText: {
          text: "EMAIL",
          revealDelay: 0.01,
        },
      });
  });
  const timelineTimeScaleTween = useRef<GSAPTween>(null);
  const onPointerEnter = () => {
    if (!timeline.current) return;
    if (!isMobile) {
      timelineTimeScaleTween.current?.kill();
      timelineTimeScaleTween.current = gsap.to(timeline.current, {
        timeScale: 0.25,
        duration: 0.4,
      });
    }
  };

  const onPointerLeave = () => {
    if (!timeline.current) return;
    if (!isMobile) {
      timelineTimeScaleTween.current?.kill();
      timelineTimeScaleTween.current = gsap.to(timeline.current, {
        timeScale: 1,
        duration: 0.2,
      });
    }
  };
  return (
    <>
      <section
        aria-labelledby="contact-info"
        ref={sectionRef}
        className="relative min-h-svh bg-pink-600 flex flex-col items-center justify-center cursor-default overflow-hidden"
      >
        <nav
          aria-label="Social Links"
          className="absolute top-10 md:top-5 text-base md:text-lg md:right-10 flex text-amber-200 z-20 gap-4 md:gap-6"
        >
          <AnimatedLink
            underline={underline}
            href="https://github.com/Nickopusan13"
          >
            GITHUB
          </AnimatedLink>
          <AnimatedLink
            underline={underline}
            href="https://www.linkedin.com/in/nickopusan13"
          >
            LINKEDIN
          </AnimatedLink>
          <AnimatedLink
            underline={underline}
            href="https://upwork.com/freelancers/nickopusan"
          >
            UPWORK
          </AnimatedLink>
          <AnimatedLink underline={underline} href="/project">
            PROJECT
          </AnimatedLink>
        </nav>
        <h1 className="z-0 text-center font-bold text-6xl md:text-9xl xl:text-[170px] leading-none text-white">
          <strong ref={scrambleTextOne} className="text-amber-200">
            DROP ME
          </strong>
          <br />
          <span ref={scrambleTextTwo}>AN</span>{" "}
          <a
            className="underline"
            ref={scrambleTextThree}
            href="mailto:nickowork13@gmail.com"
            aria-label="Email nickowork13@gmail.com"
          >
            EMAIL
          </a>
        </h1>
        <motion.div
          className="mask hidden absolute inset-0 z-10 lg:flex items-center justify-center"
          animate={{
            maskPosition: `${x - size / 2}px ${y - size / 2}px`,
            maskSize: `${size}px ${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.25 }}
        >
          <h1
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
            className="lg:block hidden text-center font-bold text-6xl lg:text-9xl xl:text-[170px] leading-none text-white"
          >
            <strong>
              <span className="text-cyan-300">DROP</span>
              <span className="text-fuchsia-400"> ME</span>
            </strong>
            <br />
            <span className="text-yellow-300">AN</span>{" "}
            <a
              href="mailto:nickowork13@gmail.com"
              className="text-orange-400 underline"
            >
              EMAIL
            </a>
          </h1>

          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-hidden="true"
            className="absolute text-white text-4xl top-20 right-15"
          >
            BOOO!!!
          </div>
        </motion.div>
        <div className="absolute bottom-15 w-full overflow-hidden -rotate-1 scale-105 z-20">
          <div
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            className="bg-amber-300 py-3 lg:py-5 text-xl md:text-3xl lg:text-5xl whitespace-nowrap overflow-hidden"
          >
            <div ref={marqueeRef} className="flex w-fit gap-2">
              {marqueeList}
              {marqueeList}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
