import { Hero } from "@/components/home/Hero";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { getFeaturedProjects } from "@/lib/portfolio";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  const featured = getFeaturedProjects(6);

  return (
    <>
      <Hero />
      <ProjectsGrid projects={featured} />
      <div className="flex justify-center pb-10">
        <Button href="/projects" variant="secondary">
          Ver todos os projetos
        </Button>
      </div>
    </>
  );
}
