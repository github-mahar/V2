"use client";

import { projects } from "@/lib/data";
import TerminalCard from "@/components/TerminalCard";
import { PageTransition, StaggerItem } from "@/components/PageTransition";

export default function ProjectArchiveContent() {
    return (
        <div className="container-system" style={{ paddingTop: "var(--space-3xl)", paddingBottom: "var(--space-3xl)" }}>
            <PageTransition>
                {/* Page Header */}
                <StaggerItem>
                    <div className="mono-label" style={{ marginBottom: "var(--space-md)", fontSize: "0.7rem" }}>
                        {"> SCANNING PROJECT_ARCHIVE..."}
                    </div>
                    <h1 style={{ marginBottom: "var(--space-sm)" }}>PROJECT_ARCHIVE</h1>
                    <div
                        className="mono-label"
                        style={{
                            marginBottom: "var(--space-2xl)",
                            fontSize: "0.7rem",
                        }}
                    >
                        ENTRIES_FOUND: <span className="mono-value">{projects.length}</span>
                    </div>
                </StaggerItem>

                {/* Project Cards Grid */}
                <div
                    className="grid"
                    style={{
                        gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                        gap: "var(--space-lg)",
                    }}
                >
                    {projects.map((project) => (
                        <StaggerItem key={project.id}>
                            <TerminalCard
                                title={project.name}
                                description={project.description}
                                techStack={project.techStack}
                                href={`/project-archive/${project.id}`}
                                metadata={[
                                    { label: "TYPE", value: project.type.toUpperCase() },
                                    { label: "ROLE", value: project.role.toUpperCase() },
                                ]}
                            />
                        </StaggerItem>
                    ))}
                </div>
            </PageTransition>
        </div>
    );
}
