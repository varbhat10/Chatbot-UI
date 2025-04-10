import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OSU Engineering Chatbot",
  description: "AI assistant for Oregon State University's engineering domains",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
} 