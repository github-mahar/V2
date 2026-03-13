// ============================================================
// THE CYBER-TERMINAL — STRUCTURED DATA
// Source: Phase 1 Interview (User-Provided Content Only)
// No placeholder content. No auto-generated filler.
// ============================================================

// ---------------------
// TYPES
// ---------------------

export interface Identity {
  fullName: string;
  displayName: string;
  title: string;
  tagline: string;
  status: string;
  availability: string;
}

export interface SystemInfo {
  professionalSummary: string;
  corePhilosophy: string[];
  differentiators: string[];
  yearsOfExperience: string;
  industries: string[];
}

export interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  role: string;
  techStack: string[];
  liveUrl: string | null;
  githubUrl: string;
  screenshot: string | null;
}

export interface Skill {
  name: string;
  category: "primary" | "supporting" | "tools";
}

export interface ExperienceEntry {
  company: string;
  role: string;
  duration: string;
  isCurrent: boolean;
  description?: string[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  preferredMethod: string;
  availabilityNote: string;
}

export interface SiteConfig {
  logoPath: string;
  profileImagePath: string;
  aesthetic: string;
  soundEffects: boolean;
  themeToggle: boolean;
}

// ---------------------
// IDENTITY
// ---------------------

export const identity: Identity = {
  fullName: "Mahar Ghulam Muhammad",
  displayName: "Mahar GM",
  title: "Web Developer || Front End Developer",
  tagline: "One-Line At a time",
  status: "Freelance",
  availability: "Open for freelance",
};

// ---------------------
// SYSTEM_INFO (About)
// ---------------------

export const systemInfo: SystemInfo = {
  professionalSummary:
    `I am a Frontend Developer and BS Computer Science student specializing in building responsive, high-performance web applications across real-world production environments. My expertise combines modern frontend development with practical API integration, allowing me to bridge clean UI implementation with real functional impact. I focus on component-driven interfaces, structured layouts, and performance-driven design that enhances both usability and user experience.

Alongside core frontend technologies, I work extensively with React.js and JavaScript ES6+ — from translating Figma/Adobe XD mockups into pixel-perfect components to integrating REST APIs and handling dynamic data rendering. I build modular, maintainable code, manage cross-browser compatibility, and structure interfaces to ensure clarity, speed, and seamless user journeys.

I approach every interface as a performance system. From layout hierarchy and content structure to Lighthouse optimization and responsive design, every decision is made with measurable quality in mind. My priority is delivering scalable, clean frontend experiences that balance aesthetics with functionality.

I don't just write interfaces — I engineer the layer between users and products. Every project I contribute to is built for stability, speed, and long-term technical health.`,

  corePhilosophy: [
    "Code is architecture; every function has purpose.",
    "Performance and scalability are first-class concerns.",
    "Maintainability and readability are non-negotiable.",
    "Automation, modularity, and clean workflows reduce complexity.",
    "Continuous improvement through testing, monitoring, and iteration.",
    "Systems thinking drives all development decisions.",
  ],

  differentiators: [
    "I focus on building structured, scalable systems, not just features.",
    "I prioritize maintainable, readable, and reusable code.",
    "I design with deployment, performance, and edge-case handling in mind.",
    "I avoid generic copy-paste solutions; each project has a deliberate architecture.",
    "I treat debugging, optimization, and testing as integral parts of design, not afterthoughts.",
  ],

  yearsOfExperience: "1.5+",
  industries: ["Web Development", "Front-end Development"],
};

// ---------------------
// PROJECT_ARCHIVE
// ---------------------

export const projects: Project[] = [
  {
    id: "ezzcode",
    name: "EzzCode",
    type: "Web Platform",
    description:
      "EzzCode is a comprehensive tech training and internship platform designed to transform beginners into job-ready developers. The platform offers industry-leading training programs, verifiable certificates, and real-world project experience with mentorship from experienced professionals.",
    role: "Developer",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Lucide React",
    ],
    liveUrl: "https://ezzcode.online/",
    githubUrl: "https://github.com/github-mahar/EzzCode",
    screenshot: null,
  },
  {
    id: "aliyans-portfolio",
    name: "Aliyan's Portfolio",
    type: "Portfolio Website",
    description:
      "Portfolio to showcase my client's professional skills.",
    role: "Developer",
    techStack: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
    ],
    liveUrl: "https://aliyan-portfolio-chi.vercel.app/",
    githubUrl: "https://github.com/github-mahar/Aliyan_Portfolio",
    screenshot: null,
  },
  {
    id: "rabin-matcher",
    name: "Rabin Matcher",
    type: "Web Application",
    description:
      "Client-side plagiarism detection tool. It showcases how computationally intensive tasks can be efficiently handled on the client side for educational and demonstrative purposes. (University Project)",
    role: "Developer",
    techStack: [
      "React 18+",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "ESLint",
      "PostCSS",
    ],
    liveUrl: "https://rabin-matcher-react-app.vercel.app/",
    githubUrl: "https://github.com/github-mahar/rabinMatcherReactApp",
    screenshot: null,
  },
  {
    id: "indexwise-research",
    name: "IndexWise Research",
    type: "Website",
    description:
      "IndexWise Research is a modern, responsive website that provides academic research services, specifically targeting English Literature research needs. It leverages Tailwind CSS for utility-first styling, custom CSS for branding, and is structured for easy static deployment.",
    role: "Developer",
    techStack: ["HTML", "CSS", "Tailwind CSS", "Vite", "Node.js"],
    liveUrl: null,
    githubUrl: "https://github.com/github-mahar/IndexWise-Research",
    screenshot: "/Index_Wise.png",
  },
];

// ---------------------
// CORE_MODULES (Skills)
// ---------------------

export const skills: Skill[] = [
  { name: "HTML", category: "primary" },
  { name: "CSS", category: "primary" },
  { name: "JavaScript", category: "primary" },
  { name: "TypeScript", category: "primary" },
  { name: "React", category: "primary" },
  { name: "Next.js", category: "primary" },
  { name: "Node.js", category: "supporting" },
  { name: "Vite", category: "supporting" },
  { name: "Supabase", category: "supporting" },
  { name: "Tailwind CSS", category: "supporting" },
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Linux", category: "tools" },
];

// ---------------------
// EXECUTION_PIPELINE (Experience)
// ---------------------

export const experience: ExperienceEntry[] = [
  {
    company: "Imrozia Serene",
    role: "Front-end Developer (Full-time)",
    duration: "Mar 2026 – Present",
    isCurrent: true,
    description: [
      "Specializing in building and maintaining high-performance frontend systems.",
      "Developing responsive e-commerce interfaces with a focus on conversion and speed.",
    ],
  },
  {
    company: "EzzCode",
    role: "Web Developer (Part-time)",
    duration: "Dec 2025 – Present",
    isCurrent: true,
    description: [
      "Translated Figma designs into responsive, pixel-perfect React components.",
      "Integrated REST APIs and built reusable modules for dynamic data rendering.",
      "Optimized site performance and cross-browser compatibility to improve Lighthouse scores.",
    ],
  },
  {
    company: "DevelopersHub Corporation©",
    role: "Frontend Developer",
    duration: "May 2025 – Dec 2025",
    isCurrent: false,
    description: [
      "Built high-fidelity responsive interfaces using modern web technologies.",
      "Collaborated with cross-functional teams to implement scalable technical solutions.",
      "Ensured universal usability through accessibility audits and performance optimization.",
    ],
  },
  {
    company: "Soft Pulses",
    role: "Store Management Role",
    duration: "Jul 2024 – Apr 2025",
    isCurrent: false,
    description: [
      "Managed end-to-end Shopify operations, including inventory, theme customization, and CRO.",
      "Developed custom Liquid modifications and integrated apps for marketing and analytics.",
      "Executed SEO strategies and managed ad campaigns to drive traffic and conversion.",
      "Utilized data analytics to optimize fulfillment and minimize cart abandonment.",
    ],
  },
];

// ---------------------
// INITIALIZE_CONNECTION (Contact)
// ---------------------

export const contactInfo: ContactInfo = {
  email: "mahargm675@gmail.com",
  linkedin: "https://www.linkedin.com/in/mahar-gm",
  github: "https://github.com/github-mahar",
  preferredMethod: "Email & Contact Form",
  availabilityNote: "Open for freelance",
};

// ---------------------
// SITE CONFIG
// ---------------------

export const siteConfig: SiteConfig = {
  logoPath: "/Logo.jpg",
  profileImagePath: "/GM.png",
  aesthetic: "Clean Technical",
  soundEffects: true,
  themeToggle: true,
};
