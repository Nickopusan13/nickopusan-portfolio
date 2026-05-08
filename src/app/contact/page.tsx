import Contact from "@/components/contact/Contact";
import ProjectFooter from "@/components/project/ProjectFooter";
import ProjectNavbar from "@/components/project/ProjectNavbar";

export default function ContactMain() {
  return (
    <div className="overflow-x-hidden bg-amber-900">
      <ProjectNavbar />
      <Contact />
      <ProjectFooter />
    </div>
  );
}
