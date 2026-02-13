import { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/constants";
import ExecutionPipelineContent from "./ExecutionPipelineContent";

export const metadata: Metadata = {
    title: PAGE_METADATA.executionPipeline.title,
    description: PAGE_METADATA.executionPipeline.description,
};

export default function ExecutionPipelinePage() {
    return <ExecutionPipelineContent />;
}
