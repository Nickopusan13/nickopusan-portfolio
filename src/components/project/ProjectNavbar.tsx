"use client";

import { useLenis } from "lenis/react";
import Link from "next/link";
import { useRef, useState } from "react";

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
      className={`px-15 py-5 w-full z-50 fixed top-0 left-0 transition-transform duration-500 ease-out text-white justify-between flex items-center backdrop-blur-xs ${hide ? `-translate-y-full` : `translate-y-0`}`}
    >
      <h1 className="text-3xl">Nickopusan</h1>
      <div className="flex justify-center items-center gap-10">
        <Link href="/">PROJECTS</Link>
        <Link href="/">ABOUT</Link>
        <Link href="/">CONTACT</Link>
      </div>
      <div>Hello</div>
    </div>
  );
}
