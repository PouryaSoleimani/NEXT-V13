import { useQuery } from '@tanstack/react-query'
import React from 'react'

const useFetchUsers = () => {

  return useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetch('http://localhost:5000/users').then((res) => res.json(),),
    staleTime: 5000,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchInterval: 5000,
    refetchOnReconnect: true,
  })
}

export default useFetchUsers