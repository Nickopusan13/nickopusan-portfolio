import Main from "@/components/Main";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import Loader from "@/components/Loader";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin);

export default function MainPage() {
  return (
    <div className="relative">
      <Loader />
      <Main />
    </div>
  );
}
