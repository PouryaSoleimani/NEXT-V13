"use client"
import axios from 'axios'
import { LoaderIcon } from 'lucide-react'
import React from 'react'
import { BiErrorAlt } from 'react-icons/bi'
import useSWR, { mutate } from 'swr'

const fetcher = () => axios.get('https://fakestoreapi.com/products').then(res => res.data)
function Mutate2() {

  const { data, isLoading, error } = useSWR('https://fakestoreapi.com/products', fetcher)
  console.info('DATA 2 ==>', data)
  function addSingleProduct() {
    const fakeProduct = { id: Date.now(), title: 'FAKE PRODUCT', description: 'DESCRIPTION' }
    axios.post('https://fakestoreapi.com/products', fakeProduct)
    mutate('https://fakestoreapi.com/products', [...data, fakeProduct], false)
  }

  if (isLoading) {
    return (
      <div className='w-screen h-screen flex flex-col gap-6 items-center justify-center'>
        Loading ...
        <LoaderIcon className='size-12 text-rose-700 animate-spin' />
      </div>
    )
  }

  if (error) {
    return (
      <div className='w-screen h-screen flex flex-col gap-6 items-center justify-center'>
        Error !
        <BiErrorAlt className='size-12 bg-rose-700 animate-bounce' />
      </div>
    )
  }

  return (
    <div className='flex flex-col justify-center'>
      <button onClick={addSingleProduct} className='bg-emerald-900 mx-24 mt-4 h-16 w-44 rounded-xl border-4 border-white'>ADD</button>
      <div className='w-[90%] mx-auto my-4 gap-3 grid grid-cols-6 '>
        {data?.map((product: any) => (
          <div key={product.id} className='bg-black  overflow-hidden p-3 border-4 rounded-xl border-rose-700/50'>
            <h1 className='text-center text-rose-600'>{product.title.slice(0, 25)}</h1>
            <p className='mt-5'>{product.description.slice(0, 150)}</p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Mutate2