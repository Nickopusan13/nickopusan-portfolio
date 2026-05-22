import { projects } from "@/utils/projects";
import { notFound } from "next/navigation";
import ProjectNavbar from "@/components/project/ProjectNavbar";
import TheProject from "@/components/project/project/TheProject";
import ProjectFooter from "@/components/project/ProjectFooter";
import TheProjectSec from "@/components/project/project/TheProjectSec";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <div>
      <ProjectNavbar />
      <div className="flex flex-col bg-amber-600 gap-10">
        <TheProject
          description={project.description}
          images={project.images}
          title={project.title}
          subTitle={project.subTitle}
          slug={project.slug}
        />
        <TheProjectSec
          architecture={project.architecture}
          challenges={project.challenges}
          performance={project.performance}
          role={project.role}
          solution={project.solution}
          techStack={project.techStack}
        />
        <ProjectFooter />
      </div>
    </div>
  );
}
