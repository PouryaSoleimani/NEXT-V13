//^ LAYOUT.TSX
import type { Metadata } from "next";
import { ReactElement } from "react";

export const metadata: Metadata = {
  title: "🟦DND___KIT___5🟪",
  description: "THIS IS A DND-KIT TRAINING PAGE",
  icons: { icon: "@/favicon.ico" },
};

// COMPONENT
export default async function DnDLayout5({
  children,
}: {
  children: ReactElement;
}) {
  return <>{children}</>;
}
