import type { Metadata } from "next";
import { ProjectsFilter } from "@/components/projects/ProjectsFilter";
import { getAllProjects, site } from "@/lib/portfolio";

export const metadata: Metadata = {
  title:
    "Projetos | Backend Java · Spring Boot · API REST · Microsserviços",
  description:
    "Cases de backend, APIs REST, microsserviços, integrações, filas, Docker e entregas full stack mobile/web — Diego Ferreira, Especialista Java e Engenheiro de Software.",
  keywords: site.keywords,
};

export default function ProjectsPage() {
  const allProjects = getAllProjects();

  return (
    <div className="py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Projetos <span className="gradient-text">de engenharia</span>
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-muted">
          Portfólio técnico com foco em{" "}
          <strong className="text-foreground">
            backend, Java/Spring Boot, APIs REST e microsserviços
          </strong>
          , complementado por entregas full stack mobile/web e integrações em
          produção.
        </p>
      </div>
      <ProjectsFilter projects={allProjects} />
    </div>
  );
}
