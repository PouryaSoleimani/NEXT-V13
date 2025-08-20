'use client'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import toast from 'react-hot-toast'

type Inputs = { email: string, password: string, }

const schema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z.string().min(6).max(100).nonempty({ message: "Password is required" }),
})

function ReactHookFormPage() {

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.info(data)
    reset()
    toast(`LOGIN INFO  
      email : ${data.email}
      Password :$${data.password}`,
      { style: { fontWeight: 'bold', fontSize: '11px', border: '5px solid cornflowerblue', padding: '5px', whiteSpace: "pre-line" } })
  }

  const emailData = watch('email')

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="black">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email", { required: { value: true, message: 'Email is required' } })}
                />
                {<p className='pl-1 text-xss'>{emailData}</p>}
                {errors.email && <p className="text-red-800 text-xs pl-1">{errors.email.message}</p>}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline" >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  {...register("password",
                    {
                      required: { value: true, message: 'Password is required' },
                      validate: (value) => value.length >= 6 || 'Password must be at least 6 characters long'
                    })}
                />
                {errors.password && <p className="text-red-800 text-xs pl-1">{errors.password.message}</p>}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full mt-5" disabled={!!errors.email?.message && !!errors.password?.message}>
              Login
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default ReactHookFormPage
