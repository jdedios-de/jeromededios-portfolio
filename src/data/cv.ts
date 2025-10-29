export type CvArticle = {
  title: string;
  org?: string;
  location?: string;
  period?: string;
  bullets: string[];
  tags?: string[];
  type: 'work' | 'education';
};

export const cvArticles: CvArticle[] = [
  {
    title: 'Software Engineer Intern',
    org: 'Webeet',
    location: 'Remote',
    period: 'Sept 2025 - Present',
    bullets: [
      'Built features using TypeScript, Fastify, and React with React Router, following Test-Driven Development (TDD) for reliable, maintainable code.',
      'Created secure, scalable, and high-performance solutions with strong data isolation and authentication',
      'Automated complex tasks and improved decision-making by integrating AI workflows with n8n and AI APIs.',
      'Used modern cloud services and CI/CD pipelines for seamless deployment, monitoring, and ongoing app improvements.',
    ],
    tags: ['Node.js', 'React.js', 'TypeScript', 'fastify', 'React Router', 'Jest', 'AWS', 'Terraform'],
    type: 'work',
  },
  {
    title: 'Professional Development',
    org: 'Masterschool',
    location: 'Remote',
    period: 'Dec 2023 - Present',
    bullets: [
      'Completed an intensive Generative AI software engineering program at Masterschool, learning Python, APIs, JavaScript, Flask, and SQL for real-world applications.',
      'Gained practical AI Engineering skills through hands-on, industry-focused projects.',
      'Building a new life in Germany, balancing family, personal growth, and cultural integration.',
      'Learning German to boost professional opportunities and connect with the local community.',
    ],
    tags: [''],
    type: 'education',
  },
  {
    title: 'Senior Application Support Engineer',
    org: 'Sportserve',
    location: 'Hybrid',
    period: 'Nov 2021 - Nov 2023',
    bullets: [
      '[Infrastructure & Application Monitoring and Support]',
      'Supported critical Sportsbook and Casino apps, ensuring quick updates and issue fixes for users.',
      'Monitored system health (apps, servers, networks), addressing alerts and performance issues promptly.',
      'Managed monitoring tools, tracked KPIs, and worked with vendors on integrations and issue resolution.',
      ' ',
      '[ITSM Processes & Service Management (Internal & Third-Party)]',
      'Oversaw end-to-end incident management within defined SLAs — including issue reproduction, triage, troubleshooting, resolution, and post-incident reviews — for internal systems and external customer-facing applications (Sportsbook & Casino).',
      'Handled problem management, service/change requests, and participated in release cycles. Contributed to the continuous improvement of the internal knowledge base.',
      ' ',
      '[Software Development Lifecycle (SDLC) Support]',
      'Performed deployments (frontend/backend), hotfixes, and related tasks in staging and production environments.',
      'Worked closely with Network, Platform Engineering, and Development teams to resolve production issues, identify recurring problems, and support ongoing infrastructure needs.',
    ],
    tags: ['Python', 'Git', 'Docker', 'Technical Support', 'AppDynamics', 'Grafana', 'Elastic Stack (ELK)','PRTG', 'Icinga','Jira', 'Confluence', 'Opsgenie', 'Catchpoint', 'Jenkins', 'Nexus'],
    type: 'work',
  },
  {
    title: 'Site Reliability Engineer',
    org: 'Bayview Technologies, Inc',
    location: 'On-Site',
    period: 'Sep 2019 - Nov 2021',
    bullets: [
      'Reduced incident recovery time by 40% through automated monitoring and alerting.',
      'Maintained 24/7 sportsbook systems, achieving 99.95% SLA compliance.',
      'Ensured 99.99%+ uptime and high QoS for global sportsbook platforms.',
      'Improved incident response time by 30% by tracking key SLOs and SLIs.',
      'Partnered with sports trading teams to enhance collaboration and reduce silos.',
      'Developed self-healing scripts, cutting manual incident work by 50%.',
      'Led root cause analyses and post-incident reviews to prevent recurrence.',
      'Worked with DevOps and IT teams to ensure smooth releases and production readiness.',
      'Followed strict change management, achieving 0% critical outages during deployments.',
      'Supported 24/7 operations and participated in on-call rotations.',
      'Applied SRE principles to strengthen reliability and operational excellence.',
      'Used tools like ELK Stack, Grafana, AppDynamics, and synthetic monitoring to improve performance.',
      'Automated deployments with Ansible, Jenkins, and Git, reducing release time by 60%.',
      'Used Linux, Bash, Python, and SQL for daily operations and troubleshooting.',
      'Communicated effectively with technical and business stakeholders under pressure.',
    ],
    tags: ['Python', 'Grafana', 'Jenkins', 'PRTG', 'Shell Scripting', 'Ansible', 'AppDynamics', 'Icinga'],
    type: 'work',
  },
];


