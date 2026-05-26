export interface LabeledItem {
  id: string;
  title: string;
  details: string;
}

export interface ProjectImage {
  id: string;
  title: string;
  img: string;
}

export interface ProjectVideo {
  src: string;
  webm?: string;
  poster: string;
  title: string;
}

export interface ProjectHeader {
  title: string;
  publishDate: string;
  tags: string;
}

export interface TechnologyGroup {
  title: string;
  techs: string[];
}

export interface ProjectDetail {
  id: string;
  details: string;
}

export interface SocialLink {
  id: string;
  name: string;
  /** URL externa (não-GitHub). */
  url?: string;
  /** Nome do repositório — monta `github.com/{username}/{repo}`. */
  githubRepo?: string;
  /** Nome do repo no GitHub Pages — monta `{username}.github.io/{repo}`. */
  githubPagesRepo?: string;
}

export interface ProjectInfo {
  ClientHeading: string;
  CompanyInfo: LabeledItem[];
  ObjectivesHeading: string;
  ObjectivesDetails: string;
  Technologies: TechnologyGroup[];
  ProjectDetailsHeading: string;
  ProjectDetails: ProjectDetail[];
  SocialSharingHeading?: string;
  SocialSharing?: SocialLink[];
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  url: string;
  category: string;
  img: string;
  projectLink?: string | null;
  /** Preenchido em runtime a partir de `repositoryRepo` + `githubUsername`. */
  repositoryLink?: string;
  /** Somente nome do repositório (dados em JSON). */
  repositoryRepo?: string;
  /** Demo em GitHub Pages — somente nome do repo. */
  githubPagesRepo?: string;
  video?: ProjectVideo;
  ProjectHeader: ProjectHeader;
  ProjectImages: ProjectImage[];
  ProjectInfo: ProjectInfo;
}

export interface BioParagraph {
  id: string;
  bio: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Profile {
  name: string;
  role: string;
  headline?: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  phoneWhatsApp?: string;
  /** Username único — altere aqui ao mudar de conta no GitHub. */
  githubUsername: string;
  /** URL do perfil (derivada em runtime). */
  github: string;
  linkedin: string;
  portfolio?: string;
  avatar: string;
  languages?: Language[];
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  url: string;
  keywords?: string[];
  nav: NavItem[];
}

export interface SkillsProfile {
  competencies: string[];
  softSkills?: string[];
  deliverables: string[];
  roles: string[];
  certifications?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Education {
  id: string;
  institution: string;
  course: string;
  period: string;
}
