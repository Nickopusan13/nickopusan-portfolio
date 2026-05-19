"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { BsEmojiAngryFill, BsEmojiGrinFill } from "react-icons/bs";
import { FaFaceGrinStars, FaFaceGrinSquint } from "react-icons/fa6";

export default function Loader() {
  const loadingRef = useRef<HTMLDivElement>(null);
  const sceneOne = useRef<HTMLDivElement>(null);
  const sceneTwo = useRef<HTMLDivElement>(null);
  const sceneThree = useRef<HTMLDivElement>(null);
  const sceneFour = useRef<HTMLDivElement>(null);
  const sceneFive = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.set(
      [
        sceneOne.current,
        sceneTwo.current,
        sceneThree.current,
        sceneFour.current,
        sceneFive.current,
      ],
      {
        opacity: 0,
      },
    );
    tl.fromTo(
      sceneOne.current,
      {
        opacity: 0,
        scale: 0.7,
        filter: "blur(20px)",
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.35,
        ease: "power4.out",
      },
    );

    tl.to(sceneOne.current, {
      opacity: 0,
      scale: 1.3,
      filter: "blur(20px)",
      duration: 0.2,
      delay: 0.15,
    });
    tl.fromTo(
      sceneTwo.current,
      {
        opacity: 0,
        rotate: -10,
        y: 80,
      },
      {
        opacity: 1,
        rotate: 0,
        y: 0,
        duration: 0.3,
        ease: "power3.out",
      },
    );
    tl.to(sceneTwo.current, {
      opacity: 0,
      y: -80,
      duration: 0.2,
      delay: 0.15,
    });
    tl.fromTo(
      sceneThree.current,
      {
        opacity: 0,
        scale: 0,
        rotate: 20,
      },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 0.4,
        ease: "back.out(2)",
      },
    );

    tl.to(sceneThree.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.2,
      delay: 0.15,
    });
    tl.fromTo(
      sceneFour.current,
      {
        opacity: 0,
        y: 100,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.4,
        ease: "power4.out",
      },
    );

    tl.to(sceneFour.current, {
      opacity: 0,
      y: -100,
      duration: 0.2,
      delay: 0.2,
    });
    tl.fromTo(
      sceneFive.current,
      {
        opacity: 0,
        scale: 0,
        rotate: -30,
      },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 0.5,
        ease: "elastic.out(1,0.5)",
      },
    );
    tl.to(sceneFive.current, {
      opacity: 0,
      scale: 2,
      filter: "blur(20px)",
      duration: 0.3,
      delay: 0.2,
    });
    tl.to(loadingRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut",
    });
  }, []);

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 z-9999 bg-amber-900 overflow-hidden text-white"
    >
      <div
        ref={sceneOne}
        className="absolute opacity-0 inset-0 flex flex-col items-center justify-center leading-none"
      >
        <span className="text-6xl md:text-9xl font-black text-blue-700">
          NICKOPUSAN
        </span>

        <span className="text-4xl md:text-7xl font-bold tracking-[0.3em]">
          FULLSTACK
        </span>
      </div>
      <div
        ref={sceneTwo}
        className="absolute opacity-0 inset-0 flex items-center justify-center gap-6 text-5xl md:text-8xl font-black"
      >
        <span>FRONTEND</span>
      </div>
      <div
        ref={sceneThree}
        className="absolute opacity-0 inset-0 flex items-center justify-center"
      >
        <div className="flex items-center gap-5 md:gap-7 lg:gap-10">
          <BsEmojiGrinFill className="text-6xl md:text-8xl" color="yellow" />
          <div className="flex flex-col leading-none items-center justify-center">
            <span className="text-4xl md:text-7xl font-black">REACT.JS</span>
            <span className="text-xl md:text-3xl tracking-[0.3em] mt-3">
              CREATIVE
            </span>
            <span className="text-sm md:text-lg mt-2 opacity-70">
              EST. 2025
            </span>
          </div>
          <BsEmojiAngryFill className="text-6xl md:text-8xl" color="yellow" />
        </div>
      </div>
      <div
        ref={sceneFour}
        className="absolute opacity-0 inset-0 flex flex-col items-center justify-center"
      >
        <div className="flex items-center gap-2 md:gap-7 lg:gap-10">
          <FaFaceGrinSquint className="text-5xl md:text-8xl" color="yellow" />
          <div className="flex flex-col leading-none">
            <span className="text-3xl md:text-6xl lg:text-8xl font-black">
              DESIGN x CODE
            </span>
          </div>
          <FaFaceGrinStars className="text-5xl md:text-8xl" color="yellow" />
        </div>
      </div>
      <div
        ref={sceneFive}
        className="absolute inset-0 opacity-0 flex items-center justify-center"
      >
        <span className="text-[18vw] font-black leading-none tracking-[-0.08em]">
          READY
        </span>
      </div>
    </div>
  );
}
