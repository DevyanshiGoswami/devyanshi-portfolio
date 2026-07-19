import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-accent-cyan">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink">
        This page doesn't exist yet.
      </h1>
      <p className="mt-3 max-w-md text-ink-muted">
        The route you followed isn't wired up. Head back home to explore the
        portfolio.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </section>
  );
}
