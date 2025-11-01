'use client';

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
  "Programming Languages and Scripting": [
    "Python",
    "TypeScript",
    "JavaScript",
    "Java",
    "Groovy",
    "CSS",
    "HTML",
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
    "Struts",
    "SQLModel",
    "Pydantic",
    "Loguru",
    "jQuery",
    "EXTJS",
  ],
  Databases: [
    "PostgreSQL",
    "Supabase",
    "MySQL",
    "SQLite",
    "Oracle",
    "DB2",
    "SQL",
    "PL/SQL",
  ],
  "Web Technologies": [
    "HTML/CSS",
    "XML",
    "JAX-WS",
    "Ajax",
    "JSP",
    "Servlets",
    "Java EE",
    "Java Web",
  ],
  "Cloud & DevOps": [
    "AWS",
    "EC2",
    "RDS",
    "Terraform",
    "Jenkins",
    "GitHub Actions",
    "CI/CD",
    "Git",
    "Trunk-based development",
    "Bamboo",
    "Bitbucket",
  ],
  Testing: [
    "Jest",
    "React-Testing-Library",
    "Selenium",
    "JUnit",
    "Pytest",
    "TDD",
    "JMeter",
  ],
  "AI/LLM": [
    "LangChain",
    "LangGraph",
    "RAG / LLM",
  ],
  Observability: [
    "Grafana",
    "Kibana",
    "AppDynamics",
    "Catchpoint",
    "PRTG",
    "Icinga",
  ],
  "Tools & Platforms": [
    "Jira",
    "Confluence",
    "Fisheye",
    "OpenESB",
  ],
  "IDEs & Servers": [
    "IntelliJ IDEA",
    "MyEclipse",
    "NetBeans",
    "Apache Tomcat",
    "Glassfish",
    "WebLogic",
  ],
};

export default function HomePage() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Skip to Main Content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-brand text-white px-4 py-2 rounded-md focus:ring-2 focus:ring-brand/50 focus:ring-offset-2"
      >
        Skip to main content
      </a>

      <main id="main-content" className="min-h-screen flex flex-col" role="main">
        <Header />

        <div className="flex-1">
          <section className="container-grid pt-10 sm:pt-14">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-6 lg:gap-8">
              <div className="card hero-card p-5 md:p-6">
                <div className="flex items-center gap-4">
                  <Image
                    src={profile.avatar}
                    alt={`Photo of ${profile.name}, ${profile.role}`}
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

                {/* Jump to Buttons - Accessible */}
                <div className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => scrollToSection('projects')}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand/10 px-4 py-3 text-sm font-medium text-brand hover:bg-brand/20 transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
                      aria-label="Scroll to Projects section"
                    >
                      <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      Jump to Projects
                    </button>

                    <button
                      onClick={() => scrollToSection('cv')}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand/10 px-4 py-3 text-sm font-medium text-brand hover:bg-brand/20 transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
                      aria-label="Scroll to Experience section"
                    >
                      <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      Jump to Experience
                    </button>
                  </div>
                </div>

                {/* Info Banner: Open to Opportunities */}
                <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                      <svg aria-hidden="true" className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                {/* Info Banner: Currently Learning */}
                <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                      <svg aria-hidden="true" className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                        Currently Learning
                      </p>
                      <ul className="mt-2 space-y-1.5 text-sm text-blue-700 dark:text-blue-300 list-disc list-inside">
                        <li>
                          <strong>A2 German</strong> in progress — weekly lessons, <strong>online</strong>.
                        </li>
                        <li>
                          <strong>Rust Programming Language</strong> in progress.
                        </li>
                      </ul>
                      <p className="mt-2 text-xs text-blue-600 dark:text-blue-400">
                        Updated October 2025
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education Section */}
                <div className="mt-8">
                  <h2 className="section-title mb-4">Education</h2>
                  <div className="space-y-5">

                    {/* Masterschool - Cloud Engineering */}
                    <div className="card p-5">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                            MS
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">Masterschool</h3>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            Cloud Engineering, Information Technology
                          </p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
                            Jun 2025 – Nov 2025
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {["AWS", "Infrastructure as Code (IaC)", "Cloud Computing", "Cloud Storage"].map((skill, idx) => (
                              <span
                                key={skill}
                                className="inline-block bg-blue-50 dark:bg-blue-950/50 px-2.5 py-1 text-xs text-blue-800 dark:text-blue-200 font-medium rounded-md border border-blue-200 dark:border-blue-800/40 motion-safe:animate-fadeInUp hover:scale-105 hover:shadow-md hover:bg-blue-100 dark:hover:bg-blue-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 transition-all duration-200"
                                style={{ animationDelay: `${idx * 30}ms` }}
                                tabIndex={0}
                                role="listitem"
                                aria-label={`Skill: ${skill}`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Masterschool - Generative AI */}
                    <div className="card p-5">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-sm">
                            AI
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">Masterschool</h3>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            Generative AI Engineering, Artificial Intelligence
                          </p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
                            Sep 2024 – Jun 2025
                          </p>
                          <ul className="mt-2 text-sm text-neutral-700 dark:text-neutral-300 list-disc list-inside space-y-1">
                            <li>Intensive online training in software & AI engineering</li>
                            <li>Hands-on with Python, APIs, JavaScript, Flask, SQL</li>
                          </ul>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {[
                              "Python",
                              "OpenAI API",
                              "LangChain",
                              "LLMs",
                              "Token Optimization",
                              "Text Embeddings",
                              "Streams",
                            ].map((skill, idx) => (
                              <span
                                key={skill}
                                className="inline-block bg-purple-50 dark:bg-purple-950/50 px-2.5 py-1 text-xs text-purple-800 dark:text-purple-200 font-medium rounded-md border border-purple-200 dark:border-purple-800/40 motion-safe:animate-fadeInUp hover:scale-105 hover:shadow-md hover:bg-purple-100 dark:hover:bg-purple-900/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 transition-all duration-200"
                                style={{ animationDelay: `${idx * 30}ms` }}
                                tabIndex={0}
                                role="listitem"
                                aria-label={`Skill: ${skill}`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* UP Open University */}
                    <div className="card p-5">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm">
                            UP
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">
                            University of the Philippines Open University
                          </h3>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            (Incomplete) Master of Science, Management Information Systems
                          </p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
                            Sep 2012 – Dec 2012
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Asian Development Foundation College */}
                    <div className="card p-5">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-sm">
                            AD
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">
                            Asian Development Foundation College, Philippines
                          </h3>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            Bachelor of Science - BS, Computer Science
                          </p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
                            Sep 2000 – Jun 2004
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Sidebar - Accessible + Animated */}
              <aside className="space-y-4 lg:w-80" role="complementary" aria-label="Skills">
                <div className="card p-5 md:p-6">
                  <h2 className="section-title">Skills</h2>

                  <div className="mt-4 space-y-6">
                    {Object.entries(skillCategories).map(([category, skills]) => (
                      <div key={category}>
                        <h3 className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2 tracking-tight">
                          {category}
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {skills.map((skill, idx) => (
                            <span
                              key={skill}
                              className={`
                                inline-block
                                px-2.5 py-1 text-xs font-medium rounded-md
                                border border-green-200 dark:border-green-800/40
                                bg-green-50 dark:bg-green-950/50
                                text-green-800 dark:text-green-200

                                motion-safe:animate-fadeInUp

                                transition-all duration-200 ease-out
                                hover:scale-105 hover:shadow-md hover:bg-green-100 dark:hover:bg-green-900/50
                                focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900
                              `}
                              style={{ animationDelay: `${idx * 30}ms` }}
                              tabIndex={0}
                              role="listitem"
                              aria-label={`Skill: ${skill}`}
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

          {/* Projects Section */}
          <section id="projects" className="container-grid pt-10 sm:pt-14" aria-labelledby="projects-heading">
            <div className="flex items-end justify-between gap-4">
              <h2 id="projects-heading" className="section-title">Projects</h2>
              <Link
                href="/projects"
                className="text-brand hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-neutral-900 rounded"
              >
                View all
              </Link>
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {projects.slice(0, 4).map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>

            {/* Back to Top + View All */}
            <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 rounded-md bg-brand/10 px-4 py-2 font-medium text-brand hover:bg-brand/20 transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
                  aria-label="Scroll to top of page"
                >
                  <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  Back to Top
                </button>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-md bg-brand/10 px-4 py-2 font-medium text-brand hover:bg-brand/20 transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
                >
                  <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  View All Projects
                </Link>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="cv" className="container-grid pt-10 sm:pt-14 pb-16" aria-labelledby="cv-heading">
            <div className="flex items-end justify-between gap-4">
              <h2 id="cv-heading" className="section-title">Experience</h2>
              <Link
                href="/resume"
                className="text-brand hover:underline text-sm focus:outline-none081 focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-neutral-900 rounded"
              >
                View full CV
              </Link>
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
    </>
  );
}