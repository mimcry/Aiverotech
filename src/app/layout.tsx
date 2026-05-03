import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "AiveroTech — AI-First Technology Partner",
  description:
    "AiveroTech is an AI-first technology company that helps businesses design, build, automate, and scale digital products. Web platforms, mobile apps, AI systems, and cloud infrastructure.",
  keywords: [
    "AI",
    "SaaS",
    "web development",
    "mobile apps",
    "automation",
    "cloud",
    "DevOps",
    "Nepal",
    "technology partner",
  ],
  openGraph: {
    title: "AiveroTech — Engineering the Future with AI",
    description:
      "AI-first technology partner for startups and enterprises. We design, build, automate, and scale digital products.",
    type: "website",
    locale: "en_US",
    siteName: "AiveroTech",
  },
  twitter: {
    card: "summary_large_image",
    title: "AiveroTech — AI-First Technology Partner",
    description:
      "AI-first technology partner for startups and enterprises.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
