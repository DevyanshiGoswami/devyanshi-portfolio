export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "AI/ML" | "Full Stack" | "Frontend" | "Backend" | "GOLang";
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 0-100
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  achievements: string[];
  type: "work" | "education";
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  category: "competition" | "certification" | "academic";
  link: string;
}
