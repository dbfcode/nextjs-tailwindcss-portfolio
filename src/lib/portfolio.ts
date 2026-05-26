import aboutData from "@/data/about.json";
import educationData from "@/data/education.json";
import experienceData from "@/data/experience.json";
import profileData from "@/data/profile.json";
import projectsData from "@/data/projects.json";
import siteData from "@/data/site.json";
import skillsData from "@/data/skills.json";
import statsData from "@/data/stats.json";
import type {
  BioParagraph,
  Education,
  Experience,
  Profile,
  Project,
  SiteConfig,
  SkillsProfile,
  Stat,
} from "@/types/portfolio";

export const site: SiteConfig = siteData;
export const profile: Profile = profileData;
export const about: BioParagraph[] = aboutData;
export const stats: Stat[] = statsData;
export const skills: SkillsProfile = skillsData;
export const experience: Experience[] = experienceData;
export const education: Education[] = educationData;
export const projects: Project[] = projectsData as Project[];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(limit = 6): Project[] {
  return projects.slice(0, limit);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug || p.url === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getRelatedProjects(
  currentSlug: string,
  limit = 3,
): Project[] {
  return projects.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
