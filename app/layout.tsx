import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const description =
  "Abdul Wahab is a passionate Full Stack Developer who crafts scalable web applications — from pixel-perfect frontends to powerful backends. Available for freelance, full-time, and remote work.";

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulwahab-portfolio.vercel.app"),
  title: "Abdul Wahab - Full Stack Developer",
  description,
  keywords: [
    "Abdul Wahab",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Web Developer",
    "Freelance Developer",
  ],
  authors: [{ name: "Abdul Wahab", url: "https://github.com/wahabx32" }],
  creator: "Abdul Wahab",
  openGraph: {
    type: "website",
    url: "/",
    title: "Abdul Wahab - Full Stack Developer",
    description,
    siteName: "Abdul Wahab — Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Wahab - Full Stack Developer",
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-base font-sans text-zinc-300 antialiased">
        {children}
      </body>
    </html>
  );
}
