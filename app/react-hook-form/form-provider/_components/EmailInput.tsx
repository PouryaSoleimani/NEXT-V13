import { Input } from '@/components/ui/input'
import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function EmailInput() {
  const { register } = useFormContext()
  return (
    <Input {...register('email')} placeholder='email' />
  )
}

