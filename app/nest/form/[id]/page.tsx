'use client'
import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { Form, FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'

const NestForm = () => {

  const [isEdit, setIsEdit] = useState(true)

  const params = useParams()

  const router = useRouter()

  const _fetcher = () => axios.get(`http://localhost:5000/jojos/${params.id}`).then(res => res.data)

  const { data, mutate } = useSWR(`http://localhost:5000/jojos/${params.id}`, _fetcher)
  const form = useForm({ defaultValues: { firstName: isEdit ? data?.firstName : '', age: isEdit ? data?.age : '' } })

  useEffect(() => {
    if (isEdit) {
      form.setValue('firstName', data?.firstName)
      form.setValue('age', data?.age)
    }
  }, [isEdit])

  console.info('data from edit -->', data)

  async function submitHandler(values: any) {
    if (isEdit) {
      console.info('values edit', values)
      await axios.put(`http://localhost:5000/jojos/${data?.id}`, values).then(res => console.info('RES UPDATE ==>', res.data)).catch(err => err.message)
      await mutate()
      router.push('/nest/')
    } else {
      console.info(values)
      axios.post('http://localhost:5000/jojos/create', values).then(res => console.info('RES ==>', res.data)).catch(err => err.message)
      form.reset()
      router.push('/nest/')
    }
  }

  return (
    <div className='w-screen h-screen grid place-items-center-safe'>
      <Card className='bg-black'>
        <CardHeader>LOGIN</CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitHandler)} className='p-5'>
            <FormField
              name="firstName"
              control={form.control}
              render={({ field }) => (
                <Input {...field} placeholder='first name' className='my-3' />
              )}
            />
            <FormField
              name="age"
              control={form.control}
              render={({ field }) => (<Input type='number' {...field} placeholder='age' />)}
            />
            <Button type="submit" variant={'blue'} className='mt-3 w-full'>Submit</Button>
          </form>
        </Form>
      </Card>
    </div>
  )
}

export default NestForm