import aboutData from "@/data/about.json";
import educationData from "@/data/education.json";
import experienceData from "@/data/experience.json";
import profileData from "@/data/profile.json";
import projectsData from "@/data/projects.json";
import siteData from "@/data/site.json";
import skillsData from "@/data/skills.json";
import statsData from "@/data/stats.json";
import {
  githubPagesUrl,
  githubProfileUrl,
  githubRepoUrl,
  GITHUB_USERNAME,
  resolveLegacyGithubUrl,
} from "@/lib/github";
import type {
  BioParagraph,
  Education,
  Experience,
  Profile,
  Project,
  ProjectInfo,
  SiteConfig,
  SkillsProfile,
  SocialLink,
  Stat,
} from "@/types/portfolio";

function resolveSocialLink(link: SocialLink): SocialLink {
  if (link.githubRepo) {
    return { ...link, url: githubRepoUrl(link.githubRepo) };
  }
  if (link.githubPagesRepo) {
    return { ...link, url: githubPagesUrl(link.githubPagesRepo) };
  }
  if (link.url && (link.url.includes("github.com") || link.url.includes("github.io"))) {
    return { ...link, url: resolveLegacyGithubUrl(link.url) };
  }
  return link;
}

function hydrateProjectInfo(info: ProjectInfo): ProjectInfo {
  if (!info.SocialSharing) return info;
  return {
    ...info,
    SocialSharing: info.SocialSharing.map(resolveSocialLink).filter(
      (l) => l.url && l.url.length > 0,
    ),
  };
}

function hydrateProject(raw: Project): Project {
  const repositoryLink = raw.repositoryRepo
    ? githubRepoUrl(raw.repositoryRepo)
    : raw.repositoryLink
      ? resolveLegacyGithubUrl(raw.repositoryLink)
      : undefined;

  const projectLink =
    raw.projectLink ??
    (raw.githubPagesRepo ? githubPagesUrl(raw.githubPagesRepo) : null);

  return {
    ...raw,
    repositoryLink,
    projectLink,
    ProjectInfo: hydrateProjectInfo(raw.ProjectInfo),
  };
}

export const site: SiteConfig = siteData;

export const profile: Profile = {
  ...profileData,
  github: githubProfileUrl(),
};

export { GITHUB_USERNAME, githubProfileUrl, githubRepoUrl, githubPagesUrl };

export const about: BioParagraph[] = aboutData;
export const stats: Stat[] = statsData;
export const skills: SkillsProfile = skillsData;
export const experience: Experience[] = experienceData;
export const education: Education[] = educationData;

export const projects: Project[] = (projectsData as Project[]).map(hydrateProject);

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
