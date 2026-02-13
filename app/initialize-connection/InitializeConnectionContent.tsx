"use client";

import { useState } from "react";
import { contactInfo, identity } from "@/lib/data";
import Button from "@/components/Button";
import { PageTransition, StaggerItem } from "@/components/PageTransition";

export default function InitializeConnectionContent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Open mailto with form data
        const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;
        window.open(mailtoLink, "_blank");
        setSubmitted(true);
    };

    const inputStyle: React.CSSProperties = {
        width: "100%",
        backgroundColor: "var(--color-bg-secondary)",
        border: "1px solid var(--color-border)",
        color: "var(--color-text-primary)",
        fontFamily: "var(--font-jetbrains-mono)",
        fontSize: "0.85rem",
        padding: "var(--space-md) var(--space-base)",
        outline: "none",
        transition: "border-color 0.2s ease",
    };

    const labelStyle: React.CSSProperties = {
        display: "block",
        fontFamily: "var(--font-jetbrains-mono)",
        fontSize: "0.7rem",
        letterSpacing: "1px",
        color: "var(--color-text-muted)",
        textTransform: "uppercase",
        marginBottom: "var(--space-sm)",
    };

    return (
        <div className="container-system" style={{ paddingTop: "var(--space-3xl)", paddingBottom: "var(--space-3xl)" }}>
            <PageTransition>
                {/* Page Header */}
                <StaggerItem>
                    <div className="mono-label" style={{ marginBottom: "var(--space-md)", fontSize: "0.7rem" }}>
                        {"> INITIALIZING CONNECTION PROTOCOL..."}
                    </div>
                    <h1 style={{ marginBottom: "var(--space-lg)" }}>INITIALIZE_CONNECTION</h1>
                </StaggerItem>

                {/* Status */}
                <StaggerItem>
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "var(--space-sm)",
                            border: "1px solid var(--color-accent-primary)",
                            padding: "var(--space-sm) var(--space-base)",
                            marginBottom: "var(--space-2xl)",
                        }}
                    >
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
                        />
                        <span
                            style={{
                                fontFamily: "var(--font-jetbrains-mono)",
                                fontSize: "0.7rem",
                                letterSpacing: "1px",
                                color: "var(--color-accent-primary)",
                                textTransform: "uppercase",
                            }}
                        >
                            {identity.availability.toUpperCase()} — READY FOR COLLABORATION
                        </span>
                    </div>
                </StaggerItem>

                <div
                    className="grid"
                    style={{
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "var(--space-xl)",
                    }}
                >
                    {/* Contact Info Panel */}
                    <StaggerItem>
                        <div>
                            <h2
                                style={{
                                    marginBottom: "var(--space-base)",
                                    paddingBottom: "var(--space-md)",
                                    borderBottom: "1px solid var(--color-border)",
                                    fontSize: "1.2rem",
                                }}
                            >
                                DIRECT_CHANNELS
                            </h2>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "var(--space-base)",
                                }}
                            >
                                {/* Email */}
                                <div
                                    style={{
                                        border: "1px solid var(--color-border)",
                                        padding: "var(--space-base)",
                                        transition: "border-color 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = "var(--color-accent-primary)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = "var(--color-border)";
                                    }}
                                >
                                    <div className="mono-label" style={{ marginBottom: "var(--space-xs)" }}>
                                        EMAIL:
                                    </div>
                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="mono-value"
                                        style={{ fontSize: "0.85rem", textDecoration: "none" }}
                                    >
                                        {contactInfo.email}
                                    </a>
                                </div>

                                {/* LinkedIn */}
                                <div
                                    style={{
                                        border: "1px solid var(--color-border)",
                                        padding: "var(--space-base)",
                                        transition: "border-color 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = "var(--color-accent-primary)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = "var(--color-border)";
                                    }}
                                >
                                    <div className="mono-label" style={{ marginBottom: "var(--space-xs)" }}>
                                        LINKEDIN:
                                    </div>
                                    <a
                                        href={contactInfo.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mono-value"
                                        style={{ fontSize: "0.85rem", textDecoration: "none" }}
                                    >
                                        {contactInfo.linkedin.replace("https://", "")}
                                    </a>
                                </div>

                                {/* GitHub */}
                                <div
                                    style={{
                                        border: "1px solid var(--color-border)",
                                        padding: "var(--space-base)",
                                        transition: "border-color 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = "var(--color-accent-primary)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = "var(--color-border)";
                                    }}
                                >
                                    <div className="mono-label" style={{ marginBottom: "var(--space-xs)" }}>
                                        GITHUB:
                                    </div>
                                    <a
                                        href={contactInfo.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mono-value"
                                        style={{ fontSize: "0.85rem", textDecoration: "none" }}
                                    >
                                        {contactInfo.github.replace("https://", "")}
                                    </a>
                                </div>

                                {/* Preferred Method */}
                                <div className="mono-label" style={{ marginTop: "var(--space-sm)" }}>
                                    PREFERRED_METHOD: <span className="mono-value">{contactInfo.preferredMethod.toUpperCase()}</span>
                                </div>
                            </div>
                        </div>
                    </StaggerItem>

                    {/* Contact Form */}
                    <StaggerItem>
                        <div>
                            <h2
                                style={{
                                    marginBottom: "var(--space-base)",
                                    paddingBottom: "var(--space-md)",
                                    borderBottom: "1px solid var(--color-border)",
                                    fontSize: "1.2rem",
                                }}
                            >
                                TRANSMISSION_FORM
                            </h2>

                            {submitted ? (
                                <div
                                    style={{
                                        border: "1px solid var(--color-accent-primary)",
                                        padding: "var(--space-xl)",
                                        textAlign: "center",
                                    }}
                                >
                                    <div
                                        className="mono-value"
                                        style={{
                                            fontSize: "1rem",
                                            marginBottom: "var(--space-md)",
                                        }}
                                    >
                                        TRANSMISSION_SENT ✓
                                    </div>
                                    <p
                                        className="mono-label"
                                        style={{ fontSize: "0.75rem" }}
                                    >
                                        CONNECTION_REQUEST QUEUED. RESPONSE_TIME: &lt;24H.
                                    </p>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "var(--space-base)",
                                    }}
                                >
                                    <div>
                                        <label htmlFor="name" style={labelStyle}>
                                            SENDER_NAME:
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            style={inputStyle}
                                            onFocus={(e) => {
                                                e.currentTarget.style.borderColor = "var(--color-accent-primary)";
                                            }}
                                            onBlur={(e) => {
                                                e.currentTarget.style.borderColor = "var(--color-border)";
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" style={labelStyle}>
                                            RETURN_ADDRESS:
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            style={inputStyle}
                                            onFocus={(e) => {
                                                e.currentTarget.style.borderColor = "var(--color-accent-primary)";
                                            }}
                                            onBlur={(e) => {
                                                e.currentTarget.style.borderColor = "var(--color-border)";
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" style={labelStyle}>
                                            SUBJECT_LINE:
                                        </label>
                                        <input
                                            id="subject"
                                            type="text"
                                            required
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            style={inputStyle}
                                            onFocus={(e) => {
                                                e.currentTarget.style.borderColor = "var(--color-accent-primary)";
                                            }}
                                            onBlur={(e) => {
                                                e.currentTarget.style.borderColor = "var(--color-border)";
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" style={labelStyle}>
                                            MESSAGE_BODY:
                                        </label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            style={{
                                                ...inputStyle,
                                                resize: "vertical",
                                            }}
                                            onFocus={(e) => {
                                                e.currentTarget.style.borderColor = "var(--color-accent-primary)";
                                            }}
                                            onBlur={(e) => {
                                                e.currentTarget.style.borderColor = "var(--color-border)";
                                            }}
                                        />
                                    </div>

                                    <Button variant="primary" type="submit" fullWidth>
                                        TRANSMIT_MESSAGE →
                                    </Button>
                                </form>
                            )}
                        </div>
                    </StaggerItem>
                </div>
            </PageTransition>
        </div>
    );
}
