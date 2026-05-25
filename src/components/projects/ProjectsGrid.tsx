import type { Project } from "@/types/portfolio";
import { ProjectCard } from "./ProjectCard";

type ProjectsGridProps = {
  projects: Project[];
  title?: string;
  subtitle?: string;
  id?: string;
};

export function ProjectsGrid({
  projects,
  title = "Projetos em destaque",
  subtitle = "Seleção dos trabalhos mais recentes e relevantes",
  id = "projetos",
}: ProjectsGridProps) {
  return (
    <section id={id} className="py-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mt-3 text-muted">{subtitle}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
