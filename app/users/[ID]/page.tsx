'use client'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React from 'react'
import useSWR from 'swr'


function SingleUser() {

  const params = useParams()
  const _fetcher = () => axios.get(`http://localhost:5000/employees/${params.ID}`).then(res => res.data)
  const { data, isLoading, error } = useSWR(`http://localhost:5000/employees/${params.ID}`, _fetcher)


  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div className='w-fit mx-auto h-auto grid place-items-center-safe'>
      <Card className='p-7 my-1 grid place-items-center-safe mt-10'>
        <div className='bg-black p-3 rounded-xl size-44  text-center hover:scale-105 duration-500'>
          <CardHeader className='border-b-2 pb-2'>{data.name?.toUpperCase()}</CardHeader>
          <CardContent className='flex flex-col justify-center items-center gap-y-5 mt-6'>
            <p className={cn('text-white px-3 py-1.5 rounded-md w-32', data.role == 'front-end' ? "bg-red-800" : 'bg-blue-800')}>{data.role.toUpperCase()}</p>
          </CardContent>
        </div>

      </Card >
    </div >
  )
}

export default SingleUser