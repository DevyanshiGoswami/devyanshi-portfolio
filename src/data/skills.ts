import type { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    icon: "code",
    skills: [
      { name: "Java", level: 88 },
      { name: "Python", level: 90 },
      { name: "C++", level: 80 },
      { name: "C", level: 78 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "layout",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "HTML5 / CSS3", level: 92 },
      { name: "Bootstrap", level: 82 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Spring Boot", level: 86 },
      { name: "Hibernate", level: 78 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "database",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 78 },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    icon: "tool",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Postman", level: 85 },
      { name: "Jenkins", level: 68 },
    ],
  },
  {
    id: "foundations",
    title: "Foundations",
    icon: "cpu",
    skills: [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "OOP", level: 88 },
      { name: "Software Engineering", level: 84 },
      { name: "Machine Learning Basics", level: 70 },
    ],
  },
];
