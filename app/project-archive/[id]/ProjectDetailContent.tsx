"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";
import Button from "@/components/Button";
import { PageTransition, StaggerItem } from "@/components/PageTransition";

interface ProjectDetailContentProps {
    project: Project;
}

export default function ProjectDetailContent({ project }: ProjectDetailContentProps) {
    return (
        <div className="container-system" style={{ paddingTop: "var(--space-3xl)", paddingBottom: "var(--space-3xl)" }}>
            <PageTransition>
                {/* Breadcrumb */}
                <StaggerItem>
                    <div
                        className="mono-label"
                        style={{ marginBottom: "var(--space-lg)", fontSize: "0.7rem" }}
                    >
                        <Link
                            href="/project-archive"
                            style={{
                                color: "var(--color-text-muted)",
                                textDecoration: "none",
                                transition: "color 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = "var(--color-accent-primary)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = "var(--color-text-muted)";
                            }}
                        >
                            PROJECT_ARCHIVE
                        </Link>
                        <span style={{ color: "var(--color-border)", margin: "0 8px" }}>/</span>
                        <span className="mono-value">{project.name.toUpperCase()}</span>
                    </div>
                </StaggerItem>

                {/* Project Title */}
                <StaggerItem>
                    <h1
                        style={{
                            fontSize: "clamp(2rem, 5vw, 3rem)",
                            marginBottom: "var(--space-lg)",
                            color: "var(--color-text-primary)",
                        }}
                    >
                        {project.name.toUpperCase()}
                    </h1>
                </StaggerItem>

                {/* System Metadata Block — PRD.md §3.5 */}
                <StaggerItem>
                    <div
                        style={{
                            border: "1px solid var(--color-border)",
                            padding: "var(--space-lg)",
                            marginBottom: "var(--space-2xl)",
                            maxWidth: "600px",
                        }}
                    >
                        <div
                            className="mono-label"
                            style={{
                                marginBottom: "var(--space-base)",
                                paddingBottom: "var(--space-md)",
                                borderBottom: "1px solid var(--color-border)",
                                fontSize: "0.7rem",
                            }}
                        >
                            SYSTEM_METADATA
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
                            <div className="mono-label">
                                TYPE: <span className="mono-value">{project.type.toUpperCase()}</span>
                            </div>
                            <div className="mono-label">
                                ROLE: <span className="mono-value">{project.role.toUpperCase()}</span>
                            </div>
                            <div className="mono-label">
                                TECH_STACK: <span className="mono-value">[{project.techStack.join(", ")}]</span>
                            </div>
                        </div>
                    </div>
                </StaggerItem>

                {/* Description */}
                <StaggerItem>
                    <div style={{ marginBottom: "var(--space-2xl)" }}>
                        <h2
                            style={{
                                marginBottom: "var(--space-base)",
                                paddingBottom: "var(--space-md)",
                                borderBottom: "1px solid var(--color-border)",
                            }}
                        >
                            PROJECT_DESCRIPTION
                        </h2>
                        <p
                            style={{
                                color: "var(--color-text-muted)",
                                fontSize: "0.95rem",
                                lineHeight: 1.7,
                            }}
                        >
                            {project.description}
                        </p>
                    </div>
                </StaggerItem>

                {/* Screenshot Preview */}
                {project.screenshot && (
                    <StaggerItem>
                        <div style={{ marginBottom: "var(--space-2xl)" }}>
                            <h2
                                style={{
                                    marginBottom: "var(--space-base)",
                                    paddingBottom: "var(--space-md)",
                                    borderBottom: "1px solid var(--color-border)",
                                }}
                            >
                                VISUAL_PREVIEW
                            </h2>
                            <div
                                style={{
                                    border: "1px solid var(--color-border)",
                                    overflow: "hidden",
                                    position: "relative",
                                    width: "100%",
                                    maxWidth: "800px",
                                    aspectRatio: "16 / 9",
                                }}
                            >
                                <Image
                                    src={project.screenshot}
                                    alt={`${project.name} preview`}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 100vw, 800px"
                                />
                            </div>
                        </div>
                    </StaggerItem>
                )}

                {/* Actions */}
                <StaggerItem>
                    <div className="flex flex-wrap items-center" style={{ gap: "var(--space-base)" }}>
                        {project.liveUrl && (
                            <Button variant="primary" href={project.liveUrl}>
                                VIEW_LIVE →
                            </Button>
                        )}
                        <Button variant="secondary" href={project.githubUrl}>
                            SOURCE_CODE →
                        </Button>
                        <Button variant="secondary" href="/project-archive">
                            ← BACK_TO_ARCHIVE
                        </Button>
                    </div>
                </StaggerItem>
            </PageTransition>
        </div>
    );
}
