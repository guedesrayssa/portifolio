import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Frontend",
    subtitle: "A fachada",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend",
    subtitle: "O alicerce",
    items: [
      "Python",
      "Java",
      "Node.js",
      "Spring Boot",
      "FastAPI",
      "APIs REST",
      "SQL",
      "PostgreSQL",
    ],
  },
  {
    title: "Ferramentas",
    subtitle: "O arsenal",
    items: ["AWS", "Docker", "Git/GitHub", "n8n", "Databricks"],
  },
] as const;
