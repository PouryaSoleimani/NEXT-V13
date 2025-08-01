'use client'
import axios from 'axios'
import { LoaderCircle } from 'lucide-react'
import React from 'react'
import useSWR from 'swr'

const fetcher = (url: string) => axios.get(url).then(res => res.data)

function SwrPage() {

  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  console.info('SWR ==>', data)

  if (isLoading) return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <LoaderCircle className='size-12 animate-spin' />
    </div>)
  if (error) return <div>Error loading data</div>

  return (
    <div className='bg-black p-4 rounded-md my-6 w-[90%] mx-auto shadow'>
      <h1 className='w-full px-4 text-start bg-orange-600/50 text-2xl font-bold border-b-4 border-white  py-4 rounded-md'>Posts</h1>
      {data?.slice(0, 5).map((post: any) => (
        <div key={post.id} className='p-2 font-mono font-semibold text-lg border-b'>
          <h3>{post.id}. {post.title.slice(0, 20)}</h3>
          <p>{post.body.slice(0, 20)}</p>
        </div>
      ))}
    </div>
  )
}

export default SwrPage