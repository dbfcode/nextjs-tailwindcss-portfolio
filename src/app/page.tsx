import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { getFeaturedProjects, site } from "@/lib/portfolio";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  keywords: site.keywords,
};

export default function HomePage() {
  const featured = getFeaturedProjects(6);

  return (
    <>
      <Hero />
      <ProjectsGrid
        projects={featured}
        title="Projetos em destaque"
        subtitle="APIs REST, microsserviços, Next.js, mobile web, Docker e IA aplicada"
      />
      <div className="flex justify-center pb-10">
        <Button href="/projects" variant="secondary">
          Ver todos os projetos
        </Button>
      </div>
    </>
  );
}
