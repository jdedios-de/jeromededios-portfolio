export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Grocery Web Application",
    description:
      "In this project, I deployed a containerized full-stack grocery web app on AWS using Terraform for automated, scalable infrastructure provisioning. Key outcomes: production-ready setup with EC2, RDS, S3, ECS orchestration, secure networking, and JWT user auth. I learned modular Terraform configs, state management across environments, and DevOps practices like CI/CD and Auto Scaling. It reinforced cloud security, containerization, and IaC best practices while tackling challenges like subnet configs, dependencies, and ECS debugging—yielding faster, more consistent, error-free deployments.",
    tags: ["Used Terraform for Infrastructure as Code to manage EC2 and RDS resources.",
        "Managed scalable EC2 instances with automated provisioning and security via Terraform.”",
        "Set up S3 buckets for storage, backups, and Terraform state management",
        "Deployed and maintained RDS PostgreSQL databases with Terraform for secure, optimized performance"],
    image: "/images/project-placeholder.svg",
    repo: "https://github.com/jdedios-de/AWS_grocery",
  },
  {
    title: "Nursing Assistant Application",
    description:
      "Built and deployed an AI-powered Nursing Assistant backend with FastAPI, PostgreSQL, and Python, showcasing AI integration, modular APIs, and secure, scalable cloud architectures. It tackles clinical workflow issues like handoffs, reporting inconsistencies, and info gaps to boost healthcare efficiency, accuracy, and patient care. Key features: AI-driven handoffs/report generation, JWT/OAuth2 auth, Pydantic validation, modular endpoints, and Loguru/Logfire logging. Integrated SQLModel/PostgreSQL for reliable data management. As a solo Masterschool AI/Cloud project, it honed AI orchestration, secure dev, and scalable design best practices, overcoming AI integration, auth, and DB consistency challenges.",
    tags: ["Python (FastAPI): Used to build a modular, high-performance backend API with dependency injection for maintainable and testable code.", "SQLModel / PostgreSQL: Used for object-relational mapping and persistent data storage to reliably manage patient records and application data.", "Pydantic: Applied for data validation to ensure all API requests and responses are clean, consistent, and error-free.", "OAuth2: Implemented authentication to securely control user access and protect sensitive healthcare data.", "Generative AI & RAG: Integrated AI-powered chat and report generation to assist nurses with patient interactions and documentation.", "Logfire & Loguru: Configured structured logging and monitoring to track application behavior and ensure operational reliability."],
    image: "/images/project-placeholder.svg",
    repo: "https://github.com/masterschool-weiterbildung/ai_project"
  },
  {
    title: "RAG System – Java & Python Microservices",
    description:
      "Built two solo backend projects showcasing scalable API design and AI integration: a FastAPI Microservice and a Spring Boot AI Chatbot. The FastAPI Microservice features modular, async endpoints with dependency injection and RESTful patterns for maintainable, testable microservices—using FastAPI for high-performance APIs, Docker containerization, PostgreSQL/SQLModel storage, and Pydantic validation, plus service routing, auth, and clean separation of concerns. The Spring Boot AI Chatbot combines Spring Boot/Spring AI with OpenAI GPT models for domain-specific chats (e.g., bakery, legal, health assistants), built on Java 17, PromptTemplate, and Maven with a /chat endpoint, modular configs, and easy domain switching. Together, they honed API orchestration, containerization, AI integration, and prompt engineering across Python/Java ecosystems.",
    tags: ["FastAPI: Used to build lightweight, high-performance APIs with asynchronous endpoints and dependency injection for modular, scalable microservices.",
           "Docker: Used to containerize the microservices, ensuring consistent environments and simplifying deployment and orchestration.",
           "PostgreSQL / SQLModel: Used for reliable, persistent data storage and object-relational mapping to simplify database operations within the microservice architecture.",
           "Pydantic: Applied for strict data validation and type enforcement, ensuring clean, predictable API requests and responses.",
           "Spring Boot: Used to develop structured RESTful APIs in Java with minimal configuration and strong scalability for the AI chatbot service.",
           "Spring AI & OpenAI API: Integrated to enable AI-powered conversational features and prompt-based interactions across multiple business domains.",
           "PromptTemplate: Used to manage dynamic prompt construction for flexible and reusable AI responses.",
           "Maven: Used for dependency management and project build automation within the Spring Boot chatbot application.",],
    image: "/images/project-placeholder.svg",
    repo: "https://github.com/jdedios-de/springboot-ai-chatbot",
    link: "https://github.com/jdedios-de/fastapi-microservice",
  },
  {
    title: "Instagram Clone",
    description:
      "Built a scalable, maintainable Instagram-like full-stack app: React + TypeScript for modular, type-safe component-driven UI; TailwindCSS for responsive utility styling; React Router for seamless navigation. Used Vite for fast builds/HMR and Docker for containerized deployment. Backend: Fastify for high-performance Node.js APIs, MongoDB for flexible data persistence, and JWT for secure sessions. This stack enables efficient, cross-environment scaling and development.",
    tags: ["React (with TypeScript): Used to build a dynamic, component-based frontend with type safety, improving code reliability and maintainability.",
           "TailwindCSS: Used for responsive, utility-first styling to create a clean, modern user interface with minimal custom CSS.",
           "React Router: Implemented to manage client-side navigation smoothly between pages such as feed, profile, and login.",
           "Vite: Used for fast development builds and hot module reloading, accelerating frontend iteration and testing.",
           "Docker: Used to containerize both frontend and backend, ensuring consistent builds and seamless deployment across environments.",
           "Fastify: Chosen for its high performance and low overhead in handling API requests, ideal for real-time data interactions.",
           "JWT (JSON Web Token): Implemented for secure, stateless user authentication across frontend and backend services."],
    image: "/images/project-placeholder.svg",
    link: "https://github.com/jdedios-de/insta-clone-react-frontend",
    repo: "https://github.com/jdedios-de/insta-clone-fastify-backend",
  }
];
