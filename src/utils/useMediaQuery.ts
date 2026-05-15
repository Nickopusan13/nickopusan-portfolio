import { useEffect, useState } from "react";

export function useMediaQuery() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", update);
    setIsMobile(mq.matches);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isMobile;
}
