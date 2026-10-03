export const personalInfo = {
  name: "Subhika",
  initials: "SM",
  title: "Freelance Web Developer",
  role: "Full Stack Developer",
  status: "AVAILABLE FOR FREELANCE WORK",
  availabilityText: "Available for new projects",
  heroHeading: "Building Digital Experiences That Make an Impact.",
  heroHighlight: "Digital Experiences",
  heroDescription: "I'm a freelance web developer who builds modern, responsive and high-performance websites and web applications that help businesses turn ideas into impactful digital experiences.",
  email: "hello@example.com",
  location: "India",
  responseTime: "Within 24 hours",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com"
  }
};

export const codeSnippet = `const developer = {
  name: "Subhika",
  role: "Full Stack Developer",
  passion: "Building the Web",
  experience: "2+ Years",
  status: "Open for Projects"
};`;

export const statsData = [
  { id: 1, value: 10, suffix: "+", label: "Projects Completed", icon: "bi-check2-circle" },
  { id: 2, value: 2, suffix: "+", label: "Years Experience", icon: "bi-calendar-check" },
  { id: 3, value: 15, suffix: "+", label: "Technologies Mastered", icon: "bi-code-slash" },
  { id: 4, value: 100, suffix: "%", label: "Commitment & Quality", icon: "bi-award" },
];

export const aboutHighlights = [
  {
    icon: "bi-lightbulb",
    title: "Problem Solving",
    description: "Architecting efficient solutions to complex business requirements."
  },
  {
    icon: "bi-braces-asterisk",
    title: "Clean Code",
    description: "Writing modular, maintainable, and well-documented codebases."
  },
  {
    icon: "bi-phone",
    title: "Responsive Design",
    description: "Flawless rendering and interaction across mobile, tablet, and desktop."
  },
  {
    icon: "bi-lightning-charge",
    title: "Performance & SEO",
    description: "Lightning-fast load speeds, best practices, and search optimization."
  }
];

export const skillsData = {
  frontend: [
    { name: "HTML5", level: "Advanced", icon: "bi-filetype-html", color: "#e34f26" },
    { name: "CSS3", level: "Advanced", icon: "bi-filetype-css", color: "#264de4" },
    { name: "JavaScript", level: "Advanced", icon: "bi-filetype-js", color: "#f7df1e" },
    { name: "React", level: "Advanced", icon: "bi-filetype-jsx", color: "#61dafb" },
    { name: "Bootstrap 5", level: "Advanced", icon: "bi-bootstrap", color: "#7952b3" },
    { name: "Responsive Design", level: "Expert", icon: "bi-aspect-ratio", color: "#00d2ff" }
  ],
  backend: [
    { name: "Java", level: "Advanced", icon: "bi-cup-hot", color: "#f89820" },
    { name: "Spring Boot", level: "Proficient", icon: "bi-hdd-network", color: "#6db33f" },
    { name: "REST APIs", level: "Advanced", icon: "bi-arrow-left-right", color: "#38bdf8" },
    { name: "Node.js", level: "Proficient", icon: "bi-diagram-3", color: "#83cd29" }
  ],
  database: [
    { name: "MySQL", level: "Advanced", icon: "bi-database", color: "#4479a1" },
    { name: "MongoDB", level: "Proficient", icon: "bi-database-fill", color: "#47a248" }
  ],
  tools: [
    { name: "Git", level: "Advanced", icon: "bi-git", color: "#f05032" },
    { name: "GitHub", level: "Advanced", icon: "bi-github", color: "#ffffff" },
    { name: "VS Code", level: "Expert", icon: "bi-terminal", color: "#007acc" },
    { name: "Postman", level: "Advanced", icon: "bi-send-check", color: "#ff6c37" }
  ]
};

export const servicesData = [
  {
    id: 1,
    icon: "bi-laptop",
    title: "Web Development",
    description: "Build fast, scalable and responsive websites and web applications tailored specifically to your business goals.",
    features: ["Single Page Applications (SPA)", "Responsive Modern Layouts", "Component-Based Architecture", "Cross-Browser Compatibility"]
  },
  {
    id: 2,
    icon: "bi-palette",
    title: "UI/UX Development",
    description: "Create clean, intuitive and visually engaging user interfaces that delight users and elevate brand perception.",
    features: ["Modern Design Systems", "Interactive Animations & Micro-Interactions", "Accessibility (a11y) Standards", "Mobile-First Design"]
  },
  {
    id: 3,
    icon: "bi-layers-half",
    title: "Full Stack Development",
    description: "Develop complete frontend and backend applications with robust APIs, secure authentication, and databases.",
    features: ["RESTful API Integration", "Spring Boot & Node.js Backends", "Relational & NoSQL Databases", "Secure Auth & Session Handling"]
  },
  {
    id: 4,
    icon: "bi-speedometer2",
    title: "Website Optimization",
    description: "Improve performance, responsiveness, accessibility, and user experience for blazing-fast load times.",
    features: ["Lighthouse Performance Audit", "Bundle Size & Asset Optimization", "Core Web Vitals Tuning", "Technical SEO Best Practices"]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Freelancer Hiring Portal",
    category: "Full Stack",
    description: "A comprehensive platform connecting clients with specialized freelance talent featuring job listings, proposal workflows, milestone tracking, and user dashboards.",
    detailedDescription: "Designed and developed an end-to-end freelancer marketplace. Clients can post contracts, review applicant portfolios, and manage milestones. Freelancers can manage profiles, submit proposals, and monitor earnings. Built with high security and relational integrity.",
    technologies: ["React", "Bootstrap", "Java", "Spring Boot", "MySQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com/demo/freelancer-portal",
    badge: "Featured Full Stack",
    accentColor: "#00d2ff",
    highlights: ["Role-based access (Client/Freelancer)", "Milestone and proposal management", "RESTful Spring Boot API", "Secure token-based auth"]
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "A high-performance modern online shopping platform with intuitive product browsing, dynamic filtering, shopping cart state management, and order checkout.",
    detailedDescription: "Full-fledged e-commerce store with real-time stock tracking, product search with faceted filters, persistent cart state, payment simulation, and customer order history. Backed by Spring Boot services and optimized MySQL queries.",
    technologies: ["React", "Java", "Spring Boot", "MySQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com/demo/ecommerce-store",
    badge: "Enterprise E-Commerce",
    accentColor: "#8a2be2",
    highlights: ["Interactive cart & checkout flow", "Product category and price filtering", "Inventory management API", "Responsive product gallery"]
  },
  {
    id: 3,
    title: "Task Management Application",
    category: "Frontend",
    description: "A Kanban-style productivity and workflow tool enabling users to organize tasks, set priorities, manage deadlines, and track completion progress seamlessly.",
    detailedDescription: "An intuitive task management app featuring drag-and-drop state updates, priority labeling, deadline countdowns, search, and local storage persistence. Engineered with modular React components and responsive styling.",
    technologies: ["React", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com/demo/task-manager",
    badge: "Productivity App",
    accentColor: "#3a7bd5",
    highlights: ["Kanban column workflows", "Interactive status transitions", "Local persistence and state sync", "Keyboard accessible controls"]
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Frontend",
    description: "A bespoke, high-end developer portfolio showcasing creative UI engineering, dark mode glassmorphism aesthetics, fluid micro-interactions, and responsive layouts.",
    detailedDescription: "An award-worthy personal portfolio developed to showcase technical proficiency and eye for design. Features custom glassmorphism components, interactive project exploration, animated stats counters, and zero layout shift.",
    technologies: ["React", "CSS", "Bootstrap"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com/demo/portfolio",
    badge: "Creative Design",
    accentColor: "#00f2fe",
    highlights: ["Glassmorphism & glowing accents", "Smooth active scroll spy", "Interactive contact modal", "Mobile-optimized touch navigation"]
  },
  {
    id: 5,
    title: "Employee Management System",
    category: "Full Stack",
    description: "An enterprise administrative dashboard for managing company staff, departmental assignments, attendance records, performance metrics, and payroll reports.",
    detailedDescription: "Internal company management system that streamlines human resources operations. Includes full CRUD capabilities, pagination, department filtering, employee profile editing, and automated payroll calculations.",
    technologies: ["React", "Spring Boot", "MySQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com/demo/employee-system",
    badge: "Admin Dashboard",
    accentColor: "#6db33f",
    highlights: ["Full CRUD with validation", "Department & role filtering", "Paginated data tables with sorting", "Exportable attendance records"]
  },
  {
    id: 6,
    title: "Learning Management Platform",
    category: "Full Stack",
    description: "An interactive educational platform offering modular video courses, quiz evaluations, student enrollment tracking, and certificate generation.",
    detailedDescription: "Digital learning system built to facilitate structured online education. Features course catalogs, syllabus progression indicators, interactive multiple-choice quizzes, and instructor dashboards.",
    technologies: ["React", "Java", "Spring Boot"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com/demo/lms-platform",
    badge: "EdTech Platform",
    accentColor: "#f89820",
    highlights: ["Module-based course viewer", "Quiz assessment engine", "Student progress tracking", "Responsive multimedia layout"]
  }
];
