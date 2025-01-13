import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TapClack | Computer Engineering Resources",
  description: "A collection of engineering resources for developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark h-full w-full" suppressHydrationWarning>
      <body className={`${inter.className} h-full w-full`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
