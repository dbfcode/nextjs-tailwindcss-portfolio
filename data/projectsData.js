import { v4 as uuidv4 } from "uuid";
// import {
//   FiFacebook,
//   FiInstagram,
//   FiLinkedin,
//   FiTwitter,
//   FiYoutube,
// } from "react-icons/fi";

export const projectsData = [
  {
    id: 1,
    title: "StreamHub - Plataforma de Streaming",
    url: "streamhub-plataforma-streaming",
    category: "Web Application",
    img: "/images/streamhub/streamhub-portfolio.png",
    repositoryLink: "",
    ProjectHeader: {
      title: "StreamHub - Plataforma de Streaming",
      publishDate: "Dez 2024",
      tags: "Next.js / React / TypeScript / Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "StreamHub - Catálogo",
        img: "/images/streamhub/desktop.png",
      },
      {
        id: uuidv4(),
        title: "StreamHub - Mobile",
        img: "/images/streamhub/mobile.png",
      },
      {
        id: uuidv4(),
        title: "StreamHub - Tradução vindo desde o servidor (melhor SEO)",
        img: "/images/streamhub/SSR_TRANSLATION.png",
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
            "Internacionalização: Suporte completo para 8 idiomas, traduções carregadas no servidor (SSR Translations), otimização SEO multilíngue para buscadores em todos os idiomas, e auto-detecção de locale baseado no navegador do usuário.",
        },
        {
          id: uuidv4(),
          details:
            "Arquitetura: Implementação da nova arquitetura App Router do Next.js 15, type safety completo com TypeScript em toda aplicação, data fetching otimizado com React Query e cache inteligente, integração robusta com API OMDB incluindo tratamento completo de erros. O projeto segue boas práticas como Clean Code, princípios SOLID, componentização estratégica, hooks customizados reutilizáveis, error boundaries e performance monitoring ready.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Pokédex com PokeAPI",
    url: "pokedex-com-pokeapi",
    category: "Web Application",
    img: "/images/pokedex.png",
    repositoryLink: "",
    ProjectHeader: {
      title: "Pokédex com PokeAPI",
      publishDate: "Jan 2024",
      tags: "HTML5 / CSS3 / JavaScript / API REST",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Pokédex - Lista de Pokémon",
        img: "/images/web-project-1.jpg",
      },
      {
        id: uuidv4(),
        title: "Pokédex - Busca Flexível",
        img: "/images/ui-project-2.jpg",
      },
      {
        id: uuidv4(),
        title: "Pokédex - Mobile View",
        img: "/images/mobile-project-1.jpg",
      },
    ],
    ProjectInfo: {
      ClientHeading: "Sobre o Projeto",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Tipo",
          details: "Pokédex Interativa",
        },
        {
          id: uuidv4(),
          title: "Stack Principal",
          details: "HTML5, CSS3, JavaScript ES6+",
        },
        {
          id: uuidv4(),
          title: "Autor",
          details: "Diêgo Ferreira",
        },
        {
          id: uuidv4(),
          title: "Deploy",
          details: "GitHub Pages",
        },
      ],
      ObjectivesHeading: "Objetivo",
      ObjectivesDetails:
        "Uma Pokédex interativa que consome dados da PokeAPI, exibindo informações de diversos Pokémon em tempo real com sistema de busca flexível e otimizado. Projeto desenvolvido como prática de front-end vanilla focado em consumo de API REST pública, manipulação assíncrona de dados e otimizações de performance.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML5",
            "CSS3",
            "JavaScript ES6+",
            "Bootstrap 5",
            "PokeAPI",
            "Fetch API",
            "Async/Await",
            "Debounce Pattern",
            "Cache Strategy",
            "Normalize.css",
          ],
        },
      ],
      ProjectDetailsHeading: "Funcionalidades e Otimizações",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Busca Flexível em Tempo Real: Sistema de pesquisa com correspondência parcial do nome (case-insensitive), buscando substrings para encontrar Pokémon mesmo com digitação parcial. Exemplo: digitando 'pika' encontra 'pikachu', digitando 'char' encontra 'charmander', 'charmeleon' e 'charizard'. Implementado com limite de 20 resultados para otimização.",
        },
        {
          id: uuidv4(),
          details:
            "Cache Inteligente: Sistema de cache em memória para melhorar performance, armazenando a lista completa de Pokémon após a primeira busca. Reduz requisições desnecessárias à API e melhora significativamente a velocidade das buscas subsequentes. Cache persiste durante toda a sessão do usuário.",
        },
        {
          id: uuidv4(),
          details:
            "Debounce Implementation: Sistema de debounce com delay de 300ms para otimizar requisições. Aguarda o usuário parar de digitar por 300ms antes de processar a busca, cancela requisições pendentes se o usuário continuar digitando e restaura a lista imediatamente quando o campo é limpo.",
        },
        {
          id: uuidv4(),
          details:
            "Paginação e Carregamento Progressivo: Listagem paginada de Pokémon com carregamento inicial de 5 itens e botão 'Carregar +' para carregamento incremental sob demanda. Interface responsiva adaptável com Bootstrap e CSS customizado. Lazy loading de detalhes - busca informações completas apenas dos Pokémon filtrados, reduzindo tráfego de rede.",
        },
      ],
      SocialSharingHeading: "Deploy",
    },
  },
  {
    id: 3,
    title: "Cadastro, Login e Página do Usuário - Aplicação React",
    url: "cadastro-login-pagina-usuario-aplicacao-react",
    category: "Web Application",
    img: "/images/react-auth-ui-firebase/react-auth-ui-firebase.png",
    repositoryLink:
      "https://github.com/dig-ie/react-registration-login-userHome-home",
    ProjectHeader: {
      title: "Cadastro, Login e Página do Usuário - Aplicação React",
      publishDate: "2024",
      tags: "React / Firebase Auth / React Router / Styled Components",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Página de Cadastro",
        img: "/images/web-project-1.jpg",
      },
      {
        id: uuidv4(),
        title: "Página de Login",
        img: "/images/ui-project-1.jpg",
      },
      {
        id: uuidv4(),
        title: "Página do Usuário",
        img: "/images/mobile-project-1.jpg",
      },
    ],
    ProjectInfo: {
      ClientHeading: "Sobre o Projeto",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Tipo",
          details: "Sistema de Autenticação",
        },
        {
          id: uuidv4(),
          title: "Stack Principal",
          details: "React, Firebase Auth, React Router Dom",
        },
        {
          id: uuidv4(),
          title: "Autor",
          details: "Diêgo Ferreira",
        },
        {
          id: uuidv4(),
          title: "Deploy",
          details: "Vercel",
        },
      ],
      ObjectivesHeading: "Objetivo",
      ObjectivesDetails:
        "Fluxo completo de autenticação de usuários utilizando React, Firebase Auth, React Router Dom e Styled Components, com base em um protótipo visual do Figma da DIO. A aplicação implementa formulários, validações e navegação utilizando react-hook-form para controle de formulários, yup para validação dos dados, react-router-dom para rotas, firebase para autenticação na nuvem e styled-components para estilização baseada no protótipo Figma.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React",
            "Firebase Auth",
            "React Router Dom",
            "Styled Components",
            "React Hook Form",
            "Yup",
            "Figma",
            "Vercel",
          ],
        },
      ],
      ProjectDetailsHeading: "Funcionalidades e Aprendizados",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Formulários com React Hook Form: Implementação de controle eficiente do estado dos inputs, melhorando a performance e facilitando a gestão de formulários complexos com múltiplos campos de validação.",
        },
        {
          id: uuidv4(),
          details:
            "Validação com Yup: Sistema de validação baseado em esquemas de dados, garantindo que os dados de cadastro e login estejam corretos antes de serem enviados ao Firebase, com mensagens de erro claras e intuitivas para o usuário.",
        },
        {
          id: uuidv4(),
          details:
            "Autenticação com Firebase: Integração completa com Firebase Authentication para cadastro e login de usuários, armazenamento seguro de credenciais na nuvem e gerenciamento de sessões de autenticação.",
        },
        {
          id: uuidv4(),
          details:
            "Navegação com React Router Dom: Implementação de rotas declarativas entre páginas (Home, Cadastro, Login e Página do Usuário), protegendo rotas autenticadas e redirecionando usuários conforme seu estado de autenticação.",
        },
        {
          id: uuidv4(),
          details:
            "Reutilização de Componentes: Criação e reaproveitamento de componentes com styled-components, seguindo o design do protótipo Figma da DIO e mantendo consistência visual em toda a aplicação.",
        },
      ],
      SocialSharingHeading: "Deploy",
    },
  },
  {
    id: 4,
    title: "GitFind",
    url: "gitfind",
    category: "Web Application",
    img: "/images/gitfind/gitfind_after_search.png",
    repositoryLink: "https://github.com/dig-ie/gitfind_after_search.png",
    ProjectHeader: {
      title: "GitFind",
      publishDate: "2024",
      tags: "React 17 / CRA / JavaScript / CSS / GitHub API",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "GitFind - Tela Inicial",
        img: "/images/gitfind/home_before_search.png",
      },
      {
        id: uuidv4(),
        title: "GitFind - Busca de Usuário",
        img: "/images/gitfind/home_after_search.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "Sobre o Projeto",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Tipo",
          details: "Busca de Usuários GitHub",
        },
        {
          id: uuidv4(),
          title: "Stack Principal",
          details: "React 17, Create React App, JavaScript",
        },
        {
          id: uuidv4(),
          title: "Autor",
          details: "Diêgo Ferreira",
        },
        {
          id: uuidv4(),
          title: "Deploy",
          details: "GitHub Pages",
        },
      ],
      ObjectivesHeading: "Objetivo",
      ObjectivesDetails:
        "Projeto desenvolvido intencionalmente com padrões antigos do React (Era CRA – 2016 ~ 2021), explorando práticas e estruturas hoje consideradas datadas, mas que marcaram a evolução do ecossistema. O objetivo foi entender como eram organizadas aplicações React nas primeiras gerações, especialmente durante a era do Create React App (CRA), comparando com os patterns modernos (Next.js, Vite, Hooks, CSS Modules, Tailwind etc.).",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React 17",
            "Create React App (CRA)",
            "JavaScript (.js)",
            "CSS tradicional (.css)",
            "GitHub API",
            "Fetch API",
          ],
        },
      ],
      ProjectDetailsHeading: "Características e Objetivo Educacional",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Padrões Antigos Intencionais: O código adota padrões anteriores à popularização de Hooks, TypeScript e CSS-in-JS, como estrutura baseada em arquivos `.js` e `.css` separados, componentes funcionais simples (sem Hooks modernos), estilos globais e importações diretas (`import './App.css'`), nenhum uso de TypeScript (`.tsx`) ou Tailwind/styled-components, e build configurado via Create React App (CRA).",
        },
        {
          id: uuidv4(),
          details:
            "Consumo da API do GitHub: Aplicação que consome a API pública do GitHub, listando o usuário e seus repositórios com base no username informado. Implementa busca de perfil de usuário e listagem completa de repositórios públicos associados ao perfil pesquisado.",
        },
        {
          id: uuidv4(),
          details:
            "Objetivo Educacional e Histórico: Este repositório funciona como uma pequena cápsula do tempo dentro do ecossistema React — útil para quem quer compreender como surgiram conceitos que hoje damos como padrão: modularização de componentes, importação de estilos locais, estrutura de build do CRA e evolução até o uso de Hooks, TS e Vite/Next.",
        },
        {
          id: uuidv4(),
          details:
            "Projeto de Estudo Técnico: Criado por curiosidade técnica e estudo histórico, com o objetivo de entender o fluxo e as limitações dessas abordagens antigas. O projeto demonstra como eram construídas aplicações React antes da era moderna, servindo como referência comparativa para entender a evolução do ecossistema.",
        },
      ],
      SocialSharingHeading: "Deploy",
    },
  },
  {
    id: 5,
    title: "Portfólio Mobile First JavaScript, HTML e CSS",
    url: "portfolio-mobile-first-javascript",
    category: "Web Application",
    img: "/images/trilha-js-portfolio/desktop.png",
    repositoryLink: "https://github.com/dig-ie/trilha-js-portfolio",
    ProjectHeader: {
      title: "Portfólio Mobile First JavaScript",
      publishDate: "2024",
      tags: "HTML5 / CSS3 / JavaScript / Mobile First",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Portfólio - Tela Mobile",
        img: "/images/trilha-js-portfolio/mobile.png",
      },
      {
        id: uuidv4(),
        title: "Portfólio - Tela Mobile",
        img: "/images/trilha-js-portfolio/mobile-open.png",
      },
      {
        id: uuidv4(),
        title: "Portfólio - Tela Desktop",
        img: "/images/trilha-js-portfolio/desktop.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "Sobre o Projeto",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Tipo",
          details: "Portfólio Pessoal Mobile First",
        },
        {
          id: uuidv4(),
          title: "Stack Principal",
          details: "HTML5, CSS3, JavaScript ES6+",
        },
        {
          id: uuidv4(),
          title: "Autor",
          details: "Diêgo Ferreira",
        },
        {
          id: uuidv4(),
          title: "Deploy",
          details: "GitHub Pages",
        },
      ],
      ObjectivesHeading: "Objetivo",
      ObjectivesDetails:
        "Portfólio desenvolvido com abordagem Mobile First utilizando HTML, CSS e JavaScript puro. O conteúdo é parcialmente carregado a partir da API pública do GitHub e parcialmente de um arquivo local profile.json presente no repositório. O projeto foi criado como exercício de fundamentos de front-end, responsividade, manipulação de DOM e consumo de API REST.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML5",
            "CSS3",
            "JavaScript ES6+",
            "GitHub API",
            "Fetch API",
            "Responsividade Mobile First",
            "DOM Manipulation",
            "GitHub Pages",
          ],
        },
      ],
      ProjectDetailsHeading: "Funcionalidades e Detalhes Técnicos",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Layout Mobile First: Todo o design e estrutura da aplicação foi pensado para priorizar telas pequenas, garantindo fluidez e responsividade em dispositivos móveis antes da adaptação para telas maiores.",
        },
        {
          id: uuidv4(),
          details:
            "Consumo da API do GitHub: Informações como repositórios e detalhes públicos são carregados dinamicamente via Fetch API, exibindo dados reais do perfil do GitHub.",
        },
        {
          id: uuidv4(),
          details:
            "Integração com profile.json: Parte das informações pessoais e profissionais é carregada de um arquivo JSON local, demonstrando manipulação e integração de dados estáticos.",
        },
        {
          id: uuidv4(),
          details:
            "Estrutura Simples e Performática: Sem dependências, sem frameworks, totalmente construído com JavaScript puro, CSS modularizado e HTML semântico.",
        },
      ],
      SocialSharingHeading: "Demonstração",
      SocialSharing: [
        {
          id: uuidv4(),
          name: "GitHub Pages",
          url: "https://dig-ie.github.io/trilha-js-portfolio/",
        },
      ],
    },
  },
];
