export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  filename: string;
};

export const certificates: Certificate[] = [
  {
    title: "Intro to Machine Learning",
    issuer: "kaggle",
    date: "December 2025",
    description:
      "An introductory course on how machine learning models recognize patterns and make predictions, starting with decision trees and applied through a practical real-estate pricing scenario.",
    tags: ["kaggle", "Machine Learning", "ML"],
    image: "",
    link: "/images/certificates/Jerome de Dios - Intro to Machine Learning.png",
    filename: "Jerome de Dios - Intro to Machine Learning.png"
  },
  {
    title: "Introduction to LangGraph",
    issuer: "LangChain",
    date: "June 2025",
    description:
      "A foundational course that teaches the basics of LangGraph, a low-level framework for building and orchestrating stateful, complex agent workflows with LLMs. Through guided modules and hands-on notebooks, learners explore core concepts like graph structure, state and memory, human-in-the-loop interactions, and deployment using LangSmith Studio.",
    tags: ["LangChain", "LangGraph", "LLM"],
    image: "",
    link: "/images/certificates/Jerome de Dios - LangGraph.pdf",
    filename: "Jerome de Dios - LangGraph.pdf"
  },
  {
    title: "Introduction to LangSmith",
    issuer: "LangChain",
    date: "June 2025",
    description:
      "An introductory overview of LangSmith, a unified platform for building production-ready large-language-model (LLM) applications. LangSmith helps developers debug, test, evaluate, and monitor LLM workflows with detailed traces and performance insights, making it easier to iterate and ship reliable AI systems. It works seamlessly with LangChain tooling but can be used with any LLM application.",
    tags: ["LangSmith", "Evaluate", "Debug", "LLM"],
    image: "",
    link: "/images/certificates/Jerome de Dios - LangSmith.pdf",
    filename: "Jerome de Dios - LangSmith.pdf"
  },
  {
    title: "RH124 Linux System Administration I",
    issuer: "Microgenesis - Certified Training Center",
    date: "November 2016",
    description:
      "A foundational Red Hat training that teaches essential Linux system administration skills, including command‑line usage, file and user management, networking basics, and service configuration on RedHat Enterprise Linux. Upon completion, participants receive a certificate of attendance confirming their participation in this core administration course, which prepares them for further advanced learning or professional DevOps/SysAdmin roles.",
    tags: ["Linux", "System Administration", "RH124", "RedHat"],
    image: "",
    link: "/images/certificates/Jerome de Dios - RH124 Linux System Administration I.pdf",
    filename: "Jerome de Dios - RH124 Linux System Administration I.pdf"
  }
,
  {
    title: "Software Engineering Training",
    issuer: "University of the Philippines, Information Technology Training Center",
    date: "March 2010",
    description:
      "A professional IT training program offered by the University of the Philippines Information Technology Training Center (UP ITTC). This center delivers practical and industry-relevant courses in information technology, including software engineering and other ICT skills, designed to equip learners with hands-on technical knowledge for software development and related IT careers. UP ITTC is known for its quality IT education and training initiatives in the Philippines.",
    tags: ["UP", "Software Engineering", "UPIT"],
    image: "",
    link: "/images/certificates/Jerome de Dios - UP - Software Engineering.pdf",
    filename: "Jerome de Dios - UP - Software Engineering.pdf"
  }
];