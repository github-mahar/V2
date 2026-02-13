// TerminalCard — design.md §6.2
// Terminal-style window frame with traffic lights, 1px border, hover glow
// Used for: Projects, Skill clusters

import Link from "next/link";

interface TerminalCardProps {
    title: string;
    description: string;
    techStack: string[];
    href?: string;
    metadata?: { label: string; value: string }[];
}

export default function TerminalCard({
    title,
    description,
    techStack,
    href,
    metadata,
}: TerminalCardProps) {
    const cardContent = (
        <div
            className="terminal-card group"
            style={{
                border: "1px solid var(--color-border)",
                backgroundColor: "rgba(26, 26, 26, 0.5)",
                padding: 0,
                transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                cursor: href ? "pointer" : "default",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-accent-primary)";
                e.currentTarget.style.boxShadow = "0 0 16px rgba(0, 255, 255, 0.12)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.boxShadow = "none";
            }}
        >
            {/* Traffic Light Controls — design.md §6.2 */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "var(--space-md) var(--space-base)",
                    borderBottom: "1px solid var(--color-border)",
                }}
            >
                <span
                    style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: "#FF5F57",
                    }}
                />
                <span
                    style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: "#FFBD2E",
                    }}
                />
                <span
                    style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: "#28C840",
                    }}
                />
                <span
                    className="mono-label"
                    style={{
                        marginLeft: "auto",
                        fontSize: "0.65rem",
                        color: "var(--color-text-muted)",
                    }}
                >
                    ~/project
                </span>
            </div>

            {/* Card Body */}
            <div style={{ padding: "var(--space-lg) var(--space-base) var(--space-base)" }}>
                {/* Title */}
                <h3
                    style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        color: "var(--color-text-primary)",
                        marginBottom: "var(--space-md)",
                    }}
                >
                    {title}
                </h3>

                {/* Description */}
                <p
                    style={{
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                        color: "var(--color-text-muted)",
                        marginBottom: "var(--space-base)",
                    }}
                >
                    {description}
                </p>

                {/* Optional Metadata */}
                {metadata && metadata.length > 0 && (
                    <div style={{ marginBottom: "var(--space-base)" }}>
                        {metadata.map((item) => (
                            <div
                                key={item.label}
                                className="mono-label"
                                style={{ marginBottom: "var(--space-xs)" }}
                            >
                                {item.label}:{" "}
                                <span className="mono-value">{item.value}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Tech Stack Tags */}
                <div
                    className="mono-label"
                    style={{
                        paddingTop: "var(--space-md)",
                        borderTop: "1px solid var(--color-border)",
                    }}
                >
                    TECH_STACK: [{techStack.join(", ")}]
                </div>
            </div>
        </div>
    );

    if (href) {
        return (
            <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
                {cardContent}
            </Link>
        );
    }

    return cardContent;
}
