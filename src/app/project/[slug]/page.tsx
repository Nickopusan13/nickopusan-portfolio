import { projects } from "@/utils/projects";
import { notFound } from "next/navigation";
import ProjectNavbar from "@/components/project/ProjectNavbar";
import TheProject from "@/components/project/TheProject";
import ProjectFooter from "@/components/project/ProjectFooter";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <div className="bg-zinc-900">
      <ProjectNavbar />
      <div className="flex flex-col gap-0 lg:gap-10">
        <TheProject
          description={project.description}
          images={project.images}
          title={project.title}
        />
        <div className="border hidden lg:block border-white/20 w-full " />
        <ProjectFooter />
      </div>
    </div>
  );
}
