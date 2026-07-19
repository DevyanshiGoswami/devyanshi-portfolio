import type { Project } from "../types";

export const projects: Project[] = [

  {
    id: "ai-lecture-notes",
    title: "AI Lecture Notes Generator",
    description:
      "Converts audio/video lectures into clean, structured study notes automatically.",
    longDescription:
      "Takes recorded lecture audio or video, transcribes it with AI-powered speech-to-text, then summarizes and restructures the transcript into headings, bullet points and key takeaways so students can review lectures in a fraction of the time.",
    technologies: ["Python", "AI Transcription", "NLP", "Summarization"],
    category: "AI/ML",
    image: "lecture-notes",
    githubUrl: "https://github.com/DevyanshiGoswami/repomind-AI--Smart-Repository-Analyzer",
    featured: true,
  },
    {
    id: "RepoMind AI - Smart Repository Analyzer",
    title: "AI powered respository analyzer",
    description:
      "Converts audio/video lectures into clean, structured study notes automatically.",
    longDescription:
      "Takes recorded lecture audio or video, transcribes it with AI-powered speech-to-text, then summarizes and restructures the transcript into headings, bullet points and key takeaways so students can review lectures in a fraction of the time.",
    technologies: ["Python", "FastAPI"," React"," JavaScript","Ollama"],
    category: "AI/ML",
    image: "Analyzer",
    githubUrl: "https://github.com/ritu-kumari-05/AudioToText",
    featured: true,
  },
  {
    id: "ai-code-comment-generator",
    title: "AI Code Comment Generator",
    description:
      "Automatically generates readable documentation and inline comments for source code.",
    longDescription:
      "A developer productivity tool that analyzes source files and generates docstrings, inline comments and function-level documentation, helping teams keep codebases readable without slowing down delivery.",
    technologies: ["Python", "AI/NLP", "Developer Tools"],
    category: "AI/ML",
    image: "code-comment",
    githubUrl: "https://github.com/DevyanshiGoswami/codecomment",
    featured: false,
  },
  {
    id: "AI-Powered-Autonomous-Observability-Incident-Intelligence-Platform",
    title: "AI-Powered-Autonomous-Observability-Incident-Intelligence-Platform",
    description:
      "A tool build to monitor system logs.",
    longDescription:
      "A cross-platform project management application built with Dart, supporting task boards, deadlines, progress tracking and in-app team communication to keep distributed teams aligned.",
    technologies: ["Python, React"],
    category: "Full Stack",
    image: "project-management",
    githubUrl: "https://github.com/DevyanshiGoswami/AI-Powered-Autonomous-Observability-Incident-Intelligence-Platform",
    featured: false,
  },
  {
    id: "File encrypt and Decrypt",
    title: "File encrypt and Decrypt",
    description:
      "Encrypt and Decrypt file using golang",
    longDescription:
      "A lightweight and secure command-line application written in Go that encrypts and decrypts files using password-based encryption. ",
    technologies: ["Golang"],
    category: "GOLang",
    image: "text-extract",
    githubUrl: "https://github.com/DevyanshiGoswami/go-file-encrypt",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "twitter-clone",
    title: "Twitter Clone",
    description:
      "A social feed application built during internship replicating core Twitter features.",
    longDescription:
      "Built during an internship at Evanti Tech: a social media platform with authentication, tweet composition, likes, replies and a real-time feed, backed by a Spring Boot REST API and MySQL database.",
    technologies: ["Spring Boot", "React", "MySQL"],
    category: "Full Stack",
    image: "twitter-clone",
    githubUrl: "https://github.com/DevyanshiGoswami/twitter-clone-backend",
    featured: true,
  },
  {
    id: "ecommerce-website",
    title: "E-Commerce Website",
    description:
      "A full-featured storefront with product management and order processing.",
    longDescription:
      "A server-rendered e-commerce platform with product catalog management, cart, checkout and order tracking, built with Spring Boot and Thymeleaf on a MySQL database.",
    technologies: ["Spring Boot", "Thymeleaf", "MySQL"],
    category: "Full Stack",
    image: "ecommerce",
    githubUrl: "https://github.com/DevyanshiGoswami/ecommerceweb",
    featured: false,
  },
];
