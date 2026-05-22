"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { motion } from "motion/react";
import { AnimatedLink } from "../../ui/AnimatedLink";
import { projects } from "@/utils/projects";

gsap.registerPlugin(ScrollTrigger);
const MotionLink = motion.create(Link);

interface ProjectProps {
  images: string[];
  title: string;
  description: string;
  subTitle: string;
  slug: string;
  year: string;
}

export default function TheProject({
  images,
  title,
  description,
  subTitle,
  slug,
  year,
}: ProjectProps) {
  const pinRef = useRef<HTMLDivElement>(null);
  const currentIndex = projects.findIndex((project) => project.slug === slug);

  const prevProject =
    currentIndex > 0
      ? projects[currentIndex - 1]
      : projects[projects.length - 1];

  const nextProject =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : projects[0];
  useGSAP(() => {
    if (!pinRef.current) return;

    ScrollTrigger.create({
      trigger: pinRef.current,
      start: "top top",
      end: "+=100%",
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
      <section className="relative py-10 flex flex-col lg:flex-row justify-between z-10 px-2 xl:px-10 bg-amber-600 min-h-svh text-black gap-5 lg:gap-10 xl:gap-20">
        <div className="w-full lg:w-1/2">
          <div className="flex lg:sticky lg:h-screen top-0 items-center justify-center">
            <div className="relative flex w-full flex-col gap-6 rounded-tr-2xl md:rounded-tr-4xl rounded-bl-2xl md:rounded-bl-4xl border-2 lg:border-4 border-black bg-amber-300 p-2 font-black shadow-[5px_5px_0px_#000] lg:shadow-[10px_10px_0px_#000] sm:p-6 lg:p-7">
              <div
                className="absolute -right-4 -top-5 rotate-6 rounded-tr-xl rounded-bl-xl
                border-2 border-black bg-orange-500 px-4 py-1 text-sm font-black
                shadow-[4px_4px_0px_#000] sm:text-base"
              >
                DESCRIPTION
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
                  className="flex cursor-pointer items-center gap-3 rounded-tr-xl rounded-bl-xl border-2 border-black bg-amber-200 px-5 py-3 text-base md:text-lg font-black text-black"
                >
                  <FaArrowLeft />
                  BACK TO PROJECTS
                </MotionLink>
              </div>
              <div className="hidden md:block border-2 border-black w-full" />
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <p
                    className="w-fit -rotate-2 rounded-tr-xl rounded-bl-xl border-2 border-black
                    bg-orange-500 px-3 py-1 text-sm font-black shadow-[3px_3px_0px_#000]"
                  >
                    {year}
                  </p>
                  <div className="flex justify-start items-center">
                    <p
                      className="w-fit rotate-1 rounded-full border-2 border-black bg-yellow-300
                      px-4 py-1 text-sm font-black shadow-[3px_3px_0px_#000]"
                    >
                      {subTitle}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <h1 className="text-3xl text-center md:text-start font-black leading-[0.9] text-amber-100 drop-shadow-[3px_3px_0px_#000] lg:drop-shadow-[4px_4px_0px_#000] sm:text-5xl xl:text-6xl">
                    {title}
                  </h1>
                  <div
                    className="rounded-tr-2xl rounded-bl-2xl border-2 border-black bg-amber-100
                    p-4 shadow-[5px_5px_0px_#000]"
                  >
                    <p className="text-justify text-sm sm:text-sm font-black leading-relaxed xl:text-lg">
                      {description}
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
                  href={`/project/${prevProject.slug}`}
                >
                  PREVIOUS
                </AnimatedLink>
                <AnimatedLink
                  newTab={false}
                  classname="cartoon-item"
                  underline="bg-amber-700"
                  href={`/project/${nextProject.slug}`}
                >
                  NEXT
                </AnimatedLink>
              </div>
            </div>
          </div>
        </div>
        <aside className="w-full lg:w-1/2 mt-0 lg:mt-20">
          <div className="lg:flex lg:flex-col grid grid-cols-2 gap-2 md:gap-7 lg:gap-10">
            {images.slice(1).map((src, idx, arr) => {
              const isLast = idx === arr.length - 1;
              return (
                <div
                  key={idx}
                  className={`block relative w-full h-30 md:h-60 ${
                    isLast ? "xl:h-50" : "xl:h-100"
                  }`}
                >
                  <Image
                    src={src}
                    alt={title}
                    className={`${isLast ? "object-contain" : "object-cover"} shadow-[3px_3px_0px_#000] lg:shadow-[12px_12px_0px_#000] overflow-hidden rounded-tr-2xl rounded-bl-2xl md:rounded-tr-4xl md:rounded-bl-4xl border-2 md:border-4 border-black bg-amber-200 p-1 md:p-2`}
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
