import type { Experience, Principle, Project, SkillGroup } from "@/types/portfolio";

export const copy = {
  pt: {
    a11y: {
      skipContent: "Pular para o conteúdo",
      goHome: "Ir para o início",
      backToTop: "Voltar ao topo",
      primaryNav: "Navegação principal",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      socialProfiles: "Perfis sociais",
    },
    nav: {
      home: "Início",
      about: "Sobre",
      experience: "Experiência",
      skills: "Skills",
      projects: "Projetos",
      principles: "Princípios",
      contact: "Contato",
    },
    hero: { explore: "Explorar" },
    about: {
      title: "Sobre mim",
      bodyPrimary:
        "Sou estudante de Ciência da Computação no Inteli e engenheira de software com experiência em desenvolvimento full stack, dados e inteligência artificial. Trabalho com Python, Java, JavaScript e SQL para transformar problemas reais em sistemas escaláveis.",
      bodySecondary:
        "Como vice-presidente da Inteli Júnior, também lidero pessoas, projetos e decisões de negócio. Quero construir produtos que conectem tecnologia, pessoas e impacto mensurável.",
      education: "Ciência da Computação · Inteli",
      educationLabel: "Formação",
      focus: "Full stack · Dados · IA",
      focusLabel: "Foco",
      location: "São Paulo · Brasil",
      locationLabel: "Base",
      portraitAlt: "Retrato de Rayssa Guedes França",
    },
    trajectory: {
      eyebrow: "Crônicas de uma trajetória",
      title: "Experiência",
      intro: "Uma linha contínua entre engenharia, dados, liderança e impacto mensurável.",
    },
    skills: {
      eyebrow: "Os fundamentos",
      title: "Arquitetura de competências",
      intro: "Tecnologias organizadas como uma construção: interface, estrutura e ferramentas de ofício.",
      manifesto: "Manifesto de engenharia",
    },
    projects: {
      eyebrow: "Trabalhos escolhidos",
      title: "Projetos",
      intro: "Sistemas construídos a partir de desafios reais, com tecnologia aplicada a decisões, operações e escala.",
      archive: "ARQUIVO",
      code: "Código",
      profile: "Perfil",
      cta: "Construir algo relevante",
      githubLabel: "Abrir no GitHub",
    },
    principle: {
      previous: "Princípio anterior",
      next: "Próximo princípio",
      resume: "Continuar",
      pause: "Pausar",
      quote: "“Toda boa estrutura começa por uma pergunta bem feita.”",
    },
    contact: {
      eyebrow: "Correspondência",
      title: "Vamos construir.",
      intro: "Um problema relevante, um produto ambicioso ou uma boa conversa sobre tecnologia.",
      name: "Nome",
      email: "E-mail",
      subject: "Assunto",
      message: "Mensagem",
      submit: "Enviar mensagem",
      defaultSubject: "Contato pelo portfólio",
      greeting: "Olá, Rayssa!",
      from: "De",
    },
    footer: {
      copyright: "© 2026 Rayssa Guedes França. Todos os direitos reservados.",
    },
  },
  en: {
    a11y: {
      skipContent: "Skip to content",
      goHome: "Go to home",
      backToTop: "Back to top",
      primaryNav: "Primary navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      socialProfiles: "Social profiles",
    },
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      principles: "Principles",
      contact: "Contact",
    },
    hero: { explore: "Explore" },
    about: {
      title: "About me",
      bodyPrimary:
        "I am a Computer Science student at Inteli and a software engineer with experience across full-stack development, data, and artificial intelligence. I use Python, Java, JavaScript, and SQL to turn real-world problems into scalable systems.",
      bodySecondary:
        "As Vice President of Inteli Júnior, I also lead people, projects, and business decisions. I want to build products that connect technology, people, and measurable impact.",
      education: "Computer Science · Inteli",
      educationLabel: "Education",
      focus: "Full stack · Data · AI",
      focusLabel: "Focus",
      location: "São Paulo · Brazil",
      locationLabel: "Based in",
      portraitAlt: "Portrait of Rayssa Guedes França",
    },
    trajectory: {
      eyebrow: "Chronicles of a journey",
      title: "Experience",
      intro: "A continuous line through engineering, data, leadership, and measurable impact.",
    },
    skills: {
      eyebrow: "Foundations",
      title: "Skills architecture",
      intro: "Technologies organized like a structure: interface, foundations, and tools of the trade.",
      manifesto: "Engineering manifesto",
    },
    projects: {
      eyebrow: "Selected work",
      title: "Projects",
      intro: "Systems built around real-world challenges, applying technology to decisions, operations, and scale.",
      archive: "ARCHIVE",
      code: "Code",
      profile: "Profile",
      cta: "Build something meaningful",
      githubLabel: "Open on GitHub",
    },
    principle: {
      previous: "Previous principle",
      next: "Next principle",
      resume: "Resume",
      pause: "Pause",
      quote: "“Every good structure begins with a well-framed question.”",
    },
    contact: {
      eyebrow: "Correspondence",
      title: "Let’s build.",
      intro: "A meaningful problem, an ambitious product, or a good conversation about technology.",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Send message",
      defaultSubject: "Portfolio inquiry",
      greeting: "Hi, Rayssa!",
      from: "From",
    },
    footer: {
      copyright: "© 2026 Rayssa Guedes França. All rights reserved.",
    },
  },
} as const;

export const experiencesEn: readonly Experience[] = [
  {
    title: "Student Job — Data & Process Improvement",
    company: "Inteli",
    period: "MAR 2026 — PRESENT",
    bullets: [
      "Developed automated spreadsheets in Python to centralize and analyze outsourced professionals’ work schedules, supporting time-sheet checks, flagging inconsistencies, and reducing manual work for Infrastructure and Facilities.",
    ],
    tags: ["Python"],
  },
  {
    title: "Vacation Internship — AI & Data Science",
    company: "Banco Safra",
    period: "JUL 2026 — AUG 2026",
    bullets: [
      "Improved two AI ecosystems, each comprising 16 agents integrated into an orchestration platform and used by the legal team for research, investigation, asset validation, and credit-recovery workflows.",
      "Analyzed usage and identified reliability bottlenecks and context loss, refining prompts, safety guardrails, and memory optimization.",
      "Refined conversation-history storage for scalability, reducing file size by 40% without losing essential information.",
    ],
    tags: ["AI", "LLMs", "Python", "Prompt Engineering"],
  },
  {
    title: "Vacation Internship — Supply Chain & Automation",
    company: "Compra Agora (Unilever)",
    period: "JAN 2026 — FEB 2026",
    bullets: [
      "Developed a logistics control tower to monitor damages and returns, integrated with a WhatsApp chatbot.",
      "Built automated workflows in n8n and business rules in JavaScript, using SQL and Databricks to manage states, SLAs, and the escalation of critical incidents.",
      "Eliminated manual triage and increased communication speed between drivers and the operations center by 60%.",
    ],
    tags: ["n8n", "JavaScript", "SQL", "Databricks"],
  },
  {
    title: "Vice President",
    company: "Inteli Júnior",
    period: "DEC 2025 — PRESENT",
    bullets: [
      "Served as vice president of a junior enterprise with 60+ members, coordinating Technology, Business, People, and client delivery.",
      "Led strategic planning, governance, metrics, and technology project management — reaching 201.6% of the annual target and BRL 128K in revenue in three months.",
      "Previously Software Engineer (Feb–Dec 2025), developing full-stack web platforms with React.js and JavaScript.",
    ],
    tags: ["Management", "React.js", "JavaScript"],
  },
  {
    title: "Sales Consultant / Sales Lead",
    company: "Claro Brasil",
    period: "OCT 2023 — DEC 2024",
    bullets: [
      "Led a six-person team across targets, performance analysis, and commercial strategies, contributing to a 20% increase in results during the first three months.",
    ],
  },
  {
    title: "Beginning of my journey in Computing",
    period: "APR 2023",
    bullets: [
      "Science and Technology at UFABC — later earning a full scholarship to study Computer Science at Inteli.",
    ],
    milestone: true,
  },
];

export const skillGroupsEn: readonly SkillGroup[] = [
  { title: "Frontend", subtitle: "The façade", items: ["React.js", "Next.js", "TypeScript", "JavaScript"] },
  {
    title: "Backend",
    subtitle: "The foundation",
    items: ["Python", "Java", "Node.js", "Spring Boot", "FastAPI", "REST APIs", "SQL", "PostgreSQL"],
  },
  { title: "Tools", subtitle: "The toolkit", items: ["AWS", "Docker", "Git/GitHub", "n8n", "Databricks"] },
];

export const projectsEn: readonly Project[] = [
  {
    title: "Telemetry and Monitoring Platform",
    client: "Grupo Globo (Globoplay)",
    period: "AUG–OCT 2025",
    description:
      "Monitoring and error-telemetry platform for Globoplay streaming, bringing together evidence and root-cause hypotheses to support front-end error diagnosis.",
    tags: ["Python", "React", "Docker", "AWS (EC2, Lambda)"],
    accent: "slate",
    githubUrl: "https://github.com/guedesrayssa",
  },
  {
    title: "Credit Limit Optimization Model",
    client: "Banco Pan",
    period: "MAR–JUN 2026",
    description:
      "Linear programming model to optimize pre-approved credit limits, balancing profitability, risk, and business constraints. Simplex-based solver, validated with OR-Tools across more than 2.8 million records.",
    tags: ["Python", "React.js", "PostgreSQL", "Docker", "OR-Tools"],
    accent: "bronze",
    githubUrl: "https://github.com/guedesrayssa/panorama-credit-optimization",
  },
  {
    title: "Wildfire Response Optimization System",
    client: "Suzano",
    period: "JAN–MAR 2026",
    description:
      "Resource-allocation system for wildfire response, modeled with graphs and minimum-cost flow algorithms (SSP and Network Simplex). Equivalence to the optimal solution validated with Google OR-Tools across 640 scenarios.",
    tags: ["Java", "Spring Boot", "Next.js", "PostgreSQL"],
    accent: "ember",
    githubUrl: "https://github.com/guedesrayssa/fire-off",
  },
  {
    title: "Predictive Model for Store Expansion",
    client: "Chilli Beans",
    period: "SEP–OCT 2025",
    description:
      "Predictive model for store expansion and product-mix planning, with a Python pipeline using K-Means, KNN, and Random Forest, evaluated through accuracy, precision, recall, F1 score, and cross-validation.",
    tags: ["Python", "Machine Learning", "Scikit-learn"],
    accent: "olive",
    githubUrl: "https://github.com/guedesrayssa/data-spyce",
  },
];

export const principlesEn: readonly Principle[] = [
  {
    title: "Purpose-driven engineering",
    body: "I build technology to solve tangible business problems. My projects grew out of real challenges from companies such as Globo, Banco Pan, and Suzano, where every technical decision had to deliver measurable impact.",
  },
  {
    title: "Clarity as a discipline",
    body: "I favor readable, structured, scalable code over clever solutions no one can maintain. Clarity is an engineering discipline: it reduces noise, improves collaboration, and supports product evolution.",
  },
  {
    title: "Evidence before opinion",
    body: "Before defending an idea, I look for evidence. Metrics, validation, and experimentation guide my decisions and help turn hypotheses into reliable solutions.",
  },
];

export const siteEn = {
  location: "São Paulo, SP",
  languages: ["Portuguese (native)", "Advanced English (C1)"],
} as const;
