"use client";

import { experience } from "@/lib/data";
import PipelineNode from "@/components/PipelineNode";
import { PageTransition, StaggerItem } from "@/components/PageTransition";

export default function ExecutionPipelineContent() {
    return (
        <div className="container-system" style={{ paddingTop: "var(--space-3xl)", paddingBottom: "var(--space-3xl)" }}>
            <PageTransition>
                {/* Page Header */}
                <StaggerItem>
                    <div className="mono-label" style={{ marginBottom: "var(--space-md)", fontSize: "0.7rem" }}>
                        {"> LOADING EXECUTION_PIPELINE..."}
                    </div>
                    <h1 style={{ marginBottom: "var(--space-sm)" }}>EXECUTION_PIPELINE</h1>
                    <div
                        className="mono-label"
                        style={{
                            marginBottom: "var(--space-2xl)",
                            fontSize: "0.7rem",
                        }}
                    >
                        NODES_ACTIVE: <span className="mono-value">{experience.length}</span>
                    </div>
                </StaggerItem>

                {/* Pipeline */}
                <StaggerItem>
                    <div style={{ maxWidth: "600px" }}>
                        {experience.map((entry, index) => (
                            <PipelineNode
                                key={entry.company}
                                company={entry.company}
                                role={entry.role}
                                duration={entry.duration}
                                isCurrent={entry.isCurrent}
                                isLast={index === experience.length - 1}
                            />
                        ))}
                    </div>
                </StaggerItem>
            </PageTransition>
        </div>
    );
}
