import type { Metadata } from "next";
import Image from "next/image";
import { AboutBio } from "@/components/about/AboutBio";
import { AboutEducation } from "@/components/about/AboutEducation";
import { AboutExperience } from "@/components/about/AboutExperience";
import { AboutSkills } from "@/components/about/AboutSkills";
import { StatsBar } from "@/components/about/StatsBar";
import { profile, site } from "@/lib/portfolio";

export const metadata: Metadata = {
  title:
    "Sobre | Especialista Java · Spring Boot · Backend · APIs REST · Microsserviços",
  description:
    "Diego Ferreira — Engenheiro de Software e Desenvolvedor Backend Java/Spring Boot. APIs REST, microsserviços, mobile full stack, iGaming, Cloud, Docker, AWS e IA aplicada.",
  keywords: site.keywords,
};

export default function AboutPage() {
  return (
    <div className="py-8">
      <div className="mb-12 flex flex-col items-center gap-8 lg:flex-row lg:items-start">
        <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={profile.avatar}
            alt={`${profile.name} — Especialista Java e Backend Spring Boot`}
            fill
            className="object-cover"
            sizes="192px"
            priority
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold">
            Sobre <span className="gradient-text">mim</span>
          </h1>
          <p className="mt-2 text-xl text-violet-300">{profile.role}</p>
          {profile.headline && (
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {profile.headline}
            </p>
          )}
        </div>
      </div>
      <AboutBio />
      <AboutExperience />
      <AboutSkills />
      <AboutEducation />
      <StatsBar />
    </div>
  );
}
