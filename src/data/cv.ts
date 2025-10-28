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
      'Infrastructure & Application Monitoring and Support:',
      'Supported critical Sportsbook and Casino apps, ensuring quick updates and issue fixes for users.',
      'Monitored system health (apps, servers, networks), addressing alerts and performance issues promptly.',
      'Managed monitoring tools, tracked KPIs, and worked with vendors on integrations and issue resolution.',
    ],
    tags: ['Python', 'JavaScript', 'Full Stack', 'Software Engineering'],
    type: 'education',
  },
  {
    title: 'QA Testing with Python & Selenium',
    org: 'Masterschool',
    location: 'Remote',
    period: '2023 - 2024',
    bullets: [
      'Specialized QA curriculum focusing on Python automation and Selenium testing',
      'Mastered test automation frameworks and continuous integration practices',
      'Developed comprehensive test suites for web applications',
      'Learned advanced testing methodologies and quality assurance strategies',
    ],
    tags: ['Python', 'Selenium', 'QA Testing', 'Automation'],
    type: 'education',
  },
];


