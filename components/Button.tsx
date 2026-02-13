// Button — design.md §6.3
// Primary: Solid neon cyan, black text, sharp corners, glow
// Secondary: Transparent, 1px cyan border, cyan text

import Link from "next/link";

interface ButtonProps {
    variant: "primary" | "secondary";
    href?: string;
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit";
    fullWidth?: boolean;
}

export default function Button({
    variant,
    href,
    children,
    onClick,
    type = "button",
    fullWidth = false,
}: ButtonProps) {
    const baseStyle: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--space-sm)",
        fontFamily: "var(--font-jetbrains-mono)",
        fontSize: "0.75rem",
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        padding: "var(--space-md) var(--space-lg)",
        border: "none",
        cursor: "pointer",
        textDecoration: "none",
        transition: "all 0.2s ease",
        width: fullWidth ? "100%" : "auto",
    };

    const variantStyles: Record<string, React.CSSProperties> = {
        primary: {
            ...baseStyle,
            backgroundColor: "var(--color-accent-primary)",
            color: "var(--color-bg-primary)",
            fontWeight: 700,
            boxShadow: "0 0 10px rgba(0, 255, 255, 0.2)",
        },
        secondary: {
            ...baseStyle,
            backgroundColor: "transparent",
            color: "var(--color-accent-primary)",
            border: "1px solid var(--color-accent-primary)",
        },
    };

    const style = variantStyles[variant];

    const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
        if (variant === "primary") {
            e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 255, 255, 0.35)";
            e.currentTarget.style.filter = "brightness(1.1)";
        } else {
            e.currentTarget.style.backgroundColor = "var(--color-accent-primary)";
            e.currentTarget.style.color = "var(--color-bg-primary)";
        }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
        if (variant === "primary") {
            e.currentTarget.style.boxShadow = "0 0 10px rgba(0, 255, 255, 0.2)";
            e.currentTarget.style.filter = "brightness(1)";
        } else {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "var(--color-accent-primary)";
        }
    };

    if (href) {
        return (
            <Link
                href={href}
                style={style}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            style={style}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </button>
    );
}
