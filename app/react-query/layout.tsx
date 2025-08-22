//^ LAYOUT.TSX
'use client'
import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider, useQuery, } from '@tanstack/react-query'
import ReactQuery from './page';
const queryClient = new QueryClient()


// COMPONENT
export default function ReactQueryLayout({ children }: { children: ReactElement }) {

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQuery />
    </QueryClientProvider>
  );
}
