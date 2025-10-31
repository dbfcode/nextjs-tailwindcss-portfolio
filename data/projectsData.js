import { v4 as uuidv4 } from "uuid";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export const projectsData = [
  {
    id: 1,
    title: "StreamHub - Plataforma de Streaming",
    url: "streamhub-plataforma-streaming",
    category: "Web Application",
    img: "/images/web-project-2.jpg",
    ProjectHeader: {
      title: "StreamHub - Plataforma de Streaming",
      publishDate: "Dez 2024",
      tags: "Next.js / React / TypeScript / Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "StreamHub - Home Page",
        img: "/images/web-project-2.jpg",
      },
      {
        id: uuidv4(),
        title: "StreamHub - Catálogo",
        img: "/images/ui-project-1.jpg",
      },
      {
        id: uuidv4(),
        title: "StreamHub - Mobile View",
        img: "/images/mobile-project-2.jpg",
      },
    ],
    ProjectInfo: {
      ClientHeading: "Sobre o Projeto",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Tipo",
          details: "Plataforma de Streaming",
        },
        {
          id: uuidv4(),
          title: "Stack Principal",
          details: "Next.js 15, React 19, TypeScript",
        },
        {
          id: uuidv4(),
          title: "Autor",
          details: "Diêgo Ferreira",
        },
        {
          id: uuidv4(),
          title: "Licença",
          details: "MIT License",
        },
      ],
      ObjectivesHeading: "Objetivo",
      ObjectivesDetails:
        "Aplicação moderna de streaming de filmes e séries desenvolvida com Next.js 15, React 19 e TypeScript, demonstrando proficiência em arquitetura escalável, performance otimizada e Design System consistente. O projeto foi desenvolvido como demonstração técnica para demonstrar habilidades em desenvolvimento front-end moderno.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Next.js 15.3",
            "React 19",
            "TypeScript 5.2",
            "Tailwind CSS 4",
            "Framer Motion",
            "React Query v4",
            "Redux/Zustand",
            "Axios",
            "i18next",
            "next-i18next",
            "ESLint",
            "Prettier",
            "Docker",
          ],
        },
      ],
      ProjectDetailsHeading: "Desafios e Soluções",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Performance & Otimização: Implementação de lazy loading com infinite scroll usando React Query, paginação inteligente com caching estratégico da API OMDB, geração de páginas estáticas (SSR/SSG) para 23 idiomas, otimização de imagens com Next/Image e code splitting com dynamic imports e chunking automático.",
        },
        {
          id: uuidv4(),
          details:
            "Design System: Desenvolvimento de mais de 40 componentes reutilizáveis com arquitetura modular e escalável, tema consistente utilizando Tailwind CSS 4 e styled-components, design mobile-first responsivo para todos os dispositivos, implementação de acessibilidade com contraste adequado e semântica HTML, além de animações suaves com Framer Motion.",
        },
        {
          id: uuidv4(),
          details:
            "Internacionalização: Suporte completo para 23 idiomas, traduções carregadas no servidor (SSR Translations), otimização SEO multilíngue para buscadores em todos os idiomas, e auto-detecção de locale baseado no navegador do usuário.",
        },
        {
          id: uuidv4(),
          details:
            "Arquitetura: Implementação da nova arquitetura App Router do Next.js 15, type safety completo com TypeScript em toda aplicação, data fetching otimizado com React Query e cache inteligente, integração robusta com API OMDB incluindo tratamento completo de erros. O projeto segue boas práticas como Clean Code, princípios SOLID, componentização estratégica, hooks customizados reutilizáveis, error boundaries e performance monitoring ready.",
        },
      ],
    },
  },
];
