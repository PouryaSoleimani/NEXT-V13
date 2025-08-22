import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';

const useFetchUsers = (page: number) => {
  const QueryClient = useQueryClient();
  return useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetch(`http://localhost:5000/users?_limit=3&_page=${page}`).then((res) => res.json()),
    staleTime: 5000,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchInterval: 5000,
    refetchOnReconnect: true,
    select: (data) => {
      return data.map((item: any) => ({
        ...item,
        name: item.name.toUpperCase(),
        age: '$' + (item.age * 1000).toLocaleString(),
      }));
    },
    initialData: () => {
      const users = QueryClient?.getQueryData(['repoData']);
      console.info(users);
      return users;
    },
  });
};

export default useFetchUsers;
