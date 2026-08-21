import type { Principle } from "@/types/portfolio";

export const principles: readonly Principle[] = [
  {
    title: "Engenharia com propósito",
    body: "Eu construo tecnologia para resolver problemas concretos de negócio. Meus projetos nasceram de desafios reais de empresas como Globo, Banco Pan e Suzano, onde cada decisão técnica precisava produzir impacto mensurável.",
  },
  {
    title: "Clareza como disciplina",
    body: "Prefiro código legível, estruturado e escalável a soluções espertas que ninguém consegue manter. Clareza é uma disciplina de engenharia: reduz ruído, facilita a colaboração e sustenta a evolução do produto.",
  },
  {
    title: "Dados antes de opinião",
    body: "Antes de defender uma ideia, eu procuro evidências. Métricas, validação e experimentação orientam minhas decisões e ajudam a transformar hipóteses em soluções confiáveis.",
  },
] as const;
