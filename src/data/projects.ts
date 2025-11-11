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
      "Through this project, I successfully deployed a fully containerized full-stack grocery web application on AWS with Terraform, achieving automated, scalable, and repeatable infrastructure provisioning. Key outcomes included a reliable, production-ready cloud environment with EC2, RDS, S3, and ECS fully orchestrated, secure networking, and JWT-based authentication for users. I learned to design modular Terraform configurations, manage state across environments, and integrate DevOps practices such as CI/CD and Auto Scaling. The project reinforced best practices in cloud security, containerization, and IaC while overcoming challenges such as configuring private/public subnets, handling Terraform dependencies, and debugging ECS deployments. As a result, the deployment process became faster, more consistent, and scalable, reducing manual errors and improving infrastructure reliability. The project is available on GitHub: AWS_grocery, with live deployment and demo steps included in the repo.",
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
      "Built and deployed an AI-powered Nursing Assistant application backend using FastAPI, PostgreSQL, and Python, demonstrating practical application of AI integration, modular API design, and secure, scalable cloud-ready architectures. The project addresses challenges in clinical workflows, such as time-consuming handoffs, inconsistent reporting, and information gaps, helping healthcare staff improve efficiency, accuracy, and patient care. Key features include AI-assisted patient handoffs and report generation, JWT/OAuth2-based authentication, Pydantic-driven data validation, modular API endpoints, and structured logging with Loguru/Logfire for monitoring. Implemented relational database integration with SQLModel/PostgreSQL, ensuring persistent, reliable data management. Completed individually as part of the Masterschool AI/Cloud track, the project reinforced best practices in AI integration, secure backend development, and scalable architecture, overcoming challenges such as AI-model orchestration, authentication management, and database consistency. GitHub repo: AI Project Nursing Assistant.",
    tags: ["Python (FastAPI): Used to build a modular, high-performance backend API with dependency injection for maintainable and testable code.", "SQLModel / PostgreSQL: Used for object-relational mapping and persistent data storage to reliably manage patient records and application data.", "Pydantic: Applied for data validation to ensure all API requests and responses are clean, consistent, and error-free.", "OAuth2: Implemented authentication to securely control user access and protect sensitive healthcare data.", "Generative AI & RAG: Integrated AI-powered chat and report generation to assist nurses with patient interactions and documentation.", "Logfire & Loguru: Configured structured logging and monitoring to track application behavior and ensure operational reliability."],
    image: "/images/project-placeholder.svg",
    repo: "https://github.com/masterschool-weiterbildung/ai_project"
  },
  {
    title: "RAG System – Java & Python Microservices",
    description:
      "Built two individual backend projects demonstrating expertise in scalable API design and AI integration: a FastAPI Microservice and a Spring Boot AI Chatbot. The FastAPI Microservice showcases a modular architecture with asynchronous endpoints, dependency injection, and RESTful design to solve challenges in building maintainable, testable microservices. It uses FastAPI for high-performance APIs, Docker for containerization, PostgreSQL/SQLModel for persistent storage, and Pydantic for strict data validation—featuring service-based routing, authentication, and clean separation of concerns. The Spring Boot AI Chatbot integrates Spring Boot and Spring AI with OpenAI’s GPT models to enable customizable domain-specific conversations (e.g., bakery, legal, health assistants). It leverages Java 17, PromptTemplate, and Maven to create flexible, structured RESTful APIs with a /chat endpoint for AI responses and modular configurations for easy domain switching. Together, these projects strengthened skills in API orchestration, containerization, AI model integration, and prompt engineering, demonstrating versatility across Python and Java ecosystems",
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
      "Used React with TypeScript for building a modular, component-driven UI with type safety. Employed TailwindCSS for responsive, utility-first styling and React Router for seamless navigation and routing. Integrated Vite for fast builds and HMR during development, and Docker for containerized deployment across environments. On the backend, used Fastify for its high-performance Node.js framework, MongoDB for document-based data persistence, and JWT authentication for secure user sessions. Together, these tools support a scalable, maintainable Instagram-like full-stack application.",
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
