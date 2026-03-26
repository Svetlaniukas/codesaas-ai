import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeSaaS.ai — Technical Due Diligence Platform",
  description: "We prepare your code for investor review. Certified architecture, security & scalability audits by a Full Stack Architect (UCD Dublin, Merit).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
