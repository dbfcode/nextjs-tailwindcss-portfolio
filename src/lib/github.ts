import profileData from "@/data/profile.json";

/** Única fonte do username — altere em `src/data/profile.json`. */
export const GITHUB_USERNAME = profileData.githubUsername;

const GITHUB_ORIGIN = "https://github.com";

export function githubProfileUrl(): string {
  return `${GITHUB_ORIGIN}/${GITHUB_USERNAME}`;
}

export function githubRepoUrl(repo: string): string {
  const name = repo.replace(/^\//, "").replace(/\/$/, "");
  return `${GITHUB_ORIGIN}/${GITHUB_USERNAME}/${name}`;
}

export function githubPagesUrl(repo: string): string {
  const name = repo.replace(/^\//, "").replace(/\/$/, "");
  return `https://${GITHUB_USERNAME}.github.io/${name}/`;
}

/** Converte URL legada (outro username) para o username atual. */
export function resolveLegacyGithubUrl(url: string): string {
  const repoFromDotCom = url.match(/github\.com\/[^/]+\/([^/?#]+)/i);
  if (repoFromDotCom) return githubRepoUrl(repoFromDotCom[1]);

  const repoFromPages = url.match(/github\.io\/([^/?#]+)/i);
  if (repoFromPages) return githubPagesUrl(repoFromPages[1]);

  return url;
}

export function isGithubDotComUrl(url: string): boolean {
  return /github\.com\//i.test(url);
}

export function isGithubPagesUrl(url: string): boolean {
  return /\.github\.io\//i.test(url);
}
