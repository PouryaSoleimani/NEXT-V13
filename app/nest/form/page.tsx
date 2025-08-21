'use client'
import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { Form, FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const NestForm = () => {
  const form = useForm({
    defaultValues: { firstName: '', age: '' }
  })

  function submitHandler(values: any) {
    console.info(values)
    axios.post('http://localhost:5000/jojos/create', values).then(res => console.info('RES ==>', res.data)).catch(err => err.message)
    form.reset()
  }
  return (
    <div className='w-screen h-screen grid place-items-center-safe'>
      <Card className='bg-black'>
        <CardHeader>LOGIN</CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitHandler)} className='p-5'>
            <FormField
              name="firstName"
              render={({ field }) => (
                <Input {...field} placeholder='first name' className='my-3' />
              )}
            />
            <FormField
              name="age"
              render={({ field }) => (
                <Input type='number' {...field} placeholder='age' />
              )}
            />
            <Button type="submit" variant={'blue'} className='mt-3 w-full'>Submit</Button>
          </form>
        </Form>
      </Card>
    </div>
  )
}

export default NestForm