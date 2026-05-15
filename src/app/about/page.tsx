import About from "@/components/about/About";
import AboutFive from "@/components/about/AboutFive";
import AboutFour from "@/components/about/AboutFour";
import AboutThree from "@/components/about/AboutThree";
import AboutTwo from "@/components/about/AboutTwo";
import ProjectFooter from "@/components/project/ProjectFooter";
import ProjectNavbar from "@/components/project/ProjectNavbar";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import SplitText from "gsap/SplitText";
import gsap from "gsap";

gsap.registerPlugin(SplitText, ScrollTrigger, ScrambleTextPlugin);

export default function AboutMain() {
  return (
    <div className="bg-amber-300">
      <ProjectNavbar />
      <About />
      <AboutTwo />
      <AboutThree />
      <AboutFour />
      <AboutFive />
      <ProjectFooter />
    </div>
  );
}
