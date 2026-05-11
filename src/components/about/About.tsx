"use client";

import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

gsap.registerPlugin(SplitText);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState<string>("");
  const [greeting, setGreeting] = useState("");
  useGSAP(() => {
    if (!titleRef.current) return;
    const splitTitle = SplitText.create(titleRef.current, {
      type: "chars",
    });
    gsap.set(titleRef.current, { opacity: 1 });
    gsap.from(splitTitle.chars, {
      stagger: 0.05,
      ease: "power2.inOut",
      yPercent: 100,
      delay: 1,
    });
    return () => {
      splitTitle.revert();
    };
  });
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const locale = navigator.language;
      const formattedTime = now.toLocaleTimeString(locale, {
        hour: "2-digit",
        minute: "2-digit",
      });
      const hour = now.getHours();
      let currentGreeting = "☀️ Good morning";
      if (hour >= 12 && hour < 18) {
        currentGreeting = "🌤️ Good afternoon";
      } else if (hour >= 18) {
        currentGreeting = "🌙 Good evening";
      }
      setTime(formattedTime);
      setGreeting(currentGreeting);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      ref={sectionRef}
      className="min-h-svh bg-amber-300 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col h-fit gap-3 items-center w-fit justify-center bg-amber-500 p-8 rounded-2xl shadow-[7px_7px_0px_#000] border-4 border-black">
        <h1
          ref={titleRef}
          className="opacity-0 font-black w-fit h-fit text-7xl drop-shadow-[5px_5px_0px_#000] text-amber-600 overflow-hidden"
        >
          About the Studio
        </h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1.5,
          }}
          className="overflow-hidden flex text-black font-black"
        >
          <span>{time}</span>
          <span>{greeting}</span>
        </motion.div>
      </div>
    </div>
  );
}
