import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const siteUrl = "https://aiverotech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AiveroTech — AI-First Technology Partner | Nepal",
    template: "%s | AiveroTech",
  },
  description:
    "AiveroTech is an AI-first technology company based in Kathmandu, Nepal. We design, build, automate, and scale digital products — web platforms, mobile apps, AI systems, and cloud infrastructure.",
  keywords: [
    "best IT company in Nepal",
    "best AI company Nepal",
    "AI tech company Nepal",
    "top software company Kathmandu",
    "web development company Nepal",
    "mobile app development Nepal",
    "AI development Nepal",
    "machine learning company Nepal",
    "SaaS development company",
    "software development Kathmandu",
    "Next.js developer Nepal",
    "cloud DevOps Nepal",
    "automation software Nepal",
    "technology partner Nepal",
    "AiveroTech",
    "aivero tech",
    "Nepal tech startup",
    "AI solutions Nepal",
    "enterprise software Nepal",
  ],
  authors: [{ name: "AiveroTech", url: siteUrl }],
  creator: "AiveroTech",
  publisher: "AiveroTech",
  category: "Technology",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "AiveroTech — AI-First Technology Partner",
    description:
      "We design, build, automate, and scale digital products for startups and enterprises. Web platforms, mobile apps, AI systems, and cloud infrastructure from Kathmandu, Nepal.",
    url: siteUrl,
    siteName: "AiveroTech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "AiveroTech — AI-First Technology Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AiveroTech — AI-First Technology Partner",
    description:
      "We design, build, automate, and scale digital products for startups and enterprises.",
    images: ["/logo.png"],
    creator: "@aiverotech",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AiveroTech",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "AI-first technology company helping businesses design, build, automate, and scale digital products.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+977-9860428022",
    contactType: "customer service",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
