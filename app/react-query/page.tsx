import React from 'react'
import { QueryClient, QueryClientProvider, useQuery, } from '@tanstack/react-query'
import { Card } from '@/components/ui/card'

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
      <h2 className='text-orange-500 text-2xl font-black'>REACT___QUERY</h2>
      <Card className='p-5 *:rounded-lg w-96'>
        <h1 className='bg-black p-2'>{data.name}</h1>
        <p className='bg-black p-2'>{data.description}</p>
        <strong className='bg-black p-2'>👀 {data.subscribers_count}</strong>{' '}
        <strong className='bg-black p-2'>✨ {data.stargazers_count}</strong>{' '}
        <strong className='bg-black p-2'>🍴 {data.forks_count}</strong>
      </Card>
    </section>
  )
}

export default ReactQuery  