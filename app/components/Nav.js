'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '../data/site';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '/', label: 'About' },
  { href: '/#skills', label: 'Skills', hash: 'skills' },
  { href: '/projects', label: 'Projects' },
  { href: site.resumePath, label: 'Resume', external: true },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 -mx-6 mb-2 border-b border-line/60 bg-bg/80 px-6 py-5 backdrop-blur-xl sm:-mx-10 sm:px-10 lg:-mx-12 lg:px-12">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-indigo-500 font-display text-sm font-bold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-105"
          aria-label="Home"
        >
          {site.initials}
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <nav className="flex gap-5 sm:gap-8">
            {links.map((link) => {
              const isActive = !link.hash && !link.external && pathname === link.href;
              const className = `text-sm font-medium transition-colors ${
                isActive
                  ? 'text-ink underline decoration-accent decoration-2 underline-offset-8'
                  : 'text-muted hover:text-ink'
              }`;

              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={className}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
