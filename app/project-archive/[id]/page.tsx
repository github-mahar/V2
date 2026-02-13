import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import ProjectDetailContent from "./ProjectDetailContent";

interface ProjectDetailPageProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return { title: "PROJECT_NOT_FOUND" };
    }

    return {
        title: `${project.name.toUpperCase()} // PROJECT_DETAIL`,
        description: project.description,
    };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return <ProjectDetailContent project={project} />;
}
