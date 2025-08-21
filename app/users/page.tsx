'use client'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import axios from 'axios'
import React from 'react'
import useSWR from 'swr'

const _fetcher = () => axios.get('http://localhost:5000/products/all').then(res => res.data)

function Users() {

  const { data, isLoading, error } = useSWR('http://localhost:5000/products/all', _fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div className='w-screen h-auto grid place-items-center-safe'>
      <Card className='p-7 my-1 grid grid-cols-3 mt-10'>
        {data.length && data?.map((item: any) => (
          <div key={item.id} className='bg-black p-3 rounded-xl size-44  text-center hover:scale-105 duration-500'>
            <CardHeader className='border-b-2 pb-2'>{item.title.toUpperCase()}</CardHeader>
            <CardContent className='flex flex-col justify-center items-center gap-y-5 mt-6'>
              <p className='bg-emerald-800 text-white p-3 rounded-md w-32'>${item.price.toLocaleString()}</p>
              <Badge>{item.category}</Badge>
            </CardContent>
          </div>
        ))}
      </Card>
    </div>
  )
}

export default Users