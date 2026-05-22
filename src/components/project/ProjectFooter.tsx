"use client";

import { FaMapPin } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "@/utils/useMediaQuery";
import { AnimatedLink } from "../ui/AnimatedLink";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { FaSquareUpwork, FaLinkedin, FaGithub } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const marqueeItems = [
  "LET’S COLLABORATE",
  "DROP ME A LINE",
  "OPEN FOR PROJECTS",
  "LET’S CREATE SOMETHING BEAUTIFUL",
];

const linksItem = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "PROJECTS",
    href: "/project",
  },
  {
    title: "ABOUT",
    href: "/about",
  },
  {
    title: "CONTACT",
    href: "/contact",
  },
];

function MarqueeList() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8 text-amber-100 font-black tracking-wide">
      {marqueeItems.map((item, idx) => (
        <div key={idx} className="flex items-center gap-8">
          <span>{item}</span>
          <span className="text-black">★</span>
        </div>
      ))}
    </div>
  );
}
export default function ProjectFooter() {
  const isMobile = useMediaQuery();
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeTimeline = useRef<GSAPTimeline>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const isReversed = false;
  useGSAP(
    () => {
      gsap.set(marqueeRef.current, {
        xPercent: isReversed ? -50 : 0,
      });
      marqueeTimeline.current = gsap
        .timeline({ repeat: -1, defaults: { ease: "none" } })
        .to(marqueeRef.current, {
          xPercent: isReversed ? 0 : -50,
          duration: 10,
        })
        .set(marqueeRef.current, {
          xPercent: 0,
        });
      ScrollTrigger.create({
        trigger: footerRef.current,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => marqueeTimeline.current?.play(),
        onEnterBack: () => marqueeTimeline.current?.play(),
        onLeave: () => marqueeTimeline.current?.pause(),
        onLeaveBack: () => marqueeTimeline.current?.pause(),
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
    <footer ref={footerRef} className="pb-10 overflow-hidden bg-amber-600">
      <div className="px-3 lg:px-5 pt-5 border-t-4 border-black">
        <div className="relative z-10 mb-5 rounded-tr-4xl rounded-bl-4xl rounded-tl-md rounded-br-md border-4 border-black bg-amber-500 px-5 py-6 xl:px-8 lg:py-10 text-black shadow-[8px_8px_0px_#000]">
          <div className="xl:px-10 md:mb-0 mb-10 font-bold flex flex-col">
            <div className="flex gap-5 lg:gap-0 lg:flex-row flex-col justify-between items-center">
              <div className="cartoon-item w-full text-center lg:text-start md:w-fit flex flex-col items-center lg:items-start justify-center leading-relaxed">
                <FaMapPin />
                <span>Jl. Sudirman No. 45</span>{" "}
                <span> Setiabudi, Jakarta Selatan 12920</span>
                <span>Indonesia</span>
              </div>
              <div className="grid grid-cols-2 gap-2 md:flex md:gap-4 lg:grid lg:grid-cols-2 lg:gap-2">
                {linksItem.map((item, idx) => {
                  return (
                    <AnimatedLink
                      newTab={false}
                      key={idx}
                      underline="bg-amber-700"
                      classname="cartoon-item"
                      href={item.href}
                    >
                      {item.title}
                    </AnimatedLink>
                  );
                })}
              </div>
              <div className="flex gap-2 flex-col items-center lg:items-start justify-center">
                <a
                  className="cartoon-item transition hover:-translate-y-0.5 hover:text-amber-800"
                  href="mailto:nickowork13@gmail.com"
                >
                  nickowork13@gmail.com
                </a>
                <a
                  className="cartoon-item transition hover:-translate-y-0.5 hover:text-amber-800"
                  href="https://wa.me/6285156229898"
                >
                  +62 85156229898
                </a>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p>Social Account</p>
                <div className="flex items-center justify-center gap-3 text-5xl">
                  <Link
                    className="hover:scale-110 duration-200"
                    href="https://www.upwork.com/freelancers/nickopusan"
                  >
                    <FaSquareUpwork />
                  </Link>
                  <Link
                    className="hover:scale-105 duration-200"
                    href="http://linkedin.com/in/nickopusan13"
                  >
                    <FaLinkedin />
                  </Link>
                  <Link
                    className="hover:scale-105 duration-200"
                    href="https://github.com/Nickopusan13"
                  >
                    <FaGithub />
                  </Link>
                </div>
              </div>
              <p className="cartoon-item text-sm">
                © {new Date().getFullYear()} ALL RIGHTS RESERVED
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        className="z-10 overflow-hidden whitespace-nowrap border-4 border-black bg-amber-900 py-3 text-lg md:text-2xl lg:py-4 lg:text-3xl shadow-[7px_7px_0px_#000] cursor-default"
      >
        <div ref={marqueeRef} className="flex w-max will-change-transform">
          <MarqueeList />
          <MarqueeList />
        </div>
      </div>
    </footer>
  );
}
