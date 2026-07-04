import Link from 'next/link';
import { site } from '../data/site';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line pt-10 pb-6">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-ink">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-muted">{site.title}</p>
        </div>
        <SocialLinks size="sm" />
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted">
        <a 
          href={site.resumePath} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="transition-colors hover:text-accent"
        >
          View Resume
        </a>
        <a
          href={site.resumePath}
          download={site.resumeDownloadName}
          className="transition-colors hover:text-accent"
        >
          Download Resume
        </a>
        <a
          href={`mailto:${site.email}`}
          className="transition-colors hover:text-accent"
        >
          {site.email}
        </a>
      </div>
    </footer>
  );
}
