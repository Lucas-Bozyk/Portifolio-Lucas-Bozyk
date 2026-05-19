export const LANGUAGES = [
  { code: "br", label: "Português Brasileiro", country: "Brasil", flagSrc: "/brasil.png" },
  { code: "pt", label: "Português Europeu", country: "Portugal", flagSrc: "/portugal.png" },
  { code: "es", label: "Español", country: "España", flagSrc: "/espanha.png" },
  { code: "en", label: "English", country: "United States", flagSrc: "/estados-unidos.png" },
];

export const PROFILE = {
  name: "Lucas Bozyk Capoani",
  shortName: "LucasDev",
  email: "lucasbozyk81@gmail.com",
  github: "https://github.com/Lucas-Bozyk",
  linkedin: "https://www.linkedin.com/in/lucas-bozyk/",
  stack: ["C#", "SQL", "Python", "TypeScript"],
};

export const NAV_LINKS = [
  { key: "about", id: "sobre" },
  { key: "stack", id: "tech" },
  { key: "projects", id: "projetos" },
  { key: "contact", id: "contato" },
];

export const SKILLS = [
  { name: "C#", iconKey: "csharp", color: "#a78bfa" },
  { name: "SQL", iconKey: "sql", color: "#38bdf8" },
  { name: "Python", iconKey: "python", color: "#facc15" },
  { name: "TypeScript", iconKey: "typescript", color: "#3178c6" },
];

export const TECHS = [
  { cls: "dotnet", iconKey: "dotnet", name: ".NET", color: "#a78bfa" },
  { cls: "mysql", iconKey: "mysql", name: "MySQL", color: "#38bdf8" },
  { cls: "postgres", iconKey: "postgres", name: "PostgreSQL", color: "#6ee7b7" },
  { cls: "react", iconKey: "react", name: "React", color: "#61dafb" },
  { cls: "node", iconKey: "node", name: "Node.js", color: "#84cc16" },
  { cls: "django", iconKey: "django", name: "Django", color: "#34d399" },
  { cls: "docker", iconKey: "docker", name: "Docker", color: "#2496ed" },
  { cls: "nginx", iconKey: "nginx", name: "Nginx", color: "#22c55e" },
  { cls: "kafka", iconKey: "kafka", name: "Kafka", color: "#e2e8f0" },
  { cls: "linux", iconKey: "linux", name: "Linux", color: "#facc15" },
];

export const PROJECTS = [
  {
    key: "management",
    num: "01",
    tags: [
      { label: "C#", cls: "tag-purple" },
      { label: ".NET", cls: "tag-purple" },
      { label: "SQL Server", cls: "tag-blue" },
      { label: "WPF", cls: "tag-green" },
    ],
    link: "",
  },
  {
    key: "api",
    num: "02",
    tags: [
      { label: "ASP.NET Core", cls: "tag-purple" },
      { label: "REST", cls: "tag-green" },
      { label: "SQL Server", cls: "tag-blue" },
      { label: "JWT", cls: "tag-orange" },
    ],
    link: "",
  },
  {
    key: "django",
    num: "03",
    tags: [
      { label: "Python", cls: "tag-yellow" },
      { label: "Django", cls: "tag-emerald" },
      { label: "PostgreSQL", cls: "tag-blue" },
      { label: "REST", cls: "tag-green" },
    ],
    link: "",
  },
  {
    key: "dashboard",
    num: "04",
    tags: [
      { label: "HTML5", cls: "tag-orange" },
      { label: "CSS3", cls: "tag-green" },
      { label: "Responsivo", cls: "tag-blue" },
      { label: "Grid Layout", cls: "tag-purple" },
    ],
    link: "",
  },
];

export const CONTACT_LINKS = [
  {
    href: `mailto:${PROFILE.email}`,
    iconKey: "mail",
    iconBg: "rgba(110,231,183,0.1)",
    iconColor: "#6ee7b7",
    label: "Email",
    value: PROFILE.email,
  },
  {
    href: PROFILE.github,
    iconKey: "github",
    iconBg: "rgba(100,116,139,0.1)",
    iconColor: "#94a3b8",
    label: "GitHub",
    value: "GitHub Lucas Bozyk",
  },
  {
    href: PROFILE.linkedin,
    iconKey: "linkedin",
    iconBg: "rgba(56,189,248,0.1)",
    iconColor: "#38bdf8",
    label: "LinkedIn",
    value: "LinkedIn Lucas Bozyk",
  },
];

const br = {
  skip: "Pular para o conteúdo",
  nav: {
    about: "Sobre",
    stack: "Stack",
    projects: "Projetos",
    contact: "Contato",
    home: "Voltar ao início",
    languageLabel: "Selecionar idioma",
  },
  hero: {
    role: "Desenvolvedor Full Stack",
    availability: "Disponível para oportunidades",
    summary:
      "Construo backends robustos, microserviços escaláveis e agentes de IA com governança, unindo engenharia de software e DevOps para criar soluções confiáveis, eficientes e sustentáveis.",
    projectsButton: "Ver projetos",
  },
  about: {
    eyebrow: "Sobre mim",
    title: "O desenvolvedor por trás do código",
    paragraphs: [
      "Sou um Desenvolvedor Full Stack em formação pela Universidade de Marília, com foco em construir aplicações robustas e orientadas a dados. Meu ponto forte é conectar a lógica complexa do backend com interfaces de usuário intuitivas.",
      "No backend, desenvolvo sistemas em C#, ASP.NET Core, Node.js e Python com Django. Aplico o mesmo rigor ao design de banco de dados, escrevendo consultas SQL eficientes, otimizando schemas e garantindo integridade.",
      "No frontend, construo interfaces dinâmicas com React e layouts responsivos com HTML semântico e CSS moderno.",
    ],
    skillsLabel: "Competências técnicas",
  },
  tech: {
    eyebrow: "Stack",
    title: "Tecnologias principais",
    descriptions: {
      dotnet: "Plataforma para desenvolvimento de APIs, serviços e aplicações corporativas com C# e ASP.NET Core.",
      mysql: "Banco de dados relacional para modelagem, consultas SQL, índices e persistência transacional.",
      postgres: "Banco relacional robusto para aplicações orientadas a dados, com recursos avançados de consulta e integridade.",
      react: "Construção de interfaces componentizadas, reativas e manuteníveis para aplicações web modernas.",
      node: "Execução JavaScript no servidor para APIs, integrações, automações e serviços full-stack.",
      django: "Framework Python para aplicações web seguras, produtivas e organizadas com ORM, admin e arquitetura MVT.",
      docker: "Containerização de aplicações e serviços para ambientes reproduzíveis de desenvolvimento, teste e deploy.",
      nginx: "Servidor web e proxy reverso para publicação, roteamento, balanceamento e entrega eficiente de aplicações.",
      kafka: "Plataforma de mensageria e streaming de eventos para comunicação assíncrona entre serviços.",
      linux: "Administração de ambientes, terminal, permissões, processos e base operacional para servidores e containers.",
    },
  },
  projects: {
    eyebrow: "Trabalhos",
    title: "Projetos selecionados",
    cardLabel: "PROJETO",
    techLabel: "Tecnologias do projeto",
    repository: "Ver repositório",
    repositorySoon: "Repositório em breve",
    items: {
      management: {
        title: "Sistema de Gestão",
        desc: "Sistema empresarial com operações CRUD, autenticação, relatórios e separação em camadas para facilitar manutenção e evolução.",
      },
      api: {
        title: "API REST com ASP.NET",
        desc: "API REST com ASP.NET Core, autenticação JWT, Entity Framework Core e documentação Swagger.",
      },
      django: {
        title: "Plataforma Web com Django",
        desc: "Aplicação full-stack com Django, painel administrativo, autenticação, PostgreSQL e API REST para consumo frontend.",
      },
      dashboard: {
        title: "Dashboard Responsivo",
        desc: "Painel administrativo responsivo com tabelas, indicadores KPI, navegação lateral e layout mobile-first sem frameworks.",
      },
    },
  },
  contact: {
    eyebrow: "Contato",
    title: "Open to work",
    intro:
      "Aberto a vagas em tempo integral, projetos freelance e colaborações técnicas. Entre em contato por qualquer canal abaixo.",
  },
  footer: {
    prefix: "Desenhado & desenvolvido por",
  },
};

const pt = {
  ...br,
  skip: "Saltar para o conteúdo",
  nav: {
    ...br.nav,
    contact: "Contacto",
  },
  hero: {
    ...br.hero,
    summary:
      "Desenvolvo backends robustos, microserviços escaláveis e agentes de IA com governação, unindo engenharia de software e DevOps para criar soluções fiáveis, eficientes e sustentáveis.",
  },
  about: {
    ...br.about,
    paragraphs: [
      "Sou um Desenvolvedor Full Stack em formação pela Universidade de Marília, com foco em criar aplicações robustas e orientadas a dados. O meu ponto forte é ligar a lógica complexa do backend a interfaces de utilizador intuitivas.",
      "No backend, desenvolvo sistemas em C#, ASP.NET Core, Node.js e Python com Django. Aplico o mesmo rigor ao desenho de bases de dados, escrevendo consultas SQL eficientes, otimizando schemas e garantindo integridade.",
      "No frontend, construo interfaces dinâmicas com React e layouts responsivos com HTML semântico e CSS moderno.",
    ],
  },
  tech: {
    ...br.tech,
    descriptions: {
      ...br.tech.descriptions,
      postgres: "Base de dados relacional robusta para aplicações orientadas a dados, com recursos avançados de consulta e integridade.",
      node: "Execução de JavaScript no servidor para APIs, integrações, automações e serviços full-stack.",
    },
  },
  projects: {
    ...br.projects,
    items: {
      ...br.projects.items,
      dashboard: {
        title: "Dashboard Adaptativo",
        desc: "Painel administrativo adaptativo com tabelas, indicadores KPI, navegação lateral e layout mobile-first sem frameworks.",
      },
    },
  },
  contact: {
    eyebrow: "Contacto",
    title: "Open to work",
    intro:
      "Disponível para oportunidades a tempo inteiro, projetos freelance e colaborações técnicas. Entra em contacto por qualquer canal abaixo.",
  },
};

const es = {
  skip: "Saltar al contenido",
  nav: {
    about: "Sobre mí",
    stack: "Stack",
    projects: "Proyectos",
    contact: "Contacto",
    home: "Volver al inicio",
    languageLabel: "Seleccionar idioma",
  },
  hero: {
    role: "Desarrollador Full Stack",
    availability: "Disponible para oportunidades",
    summary:
      "Construyo backends robustos, microservicios escalables y agentes de IA con gobernanza, combinando ingeniería de software y DevOps para crear soluciones confiables, eficientes y sostenibles.",
    projectsButton: "Ver proyectos",
  },
  about: {
    eyebrow: "Sobre mí",
    title: "El desarrollador detrás del código",
    paragraphs: [
      "Soy un Desarrollador Full Stack en formación en la Universidad de Marília, enfocado en construir aplicaciones robustas y orientadas a datos. Mi fortaleza es conectar la lógica compleja del backend con interfaces de usuario intuitivas.",
      "En backend, desarrollo sistemas con C#, ASP.NET Core, Node.js y Python con Django. Aplico el mismo rigor al diseño de bases de datos, escribiendo consultas SQL eficientes, optimizando esquemas y garantizando integridad.",
      "En frontend, construyo interfaces dinámicas con React y layouts responsivos con HTML semántico y CSS moderno.",
    ],
    skillsLabel: "Competencias técnicas",
  },
  tech: {
    eyebrow: "Stack",
    title: "Tecnologías principales",
    descriptions: {
      dotnet: "Plataforma para desarrollar APIs, servicios y aplicaciones empresariales con C# y ASP.NET Core.",
      mysql: "Base de datos relacional para modelado, consultas SQL, índices y persistencia transaccional.",
      postgres: "Base relacional robusta para aplicaciones orientadas a datos, con consultas avanzadas e integridad.",
      react: "Construcción de interfaces componentizadas, reactivas y mantenibles para aplicaciones web modernas.",
      node: "Ejecución de JavaScript en el servidor para APIs, integraciones, automatizaciones y servicios full-stack.",
      django: "Framework Python para aplicaciones web seguras, productivas y organizadas con ORM, admin y arquitectura MVT.",
      docker: "Contenerización de aplicaciones y servicios para entornos reproducibles de desarrollo, prueba y despliegue.",
      nginx: "Servidor web y proxy inverso para publicación, ruteo, balanceo y entrega eficiente de aplicaciones.",
      kafka: "Plataforma de mensajería y streaming de eventos para comunicación asíncrona entre servicios.",
      linux: "Administración de entornos, terminal, permisos, procesos y base operativa para servidores y containers.",
    },
  },
  projects: {
    eyebrow: "Trabajos",
    title: "Proyectos seleccionados",
    cardLabel: "PROYECTO",
    techLabel: "Tecnologías del proyecto",
    repository: "Ver repositorio",
    repositorySoon: "Repositorio pronto",
    items: {
      management: {
        title: "Sistema de Gestión",
        desc: "Sistema empresarial con operaciones CRUD, autenticación, reportes y separación en capas para facilitar mantenimiento y evolución.",
      },
      api: {
        title: "API REST con ASP.NET",
        desc: "API REST con ASP.NET Core, autenticación JWT, Entity Framework Core y documentación Swagger.",
      },
      django: {
        title: "Plataforma Web con Django",
        desc: "Aplicación full-stack con Django, panel administrativo, autenticación, PostgreSQL y API REST para consumo frontend.",
      },
      dashboard: {
        title: "Dashboard Responsivo",
        desc: "Panel administrativo responsivo con tablas, indicadores KPI, navegación lateral y layout mobile-first sin frameworks.",
      },
    },
  },
  contact: {
    eyebrow: "Contacto",
    title: "Open to work",
    intro:
      "Disponible para puestos de tiempo completo, proyectos freelance y colaboraciones técnicas. Contáctame por cualquiera de los canales abajo.",
  },
  footer: {
    prefix: "Diseñado y desarrollado por",
  },
};

const en = {
  skip: "Skip to content",
  nav: {
    about: "About",
    stack: "Stack",
    projects: "Projects",
    contact: "Contact",
    home: "Back to top",
    languageLabel: "Select language",
  },
  hero: {
    role: "Full Stack Developer",
    availability: "Available for opportunities",
    summary:
      "I build robust backends, scalable microservices, and governed AI agents, combining software engineering and DevOps to create reliable, efficient, and sustainable solutions.",
    projectsButton: "View projects",
  },
  about: {
    eyebrow: "About me",
    title: "The developer behind the code",
    paragraphs: [
      "I am a Full Stack Developer studying at the University of Marília, focused on building robust, data-driven applications. My strength is connecting complex backend logic with intuitive user interfaces.",
      "On the backend, I build systems with C#, ASP.NET Core, Node.js, and Python with Django. I apply the same rigor to database design, writing efficient SQL queries, optimizing schemas, and preserving data integrity.",
      "On the frontend, I build dynamic interfaces with React and responsive layouts with semantic HTML and modern CSS.",
    ],
    skillsLabel: "Technical skills",
  },
  tech: {
    eyebrow: "Stack",
    title: "Core technologies",
    descriptions: {
      dotnet: "Platform for building APIs, services, and enterprise applications with C# and ASP.NET Core.",
      mysql: "Relational database for modeling, SQL queries, indexes, and transactional persistence.",
      postgres: "Robust relational database for data-driven applications, with advanced querying and integrity features.",
      react: "Component-based, reactive, and maintainable interfaces for modern web applications.",
      node: "Server-side JavaScript runtime for APIs, integrations, automations, and full-stack services.",
      django: "Python framework for secure, productive, and organized web applications with ORM, admin, and MVT architecture.",
      docker: "Containerization for applications and services across reproducible development, testing, and deployment environments.",
      nginx: "Web server and reverse proxy for publishing, routing, load balancing, and efficient application delivery.",
      kafka: "Messaging and event-streaming platform for asynchronous communication between services.",
      linux: "Environment administration, terminal usage, permissions, processes, and operational foundation for servers and containers.",
    },
  },
  projects: {
    eyebrow: "Work",
    title: "Selected projects",
    cardLabel: "PROJECT",
    techLabel: "Project technologies",
    repository: "View repository",
    repositorySoon: "Repository coming soon",
    items: {
      management: {
        title: "Management System",
        desc: "Business system with CRUD operations, authentication, reports, and layered separation to improve maintenance and evolution.",
      },
      api: {
        title: "REST API with ASP.NET",
        desc: "REST API with ASP.NET Core, JWT authentication, Entity Framework Core, and Swagger documentation.",
      },
      django: {
        title: "Web Platform with Django",
        desc: "Full-stack application with Django, admin panel, authentication, PostgreSQL, and REST API for frontend consumption.",
      },
      dashboard: {
        title: "Responsive Dashboard",
        desc: "Responsive admin panel with data tables, KPI cards, sidebar navigation, and mobile-first layout without frameworks.",
      },
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Open to work",
    intro:
      "Open to full-time roles, freelance projects, and technical collaborations. Reach out through any channel below.",
  },
  footer: {
    prefix: "Designed & developed by",
  },
};

export const CONTENT = {
  br,
  pt,
  es,
  en,
};
