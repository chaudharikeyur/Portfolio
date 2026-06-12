export const portfolioData = {
  personalInfo: {
    name: "Keyur Chaudhari",
    title: "Fullstack Developer / Software Engineer",
    email: "keyurchaudhari300@gmail.com",
    phone: "+91-9834219909",
    location: "Pune, India",
    github: "https://github.com/chaudharikeyur",
    linkedin: "https://linkedin.com/in/keyurchaudhari", // standard profile naming
    summary: "High-performing Fullstack Developer with a proven record of architecting scalable microservices, optimizing database systems, and crafting responsive frontend applications. Experienced in React.js, Node.js, and cloud deployments.",
    detailedSummary: "Dynamic software engineer specializing in building high-performance web applications, scalable APIs, and real-time streaming engines. Recognized as 'Employee of the Quarter' for contributions in architecting mission-critical microservices, task pipelines, and spatial analytical tools. Passionate about system optimization, reducing API response times, and automating enterprise reporting workflows.",
  },
  education: {
    institution: "MIT World Peace University",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    gpa: "9.06 / 10",
    location: "Pune, India",
    duration: "July 2019 - July 2023",
    courses: [
      "Operating Systems",
      "Data Structures and Algorithms",
      "Web Development",
      "Database Management Systems (DBMS)"
    ]
  },
  skills: {
    languages: [
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "SQL (PostgreSQL/MySQL)", level: 88 },
      { name: "Python", level: 80 },
      { name: "C++", level: 75 },
      { name: "HTML5 / CSS3", level: 92 }
    ],
    frameworksAndLibraries: [
      { name: "React.js", level: 92 },
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Redux Toolkit", level: 88 },
      { name: "SAPUI5", level: 70 },
      { name: "Tailwind CSS", level: 95 },
      { name: "ApexCharts", level: 80 }
    ],
    backendAndMiddleware: [
      { name: "Microservices Architecture", level: 88 },
      { name: "REST APIs", level: 92 },
      { name: "Socket.io", level: 85 },
      { name: "Redis (Task Queues & Caching)", level: 82 },
      { name: "Prisma ORM", level: 85 },
      { name: "JWT Auth & RBAC", level: 90 }
    ],
    cloudAndDevOps: [
      { name: "AWS (EC2, S3)", level: 80 },
      { name: "SAP BTP (Cloud Foundry)", level: 75 },
      { name: "Docker", level: 82 },
      { name: "NGINX", level: 78 },
      { name: "Git & GitHub", level: 90 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Linux (Bash Scripting)", level: 78 }
    ],
    developerTools: [
      "Puppeteer",
      "jsPDF",
      "Postman",
      "SAP Cloud Foundry CLI",
      "pgAdmin",
      "VS Code"
    ]
  },
  experience: [
    {
      company: "Giskernel Technologies Private Limited",
      role: "Fullstack Developer",
      location: "Pune, India",
      duration: "Apr 2025 - Present",
      highlights: [
        {
          project: "E&R Platform (Microservices)",
          description: "Architected a scalable Node.js microservices architecture and implemented a Role-Based Access Control (RBAC) framework for project-level permissions. Developed the frontend using React.js and Redux Toolkit, integrating Nodemailer for automated status updates."
        },
        {
          project: "SpatioSynth Data Tool",
          description: "Developed fullstack features for the SpatioSynth spatial tool, utilizing Socket.io for real-time telemetry streaming and ApexCharts for data visualization. Containerized the backend with Docker and deployed on AWS EC2 via NGINX."
        },
        {
          project: "Backend Optimization (Agriplot)",
          description: "Optimized database and server performance by implementing Redis caching and Prisma/PostgreSQL for data modeling. Fine-tuned SQL queries and connection pooling, reducing API response times by 35% during peak usage."
        },
        {
          project: "Asynchronous Engine (Emerge)",
          description: "Engineered an asynchronous task pipeline using Redis task queues to handle high-latency operations. Integrated Puppeteer and jsPDF to generate automated enterprise reports without blocking the Node.js event loop."
        },
        {
          project: "Cloud & Security Infrastructure",
          description: "Managed hosting on AWS EC2 and handled media assets via AWS S3. Secured API endpoints with JWT authentication and maintained a structured GitHub CI/CD workflow for consistent, automated deployments."
        }
      ],
      technologies: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "Socket.io", "Redis", "Prisma", "PostgreSQL", "Docker", "AWS (EC2/S3)", "NGINX", "JWT"]
    },
    {
      company: "Initium Digital Private Limited",
      role: "Associate Software Engineer",
      location: "Pune, India",
      duration: "Mar 2024 - Mar 2025",
      highlights: [
        {
          project: "Audit Tool Fullstack Development",
          description: "Developed an enterprise audit tool using React.js and SAPUI5 for the frontend and Node.js for the backend. Refactored SQL data flows to improve UI responsiveness and reduced API latency by 35%."
        },
        {
          project: "Enterprise Cloud Orchestration",
          description: "Orchestrated application deployment on SAP BTP (Cloud Foundry), optimizing resource utilization and improving deployment speed by 30%."
        },
        {
          project: "Sales App Optimization",
          description: "Maintained the Nuvo Sales App within a CAPM-based MVC architecture, reducing production bugs by 40% through modular code refactoring and standardized UI components."
        }
      ],
      technologies: ["React.js", "Node.js", "SAPUI5", "SAP BTP", "SQL", "CAPM MVC", "Cloud Foundry"]
    },
    {
      company: "Avinash Consultancy Services",
      role: "Software Developer Intern",
      location: "Remote",
      duration: "Oct 2023 - Jan 2024",
      highlights: [
        {
          project: "Payroll Management",
          description: "Built automated payroll features for the Ratnagiri Pension System using PHP and MySQL. Integrated Google APIs for data visualization and administrative reporting."
        }
      ],
      technologies: ["PHP", "MySQL", "Google APIs", "Data Visualization"]
    }
  ],
  projects: [
    {
      title: "ChopShot – AI Image SaaS",
      timeline: "May 2024 - Jul 2024",
      role: "Lead Developer",
      summary: "Fullstack SaaS for AI-driven background removal with billing and credit system.",
      highlights: [
        "Built fullstack architecture using React.js and Node.js.",
        "Integrated AI background removal models for automated, low-latency processing.",
        "Implemented secure user accounts and session management via Clerk Auth.",
        "Integrated PostgreSQL credit system to manage scalable customer transactions."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "Clerk Auth", "PostgreSQL", "CSS Modules"],
      github: "https://github.com/chaudharikeyur", // fallback link
      live: "#"
    },
    {
      title: "YoApp – Real-time Chat Engine",
      timeline: "Mar 2024 - Apr 2024",
      role: "Fullstack Creator",
      summary: "Bi-directional real-time communication platform utilizing WebSockets.",
      highlights: [
        "Created real-time messaging pipeline utilizing Socket.io and Node.js backend.",
        "Integrated Redux Toolkit for clean, predictable client-side message state management.",
        "Designed and implemented bi-directional messaging with minimal connection overhead.",
        "Optimized client-server ping protocols to ensure low-latency communication."
      ],
      technologies: ["React.js", "Redux Toolkit", "Socket.io", "Node.js", "Express.js", "Tailwind CSS"],
      github: "https://github.com/chaudharikeyur", // fallback link
      live: "#"
    },
    {
      title: "EBloodMart – Logistics System",
      timeline: "Jan 2022 - May 2022",
      role: "Backend Architect",
      summary: "Logistics tracking system for blood donations featuring geospatial mapping.",
      highlights: [
        "Developed core logistics and routing algorithms using Django framework and Python.",
        "Integrated Google Maps API for real-time geospatial donor mapping and routing optimization.",
        "Fine-tuned SQL workflows and database tables for fast search and inventory tracking.",
        "Created reporting dashboard for local administrators to monitor blood bank supply levels."
      ],
      technologies: ["Django", "Python", "Google Maps API", "SQL", "MySQL", "Bootstrap"],
      github: "https://github.com/chaudharikeyur", // fallback link
      live: "#"
    }
  ],
  achievements: [
    {
      title: "Employee of the Quarter",
      organization: "Giskernel Technologies",
      description: "Recognized for outstanding engineering contributions, specifically for architecting and delivering critical microservices under tight deadlines."
    },
    {
      title: "Coding Proficiency",
      organization: "LeetCode & HackerRank",
      description: "Solved 350+ competitive programming problems. Achieved a peak rating of 1458 on LeetCode and active badges on HackerRank."
    },
    {
      title: "Datathon Finalist (Rank #7)",
      organization: "National Level Datathon",
      description: "Secured 7th place out of 1000+ nationwide participants, designing data models and optimizing data algorithms."
    }
  ]
};
