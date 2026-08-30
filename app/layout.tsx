import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import LogoButton from "../components/LogoButton";

export const metadata: Metadata = {
  title: "Credit Sphere",
  description: "CreditSphere — financial health, credit analysis, and AI-powered insights.",
  openGraph: {
    title: "Credit Sphere",
    description: "AI-powered credit insights and financial health tools",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/logo-small.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#020617" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <header className="app-header">
          <LogoButton />
        </header>
        {children}
      </body>
    </html>
  );
}
