"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useSoundInteraction } from "@/hooks/useSoundInteraction";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { soundProps } = useSoundInteraction();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group glass block overflow-hidden rounded-2xl transition-all duration-300 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/10"
        onMouseEnter={soundProps.onMouseEnter}
        onFocus={soundProps.onFocus}
        onClick={soundProps.onClick}
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
          <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
            <ArrowUpRight size={20} />
          </span>
        </div>
        <div className="p-5">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-xs font-medium uppercase tracking-wider text-cyan-400">
              {project.category}
            </p>
            {project.video && (
              <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-[10px] font-medium text-violet-300">
                Com vídeo
              </span>
            )}
          </div>
          <h3 className="mt-2 text-lg font-semibold leading-snug group-hover:text-violet-300 transition-colors">
            {project.title}
          </h3>
        </div>
      </Link>
    </motion.article>
  );
}
