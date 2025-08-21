'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash } from 'lucide-react';
import React from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form';

function UseFieldArrayPage() {
  const { control, register, handleSubmit } = useForm();
  const { fields, append, prepend, remove } = useFieldArray({
    name: "user",
    control,
    rules: { required: { value: true, message: 'IT IS REQUIRED' } }
  });
  return (
    <div>
      <form onSubmit={handleSubmit(data => console.log(data))} className='bg-zinc-800 w-1/2 flex flex-col mx-auto my-20'>
        <ul>
          {fields.map((item, index) => (
            <li key={item.id} className='flex gap-2 p-2 m-5 rounded-md bg-black' >
              <Input {...register(`user.${index}.firstName`)} className='w-2/5' placeholder='firstname' />
              <Controller
                render={({ field }) => <Input {...field} className='w-2/5' placeholder='lastname' />}
                name={`user.${index}.lastName`}
                control={control}
              />
              <Button variant={'red'} type="button" onClick={() => remove(index)} className='w-1/5'><Trash /></Button>
            </li>
          ))}
        </ul>
        <div className='flex justify-center py-5 gap-3'>
          <Button type="button" onClick={() => append({ firstName: "", lastName: "" })} className='w-32'> append </Button>
          <Button type="submit" className='w-32'>SUBMIT</Button>
        </div>
      </form>
    </div>
  )
}

export default UseFieldArrayPage