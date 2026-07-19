import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import ParticleBackground from "./ParticleBackground";

const COMMANDS: { prompt: string; output: string }[] = [
  { prompt: "whoami", output: "Devyanshi Goswami" },
  { prompt: "cat role.txt", output: "Software Engineer · Full Stack Developer · Frontend developer · Backend developer" },
  {
    prompt: "cat stack.txt",
    output: "React · Spring Boot · PostgreSQL · Docker · Python",
  },
  { prompt: "echo $STATUS", output: "open to global opportunities" },
];

/**
 * Terminal typing sequence — the page's signature element. It types
 * out real developer commands rather than a generic "hi, I'm" line,
 * so the very first thing a visitor reads sounds like the subject.
 */
function TerminalTyper() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showOutput, setShowOutput] = useState(false);
  const [history, setHistory] = useState<
    { prompt: string; output: string }[]
  >([]);

  useEffect(() => {
    if (lineIndex >= COMMANDS.length) return;
    const current = COMMANDS[lineIndex];

    if (!showOutput && charIndex < current.prompt.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 55);
      return () => clearTimeout(t);
    }
    if (!showOutput && charIndex === current.prompt.length) {
      const t = setTimeout(() => setShowOutput(true), 300);
      return () => clearTimeout(t);
    }
    if (showOutput) {
      const t = setTimeout(() => {
        setHistory((h) => [...h, current]);
        setLineIndex((i) => i + 1);
        setCharIndex(0);
        setShowOutput(false);
      }, 700);
      return () => clearTimeout(t);
    }
  }, [charIndex, showOutput, lineIndex]);

  const current = COMMANDS[lineIndex];

  return (
    <div className="glass-card w-full max-w-xl overflow-hidden font-mono text-sm">
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
        <span className="ml-3 text-xs text-ink-faint">Devyanshi@portfolio: ~</span>
      </div>
      <div className="min-h-[220px] space-y-2 px-4 py-4">
        {history.map((h, i) => (
          <div key={i}>
            <p>
              <span className="text-accent-cyan">➜ </span>
              <span className="text-accent-violet">~$</span>{" "}
              <span className="text-ink">{h.prompt}</span>
            </p>
            <p className="pl-4 text-ink-muted">{h.output}</p>
          </div>
        ))}
        {current && (
          <div>
            <p>
              <span className="text-accent-cyan">➜ </span>
              <span className="text-accent-violet">~$</span>{" "}
              <span className="text-ink">
                {current.prompt.slice(0, charIndex)}
              </span>
              {!showOutput && <span className="animate-blink">▍</span>}
            </p>
            {showOutput && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="pl-4 text-ink-muted"
              >
                {current.output}
              </motion.p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const SOCIALS = [
  { icon: FiGithub, href: "https://github.com/DevyanshiGoswami", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://linkedin.com/in/Devyanshi-Goswami",
    label: "LinkedIn",
  },
  { icon: FiMail, href: "mailto:devyanshilg@gmail.com", label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-aurora" />
      <ParticleBackground />
      <div className="section grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow mb-4">Software Engineer · India</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            Building reliable products,{" "}
            <span className="gradient-text">line by line.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            I'm Devyanshi Goswami, a Software Engineer with 2+ years of experience specializing in AI, backend, and full-stack development. I build scalable, high-performance applications using modern technologies, with a focus on clean architecture, intelligent automation, and exceptional user experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="/Goswami_Devyanshi_Resume.pdf" download className="btn-primary">
              <FiDownload /> Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-secondary"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-muted transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="animate-float">
            <TerminalTyper />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
