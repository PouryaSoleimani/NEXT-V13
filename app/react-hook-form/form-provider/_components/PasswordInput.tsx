import { Input } from '@/components/ui/input'
import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function PasswordInput() {
  const { register, formState, watch } = useFormContext()
  const passValue = watch('password')
  return (
    <>
      <Input type='password' {...register('password')} placeholder='password' />
      {formState.errors.password && <p className='text-red-800 text-xs pl-1 m-0'>{formState.errors?.password.message as any}</p>}
      {<p className='text-xs pl-1'>{passValue}</p>}
    </>
  )
}

