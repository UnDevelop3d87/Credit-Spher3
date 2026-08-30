import "./globals.css";
import React from "react";
import type { Metadata } from "next";

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
        <link rel="apple-touch-icon" href="/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
