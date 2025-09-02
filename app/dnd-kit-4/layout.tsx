//^ LAYOUT.TSX
import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { ReactElement } from "react";

export const metadata: Metadata = {
  title: "🟪 DND___KIT___TEST 🟪",
  description: "THIS IS A DND-KIT TRAINING PAGE",
  icons: { icon: "@/favicon.ico" },
};

// COMPONENT
export default async function DnDLayout({ children }: { children: ReactElement }) {
  return <>{children}</>;
}
