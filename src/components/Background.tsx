"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function LiveCirclesBG() {
  useEffect(() => {
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
  }, []);

  return (
    <div className="absolute inset-0 z-10 overflow-hidden bg-linear-to-b from-yellow-200 via-orange-300 to-orange-500">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="circle absolute bg-white/40 rounded-full"
          style={{
            width: 20,
            height: 20,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
