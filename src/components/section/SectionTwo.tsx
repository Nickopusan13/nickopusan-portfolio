"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";
import { projects } from "@/utils/projects";
import { FaArrowRight } from "react-icons/fa";

export default function SectionTwo() {
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const firstTextRef = useRef(null);
  const secTextRef = useRef(null);
  const thirdRef = useRef(null);
  const textRef = useRef<HTMLDivElement>(null);
  const handleEnter = () => {
    gsap.to(textRef.current, {
      duration: 1.2,
      color: "#000000",
      scrambleText: {
        text: "Project",
        chars: "Project",
      },
    });
  };
  const handleLeave = () => {
    gsap.to(textRef.current, {
      duration: 1.2,
      color: "#ffffff",
      scrambleText: {
        text: "Project",
        chars: "Project",
        rightToLeft: true,
      },
    });
  };
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      if (!scrollSectionRef.current || !sliderRef.current) return;
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
      const getScrollAmount = () => {
        if (!sliderRef.current) return 0;
        return Math.max(
          0,
          sliderRef.current.scrollWidth - window.innerWidth - 1000,
        );
      };
      mm.add("(min-width: 768px)", () => {
        const st = gsap.to(sliderRef.current, {
          x: () => -getScrollAmount(),
          ease: "none",
          scrollTrigger: {
            trigger: scrollSectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
        return () => st.kill();
      });
      return () => {
        firstTextSplit.revert();
        thirdTextSplit.revert();
        mm.revert();
      };
    },
    { scope: scrollSectionRef },
  );
  return (
    <section
      ref={scrollSectionRef}
      className="relative min-h-svh md:min-h-[400svh] bg-orange-400"
    >
      <div className="md:sticky top-0 h-auto min-h-svh md:h-svh py-20 md:py-0 w-full overflow-hidden">
        <div
          ref={sliderRef}
          className="h-full flex flex-col md:flex-row items-center gap-20 md:gap-10 lg:gap-20 md:will-change-transform"
        >
          <div className="lg:w-[40vw] flex-none items-center h-full">
            <div className="md:text-7xl lg:text-8xl h-full text-6xl font-bold">
              <h2 className="overflow-hidden items-center h-full justify-center flex flex-col text-center px-5 md:px-20 text-black">
                <span
                  ref={firstTextRef}
                  className="z-0 translate-y-5 whitespace-nowrap text-sky-500 [text-shadow:4px_4px_0_#000,8px_8px_0_rgba(0,0,0,0.4)]"
                >
                  {`THINGS I'VE`}
                </span>
                <span
                  ref={secTextRef}
                  className="z-10 inline-block bg-black text-orange-400 px-5 rounded-lg -rotate-6 border-orange-400 border-8 "
                  style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                >
                  BUILT
                </span>{" "}
                <span
                  ref={thirdRef}
                  className="z-0 -translate-y-3 text-amber-300 [text-shadow:4px_4px_0_#000,8px_8px_0_rgba(0,0,0,0.4)]"
                >
                  RECENTLY
                </span>
              </h2>
            </div>
          </div>
          <div className="h-auto md:h-svh w-full md:w-[150vw]">
            <div className="h-full w-full flex flex-col md:flex-row items-center gap-10 lg:gap-40 md:flex-nowrap text-white">
              <BuiltSection />
              <div
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className="flex flex-none w-full px-1 md:text-4xl"
              >
                <Link
                  href="/project"
                  className="flex-none w-full h-60 lg:w-2xl lg:h-100 border-4 lg:border-15 bg-white/10 rounded-2xl backdrop-blur-md flex flex-col justify-center items-center group relative overflow-hidden"
                >
                  <div
                    ref={(el) => {
                      textRef.current = el;
                    }}
                    className="text-4xl md:text-6xl font-bold text-white"
                  >
                    Project
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-white/80 group-hover:text-white transition">
                    <span className="text-xl">Explore</span>
                    <FaArrowRight className="group-hover:translate-x-2 transition" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const BuiltSection = () => {
  const titleRef = useRef<(HTMLDivElement | null)[]>([]);
  const handleEnter = (index: number) => {
    const el = titleRef.current[index];
    if (!el) return;
    gsap.to(el, {
      keyframes: [
        { scale: 1.1, skewX: -8, duration: 0.15, ease: "power2.out" },
        { scale: 0.9, skewX: 4, duration: 0.12, ease: "power2.inOut" },
        { scale: 1.02, skewX: 0, duration: 0.4, ease: "elastic.out(1, 0.4)" },
      ],
      color: "#f97316",
      overwrite: "auto",
    });
  };

  const handleLeave = (index: number) => {
    const el = titleRef.current[index];
    if (!el) return;
    gsap.to(el, {
      duration: 0.5,
      scale: 1,
      skewX: 0,
      rotation: 0,
      color: "#ffffff",
      ease: "back.out(2)",
      overwrite: "auto",
    });
  };
  return (
    <>
      {projects.map((slide, slideIdx) => (
        <Link
          onMouseEnter={() => handleEnter(slideIdx)}
          onMouseLeave={() => handleLeave(slideIdx)}
          key={slideIdx}
          href={`project/${slide.slug}`}
          className="relative flex-none overflow-hidden px-1 w-full h-60 md:w-2xl lg:h-100 rounded-2xl"
        >
          <Swiper
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1200}
            modules={[Autoplay, EffectFade]}
            className="w-full h-full"
          >
            {slide.images.map((image, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative h-full w-full bg-black overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent z-10" />
                  <Image
                    fill
                    src={image}
                    alt={slide.title}
                    className="z-5 object-cover p-1 md:p-2 rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            ref={(el) => {
              titleRef.current[slideIdx] = el;
            }}
            className="absolute inset-0 z-20 lg:max-w-5xl mx-auto lg:space-y-6 flex flex-col items-center justify-center p-3 md:p-5"
          >
            <span className="flex h-full w-full justify-start text-2xl lg:text-7xl">
              {slideIdx + 1}
            </span>
            <span className="text-2xl lg:text-6xl flex h-full w-full justify-end items-end">
              {slide.title}
            </span>
          </div>
        </Link>
      ))}
    </>
  );
};
