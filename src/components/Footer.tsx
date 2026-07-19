import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const SOCIALS = [
  { icon: FiGithub, href: "https://github.com/DevyanshiGoswami", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://linkedin.com/in/Devyanshi-Goswami",
    label: "LinkedIn",
  },
  { icon: FiMail, href: "mailto:devyanshilg@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between sm:px-8 lg:px-10">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} Devyanshi Goswami. Built with React & Tailwind.
        </p>
        <div className="flex items-center gap-4">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-ink-faint transition-colors hover:text-accent-cyan"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
