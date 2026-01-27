"use client";

import { motion } from "motion/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/all";
import Image from "next/image";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/zoom";
import Link from "next/link";
import { slides } from "../slides";

export default function SectionTwo() {
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const firstTextRef = useRef(null);
  const secTextRef = useRef(null);
  const thirdRef = useRef(null);

  useGSAP(() => {
    const firstTextSplit = SplitText.create(firstTextRef.current, {
      type: "chars",
    });
    const thirdTextSplit = SplitText.create(thirdRef.current, {
      type: "chars",
    });
    gsap.from(firstTextSplit.chars, {
      yPercent: 50,
      opacity: 0,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: scrollSectionRef.current,
        start: "top 30%",
      },
    });
    gsap.to(secTextRef.current, {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: scrollSectionRef.current,
        start: "top 10%",
      },
    });
    gsap.from(thirdTextSplit.chars, {
      yPercent: 50,
      stagger: 0.02,
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: scrollSectionRef.current,
        start: "top 1%",
      },
    });
  }, []);

  useGSAP(() => {
    if (!scrollSectionRef.current || !sliderRef.current) return;
    const scrollAmount = sliderRef.current?.scrollWidth - window.innerWidth;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollSectionRef.current,
        start: "2% top",
        end: `+=${scrollAmount + 1500}px`,
        scrub: true,
        pin: true,
      },
    });
    tl.to(scrollSectionRef.current, {
      x: `-${scrollAmount + 1000}px`,
      ease: "power1.inOut",
    });
  });
  return (
    <section ref={scrollSectionRef} className="min-h-dvh bg-orange-400">
      <div className="h-full flex flex-row items-center">
        <div className="lg:w-[57%] flex-none h-full">
          <div className="md:text-8xl h-full text-5xl font-bold">
            <h2 className="overflow-hidden items-center h-full justify-center flex text-8xl flex-col text-center px-20 text-black">
              <motion.span
                whileInView={{ y: 25 }}
                viewport={{ once: true }}
                ref={firstTextRef}
                className="z-0 whitespace-nowrap text-sky-500 [text-shadow:4px_4px_0_#000,8px_8px_0_rgba(0,0,0,0.4)]"
              >
                {`THINGS I'VE`}
              </motion.span>
              <span
                ref={secTextRef}
                className="z-10 inline-block bg-black text-orange-400 px-5 rounded-lg -rotate-6 border-orange-400 border-8 "
                style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              >
                BUILT
              </span>{" "}
              <motion.span
                whileInView={{ y: -20 }}
                viewport={{ once: true }}
                ref={thirdRef}
                className="z-0 text-amber-300 [text-shadow:4px_4px_0_#000,8px_8px_0_rgba(0,0,0,0.4)]"
              >
                RECENTLY
              </motion.span>
            </h2>
          </div>
        </div>
        <div className="h-full">
          <div ref={sliderRef} className="h-dvh w-full mt-0 md:mt-20 xl:mt-0">
            <div className="h-full w-full flex flex-row items-center gap-52 flex-nowrap text-white">
              <BuiltSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const BuiltSection = () => {
  return (
    <>
      {slides.map((slide, slideIdx) => (
        <Link key={slideIdx} href="" className="border-2 w-2xl h-100">
          <Swiper
            loop={true}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1200}
            modules={[Autoplay, Pagination, EffectFade]}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="w-full h-full"
          >
            {slide.images.map((image, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative bg-white h-full w-full overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent z-10" />
                  <Image fill src={image} alt={slide.title} className="z-5" />
                  <div className="absolute inset-0 z-20 max-w-5xl mx-auto space-y-6 flex flex-col items-center justify-center p-5">
                    <span className="flex h-full w-full justify-start text-7xl">
                      {slideIdx + 1}
                    </span>
                    <span className="text-6xl flex h-full w-full justify-end items-end">
                      {slide.title}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Link>
      ))}
    </>
  );
};
