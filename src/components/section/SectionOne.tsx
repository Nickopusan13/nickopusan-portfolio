"use client";

import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrambleTextPlugin } from "gsap/all";

gsap.registerPlugin(ScrambleTextPlugin);

export default function SectionOne() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const strokePath = useRef<SVGPathElement>(null);
  const asideRef = useRef(null);
  const scrambleText = useRef<HTMLDivElement>(null);
  const scrambleTextOne = useRef(null);
  const scrambleTextTwo = useRef(null);
  const scrambleTextThree = useRef(null);
  const lineRef = useRef(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px", () => {
      if (strokePath.current) {
        const pathLength = strokePath.current.getTotalLength();
        strokePath.current.style.strokeDasharray = pathLength.toString();
        strokePath.current.style.strokeDashoffset = pathLength.toString();
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
    });

    if (strokePath.current) {
      const pathLength = strokePath.current.getTotalLength();
      strokePath.current.style.strokeDasharray = pathLength.toString();
      strokePath.current.style.strokeDashoffset = pathLength.toString();
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
  });
  return (
    <section
      ref={sectionRef}
      className="bg-orange-400 text-white font-bold min-h-dvh py-20 lg:py-0 overflow-y-auto"
    >
      <div className="flex flex-col lg:flex-row justify-between min-h-dvh gap-20 lg:gap-20 mx-5 sm:mx-20 lg:mx-50">
        <div className="sticky left-0 top-0 lg:h-dvh lg:w-1/2 flex items-center justify-center lg:justify-start">
          <div className="flex items-center justify-center gap-2 sm:gap-8">
            <div
              ref={lineRef}
              className="w-1 hidden lg:block border border-black rounded-full bg-yellow-200 lg:h-90 origin-top "
            />
            <h1 className="lg:hidden flex flex-col leading-tight tracking-tight font-bold text-yellow-200 text-8xl lg:text-8xl [text-shadow:4px_4px_0_#000,8px_8px_0_rgba(0,0,0,0.4)] opacity-0">
              <span>WHAT</span>
              <span>CAN I DO</span>
              <span>FOR YOU</span>
            </h1>
            <h1
              ref={scrambleText}
              className="absolute top-0 left-0 lg:static flex z-20 text-center  lg:text-start flex-col leading-tight tracking-tight font-bold text-yellow-200 text-8xl lg:text-8xl [text-shadow:4px_4px_0_#000,8px_8px_0_rgba(0,0,0,0.4)]"
            >
              <span ref={scrambleTextOne}></span>
              <span ref={scrambleTextTwo}></span>
              <span ref={scrambleTextThree}></span>
            </h1>
          </div>
        </div>
        <aside
          ref={asideRef}
          className="relative h-full gap-30 lg:gap-0 flex flex-col w-full lg:w-1/2 text-2xl lg:text-2xl"
        >
          <div className="relative flex flex-col">
            <motion.img
              className="w-[50%] sm:w-[30%] lg:w-[50%] absolute sm:-top-20 sm:right-30 -top-15 right-15 lg:top-20 lg:-right-10 z-10"
              src="/assets/logo/first.svg"
              alt=""
              animate={{
                y: [0, -10, 0, 10, 0],
                x: [0, 5, 0, -5, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeIn" }}
              viewport={{ once: true }}
              className="h-[50vh] lg:h-screen sticky text-justify items-center flex justify-center z-20 leading-tight lg:leading-normal"
            >
              I build responsive, high-performance websites and web apps using
              Python, React, Next.js, and modern tools. My focus is on clean
              architecture, fast load times, and scalable systems that deliver
              seamless user experiences.
            </motion.div>
          </div>
          <div className="relative flex flex-col">
            <motion.img
              className="w-[50%] sm:w-[30%] lg:w-[50%] absolute items-center justify-center z-10 top-35 left-50 sm:top-0 lg:top-35 lg:left-50"
              src="/assets/logo/second.svg"
              alt=""
              animate={{
                y: [0, -10, 0, 10, 0],
                x: [0, 5, 0, -5, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="h-[50vh] lg:h-screen lg:sticky items-center lg:items-start flex flex-col justify-center gap-2 sm:gap-5 z-20">
              <motion.h1
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeIn", delay: 0.1 }}
                viewport={{ once: true }}
                className="text-5xl leading-tight lg:text-4xl lg:text-start text-center text-black"
              >
                Interactive Experiences
              </motion.h1>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeIn", delay: 0.2 }}
                viewport={{ once: true }}
                className="text-justify leading-tight"
              >
                I create lgooth animations and scroll based interactions with
                Motion, GSAP, and Three.js, turning web interfaces into engaging
                and immersive experiences that delight users.
              </motion.span>
            </div>
          </div>
          <div className="relative flex flex-col">
            <motion.img
              className="w-[50%] sm:w-[30%] lg:w-[50%] absolute items-center justify-center z-10 top-30 right-15 sm:right-30 lg:top-45 lg:right-0"
              src="/assets/logo/third.svg"
              alt=""
              animate={{
                y: [0, -10, 0, 10, 0],
                x: [0, 5, 0, -5, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="h-[50vh] lg:h-screen lg:sticky items-center lg:items-start flex flex-col justify-center gap-3 sm:gap-5 z-20">
              <motion.h1
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeIn", delay: 0.1 }}
                viewport={{ once: true }}
                className="text-5xl leading-tight lg:text-4xl lg:text-start text-center text-black"
              >
                Scalable Backend Systems
              </motion.h1>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeIn", delay: 0.2 }}
                viewport={{ once: true }}
                className="text-justify leading-tight"
              >
                I design robust backend systems using Python (Django, FastAPI,
                Flask) and Node.js (Express.js), with databases like PostgreSQL,
                MySQL, and Supabase, ensuring your applications are secure,
                efficient, and ready to scale.
              </motion.span>
            </div>
          </div>
          <div className="relative flex flex-col">
            <motion.img
              className="w-[50%] sm:w-[30%] lg:w-[50%] absolute items-center justify-center z-10 -bottom-20 right-15 sm:right-20 lg:top-15 lg:-right-15"
              src="/assets/logo/fourth.svg"
              alt=""
              animate={{
                y: [0, -10, 0, 10, 0],
                x: [0, 5, 0, -5, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="h-[50vh] lg:h-screen lg:sticky items-center lg:items-start flex flex-col justify-center gap-3 sm:gap-5 z-20">
              <motion.h1
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeIn", delay: 0.1 }}
                viewport={{ once: true }}
                className="leading-tight text-5xl lg:text-4xl lg:text-start text-center text-black"
              >
                Deployment & Maintenance
              </motion.h1>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeIn", delay: 0.2 }}
                viewport={{ once: true }}
                className="text-justify leading-tight"
              >
                I handle deployment, containerization, and continuous
                integration with tools like Docker, Vercel, and cloud platforms,
                making sure your full-stack applications run reliably in
                production.
              </motion.span>
            </div>
          </div>
          <motion.svg
            width="538"
            height="1548"
            viewBox="0 0 538 1548"
            fill="none"
            xmlns="http://www.w3.org/2000/motion.svg"
            className="absolute w-[150%] z-0 h-full top-0 lg:top-0 -left-40 lg:-left-40"
          >
            <path
              ref={strokePath}
              d="M416.864 25.0055C323.528 212.848 111.758 306.942 177.864 506.005C229.292 660.869 466.347 607.059 505.364 765.505C558.995 983.302 289.131 1316.82 109.864 1182.01C-20.9923 1083.6 30.4341 926.191 61.8638 765.505C123.662 449.562 701.332 1660.23 416.864 1509.51"
              stroke="#5A2D0C"
              strokeWidth="50"
              strokeLinecap="round"
            />
          </motion.svg>
        </aside>
      </div>
    </section>
  );
}
