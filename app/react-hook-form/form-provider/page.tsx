'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React, { useEffect } from 'react'
import { useForm, FormProvider, useFormContext } from "react-hook-form"
import CustomInput from './_components/CustomInput'
import EmailInput from './_components/EmailInput'
import PasswordInput from './_components/PasswordInput'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


const schema = z.object({
  name: z.string(),
  data: z.string(),
  age: z.string(),
  email: z.email({ error: 'EMAIL IS NOT VALID' }).nonempty({ error: 'EMAIL IS REQUIRED' }),
  password: z.string().min(5, 'MINIMUN IS 5'),
})
function MyFormProvider() {

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
    }
  })
  const { register, reset } = methods

  const onSubmit = (data: any) => { console.log(data); reset() }


  return (
    <FormProvider {...methods}>
      <div className='w-screen h-screen grid place-items-center'>
        <Card className='p-4'>
          <form onSubmit={methods.handleSubmit(onSubmit)} className='space-y-2'>
            <Input {...register("name")} placeholder='name' />
            <NestedInput />
            <CustomInput />
            <EmailInput />
            <PasswordInput />
            <Button type="submit" variant={'blue'} className='mt-4 block w-full'>SUBMIT</Button>
          </form>
        </Card>
      </div>
    </FormProvider >
  )
}

export default MyFormProvider

function NestedInput() {
  const { register } = useFormContext();
  return <Input {...register("data")} placeholder='data' />;
}


