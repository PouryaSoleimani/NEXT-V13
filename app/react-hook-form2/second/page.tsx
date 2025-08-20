'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import toast from 'react-hot-toast'
import { Checkbox } from '@/components/ui/checkbox'


const formSchema = z.object({
  username: z.string().nonempty({ message: 'USERNAME IS REQUIRED' }),
  password: z.string().nonempty({ message: 'PASSWORD IS REQUIRED' }).min(4, { message: 'MIN 4 CHARS' }),
  isAccepted: z.boolean().nonoptional({ message: 'NOT OPTIONAL' })
})

function ReactHookFromSecond() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      isAccepted: false,
    }
  })

  function OnSubmit(values: z.infer<typeof formSchema>) {
    if (values.isAccepted == false) {
      toast.error('PLEASE ACCEPT THE TERMS TO CONTINUE',
        { style: { fontSize: '12px', fontWeight: 900, backgroundColor: '#2c2c2c', color: 'white', border: '1px solid #ccc' } })
      return
    }
    if (values.username.includes('@')) {
      toast.error('INVALID USERNAME',
        { style: { fontSize: '12px', fontWeight: 900, backgroundColor: '#2c2c2c', color: 'white', border: '1px solid #ccc' } })
      return
    }
    console.info("FORM VALUES ==> ", values)
    form.reset()
    toast.success(`<${values.username}> Successfully Registered`,
      { style: { fontSize: '12px', fontWeight: 900, backgroundColor: '#2c2c2c', color: 'white', border: '1px solid #ccc' } })
  }

  return (
    <div className='w-screen h-screen flex flex-col gap-2 items-center justify-center bg-black'>
      <h2 className='bg-neutral-900 border-2 w-96 p-3 rounded-lg text-center'>LOGIN</h2>
      <Form {...form} >
        <form onSubmit={form.handleSubmit(OnSubmit)} className="space-y-8 bg-neutral-900 p-5 rounded-xl border-2 w-96">

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='font-black'>Username</FormLabel>
                <FormControl>
                  <Input type='text' className='!bg-black' placeholder="Username" {...field} />
                </FormControl>
                <FormMessage className='text-xxs text-red-900' />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='font-black'>Password</FormLabel>
                <FormControl>
                  <Input type='password' className='!bg-black' placeholder="Password" {...field} />
                </FormControl>
                <FormMessage className='text-xxs text-red-900' />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="isAccepted"
            render={({ field }) => (
              <FormItem>
                <div className='flex gap-2'>
                  <Checkbox
                    checked={!!field.value}
                    onCheckedChange={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                    ref={field.ref}
                  />
                  <FormLabel className='font-black' htmlFor='check'>I Accept the Terms and Conditions</FormLabel>
                </div>
                <FormDescription className='text-[12px] pl-1'>
                  Please Accept the <span className='text-sky-600'>Terms and Conditions</span> To Continue
                </FormDescription>

                <FormMessage className='text-xxs text-red-900' />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className='block w-full'
            disabled={!!form.formState.errors.isAccepted || !!form.formState.errors.username || !!form.formState.errors.password}
          >
            Submit
          </Button>

        </form>
      </Form>
    </div >
  )
}

export default ReactHookFromSecond