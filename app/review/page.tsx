'use client'
import { NextPage } from 'next'
import React, { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { CheckCircle2Icon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle, } from "@/components/ui/alert"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from 'next/image'
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// TYPES ========================================================================================================================================================================================================================
interface PropsType {
  data?: any
}


// COMPONENT ========================================================================================================================================================================================================================
const ReviewPage: NextPage<PropsType> = () => {
  // STATES
  const [isShowAlert, setIsShowAlert] = useState(false)
  const [isShowCard, setIsShowCard] = useState(false)
  const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 5, 12))

  // FUNCTIONS
  function alertShowHandler() {
    setIsShowAlert(true)
    setTimeout(() => {
      setIsShowAlert(false)
    }, 1500);
  }
  // RETURN 
  return (
    <section className='w-screen py-6 center flex-col gap-6 relative'>
      {/* ACCORDION */}
      <Accordion type="single" collapsible className='border-2 border-zinc-800 rounded-xl px-4 min-w-82 gap-y-2 transition-all duration-300'>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Can I use Shad_Cn ? </AccordionTrigger>
          <AccordionContent>
            YES ! OF COURSE !
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {/* ALERT DIALOG */}
      <AlertDialog>
        <AlertDialogTrigger className='border-2 border-zinc-800 px-6 py-3 rounded-xl hover:bg-zinc-200 hover:text-zinc-800 hover:border-zinc-400 transition-all duration-300 cursor-pointer'>Open</AlertDialogTrigger>
        <AlertDialogContent className='bg-zinc-900 border-zinc-700'>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className='bg-red-900 border-red-950 cursor-pointer'>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={alertShowHandler} className='bg-zinc-200 border-zinc-400 text-zinc-900 hover:text-white hover:bg-emerald-900 cursor-pointer'>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {/* ALERT */}
      {isShowAlert &&
        <Alert className='absolute right-10 bottom-30  w-fit bg-emerald-900/30 border-emerald-900 text-zinc-200 leading-8'>
          <CheckCircle2Icon className='!size-7 -translate-x-2 !translate-y-3.5' />
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is an alert with icon, title and description.
          </AlertDescription>
        </Alert>
      }
      {/* ASPECT RATIO */}
      <div className='w-48 h-32'>
        <AspectRatio ratio={16 / 9} className='w-fit h-fit'>
          <Image src="/ScreenShot-Tool-20250808130504.png" alt="Image" className="rounded-md" width={200} height={200} />
        </AspectRatio>
      </div>

      {/* BREADCRUMB */}
      <Breadcrumb className='p-4 border-b-2 border-zinc-800'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <BreadcrumbEllipsis className="size-4" />
                <span className="sr-only">Toggle menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Documentation</DropdownMenuItem>
                <DropdownMenuItem>Themes</DropdownMenuItem>
                <DropdownMenuItem>GitHub</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/docs/components">Components</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* CALENDAR */}
      <Calendar
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        className="rounded-lg border shadow-sm bg-black"
      />
      {/* CARD */}
      <Button variant={'black'} className='my-3 border border-zinc-700 hover:bg-zinc-800 transition-all duration-200' onClick={() => setIsShowCard(p => !p)}>TOGGLE CARD</Button>
      {isShowCard &&
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
            <CardAction>
              <Button variant="link">Sign Up</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </CardFooter>
        </Card>
      }


      {/* CONTEXT MENU */}

    </section>
  )
}

export default ReviewPage