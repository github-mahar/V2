"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { NAV_ROUTES, SYSTEM_META } from "@/lib/constants";
import { siteConfig } from "@/lib/data";
import StatusIndicator from "./StatusIndicator";

export default function Navigation() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50"
            style={{
                backgroundColor: "rgba(5, 5, 5, 0.92)",
                backdropFilter: "blur(8px)",
                borderBottom: "1px solid var(--color-border)",
            }}
        >
            <div className="container-system flex items-center justify-between" style={{ height: "56px" }}>
                {/* Logo + System Name */}
                <Link href="/" className="flex items-center gap-3" style={{ textDecoration: "none" }}>
                    <Image
                        src={siteConfig.logoPath}
                        alt="Mahar GM Logo"
                        width={28}
                        height={28}
                        style={{ borderRadius: "2px" }}
                    />
                    <span
                        className="font-heading"
                        style={{
                            fontFamily: "var(--font-space-grotesk)",
                            fontWeight: 700,
                            fontSize: "0.85rem",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            color: "var(--color-text-primary)",
                        }}
                    >
                        MAHAR_GM
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center" style={{ gap: "var(--space-lg)" }}>
                    {NAV_ROUTES.map((route) => {
                        const isActive = pathname === route.href;
                        return (
                            <Link
                                key={route.href}
                                href={route.href}
                                style={{
                                    fontFamily: "var(--font-jetbrains-mono)",
                                    fontSize: "0.7rem",
                                    letterSpacing: "1px",
                                    textTransform: "uppercase",
                                    color: isActive
                                        ? "var(--color-accent-primary)"
                                        : "var(--color-text-muted)",
                                    borderBottom: isActive
                                        ? "1px solid var(--color-accent-primary)"
                                        : "1px solid transparent",
                                    paddingBottom: "4px",
                                    transition: "color 0.2s ease, border-color 0.2s ease",
                                    textDecoration: "none",
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive) {
                                        e.currentTarget.style.color = "var(--color-text-primary)";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) {
                                        e.currentTarget.style.color = "var(--color-text-muted)";
                                    }
                                }}
                            >
                                {route.systemLabel}
                            </Link>
                        );
                    })}

                    {/* Status Indicator */}
                    <StatusIndicator status={SYSTEM_META.status} />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation menu"
                    style={{
                        background: "none",
                        border: "1px solid var(--color-border)",
                        padding: "6px 10px",
                        color: "var(--color-text-muted)",
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontSize: "0.7rem",
                        letterSpacing: "1px",
                        cursor: "pointer",
                    }}
                >
                    {mobileOpen ? "CLOSE" : "MENU"}
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileOpen && (
                <div
                    className="md:hidden"
                    style={{
                        backgroundColor: "var(--color-bg-secondary)",
                        borderBottom: "1px solid var(--color-border)",
                        padding: "var(--space-base) 0",
                    }}
                >
                    <div className="container-system flex flex-col" style={{ gap: "var(--space-md)" }}>
                        {NAV_ROUTES.map((route) => {
                            const isActive = pathname === route.href;
                            return (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    onClick={() => setMobileOpen(false)}
                                    style={{
                                        fontFamily: "var(--font-jetbrains-mono)",
                                        fontSize: "0.75rem",
                                        letterSpacing: "1px",
                                        textTransform: "uppercase",
                                        color: isActive
                                            ? "var(--color-accent-primary)"
                                            : "var(--color-text-muted)",
                                        padding: "var(--space-sm) 0",
                                        borderLeft: isActive
                                            ? "2px solid var(--color-accent-primary)"
                                            : "2px solid transparent",
                                        paddingLeft: "var(--space-md)",
                                        textDecoration: "none",
                                        transition: "color 0.2s ease",
                                    }}
                                >
                                    {`> ${route.systemLabel}`}
                                </Link>
                            );
                        })}
                        <div style={{ paddingTop: "var(--space-sm)", paddingLeft: "var(--space-md)" }}>
                            <StatusIndicator status={SYSTEM_META.status} />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
