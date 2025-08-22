import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';

const useFetchUsers = (page: number) => {
  const QueryClient = useQueryClient();
  return useQuery({
    queryKey: ['repoData', page],
    queryFn: () => fetch(`http://localhost:5000/users?_page=${page}&_per_page=3`).then((res) => res.json()),
    // staleTime: 5000,
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
    // refetchInterval: 5000,
    // refetchOnReconnect: true,
    select: (data) => {
      return data?.data.map((item: any) => ({
        ...item,
        name: item.name.toUpperCase(),
        age: '$' + (item.age * 1000).toLocaleString(),
      }));
    },
  });
};

export default useFetchUsers;
