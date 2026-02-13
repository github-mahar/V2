"use client";

import Image from "next/image";
import { systemInfo, identity, skills, siteConfig } from "@/lib/data";
import { PageTransition, StaggerItem } from "@/components/PageTransition";

export default function SystemInfoContent() {
    const primarySkills = skills.filter((s) => s.category === "primary");
    const supportingSkills = skills.filter((s) => s.category === "supporting");
    const tools = skills.filter((s) => s.category === "tools");

    return (
        <div className="container-system" style={{ paddingTop: "var(--space-3xl)", paddingBottom: "var(--space-3xl)" }}>
            <PageTransition>
                {/* Page Header */}
                <StaggerItem>
                    <div className="mono-label" style={{ marginBottom: "var(--space-md)", fontSize: "0.7rem" }}>
                        {"> ACCESSING SYSTEM_INFO..."}
                    </div>
                    <h1 style={{ marginBottom: "var(--space-2xl)" }}>SYSTEM_INFO</h1>
                </StaggerItem>

                {/* Profile + Identity Block */}
                <StaggerItem>
                    <div
                        className="flex flex-col md:flex-row"
                        style={{
                            gap: "var(--space-xl)",
                            marginBottom: "var(--space-2xl)",
                            border: "1px solid var(--color-border)",
                            padding: "var(--space-lg)",
                        }}
                    >
                        {/* Profile Image */}
                        <div style={{ flexShrink: 0 }}>
                            <div
                                style={{
                                    width: "140px",
                                    height: "140px",
                                    border: "1px solid var(--color-border)",
                                    overflow: "hidden",
                                    position: "relative",
                                }}
                            >
                                <Image
                                    src={siteConfig.profileImagePath}
                                    alt={identity.fullName}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="140px"
                                />
                            </div>
                        </div>

                        {/* Identity Metadata */}
                        <div style={{ flex: 1 }}>
                            <h2
                                style={{
                                    fontSize: "1.5rem",
                                    color: "var(--color-accent-primary)",
                                    marginBottom: "var(--space-base)",
                                }}
                            >
                                {identity.fullName.toUpperCase()}
                            </h2>
                            <div className="mono-label" style={{ marginBottom: "var(--space-xs)" }}>
                                ROLE: <span className="mono-value">{identity.title.toUpperCase()}</span>
                            </div>
                            <div className="mono-label" style={{ marginBottom: "var(--space-xs)" }}>
                                STATUS: <span className="mono-value">{identity.status.toUpperCase()}</span>
                            </div>
                            <div className="mono-label" style={{ marginBottom: "var(--space-xs)" }}>
                                AVAILABILITY: <span className="mono-value">{identity.availability.toUpperCase()}</span>
                            </div>
                            <div className="mono-label">
                                EXPERIENCE: <span className="mono-value">{systemInfo.yearsOfExperience} YEARS</span>
                            </div>
                        </div>
                    </div>
                </StaggerItem>

                {/* Professional Summary */}
                <StaggerItem>
                    <div style={{ marginBottom: "var(--space-2xl)" }}>
                        <h2
                            style={{
                                marginBottom: "var(--space-base)",
                                paddingBottom: "var(--space-md)",
                                borderBottom: "1px solid var(--color-border)",
                            }}
                        >
                            SYSTEM_OVERVIEW
                        </h2>
                        {systemInfo.professionalSummary.split("\n\n").map((paragraph, i) => (
                            <p
                                key={i}
                                style={{
                                    color: "var(--color-text-muted)",
                                    marginBottom: "var(--space-base)",
                                    fontSize: "0.95rem",
                                }}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </StaggerItem>

                {/* Core Philosophy */}
                <StaggerItem>
                    <div style={{ marginBottom: "var(--space-2xl)" }}>
                        <h2
                            style={{
                                marginBottom: "var(--space-base)",
                                paddingBottom: "var(--space-md)",
                                borderBottom: "1px solid var(--color-border)",
                            }}
                        >
                            CORE_PHILOSOPHY
                        </h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
                            {systemInfo.corePhilosophy.map((principle, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "var(--space-md)",
                                    }}
                                >
                                    <span
                                        className="mono-value"
                                        style={{ flexShrink: 0, fontSize: "0.75rem", marginTop: "2px" }}
                                    >
                                        [{String(i + 1).padStart(2, "0")}]
                                    </span>
                                    <p
                                        style={{
                                            color: "var(--color-text-muted)",
                                            fontSize: "0.9rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {principle}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </StaggerItem>

                {/* Differentiators */}
                <StaggerItem>
                    <div style={{ marginBottom: "var(--space-2xl)" }}>
                        <h2
                            style={{
                                marginBottom: "var(--space-base)",
                                paddingBottom: "var(--space-md)",
                                borderBottom: "1px solid var(--color-border)",
                            }}
                        >
                            DIFFERENTIATORS
                        </h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
                            {systemInfo.differentiators.map((diff, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "var(--space-md)",
                                        paddingLeft: "var(--space-base)",
                                        borderLeft: "2px solid var(--color-accent-primary)",
                                    }}
                                >
                                    <p
                                        style={{
                                            color: "var(--color-text-muted)",
                                            fontSize: "0.9rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {diff}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </StaggerItem>

                {/* Core Modules / Skills */}
                <StaggerItem>
                    <div>
                        <h2
                            style={{
                                marginBottom: "var(--space-base)",
                                paddingBottom: "var(--space-md)",
                                borderBottom: "1px solid var(--color-border)",
                            }}
                        >
                            CORE_MODULES
                        </h2>

                        <div
                            className="grid"
                            style={{
                                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                                gap: "var(--space-base)",
                            }}
                        >
                            {/* Primary */}
                            <div
                                style={{
                                    border: "1px solid var(--color-border)",
                                    padding: "var(--space-base)",
                                }}
                            >
                                <div
                                    className="mono-label"
                                    style={{
                                        marginBottom: "var(--space-md)",
                                        color: "var(--color-accent-primary)",
                                        fontSize: "0.7rem",
                                    }}
                                >
                                    PRIMARY_STACK
                                </div>
                                <div className="flex flex-wrap" style={{ gap: "var(--space-sm)" }}>
                                    {primarySkills.map((skill) => (
                                        <span
                                            key={skill.name}
                                            style={{
                                                fontFamily: "var(--font-jetbrains-mono)",
                                                fontSize: "0.75rem",
                                                padding: "4px 10px",
                                                border: "1px solid var(--color-border)",
                                                color: "var(--color-text-primary)",
                                                letterSpacing: "0.5px",
                                            }}
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Supporting */}
                            <div
                                style={{
                                    border: "1px solid var(--color-border)",
                                    padding: "var(--space-base)",
                                }}
                            >
                                <div
                                    className="mono-label"
                                    style={{
                                        marginBottom: "var(--space-md)",
                                        color: "var(--color-accent-primary)",
                                        fontSize: "0.7rem",
                                    }}
                                >
                                    SUPPORTING_MODULES
                                </div>
                                <div className="flex flex-wrap" style={{ gap: "var(--space-sm)" }}>
                                    {supportingSkills.map((skill) => (
                                        <span
                                            key={skill.name}
                                            style={{
                                                fontFamily: "var(--font-jetbrains-mono)",
                                                fontSize: "0.75rem",
                                                padding: "4px 10px",
                                                border: "1px solid var(--color-border)",
                                                color: "var(--color-text-muted)",
                                                letterSpacing: "0.5px",
                                            }}
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Tools */}
                            <div
                                style={{
                                    border: "1px solid var(--color-border)",
                                    padding: "var(--space-base)",
                                }}
                            >
                                <div
                                    className="mono-label"
                                    style={{
                                        marginBottom: "var(--space-md)",
                                        color: "var(--color-accent-primary)",
                                        fontSize: "0.7rem",
                                    }}
                                >
                                    TOOLCHAIN
                                </div>
                                <div className="flex flex-wrap" style={{ gap: "var(--space-sm)" }}>
                                    {tools.map((skill) => (
                                        <span
                                            key={skill.name}
                                            style={{
                                                fontFamily: "var(--font-jetbrains-mono)",
                                                fontSize: "0.75rem",
                                                padding: "4px 10px",
                                                border: "1px solid var(--color-border)",
                                                color: "var(--color-text-muted)",
                                                letterSpacing: "0.5px",
                                            }}
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </StaggerItem>
            </PageTransition>
        </div>
    );
}
