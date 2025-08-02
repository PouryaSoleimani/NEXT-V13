'use client'
import useSWR, { mutate } from 'swr'
import axios from 'axios'
import { LoaderCircle } from 'lucide-react'

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export default function Mutate() {

  const { data, isLoading, error } = useSWR('https://fakestoreapi.com/products', fetcher)

  if (isLoading) return (
    <div className='w-screen h-screen flex flex-col gap-4 items-center justify-center'>
      <p>LOADING ... </p>
      <LoaderCircle className='size-12 animate-spin text-yellow-500' />
    </div>)
  if (error) return <div>خطا در دریافت اطلاعات</div>

  //POST FUNCTION
  const handleAddFakePost = () => {
    const newProduct = { id: Date.now(), title: 'محصول تستی جدید', description: 'TEST DESCRIPTION' }
    axios.post('https://fakestoreapi.com/products', newProduct)
    mutate('https://fakestoreapi.com/products', [...data, newProduct], false)
  }


  // RETURN ==================================================================================================================================================================================
  return (
    <div className='p-4'>
      <h1 className='text-center text-2xl font-semibold bg-black py-5 rounded-xl mb-4 border-b-4 border-yellow-500 font-["Geist Mono"]'>لیست پست‌ها (با mutate)</h1>
      <button className='bg-yellow-500 mx-1 text-lg  text-black px-4 py-3 rounded' onClick={handleAddFakePost}>افزودن پست تستی</button>
      <div className='grid grid-cols-4 gap-3 *:border-4 my-4 *:p-2 *:rounded-md *:bg-black *:shadow-lg *:shadow-black'>
        {data?.map((post: any) => (
          <div key={post.id}>
            <h3 className='text-xl font-bold my-1 text-yellow-500'>{post.title.slice(0, 30)}</h3>
            <p>{post.description.slice(0, 100)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
