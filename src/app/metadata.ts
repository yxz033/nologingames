import type { Metadata } from "next";
import { baseTemplate } from "@/lib/seo/templates";

export const metadata: Metadata = {
  ...baseTemplate,
  title: "NoLoginGames - Free Online Games",
  description: "Play free online games without login required",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "NoLoginGames - Free Online Games",
    description: "Play free online games without login required",
    type: "website",
    url: "/",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "NoLoginGames - Free Online Games",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "NoLoginGames - Free Online Games",
    description: "Play free online games without login required",
    images: ["/images/og-default.jpg"]
  }
}; 