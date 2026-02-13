import { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/constants";
import InitializeConnectionContent from "./InitializeConnectionContent";

export const metadata: Metadata = {
    title: PAGE_METADATA.initializeConnection.title,
    description: PAGE_METADATA.initializeConnection.description,
};

export default function InitializeConnectionPage() {
    return <InitializeConnectionContent />;
}
