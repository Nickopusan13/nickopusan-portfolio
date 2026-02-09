import { projects } from "@/utils/projects";
import { notFound } from "next/navigation";
import ProjectNavbar from "@/components/project/ProjectNavbar";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <div className="">
      <ProjectNavbar />
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}
