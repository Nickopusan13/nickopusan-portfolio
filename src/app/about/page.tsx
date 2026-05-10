import About from "@/components/about/About";
import ProjectFooter from "@/components/project/ProjectFooter";
import ProjectNavbar from "@/components/project/ProjectNavbar";

export default function AboutMain() {
  return (
    <div className="overflow-x-hidden bg-amber-500">
      <ProjectNavbar />
      <About />
      <ProjectFooter />
    </div>
  );
}
