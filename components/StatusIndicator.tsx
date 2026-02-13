// StatusIndicator — design.md §6.1, §7.3
// Subtle pulse, neon cyan dot, 2-3s cycle

interface StatusIndicatorProps {
    status: string;
}

export default function StatusIndicator({ status }: StatusIndicatorProps) {
    return (
        <div
            className="flex items-center"
            style={{
                gap: "var(--space-sm)",
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.65rem",
                letterSpacing: "1px",
                color: "var(--color-text-muted)",
                textTransform: "uppercase",
            }}
        >
            <span>SYSTEM_STATUS:</span>
            <span style={{ color: "var(--color-accent-primary)" }}>{status}</span>
            <span
                className="pulse-indicator"
                style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-accent-primary)",
                    boxShadow: "0 0 6px rgba(0, 255, 255, 0.5)",
                }}
                aria-label={`System status: ${status}`}
            />
        </div>
    );
}
