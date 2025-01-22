'use client';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
interface ReactQueryProps {
  children: React.ReactNode;
}

export const ReactQueryProvider = ({ children }: ReactQueryProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
