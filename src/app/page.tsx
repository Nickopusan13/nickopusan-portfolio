import Main from "@/components/Main";
import gsap from "gsap";
import { SplitText, ScrollTrigger, ScrambleTextPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin);

export default function MainPage() {
  return <Main />;
}
