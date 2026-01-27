import type { Metadata } from "next";
import { Love_Ya_Like_A_Sister } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import GoogletagManager from "@/components/GTM";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Lenis } from "lenis/react";
import ProgressScroll from "@/components/ProgressScroll";
import CustomCursor from "@/components/CustomCursor";

const loveYaLikeASister = Love_Ya_Like_A_Sister({
  subsets: ["latin"],
  variable: "--font-love",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Nickopusan Guntara – Full-Stack Python & Next.js Developer",
  description:
    "Muhammad Nickopusan Guntara is a full-stack developer specializing in Python, Next.js, automation, and modern web solutions. Building fast, scalable, and efficient websites and automation workflows.",
  icons: {
    icon: "/briefcase.svg",
  },
  openGraph: {
    title:
      "Muhammad Nickopusan Guntara – Full-Stack Python & Next.js Developer",
    description:
      "Muhammad Nickopusan Guntara is a full-stack developer specializing in Python, Next.js, automation, and modern web solutions. Building fast, scalable, and efficient websites and automation workflows.",
    url: "https://www.nickopusan.dev",
    siteName: "Muhammad Nickopusan Guntara",
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Muhammad Nickopusan Guntara",
    "Nickopusan",
    "Guntara",
    "Muhammad Guntara",
    "Python Developer",
    "Next.js Developer",
    "Full-Stack Developer",
    "Web Automation",
    "Automation Developer",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scrollbar-none" lang="en">
      <body
        className={`${loveYaLikeASister.variable} antialiased h-full bg-black selection:bg-gray-900 selection:text-white`}
      >
        <Lenis
          root
          options={{
            lerp: 0.04,
            smoothWheel: true,
            wheelMultiplier: 0.8,
            touchMultiplier: 1.2,
          }}
        >
          <CustomCursor />
          <ProgressScroll />
          <GoogletagManager />
          {children}
          <SpeedInsights />
          <Analytics />
        </Lenis>
      </body>
    </html>
  );
}
