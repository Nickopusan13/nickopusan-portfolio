"use client";

import { useLenis } from "lenis/react";
import { useRef, useState } from "react";
import { AnimatedLink } from "./AnimatedLink";
import Link from "next/link";

export default function ProjectNavbar() {
  const [hide, setHide] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  useLenis(({ scroll, direction }) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (direction === 1 && scroll > 100) {
      setHide(true);
    } else if (direction === -1) {
      setHide(false);
    }
    timeoutRef.current = setTimeout(() => {
      setHide(false);
    }, 1000);
  });
  return (
    <div
      className={`px-5 lg:px-15 py-5 w-full z-50 fixed top-0 left-0 transition-transform duration-500 ease-out text-white justify-between flex items-center backdrop-blur-xs ${hide ? `-translate-y-full` : `translate-y-0`}`}
    >
      <Link href="/" className="text-xl lg:text-3xl">
        Nickopusan
      </Link>
      <div className="flex justify-center items-center lg:text-base text-sm gap-5 lg:gap-10">
        <AnimatedLink href="/project">PROJECTS</AnimatedLink>
        <AnimatedLink href="/">ABOUT</AnimatedLink>
        <AnimatedLink href="/">CONTACT</AnimatedLink>
      </div>
    </div>
  );
}
