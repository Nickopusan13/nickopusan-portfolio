import ProjectFooter from "@/components/project/ProjectFooter";
import ProjectNavbar from "@/components/project/ProjectNavbar";
import MainProject from "@/components/project/main/MainProject";

export default function ProjectMain() {
  return (
    <div className="bg-zinc-900">
      <ProjectNavbar />
      <div className="flex flex-col pt-25">
        <MainProject />
      </div>
      <ProjectFooter />
    </div>
  );
}
