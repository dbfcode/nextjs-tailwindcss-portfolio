import type { Metadata } from "next";
import { ProjectsFilter } from "@/components/projects/ProjectsFilter";
import { getAllProjects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Projetos",
};

export default function ProjectsPage() {
  const allProjects = getAllProjects();

  return (
    <div className="py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Meus <span className="gradient-text">projetos</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted">
          Portfólio técnico com APIs, front-ends modernos, integrações e
          projetos acadêmicos — mesmas descrições e evidências do portfólio
          anterior, agora com estrutura tipada em TypeScript.
        </p>
      </div>
      <ProjectsFilter projects={allProjects} />
    </div>
  );
}
