"use client";

import { useMemo, useState } from "react";
import { useSoundInteraction } from "@/hooks/useSoundInteraction";
import type { Project } from "@/types/portfolio";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

type ProjectsFilterProps = {
  projects: Project[];
};

export function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const { playHover, playClick } = useSoundInteraction();

  const categories = useMemo(() => {
    const unique = [...new Set(projects.map((p) => p.category))];
    return ["Todos", ...unique];
  }, [projects]);

  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              playClick();
              setActive(cat);
            }}
            onMouseEnter={playHover}
            onFocus={playHover}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all",
              active === cat
                ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white"
                : "glass text-muted hover:text-foreground",
            )}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
