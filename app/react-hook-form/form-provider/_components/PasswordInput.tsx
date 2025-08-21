import { Input } from '@/components/ui/input'
import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function PasswordInput() {
  const { register, formState } = useFormContext()
  return (
    <>
      <Input type='password' {...register('password', { min: { value: 5, message: 'MINIMUM IS 5' } })} placeholder='password' />
      {formState.errors.root && <p>{formState.errors.root.message}</p>}
    </>
  )
}

