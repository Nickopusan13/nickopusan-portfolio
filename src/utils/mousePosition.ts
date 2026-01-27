import { useState, useEffect } from "react";
import { useMediaQuery } from "./useMediaQuery"; // your media hook

export default function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isMobile = useMediaQuery();

  useEffect(() => {
    if (isMobile) return; // don't track mouse on mobile

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, [isMobile]);

  return position;
}
