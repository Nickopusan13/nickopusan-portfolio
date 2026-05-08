"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { motion } from "motion/react";
import { AnimatedLink } from "../ui/AnimatedLink";

gsap.registerPlugin(ScrollTrigger);
const MotionLink = motion.create(Link);
const MotionImage = motion.create(Image);

interface ProjectProps {
  images: string[];
  title: string;
  description: string;
}

export default function TheProject({
  images,
  title,
  description,
}: ProjectProps) {
  const pinRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!pinRef.current) return;

    ScrollTrigger.create({
      trigger: pinRef.current,
      start: "top top",
      end: "+=150%",
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
    });
  }, []);
  return (
    <div className="relative">
      <section
        ref={pinRef}
        className="fixed inset-0 h-svh w-screen z-0 pointer-events-none"
      >
        <Image
          className="object-cover brightness-75"
          priority
          quality={85}
          src={images[0]}
          alt={title}
          fill
        />
      </section>
      <section className="relative py-10 flex flex-col lg:flex-row justify-between z-10 px-5 lg:px-10 bg-amber-600 min-h-svh text-black gap-5 lg:gap-20">
        <div className="w-full lg:w-1/2">
          <div className="flex sticky h-screen top-0 items-center justify-center">
            <div
              className="-rotate-1 relative flex w-full flex-col gap-6 rounded-tr-4xl rounded-bl-4xl
              border-4 border-black bg-amber-300 p-5 font-black
              shadow-[10px_10px_0px_#000] sm:p-6 lg:p-7"
            >
              <div
                className="absolute -right-4 -top-5 rotate-6 rounded-tr-xl rounded-bl-xl
                border-2 border-black bg-orange-500 px-4 py-1 text-sm font-black
                shadow-[4px_4px_0px_#000] sm:text-base"
              >
                CASE STUDY!
              </div>
              <div className="justify-start items-center flex">
                <MotionLink
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
                  href="/project"
                  className="flex cursor-pointer items-center gap-3 rounded-tr-xl rounded-bl-xl border-2 border-black bg-amber-200 px-5 py-3 text-lg font-black text-black"
                >
                  <FaArrowLeft />
                  BACK TO PROJECTS
                </MotionLink>
              </div>
              <div className="border-2 border-black w-full" />
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <p
                    className="w-fit -rotate-2 rounded-tr-xl rounded-bl-xl border-2 border-black
                    bg-orange-500 px-3 py-1 text-sm font-black shadow-[3px_3px_0px_#000]"
                  >
                    Sep 24, 2025
                  </p>
                  <div className="flex justify-start items-center">
                    <p
                      className="w-fit rotate-1 rounded-full border-2 border-black bg-yellow-300
                      px-4 py-1 text-sm font-black shadow-[3px_3px_0px_#000]"
                    >
                      E-Commerce Platform
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <h1
                    className="text-4xl font-black leading-[0.9] text-amber-100
                    drop-shadow-[4px_4px_0px_#000] sm:text-5xl lg:text-7xl"
                  >
                    {title}
                  </h1>
                  <div
                    className="rounded-tr-2xl rounded-bl-2xl border-2 border-black bg-amber-100
                    p-4 shadow-[5px_5px_0px_#000]"
                  >
                    <p className="text-justify text-base font-black leading-relaxed sm:text-lg">
                      {description ||
                        `Echo Meridian operates where rhythm meets precision. We explore how motion, sound, and light can synchronize to form coherent, emotional experiences. Every brand we build carries a pulse — an echo that travels beyond the moment of first contact.`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-2 border-black w-full" />
              <div className="flex justify-between items-center w-full">
                <AnimatedLink
                  newTab={false}
                  underline="bg-amber-700"
                  classname="cartoon-item"
                  href="/"
                >
                  PREVIOUS
                </AnimatedLink>
                <AnimatedLink
                  newTab={false}
                  classname="cartoon-item"
                  underline="bg-amber-700"
                  href="/"
                >
                  NEXT
                </AnimatedLink>
              </div>
            </div>
          </div>
        </div>
        <aside className="w-full lg:w-1/2 mt-0 lg:mt-20">
          <div className="flex flex-col gap-0 lg:gap-10">
            {images.map((src, idx) => {
              return (
                <div
                  key={idx}
                  className="hidden lg:block relative w-full h-50 lg:h-100"
                >
                  <MotionImage
                    src={src}
                    alt={title}
                    whileHover={{
                      translateY: -5,
                      translateX: -5,
                      boxShadow: "12px 12px 0px #000",
                    }}
                    whileTap={{
                      scale: 0.94,
                      y: 3,
                      x: 3,
                      rotate: 0,
                      boxShadow: "2px 2px 0px #000",
                    }}
                    whileInView={{ boxShadow: "8px 8px 0px #000" }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 18,
                    }}
                    className="object-cover overflow-hidden rounded-tr-4xl rounded-bl-4xl border-4 border-black bg-amber-200 p-2"
                    fill
                  />
                </div>
              );
            })}
          </div>
        </aside>
      </section>
    </div>
  );
}
