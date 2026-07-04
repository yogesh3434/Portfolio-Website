'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site } from '../data/site';
import SocialLinks from './SocialLinks';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative overflow-hidden pt-8 pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/15 blur-3xl dark:bg-accent/20"
        style={{ transform: `translateY(${scrollY * 0.18}px)` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-10 h-56 w-56 rounded-full bg-indigo-400/10 blur-3xl dark:bg-indigo-500/15"
        style={{ transform: `translateY(${scrollY * -0.12}px)` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/3 top-1/2 h-40 w-40 rounded-full bg-violet-400/10 blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.08}px) translateX(${scrollY * 0.04}px)` }}
      />

      <div
        className="relative will-change-transform"
        style={{ transform: `translateY(${scrollY * -0.06}px)` }}
      >
        <p className="inline-flex animate-fade-in items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-1.5 text-sm font-medium text-muted shadow-sm backdrop-blur-md transition-colors hover:border-accent/40">
          <Image
            src="/yorku-logo.svg"
            alt=""
            width={18}
            height={18}
            className="h-[18px] w-[18px] shrink-0"
          />
          {site.title}
        </p>

        <h1 className="mt-8 animate-slide-up font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Hello, I&apos;m{' '}
          <span className="bg-gradient-to-r from-accent via-indigo-500 to-violet-400 bg-clip-text text-transparent drop-shadow-sm">
            {site.firstName}
          </span>
        </h1>

        <p
          className="mt-6 animate-slide-up max-w-2xl text-lg leading-relaxed text-muted"
          style={{ animationDelay: '100ms' }}
        >
          {site.bio}
        </p>

        <div
          className="mt-8 flex animate-slide-up flex-wrap items-center gap-3"
          style={{ animationDelay: '200ms' }}
        >
          <a
            href={site.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-accent/40 hover:bg-accent/90"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
              <path d="M14 3v6h6M16 13H8M16 17H8M10 9H8" />
            </svg>
            View Resume
          </a>
          <a
            href={site.resumePath}
            download={site.resumeDownloadName}
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg dark:hover:bg-accent/10"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
            </svg>
            Download Resume
          </a>
        </div>

        <SocialLinks className="mt-8" />
      </div>
    </section>
  );
}
