import type { Experience } from "@/types/portfolio";

export const experiences: readonly Experience[] = [
  {
    title: "Student Job — Dados e Melhoria de Processos",
    company: "Inteli",
    period: "MAR 2026 — PRESENTE",
    bullets: [
      "Desenvolvimento de planilhas automatizadas para centralização e análise das jornadas de trabalho de profissionais terceirizados, utilizando Python, apoiando a conferência de horários e identificando inconsistências, reduzindo o trabalho manual de Infraestrutura e Facilities.",
    ],
    tags: ["Python"],
  },
  {
    title: "Estágio de Férias — IA e Ciência de Dados",
    company: "Banco Safra",
    period: "JUL 2026 — AGO 2026",
    bullets: [
      "Aprimoramento de dois ecossistemas de IA, com 16 agentes cada, integrados a uma plataforma de orquestração, utilizados pelo time jurídico em fluxos de pesquisa, investigação, validação patrimonial e recuperação de crédito.",
      "Análise de uso e identificação de gargalos de confiabilidade e perda de contexto, com refinamento de prompts, travas de segurança e otimização de memória.",
      "Refinamento do armazenamento de históricos de conversa com foco em escalabilidade, reduzindo em 40% o tamanho dos arquivos sem perda de informações essenciais.",
    ],
    tags: ["IA", "LLMs", "Python", "Prompt Engineering"],
  },
  {
    title: "Estágio de Férias — Supply Chain e Automação",
    company: "Compra Agora (Unilever)",
    period: "JAN 2026 — FEV 2026",
    bullets: [
      "Desenvolvimento de uma torre de controle logística para monitoramento de avarias e devoluções, integrada a um chatbot no WhatsApp.",
      "Fluxos automatizados em n8n e regras de negócio em JavaScript, com SQL e Databricks para gerenciamento de estados, SLAs e escalonamento de ocorrências críticas.",
      "Eliminação da triagem manual e aumento de 60% na velocidade da comunicação entre motoristas e a central de operações.",
    ],
    tags: ["n8n", "JavaScript", "SQL", "Databricks"],
  },
  {
    title: "Vice-Presidente",
    company: "Inteli Júnior",
    period: "DEZ 2025 — PRESENTE",
    bullets: [
      "Vice-presidência de empresa júnior com mais de 60 membros, coordenando Tecnologia, Negócios, Pessoas e entregas para clientes.",
      "Planejamento estratégico, governança, métricas e gestão de projetos de tecnologia — 201,6% da meta anual e faturamento de R$ 128 mil em três meses.",
      "Anteriormente Engenheira de Software (fev–dez 2025), desenvolvendo plataformas web full stack com React.js e JavaScript.",
    ],
    tags: ["Gestão", "React.js", "JavaScript"],
  },
  {
    title: "Consultora de Vendas / Líder de Vendas",
    company: "Claro Brasil",
    period: "OUT 2023 — DEZ 2024",
    bullets: [
      "Liderança de equipe de 6 pessoas, com metas, análise de desempenho e estratégias comerciais, contribuindo para aumento de 20% nos resultados nos primeiros três meses.",
    ],
  },
  {
    title: "Início da jornada em Computação",
    period: "ABR 2023",
    bullets: [
      "Ciência e Tecnologia na UFABC — depois bolsista integral em Ciência da Computação no Inteli.",
    ],
    milestone: true,
  },
] as const;
