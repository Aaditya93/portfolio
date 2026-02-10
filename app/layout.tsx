import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aaditya Shewale | Full Stack AI Engineer",
  description:
    "Full Stack AI Engineer building intelligent products with LLMs, React, Next.js, Python, and Node.js. Open to remote opportunities.",
  keywords: ["Aaditya Shewale", "AI Engineer", "Full Stack Developer", "LLM", "React", "Next.js", "Python"],
  openGraph: {
    title: "Aaditya Shewale | Full Stack AI Engineer",
    description:
      "Building intelligent products that blend AI with great engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
