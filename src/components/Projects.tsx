import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import type { Project } from "../types";

const CATEGORIES: (Project["category"] | "All")[] = [
  "All",
  "AI/ML",
  "Full Stack",
  "Frontend",
  "Backend",
  "GOLang",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<
    Project["category"] | "All"
  >("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <section id="projects" className="section">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        03 · Projects
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl"
      >
        Things I've built and shipped.
      </motion.h2>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
                activeCategory === cat
                  ? "border-accent-cyan/50 bg-accent-cyan/10 text-accent-cyan"
                  : "border-white/10 text-ink-muted hover:border-white/25"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <FiSearch
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint"
            size={14}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects or tech..."
            className="w-full rounded-full border border-white/10 bg-white/[0.03] py-2 pl-9 pr-4 font-mono text-xs text-ink placeholder:text-ink-faint focus:border-accent-cyan/50 focus:outline-none"
          />
        </div>
      </div>

      <motion.div
        layout
        className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center font-mono text-sm text-ink-faint">
          No projects match "{query}" in {activeCategory}. Try a different
          search.
        </p>
      )}
    </section>
  );
}
