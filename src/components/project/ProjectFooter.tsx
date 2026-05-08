"use client";

import { FaMapPin } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "@/utils/useMediaQuery";
import { AnimatedLink } from "../ui/AnimatedLink";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const marqueeItems = [
  "LET’S COLLABORATE",
  "DROP ME A LINE",
  "OPEN FOR PROJECTS",
  "LET’S CREATE SOMETHING BEAUTIFUL",
];

const linksItem = [
  {
    title: "GALLERY",
    href: "/",
  },
  {
    title: "PROJECTS",
    href: "/project",
  },
  {
    title: "ABOUT",
    href: "/",
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
    <footer ref={footerRef} className="md:pb-10 overflow-hidden bg-amber-600">
      <div className="px-4 pt-8 md:px-5 md:pt-5 border-t-4 border-black">
        <div className="relative z-10 mb-5 rounded-tr-4xl rounded-bl-4xl rounded-tl-md rounded-br-md border-4 border-black bg-amber-500 px-5 py-6 lg:px-8 lg:py-8 text-black shadow-[8px_8px_0px_#000]">
          <div className="px-5 lg:px-10 mb-10 font-bold flex flex-col">
            <div className="flex lg:flex-row flex-col justify-between items-center">
              <div className="cartoon-item flex flex-col items-center lg:items-start justify-center leading-relaxed">
                <FaMapPin />
                <span>Jl. Sudirman No. 45</span>{" "}
                <span> Setiabudi, Jakarta Selatan 12920</span>
                <span>Indonesia</span>
              </div>
              <div className="flex md:grid md:grid-cols-2 gap-10 md:gap-2">
                {linksItem.map((item, idx) => {
                  return (
                    <AnimatedLink
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
              <div className="flex mt-10 mb-5 gap-2 md:my-0 flex-col items-center lg:items-start justify-center">
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
              <p className="cartoon-item">
                © {new Date().getFullYear()} ALL RIGHTS RESERVED
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        className="z-10 overflow-hidden whitespace-nowrap border-4 border-black bg-amber-900 py-3 text-2xl lg:py-4 lg:text-3xl shadow-[7px_7px_0px_#000] cursor-default"
      >
        <div ref={marqueeRef} className="flex w-max will-change-transform">
          <MarqueeList />
          <MarqueeList />
        </div>
      </div>
    </footer>
  );
}
