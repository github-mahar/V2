// Footer — PRD.md §3.1, §9
// System metadata footer with build version, deployment info

import { SYSTEM_META } from "@/lib/constants";

export default function Footer() {
    return (
        <footer
            style={{
                borderTop: "1px solid var(--color-border)",
                backgroundColor: "rgba(5, 5, 5, 0.9)",
                padding: "var(--space-base) 0",
                marginTop: "var(--space-3xl)",
            }}
        >
            <div
                className="container-system flex flex-wrap items-center justify-between"
                style={{ gap: "var(--space-base)" }}
            >
                <div
                    className="flex flex-wrap items-center"
                    style={{
                        gap: "var(--space-lg)",
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontSize: "0.6rem",
                        letterSpacing: "1px",
                        color: "var(--color-text-muted)",
                        textTransform: "uppercase",
                    }}
                >
                    <span>BUILD_VERSION: {SYSTEM_META.buildVersion}</span>
                    <span
                        style={{
                            color: "var(--color-border)",
                            userSelect: "none",
                        }}
                    >
                        |
                    </span>
                    <span>DEPLOYMENT: {SYSTEM_META.deployment}</span>
                    <span
                        style={{
                            color: "var(--color-border)",
                            userSelect: "none",
                        }}
                    >
                        |
                    </span>
                    <span>LATENCY: {SYSTEM_META.latency}</span>
                </div>

                <div
                    style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontSize: "0.6rem",
                        letterSpacing: "1px",
                        color: "var(--color-text-muted)",
                        textTransform: "uppercase",
                    }}
                >
                    © {new Date().getFullYear()} MAHAR_GM
                </div>
            </div>
        </footer>
    );
}
