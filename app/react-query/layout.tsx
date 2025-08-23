//^ LAYOUT.TSX
'use client';
import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 5000 },
  },
});

// COMPONENT
export default function ReactQueryLayout({ children }: { children: ReactElement }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
