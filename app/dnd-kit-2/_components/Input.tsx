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
    <div className='flex items-center justify-between px-4 py-5 gap-2.5 bg-stone-300 w-[500px] my-3 rounded-xl'>
      <input className='border-2 border-neutral-700 rounded-lg p-2 basis-3/4 bg-white shadow-sm shadow-stone-300' type='text' value={input} onChange={e => setInput(e.target.value.toString())} />
      <Button variant={'black'} onClick={handleSubmit} className='basis-1/4 h-10'>ADD</Button>
    </div>
  )
}

export default CustomInput