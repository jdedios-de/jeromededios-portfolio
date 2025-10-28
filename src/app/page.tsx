import Image from 'next/image';
import Link from 'next/link';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProfileCard } from '../components/ProfileCard';
import { ProjectCard } from '../components/ProjectCard';
import { ContactCard } from '../components/ContactCard';
import { CvCard } from '../components/CvCard';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { cvArticles } from '../data/cv';

// Define skill categories
const skillCategories = {
  "Programming Languages": [
    "Python",
    "TypeScript",
    "JavaScript",
    "jQuery",
    "Java",
    "Groovy",
  ],
  "Frameworks & Libraries": [
    "FastAPI",
    "Flask",
    "Fastify",
    "Spring",
    "Hibernate",
    "JDBC",
    "SQLAlchemy",
    "Knex.js",
    "React",
    "React Router",
    "Storybook",
    "Tailwind CSS",
    "Zod",
    "Zustand",
    "Node.js",
  ],
  Databases: [
    "PostgreSQL",
    "Supabase",
    "MySQL",
    "Elastic",
    "SQLite",
    "Oracle",
    "DB2",
    "SQL",
    "PL/SQL",
  ],
  "Cloud & DevOps": [
    "AWS",
    "EC2",
    "RDS",
    "Terraform",
    "Kubernetes",
    "Jenkins",
    "GitHub Actions",
    "CI/CD",
    "Git",
    "Trunk-based development",
  ],
  "Web Development": [
    "React",
    "React Router",
    "Storybook",
    "Tailwind CSS",
    "Backend-for-Frontend (BFF)",
  ],
  Testing: [
    "Jest",
    "React-Testing-Library",
    "Selenium",
    "JUnit",
    "Pytest",
    "TDD",
  ],
  "AI/LLM": [
    "LangChain",
    "LangGraph",
    "RAG / LLM",
  ],
  Observability: [
    "Grafana",
    "Kibana",
  ],
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1">
        <section className="container-grid pt-10 sm:pt-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-6 lg:gap-8">
            <div className="card hero-card p-5 md:p-6">
              <div className="flex items-center gap-4">
                <Image
                  src={profile.avatar}
                  alt={`${profile.name} avatar`}
                  width={88}
                  height={88}
                  className="rounded-full border border-neutral-200/40 dark:border-neutral-800/40 bg-white/40 dark:bg-neutral-900/40"
                />
                <div>
                  <h1 className="text-2xl sm:text-3xl font-semibold">{profile.name}</h1>
                  <p className="text-neutral-600 dark:text-neutral-300">{profile.role}</p>
                </div>
              </div>
              <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-justify">{profile.summary}</p>
              <ProfileCard />
              <ContactCard />
                <div className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href="#projects"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand/10 px-4 py-3 text-sm font-medium text-brand hover:bg-brand/20 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      Jump to Projects
                    </a>

                    <a
                      href="#cv"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand/10 px-4 py-3 text-sm font-medium text-brand hover:bg-brand/20 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      Jump to Experience
                    </a>
                  </div>
                </div>
                <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                        Open to Opportunities
                      </p>
                      <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                        Actively seeking Full-Stack / AI Engineer / Java / Application Support roles in Germany and EU
                      </p>
                      <p className="mt-2 text-xs text-blue-600 dark:text-blue-400">
                        Updated October 2025
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                        Currently Learning
                      </p>
                      <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                        <strong>A2 German</strong> in progress — weekly lessons, <strong>online</strong>.
                      </p>
                      <p className="mt-2 text-xs text-blue-600 dark:text-blue-400">
                        Updated October 2025
                      </p>
                    </div>
                  </div>
                </div>
            </div>

            <aside className="space-y-4 lg:w-80">
              <div className="card p-5 md:p-6">
                <h2 className="section-title">Skills</h2>
                <div className="mt-4 space-y-4">
                  {Object.entries(skillCategories).map(([category, skills]) => (
                    <div key={category}>
                      <h3 className="text-sm font-semibold text-neutral-400 dark:text-neutral-200">{category}</h3>
                      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-block bg-green-50 dark:bg-green-950 px-2 py-1 text-sm text-neutral-800 dark:text-neutral-200 font-small"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="projects" className="container-grid pt-10 sm:pt-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="section-title">Projects</h2>
            <Link href="/projects" className="text-brand hover:underline text-sm">View all</Link>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.slice(0, 4).map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
            <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
                {/* Back to Top */}
                <a
                  href="#top"
                  className="inline-flex items-center gap-2 rounded-md bg-brand/10 px-4 py-2 font-medium text-brand hover:bg-brand/20 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  Back to Top
                </a>

                {/* More Projects */}
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-md bg-green-50 dark:bg-green-950 px-4 py-2 font-medium text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  View All Projects
                </Link>
              </div>
            </div>
        </section>

        <section id="cv" className="container-grid pt-10 sm:pt-14 pb-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="section-title">Experience</h2>
            <Link href="/resume" className="text-brand hover:underline text-sm">View full CV</Link>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cvArticles.slice(0, 4).map((item) => (
              <CvCard key={`${item.title}-${item.org ?? ''}`} item={item} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}