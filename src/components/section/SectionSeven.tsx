"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef, forwardRef } from "react";

const item = [
  {
    title: "Fast Delivery",
    className:
      "bg-amber-400 text-pink-900 border-pink-800 rotate-2 translate-y-7 z-10",
  },
  {
    title: "Smooth Interaction",
    className:
      "bg-pink-300 text-purple-800 border-pink-800 -rotate-1 translate-y-3 z-0",
  },
  {
    title: "Dynamic Designs",
    className: "bg-teal-400 text-yellow-900 border-pink-900 rotate-0.5 z-10",
  },
  {
    title: "Reliable Solutions",
    className:
      "bg-purple-500 text-amber-300 border-pink-900 -rotate-1 -translate-y-3 z-0",
  },
];

function ItemSec(
  { title, className }: { title: string; className: string },
  ref: React.ForwardedRef<HTMLSpanElement>,
) {
  return (
    <span
      ref={ref}
      style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
      className={`item-animate w-full border-pink-800 px-2 py-3 md:py-4 text-center rounded-4xl border-7 ${className}`}
    >
      {title}
    </span>
  );
}
const ForwardItemSec = forwardRef(ItemSec);

export default function SectionSeven() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef(null);
  const itemRefs = useRef<HTMLSpanElement[]>([]);
  useGSAP(
    () => {
      const titleSplit = SplitText.create(titleRef.current, {
        type: "chars",
      });
      const tl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
          end: "top top",
          scrub: 1.5,
        },
      });
      gsap.from(titleSplit.chars, {
        yPercent: 50,
        opacity: 0,
        stagger: 0.05,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
        },
      });
      itemRefs.current.forEach((el) => {
        tl.to(el, {
          duration: 1,
          opacity: 1,
          clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
          ease: "circ.out",
        });
      });
      return () => {
        titleSplit.revert();
      };
    },
    { scope: sectionRef },
  );
  return (
    <section
      ref={sectionRef}
      className="min-h-svh bg-pink-600 cursor-default py-10 lg:py-20 flex flex-col items-center justify-center overflow-hidden"
    >
      <h2
        ref={titleRef}
        className="text-4xl sm:text-7xl font-extrabold mb-10 text-center text-amber-200"
      >
        Why Choose Us
      </h2>
      <div className="flex flex-col items-center justify-center w-full px-1 md:px-10 h-full text-[32px] md:text-7xl sm:text-6xl lg:text-8xl xl:text-9xl">
        {item.map((item, idx) => {
          return (
            <ForwardItemSec
              key={idx}
              ref={(el) => {
                if (el) itemRefs.current[idx] = el;
              }}
              title={item.title}
              className={item.className}
            />
          );
        })}
      </div>
    </section>
  );
}
