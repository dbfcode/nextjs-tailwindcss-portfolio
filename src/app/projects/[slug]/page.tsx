import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ExternalLink, Github, Tag } from "lucide-react";
import {
  getAllProjectSlugs,
  site,
  getProjectBySlug,
  getRelatedProjects,
} from "@/lib/portfolio";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectDemoVideo } from "@/components/projects/ProjectDemoVideo";
import { Button } from "@/components/ui/Button";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Projeto não encontrado" };
  return {
    title: `${project.ProjectHeader.title} | API REST · Java · Full Stack`,
    description: project.ProjectInfo.ObjectivesDetails.slice(0, 160),
    keywords: site.keywords,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const related = getRelatedProjects(slug, 3);
  const techs = project.ProjectInfo.Technologies[0];

  return (
    <article className="py-8">
      <Link
        href="/projects"
        className="mb-8 inline-flex text-sm text-muted hover:text-foreground"
      >
        ← Voltar aos projetos
      </Link>

      <header className="mb-12">
        <p className="text-sm font-medium uppercase tracking-wider text-cyan-400">
          {project.category}
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
          {project.ProjectHeader.title}
        </h1>
        <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted">
          <span className="flex items-center gap-2">
            <Calendar size={16} />
            {project.ProjectHeader.publishDate}
          </span>
          <span className="flex items-center gap-2">
            <Tag size={16} />
            {project.ProjectHeader.tags}
          </span>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {project.projectLink && (
            <Button href={project.projectLink} external>
              <ExternalLink size={18} />
              Ver demo ao vivo
            </Button>
          )}
          {project.repositoryLink && (
            <Button href={project.repositoryLink} variant="secondary" external>
              <Github size={18} />
              Repositório
            </Button>
          )}
        </div>
      </header>

      {project.video && <ProjectDemoVideo video={project.video} />}

      <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {project.ProjectImages.map((image) => (
          <figure
            key={image.id}
            className="glass overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-video">
              <Image
                src={image.img}
                alt={image.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <figcaption className="p-3 text-xs text-muted">
              {image.title}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        <aside className="space-y-10 lg:col-span-1">
          <section>
            <h2 className="text-xl font-semibold">
              {project.ProjectInfo.ClientHeading}
            </h2>
            <ul className="mt-4 space-y-2 text-muted">
              {project.ProjectInfo.CompanyInfo.map((info) => (
                <li key={info.id}>
                  <span className="text-foreground">{info.title}:</span>{" "}
                  {info.details}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              {project.ProjectInfo.ObjectivesHeading}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {project.ProjectInfo.ObjectivesDetails}
            </p>
          </section>

          {techs && (
            <section>
              <h2 className="text-xl font-semibold">{techs.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {techs.techs.join(" · ")}
              </p>
            </section>
          )}

          {project.ProjectInfo.SocialSharing &&
            project.ProjectInfo.SocialSharing.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold">
                  {project.ProjectInfo.SocialSharingHeading ?? "Links"}
                </h2>
                <ul className="mt-4 space-y-2">
                  {project.ProjectInfo.SocialSharing.filter((s) => s.url).map(
                    (link) => (
                      <li key={link.id}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:underline"
                        >
                          {link.name}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </section>
            )}
        </aside>

        <section className="lg:col-span-2">
          <h2 className="text-2xl font-bold">
            {project.ProjectInfo.ProjectDetailsHeading}
          </h2>
          <div className="mt-6 space-y-5">
            {project.ProjectInfo.ProjectDetails.map((detail) => (
              <p key={detail.id} className="leading-relaxed text-muted">
                {detail.details}
              </p>
            ))}
          </div>
        </section>
      </div>

      {related.length > 0 && (
        <section className="mt-20 border-t border-white/5 pt-16">
          <h2 className="mb-8 text-2xl font-bold">Projetos relacionados</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
