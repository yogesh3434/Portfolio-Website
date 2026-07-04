import Link from 'next/link';
import { site } from '../data/site';

export const metadata = {
  title: 'Resume — Yogesh Sharma',
};

export default function ResumePage() {
  return (
    <div className="pt-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-bold tracking-tight">
            Resume
          </h1>
          <p className="mt-2 text-muted">
            {site.name} · Computer Science · York University
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={site.resumePath}
            download={site.resumeDownloadName}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent/90"
          >
            Download PDF
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-4 py-2.5 text-sm font-semibold text-ink transition-all hover:border-accent/40"
          >
            Back Home
          </Link>
        </div>
      </div>

      <div className="relative h-[80vh] w-full overflow-hidden rounded-2xl border border-line shadow-card bg-surface">
        <object
          data={site.resumePath}
          type="application/pdf"
          className="h-full w-full"
        >
          <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
            <p className="text-muted">
              It appears your browser doesn't support embedded PDFs.
            </p>
            <a
              href={site.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-accent/90"
            >
              Open PDF Instead
            </a>
          </div>
        </object>
      </div>
    </div>
  );
}
