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
  title: "Web Developer",
  tagline: "One-Line At a time",
  status: "Freelance",
  availability: "Open for freelance",
};

// ---------------------
// SYSTEM_INFO (About)
// ---------------------

export const systemInfo: SystemInfo = {
  professionalSummary:
    "I am a Web Developer specializing in building high-performance, scalable, and maintainable web applications. I focus on creating systems that are not only functional but engineered for clarity, speed, and modularity. My work spans from front-end interfaces to full-stack integration, with an emphasis on clean, reusable code and seamless user experience.\n\nI approach every project as a structured system. From application architecture and component design to deployment pipelines and performance optimization, I ensure that every line of code serves a purpose. My priority is robustness, maintainability, and delivering solutions that scale without compromising performance.\n\nI thrive in translating complex requirements into efficient technical solutions. Whether building dashboards, interactive platforms, or automation tools, I treat web development as a precise craft where performance, readability, and reliability are equally critical.\n\nI don't just build websites — I build engineered systems. Every project I contribute to is designed for long-term stability, smooth user interaction, and measurable technical success.",

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
    company: "EzzCode",
    role: "Developer",
    duration: "2 Years",
    isCurrent: true,
  },
  {
    company: "DevelopersHub Corporation",
    role: "Internee",
    duration: "6 Months",
    isCurrent: false,
  },
  {
    company: "Soft Pulses",
    role: "Internee",
    duration: "6 Months",
    isCurrent: false,
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
