"use client";

import { motion } from "motion/react";
import SectionOne from "./section/SectionOne";
import SectionTwo from "./section/SectionTwo";
import SectionThree from "./section/SectionThree";
import OpeningSec from "./section/OpeningSec";
import SectionFour from "./section/SectionFour";
import SectionFive from "./section/SectionFive";
import SectionSix from "./section/SectionSix";
import SectionSeven from "./section/SectionSeven";
import SectionEight from "./section/SectionEight";
import LoadingPage from "./LoadingPage";
import { useState } from "react";

export default function Main() {
  const [loading, setLoading] = useState(true);
  if (loading) {
    return <LoadingPage onFinish={() => setLoading(false)} />;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="bg-orange-400 overflow-hidden lg:overflow-visible"
    >
      <OpeningSec />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
    </motion.div>
  );
}
