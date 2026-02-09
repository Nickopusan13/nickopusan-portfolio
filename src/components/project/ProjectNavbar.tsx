"use client";

import { useLenis } from "lenis/react";
import { useState } from "react";

export default function ProjectNavbar() {
  const [hide, setHide] = useState<boolean>(false);
  useLenis(({ scroll, direction }) => {
    if (direction === 1 && scroll > 100) {
      setHide(true);
    } else if (direction === -1) {
      setHide(false);
    }
  });
  return (
    <div
      className={`px-2 py-5 w-full z-50 fixed top-0 left-0 transition-transform duration-500 ease-out bg-white/10 ${hide ? `-translate-y-full` : `translate-y-0`}`}
    >
      <h1 className="text-3xl text-white">Nickopusan</h1>
    </div>
  );
}
