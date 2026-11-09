export const profile = {
  name: 'Vinay Kumar',
  initials: 'VK',
  role: 'Full Stack Engineer',
  meta: '3+ years  •  Full Stack Engineer in Bangalore',
  quote: 'Build reliable systems, then polish every detail.',
  email: 'work.vinaykum@gmail.com',
  phone: '+91 9583960900',
  linkedin: 'https://linkedin.com/in/v-code',
  github: 'https://github.com/v-codey',
  lead: 'I build enterprise software that businesses depend on every day.',
  about:
    'Full Stack Engineer with 3+ years of experience building scalable web applications and ERP systems serving 800+ businesses. I work across React.js, Node.js and .NET, with a focus on responsive interfaces, SQL optimization and third-party API integrations. I have delivered AWS S3 migrations and ERP features that cut manual processing by 20%.',
}

export const experience = [
  {
    org: 'Turbomodus Pvt Ltd',
    mark: 'T',
    title: 'Associate Engineer, Hyderabad',
    period: 'Nov 2022 – Apr 2026',
    summary: 'Built and maintained ERP modules for inventory, reporting and permissions, used by 800+ businesses.',
    points: [
      'Fixed 50+ production issues across inventory, reporting and permissions modules, covering UI bugs, data inconsistencies and access control flaws.',
      'Tuned SQL stored procedures and views to remove query timeouts and speed up reporting modules.',
      'Integrated ERP data with a third-party SQL Server via OLEDB, replacing multi-field manual entry with a single ID lookup that cut input time by 95%.',
      'Migrated file storage from on-premise Windows servers to AWS S3, configuring buckets and IAM policies with senior infrastructure leads.',
      'Onboarded 12+ enterprise clients, 8 as sole technical owner, handling data migration, module customization and workflow validation.',
    ],
  },
  {
    org: 'BPUT University',
    mark: 'B',
    title: 'B.Tech, Electrical and Electronics Engineering',
    period: '2019 – 2022',
    summary: 'Odisha, India.',
    points: [],
  },
]

export const work = [
  {
    title: 'PeopleHub',
    stat: '60+',
    statLabel: 'integration tests in CI',
    text: 'An internal HR platform for leave approvals, attendance and audit logs, with a team leave timeline.',
    tags: ['React 19', 'Tailwind CSS', 'Express', 'PostgreSQL'],
    href: 'https://github.com/v-codey',
  },
  {
    title: 'ERP data lookup',
    stat: '95%',
    statLabel: 'less input time',
    text: 'Replaced multi-field manual entry with one ID lookup against a third-party SQL Server, with no data errors.',
    tags: ['SQL Server', 'OLEDB', 'VB.Net'],
  },
  {
    title: 'AWS S3 migration',
    stat: 'S3',
    statLabel: 'from on-premise servers',
    text: 'Moved client file storage off Windows servers into S3 with configured buckets and IAM policies.',
    tags: ['AWS S3', 'IAM', 'Windows Server'],
  },
  {
    title: 'QR label migration',
    stat: '1000+',
    statLabel: 'labels not reprinted',
    text: 'Decoded legacy QR identifiers into structured JSON so historical inventory moved over intact.',
    tags: ['JSON', 'SQL', 'Data migration'],
  },
]

// [name, simple-icons slug, brand colour (null = follows theme text colour)]
export const stack = [
  ['React.js', 'react', '#61DAFB'],
  ['Next.js', 'nextdotjs', null],
  ['TypeScript', 'typescript', '#3178C6'],
  ['JavaScript', 'javascript', '#F7DF1E'],
  ['Node.js', 'nodedotjs', '#5FA04E'],
  ['Express.js', 'express', null],
  ['Tailwind CSS', 'tailwindcss', '#06B6D4'],
  ['Bootstrap', 'bootstrap', '#7952B3'],
  ['SQL Server', 'microsoftsqlserver', '#CC2927', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/microsoftsqlserver/microsoftsqlserver-plain.svg'],
  ['PostgreSQL', 'postgresql', '#4169E1'],
  ['MongoDB', 'mongodb', '#47A248'],
  ['Redux', 'redux', '#764ABC'],
  ['Zod', 'zod', '#408AFF'],
  ['Docker', 'docker', '#2496ED'],
  ['Git', 'git', '#F05032'],
  ['Postman', 'postman', '#FF6C37'],
  ['VB.Net', 'dotnet', '#512BD4'],
  ['CI/CD', 'githubactions', '#2088FF'],
]

export const engineering = [
  { title: 'PeopleHub: auth and access control', tag: 'Project', text: 'JWT with rotating refresh tokens and reuse detection. Managers see only their reporting tree via recursive SQL queries.' },
  { title: 'Reporting performance tuning', tag: 'Turbomodus', text: 'Optimized stored procedures and views so reporting modules stop timing out.' },
  { title: 'Production issue triage', tag: 'Turbomodus', text: 'Resolved 50+ issues across inventory, reporting and permissions modules.' },
  { title: 'Enterprise client onboarding', tag: 'Turbomodus', text: 'Led data migration, module customization and workflow validation for 12+ clients.' },
]
