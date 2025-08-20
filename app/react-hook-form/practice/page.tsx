'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import z from 'zod'

const toastStyles = { backgroundColor: 'black', color: 'white', border: '4px solid white', fontWeight: '900' }

const Schema = z.object({
  name: z.string().min(3, { error: 'MIN LENGTH IS 3' }),
  password: z.string().min(3, { error: 'MIN LENGTH IS 3' })
})

function ReactHookFormPractice() {
  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues: {
      name: '',
      password: ''
    }
  })

  function submitHandler(values: z.infer<typeof Schema>) {
    console.info('%c VALUES ==>', 'color:yellow', values)
    form.reset()
    toast.success('REGISTERED', { style: toastStyles })
  }

  return (
    <div className='w-screen h-screen overflow-hidden grid place-items-center-safe'>
      <Card className='bg-black '>
        <CardHeader>
          LOGIN
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submitHandler)} className='flex flex-col gap-y-5'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormControl>
                      <Input type='text' placeholder='Username' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormControl>
                      <Input type='text' placeholder='Password'  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button>SUBMIT</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default ReactHookFormPractice