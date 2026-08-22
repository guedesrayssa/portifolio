import type { Education } from "@/types/portfolio";

export const education: readonly Education[] = [
  {
    institution: "Inteli — Instituto de Tecnologia e Liderança",
    degree: "Ciência da Computação",
    period: "JAN 2025 — DEZ 2028",
    note: "Bolsista integral",
    bullets: [
      "Metodologia Project-Based Learning (PBL): 16 projetos ao longo da graduação, desenvolvidos com empresas como Mars, Chilli Beans, Copel, Suzano, Banco PAN e Rede Globo.",
      "Entidades estudantis: vice-presidência da Inteli Júnior, além da EchoSec, liga de cibersegurança, e da Inteli Consulting Society, liga de consultoria.",
    ],
  },
  {
    institution: "UFABC — Universidade Federal do ABC",
    degree: "Bacharelado em Ciência e Tecnologia",
    period: "ABR 2023 — DEZ 2024",
    bullets: [
      "Início da jornada em Computação, antes da transferência para o Inteli com bolsa integral.",
    ],
  },
] as const;
