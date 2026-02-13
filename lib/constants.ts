// ============================================================
// CONSTANTS — Route definitions, metadata, and system labels
// Follows: design.md §9 UI Language (STRICT)
// ============================================================

export interface NavRoute {
    label: string;
    href: string;
    systemLabel: string;
}

export const NAV_ROUTES: NavRoute[] = [
    { label: "HOME", href: "/", systemLabel: "HOME" },
    { label: "SYSTEM_INFO", href: "/system-info", systemLabel: "SYSTEM_INFO" },
    { label: "PROJECT_ARCHIVE", href: "/project-archive", systemLabel: "PROJECT_ARCHIVE" },
    { label: "EXECUTION_PIPELINE", href: "/execution-pipeline", systemLabel: "EXECUTION_PIPELINE" },
    { label: "INITIALIZE_CONNECTION", href: "/initialize-connection", systemLabel: "INITIALIZE_CONNECTION" },
];

export const SYSTEM_META = {
    buildVersion: "2.0.0",
    deployment: "CLOUDFLARE_EDGE",
    latency: "OPTIMAL",
    status: "ONLINE",
} as const;

export const SEO_DEFAULTS = {
    siteName: "Mahar GM — The Cyber-Terminal",
    siteUrl: "https://mahargm.dev",
    defaultDescription: "Web Developer specializing in high-performance, scalable, and maintainable web applications. Building engineered systems, not just websites.",
    defaultTitle: "MAHAR GM // THE CYBER-TERMINAL",
} as const;

export const PAGE_METADATA = {
    home: {
        title: "MAHAR GM // THE CYBER-TERMINAL",
        description: "Web Developer specializing in high-performance, scalable, and maintainable web applications.",
    },
    systemInfo: {
        title: "SYSTEM_INFO // MAHAR GM",
        description: "Professional background, philosophy, and technical differentiators of Mahar GM.",
    },
    projectArchive: {
        title: "PROJECT_ARCHIVE // MAHAR GM",
        description: "Collection of engineered web projects by Mahar GM.",
    },
    executionPipeline: {
        title: "EXECUTION_PIPELINE // MAHAR GM",
        description: "Professional experience timeline and career progression of Mahar GM.",
    },
    initializeConnection: {
        title: "INITIALIZE_CONNECTION // MAHAR GM",
        description: "Get in touch with Mahar GM for collaboration, freelance, or professional inquiries.",
    },
} as const;
