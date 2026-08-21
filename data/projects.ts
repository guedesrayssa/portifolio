import type { Project } from "@/types/portfolio";

export const projects: readonly Project[] = [
  {
    title: "Plataforma de Telemetria e Monitoramento",
    client: "Grupo Globo (Globoplay)",
    period: "AGO–OUT 2025",
    description:
      "Plataforma de monitoramento e telemetria de erros no streaming do Globoplay, reunindo evidências e hipóteses sobre causas-raiz para apoiar o diagnóstico de erros no frontend.",
    tags: ["Python", "React", "Docker", "AWS (EC2, Lambda)"],
    accent: "slate",
    githubUrl: "https://github.com/guedesrayssa",
  },
  {
    title: "Modelo de Otimização de Limites de Crédito",
    client: "Banco Pan",
    period: "MAR–JUN 2026",
    description:
      "Modelo de programação linear para otimização de limites pré-aprovados de crédito, considerando rentabilidade, risco e restrições de negócio. Solver baseado em Simplex, validado com OR-Tools em mais de 2,8 milhões de registros.",
    tags: ["Python", "React.js", "PostgreSQL", "Docker", "OR-Tools"],
    accent: "bronze",
    githubUrl: "https://github.com/guedesrayssa/panorama-credit-optimization",
  },
  {
    title: "Sistema de Otimização de Combate a Incêndios",
    client: "Suzano",
    period: "JAN–MAR 2026",
    description:
      "Sistema de alocação de recursos no combate a incêndios florestais, modelado com grafos e algoritmos de fluxo de custo mínimo (SSP e Network Simplex). Equivalência à solução ótima validada com Google OR-Tools em 640 cenários.",
    tags: ["Java", "Spring Boot", "Next.js", "PostgreSQL"],
    accent: "ember",
    githubUrl: "https://github.com/guedesrayssa/fire-off",
  },
  {
    title: "Modelo Preditivo para Expansão de Lojas",
    client: "Chilli Beans",
    period: "SET–OUT 2025",
    description:
      "Modelo preditivo para expansão de lojas e definição de mix de produtos, com pipeline em Python usando K-Means, KNN e Random Forest, avaliado por acurácia, precisão, recall, F1-score e validação cruzada.",
    tags: ["Python", "Machine Learning", "Scikit-learn"],
    accent: "olive",
    githubUrl: "https://github.com/guedesrayssa/data-spyce",
  },
] as const;
