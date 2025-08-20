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
const ToastStyles = { fontSize: '12px', fontWeight: 900, backgroundColor: '#2c2c2c', color: 'white', border: '1px solid #ccc' }

const formSchema = z.object({
  username: z.string().nonempty({ error: 'USERNAME IS REQUIRED' }),
  password: z.string().nonempty({ error: 'PASSWORD IS REQUIRED' }).min(4, { error: 'MIN 4 CHARS' }),
  isAccepted: z.boolean().nonoptional({ error: 'NOT OPTIONAL' }),
  age: z.coerce.number({ error: 'AGE MUST BE A NUMBER' }).min(18, { error: "YOU MUST BE AT LEAST 18" }).max(90, { error: 'SORRY , YOU ARE TOO OLD' }).nullable()
})

function ReactHookFromSecond() {

  type FormSchemaType = z.infer<typeof formSchema>;

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: { username: '', password: '', isAccepted: false, }
  })

  function OnSubmit(values: z.infer<typeof formSchema>) {
    if (values.isAccepted == false) {
      toast.error('PLEASE ACCEPT THE TERMS TO CONTINUE', { style: ToastStyles })
      return
    }
    if (values.username.includes('@')) {
      toast.error('INVALID USERNAME', { style: ToastStyles })
      return
    }
    console.info("FORM VALUES ==> ", values)
    form.reset()
    toast.success(`<${values.username}> Successfully Registered`, { style: ToastStyles })
  }

  return (
    <div className='w-screen max-w-screen h-screen flex flex-col gap-2 items-center justify-center-safe bg-black !overflow-hidden'>
      <h2 className='bg-neutral-100 border-2 w-96 p-3 rounded-lg text-center text-black'>LOGIN</h2>
      <Form {...form} >
        <form onSubmit={form.handleSubmit(OnSubmit)} className="space-y-8 bg-neutral-900 p-5 rounded-xl border-2 w-96">

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='font-black'>Username</FormLabel>
                <FormControl>
                  <Input type='text' className='!bg-black focus:ring' placeholder="Username" {...field} />
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
                  <Input type='password' className='!bg-black focus:ring' placeholder="Password" {...field} />
                </FormControl>
                <FormMessage className='text-xxs text-red-900' />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='age'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='font-black'>Age</FormLabel>
                <FormControl>
                  <Input type='number' className='!bg-black focus:ring' placeholder='Age' {...field} value={field.value ?? ''} />
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
            disabled={!!form.formState.errors.isAccepted || !!form.formState.errors.username || !!form.formState.errors.password} >
            Submit
          </Button>

        </form>
      </Form>
    </div >
  )
}

export default ReactHookFromSecond