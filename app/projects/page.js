import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../data/projects';
import { site } from '../data/site';

function ProjectLinks({ project }) {
  const links = [];

  if (project.github) {
    links.push(
      <a
        key="github"
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-medium text-muted transition-all hover:border-accent/40 hover:text-accent hover:shadow-sm"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.395-.135-.345-.72-1.395-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
        GitHub
      </a>
    );
  }

  if (project.url) {
    links.push(
      <a
        key="url"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent transition-all hover:bg-accent hover:text-white hover:shadow-sm"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
        </svg>
        Visit Website
      </a>
    );
  }

  if (links.length > 0) {
    return <div className="flex gap-2">{links}</div>;
  }

  if (project.showcase) {
    return (
      <span className="shrink-0 rounded-lg border border-accent/20 bg-accent-soft px-3 py-1.5 text-xs font-medium text-accent-soft-text">
        {project.showcase}
      </span>
    );
  }

  return (
    <span className="shrink-0 rounded-lg border border-dashed border-line px-3 py-1.5 text-xs text-muted">
      {project.type} · Private
    </span>
  );
}

export default function ProjectsPage() {
  return (
    <div className="pt-8">
      <h1 className="animate-fade-in font-display text-4xl font-bold tracking-tight sm:text-5xl">
        Projects
      </h1>

      <div className="mt-12 space-y-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
        {projects.map((project) => (
          <article
            key={project.name}
            className="group relative overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-hover"
          >
            {project.image && (
              <div className="relative h-64 w-full overflow-hidden border-b border-line bg-muted/10 sm:h-80 lg:h-96">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.name}`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            )}

            <div className="p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-medium text-accent-soft-text">
                      {project.type}
                    </span>
                    {project.tagline && (
                      <span className="font-mono text-xs text-muted">
                        &ldquo;{project.tagline}&rdquo;
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-ink">
                    {project.name}
                  </h3>
                </div>
                <ProjectLinks project={project} />
              </div>

              <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

              {project.team && (
                <p className="mt-4 text-sm text-muted">
                  <span className="font-medium text-ink">Team:</span>{' '}
                  {project.team.join(' · ')}
                </p>
              )}

              {project.features && (
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              {project.highlights && (
                <ul className="mt-5 space-y-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted/10 px-3 py-1 font-mono text-xs text-muted transition-colors group-hover:bg-accent-soft group-hover:text-accent-soft-text"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-accent/90"
        >
          View GitHub Profile
        </a>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2 text-sm font-semibold text-ink transition-all hover:border-accent/40"
        >
          Back to About
        </Link>
      </div>
    </div>
  );
}
