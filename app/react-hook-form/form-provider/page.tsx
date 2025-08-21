'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React, { useEffect } from 'react'
import { useForm, FormProvider, useFormContext } from "react-hook-form"
import CustomInput from './_components/CustomInput'
import EmailInput from './_components/EmailInput'

function MyFormProvider() {

  const methods = useForm()
  const { register, reset } = methods

  const onSubmit = (data: any) => { console.log(data); reset() }


  return (
    <FormProvider {...methods}>
      <div className='w-screen h-screen grid place-items-center'>
        <Card className='p-4'>
          <form onSubmit={methods.handleSubmit(onSubmit)} className='space-y-3'>
            <Input {...register("name")} placeholder='name' />
            <NestedInput />
            <CustomInput />
            <EmailInput />
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


