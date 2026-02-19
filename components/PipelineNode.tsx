// PipelineNode — design.md §6.4
// Vertical pipeline with connecting line, pulsing current node

interface PipelineNodeProps {
    company: string;
    role: string;
    duration: string;
    isCurrent: boolean;
    isLast: boolean;
}

export default function PipelineNode({
    company,
    role,
    duration,
    isCurrent,
    isLast,
    description,
}: PipelineNodeProps & { description?: string[] }) {
    return (
        <div className="flex" style={{ gap: "var(--space-lg)" }}>
            {/* Line + Node Dot */}
            <div className="flex flex-col items-center" style={{ width: "20px", flexShrink: 0 }}>
                {/* Dot */}
                <div
                    className={isCurrent ? "pulse-indicator" : ""}
                    style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor: isCurrent
                            ? "var(--color-accent-primary)"
                            : "var(--color-border)",
                        border: isCurrent
                            ? "none"
                            : "1px solid var(--color-text-muted)",
                        boxShadow: isCurrent
                            ? "0 0 8px rgba(0, 255, 255, 0.4)"
                            : "none",
                        flexShrink: 0,
                        marginTop: "4px",
                    }}
                />

                {/* Connecting Line */}
                {!isLast && (
                    <div
                        style={{
                            width: "1px",
                            flexGrow: 1,
                            backgroundColor: "var(--color-border)",
                            minHeight: "40px",
                        }}
                    />
                )}
            </div>

            {/* Content */}
            <div style={{ paddingBottom: isLast ? 0 : "var(--space-xl)", width: "100%" }}>
                {/* Company */}
                <h3
                    style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        color: isCurrent
                            ? "var(--color-accent-primary)"
                            : "var(--color-text-primary)",
                        marginBottom: "var(--space-xs)",
                    }}
                >
                    {company}
                </h3>

                {/* Role */}
                <div className="mono-label" style={{ marginBottom: "var(--space-xs)" }}>
                    ROLE: <span className="mono-value">{role}</span>
                </div>

                {/* Duration */}
                <div className="mono-label" style={{ marginBottom: "var(--space-sm)" }}>
                    DURATION: <span className="mono-value">{duration}</span>
                </div>

                {/* Description */}
                {description && description.length > 0 && (
                    <ul
                        style={{
                            listStyleType: "disc",
                            paddingLeft: "var(--space-lg)",
                            marginBottom: "var(--space-md)",
                            color: "var(--color-text-muted)",
                            fontFamily: "var(--font-jetbrains-mono)",
                            fontSize: "0.85rem",
                            lineHeight: 1.6,
                        }}
                    >
                        {description.map((item, index) => (
                            <li key={index} style={{ marginBottom: "var(--space-xs)" }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Current Badge */}
                {isCurrent && (
                    <span
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "var(--space-xs)",
                            fontFamily: "var(--font-jetbrains-mono)",
                            fontSize: "0.65rem",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                            color: "var(--color-accent-primary)",
                            border: "1px solid var(--color-accent-primary)",
                            padding: "2px 8px",
                        }}
                    >
                        ● CURRENT
                    </span>
                )}
            </div>
        </div>
    );
}
