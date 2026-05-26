import fs from "fs";

const path = "src/data/projects.json";
const projects = JSON.parse(fs.readFileSync(path, "utf8"));

const updates = {
  "bolsa-api-nest-arquitetura-modular": {
    title:
      "API REST & Microsserviços — NestJS, PostgreSQL, Docker (padrões Java/Spring Boot)",
    category: "Backend · APIs REST · Microsserviços · DevOps",
    tags: "API REST / Microsserviços / NestJS / Node.js / TypeScript / PostgreSQL / Docker / JWT / Swagger / TDD-ready",
    objectives:
      "Demonstrar competência de Desenvolvedor Backend em APIs REST escaláveis, com arquitetura modular alinhada a boas práticas de Java Spring Boot (domínios, injeção de dependência, camadas). API dockerizada para simulador de bolsa, com autenticação JWT HttpOnly, Swagger, Prisma, migrations/seeds e setup automatizado para produção e onboarding de times.",
    companyExtra: {
      title: "Relevância profissional",
      details:
        "Base técnica para atuação como Java Spring Boot Developer e construtor de microsserviços em iGaming e SaaS.",
    },
    techsAdd: ["API REST", "Microsserviços", "Arquitetura em camadas", "CI/CD-ready"],
  },
  "autenticacao-nextjs-react-cookie-httponly": {
    title:
      "Full Stack · Auth segura — Next.js, React, NestJS, API REST (mobile web)",
    category: "Web/Mobile · Full Stack · API REST · Segurança",
    tags: "Next.js / React / NestJS / API REST / JWT / Cookies HttpOnly / TypeScript / Mobile Web / Atomic Design",
    objectives:
      "Módulo full stack de autenticação para aplicações web e mobile web, consumindo API REST NestJS com JWT em cookies HttpOnly (anti-XSS). Reflete entregas em produção: integração front/back, formulários tipados, Atomic Design e base para SSR/Server Actions — stack complementar ao ecossistema Java/Spring Boot em APIs seguras.",
    companyExtra: {
      title: "Contexto",
      details: "Integrações auth/sessão similares às implementadas em Moovbet e produtos iGaming.",
    },
    techsAdd: ["API REST", "Segurança de API", "Mobile Web", "Full Stack"],
  },
  "streamhub-plataforma-streaming": {
    title: "StreamHub — Next.js, SEO, SSR/SSG (case iGaming / performance)",
    category: "Web Application · SEO · iGaming-ready",
    tags: "Next.js / React / TypeScript / API REST / SSR / SSG / SEO / i18n / Performance / iGaming",
    objectives:
      "Plataforma de streaming demonstrando migração e otimização React → Next.js (SSG/SSR), alinhada à experiência em iGaming: +70% velocidade, Lighthouse 90+, SEO multilíngue, React Query, Core Web Vitals e arquitetura escalável — mesmas métricas e técnicas aplicadas em produção na Moovbet.",
    companyExtra: {
      title: "Resultados (referência CV)",
      details:
        "Performance, SEO orgânico e experiência fluida para alta demanda e retenção de usuários.",
    },
    techsAdd: ["SEO técnico", "Core Web Vitals", "iGaming", "Crowdin/i18n"],
  },
  "cadastro-login-pagina-usuario-aplicacao-react": {
    title: "Auth Web/Mobile — React, Firebase, API de autenticação",
    category: "Web/Mobile Application · Full Stack",
    tags: "React / Mobile Web / Firebase Auth / API REST / React Router / TypeScript-ready",
    objectives:
      "Fluxo completo de autenticação web/mobile com React e Firebase Auth, validação (React Hook Form + Yup) e UI baseada em Figma — fundamentos de produto digital e integração com serviços em nuvem, etapa anterior à stack corporativa Java/Node em APIs REST.",
    techsAdd: ["Mobile Web Developer", "Autenticação", "React"],
  },
  "mini-erp-crm-php-mysql-rabbitmq-asaas": {
    title: "Mini ERP/CRM — APIs, filas, microsserviços, integrações (PHP)",
    category: "Full Stack · APIs REST · Microsserviços",
    tags: "PHP 8 / MySQL / API REST / RabbitMQ / Microsserviços / Docker / Asaas / Integrações",
    objectives:
      "Mini ERP/CRM com APIs, eventos assíncronos (RabbitMQ), integração de pagamentos (Asaas) e Docker — demonstra modelagem de domínio, filas e integrações presentes em backends Java/Spring Boot e Node.js em ambientes de produção.",
    techsAdd: ["Microsserviços", "Mensageria", "API REST", "Integrações"],
  },
  gitfind: {
    title: "GitFind — React, consumo de API REST pública",
    category: "Web Application · JavaScript · API REST",
    tags: "React / JavaScript / API REST / GitHub API / Web Developer",
    objectives:
      "Estudo de consumo de API REST (GitHub API) e evolução do ecossistema front-end — base para transição a TypeScript, Next.js e backends Java/Node corporativos.",
    techsAdd: ["API REST", "JavaScript Developer"],
  },
  "pokedex-com-pokeapi": {
    title: "Pokédex — API REST, performance web/mobile",
    category: "Web/Mobile · API REST · JavaScript",
    tags: "JavaScript / API REST / PokeAPI / Performance / Mobile Web / Bootstrap",
    objectives:
      "Pokédex com consumo intensivo de API REST, cache, debounce e paginação — práticas de performance web/mobile aplicáveis a catálogos e listagens em produtos iGaming e SaaS.",
    techsAdd: ["API REST", "Mobile Web", "Performance"],
  },
  "portfolio-mobile-first-javascript": {
    title: "Portfólio Mobile Web — JavaScript, API REST, GitHub",
    category: "Mobile Web · API REST",
    tags: "Mobile Web Developer / JavaScript / API REST / GitHub API / Mobile First",
    objectives:
      "Portfólio mobile-first com consumo de API REST (GitHub) e JSON estático — origem da evolução para este portfólio Next.js com SEO para Java Spring Boot Developer e microsserviços.",
    techsAdd: ["Mobile Web Developer", "API REST"],
  },
  "crud-console-linguagem-c": {
    title: "CRUD Console — Lógica e estruturas (base de formação)",
    category: "Formação · Lógica de programação",
    tags: "C / CRUD / Estruturas de dados / Formação acadêmica",
    objectives:
      "Projeto acadêmico em C reforçando lógica, estruturas de dados e CRUD — alicerce da trilha até Análise de Sistemas, Java/Spring Boot e desenvolvimento backend profissional.",
    techsAdd: ["Fundamentos", "Análise de Sistemas"],
  },
};

for (const project of projects) {
  const u = updates[project.slug];
  if (!u) continue;

  if (u.title) project.title = u.title;
  if (u.category) project.category = u.category;
  if (u.tags) project.ProjectHeader.tags = u.tags;
  if (u.objectives) project.ProjectInfo.ObjectivesDetails = u.objectives;

  if (u.companyExtra) {
    const exists = project.ProjectInfo.CompanyInfo.some(
      (c) => c.title === u.companyExtra.title,
    );
    if (!exists) project.ProjectInfo.CompanyInfo.push({ id: `extra-${project.slug}`, ...u.companyExtra });
  }

  if (u.techsAdd) {
    const group = project.ProjectInfo.Technologies[0];
    if (group) {
      const set = new Set([...group.techs, ...u.techsAdd]);
      group.techs = [...set];
      group.title = "Stack & competências (API REST · Backend · Web/Mobile)";
    }
  }

  const detailPrefix =
    "Alinhado ao perfil de Desenvolvedor Java/Spring Boot, APIs REST e microsserviços: ";
  if (project.ProjectInfo.ProjectDetails[0] && !project.ProjectInfo.ProjectDetails[0].details.startsWith("Alinhado")) {
    project.ProjectInfo.ProjectDetails[0].details =
      detailPrefix + project.ProjectInfo.ProjectDetails[0].details;
  }
}

fs.writeFileSync(path, JSON.stringify(projects, null, 2));
console.log("Updated", Object.keys(updates).length, "projects");
