import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import type { Project } from "../types";

const CATEGORY_GLYPH: Record<Project["category"], string> = {
  "AI/ML": "AI",
  "Full Stack": "FS",
  Frontend: "FE",
  Backend: "BE",
  GOLang: "GO",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="glass-card group flex flex-col overflow-hidden"
    >
      <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-accent-indigo/20 via-accent-violet/10 to-accent-cyan/10">
        <span className="font-display text-4xl font-bold text-white/10 transition-transform duration-500 group-hover:scale-110">
          {CATEGORY_GLYPH[project.category]}
        </span>
        {project.featured && (
          <span className="absolute right-3 top-3 rounded-full bg-accent-amber/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-amber">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] uppercase tracking-widest text-accent-cyan">
          {project.category}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold text-ink">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary !py-2 !px-4 text-xs"
            >
              <FiExternalLink size={13} /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary !py-2 !px-4 text-xs"
            >
              <FiGithub size={13} /> Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
