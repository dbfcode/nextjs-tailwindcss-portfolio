import fs from "fs";

const path = "src/data/projects.json";
const projects = JSON.parse(fs.readFileSync(path, "utf8"));

function repoFromGithubUrl(url) {
  if (!url || !url.includes("github.com")) return null;
  const m = url.match(/github\.com\/[^/]+\/([^/?#]+)/i);
  return m ? m[1] : null;
}

function repoFromGithubPages(url) {
  if (!url || !url.includes("github.io")) return null;
  const m = url.match(/github\.io\/([^/?#]+)/i);
  return m ? m[1] : null;
}

for (const p of projects) {
  if (p.repositoryLink) {
    p.repositoryRepo = repoFromGithubUrl(p.repositoryLink);
    delete p.repositoryLink;
  }

  const pagesRepo = repoFromGithubPages(p.projectLink);
  if (pagesRepo) {
    p.githubPagesRepo = pagesRepo;
    delete p.projectLink;
  }

  const social = p.ProjectInfo?.SocialSharing;
  if (social) {
    for (const link of social) {
      const repo = repoFromGithubUrl(link.url);
      const pages = repoFromGithubPages(link.url);
      if (repo) {
        link.githubRepo = repo;
        delete link.url;
      } else if (pages) {
        link.githubPagesRepo = pages;
        delete link.url;
      }
    }
  }
}

fs.writeFileSync(path, JSON.stringify(projects, null, 2));
console.log("Migrated", projects.length, "projects");
