//^ LAYOUT.TSX
import type { Metadata } from 'next';
import './globals.css';
import { Rajdhani } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { Header } from '@/components/Header';
import { NavigationMenu } from '@/components/ui/navigation-menu';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/SideBar';
import { cookies } from 'next/headers';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { ReactElement } from 'react';

// FONTS
const rajdhani = Rajdhani({ weight: ['400', '700'], style: ['normal'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: '⬛NEXT____TRAINING⬛',
  description: 'THIS IS A NEXT TRAINING PAGE',
  icons: { icon: '/favicon-32x32.png', }
};

// COMPONENT
export default async function RootLayout({ children }: { children: ReactElement }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';

  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="preload" href="/api/data" as="fetch" crossOrigin="anonymous" />
      </head>
      <body className={rajdhani.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Toaster position="top-right" reverseOrder={false} />
          <SidebarProvider defaultOpen={defaultOpen}>
            <div className="w-full h-full">
              <main className="w-full min-h-screen">
                <Header />
                {children}
                <h2 className="bg-blue-800 p-6 text-3xl font-extrabold fixed bottom-0 right-0 w-full text-center z-50">
                  FOOTER
                </h2>
              </main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
