import fs from "fs";

const path = "src/data/projects.json";
const projects = JSON.parse(fs.readFileSync(path, "utf8"));

const rewrites = {
  "bolsa-api-nest-arquitetura-modular": {
    title: "API REST & microsserviços — NestJS/Node (padrões Spring Boot · Java)",
    category: "Backend · Java/Spring patterns · APIs REST · Microsserviços",
    tags: "API REST / Microsserviços / Backend / NestJS / PostgreSQL / Docker / JWT / Swagger / TDD",
    objectives:
      "API backend modular e dockerizada para simulador de bolsa, modelada com práticas equivalentes a Java Spring Boot: domínios separados, injeção de dependência, DTOs, guards e documentação OpenAPI. Foco em autenticação JWT HttpOnly, Prisma/PostgreSQL, migrations, seeds e ambiente reproduzível para times backend.",
    techTitle: "Stack backend & integração",
    techs: [
      "API REST",
      "Microsserviços modulares",
      "NestJS / Node.js / TypeScript",
      "PostgreSQL / Prisma ORM",
      "JWT HttpOnly / Segurança de API",
      "Docker / Docker Compose",
      "Swagger OpenAPI 3",
      "Padrões Spring Boot (camadas, módulos)",
    ],
    detailLead:
      "Backend production-ready com arquitetura orientada a domínio e operações DevOps:",
  },
  "autenticacao-nextjs-react-cookie-httponly": {
    title: "Auth & API REST — backend NestJS + integração mobile/web full stack",
    category: "Backend · API REST · Full Stack · Segurança",
    tags: "API REST / Backend / NestJS / JWT / Microsserviços / Mobile Full Stack / PostgreSQL",
    objectives:
      "Módulo de autenticação corporativa: API REST NestJS com JWT em cookies HttpOnly e cliente mobile/web full stack consumindo contratos tipados. Demonstra integração segura back-end ↔ canais digitais, regras de sessão e validação — competências centrais de Desenvolvedor Backend Java/Spring Boot em ecossistemas Node.",
    techTitle: "Stack backend-first",
    techs: [
      "API REST / NestJS",
      "JWT / Cookies HttpOnly",
      "PostgreSQL / Prisma",
      "TypeScript",
      "Integração mobile web full stack",
      "Segurança de API",
    ],
    detailLead: "Segurança e contratos de API em produção:",
  },
  "streamhub-plataforma-streaming": {
    title: "Plataforma full stack — backend de dados, API OMDB, performance (iGaming)",
    category: "Full Stack · Backend de integração · iGaming",
    tags: "API REST / Backend integration / Full Stack / Performance / iGaming / PostgreSQL patterns",
    objectives:
      "Sistema full stack com camada de integração robusta à API OMDB, cache e paginação no servidor/cliente, e entrega ponta a ponta em ambiente de alta demanda (iGaming). Case alinhado à atuação em Moovbet: ganhos de performance de sistema (+70%), confiabilidade de APIs e escala — não como projeto de UI, mas como produto full stack com backend de dados e SEO técnico como requisito de negócio.",
    techTitle: "Backend, integração e full stack",
    techs: [
      "Integração API REST (OMDB)",
      "Cache e paginação",
      "TypeScript / Node ecosystem",
      "Performance / escalabilidade",
      "iGaming / alta demanda",
      "Full Stack Engineer",
    ],
    detailLead: "Engenharia de sistema e integração:",
  },
  "cadastro-login-pagina-usuario-aplicacao-react": {
    title: "Autenticação — integração com BaaS e contratos de sessão (mobile web)",
    category: "Full Stack · Autenticação · Mobile Web",
    tags: "API REST / Autenticação / Mobile Full Stack / Backend-as-a-Service / Integração",
    objectives:
      "Fluxo de autenticação e gestão de sessão em produto mobile web, integrando serviço de identidade em nuvem (Firebase Auth) com regras de validação e roteamento protegido. Estudo de integração backend/serviços externos que precede a stack corporativa Java Spring Boot e APIs REST próprias.",
    techTitle: "Integração & autenticação",
    techs: [
      "Autenticação / Sessão",
      "API & serviços em nuvem",
      "Mobile Full Stack",
      "Validação de dados",
    ],
    detailLead: "Integração e regras de negócio de autenticação:",
  },
  "mini-erp-crm-php-mysql-rabbitmq-asaas": {
    title: "ERP/CRM — backend PHP, filas, microsserviços e gateway de pagamento",
    category: "Backend · APIs REST · Microsserviços · Full Stack",
    tags: "Backend / API REST / Microsserviços / RabbitMQ / MySQL / Docker / Integrações",
    objectives:
      "Mini ERP/CRM com backend em camadas (MVC), APIs de cobrança Asaas, mensageria RabbitMQ e worker assíncrono — modelo próximo a sistemas Java/Spring com filas, integrações e persistência relacional em produção.",
    techTitle: "Backend, filas e integrações",
    techs: [
      "PHP 8 / Backend em camadas",
      "API REST / Integrações Asaas",
      "RabbitMQ / Event-driven",
      "MySQL / PDO",
      "Docker / Microsserviços",
    ],
    detailLead: "Arquitetura backend e eventos:",
  },
  gitfind: {
    title: "Consumo de API REST pública — estudo de integração backend",
    category: "Backend · API REST · Integração",
    tags: "API REST / Backend integration / JavaScript / GitHub API",
    objectives:
      "Estudo de integração com API REST externa (GitHub), agregação de dados e exposição ao cliente — base de competências para backends Java/Spring Boot e BFFs.",
    techTitle: "Integração API REST",
    techs: ["API REST", "GitHub API", "Agregação de dados", "Backend patterns"],
    detailLead: "Integração e modelagem de resposta:",
  },
  "pokedex-com-pokeapi": {
    title: "API REST PokeAPI — cache, debounce e otimização de chamadas",
    category: "Backend patterns · API REST · Mobile Web",
    tags: "API REST / Cache / Performance / Integração / Mobile Full Stack",
    objectives:
      "Laboratório de consumo intensivo de API REST com cache em memória, debounce e paginação — técnicas aplicadas em backends e BFFs Java/Node para reduzir carga e latência.",
    techTitle: "API REST & performance de integração",
    techs: ["API REST", "Cache", "Debounce", "Paginação", "Otimização de rede"],
    detailLead: "Otimização de integração com API:",
  },
  "portfolio-mobile-first-javascript": {
    title: "Portfólio mobile full stack — API GitHub + dados estáticos",
    category: "Mobile Full Stack · API REST",
    tags: "Mobile Full Stack / API REST / GitHub API / Integração backend",
    objectives:
      "Produto mobile-first alimentado por API REST (GitHub) e JSON estático — precedente da evolução para engenharia full stack com foco Java, Spring Boot e microsserviços.",
    techTitle: "Integração & mobile full stack",
    techs: ["API REST", "GitHub API", "Mobile Full Stack", "Dados estáticos"],
    detailLead: "Integração de dados e entrega full stack:",
  },
  "crud-console-linguagem-c": {
    title: "CRUD em C — fundamentos de backend e estruturas de dados",
    category: "Formação · Backend · Lógica",
    tags: "C / CRUD / Estruturas de dados / Backend fundamentals",
    objectives:
      "CRUD procedural em C reforçando estruturas de dados, persistência em memória e fluxo de negócio — base da formação até Análise de Sistemas e especialização Java/Spring Boot.",
    techTitle: "Fundamentos de engenharia",
    techs: ["C", "CRUD", "Structs/Vetores", "Lógica de backend"],
    detailLead: "Fundamentos aplicados:",
  },
};

for (const project of projects) {
  const r = rewrites[project.slug];
  if (!r) continue;

  project.title = r.title;
  project.category = r.category;
  project.ProjectHeader.tags = r.tags;
  project.ProjectInfo.ObjectivesDetails = r.objectives;

  const tech = project.ProjectInfo.Technologies[0];
  if (tech) {
    tech.title = r.techTitle;
    tech.techs = r.techs;
  }

  const details = project.ProjectInfo.ProjectDetails;
  if (details[0]) {
    let d = details[0].details;
    d = d.replace(/^Alinhado ao perfil[^:]*:\s*/i, "");
    details[0].details = `${r.detailLead} ${d}`;
  }
}

fs.writeFileSync(path, JSON.stringify(projects, null, 2));
console.log("Projects rewritten:", Object.keys(rewrites).length);
