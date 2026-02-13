import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO_DEFAULTS } from "@/lib/constants";

// Font Strategy — techstack.md §7, performance-budget.md §2
// Max 2 font families, loaded via next/font (self-hosted at build time)
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SEO_DEFAULTS.defaultTitle,
    template: "%s",
  },
  description: SEO_DEFAULTS.defaultDescription,
  openGraph: {
    title: SEO_DEFAULTS.defaultTitle,
    description: SEO_DEFAULTS.defaultDescription,
    siteName: SEO_DEFAULTS.siteName,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
        <Navigation />
        <main style={{ paddingTop: "56px", minHeight: "100vh" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
