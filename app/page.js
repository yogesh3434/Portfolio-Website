import Image from 'next/image';
import Hero from './components/Hero';
import Skills from './components/Skills';

const courses = [
  {
    code: 'EECS 1028',
    title: 'Discrete Mathematics for Computer Science',
    description:
      'Logic, sets, combinatorics, and proof techniques for reasoning about algorithms and discrete structures.',
  },
  {
    code: 'EECS 1019',
    title: 'Computation and Logic for Computer Science',
    description:
      'Formal models of computation spanning propositional logic, automata, and computability theory.',
  },
  {
    code: 'EECS 2030',
    title: 'Advanced Object Oriented Programming',
    description:
      'Implementing APIs, inheritance, generics, recursion, and core data structures in Java.',
  },
  {
    code: 'EECS 2011',
    title: 'Fundamentals of Data Structures',
    description:
      'Abstract data types, trees, graphs, and complexity analysis with object-oriented implementations.',
  },
  {
    code: 'EECS 3101',
    title: 'Design and Analysis of Algorithms',
    description:
      'Divide-and-conquer, greedy methods, dynamic programming, and rigorous efficiency analysis.',
  },
  {
    code: 'EECS 3221',
    title: 'Operating System Fundamentals',
    description:
      'Process scheduling, memory management, concurrency, and file systems at the OS level.',
  },
  {
    code: 'EECS 4415',
    title: 'Software Design and Artificial Intelligence',
    description:
      'Software architecture paired with AI fundamentals — search, knowledge representation, and agents.',
  },
];

export default function AboutPage() {
  return (
    <div>
      <Hero />

      <section>
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight">
              Education
            </h2>
            <p className="mt-2 text-muted">
              Coursework from my computer science degree.
            </p>
          </div>
          <span className="font-mono text-sm text-accent">BSc · In Progress</span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.code}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-card-hover"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="flex items-start gap-3">
                <Image
                  src="/yorku-logo.svg"
                  alt="York University"
                  width={36}
                  height={36}
                  className="mt-0.5 h-9 w-9 shrink-0 rounded-lg"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-bold leading-snug text-ink">
                      {course.title}
                    </h3>
                    <span className="shrink-0 rounded-lg bg-accent-soft px-2.5 py-1 font-mono text-xs font-medium text-accent-soft-text">
                      {course.code}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {course.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Skills />
    </div>
  );
}
