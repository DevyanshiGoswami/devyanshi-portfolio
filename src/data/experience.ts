import type { ExperienceItem } from "../types";

export const experienceItems: ExperienceItem[] = [
  {
    id: "Evanti-Tech",
    role: "Software Engineering",
    organization: "Evanti Tech",
    location: "Mumbai, India",
    description:
      "Worked on a AI Code Comment Generator, contributing across frontend and backend layers in an agile team environment.",
    achievements: [
      "During my internship at Evanti Tech, I contributed to the development of AI-driven and backend software solutions using Python. I built intelligent document processing tools, developed RESTful APIs, integrated databases, automated workflows, and collaborated on production-ready applications while following clean coding practices and modern software development workflows.",
    ],
    type: "work",
  },
   {
    id: "IPS Limited",
    role: "Software Engineering Intern",
    organization: "IPS limited",
    location: "Remote",
    description:
      "Worked on a full-stack social media application, contributing across frontend and backend layers in an agile team environment.",
    achievements: [
      "Built a Twitter-style social feed using Spring Boot, React and MySQL",
      "Implemented authentication, tweet composition, likes and reply flows",
      "Collaborated with senior engineers on code reviews and REST API design",
      "Improved API response times through query optimization",
    ],
    type: "work",
  },
];

export const educationItems: ExperienceItem[] = [
  {
    id: "msc-software-engineering",
    role: "MSc Software Engineering",
    organization: "Upcoming Study",
    location: "International",
    description:
      "Pursuing an advanced degree focused on software architecture, engineering practice and applied research.",
    achievements: [
      "Deepening expertise in scalable system design",
      "Advanced coursework in software engineering methodology",
    ],
    type: "education",
  },
  {
    id: "iitram",
    role: "B.Tech, Computer Engineering",
    organization: "IITRAM, Ahmedabad",
    location: "Ahmedabad, India",
    description:
      "Institute of Infrastructure Technology Research and Management — Computer Engineering with a focus on software systems, algorithms and applied AI.",
    achievements: [
      "Coursework: Data Structures & Algorithms, OOP, Software Engineering, DBMS",
      "Built multiple full-stack and AI-powered projects during coursework",
      "Active participant in coding competitions and technical events",
    ],
    type: "education",
  },
];
