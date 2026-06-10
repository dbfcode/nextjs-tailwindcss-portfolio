# Portfólio Diêgo Ferreira (Next.js + TypeScript)

Portfólio pessoal reconstruído do zero com **Next.js 15 (App Router)**, **React 19**, **TypeScript** e **Tailwind CSS 4**.

## Estrutura de dados (modelo tipado)

```
src/
├── types/portfolio.ts    # Interfaces: Project, Profile, SiteConfig, etc.
├── data/
│   ├── projects.json     # 9 projetos (mesmo conteúdo do portfólio anterior)
│   ├── about.json
│   ├── profile.json
│   ├── site.json
│   └── stats.json
└── lib/portfolio.ts      # Helpers: getProjectBySlug, getFeaturedProjects, ...
```

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Home com hero e projetos em destaque |
| `/about` | Sobre + estatísticas |
| `/projects` | Listagem com filtro por categoria |
| `/projects/[slug]` | Detalhe do projeto (SSG) |
| `/contact` | Contato |

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Stack

- Next.js 15 App Router
- TypeScript (strict)
- Tailwind CSS 4
- Framer Motion
- Lucide React
