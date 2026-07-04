import Image from 'next/image';

const ICON_BASE =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const skillCategories = [
  {
    title: 'Front-end Development',
    skills: [
      { name: 'HTML', icon: `${ICON_BASE}/html5/html5-original.svg` },
      { name: 'CSS', icon: `${ICON_BASE}/css3/css3-original.svg` },
      {
        name: 'JavaScript',
        icon: `${ICON_BASE}/javascript/javascript-original.svg`,
      },
      {
        name: 'TypeScript',
        icon: `${ICON_BASE}/typescript/typescript-original.svg`,
      },
      { name: 'React', icon: `${ICON_BASE}/react/react-original.svg` },
      { name: 'Next.js', icon: `${ICON_BASE}/nextjs/nextjs-original.svg` },
      {
        name: 'TailwindCSS',
        icon: `${ICON_BASE}/tailwindcss/tailwindcss-original.svg`,
      },
    ],
  },
  {
    title: 'Back-end Development',
    skills: [
      { name: 'Node.js', icon: `${ICON_BASE}/nodejs/nodejs-original.svg` },
      {
        name: 'Express.js',
        icon: `${ICON_BASE}/express/express-original-wordmark.svg`,
      },
      { name: 'MySQL', icon: `${ICON_BASE}/mysql/mysql-original.svg` },
      {
        name: 'PostgreSQL',
        icon: `${ICON_BASE}/postgresql/postgresql-original.svg`,
      },
      { name: 'Java Spring', icon: `${ICON_BASE}/spring/spring-original.svg` },
    ],
  },
  {
    title: 'Cloud Computing',
    skills: [
      {
        name: 'AWS',
        icon: `${ICON_BASE}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
      },
      { name: 'Docker', icon: `${ICON_BASE}/docker/docker-original.svg` },
      {
        name: 'Github Actions',
        icon: `${ICON_BASE}/githubactions/githubactions-original.svg`,
      },
    ],
  },
  {
    title: 'Collaboration and DevOps',
    skills: [
      { name: 'Git', icon: `${ICON_BASE}/git/git-original.svg` },
      { name: 'Github', icon: `${ICON_BASE}/github/github-original.svg` },
      {
        name: 'Github Codespaces',
        icon: `${ICON_BASE}/vscode/vscode-original.svg`,
      },
      { name: 'Jira', icon: `${ICON_BASE}/jira/jira-original.svg` },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 pt-24">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight">
          Skills
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted">
          What I have learnt over the years
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {skillCategories.map((category) => (
          <article
            key={category.title}
            className="rounded-2xl border border-line bg-surface p-6 shadow-card transition-all hover:border-accent/20"
          >
            <h3 className="font-display text-lg font-bold text-ink">
              {category.title}
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-2.5 rounded-xl border border-line/80 bg-bg px-3 py-2.5 transition-colors hover:border-accent/30 hover:bg-accent-soft/40"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-surface shadow-sm">
                    <Image
                      src={skill.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain"
                    />
                  </span>
                  <span className="text-sm font-medium text-ink">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
