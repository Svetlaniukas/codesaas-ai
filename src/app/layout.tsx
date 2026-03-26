import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeSaaS.ai — AI-Powered Code Generation Platform",
  description: "Ship production-ready code 10x faster with AI. From idea to deployment in minutes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
