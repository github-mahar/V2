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
  title: "Web Developer & Shopify Store Manager",
  tagline: "One-Line At a time",
  status: "Freelance",
  availability: "Open for freelance",
};

// ---------------------
// SYSTEM_INFO (About)
// ---------------------

export const systemInfo: SystemInfo = {
  professionalSummary:
    "I am a Frontend Developer and BS Computer Science student specializing in building responsive, high-converting e-commerce experiences. My expertise combines modern frontend development with practical Shopify store management, allowing me to bridge technical implementation with real business impact. I focus on clean user interfaces, structured layouts, and performance-driven design that enhances both usability and conversion rates.\n\nAlongside frontend technologies, I work extensively with Shopify stores — from complete store setup and product listing optimization to theme customization and app integration. I customize Shopify themes using Liquid fundamentals, manage collections and inventory systems, and structure stores to ensure clarity, speed, and seamless user journeys.\n\nI approach every store and interface as a performance system. From layout structure and content hierarchy to loading speed and optimization, every adjustment is made with measurable improvement in mind. My priority is building scalable, conversion-oriented e-commerce platforms that balance aesthetics with functionality.\n\nI don’t just manage Shopify stores — I engineer growth-focused digital storefronts. Every project I contribute to is designed for stability, speed, and long-term brand expansion.",

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
    role: "Web Developer",
    duration: "Dec 2025 – Present",
    isCurrent: true,
    description: [
      "Developed responsive and user-friendly web interfaces using HTML5, CSS3, JavaScript (ES6+).",
      "Converted UI/UX designs (Figma/Adobe XD) into fully functional and pixel-perfect web pages.",
      "Built reusable components and maintained clean, structured, and scalable code.",
      "Implemented responsive design principles to ensure cross-browser and cross-device compatibility.",
      "Integrated REST APIs and handled dynamic data rendering.",
      "Optimized website performance, reducing load time and improving Lighthouse scores.",
      "Used Git for version control and collaborated with backend developers and designers.",
      "Debugged and resolved front-end issues to ensure smooth user experience.",
    ],
  },
  {
    company: "DevelopersHub Corporation©",
    role: "Frontend Developer",
    duration: "May 2025 – Dec 2025",
    isCurrent: false,
    description: [],
  },
  {
    company: "Soft Pulses",
    role: "Store Management Role",
    duration: "Jul 2024 – Apr 2025",
    isCurrent: false,
    description: [
      "Handled and managed the entire Shopify store operations, including product uploads, collections, pricing, and inventory management.",
      "Customized Shopify themes, performed basic Liquid code modifications, and optimized store UI/UX for enhanced conversions.",
      "Processed daily orders, managed fulfillment operations, and coordinated with suppliers and delivery partners.",
      "Installed, configured, and optimized Shopify applications (email marketing, upsells, reviews, analytics, and more).",
      "Executed SEO optimization strategies (meta titles, descriptions, alt tags, URL structuring) for enhanced organic rankings.",
      "Managed Facebook, Instagram, and Google Ads marketing campaigns to generate traffic and sales.",
      "Handled customer support operations via email and live chat, ensuring maximum customer satisfaction and retention.",
      "Analyzed store performance using Shopify Analytics and Google Analytics, and enhanced conversion rate (CRO).",
      "Managed discount campaigns, promotional activities, and seasonal sales strategies.",
      "Minimized cart abandonment rates using email automation and retargeting techniques.",
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
