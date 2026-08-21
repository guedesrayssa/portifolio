export type Experience = {
  title: string;
  company?: string;
  period: string;
  bullets: readonly string[];
  tags?: readonly string[];
  milestone?: boolean;
};

export type SkillGroup = {
  title: string;
  subtitle: string;
  items: readonly string[];
};

export type Principle = {
  title: string;
  body: string;
};

export type Project = {
  title: string;
  client: string;
  period: string;
  description: string;
  tags: readonly string[];
  accent: "bronze" | "slate" | "ember" | "olive";
  githubUrl?: string;
};
