'use client'
import axios from 'axios'
import React from 'react'
import useSWR from 'swr'

const fetcher = (url: string) => axios.get(url).then(res => res.data)

function SwrPage() {
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  console.info('SWR ==>', data)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading data</div>

  return (
    <div>
      <h1>Posts</h1>
      {data?.slice(0, 5).map((post: any) => (
        <div key={post.id} className='p-2'>
          <h3>{post.title.slice(0, 20)}</h3>
          <p>{post.body.slice(0, 20)}</p>
        </div>
      ))}
    </div>
  )
}

export default SwrPage