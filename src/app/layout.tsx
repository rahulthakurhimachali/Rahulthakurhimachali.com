import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const siteUrl = "https://www.rahulthakurhimachali.com";

export const metadata: Metadata = {
  title: "Rahul Thakur Himachali",
  description:
    "React & React Native developer building web and mobile apps with Expo. Cross-platform from one codebase. Shipped apps used by over a million users.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Rahul Thakur Himachali",
    description:
      "React & React Native developer building web and mobile apps with Expo. Cross-platform from one codebase. Shipped apps used by over a million users.",
    url: siteUrl,
    siteName: "Rahul Thakur Himachali",
    images: [
      {
        url: "/_static/og-image.jpg",
        width: 773,
        height: 1024,
        alt: "Rahul Thakur Himachali",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Thakur Himachali",
    description:
      "React & React Native developer building web and mobile apps with Expo. Cross-platform from one codebase. Shipped apps used by over a million users.",
    images: ["/_static/og-image.jpg"],
  },
  verification: {
    google: "I5iMRHwA6z--9N3nqtwecJYMmt-l29_lTgunkff7ssA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`mx-auto min-h-screen max-w-3xl antialiased text-foreground bg-background ${space_grotesk.className}`}
      >
        <ThemeProvider>
          <main className="mx-4 px-2 md:px-0 lg:mx-auto min-h-screen bg-background">
            <Header />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
