import ProjectFooter from "@/components/project/ProjectFooter";
import ProjectNavbar from "@/components/project/ProjectNavbar";
import MainProject from "@/components/project/main/MainProject";
import SecOneProject from "@/components/project/main/SecOneProject";
import SecTwoProject from "@/components/project/main/SecTwoProject";

export default function ProjectMain() {
  return (
    <div className="bg-amber-900 overflow-x-hidden">
      <ProjectNavbar />
      <SecOneProject />
      <div className="flex flex-col">
        <MainProject />
        <SecTwoProject />
      </div>
      <ProjectFooter />
    </div>
  );
}
