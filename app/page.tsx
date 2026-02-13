// HOME PAGE — PRD.md §3.2
// Purpose: Establish identity and system tone
// Must include: Large ALL CAPS headline, monospace subheading,
// Primary CTA (VIEW PROJECTS), Secondary CTA (INITIALIZE_CONNECTION),
// Animated system boot stagger reveal

import { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/constants";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: PAGE_METADATA.home.title,
  description: PAGE_METADATA.home.description,
};

export default function HomePage() {
  return <HomeContent />;
}
