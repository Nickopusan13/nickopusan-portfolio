"use client";

import { useRef, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LiveCirclesBG() {
  const bgRef = useRef<HTMLDivElement>(null);
  const circles = useMemo(() => {
    return Array.from({ length: 50 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: 20,
    }));
  }, []);
  useGSAP(
    () => {
      if (!bgRef.current) return;
      const ctx = gsap.context(() => {
        const circles = gsap.utils.toArray<HTMLElement>(".circle");
        circles.forEach((circle) => {
          gsap.to(circle, {
            y: "+=200",
            x: "+=50",
            repeat: -1,
            yoyo: true,
            duration: gsap.utils.random(5, 15),
            ease: "sine.inOut",
          });
        });
      }, bgRef);
      return () => {
        ctx.revert();
      };
    },
    { scope: bgRef },
  );

  return (
    <div
      ref={bgRef}
      className="absolute md:block hidden inset-0 z-10 overflow-hidden bg-linear-to-b from-yellow-200 via-orange-300 to-orange-500"
    >
      {circles.map((circle, i) => (
        <span
          key={i}
          className="circle absolute block bg-white/40 rounded-full"
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
          }}
        />
      ))}
    </div>
  );
}
