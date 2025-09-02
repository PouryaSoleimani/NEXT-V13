//^ LAYOUT.TSX
import type { Metadata } from "next";
import { ReactElement } from "react";

export const metadata: Metadata = {
  title: "🟪 DND___KIT___TEST 🟪",
  description: "THIS IS A DND-KIT TRAINING PAGE",
  icons: { icon: "@/favicon.ico" },
};

// COMPONENT
export default async function DnDLayout({ children }: { children: ReactElement }) {
  return (
    <html suppressHydrationWarning className="overflow-hidden">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2c2c2c" />
        <link rel="apple-touch-icon" href="/favicon-32x32.png" />
        <link rel="preload" href="/api/data" as="fetch" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
