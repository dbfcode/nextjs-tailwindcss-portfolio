import type { Metadata } from "next";
import { ProjectsFilter } from "@/components/projects/ProjectsFilter";
import { getAllProjects, site } from "@/lib/portfolio";

export const metadata: Metadata = {
  title:
    "Projetos | Java · Spring Boot · API REST · Microsserviços · Next.js · Mobile Web",
  description:
    "Portfólio de projetos: APIs REST, microsserviços, NestJS, Java/Spring Boot patterns, Next.js, React, Docker, IA, iGaming e integrações — Diego Ferreira, Desenvolvedor Full Stack.",
  keywords: site.keywords,
};

export default function ProjectsPage() {
  const allProjects = getAllProjects();

  return (
    <div className="py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Projetos <span className="gradient-text">técnicos</span>
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-muted">
          Cases de backend (APIs REST, microsserviços, Docker), full stack
          (Next.js, React, mobile web), integrações, filas, IA e performance —
          alinhados à atuação como{" "}
          <strong className="text-foreground">
            Java Spring Boot Developer
          </strong>{" "}
          e engenheiro de software em produção.
        </p>
      </div>
      <ProjectsFilter projects={allProjects} />
    </div>
  );
}
