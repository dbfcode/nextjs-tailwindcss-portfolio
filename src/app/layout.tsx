import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AppProviders } from "@/components/providers/AppProviders";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/portfolio";
import "./globals.css";

/** Garante SSG em todas as rotas (HTML estático no build). */
export const dynamic = "force-static";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.author}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.author, url: site.url }],
  creator: site.author,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.author,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: site.url,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} mesh-bg min-h-screen antialiased`}
      >
        <AppProviders>
          <Header />
          <main className="mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6">
            {children}
          </main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
