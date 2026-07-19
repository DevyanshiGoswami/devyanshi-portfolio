import { motion } from "framer-motion";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";
import type { ExperienceItem } from "../types";

export default function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="relative pl-8">
      <div className="absolute bottom-0 left-[9px] top-1 w-px bg-gradient-to-b from-accent-indigo via-accent-violet to-accent-cyan/30" />
      <div className="space-y-10">
        {items.map((item, i) => {
          const Icon = item.type === "work" ? FiBriefcase : FiBookOpen;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-8 top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-base ring-2 ring-accent-cyan">
                <Icon size={10} className="text-accent-cyan" />
              </span>

              <div className="glass-card p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-base font-semibold text-ink">
                    {item.role}
                  </h3>

                </div>
                <p className="mt-1 text-sm text-ink-muted">
                  {item.organization} · {item.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {item.achievements.map((a) => (
                    <li
                      key={a}
                      className="flex gap-2 text-sm text-ink-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
