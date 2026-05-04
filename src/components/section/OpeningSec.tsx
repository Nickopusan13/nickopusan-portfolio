"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShyEmote } from "../ShyEmote";
import dynamic from "next/dynamic";
import throttle from "lodash.throttle";

const LiveCirclesBG = dynamic(() => import("../Background"), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

export default function OpeningSec() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef(null);
  useGSAP(
    () => {
      if (!titleRef.current) return;
      const splitTitle = SplitText.create(titleRef.current, {
        type: "chars",
      });
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 7,
      });
      tl.to(".eye", {
        scaleY: 0.02,
        transformOrigin: "50% 50%",
        duration: 0.5,
        ease: "power2.in",
      }).to(".eye", {
        scaleY: 1,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.set(titleRef.current, { opacity: 1 });
      gsap.from(splitTitle.chars, {
        stagger: 0.05,
        ease: "power2.inOut",
        yPercent: 100,
        delay: 1,
      });
      return () => {
        splitTitle.revert();
        tl.kill();
      };
    },
    { scope: sectionRef },
  );
  return (
    <>
      <section
        ref={sectionRef}
        className="h-svh w-full relative flex-col flex overflow-hidden justify-center items-center bg-white"
      >
        <LiveCirclesBG />
        <Emoticon />
        <div className="h-full w-full mt-5 items-center justify-center z-20 relative">
          <div className="w-full items-center justify-center flex flex-col">
            <h1
              ref={titleRef}
              className="opacity-0 text-5xl md:text-7xl lg:text-8xl text-sky-400 font-bold overflow-hidden [text-shadow:4px_4px_0_#000,8px_8px_0_rgba(0,0,0,0.4)]"
            >{`HEY, I'M NICKOPUSAN`}</h1>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <BigEmoticon />
          </div>
        </div>
      </section>
    </>
  );
}

const Emoticon = () => {
  return (
    <div className="lg:min-w-7xl w-full min-h-1/2 top-30 absolute flex items-center justify-center z-30">
      <ShyEmote
        src="/assets/emote/emote_1.svg"
        className="lg:bottom-30 bottom-0 right-5 lg:right-40 "
        imageClassName="absolute w-30 h-30 lg:w-40 lg:h-40 mt-2"
        link="https://github.com/Nickopusan13"
        title="GITHUB"
      />
      <ShyEmote
        src="/assets/emote/emote_2.svg"
        className="top-0 right-10 lg:top-10 lg:right-120"
        imageClassName="absolute w-30 h-30 lg:w-35 lg:h-35 mt-1"
        link="https://www.linkedin.com/in/nickopusan13/"
        title="LINKEDIN"
      />
      <ShyEmote
        src="/assets/emote/emote_3.svg"
        className="bottom-6 lg:bottom-30 left-7 lg:left-140"
        imageClassName="absolute w-30 h-30 lg:w-35 lg:h-35 mt-5"
        link="https://upwork.com/freelancers/nickopusan"
        title="UPWORK"
      />
      <ShyEmote
        src="/assets/emote/emote_4.svg"
        className="top-5 left-10 lg:left-70 lg:top-20"
        imageClassName="absolute w-30 h-30 lg:w-35 lg:h-35 mt-7"
        link="mailto:nickowork13@gmail.com"
        title="EMAIL"
      />
    </div>
  );
};

const BigEmoticon = () => {
  const leftEyeRef = useRef<SVGEllipseElement>(null);
  const rightEyeRef = useRef<SVGEllipseElement>(null);
  const leftPupilRef = useRef<SVGEllipseElement>(null);
  const rightPupilRef = useRef<SVGEllipseElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const eyeCenters = {
    left: { x: 646.5, y: 173.5 },
    right: { x: 834.5, y: 173.5 },
  };

  useGSAP(() => {
    const viewBoxWidth = 1440;
    const viewBoxHeight = 319;
    const maxWhiteMove = 10;
    const maxPupilMove = 45;

    const moveEye = (
      eyeCenter: { x: number; y: number },
      eye: SVGEllipseElement | null,
      pupil: SVGEllipseElement | null,
      mouseX: number,
      mouseY: number,
    ) => {
      if (!eye || !pupil) return;
      const dx = mouseX - eyeCenter.x;
      const dy = mouseY - eyeCenter.y;
      const angle = Math.atan2(dy, dx);
      const distance = Math.hypot(dx, dy);
      const whiteDist = Math.min(distance / 30, maxWhiteMove);
      const pupilDist = Math.min(distance / 10, maxPupilMove);
      const whiteTargetX = eyeCenter.x + whiteDist * Math.cos(angle);
      const whiteTargetY = eyeCenter.y + whiteDist * Math.sin(angle);
      const pupilTargetX = eyeCenter.x + pupilDist * Math.cos(angle);
      const pupilTargetY = eyeCenter.y + pupilDist * Math.sin(angle);

      gsap.to(eye, {
        cx: whiteTargetX,
        cy: whiteTargetY,
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(pupil, {
        cx: pupilTargetX,
        cy: pupilTargetY,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseMove = throttle((e: MouseEvent) => {
      if (!svgRef.current) return;
      const svgRect = svgRef.current.getBoundingClientRect();
      const mousePixelX = e.clientX - svgRect.left;
      const mousePixelY = e.clientY - svgRect.top;
      const mouseViewX = (mousePixelX / svgRect.width) * viewBoxWidth;
      const mouseViewY = (mousePixelY / svgRect.height) * viewBoxHeight;

      moveEye(
        eyeCenters.left,
        leftEyeRef.current,
        leftPupilRef.current,
        mouseViewX,
        mouseViewY,
      );
      moveEye(
        eyeCenters.right,
        rightEyeRef.current,
        rightPupilRef.current,
        mouseViewX,
        mouseViewY,
      );
    }, 16);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      handleMouseMove.cancel();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1440 319"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-label="Big emoticon with following eyes"
    >
      <path
        d="M1717.51 296.106C1717.51 359.976 2044.54 344.301 740.501 344.301C-563.54 344.301 -236.512 359.976 -236.512 296.106C-236.512 232.236 200.911 0 740.501 0C1280.09 0 1717.51 232.236 1717.51 296.106Z"
        fill="#ff8904"
      />
      <ellipse
        ref={rightEyeRef}
        className="eye eye-right"
        cx="834.5"
        cy="173.5"
        rx="55.5"
        ry="87.5"
        fill="white"
      />
      <ellipse
        ref={rightPupilRef}
        className="eye pupils-right"
        cx="835"
        cy="174"
        rx="26"
        ry="25"
        fill="black"
      />
      <ellipse
        ref={leftEyeRef}
        className="eye eye-left"
        cx="646.5"
        cy="173.5"
        rx="55.5"
        ry="87.5"
        fill="white"
      />
      <ellipse
        ref={leftPupilRef}
        className="eye pupils-left"
        cx="647"
        cy="174"
        rx="26"
        ry="25"
        fill="black"
      />
    </svg>
  );
};
