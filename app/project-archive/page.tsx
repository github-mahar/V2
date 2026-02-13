import { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/constants";
import ProjectArchiveContent from "./ProjectArchiveContent";

export const metadata: Metadata = {
    title: PAGE_METADATA.projectArchive.title,
    description: PAGE_METADATA.projectArchive.description,
};

export default function ProjectArchivePage() {
    return <ProjectArchiveContent />;
}
