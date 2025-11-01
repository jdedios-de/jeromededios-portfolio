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
      "This project demonstrates my ability to architect, containerize, and deploy a full-stack solution in the AWS ecosystem—showcasing strong proficiency in DevOps, IaC, and cloud-native application development.",
    tags: ["Terraform", "EC2", "S3", "RDS", "IAC"],
    image: "/images/grocery-web.png",
    repo: "https://github.com/jdedios-de/AWS_grocery",
  },
  {
    title: "Nursing Assistant Application",
    description:
      "This repository hosts the backend for an AI-powered Nursing Assistant application, developed during the Masterschool Weiterbildung AI Engineering program. It includes API endpoints for AI functionalities such as a chatbot using Retrieval-Augmented Generation (RAG), built with a scalable and maintainable architecture.",
    tags: ["Generative AI Models", "RAG", "LLM", "FastAPI", "SQLModel", "Pydantic", "Logfire", "Loguru", "PostgreSQL", "OAuth2"],
    image: "/images/genai.png",
    repo: "https://github.com/masterschool-weiterbildung/ai_project"
  },
  {
    title: "RAG Implementations using Java Spring Boot and Python Microservice (Two Separate Projects)",
    description:
      "The FastAPI-based microservice focuses on backend infrastructure, providing user authentication, role and permission management, Redis caching, RabbitMQ event handling, and OpenTelemetry monitoring, all containerized with Docker and managed through Poetry for streamlined deployment. The Spring Boot project implements a Retrieval-Augmented Generation (RAG) system, creating intelligent, domain-specific AI applications using Spring AI and OpenAI’s GPT models, with PromptTemplate guiding responses for contexts such as bakery FAQs, legal assistance, or nursing support. Together, these projects demonstrate my ability to develop scalable, AI-powered, and well-structured microservices across both Python and Java ecosystems.",
    tags: ["API keys and JWT", "Redis Caching", "RabbitMQ", "OpenTelemetry", "Docker & Docker Compose", "Poetry", "Spring Boot", "Spring AI", ""],
    image: "/images/springboot-fastapi.png",
    repo: "https://github.com/jdedios-de/springboot-ai-chatbot",
    link: "https://github.com/jdedios-de/fastapi-microservice",
  },
  {
    title: "Instagram Clone",
    description:
      "Full-stack social media clone with React Router v7, Fastify backend, Zod validation, and comprehensive Jest TDD testing. Features include user authentication, post creation, real-time likes/comments, and responsive design.",
    tags: ["React Router v7", "Fastify", "Zod", "Jest", "TDD", "TypeScript"],
    image: "/images/insta-clone.jpg",
    link: "https://github.com/jdedios-de/insta-clone-react-frontend",
    repo: "https://github.com/jdedios-de/insta-clone-fastify-backend",
  }
];
