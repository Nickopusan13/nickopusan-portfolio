"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { motion } from "motion/react";
import { AnimatedLink } from "./AnimatedLink";

gsap.registerPlugin(ScrollTrigger);
const MotionLink = motion.create(Link);

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
        className="fixed inset-0 h-dvh w-screen z-0 pointer-events-none"
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
      <section className="relative flex justify-between z-10 px-10 bg-zinc-900 min-h-dvh text-white gap-20">
        <div className="w-1/2">
          <div className="flex sticky h-screen top-0 items-center justify-center">
            <div className="flex flex-col gap-6 w-full text-xl">
              <div className="justify-start items-center flex">
                <MotionLink
                  href="/project"
                  whileHover={{ opacity: 100 }}
                  className="flex items-center justify-center gap-2 cursor-pointer opacity-70"
                >
                  <FaArrowLeft />
                  BACK TO PROJECTS
                </MotionLink>
              </div>
              <div className="border border-white/20 w-full" />
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <p>Sep 24, 2025</p>
                  <div className="flex justify-start items-center">
                    <p className="bg-zinc-400/50 px-2 rounded-full">
                      E-Commerce Platform
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-justify">
                    Echo Meridian operates where rhythm meets precision. We
                    explore how motion, sound, and light can synchronize to form
                    coherent, emotional experiences. Every brand we build
                    carries a pulse — an echo that travels beyond the moment of
                    first contact. Our approach blends sensory design with
                    structural thinking. By aligning creative frequencies across
                    mediums, we transform brands into living systems — fluid,
                    resonant, and endlessly adaptable.
                  </p>
                </div>
              </div>
              <div className="border border-white/20 w-full" />
              <div className="flex justify-between items-center w-full">
                <AnimatedLink href="/">PREVIOUS</AnimatedLink>
                <AnimatedLink href="/">NEXT</AnimatedLink>
              </div>
            </div>
          </div>
        </div>
        <aside className="w-1/2 mt-20">
          <div className="flex flex-col gap-10">
            {images.map((src, idx) => {
              return (
                <div key={idx} className="relative w-full h-100">
                  <Image src={src} alt={title} fill />
                </div>
              );
            })}
          </div>
        </aside>
      </section>
    </div>
  );
}
