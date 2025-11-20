import { NextPage } from 'next'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

// TYPES ========================================================================================================================================================================================================================
interface PropsType {
  data?: any
}


// COMPONENT ========================================================================================================================================================================================================================
const ReviewPage: NextPage<PropsType> = () => {
  return (
    <section className='w-screen h-screen center flex-col gap-4'>
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
            <AlertDialogAction className='bg-zinc-200 border-zinc-400 text-zinc-900 hover:text-white hover:bg-emerald-900 cursor-pointer'>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  )
}

export default ReviewPage