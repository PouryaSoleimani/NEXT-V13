import React from 'react'
import { QueryClient, QueryClientProvider, useQuery, } from '@tanstack/react-query'

const queryClient = new QueryClient()


const ReactQuery = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetch('https://api.github.com/repos/TanStack/query').then((res) => res.json(),),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <section className='screen bg-black'>
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong>{' '}
        <strong>✨ {data.stargazers_count}</strong>{' '}
        <strong>🍴 {data.forks_count}</strong>
      </div>
    </section>
  )
}

export default ReactQuery  