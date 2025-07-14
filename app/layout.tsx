//^ LAYOUT.TSX
import type { Metadata } from 'next';
import './globals.css';
import { Rajdhani } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { Header } from '@/components/Header';
import { NavigationMenu } from '@/components/ui/navigation-menu';

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
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>{/* <title>THIS IS A NEXT TRAINING PAGE</title> */}</head>
      <body className={rajdhani.className}>
        <Header />
        {children}
        <Toaster position="top-right" reverseOrder={false} />
        <h2 className="bg-blue-800 p-6 text-3xl font-extrabold">FOOTER</h2>
      </body>
    </html>
  );
}
