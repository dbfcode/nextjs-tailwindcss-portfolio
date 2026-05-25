import type { Metadata } from "next";
import Image from "next/image";
import { AboutBio } from "@/components/about/AboutBio";
import { StatsBar } from "@/components/about/StatsBar";
import { profile } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Sobre",
};

export default function AboutPage() {
  return (
    <div className="py-8">
      <div className="mb-12 flex flex-col items-center gap-8 lg:flex-row lg:items-start">
        <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={profile.avatar}
            alt={profile.name}
            fill
            className="object-cover"
            sizes="192px"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold">
            Sobre <span className="gradient-text">mim</span>
          </h1>
          <p className="mt-2 text-xl text-violet-300">{profile.role}</p>
        </div>
      </div>
      <AboutBio />
      <StatsBar />
    </div>
  );
}
