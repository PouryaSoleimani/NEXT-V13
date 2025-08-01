'use client'
import axios from 'axios'
import { LoaderCircle } from 'lucide-react'
import React from 'react'
import useSWR from 'swr'
import useFetchUsers, { SingleUserType } from './_hooks/useFetchUsers'

const fetcher = (url: string) => axios.get(url).then(res => res.data)

function SwrPage() {

  const { data: users, error, isLoading } = useFetchUsers()

  if (isLoading) return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <LoaderCircle className='size-12 animate-spin' />
    </div>)
  if (error) return <div>Error loading data</div>

  return (
    <div className='bg-black p-4 rounded-md my-6 w-[90%] mx-auto shadow'>
      <h1 className='w-full px-4 text-start bg-orange-600/50 text-2xl font-bold border-b-4 border-white  py-4 rounded-md'>Posts</h1>
      {users?.slice(0, 5)?.map((user: SingleUserType) => (
        <div key={user.id} className='p-2 font-mono font-semibold text-lg border-b'>
          <h3>{user.id}. {user.name.firstname} {user.name.lastname}</h3>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  )
}

export default SwrPage