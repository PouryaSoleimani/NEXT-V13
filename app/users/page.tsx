'use client'
import { Card } from '@/components/ui/card'
import axios from 'axios'
import React from 'react'
import useSWR from 'swr'

const _fetcher = () => axios.get('http://localhost:5000/users').then(res => res.data)

function Users() {

  const { data, isLoading, error } = useSWR('http://localhost:5000/users', _fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div className='w-screen h-auto grid place-items-center-safe'>
      <Card className='p-4 my-10'>
        {data.length && data?.map((item: any) => (
          <div key={item.id} className='bg-black p-3 rounded-xl w-32 text-center'>
            <h2>{item.name.toUpperCase()}</h2>
          </div>
        ))}
      </Card>
    </div>
  )
}

export default Users