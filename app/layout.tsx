import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { profile } from "@/content/portfolio";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mid9t.github.io"),
  title: "Ryu Kakuta — AI Evaluation Engineer",
  description: profile.bio,
  openGraph: {
    title: "Ryu Kakuta — AI Evaluation Engineer",
    description: profile.bio,
    type: "website",
    images: [{ url: profile.ogImage, alt: profile.name }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
