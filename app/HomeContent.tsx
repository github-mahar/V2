"use client";

import { identity, systemInfo, skills } from "@/lib/data";
import Button from "@/components/Button";
import { PageTransition, StaggerItem } from "@/components/PageTransition";

export default function HomeContent() {
    return (
        <div className="container-system" style={{ paddingTop: "var(--space-3xl)", paddingBottom: "var(--space-3xl)" }}>
            <PageTransition>
                {/* System Boot Header */}
                <StaggerItem>
                    <div
                        className="mono-label"
                        style={{
                            marginBottom: "var(--space-lg)",
                            fontSize: "0.7rem",
                        }}
                    >
                        {"> SYSTEM_BOOT INITIALIZED..."}
                    </div>
                </StaggerItem>

                {/* Main Headline — design.md §4: ALL CAPS, tight line height */}
                <StaggerItem>
                    <h1
                        style={{
                            fontFamily: "var(--font-space-grotesk)",
                            fontWeight: 700,
                            fontSize: "clamp(2.5rem, 7vw, 5rem)",
                            lineHeight: 1.05,
                            letterSpacing: "3px",
                            textTransform: "uppercase",
                            color: "var(--color-text-primary)",
                            marginBottom: "var(--space-lg)",
                            maxWidth: "800px",
                        }}
                    >
                        {identity.displayName}
                    </h1>
                </StaggerItem>

                {/* Title + Tagline in monospace */}
                <StaggerItem>
                    <div style={{ marginBottom: "var(--space-sm)" }}>
                        <span
                            className="mono-label"
                            style={{ fontSize: "0.8rem" }}
                        >
                            ROLE:{" "}
                        </span>
                        <span
                            className="mono-value"
                            style={{ fontSize: "0.85rem" }}
                        >
                            {identity.title}
                        </span>
                    </div>
                </StaggerItem>

                <StaggerItem>
                    <div style={{ marginBottom: "var(--space-sm)" }}>
                        <span
                            className="mono-label"
                            style={{ fontSize: "0.8rem" }}
                        >
                            STATUS:{" "}
                        </span>
                        <span
                            className="mono-value"
                            style={{ fontSize: "0.85rem" }}
                        >
                            {identity.status}
                        </span>
                    </div>
                </StaggerItem>

                <StaggerItem>
                    <p
                        style={{
                            fontFamily: "var(--font-jetbrains-mono)",
                            fontSize: "1rem",
                            color: "var(--color-text-muted)",
                            letterSpacing: "0.5px",
                            marginBottom: "var(--space-2xl)",
                            maxWidth: "600px",
                            lineHeight: 1.5,
                        }}
                    >
                        {`> ${identity.tagline}`}
                    </p>
                </StaggerItem>

                {/* CTAs — PRD.md §3.2 */}
                <StaggerItem>
                    <div className="flex flex-wrap items-center" style={{ gap: "var(--space-base)" }}>
                        <Button variant="primary" href="/project-archive">
                            VIEW PROJECTS →
                        </Button>
                        <Button variant="secondary" href="/initialize-connection">
                            INITIALIZE_CONNECTION
                        </Button>
                    </div>
                </StaggerItem>

                {/* System Info Preview Panel */}
                <StaggerItem>
                    <div
                        style={{
                            marginTop: "var(--space-3xl)",
                            border: "1px solid var(--color-border)",
                            padding: "var(--space-lg)",
                            maxWidth: "700px",
                        }}
                    >
                        {/* Panel Header */}
                        <div
                            className="mono-label"
                            style={{
                                marginBottom: "var(--space-base)",
                                paddingBottom: "var(--space-md)",
                                borderBottom: "1px solid var(--color-border)",
                                fontSize: "0.7rem",
                            }}
                        >
                            {"> LOADING SYSTEM_OVERVIEW..."}
                        </div>

                        {/* Metadata Grid */}
                        <div
                            className="grid"
                            style={{
                                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                gap: "var(--space-base)",
                            }}
                        >
                            <div>
                                <div className="mono-label" style={{ marginBottom: "var(--space-xs)" }}>
                                    EXPERIENCE:
                                </div>
                                <div className="mono-value">{systemInfo.yearsOfExperience} YEARS</div>
                            </div>

                            <div>
                                <div className="mono-label" style={{ marginBottom: "var(--space-xs)" }}>
                                    FOCUS:
                                </div>
                                <div className="mono-value">{systemInfo.industries.join(" / ")}</div>
                            </div>

                            <div>
                                <div className="mono-label" style={{ marginBottom: "var(--space-xs)" }}>
                                    AVAILABILITY:
                                </div>
                                <div className="mono-value">{identity.availability.toUpperCase()}</div>
                            </div>

                            <div>
                                <div className="mono-label" style={{ marginBottom: "var(--space-xs)" }}>
                                    CORE_MODULES:
                                </div>
                                <div className="mono-value">
                                    {skills
                                        .filter((s) => s.category === "primary")
                                        .slice(0, 4)
                                        .map((s) => s.name)
                                        .join(", ")}
                                </div>
                            </div>
                        </div>
                    </div>
                </StaggerItem>
            </PageTransition>
        </div>
    );
}
