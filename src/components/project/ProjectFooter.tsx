"use client";

import { FaMapPin } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "@/utils/useMediaQuery";
import { AnimatedLink } from "./AnimatedLink";

const list = (
  <div className="flex items-center gap-1 w-fit">
    <span>LET’S COLLABORATE 👾</span>
    <span>DROP ME A LINE 🛸</span>
    <span>OPEN FOR PROJECTS 👾</span>
    <span>LET’S CREATE SOMETHING BEAUTIFUL 🛸</span>
  </div>
);

export default function ProjectFooter() {
  const isMobile = useMediaQuery();
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeTimeline = useRef<GSAPTimeline>(null);
  const isReversed = false;
  useGSAP(
    () => {
      gsap.set(marqueeRef.current, {
        xPercent: isReversed ? -50 : 0,
      });
      marqueeTimeline.current = gsap
        .timeline({ defaults: { ease: "none", repeat: -1 } })
        .to(marqueeRef.current, {
          xPercent: isReversed ? 0 : -50,
          duration: 10,
        })
        .set(marqueeRef.current, {
          xPercent: 0,
        });
    },
    { dependencies: [isReversed] },
  );
  const timelineTimeScaleTween = useRef<GSAPTween>(null);
  const onPointerEnter = () => {
    if (!marqueeTimeline.current) return;
    if (!isMobile) {
      timelineTimeScaleTween.current?.kill();
      timelineTimeScaleTween.current = gsap.to(marqueeTimeline.current, {
        timeScale: 0.25,
        duration: 0.4,
      });
    }
  };
  const onPointerLeave = () => {
    if (!marqueeTimeline.current) return;
    if (!isMobile) {
      timelineTimeScaleTween.current?.kill();
      timelineTimeScaleTween.current = gsap.to(marqueeTimeline.current, {
        timeScale: 1,
        duration: 0.2,
      });
    }
  };
  return (
    <div className="py-10">
      <div className="bg-zinc-900 px-10 mb-10 text-white flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start justify-center leading-relaxed">
            <FaMapPin />
            <span>Jl. Sudirman No. 45</span>{" "}
            <span> Setiabudi, Jakarta Selatan 12920</span>
            <span>Indonesia</span>
          </div>
          <div className="flex flex-col leading-relaxed">
            <AnimatedLink href="/">GALLERY</AnimatedLink>
            <AnimatedLink href="/">PROJECTS</AnimatedLink>
            <AnimatedLink href="/">ABOUT</AnimatedLink>
            <AnimatedLink href="/">CONTACT</AnimatedLink>
          </div>
          <div className="flex flex-col items-start justify-center">
            <a href="">nickowork13@gmail.com</a>
            <a href="">+62 85156229898</a>
          </div>
          <div>
            <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
      <div
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        className="bg-amber-300 py-3 lg:py-5 text-2xl lg:text-5xl whitespace-nowrap overflow-hidden"
      >
        <div ref={marqueeRef} className="flex w-fit">
          {list}
          {list}
        </div>
      </div>
    </div>
  );
}
