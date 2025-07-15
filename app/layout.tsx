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

// FONTS
const rajdhani = Rajdhani({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '⬛NEXT____TRAINING⬛',
  description: 'THIS IS A NEXT TRAINING PAGE',
};

// COMPONENT
export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
    <html lang="en">
      <head>{/* <title>THIS IS A NEXT TRAINING PAGE</title> */}</head>

      <body>
        <Toaster position="top-right" reverseOrder={false} />
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <main className='w-full min-h-screen'>
            <Header />
         
            {children}
            <h2 className="bg-blue-800 p-6 text-3xl font-extrabold fixed bottom-0 right-0 w-full text-center z-50">FOOTER</h2>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
