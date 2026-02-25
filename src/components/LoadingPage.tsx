"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LoadingPage({ onFinish }: { onFinish: () => void }) {
  const dotRefs = useRef<HTMLDivElement[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const dotsTween = gsap.to(dotRefs.current, {
      y: -20,
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
      ease: "power1.inOut",
    });
    const timeout = setTimeout(() => {
      dotsTween.kill();
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          x: "100%",
          duration: 1.2,
          ease: "power2.inOut",
          onComplete: () => {
            if (overlayRef.current) overlayRef.current.style.display = "none";
            if (onFinish) onFinish(); // notify parent
          },
        });
      }
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="h-dvh overflow-hidden">
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-full bg-amber-400 flex justify-center items-center z-50"
      >
        <div className="flex gap-1">
          {[0, 1, 2, 3].map((_, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) dotRefs.current[i] = el;
              }}
              className="w-4 h-4 bg-black"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
