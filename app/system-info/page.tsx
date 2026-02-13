import { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/constants";
import SystemInfoContent from "./SystemInfoContent";

export const metadata: Metadata = {
    title: PAGE_METADATA.systemInfo.title,
    description: PAGE_METADATA.systemInfo.description,
};

export default function SystemInfoPage() {
    return <SystemInfoContent />;
}
