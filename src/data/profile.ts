export type LinkItem = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  summary: string;
  location: string;
  email: string;
  lookingFor: string;
  avatar: string;
  resumeUrl: string;
  skills: string[];
  links: LinkItem[];
};

export const profile: Profile = {
  name: "Jerome de Dios",
  role: "Software Engineering",
  summary:
    "Software Engineer with over 15 years of experience in Java development and a proven track record supporting high-traffic sports betting platforms. Skilled in system reliability, troubleshooting, cloud engineering, and collaborating effectively in agile environments. A Masterschool Software Engineering Program graduate, with strong skills in Python, Generative AI, and Cloud Engineering. Committed to building intelligent, scalable solutions and contributing to innovative technology teams, while continuing to develop German language fluency.",
  location: "Auerbach (Vogtland), Saxony, Germany",
  email: "jeromededios.de@proton.me",
  lookingFor: "Full time position",
  avatar: "/images/avatar.png",
  resumeUrl: "/resume",
  linkedin: 'https://www.linkedin.com/in/jeromededios/',
  github: 'https://github.com/jdedios-de',
  phoneNumber: '+491795213992',
  skills: [
    "TypeScript",
    "React (SSR)",
    "React Router",
    "Node.js",
    "Fastify",
    "Python",
    "FastAPI",
    "Zod",
    "Zustand",
    "PostgreSQL",
    "SQLAlchemy",
    "RAG / LLM",
    "Backend-for-Frontend (BFF)",
    "TDD",
    "Trunk-based development",
    "CI/CD",
    "Jest",
    "Pytest",
    "Selenium",
    "Git",
    "Tailwind CSS",
    "JavaScript",
    "SQL",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/jdedios-de" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jeromededios/" },
    { label: "Email", href: "jeromededios.de@proton.me" },
  ],
};
