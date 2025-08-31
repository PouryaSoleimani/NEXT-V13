import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const CustomInput = ({ onSubmit }: { onSubmit: any }) => {
  const [input, setInput] = useState('')

  const handleSubmit = () => {
    if (!input) return
    onSubmit(input)
    setInput('')
  }

  return (
    <div className='flex gap-2.5'>
      <input className='border-2 border-neutral-700 rounded-lg p-2.5' type='text' value={input} onChange={e => setInput(e.target.value.toString())} />
      <Button variant={'success'} onClick={handleSubmit}>ADD</Button>
    </div>
  )
}

export default CustomInput