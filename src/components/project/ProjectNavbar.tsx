"use client";

import { useLenis } from "lenis/react";
import { useRef, useState } from "react";
import { AnimatedLink } from "../ui/AnimatedLink";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import gsap from "gsap";
import Link from "next/link";

gsap.registerPlugin(ScrambleTextPlugin);

const linksItem = [
  {
    title: "PROJECTS",
    href: "/project",
  },
  {
    title: "CONTACT",
    href: "/contact",
  },
];

export default function ProjectNavbar() {
  const [hide, setHide] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const textRef = useRef<HTMLAnchorElement>(null);
  const handleEnter = () => {
    gsap.to(textRef.current, {
      duration: 2,
      color: "#fff7ed",
      scale: 1.08,
      rotate: -2,
      y: -3,
      textShadow: "3px 3px 0px #000000",
      overwrite: "auto",
      ease: "back.out(3)",
      scrambleText: {
        text: "Nickopusan",
        chars: "upperAndLowerCase",
      },
    });
  };

  const handleLeave = () => {
    gsap.to(textRef.current, {
      duration: 2,
      color: "#000000",
      scale: 1,
      rotate: 0,
      y: 0,
      textShadow: "0px 0px 0px #000000",
      overwrite: "auto",
      ease: "elastic.out(1, 0.45)",
      scrambleText: {
        text: "Nickopusan",
        chars: "upperAndLowerCase",
      },
    });
  };
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
      className={`px-5 lg:px-15 py-2 w-full z-50 fixed top-0 left-0 transition-transform duration-500 ease-out text-white justify-between flex items-center ${hide ? `-translate-y-full` : `translate-y-0`}`}
    >
      <nav className="relative flex items-center justify-between w-full px-5 lg:px-8 py-4 bg-amber-400 text-black border-2 border-black rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md shadow-[6px_6px_0px_#000] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_28%)]" />
        <Link
          onMouseEnter={() => handleEnter()}
          onMouseLeave={() => handleLeave()}
          ref={(el) => {
            textRef.current = el;
          }}
          href="/"
          className="text-xl lg:text-3xl font-bold text-black"
        >
          Nickopusan
        </Link>
        <div className="font-bold flex justify-center items-center lg:text-base text-sm gap-5 lg:gap-10">
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
      </nav>
    </div>
  );
}
