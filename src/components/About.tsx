import { motion } from "framer-motion";
import { FiTarget, FiZap, FiUsers, FiCompass } from "react-icons/fi";
import AnimatedCounter from "./AnimatedCounter";

const STRENGTHS = [
  {
    icon: FiZap,
    title: "Ships fast, breaks nothing",
    text: "Comfortable owning a feature from database schema to deployed UI without losing sight of quality.",
  },
  {
    icon: FiTarget,
    title: "Detail-oriented engineering",
    text: "Strong grounding in DSA and OOP that shows up in clean, maintainable, well-tested code.",
  },
  {
    icon: FiUsers,
    title: "Collaborative by default",
    text: "Internship experience working across frontend and backend teams, comfortable in code review culture.",
  },
  {
    icon: FiCompass,
    title: "Curious about applied AI",
    text: "Builds side projects that pair traditional software engineering with practical machine learning.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        01 · About
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl"
      >
        Engineer first, curious always.
      </motion.h2>

      <div className="mt-10 grid gap-12 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-3"
        >
          <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
            I build software that combines intelligent automation with scalable engineering. My work spans AI-powered applications, backend systems, and full-stack platforms, with hands-on experience in developing REST APIs, intelligent workflows, real-time systems, and modern web applications using Python, Java, Go, Spring Boot, FastAPI, and React. Every project is built with a strong focus on clean architecture, performance, security, and long-term maintainability.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            I'm passionate about solving complex engineering challenges through thoughtful software design and modern AI technologies. Whether it's developing LLM-powered applications, distributed backend systems, or developer-focused tools, I enjoy transforming ambitious ideas into reliable, production-ready solutions that deliver real value. I believe great software isn't just functional—it's scalable, intuitive, and built to evolve.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/[0.06] pt-6">
            <AnimatedCounter value={9} suffix="+" label="Projects Shipped" />
            <AnimatedCounter value={12} suffix="+" label="Technologies" />
            <AnimatedCounter value={2} label="Internship" />
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
          {STRENGTHS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="glass-card flex gap-4 p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-indigo/20 to-accent-cyan/20 text-accent-cyan">
                <s.icon size={18} />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-ink">
                  {s.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {s.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
