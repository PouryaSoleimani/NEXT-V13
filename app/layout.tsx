//^ LAYOUT.TSX
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { cookies } from "next/headers";
import { ReactElement } from "react";
import { Header } from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme/theme-provider";

// FONTS

export const metadata: Metadata = {
  title: "⬛NEXT____TRAINING⬛",
  description: "THIS IS A NEXT TRAINING PAGE",
  icons: { icon: "@/favicon.ico" },
};

// COMPONENT
export default async function RootLayout({ children }: { children: ReactElement }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <html suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2c2c2c" />
        <link rel="apple-touch-icon" href="/favicon-32x32.png" />
        <link rel="preload" href="/api/data" as="fetch" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Toaster position="top-right" reverseOrder={false} />
          <SidebarProvider defaultOpen={defaultOpen}>
            <main className="w-full min-h-screen font-bold">
              <Header />
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
