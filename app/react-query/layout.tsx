//^ LAYOUT.TSX
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider, useQuery, } from '@tanstack/react-query'
import ReactQuery from './page';
const queryClient = new QueryClient()


// FONTS
export const metadata: Metadata = {
  title: '🟧 REACT___QUERY 🟧',
  description: 'REACT QUERY PAGE',
  icons: { icon: '/favicon.ico', }
};

// COMPONENT
export default async function ReactQueryLayout({ children }: { children: ReactElement }) {

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQuery />
    </QueryClientProvider>
  );
}
