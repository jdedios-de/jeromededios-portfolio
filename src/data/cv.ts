export type CvArticle = {
  title: string;
  org?: string;
  orgwebsite?: string;
  orglinkedIn?: string;
  location?: string;
  department?: string;
  period?: string;
  bullets: string[];
  tags?: string[];
  type: 'work' | 'education';
};

export const cvArticles: CvArticle[] = [
  {
    title: 'Software and Cloud Engineer',
    org: 'https://www.webeet.io',
    location: 'Remote',
    period: 'September 2025 - November 2025',
    bullets: [
      'Full-Stack Application Development: Developed and enhanced web application features using TypeScript, Node.js, Fastify, React, and React Router, building maintainable frontend interfaces and backend services.',
      'Test-Driven Development (TDD): Applied test-driven development practices and Jest to validate application behavior, identify defects early, and improve code reliability and maintainability.',
      'Secure Application Architecture: Implemented application functionality with a focus on authentication, data isolation, secure access, and reliable request handling.',
      'AI Workflow Automation: Integrated AI APIs with n8n workflows to automate complex tasks, streamline business processes, and support AI-powered application functionality.',
      'Cloud Infrastructure & Deployment: Worked with AWS cloud services and Terraform to support infrastructure provisioning, application deployment, and repeatable environment configuration.',
      'CI/CD & Application Improvement: Supported continuous integration and deployment workflows, testing, monitoring, and iterative application enhancements to improve delivery efficiency and system reliability.',
    ],
    tags: ['TypeScript, JavaScript, Node.js, Fastify, React, React Router, Jest, AWS, Terraform, n8n, AI APIs, TDD, CI/CD.'],
    type: 'work',
  },
  {
    title: 'Professional Development – Software Engineering & Generative AI',
    org: 'https://joinmsit.de',
    location: 'Remote',
    period: 'December 2023 - September 2025',
    bullets: [
      'Software Engineering & Programming: Completed intensive software engineering training focused on Python, JavaScript, API development, Flask, SQL, and the development of practical software applications.',
      'Generative AI & AI Engineering: Developed practical knowledge of integrating AI capabilities into software applications, working with AI APIs, and applying generative AI concepts through hands-on projects.',
      'Backend Development & Database Integration: Built and practiced backend application functionality involving API communication, server-side logic, and relational database operations using SQL.',
      'Practical Projects & Technical Problem-Solving: Applied programming concepts through project-based learning, strengthening software design, debugging, testing, and application development skills.',
      'German Language & Professional Integration: Continuously developing German language proficiency and adapting to the German professional environment to strengthen communication and employment opportunities.',
    ],
    tags: ['Python, JavaScript, SQL, Flask, REST APIs, Generative AI, AI API Integration,'],
    type: 'education',
  },
  {
    title: 'Senior Application Support Engineer (IT Operations)',
    org: 'https://sportserve.co/ / Bayview Technologies, Inc',
    orglinkedIn: 'https://www.linkedin.com/company/sportserve-group/posts/',
    location: 'Makati City, Philippines (Hybrid)',
    period: 'November 2021 - November 2023 (2 Years)',
    bullets: [
      'Sportsbook Application Support: Provided technical and production support for sportsbook platforms, including NextBet and Dafabet, helping maintain application availability, operational stability, and a consistent user experience.',
      'Incident Management & Resolution: Investigated, prioritized, and resolved technical incidents and service requests, diagnosing application errors and minimizing service disruption in a 24/7 operational environment.',
      'Advanced Troubleshooting & Root-Cause Analysis: Analyzed application logs, monitoring alerts, system behavior, and relevant data to identify root causes, implement corrective actions, and prevent recurring issues.',
      'Application Performance Monitoring: Used AppDynamics to investigate application errors, slow response times, and performance degradation, supporting end-to-end troubleshooting and service health monitoring.',
      'Log Analysis & Observability: Utilized the Elastic Stack (ELK) to search, filter, and analyze application logs, correlate error patterns, and investigate incidents. Used Grafana dashboards and Icinga monitoring alerts to assess application and infrastructure health.',
      'Python & Groovy Scripting: Utilized Python and Groovy to support troubleshooting, automate repetitive operational tasks, and improve application support workflows, where applicable.',
      'Development Team Collaboration: Collaborated with Java developers, QA engineers, infrastructure teams, and other stakeholders to escalate complex defects, investigate application behavior, validate fixes, and coordinate incident resolution.',
      'Software Release & Change Support: Assisted with testing, validating, and deploying application updates, performing post-release checks to identify regressions and maintain compatibility and production stability.',
      'Knowledge Base & Technical Documentation: Documented incidents, troubleshooting procedures, known issues, workarounds, and resolutions to improve knowledge sharing, accelerate incident handling, and support consistent operational practices.',
      'Continuous Improvement: Identified recurring incidents and operational pain points, recommending improvements to monitoring, troubleshooting procedures, documentation, and support processes.',
    ],
    tags: ['Python, Groovy, Shell Scripting', 'AppDynamics, Grafana, Elastic Stack, Kibana, Icinga', 'Linux, Command-Line Troubleshooting'],
    type: 'work',
  },
  {
    title: 'Site Reliability Engineer (IT Operations)',
    org: 'https://sportserve.co/ / Bayview Technologies, Inc',
    orglinkedIn: 'https://www.linkedin.com/company/sportserve-group/posts/',
    location: 'Makati City, Philippines',
    period: '00.09.2019 to 00.11.2021 (2 Years 3 Months)',
    bullets: [
      'Sportsbook Platform Reliability: Supported and maintained production sportsbook platforms, including NextBet and Dafabet, helping ensure service availability, operational stability, and a consistent customer experience.',
      'Service Reliability & Performance Monitoring: Monitored sportsbook service health and performance using Service Level Indicators (SLIs) and Service Level Objectives (SLOs), supporting reliability targets, service quality, and proactive identification of operational risks.',
      'Monitoring & Alerting Automation: Built, maintained, and enhanced monitoring dashboards, alerting configurations, and operational checks across the sportsbook application stack using tools such as ELK Stack, Grafana, AppDynamics, PRTG, and Icinga.',
      'Automation & Self-Healing: Developed and maintained Bash and Python scripts to automate routine operational tasks, streamline troubleshooting, and support automated recovery of recurring sportsbook application issues where appropriate.',
      'Infrastructure Configuration & Deployment Automation: Utilized Ansible, Jenkins, Git, and shell scripting to support infrastructure configuration, operational automation, deployment workflows, and repeatable application delivery processes.',
      'Production Incident Management: Investigated production incidents, analyzed application logs and monitoring alerts, performed root-cause analysis, and coordinated troubleshooting with development, infrastructure, and third-party service teams to minimize service disruption.',
      'Post-Incident Reviews & Continuous Improvement: Participated in post-incident reviews, documented findings, and followed through on corrective actions to improve monitoring coverage, operational procedures, incident response, and service reliability.',
      'Sports Trading Team Collaboration: Worked closely with sportsbook trading teams and other business stakeholders to investigate operational issues, coordinate incident resolution, and maintain effective communication between technical and business teams.',
      'Change Management & Release Coordination: Followed established change management procedures during deployments and production implementations, assessing operational risks and performing post-deployment checks to maintain system stability.',
      'Service Transition & Production Readiness: Collaborated with development and IT operations teams during service transition, validating operational readiness, monitoring requirements, support documentation, and incident-handling procedures before production handover.',
      '24/7 Operations & On-Call Support: Supported a continuously operating sportsbook business, participating in on-call rotations, responding to alerts, and troubleshooting critical incidents under time-sensitive conditions.',
      'API & Web Application Monitoring: Monitored web-based applications, REST APIs, and external service dependencies to identify availability, connectivity, and performance issues affecting sportsbook functionality.',
      'Technical Documentation & Knowledge Sharing: Maintained operational documentation, troubleshooting procedures, and support knowledge to improve team readiness, incident response, and ongoing service maintenance.',
    ],
    tags: ['Python, Bash, Shell Scripting, SQL, Linux, SSH', 'ELK Stack, Kibana, Grafana, AppDynamics, ' +
          'PRTG, Icinga, Synthetic Monitoring', 'Ansible, Jenkins, Git, Deployment Automation, Configuration Management',
          'Site Reliability Engineering, SLI/SLO Monitoring, Incident Response, Root-Cause Analysis, On-Call Support, Change Management'],
    type: 'work',
  },
  {
    title: 'Product Operations Specialist (Sportsbook - IT Operations)',
    org: 'https://sportserve.co/ / Bayview Technologies, Inc',
    orglinkedIn: 'https://www.linkedin.com/company/sportserve-group/posts/',
    location: 'Makati City, Philippines',
    period: 'September 2017 – September 2019 (2 Years)',
    bullets: [
      'Sportsbook Production Support: Provided specialized production support for sportsbook platforms, monitoring application health, investigating operational issues, and helping maintain service availability and business continuity.',
      'Incident Triage & Escalation Management: Managed incident tickets by identifying, assessing, prioritizing, and escalating application defects and production issues to the appropriate development, infrastructure, or third-party support teams. Followed incidents through investigation and resolution.',
      'Production & Staging Environment Support: Supported both production and staging environments by troubleshooting application issues, validating system behavior, assisting internal teams, and coordinating corrective actions to maintain operational stability.',
      'Log Analysis & Application Monitoring: Analyzed Kibana logs and AppDynamics alerts to identify application errors, investigate abnormal behavior, detect performance degradation, and support root-cause analysis of production incidents.',
      'Synthetic Monitoring & Availability Checks: Configured and utilized Catchpoint monitoring scripts to check application availability, assess performance, and identify potential service disruptions affecting sportsbook functionality and user experience.',
      'Third-Party API & Payment Monitoring: Configured and maintained PRTG Remote Probes and web-server sensors to monitor the availability and responsiveness of third-party APIs and payment services, helping detect connectivity issues and service degradation.',
      'Deployment Planning & Operational Readiness: Prepared and coordinated deployment plans, supported release activities, and performed monitoring checks before and after deployments to identify potential issues and maintain service stability.',
      'Cross-Functional Incident Resolution: Collaborated with developers, infrastructure engineers, business stakeholders, and external service providers to investigate incidents, coordinate fixes, communicate operational status, and minimize service disruption.',
      'SQL-Based Investigation & Data Validation: Utilized SQL to investigate data-related issues, validate records, and support troubleshooting of application and transaction-related incidents, where required.',
    ],
    tags: ['Kibana, AppDynamics, Catchpoint, PRTG Network Monitor', 'Production Support, Incident Triage, Escalation Management, Root-Cause Analysis, Release Monitoring', 'API Availability, Third-Party Integrations, Payment Services, Synthetic Monitoring, Performance Monitoring'],
    type: 'work',
  },
  {
    title: 'Java Developer / OpenESB Developer (IT Development)',
    org: 'https://sportserve.co/ / Bayview Technologies, Inc',
    orglinkedIn: 'https://www.linkedin.com/company/sportserve-group/posts/',
    location: 'Makati City, Philippines',
    period: '11.05.2015 to 00.09.2017 (1 Year 10 Months)',
    bullets: [
      'Java-Based Web Scraping Application: Designed and developed a Java application using the jsoup HTML ' +
      'parsing library to retrieve, parse, and extract relevant data from web pages, improving the efficiency ' +
      'of data collection and processing.',
      'OpenESB Integration Development: Developed custom Java handlers and integration components within OpenESB ' +
      'to enhance communication between enterprise applications, improve interoperability, and facilitate data ' +
      'exchange between connected systems.',
      'Middleware Application Development & Maintenance: Developed, maintained, and enhanced middleware ' +
      'applications using OpenESB, supporting integration workflows and reliable ' +
      'communication between disparate software systems and services.',
      'Enterprise Service Integration & Backend Architecture: Designed and configured OpenESB services to integrate multiple remote systems and backend components, supporting service orchestration, data exchange, and end-to-end business process integration.',
      'Performance & Load Testing: Designed and executed Apache JMeter load test plans to evaluate application performance under varying workloads. Analyzed test results to identify potential bottlenecks and assess system responsiveness, stability, and scalability.',
      'System Testing & Troubleshooting: Investigated integration issues, debugged Java components, and supported functional and integration testing to identify defects and improve the reliability of middleware services.',
    ],
    tags: ['Java Core, jsoup, HTML Parsing, Web Data Extraction', 'OpenESB, Java Handlers, Enterprise Application Integration, Backend Services', 'Apache JMeter, Load Testing, Performance Analysis, Integration Testing', 'Java'],
    type: 'work',
  },
  {
    title: 'JEE Developer / Analyst (IT Development)',
    org: 'Salmat Philippines, satellite office of Salmat AU',
    orglinkedIn: 'https://www.linkedin.com/company/salmat/home/',
    location: 'Taguig City, Metro Manila, Philippinen',
    period: '12.03.2012 to 30.01.2015 (2 Years 10 Months)',
    bullets: [
      'Agile Development & Scrum Collaboration: Participated in Agile software development using ' +
      'the Scrum framework, collaborating with cross-functional teams to deliver iterative ' +
      'enhancements, resolve technical issues, and meet sprint commitments and project deadlines.',
      'Java / J2EE Application Development and Maintenance: Developed, maintained, and supported ' +
      'Java-based enterprise web applications, web services, and user interfaces, ensuring application stability, ' +
      'functionality, and alignment with business requirements.',
      'Production Support & Incident Resolution: Investigated and resolved production incidents, technical defects, ' +
      'and service tickets, performing root-cause analysis and implementing corrective actions to minimize downtime ' +
      'and maintain business continuity.',
      'Software Testing & Quality Assurance: Conducted functional and regression testing of application enhancements ' +
      'and bug fixes, identifying defects early and validating solutions to improve software quality and ensure timely ' +
      'delivery.',
      'Business Analyst Collaboration: Worked closely with Business Analysts to clarify business requirements, analyze ' +
      'reported issues, investigate application defects, and implement appropriate fixes and enhancements aligned with ' +
      'operational needs.',
      'Phantom Application Integration: Contributed to the integration and maintenance of a backend Phantom application ' +
      'comprising multiple interconnected subsystems supporting Business Process Outsourcing (BPO) operations, ' +
      'particularly mailbox delivery services for clients in Australia. Supported subsystem coordination and ' +
      'application functionality to facilitate reliable business processes and service delivery.',
      'Continuous Integration & Delivery: Worked within software development and delivery workflows supporting ' +
      'continuous integration and continuous delivery (CI/CD), helping maintain application quality and streamline' +
      'development and release activities.',
      'Atlassian Tools & Project Collaboration: Utilized Atlassian development and project collaboration tools ' +
      'to support issue tracking, team coordination, development task management, and software delivery workflows.',
    ],
    tags: ['Java', 'J2EE', 'Web Applications', 'Web Services', 'Agil', 'Scrum', 'Sprint Planning', 'Defect Resolution',
    'CI/CD', 'Atlassian Jira', 'Confluence', 'Bitbucket', 'Production Support', 'oot-Cause Analysis', 'Regression Testing', 'System Integration'],
    type: 'work',
  },
  {
    title: 'Java Web Developer (IT Development)',
    org: 'Intevalue Services Inc.',
    orglinkedIn: 'https://www.linkedin.com/company/intevalue-services-inc-/posts/',
    location: 'RCBC Plaza, Ayala Ave, Makati, 1200 Metro Manila, Philippinen',
    period: '20.09.2010 to 10.03.2012 (2 Years 1 Month)',
    bullets: [
      'Online Gaming Website Development: Designed, developed, and maintained online gaming websites, ' +
      'including customer-facing applications and back-office systems, ensuring reliable platform ' +
      'operations and efficient business processes.',
      'Backend Development & Database Programming: Utilized Java, Spring, Struts 2, ' +
      'Oracle PL/SQL, and SQL to develop and maintain application features, database logic, ' +
      'stored procedures, and triggers supporting core gaming platform operations.',
      'Transaction Processing & Automation: Developed and maintained PL/SQL stored procedures and ' +
      'database triggers to automate business processes associated with deposits, withdrawals, ' +
      'customer account updates, and other monetary transactions. Implemented event-driven database ' +
      'logic to execute specific procedures when defined transaction-related database operations occurred.',
      'Database Triggers & Business Logic: Implemented and maintained database triggers to respond to relevant INSERT, ' +
      'UPDATE, and DELETE operations, invoking appropriate PL/SQL procedures to perform validation, ' +
      'update related records, maintain transaction consistency, and support business rules.',
      'Customer Account & Financial Transactions: Contributed to the development of customer registration, ' +
      'account management, deposits, withdrawals, promotional campaigns, and related transaction workflows, ' +
      'ensuring accurate data processing and reliable system functionality.',
    ],
    tags: ['Java, Spring Framework, Apache Struts 2', 'SQL, Oracle PL/SQL, Stored Procedures, ' +
    'Database Triggers', 'Online Gaming, Customer Accounts, Deposits and Withdrawals, Promotional Campaigns'],
    type: 'work',
  },
  {
    title: 'Junior Software Engineer (IT Development)',
    org: 'AC Corporation',
    orgwebsite: 'http://ac-corporation.com.ph/public/',
    orglinkedIn: 'https://www.linkedin.com/company/ac-corporation//',
    department: 'IT Development',
    location: 'Muntinlupa, Metro Manila, Philippinen',
    period: '02.12.2008 to 20.09.2010 (1 Year 9 Months)',
    bullets: [
      'Agile Development & Pair Programming: Collaborated in Agile software development, participating ' +
      'in pair programming, feature enhancements, and the development of Research & Development (R&D) ' +
      'and demonstration applications with hardware integration to meet business requirements and project deadlines.',
      'Java Web Services Development: Developed, maintained, and optimized JAX-WS web services using Java and NetBeans IDE, ' +
      'implementing business process change requests, improving service functionality, and troubleshooting application ' +
      'issues to ensure reliable system integration.',
      'Hibernate ORM & Database Integration: Utilized Hibernate Object-Relational Mapping (ORM) to integrate ' +
      'Java applications and web services with relational databases, implementing data persistence, ' +
      'object-to-table mappings, database operations, and data retrieval functionality.',
      'SMS Gateway & Wavecom Modem Integration: Integrated Wavecom SMS modems into Java-based applications ' +
      'to support SMS communication and automated messaging workflows. Utilized AT commands to configure ' +
      'modem operations, manage SMS transmission and reception, and troubleshoot modem communication issues.',
      'Java ME Mobile Application Development: Developed and maintained mobile applications using Java ME (J2ME) ' +
      'for Nokia mobile devices running Symbian OS, implementing application logic and mobile functionality for ' +
      'legacy mobile platforms.',
      'EDST Project – Bureau of Internal Revenue: Contributed to the EDST project at the Bureau of Internal Revenue (BIR), ' +
      'participating in User Acceptance Testing (UAT), investigating reported issues, and performing data-fixing activities ' +
      'to improve data accuracy, application reliability, and system readiness for deployment.',
      'Technical Support & Troubleshooting: Provided technical support to clients by investigating ' +
      'and resolving application issues, particularly payment processing and printing-related problems. ' +
      'Diagnosed software defects, analyzed system behavior, and coordinated corrective actions to minimize ' +
      'operational disruptions.',
      'Database & System Administration: Assisted with database administration and troubleshooting. Performed system administration tasks ' +
      'involving system configuration, resource monitoring, and environment maintenance to support stable ' +
      'application operations.',
      'Service Request & Change Management: Managed client service requests, incident reports, and change requests, ' +
      'assessing priorities, investigating technical issues, implementing approved changes, and supporting post-deployment ' +
      'operations to maintain system stability and customer satisfaction.',
      'Application Maintenance & Quality Assurance: Investigated and resolved JavaScript and Apache Velocity template issues, ' +
      'supported regression and integration testing, and collaborated with development and QA teams to validate enhancements ' +
      'and maintain application quality.'
    ],
    tags: ['Agile Application Development', 'JAX-WS, SOAP web services', 'Java Core', 'Web Services',
      'Hibernate ORM',	'Java', 'Java ME (J2ME)', 'JavaScript', 'SQL', 'Nokia mobile devices', 'Symbian OS',
      'Wavecom SMS modem', 'AT commands', 'SMS integration', 'pair programming', 'UAT', 'integration testing',
      'Database administration', 'system administration', 'troubleshooting', 'change management'],
    type: 'work',
  },
];


