import { Input } from '@/components/ui/input'
import React from 'react'
import { useFormContext } from 'react-hook-form'

function PasswordInput() {
  const { register } = useFormContext()
  return (
    <Input type='password' />
  )
}

export default PasswordInput