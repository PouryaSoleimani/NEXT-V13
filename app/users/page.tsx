'use client'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'

const _fetcher = () => axios.get('http://localhost:5000/jojos/all').then(res => res.data)

function Users() {
  const deleter = (id: number) => {
    axios.delete(`http://localhost:5000/jojos/${id}`).then(res => res.data)
    console.info('DELETED', id)
  }
  const { data, isLoading, error } = useSWR('http://localhost:5000/jojos/all/', _fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div className='w-screen h-auto grid place-items-center-safe'>
      <Card className='p-7 my-1 grid grid-cols-4 mt-10'>
        {data.length && data?.map((item: any) => (
          <div key={item.id} className='bg-black p-3 rounded-xl size-44  text-center hover:scale-105 duration-500'>
            <CardHeader className='border-b-2 pb-2'>{item.name.toUpperCase()}</CardHeader>
            <CardContent className='flex flex-col justify-center items-center gap-y-5 mt-6'>
              <p className={cn('text-white px-3 py-1.5 rounded-md w-32', item.role == 'front-end' ? "bg-red-800" : 'bg-blue-800')}>{item.age.toString().toUpperCase()}</p>
              <Button variant={'red'} onClick={() => deleter(item.id)} className='w-full'>DELETE</Button>
            </CardContent>
          </div >
        ))}
      </Card>
    </div>
  )
}

export default Users